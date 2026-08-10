import { useState, useRef, useEffect } from "react";
import logoGradient from "@/imports/logo_gradient.png";
import watermarkNoBg from "@/imports/watermark_no_background.png";
import type { Page } from "./navigation";

import Home from "@/pages/Home";
import HowItWorks from "@/pages/HowItWorks";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import ContactForm from "@/components/ContactForm";

import ProfessionalServices from "@/pages/resources/ProfessionalServices";
import ProductRoadmap from "@/pages/resources/ProductRoadmap";
import Careers from "@/pages/resources/Careers";
import Newsroom from "@/pages/resources/Newsroom";
import BecomePartner from "@/pages/resources/BecomePartner";

const resourcesSections = [
  {
    label: "Support",
    color: "#d9529e",
    links: [
      { label: "Get Support", page: "get-support" as Page, desc: "Contact our team" },
      { label: "Professional Services", page: "professional-services" as Page, desc: "Managed integration work" },
    ],
  },
  {
    label: "Company",
    color: "#8b5aad",
    links: [
      { label: "Product Roadmap", page: "product-roadmap" as Page, desc: "What's coming" },
      { label: "Careers", page: "careers" as Page, desc: "Join the team" },
      { label: "Newsroom", page: "newsroom" as Page, desc: "Press & coverage" },
    ],
  },
  {
    label: "Contact",
    color: "#0d946d",
    links: [
      { label: "Contact Sales", page: "contact-sales" as Page, desc: "Talk to our sales team" },
      { label: "Become A Partner", page: "become-partner" as Page, desc: "Invest or pilot early" },
    ],
  },
];

function Nav({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (p: Page) => void;
}) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isResources = [
    "get-support",
    "professional-services",
    "product-roadmap",
    "careers",
    "newsroom",
    "contact-sales",
    "become-partner",
  ].includes(current);

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium uppercase tracking-widest transition-colors cursor-pointer ${
      active ? "text-white" : "text-[#666] hover:text-[#ccc]"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate("home")} className="shrink-0">
          <img src={logoGradient} alt="Show Stop" className="h-8 object-contain" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            className={navLinkClass(current === "how-it-works")}
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => onNavigate("how-it-works")}
          >
            How It Works
          </button>

          {/* Resources dropdown */}
          <div ref={dropRef} className="relative">
            <button
              className={`${navLinkClass(isResources)} flex items-center gap-1`}
              style={{ fontFamily: "var(--font-display)" }}
              onClick={() => setResourcesOpen((v) => !v)}
            >
              Resources
              <svg
                className={`w-3 h-3 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 8L1 3h10L6 8z" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-[#111] border border-[#2a2a2a] rounded-sm shadow-2xl p-6">
                <div className="grid grid-cols-3 gap-6">
                  {resourcesSections.map((section) => (
                    <div key={section.label}>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-3"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: section.color,
                        }}
                      >
                        {section.label}
                      </p>
                      <div className="space-y-2">
                        {section.links.map((link) => (
                          <button
                            key={link.page}
                            className="block text-left w-full group"
                            onClick={() => {
                              onNavigate(link.page);
                              setResourcesOpen(false);
                            }}
                          >
                            <p
                              className="text-[#ccc] text-sm group-hover:text-white transition-colors font-medium"
                              style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.03em" }}
                            >
                              {link.label}
                            </p>
                            <p className="text-[#555] text-xs mt-0.5">{link.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className={navLinkClass(current === "pricing")}
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => onNavigate("pricing")}
          >
            Pricing
          </button>

          <button
            className={navLinkClass(current === "about")}
            style={{ fontFamily: "var(--font-display)" }}
            onClick={() => onNavigate("about")}
          >
            About
          </button>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            className="hidden md:block px-5 py-2 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
            }}
            onClick={() => onNavigate("demo")}
          >
            Request A Demo
          </button>
          <button
            className="md:hidden text-[#888] hover:text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-px bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-px bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-px bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-6 space-y-4">
          {[
            { label: "How It Works", page: "how-it-works" as Page },
            { label: "Pricing", page: "pricing" as Page },
            { label: "About", page: "about" as Page },
          ].map(({ label, page }) => (
            <button
              key={page}
              className="block text-left w-full text-[#ccc] text-base font-medium uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
              onClick={() => {
                onNavigate(page);
                setMobileOpen(false);
              }}
            >
              {label}
            </button>
          ))}
          <div className="border-t border-[#1a1a1a] pt-4 space-y-3">
            <p className="text-xs text-[#555] uppercase tracking-widest">Resources</p>
            {resourcesSections.flatMap((s) => s.links).map((link) => (
              <button
                key={link.page}
                className="block text-left w-full text-[#888] text-sm uppercase tracking-widest"
                style={{ fontFamily: "var(--font-display)" }}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            className="w-full py-3 font-bold uppercase tracking-widest text-white text-sm mt-4"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(90deg, #d9529e, #0d946d)",
            }}
            onClick={() => {
              onNavigate("demo");
              setMobileOpen(false);
            }}
          >
            Request A Demo
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <img src={watermarkNoBg} alt="Show Stop" className="h-16 object-contain mb-4" />
            <p className="text-[#555] text-xs leading-relaxed">
              Real tickets, for real fans.
            </p>
          </div>
          <div>
            <p
              className="text-[#d9529e] text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Product
            </p>
            <div className="space-y-2">
              {[
                { l: "How It Works", p: "how-it-works" as Page },
                { l: "Pricing", p: "pricing" as Page },
                { l: "Product Roadmap", p: "product-roadmap" as Page },
              ].map(({ l, p }) => (
                <button
                  key={p}
                  className="block text-[#555] text-sm hover:text-[#ccc] transition-colors"
                  onClick={() => onNavigate(p)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-[#0d946d] text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Support
            </p>
            <div className="space-y-2">
              {[
                { l: "Get Support", p: "get-support" as Page },
                { l: "Professional Services", p: "professional-services" as Page },
                { l: "Contact Sales", p: "contact-sales" as Page },
              ].map(({ l, p }) => (
                <button
                  key={p}
                  className="block text-[#555] text-sm hover:text-[#ccc] transition-colors"
                  onClick={() => onNavigate(p)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-[#888] text-xs font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Company
            </p>
            <div className="space-y-2">
              {[
                { l: "About", p: "about" as Page },
                { l: "Careers", p: "careers" as Page },
                { l: "Newsroom", p: "newsroom" as Page },
                { l: "Become A Partner", p: "become-partner" as Page },
              ].map(({ l, p }) => (
                <button
                  key={p}
                  className="block text-[#555] text-sm hover:text-[#ccc] transition-colors"
                  onClick={() => onNavigate(p)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">© 2026 Show Stop, Inc. All rights reserved.</p>
          <p className="text-[#444] text-xs">Real tickets, for real fans.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "how-it-works":
        return <HowItWorks />;
      case "pricing":
        return <Pricing onNavigate={navigate} />;
      case "about":
        return <About />;
      case "demo":
        return (
          <div className="min-h-screen bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
              <div className="px-6 pt-20 pb-4">
                <p
                  className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Get Started
                </p>
              </div>
              <ContactForm
                title="Request A Demo"
                subtitle="See Show Stop in action. We'll set up a live walkthrough of the integration and discuss your specific ticketing setup."
                fields={["name", "email", "company", "role", "message"]}
                submitLabel="Request Demo"
              />
            </div>
          </div>
        );
      case "get-support":
        return (
          <div className="min-h-screen bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
              <div className="px-6 pt-20 pb-4">
                <p
                  className="text-[#d9529e] text-sm font-medium uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Resources / Support
                </p>
              </div>
              <ContactForm
                title="Get Support"
                subtitle="Have a technical issue or integration question? Reach our engineering team directly."
                fields={["name", "email", "company", "message"]}
                submitLabel="Submit Support Request"
              />
            </div>
          </div>
        );
      case "contact-sales":
        return (
          <div className="min-h-screen bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
              <div className="px-6 pt-20 pb-4">
                <p
                  className="text-[#0d946d] text-sm font-medium uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Resources / Contact
                </p>
              </div>
              <ContactForm
                title="Contact Sales"
                subtitle="Tell us about your event setup. We'll match you to the right plan and walk you through everything."
                fields={["name", "email", "company", "role", "phone", "message"]}
                submitLabel="Talk to Sales"
              />
            </div>
          </div>
        );
      case "professional-services":
        return <ProfessionalServices />;
      case "product-roadmap":
        return <ProductRoadmap />;
      case "careers":
        return <Careers />;
      case "newsroom":
        return <Newsroom />;
      case "become-partner":
        return <BecomePartner />;
      default:
        return <HowItWorks />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Nav current={page} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
