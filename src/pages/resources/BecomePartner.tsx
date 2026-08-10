export default function BecomePartner() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <p
          className="text-[#0d946d] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Resources / Contact
        </p>
        <h1
          className="font-bold text-6xl md:text-8xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Become a <span className="gradient-text">Partner</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
          We&apos;re building the infrastructure layer for live event ticketing — and we&apos;re looking for the
          right partners to grow with. Whether you&apos;re an early investor or a platform that wants to
          pilot our technology, we want to talk.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              type: "Angel / Seed Investor",
              color: "#d9529e",
              desc: "We&apos;re at an early stage and actively engaged in conversations with angels and seed funds who have thesis alignment with live entertainment, developer tools, or API infrastructure.",
              bullets: [
                "Access to full pitch deck and financials",
                "Regular investor updates",
                "Invitation to product advisory calls",
                "Right of first refusal in follow-on rounds",
              ],
            },
            {
              type: "Early Technology Partner",
              color: "#0d946d",
              desc: "If you&apos;re an event organizer, fan platform, or venue operator who wants to pilot Show Stop before GA, we offer a structured beta program with white-glove support.",
              bullets: [
                "60-day free pilot",
                "Direct engineering access",
                "Co-development of integration patterns",
                "Preferred pricing for first 12 months post-launch",
              ],
            },
          ].map(({ type, color, desc, bullets }) => (
            <div
              key={type}
              className="border rounded-sm p-8"
              style={{ borderColor: `${color}40`, background: `${color}06` }}
            >
              <p
                className="font-bold text-2xl uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color }}
              >
                {type}
              </p>
              <p className="text-[#888] text-sm leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span style={{ color }} className="text-xs mt-1">▸</span>
                    <span className="text-[#ccc] text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-[#2a2a2a] bg-[#111] p-10 rounded-sm">
          <h2
            className="text-white font-bold text-3xl uppercase mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in touch
          </h2>
          <p className="text-[#888] text-sm mb-8">
            Fill in a few details and the right person on our team will respond within 48 hours.
          </p>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "Full Name", placeholder: "Jane Smith", type: "text" },
              { label: "Email", placeholder: "jane@fund.com", type: "email" },
              { label: "Organization", placeholder: "Acme Ventures", type: "text" },
              { label: "Role", placeholder: "General Partner, CEO, etc.", type: "text" },
            ].map(({ label, placeholder, type }) => (
              <div key={label}>
                <label className="block text-xs font-medium text-[#888] uppercase tracking-widest mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#555] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d9529e] transition-colors"
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-[#888] uppercase tracking-widest mb-2">
                What kind of partnership are you interested in?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your interest — investor, pilot partner, strategic alliance..."
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#555] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d9529e] transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-12 py-3 font-bold uppercase tracking-widest text-white text-sm"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(90deg, #d9529e, #0d946d)",
                }}
              >
                Send Introduction
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
