import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 299, annual: 249 },
    tag: "For independent artists & small venues",
    features: [
      "1 Ticketing vendor integration",
      "Up to 10,000 tickets/month",
      "Fandom ID verification",
      "Standard SDK access",
      "Email support (48hr response)",
      "Sandbox environment",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 899, annual: 749 },
    tag: "For mid-size labels & multi-venue operators",
    features: [
      "2 Ticketing vendor integrations",
      "Up to 100,000 tickets/month",
      "Fandom ID verification + tiering",
      "Full SDK + webhooks",
      "Dedicated integration engineer",
      "Slack support channel",
      "Staging + production environments",
      "Real-time inventory sync",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    tag: "For major labels, arena tours & platforms",
    features: [
      "Unlimited vendor integrations",
      "Unlimited ticket volume",
      "Custom fandom verification flows",
      "White-label API",
      "On-site integration support",
      "99.99% SLA",
      "Custom analytics pipeline",
      "Dedicated account team",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing({ onNavigate }: { onNavigate: (page: string, sub?: string) => void }) {
  const [annual, setAnnual] = useState(true);

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

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 border border-[#2a2a2a] p-1 rounded-sm">
          <button
            className={`px-5 py-2 text-sm font-medium uppercase tracking-widest transition-colors ${
              !annual ? "bg-[#d9529e] text-white" : "text-[#888] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-5 py-2 text-sm font-medium uppercase tracking-widest transition-colors ${
              annual ? "bg-[#0d946d] text-white" : "text-[#888] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="text-xs opacity-70">— save ~17%</span>
          </button>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col border rounded-sm p-8 relative overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                borderColor: plan.highlight ? "#d9529e60" : "#2a2a2a",
                background: plan.highlight
                  ? "linear-gradient(160deg, #d9529e10 0%, #0d946d08 100%)"
                  : "#111111",
              }}
            >
              {plan.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, #d9529e, #0d946d)",
                  }}
                />
              )}
              {plan.highlight && (
                <div
                  className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "linear-gradient(90deg, #d9529e, #0d946d)",
                    color: "white",
                  }}
                >
                  Most Popular
                </div>
              )}

              <p
                className="text-white font-bold text-3xl uppercase mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {plan.name}
              </p>
              <p className="text-[#555] text-xs mb-6">{plan.tag}</p>

              <div className="mb-8">
                {plan.price.monthly ? (
                  <div className="flex items-end gap-1">
                    <span
                      className="font-bold text-5xl text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-[#555] text-sm mb-2">/mo</span>
                  </div>
                ) : (
                  <p
                    className="font-bold text-4xl gradient-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Custom
                  </p>
                )}
                {plan.price.monthly && annual && (
                  <p className="text-[#0d946d] text-xs mt-1">
                    Billed annually · saves ${(plan.price.monthly - plan.price.annual!) * 12}/yr
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#0d946d] text-xs mt-1">✓</span>
                    <span className="text-[#ccc] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 font-bold text-sm uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{
                  fontFamily: "var(--font-display)",
                  background: plan.highlight
                    ? "linear-gradient(90deg, #d9529e, #0d946d)"
                    : "transparent",
                  border: plan.highlight ? "none" : "1px solid #2a2a2a",
                  color: plan.highlight ? "white" : "#888",
                }}
                onClick={() =>
                  plan.name === "Enterprise"
                    ? onNavigate("resources", "contact-sales")
                    : onNavigate("demo")
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
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
