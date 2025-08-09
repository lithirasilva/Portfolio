"use client";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";

export default function Projects() {
  function onMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  return (
    <section id="projects" className="scroll-mt-24 snap-start snap-always">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
      <p className="mt-2 text-foreground/70">A selection of work showcasing problem solving, UX, and clean code.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            tabIndex={0}
            onMouseMove={onMove}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="group relative rounded-2xl border bg-background/90 p-5 overflow-hidden outline-none transition shadow-sm border-black/[.16] dark:border-white/[.16] hover:shadow-md hover:-translate-y-0.5 focus-visible:shadow-md focus-visible:ring-2 focus-visible:ring-indigo-400/40 dark:focus-visible:ring-cyan-400/35"
          >
            {/* Cursor-reactive glow (light) - indigo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                background:
                  "radial-gradient(420px circle at var(--mx) var(--my), rgba(99,102,241,0.20), transparent 45%)",
              }}
            />
            {/* Dark mode stronger glow (cyan) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden dark:block"
              style={{
                background:
                  "radial-gradient(420px circle at var(--mx) var(--my), rgba(34,211,238,0.28), transparent 45%)",
              }}
            />

            <div className="relative z-10">
              <div className="h-40 rounded-md border border-black/[.12] dark:border-white/[.12] bg-gradient-to-br from-black/[.04] to-transparent dark:from-white/[.06]" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map((tag) => (
                  <span key={tag} className="text-[11px] rounded-full border px-2 py-1 text-foreground/85 border-black/[.16] dark:border-white/[.16]">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm rounded-md border border-strong px-3 py-2 hover:bg-black/[.03] dark:hover:bg-white/[.06] focus-visible:ring-2 focus-visible:ring-indigo-400/40 dark:focus-visible:ring-cyan-400/35"
              >
                View on GitHub →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
