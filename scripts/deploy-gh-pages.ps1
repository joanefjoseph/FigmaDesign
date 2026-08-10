param(
  [switch]$DryRun,
  [switch]$TimestampedCommitMessage
)

$ErrorActionPreference = "Stop"

function Invoke-Git {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Args
  )

  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "Git command failed: git $($Args -join ' ')"
  }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$repoName = Split-Path -Leaf $repoRoot
$publishDir = Join-Path (Split-Path -Parent $repoRoot) ("$repoName-publish")
$distDir = Join-Path $repoRoot "dist"

$commitMessage = "Deploy site update"
if ($TimestampedCommitMessage) {
  $timestamp = (Get-Date).ToUniversalTime().ToString("yyyy-MM-dd HH:mm:ss 'UTC'")
  $commitMessage = "Deploy site update ($timestamp)"
}

if (-not (Test-Path $distDir)) {
  throw "Build output not found at $distDir. Run npm run build first."
}

Push-Location $repoRoot
try {
  Invoke-Git -Args @("worktree", "prune")

  $worktrees = (& git worktree list --porcelain)
  if ($LASTEXITCODE -ne 0) {
    throw "Unable to list git worktrees."
  }

  $publishDirNormalized = [System.IO.Path]::GetFullPath($publishDir)
  $worktreeRegistered = $false

  foreach ($line in $worktrees) {
    if ($line -like "worktree *") {
      $registeredPath = $line.Substring(9)
      $registeredNormalized = [System.IO.Path]::GetFullPath($registeredPath)
      if ($registeredNormalized -eq $publishDirNormalized) {
        $worktreeRegistered = $true
        break
      }
    }
  }

  if (-not $worktreeRegistered) {
    if ((Test-Path $publishDir) -and -not (Test-Path (Join-Path $publishDir ".git"))) {
      Remove-Item $publishDir -Recurse -Force
    }

    Invoke-Git -Args @("worktree", "add", $publishDir, "gh-pages")
  }

  Push-Location $publishDir
  try {
    Invoke-Git -Args @("rm", "-r", "-f", ".")

    & robocopy $distDir "." /E | Out-Null
    if ($LASTEXITCODE -gt 7) {
      throw "robocopy failed with exit code $LASTEXITCODE"
    }

    Copy-Item (Join-Path $repoRoot "CNAME") "." -Force
    Copy-Item (Join-Path $repoRoot ".gitattributes") "." -Force

    Invoke-Git -Args @("add", "-A")

    $changes = (& git status --porcelain)
    if ($LASTEXITCODE -ne 0) {
      throw "Unable to read git status."
    }

    if (-not $changes) {
      Write-Host "No deploy changes to publish."
      return
    }

    Invoke-Git -Args @("commit", "-m", $commitMessage)

    if ($DryRun) {
      Write-Host "Dry run enabled. Skipping push to origin/gh-pages."
      return
    }

    Invoke-Git -Args @("push", "origin", "gh-pages", "--force-with-lease")
    Write-Host "Deployment complete: origin/gh-pages updated."
  }
  finally {
    Pop-Location
  }
}
finally {
  Pop-Location
}
