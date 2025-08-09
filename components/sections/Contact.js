"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Web3Forms requirements
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "a1f5cea6-b3a5-4a98-bcef-aa34de4d52ed",
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
        subject: `Portfolio contact from ${fd.get("name")}`,
        from_name: fd.get("name"),
        from_email: fd.get("email"),
        botcheck: fd.get("botcheck") || "",
      };

      if (!payload.access_key) {
        throw new Error("Missing Web3Forms access key");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Failed to send");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 snap-start snap-always mt-16 pt-10 border-t border-strong">
  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Hit Me Up!😶‍🌫️</h2>
      <p className="mt-1 text-sm text-foreground/70">Let’s chat! and if you wanna build something together, thats cool too!.</p>

      {/* Form */}
      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Honeypot for bots */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        {/* Left column */}
        <div className="space-y-8">
          <div>
            <label className="block text-xs uppercase tracking-wide text-foreground/60">Name</label>
            <input
              name="name"
              placeholder="Your name"
              required
              className="bg-transparent w-full border-0 border-b border-strong rounded-none px-0 py-2 text-sm outline-none focus:ring-0 placeholder:text-foreground/40"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-foreground/60">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-transparent w-full border-0 border-b border-strong rounded-none px-0 py-2 text-sm outline-none focus:ring-0 placeholder:text-foreground/40"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide text-foreground/60">Contact no. (optional)</label>
            <input
              name="phone"
              type="tel"
              placeholder="+94 71 234 5678"
              className="bg-transparent w-full border-0 border-b border-strong rounded-none px-0 py-2 text-sm outline-none focus:ring-0 placeholder:text-foreground/40"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <label className="block text-xs uppercase tracking-wide text-foreground/60">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={8}
            required
            className="bg-transparent w-full border-0 border-b border-strong rounded-none px-0 py-2 text-sm outline-none focus:ring-0 placeholder:text-foreground/40 min-h-[9rem]"
          />
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full border border-strong px-5 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
          {status === "success" && (
            <p className="mt-3 text-sm text-green-600 dark:text-green-400">Message sent! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
      </form>
    </section>
  );
}
