import watermark from "@/imports/watermark_no_background.png";
import joaneHeadshot from "@/imports/joane_headshot.jpg";
import type { Page } from "../navigation";

const customers = [
  { name: "Independent Artists", icon: "🎤", desc: "Sell tickets directly through your own site without handing fans off to a third-party checkout." },
  { name: "Record Labels", icon: "🏷️", desc: "Deploy ticketing infrastructure across your entire roster from a single integration." },
  { name: "Concert Promoters", icon: "🎪", desc: "Manage multi-venue, multi-night events with real-time inventory synced directly from your vendor." },
  { name: "Fan Club Platforms", icon: "⭐", desc: "Gate pre-sales and member pricing behind fandom verification — built into the purchase flow, not bolted on." },
];

export default function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-28 max-w-6xl mx-auto overflow-hidden">
        {/* Background watermark */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pointer-events-none select-none opacity-[0.04]">
          <img src={watermark} alt="" className="w-full object-contain" />
        </div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#d9529e]/30 bg-[#d9529e]/08 px-4 py-2 rounded-sm mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#d9529e] animate-pulse"
            />
            <p
              className="text-[#d9529e] text-xs font-bold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Now in early access
            </p>
          </div>

          <h1
            className="font-bold text-7xl md:text-[110px] text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            Real tickets,<br />
            for real{" "}
            <span className="gradient-text">fans.</span>
          </h1>

          <p className="text-[#999] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Show Stop connects event organizers directly to the Partner APIs of Ticketmaster
            and AXS — so ticket sales live inside your platform, and your fans never leave
            your world to buy one.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("demo")}
              className="px-8 py-3.5 font-bold text-sm uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(90deg, #d9529e 0%, #0d946d 100%)",
              }}
            >
              Request A Demo
            </button>
            <button
              onClick={() => onNavigate("how-it-works")}
              className="px-8 py-3.5 font-bold text-sm uppercase tracking-widest text-[#888] border border-[#2a2a2a] hover:border-[#444] hover:text-[#ccc] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Do
            </p>
            <h2
              className="font-bold text-5xl md:text-6xl text-white uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your platform. Their infrastructure. Zero redirects.
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-4">
              Ticketmaster and AXS are excellent at processing tickets at scale. But fans
              know when they&apos;ve been handed off — and that seam costs conversions.
            </p>
            <p className="text-[#888] text-base leading-relaxed mb-8">
              Show Stop is the middleware that closes that seam. We handle the API
              authentication, inventory sync, and checkout routing so your developers
              don&apos;t have to — and your fans never notice the hand-off at all.
            </p>
            <button
              onClick={() => onNavigate("how-it-works")}
              className="text-sm font-bold uppercase tracking-widest text-[#d9529e] hover:text-white transition-colors flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore the architecture <span>→</span>
            </button>
          </div>

          {/* Mini diagram */}
          <div className="border border-[#2a2a2a] bg-[#111] rounded-sm p-8 space-y-3">
            {[
              { label: "Your Platform", sub: "Fan-facing website or app", color: "#d9529e", icon: "🎤" },
              { label: "Show Stop API", sub: "Authentication · Routing · Verification", color: "#8b5aad", icon: "⚡", center: true },
              { label: "Ticketing Vendor", sub: "Ticketmaster · AXS", color: "#0d946d", icon: "🎟" },
            ].map(({ label, sub, color, icon, center }, i) => (
              <div key={label}>
                <div
                  className="flex items-center gap-4 p-4 rounded-sm border"
                  style={{
                    borderColor: `${color}30`,
                    background: `${color}08`,
                  }}
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p
                      className="font-bold text-sm uppercase"
                      style={{ fontFamily: "var(--font-display)", color }}
                    >
                      {label}
                    </p>
                    <p className="text-[#555] text-xs">{sub}</p>
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-4" style={{ background: `linear-gradient(${i === 0 ? "#d9529e, #8b5aad" : "#8b5aad, #0d946d"})` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <p
          className="text-[#0d946d] text-sm font-medium uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Who We Serve
        </p>
        <h2
          className="font-bold text-5xl text-white uppercase leading-none mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built for the people <br className="hidden md:block" />who put on the show
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {customers.map(({ name, icon, desc }) => (
            <div
              key={name}
              className="flex gap-5 border border-[#2a2a2a] bg-[#111] p-6 rounded-sm hover:border-[#d9529e]/30 transition-colors group"
            >
              <div className="text-3xl shrink-0">{icon}</div>
              <div>
                <p
                  className="text-white font-bold text-xl uppercase mb-2 group-hover:text-[#d9529e] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {name}
                </p>
                <p className="text-[#777] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="px-6 pb-24 max-w-6xl mx-auto border-t border-[#1a1a1a] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Who We Are
            </p>
            <h2
              className="font-bold text-5xl text-white uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A founder who got tired of the workarounds
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-4">
              Show Stop was founded by Joane Joseph (ex-BuzzFeed), who built the company
              to bring a more seamless, data-driven experience to concert ticketing.
            </p>
            <p className="text-[#888] text-base leading-relaxed mb-8">
              We&apos;re based in New York, remote-first, and obsessed with the 30-second
              window where a fan decides whether to complete a ticket purchase.
            </p>
            <button
              onClick={() => onNavigate("about")}
              className="text-sm font-bold uppercase tracking-widest text-[#0d946d] hover:text-white transition-colors flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet the founder <span>→</span>
            </button>
          </div>

          <div className="w-[10.752rem] max-w-full md:ml-auto group">
            <div className="aspect-square overflow-hidden rounded-sm bg-[#1a1a1a] mb-3">
              <img
                src={joaneHeadshot}
                alt="Joane Joseph"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p
              className="text-white text-sm font-bold uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Joane Joseph
            </p>
            <p className="text-[#d9529e] text-[10px] uppercase tracking-widest">Founder & CEO</p>
            <p className="text-[#444] text-[10px]">ex-BuzzFeed</p>
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div
          className="rounded-sm p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #d9529e18 0%, #0d946d18 100%)", border: "1px solid #d9529e30" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #d9529e 0, #d9529e 1px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />
          <p
            className="relative text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to get started?
          </p>
          <h2
            className="relative font-bold text-5xl text-white uppercase leading-none mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build something <span className="gradient-text">real.</span>
          </h2>
          <p className="relative text-[#888] text-base mb-8 max-w-md mx-auto">
            Book a 30-minute demo and we&apos;ll walk through your current setup and show you
            exactly how Show Stop fits in.
          </p>
          <button
            onClick={() => onNavigate("demo")}
            className="relative px-10 py-4 font-bold text-sm uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e 0%, #0d946d 100%)",
            }}
          >
            Request A Demo
          </button>
        </div>
      </section>
    </div>
  );
}
