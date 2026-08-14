import type { Page } from "../navigation";

const enterprisePlan = {
  name: "Enterprise",
  tag: "For major labels, arena tours & platforms",
  features: [
    "2+ vendor integrations",
    "Unlimited ticket volume",
    "Custom fandom verification flows",
    "White-label API",
    "On-site integration support",
    "99.99% SLA",
    "Custom analytics pipeline",
    "Dedicated account team",
  ],
  cta: "Contact Sales",
};

export default function Pricing({ onNavigate }: { onNavigate: (page: Page, sub?: string) => void }) {

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pt-20 pb-12 max-w-6xl mx-auto text-center">
        <p
          className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Simple, Transparent Pricing
        </p>
        <h1
          className="font-bold text-6xl md:text-8xl text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pay for what <span className="gradient-text">you sell</span>
        </h1>
        <p className="text-[#888] text-lg max-w-xl mx-auto mb-10">
          No revenue cuts. No per-ticket fees hidden in fine print. Flat monthly subscriptions based
          on your volume.
        </p>

      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <div
          className="flex flex-col border rounded-sm p-8 md:p-10 relative overflow-hidden"
          style={{
            borderColor: "#d9529e60",
            background: "linear-gradient(160deg, #d9529e10 0%, #0d946d08 100%)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
            }}
          />
          <div
            className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
              color: "white",
            }}
          >
            Enterprise
          </div>

          <p
            className="text-white font-bold text-3xl uppercase mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {enterprisePlan.name}
          </p>
          <p className="text-[#555] text-xs mb-6">{enterprisePlan.tag}</p>

          <div className="mb-8">
            <p
              className="font-bold text-4xl md:text-5xl gradient-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Custom pricing
            </p>
            <p className="text-[#888] text-sm mt-2 max-w-lg">
              A tailored commercial model built around your ticket volume, integration scope, and rollout needs.
            </p>
          </div>

          <ul className="space-y-3 mb-8 flex-1">
            {enterprisePlan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="text-[#0d946d] text-xs mt-1">✓</span>
                <span className="text-[#ccc] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className="w-full md:w-auto px-6 py-3 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
              border: "none",
              color: "white",
            }}
            onClick={() => onNavigate("contact-sales")}
          >
            {enterprisePlan.cta}
          </button>
        </div>

        {/* FAQ strip */}
        <div className="mt-20 border border-[#2a2a2a] bg-[#111] p-10 rounded-sm">
          <h2
            className="text-white font-bold text-3xl uppercase mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Do you take a cut of ticket revenue?",
                a: "No. We charge a flat subscription fee — your revenue is yours. We never touch ticket pricing or add fees for fans.",
              },
              {
                q: "What if I exceed my monthly ticket volume?",
                a: "We'll reach out proactively. You won't get cut off mid-tour. We work with you to upgrade before limits become a problem.",
              },
              {
                q: "Can I switch vendors later?",
                a: "Yes. Our abstraction layer makes vendor switching a configuration change, not a re-integration project.",
              },
              {
                q: "Is there a contract commitment?",
                a: "Monthly plans are month-to-month. Annual plans require a one-year commitment in exchange for the discounted rate.",
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {q}
                </p>
                <p className="text-[#888] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
