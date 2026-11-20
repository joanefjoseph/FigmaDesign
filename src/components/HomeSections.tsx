import { useState } from "react";

const display = { fontFamily: "var(--font-display)" } as const;

function Eyebrow({ children, color = "#d9529e" }: { children: string; color?: string }) {
  return (
    <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ ...display, color }}>
      {children}
    </p>
  );
}

/** "Show Stop math" equation strip */
export function MathStrip() {
  const parts = ["Your Fans", "+", "Our Integration", "=", "More Completed Checkouts"];
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <div className="border border-[#2a2a2a] bg-[#111] rounded-sm py-10 px-6 text-center">
        <Eyebrow color="#0d946d">The Show Stop Math</Eyebrow>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {parts.map((p, i) => (
            <span
              key={i}
              className={`font-bold uppercase leading-none text-3xl md:text-5xl ${
                p.length > 1 ? "text-white" : "gradient-text"
              }`}
              style={display}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  { icon: "🔌", title: "Native Checkout", desc: "Ticket purchase happens inside your site or app. No redirect, no brand hand-off." },
  { icon: "🔄", title: "Live Inventory Sync", desc: "Availability and pricing pulled straight from the primary ticketing vendor's Partner API." },
  { icon: "🔐", title: "Fandom Verification", desc: "Gate pre-sales and member pricing behind verified fan status, inside the purchase flow." },
  { icon: "🗺️", title: "Multi-Venue Events", desc: "Run multi-night, multi-venue on-sales from a single integration." },
  { icon: "🏷️", title: "Roster-Wide Rollout", desc: "Labels deploy once and cover every artist on the roster." },
  { icon: "📊", title: "Conversion Insights", desc: "See where fans drop off in the 30-second purchase window and what brought them there." },
  { icon: "🧩", title: "Embeddable Widgets", desc: "Drop ticket purchasing into an existing website with minimal developer effort." },
  { icon: "🛡️", title: "Auth & Verification", desc: "We manage vendor authentication and request verification so your team doesn't have to." },
];

export function CapabilitiesGrid() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <Eyebrow>Feature Overview</Eyebrow>
      <h2 className="font-bold text-5xl text-white uppercase leading-none mb-12" style={display}>
        Everything you need <br className="hidden md:block" />
        to keep fans <span className="gradient-text">on your stage</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="border border-[#2a2a2a] bg-[#111] p-5 rounded-sm hover:border-[#0d946d]/40 transition-colors group"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <p className="text-white font-bold uppercase mb-2 group-hover:text-[#0d946d] transition-colors" style={display}>
              {title}
            </p>
            <p className="text-[#777] text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Connect", desc: "Link your ticketing vendor account. We handle API authentication." },
  { n: "02", title: "Integrate", desc: "Add Show Stop to your site or app with our API or embed." },
  { n: "03", title: "Go Live", desc: "Fans browse, verify and buy without leaving your world." },
  { n: "04", title: "Learn", desc: "Track conversions and refine your on-sale strategy." },
];

export function GetStartedSteps({ onDemo }: { onDemo: () => void }) {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <Eyebrow color="#0d946d">Getting Started</Eyebrow>
      <h2 className="font-bold text-5xl text-white uppercase leading-none mb-12" style={display}>
        From first call to first sale
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {steps.map(({ n, title, desc }) => (
          <div key={n} className="border-t-2 pt-4" style={{ borderColor: "#d9529e" }}>
            <p className="gradient-text font-extrabold text-4xl mb-2" style={display}>{n}</p>
            <p className="text-white font-bold uppercase text-lg mb-1" style={display}>{title}</p>
            <p className="text-[#777] text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onDemo}
        className="mt-10 text-sm font-bold uppercase tracking-widest text-[#0d946d] hover:text-white transition-colors"
        style={display}
      >
        Book a walkthrough →
      </button>
    </section>
  );
}

const compare = [
  ["Fan leaves your site to buy", "Fan stays on your site"],
  ["Vendor-branded checkout", "Your brand, end to end"],
  ["Pre-sale gating bolted on", "Fandom verification built in"],
  ["Custom API work per vendor", "One integration, handled for you"],
];

export function Comparison() {
  return (
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      <Eyebrow>Why Show Stop</Eyebrow>
      <h2 className="font-bold text-5xl text-white uppercase leading-none mb-12" style={display}>
        Redirects vs. <span className="gradient-text">Show Stop</span>
      </h2>
      <div className="border border-[#2a2a2a] rounded-sm overflow-hidden">
        <div className="grid grid-cols-2 bg-[#111] text-xs uppercase tracking-widest" style={display}>
          <div className="p-4 text-[#777]">The usual way</div>
          <div className="p-4 text-[#d9529e]">With Show Stop</div>
        </div>
        {compare.map(([a, b]) => (
          <div key={a} className="grid grid-cols-2 border-t border-[#1f1f1f] text-sm">
            <div className="p-4 text-[#777]">✕ {a}</div>
            <div className="p-4 text-white">✓ {b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  ["Do I need to switch ticketing providers?", "No. Show Stop sits on top of your primary ticketing vendor's Partner API. Your vendor still processes the tickets."],
  ["How long does integration take?", "We'll scope it on your demo call based on your current setup and vendor."],
  ["Who is Show Stop for?", "Independent artists, record labels, concert promoters and fan club platforms."],
  ["Can I gate pre-sales for my fans?", "Yes. Fandom verification is built into the purchase flow for pre-sales and member pricing."],
  ["Is Show Stop available now?", "We're in early access. Request a demo and we'll tell you what's available today and what's on the roadmap."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 pb-24 max-w-3xl mx-auto">
      <Eyebrow color="#0d946d">FAQ</Eyebrow>
      <h2 className="font-bold text-5xl text-white uppercase leading-none mb-10" style={display}>
        Common questions
      </h2>
      <div className="border-t border-[#2a2a2a]">
        {faqs.map(([q, a], i) => (
          <div key={q} className="border-b border-[#2a2a2a]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full flex justify-between items-center py-5 text-left text-white font-bold uppercase"
              style={display}
            >
              {q}
              <span className="text-[#d9529e] text-xl ml-4">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="text-[#888] text-sm leading-relaxed pb-5">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
