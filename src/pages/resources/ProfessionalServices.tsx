export default function ProfessionalServices() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <p
          className="text-[#0d946d] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Resources / Support
        </p>
        <h1
          className="font-bold text-6xl md:text-8xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Professional <span className="gradient-text">Services</span>
        </h1>
        <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
          Show Stop&apos;s Professional Services team handles the integration work that your in-house team
          doesn&apos;t have bandwidth for — from initial setup through ongoing maintenance.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Launch Package",
              price: "From $4,500",
              items: [
                "Full API integration setup",
                "Fandom verification wiring",
                "Developer handoff documentation",
                "2-week support window post-launch",
              ],
            },
            {
              title: "Integration Retainer",
              price: "From $1,200/mo",
              items: [
                "Ongoing API maintenance",
                "Vendor changelog monitoring",
                "Monthly check-in calls",
                "Same-day response SLA",
              ],
            },
            {
              title: "Custom Build",
              price: "Quoted per project",
              items: [
                "White-label checkout flows",
                "Custom fandom tier logic",
                "Third-party platform bridges",
                "Dedicated engineering pod",
              ],
            },
          ].map(({ title, price, items }) => (
            <div key={title} className="border border-[#2a2a2a] bg-[#111] p-8 rounded-sm">
              <p
                className="text-white font-bold text-2xl uppercase mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </p>
              <p className="text-[#d9529e] text-sm mb-6">{price}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#0d946d] text-xs mt-1">▸</span>
                    <span className="text-[#888] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border border-[#d9529e]/20 bg-[#d9529e]/5 p-10 rounded-sm text-center">
          <h2
            className="text-white font-bold text-3xl uppercase mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not sure what you need?
          </h2>
          <p className="text-[#888] text-sm mb-6 max-w-lg mx-auto">
            Book a 30-minute scoping call with our solutions team. We&apos;ll assess your stack and
            recommend the right engagement.
          </p>
          <button
            className="px-10 py-3 font-bold uppercase tracking-widest text-white text-sm"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
            }}
          >
            Book a Scoping Call
          </button>
        </div>
      </section>
    </div>
  );
}
