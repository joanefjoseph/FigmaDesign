const milestones = [
  {
    quarter: "Q3 2025",
    status: "shipped",
    items: [
      { title: "AXS Partner API v3 support", done: true },
      { title: "Fandom tier-based pre-sale windows", done: true },
      { title: "Webhook event stream (beta)", done: true },
    ],
  },
  {
    quarter: "Q4 2025",
    status: "shipped",
    items: [
      { title: "JavaScript SDK v2.0", done: true },
      { title: "Real-time inventory sync", done: true },
      { title: "Staging environment overhaul", done: true },
      { title: "Multi-currency support", done: true },
    ],
  },
  {
    quarter: "Q1 2026",
    status: "in progress",
    items: [
      { title: "Analytics dashboard (subscriber-facing)", done: true },
      { title: "Python SDK GA", done: false },
      { title: "Resale / transfer API integration", done: false },
      { title: "Ticketmaster Presence SDK bridge", done: false },
    ],
  },
  {
    quarter: "Q2 2026",
    status: "upcoming",
    items: [
      { title: "PHP SDK release", done: false },
      { title: "Accessible checkout components library", done: false },
      { title: "Mobile-native SDK (iOS + Android)", done: false },
    ],
  },
  {
    quarter: "Q3 2026",
    status: "upcoming",
    items: [
      { title: "DICE FM integration", done: false },
      { title: "See Tickets integration", done: false },
      { title: "White-label checkout flow builder", done: false },
      { title: "Fraud signal API", done: false },
    ],
  },
];

const statusColors: Record<string, string> = {
  shipped: "#0d946d",
  "in progress": "#d9529e",
  upcoming: "#444",
};

const statusLabels: Record<string, string> = {
  shipped: "Shipped",
  "in progress": "In Progress",
  upcoming: "Upcoming",
};

export default function ProductRoadmap() {
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
          Product <span className="gradient-text">Roadmap</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl">
          Where we&apos;ve been and where we&apos;re headed. Updated quarterly.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#2a2a2a]" />

          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.quarter} className="relative pl-10">
                {/* dot */}
                <div
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#0a0a0a]"
                  style={{ background: statusColors[m.status] }}
                />

                <div className="flex items-center gap-4 mb-4">
                  <p
                    className="text-white font-bold text-2xl uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {m.quarter}
                  </p>
                  <span
                    className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: statusColors[m.status],
                      border: `1px solid ${statusColors[m.status]}40`,
                      background: `${statusColors[m.status]}10`,
                    }}
                  >
                    {statusLabels[m.status]}
                  </span>
                </div>

                <div className="space-y-2">
                  {m.items.map((item) => (
                    <div key={item.title} className="flex items-center gap-3">
                      <span
                        className="text-sm"
                        style={{ color: item.done ? "#0d946d" : "#444" }}
                      >
                        {item.done ? "✓" : "○"}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: item.done ? "#ccc" : "#555" }}
                      >
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
