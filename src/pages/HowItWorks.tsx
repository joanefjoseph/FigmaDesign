export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <p
          className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Platform Overview
        </p>
        <h1
          className="font-bold text-6xl md:text-8xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How It <span className="gradient-text">Works</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
          Show Stop acts as the intelligent middleware layer between your platform and the world&apos;s leading
          ticketing vendors — so fans never leave your ecosystem to complete a purchase.
        </p>
      </section>

      {/* Diagram */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="border border-[#2a2a2a] bg-[#111] p-8 md:p-14 rounded-sm">
          <h2
            className="text-center text-2xl font-bold text-[#888] uppercase tracking-widest mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Architecture Diagram
          </h2>

          {/* Diagram layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

            {/* Organizer Side */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
              <div
                className="w-full border border-[#2a2a2a] bg-[#1a1a1a] rounded-sm p-5 text-center"
              >
                <div className="text-3xl mb-2">🎤</div>
                <p
                  className="text-white font-bold text-lg uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Event Organizer
                </p>
                <p className="text-[#555] text-xs mt-1">Artist / Label / Venue</p>
              </div>
              <div
                className="w-full border border-[#d9529e]/30 bg-[#d9529e]/5 rounded-sm p-4 text-center"
              >
                <p className="text-[#d9529e] text-xs font-medium uppercase tracking-widest mb-1">
                  Organizer Website
                </p>
                <p className="text-[#888] text-xs">Custom brand experience</p>
              </div>
              <div
                className="w-full border border-[#d9529e]/30 bg-[#d9529e]/5 rounded-sm p-4 text-center"
              >
                <p className="text-[#d9529e] text-xs font-medium uppercase tracking-widest mb-1">
                  Fandom Membership
                </p>
                <p className="text-[#888] text-xs">Verification layer</p>
              </div>
            </div>

            {/* Arrow left */}
            <div className="flex flex-col items-center gap-1 text-[#555] md:flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-16 h-px bg-gradient-to-r from-[#d9529e] to-[#8b5aad]" />
                <span className="text-[10px] text-[#555] mt-1">HTTPS / REST</span>
              </div>
              <div className="md:hidden text-[#555] text-2xl">↓</div>
            </div>

            {/* Show Stop */}
            <div className="flex flex-col items-center w-full md:w-2/5">
              <div
                className="w-full rounded-sm p-8 text-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #d9529e15 0%, #0d946d15 100%)",
                  border: "1px solid #d9529e40",
                }}
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #d9529e 0, #d9529e 1px, transparent 0, transparent 50%)",
                    backgroundSize: "10px 10px",
                  }}
                />
                <p
                  className="gradient-text font-bold text-4xl uppercase mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Show Stop
                </p>
                <p className="text-[#888] text-xs uppercase tracking-widest mb-6">
                  Middleware Layer
                </p>
                <div className="grid grid-cols-2 gap-3 text-left">
                  {[
                    "Unified Ticketing API",
                    "Fandom ID Verification",
                    "Real-time Inventory Sync",
                    "Webhook Event Stream",
                    "Auth & Token Management",
                    "Analytics Pipeline",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-[#0d946d] text-xs mt-0.5">▸</span>
                      <span className="text-[#ccc] text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow right */}
            <div className="flex flex-col items-center gap-1 text-[#555] md:flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-16 h-px bg-gradient-to-r from-[#8b5aad] to-[#0d946d]" />
                <span className="text-[10px] text-[#555] mt-1">Partner API</span>
              </div>
              <div className="md:hidden text-[#555] text-2xl">↓</div>
            </div>

            {/* Vendors */}
            <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
              <div className="w-full border border-[#2a2a2a] bg-[#1a1a1a] rounded-sm p-5 text-center">
                <div className="text-3xl mb-2">🎟</div>
                <p
                  className="text-white font-bold text-lg uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ticketing Vendors
                </p>
                <p className="text-[#555] text-xs mt-1">Via Partner API</p>
              </div>
              <div className="w-full border border-[#0d946d]/30 bg-[#0d946d]/5 rounded-sm p-4 text-center">
                <p className="text-[#0d946d] text-xs font-medium uppercase tracking-widest mb-1">
                  Ticketmaster
                </p>
                <p className="text-[#888] text-xs">Discovery + Commerce API</p>
              </div>
              <div className="w-full border border-[#0d946d]/30 bg-[#0d946d]/5 rounded-sm p-4 text-center">
                <p className="text-[#0d946d] text-xs font-medium uppercase tracking-widest mb-1">
                  AXS
                </p>
                <p className="text-[#888] text-xs">Smart Ticketing Platform</p>
              </div>
            </div>
          </div>

          {/* Flow labels */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#2a2a2a] pt-10">
            {[
              {
                step: "01",
                title: "Fan initiates purchase",
                desc: "A fan visits the artist's own website and clicks to buy a ticket — no redirect, no third-party page.",
              },
              {
                step: "02",
                title: "Show Stop middleware handles it",
                desc: "Our API validates fan identity (optional fandom membership check), then routes the transaction to the correct vendor.",
              },
              {
                step: "03",
                title: "Vendor fulfills the ticket",
                desc: "Ticketmaster or AXS processes the payment and delivers the ticket — all within the organizer's branded flow.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div
                  className="text-5xl font-bold leading-none gradient-text shrink-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step}
                </div>
                <div>
                  <p
                    className="text-white font-bold text-lg uppercase mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </p>
                  <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Support */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p
              className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hands-On Support
            </p>
            <h2
              className="font-bold text-5xl text-white uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We help you ship, not just sign up
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-6">
              Every Show Stop subscription includes dedicated integration support from a member of our
              engineering team. We don&apos;t hand you a PDF and wish you luck.
            </p>
            <p className="text-[#888] text-base leading-relaxed">
              Whether you&apos;re building from scratch or grafting ticket sales into an existing fan portal,
              our team works directly in your codebase to get you live — then stays on retainer to keep
              things running as vendor APIs change.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "⚙️",
                title: "SDK & Code Samples",
                desc: "JavaScript, Python, and PHP SDKs with real event data. Drop in and go.",
              },
              {
                icon: "👩‍💻",
                title: "Dedicated Integration Engineer",
                desc: "Every subscriber gets a named engineer, not a ticket queue.",
              },
              {
                icon: "🔔",
                title: "Vendor API Change Monitoring",
                desc: "We track ticket vendor changelogs so you never wake up to a broken integration.",
              },
              {
                icon: "📊",
                title: "Staging & Production Environments",
                desc: "Full sandbox access for development before you go live with real fans.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 border border-[#2a2a2a] bg-[#111] p-5 rounded-sm hover:border-[#d9529e]/40 transition-colors"
              >
                <div className="text-2xl shrink-0">{icon}</div>
                <div>
                  <p
                    className="text-white font-bold uppercase mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </p>
                  <p className="text-[#888] text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
