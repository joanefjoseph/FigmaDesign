export default function About() {
  const founders = [
    {
      name: "Maya Osei",
      role: "Co-Founder & CEO",
      bio: "Maya spent a decade as Head of Digital at Atlantic Records before realizing that every major artist she worked with was bleeding fans at the checkout redirect. She left to fix it. Before Atlantic, she ran growth at a Series B fintech and holds an MBA from Wharton.",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Dario Vasquez",
      role: "Co-Founder & CTO",
      bio: "Dario was a principal engineer at Ticketmaster's partner platform team for six years. He built the very APIs Show Stop connects to — and grew frustrated watching organizers struggle with documentation that hadn't been updated since 2018. He left to make the experience what it should have been.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    },
    {
      name: "Priya Menon",
      role: "Co-Founder & COO",
      bio: "Priya has spent 12 years in live event operations, including VP roles at Live Nation and Goldenvoice. She understands exactly what event organizers need operationally and ensures Show Stop's product decisions are grounded in how tours actually run — not how engineers imagine they do.",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Origin story */}
      <section className="px-6 pt-20 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Story
            </p>
            <h1
              className="font-bold text-6xl md:text-7xl text-white uppercase leading-none mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built by people who lived the problem
            </h1>
          </div>
          <div className="space-y-5 pt-2">
            <p className="text-[#ccc] text-base leading-relaxed">
              Show Stop was born from a moment of frustration that everyone in live music has felt
              but no one had fixed. An artist sells out a venue in twelve minutes — but a third of
              fans who clicked &quot;Buy&quot; never completed the purchase because they got bounced
              to an unfamiliar ticketing site.
            </p>
            <p className="text-[#888] text-base leading-relaxed">
              The problem isn&apos;t the ticketing vendors. Ticketmaster and AXS are good at
              processing tickets at scale. The problem is the seam — the jarring moment where a fan
              leaves the artist&apos;s world and enters a generic checkout flow that could be for
              any event, anywhere.
            </p>
            <p className="text-[#888] text-base leading-relaxed">
              We built Show Stop to close that seam. Real tickets, processed by the vendor the
              organizer trusts, delivered entirely within the fan experience the artist designed.
              And for artists with fan clubs or membership programs, we go further: fandom
              membership verification is built directly into the purchase flow, so pre-sales and
              member pricing are handled without friction.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a] border border-[#2a2a2a] rounded-sm overflow-hidden"
        >
          {[
            { value: "2022", label: "Founded" },
            { value: "40+", label: "Events Powered" },
            { value: "1.2M", label: "Tickets Processed" },
            { value: "98.7%", label: "Checkout Completion" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[#111] px-8 py-10 text-center">
              <p
                className="font-bold text-5xl gradient-text mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value}
              </p>
              <p className="text-[#555] text-xs uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <h2
          className="font-bold text-4xl text-white uppercase mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((f) => (
            <div key={f.name} className="border border-[#2a2a2a] bg-[#111] rounded-sm overflow-hidden group">
              <div className="h-56 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p
                  className="text-white font-bold text-2xl uppercase mb-0.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </p>
                <p className="text-[#d9529e] text-xs uppercase tracking-widest mb-4">{f.role}</p>
                <p className="text-[#888] text-sm leading-relaxed">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24 max-w-6xl mx-auto border-t border-[#2a2a2a] pt-16">
        <h2
          className="font-bold text-4xl text-white uppercase mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What we believe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Fans deserve a seamless experience",
              body: "The checkout moment is the most emotionally charged part of the fan journey. It should reinforce the artist's brand, not break from it.",
            },
            {
              title: "Organizers deserve real tools",
              body: "Event organizers have been underserved by off-the-shelf solutions for too long. They need infrastructure that actually fits how they operate.",
            },
            {
              title: "Integration shouldn't require a PhD",
              body: "Our job is to make the complex simple. If an organizer's developer can't ship in a week, we've failed at our product.",
            },
            {
              title: "Real fans come first",
              body: "Fandom verification isn't just a feature — it's a statement of values. We believe the fans who show up early, join the fan club, and attend every tour should get first access.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex gap-5">
              <div
                className="w-1 shrink-0 rounded-full"
                style={{ background: "linear-gradient(180deg, #d9529e, #0d946d)" }}
              />
              <div>
                <p
                  className="text-white font-bold text-lg uppercase mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </p>
                <p className="text-[#888] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
