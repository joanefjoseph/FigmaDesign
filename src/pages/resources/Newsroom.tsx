const articles = [
  {
    outlet: "Music Business Worldwide",
    date: "March 12, 2026",
    title: "Show Stop raises $6M seed round to fix the live music checkout problem",
    excerpt:
      "The New York-based startup has signed its first five major-label clients and processed over one million tickets in the past six months, the company announced today.",
    url: "#",
  },
  {
    outlet: "TechCrunch",
    date: "February 3, 2026",
    title: "Ticketing infrastructure startup Show Stop emerges from stealth",
    excerpt:
      "Founded by veterans of Atlantic Records and Ticketmaster's partner platform team, Show Stop wants to give artists full control over their ticket sales without leaving the table.",
    url: "#",
  },
  {
    outlet: "Billboard",
    date: "January 18, 2026",
    title: "How fan club ticket pre-sales are about to get much less painful",
    excerpt:
      "A handful of startups are taking aim at the clunky fan club verification flow that's plagued artist pre-sales for years. Show Stop is the one actually shipping product.",
    url: "#",
  },
  {
    outlet: "Pollstar",
    date: "December 5, 2025",
    title: "Show Stop named a top 10 live industry startup to watch in 2026",
    excerpt:
      "The annual Pollstar Tech Watch list includes a range of emerging companies across touring, venue, and fan technology sectors.",
    url: "#",
  },
  {
    outlet: "Hypebot",
    date: "November 20, 2025",
    title: "Q&A: Maya Osei on why artists deserve better ticketing infrastructure",
    excerpt:
      "We sat down with Show Stop CEO Maya Osei to talk about the state of ticketing technology, what fans actually care about, and why she left Atlantic Records to do this.",
    url: "#",
  },
  {
    outlet: "The Verge",
    date: "October 8, 2025",
    title: "Can a startup actually fix the nightmare that is concert ticketing?",
    excerpt:
      "Show Stop isn&apos;t trying to replace Ticketmaster. Instead it&apos;s betting that event organizers will pay for better plumbing.",
    url: "#",
  },
];

export default function Newsroom() {
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
          News<span className="gradient-text">room</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl">
          Press coverage and announcements. For media inquiries, contact{" "}
          <a href="mailto:press@showstop.io" className="text-[#d9529e] hover:underline">
            press@showstop.io
          </a>
        </p>
      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-0">
        {articles.map((a, i) => (
          <a
            key={a.title}
            href={a.url}
            className={`block py-8 border-b border-[#2a2a2a] hover:bg-[#111] transition-colors px-4 -mx-4 group ${i === 0 ? "border-t" : ""}`}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-32 shrink-0">
                <p className="text-[#d9529e] text-xs font-bold uppercase tracking-widest mb-1">
                  {a.outlet}
                </p>
                <p className="text-[#555] text-xs">{a.date}</p>
              </div>
              <div>
                <p
                  className="text-white font-bold text-xl uppercase mb-2 group-hover:text-[#d9529e] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {a.title}
                </p>
                <p className="text-[#888] text-sm leading-relaxed">{a.excerpt}</p>
              </div>
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
