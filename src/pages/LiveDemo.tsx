import type { Page } from "../navigation";

const display = { fontFamily: "var(--font-display)" } as const;

const points = [
  ["The story", "A 60-second look at why fans drop off when they're redirected to a third-party checkout."],
  ["The demo", "Tap through a fan's purchase on an artist's own site: verify, pick seats, check out, get your ticket."],
  ["No setup", "Fictional artist and venue. No real tickets and no real payment."],
];

export default function LiveDemo({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const src = `${import.meta.env.BASE_URL}live-demo.html`;
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="px-6 pt-20 pb-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4" style={display}>
            Try It
          </p>
          <h1 className="font-bold text-6xl md:text-7xl text-white uppercase leading-none mb-6" style={display}>
            Buy a ticket <span className="gradient-text">without leaving</span> the site
          </h1>
          <p className="text-[#888] text-lg leading-relaxed mb-8 max-w-lg">
            This is what your fans would experience. Play the story, then tap through a purchase
            built on Show Stop.
          </p>
          <div className="space-y-5 mb-10">
            {points.map(([t, d]) => (
              <div key={t} className="flex gap-4">
                <span className="text-[#0d946d] mt-1">●</span>
                <p className="text-[#888] text-sm leading-relaxed">
                  <span className="text-white font-bold uppercase mr-2" style={display}>{t}</span>
                  {d}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("demo")}
              className="px-8 py-3 font-bold text-sm uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
              style={{ ...display, background: "linear-gradient(90deg, #d9529e 0%, #0d946d 100%)" }}
            >
              Request A Demo
            </button>
            <button
              onClick={() => onNavigate("how-it-works")}
              className="px-8 py-3 font-bold text-sm uppercase tracking-widest text-white border border-[#2a2a2a] hover:border-[#d9529e]/50 transition-colors"
              style={display}
            >
              How It Works
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[400px]">
          <div
            className="rounded-[2rem] p-2 bg-[#111] border border-[#2a2a2a]"
            style={{ boxShadow: "0 0 80px #d9529e22" }}
          >
            <iframe
              title="Show Stop interactive ticket-buying demo"
              src={src}
              loading="lazy"
              className="w-full rounded-[1.5rem] bg-black block"
              style={{ height: "720px", border: 0 }}
            />
          </div>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="block text-center mt-4 text-xs uppercase tracking-widest text-[#666] hover:text-white transition-colors"
          >
            Open full screen ↗
          </a>
        </div>
      </section>
    </div>
  );
}
