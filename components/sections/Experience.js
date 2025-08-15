"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function Experience() {
  const items = siteConfig.experiences || [];
  const container = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };
  const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="experience" className="scroll-mt-24 snap-start snap-always">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Experience</h2>
      <p className="mt-2 text-foreground/70">A timeline of roles and impact across tech, content, and events.</p>

      <div className="relative mt-6">
        {/* vertical hairline */}
        <div aria-hidden className="absolute left-4 top-0 bottom-0 w-px bg-[color:var(--border-strong)]" />

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6"
        >
          {items.map((exp) => (
            <motion.li
              key={`${exp.role}-${exp.company}-${exp.period}`}
              variants={item}
              className="group relative pl-10"
            >
              {/* node */}
              <span
                aria-hidden
                className="absolute left-[6px] top-2 h-2.5 w-2.5 rounded-full bg-foreground/85 ring-2 ring-[color:var(--border-strong)]"
              />
              <span
                aria-hidden
                className="absolute left-[4px] top-1.5 h-3.5 w-3.5 rounded-full bg-foreground/30 opacity-0 group-hover:opacity-100 animate-ping"
              />

              {/* wrapper with glow overlay */}
              <div className="relative">
                {/* gradient glow shadow (light/dark) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-xl transition-opacity duration-300
                             bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18
                             dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18
                             group-hover:opacity-100"
                />
                <article
                  className="
                    relative z-10 overflow-hidden rounded-2xl border border-black/[.12] dark:border-white/[.14]
                    bg-background/90 p-5 shadow-sm transition-colors duration-200 ease-out
                  "
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {exp.role}
                      {exp.company ? <span className="text-foreground/60 font-normal"> · {exp.company}</span> : null}
                    </h3>
                    <div className="text-xs sm:text-sm text-foreground/60">{exp.period}</div>
                  </div>
                  {(exp.location || exp.type) && (
                    <div className="mt-1 text-xs text-foreground/60">
                      {[exp.location, exp.type].filter(Boolean).join(" · ")}
                    </div>
                  )}
                  {exp.summary ? <p className="mt-3 text-sm text-foreground/80">{exp.summary}</p> : null}
                  {Array.isArray(exp.points) && exp.points.length > 0 ? (
                    <ul className="mt-3 list-disc pl-5 text-sm text-foreground/80 space-y-1">
                      {exp.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  ) : null}
                  {Array.isArray(exp.tags) && exp.tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] rounded-full border px-2 py-1 text-foreground/85 border-black/[.16] dark:border-white/[.16]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
