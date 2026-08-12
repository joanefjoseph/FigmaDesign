const openings = [
  // {
  //   title: "Senior Backend Engineer",
  //   team: "Platform",
  //   location: "Remote (US)",
  //   type: "Full-time",
  //   desc: "Build and maintain the core API layer that connects event organizers to ticketing vendors. Strong experience with Node.js, REST API design, and high-throughput systems required.",
  // },
  {
    title: "Integration Engineer",
    team: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    desc: "Work directly in customer codebases to implement Show Stop integrations. You're part engineer, part consultant — comfortable reading unfamiliar stacks and shipping fast.",
  },
  // {
  //   title: "Account Executive",
  //   team: "Sales",
  //   location: "New York, NY or Remote",
  //   type: "Full-time",
  //   desc: "Close deals with mid-market and enterprise event organizers. You know the music industry and can hold a credible technical conversation with both a CTO and a tour manager.",
  // },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <p
          className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Resources / Company
        </p>
        <h1
          className="font-bold text-6xl md:text-8xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Join the <span className="gradient-text">team</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
          We&apos;re a small team doing hard infrastructure work in a loud industry. We move fast, ship
          often, and care deeply about the fans on the other end of our software.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-4">
        {openings.map((job) => (
          <div
            key={job.title}
            className="border border-[#2a2a2a] bg-[#111] p-7 rounded-sm hover:border-[#d9529e]/40 transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <p
                  className="text-white font-bold text-2xl uppercase mb-1 group-hover:text-[#d9529e] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {job.title}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[job.team, job.location, job.type].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#888] px-3 py-1 border border-[#2a2a2a] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#888] text-sm leading-relaxed">{job.desc}</p>
              </div>
              <button
                className="shrink-0 px-6 py-2 text-sm font-bold uppercase tracking-widest border border-[#2a2a2a] text-[#888] hover:border-[#d9529e] hover:text-[#d9529e] transition-colors self-start"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
