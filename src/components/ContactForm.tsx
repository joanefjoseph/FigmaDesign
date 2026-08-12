import { useState } from "react";

interface Web3FormsConfig {
  accessKey: string;
  toEmail?: string;
  subject?: string;
  fromName?: string;
}

interface ContactFormProps {
  title: string;
  subtitle?: string;
  fields?: Array<"name" | "email" | "company" | "role" | "message" | "phone">;
  submitLabel?: string;
  web3Forms?: Web3FormsConfig;
}

export default function ContactForm({
  title,
  subtitle,
  fields = ["name", "email", "company", "message"],
  submitLabel = "Send Message",
  web3Forms,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!web3Forms) {
      setSubmitted(true);
      return;
    }

    setSending(true);

    const payload: Record<string, string> = {
      access_key: web3Forms.accessKey,
      subject: web3Forms.subject || title,
      from_name: web3Forms.fromName || "Show Stop Website",
    };

    if (web3Forms.toEmail) {
      payload.to = web3Forms.toEmail;
    }

    fields.forEach((field) => {
      payload[field] = form[field] || "";
    });

    // Use a common alias for the sender email field when available.
    if (form.email) {
      payload.replyto = form.email;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setSubmitted(true);
      setForm({});
    } catch (submitError) {
      const message = submitError instanceof Error
        ? submitError.message
        : "Unable to send message right now.";
      setError(message);
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white placeholder-[#555] rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[#d9529e] transition-colors";

  const fieldMap: Record<string, { label: string; type: string; placeholder: string }> = {
    name: { label: "Full Name", type: "text", placeholder: "Jane Smith" },
    email: { label: "Email Address", type: "email", placeholder: "jane@yourcompany.com" },
    company: { label: "Company / Organization", type: "text", placeholder: "Acme Events LLC" },
    role: { label: "Your Role", type: "text", placeholder: "CTO, Head of Digital, etc." },
    phone: { label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
    message: { label: "Message", type: "textarea", placeholder: "Tell us about your project..." },
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl mb-6">✓</div>
          <h2 className="font-display font-bold text-4xl text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Message Received
          </h2>
          <p className="text-[#888] text-lg max-w-md mx-auto">
            Thanks for reaching out. Our team will get back to you within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="font-bold text-5xl text-white mb-3 uppercase tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h1>
      {subtitle && <p className="text-[#888] text-base mb-10">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((f) => {
          const fd = fieldMap[f];
          return (
            <div key={f}>
              <label className="block text-xs font-medium text-[#888] uppercase tracking-widest mb-2">
                {fd.label}
              </label>
              {fd.type === "textarea" ? (
                <textarea
                  rows={5}
                  className={inputClass + " resize-none"}
                  placeholder={fd.placeholder}
                  value={form[f] || ""}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  required
                />
              ) : (
                <input
                  type={fd.type}
                  className={inputClass}
                  placeholder={fd.placeholder}
                  value={form[f] || ""}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  required
                />
              )}
            </div>
          );
        })}
        {error && (
          <p className="text-[#d9529e] text-sm" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="w-full py-4 font-bold text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            background: "linear-gradient(90deg, #d9529e 0%, #0d946d 100%)",
          }}
        >
          {sending ? "Sending..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
