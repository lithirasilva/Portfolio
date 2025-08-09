"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// helper to convert hex color to rgba with alpha
function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.length === 3 ? h[0] + h[0] : h.slice(0, 2), 16);
  const g = parseInt(h.length === 3 ? h[1] + h[1] : h.slice(2, 4), 16);
  const b = parseInt(h.length === 3 ? h[2] + h[2] : h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Skills() {
  const items = [
    { name: "HTML5", color: "#e44d26", src: "/html-5-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <path fill="#e44d26" d="M3 3l1.9 17.1L12 21l7.1-.9L21 3z"/>
        <path fill="#f16529" d="M12 19.2l5.7-.7L19 4H12z"/>
        <path fill="#ebebeb" d="M12 8H8.5l.1 1.5H12zM12 12H8.7l.1 1.5H12z"/>
        <path fill="#fff" d="M12 8h3.5l-.1 1.5H12zM12 12h3.2l-.3 3.7L12 16.2z"/>
      </svg>
    ) },
    { name: "CSS / Tailwind", color: "#38bdf8", src: "/css-3-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 48 48" aria-hidden>
        <path fill="#38bdf8" d="M24 12c-6 0-9.8 3-11.5 9 2.3-3 5-4.2 8.3-3.7 1.8.3 3.1 1.3 4.6 2.6C27.3 22 29.5 24 34 24c6 0 9.8-3 11.5-9-2.3 3-5 4.2-8.3 3.7-1.8-.3-3.1-1.3-4.6-2.6C30.7 14 28.5 12 24 12zm-11.5 15c2.3-3 5-4.2 8.3-3.7 1.8.3 3.1 1.3 4.6 2.6C27.3 31 29.5 33 34 33c6 0 9.8-3 11.5-9-2.3 3-5 4.2-8.3 3.7-1.8-.3-3.1-1.3-4.6-2.6C30.7 27 28.5 25 24 25c-6 0-9.8 3-11.5 9z"/>
      </svg>
    ) },
    { name: "JavaScript", color: "#f7df1e", src: "/javascript-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <rect width="24" height="24" fill="#f7df1e"/>
        <path d="M7 6h2v9.2c0 2.7-1.6 3.8-3.9 3.8-.9 0-1.5-.1-2.1-.4l.3-1.8c.4.1.8.3 1.5.3 1 0 1.8-.5 1.8-2.1zM14 6h2v8.4c0 3.2-1.9 4.5-4.2 4.5-1 0-1.7-.2-2.2-.5l.3-1.9c.4.2.9.3 1.5.3 1.1 0 1.9-.6 1.9-2.4z"/>
      </svg>
    ) },
    { name: "React", color: "#61dafb", src: "/react-javascript-js-framework-facebook-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="2" fill="#61dafb"/>
        <g fill="none" stroke="#61dafb" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10.5" ry="4"/>
          <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ) },
    { name: "Next.js", color: "#000000", src: "/next.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#000"/>
        <path d="M14.5 16V8h1.5v8h-1.5zm-6.5-8h1.6l6.9 10H14.9z" fill="#fff"/>
      </svg>
    ) },
    { name: "Vue.js", color: "#41b883", src: "/vue-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 261.76 226.69" aria-hidden>
        <path fill="#41b883" d="M130.88 0l-32.72 56.64L65.44 0H0l130.88 226.69L261.76 0z"/>
        <path fill="#35495e" d="M130.88 0l32.72 56.64L196.32 0h65.44L130.88 226.69 0 0z"/>
      </svg>
    ) },
    { name: "Flutter", color: "#40c4ff", src: "/flutter-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <path fill="#40c4ff" d="M14.5 12.5L7 20l-3.5-3.5 7.5-7.5z"/>
        <path fill="#01579b" d="M21 7l-6.5 6.5L11 10l6.5-6.5z"/>
      </svg>
    ) },
    { name: "Laravel", color: "#ff2d20", src: "/laravel-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <path fill="#ff2d20" d="M3 4l6 3.5v5L3 9zM9 7.5l6-3.5 6 3.5-6 3.5zM9 13l6-3.5v7L9 20zm12-5.5v7L15 20v-7z"/>
      </svg>
    ) },
    { name: "MongoDB", color: "#13aa52", src: "/mongo-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <path fill="#13aa52" d="M12 2s5 6 5 11-2.5 8-5 9c-2.5-1-5-4-5-9s5-11 5-11z"/>
      </svg>
    ) },
    { name: "SQL", color: "#64748b", src: "/sql-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <ellipse cx="12" cy="5" rx="7" ry="3" fill="#64748b"/>
        <path fill="#64748b" d="M5 5v9c0 1.7 3.1 3 7 3s7-1.3 7-3V5c0 1.7-3.1 3-7 3s-7-1.3-7-3z" opacity=".6"/>
      </svg>
    ) },
    { name: "Firebase", color: "#ffca28", src: "/firebase-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <path fill="#ffa000" d="M5 20L3 6l4-4 3 5z"/>
        <path fill="#f57c00" d="M5 20l7-3 6-12-3-3z"/>
        <path fill="#ffca28" d="M5 20l7-3 4-9-4 4z"/>
      </svg>
    ) },
    { name: "Git & GitHub", color: "#111111", src: "/git-svgrepo-com.svg", icon: (
      <div className="flex items-center gap-1" aria-hidden>
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path fill="#f05133" d="M10 3l1.7 1.7a2 2 0 012.8 0l5.8 5.8a2 2 0 010 2.8l-5.6 5.6a2 2 0 01-2.8 0L5 13.7a2 2 0 010-2.8z"/>
        </svg>
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path fill="#000" d="M12 2C6.5 2 2 6.5 2 12a10 10 0 006.8 9.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.6-.7.2-.7.5-1.1.8-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.7 9.7 0 015.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .5.4.9 1.1.9 2.2v3.2c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z"/>
        </svg>
      </div>
    ) },
    { name: "Figma", color: "#a259ff", src: "/figma-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 128 128" aria-hidden>
        <path fill="#1abcfe" d="M64 8v48h12a24 24 0 0 0 0-48z"/>
        <path fill="#a259ff" d="M64 56H52a24 24 0 1 1 0-48h12z"/>
        <path fill="#f24e1e" d="M64 56V8h12a24 24 0 0 1 0 48z"/>
        <path fill="#ff7262" d="M52 120a24 24 0 0 0 12-44V76H52a24 24 0 1 0 0 44z"/>
        <path fill="#0acf83" d="M76 120a24 24 0 0 1 0-48H64v20a24 24 0 0 0 12 28z"/>
      </svg>
    ) },
    { name: "Miro", color: "#ffd02f", src: "/miro-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <rect width="24" height="24" rx="4" fill="#050038"/>
        <path fill="#ffd02f" d="M7 6h2l-2 6h2l-2 6h-2zM13 6h2l-2 6h2l-2 6h-2zM19 6h2l-2 6h2l-2 6h-2z"/>
      </svg>
    ) },
    { name: "Canva", color: "#00c4cc", src: "/canva-svgrepo-com.svg", icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" aria-hidden>
        <rect width="24" height="24" rx="6" fill="#00c4cc"/>
        <path fill="#fff" d="M6 13c0-2.8 2-5 5-5 3 0 5 2.1 5 5 0 2.8-2 5-5 5-3 0-5-2.2-5-5z"/>
      </svg>
    ) },
  // Newly added by user
  { name: "Java", color: "#f89820", src: "/java-svgrepo-com.svg", icon: null },
  { name: "C#", color: "#512bd4", src: "/c-sharp-svgrepo-com.svg", icon: null },
  { name: "MySQL", color: "#4479A1", src: "/mysql-logo-svgrepo-com.svg", icon: null },
  { name: "Android Studio", color: "#3DDC84", src: "/android-studio-icon.svg", icon: null },
  { name: "IntelliJ IDEA", color: "#000000", src: "/jb-intellij-idea-svgrepo-com.svg", icon: null },
  { name: "Visual Studio", color: "#5C2D91", src: "/visual-studio-svgrepo-com.svg", icon: null },
  { name: "VS Code", color: "#007ACC", src: "/visual-studio-code-svgrepo-com.svg", icon: null },
  { name: "Notion", color: "#000000", src: "/notion-svgrepo-com.svg", icon: null },
  { name: "ClickUp", color: "#7C3AED", src: "/ClickUp_idfty-HNVU_0.svg", icon: null },

  ];

  const container = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } };

  // Build categories
  const byName = Object.fromEntries(items.map((i) => [i.name, i]));
  const frontend = [
    "HTML5",
    "CSS / Tailwind",
    "JavaScript",
    "React",
    "Next.js",
    "Vue.js",
    "Flutter",
  ]
    .map((n) => byName[n])
    .filter(Boolean);
  const backend = [
    "Laravel",
    "Firebase",
    "MongoDB",
    "SQL",
    "MySQL",
    "Java",
    "C#",
  ]
    .map((n) => byName[n])
    .filter(Boolean);
  const tools = [
    "Git & GitHub",
    "Figma",
    "Miro",
    "Canva",
    "Android Studio",
    "IntelliJ IDEA",
    "Visual Studio",
    "VS Code",
    "Notion",
    "ClickUp",
    "Vercel",
    "Windows",
  ]
    .map((n) => byName[n])
    .filter(Boolean);

  return (
    <section id="skills" className="scroll-mt-24 snap-start snap-always">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 space-y-10">
        {/* Frontend */}
        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-foreground/60">Frontend</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6"
          >
            {frontend.map((s) => {
              const hash = Array.from(s.name).reduce((h, ch) => ((h << 5) - h + ch.charCodeAt(0)) | 0, 0) >>> 0;
              const amplitude = 8 + (hash % 7);
              const duration = 3.2 + (hash % 23) * 0.1;
              const delay = ((hash >> 3) % 12) * 0.1;
              return (
                <motion.button
                  key={s.name}
                  type="button"
                  variants={item}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 dark:focus-visible:ring-cyan-400/35"
                  title={s.name}
                  aria-label={s.name}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.22)}, transparent 60%)` }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden dark:block"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.3)}, transparent 60%)` }}
                  />
                  <motion.span
                    className="icon relative z-10 text-foreground/80"
                    aria-hidden
                    animate={{ y: [0, -amplitude, 0] }}
                    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                  >
                    {s.src ? (
                      <Image src={s.src} alt="" aria-hidden width={56} height={56} className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
                    ) : (
                      s.icon
                    )}
                  </motion.span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 z-50 whitespace-nowrap rounded-md bg-white text-neutral-900 dark:bg-neutral-900/90 dark:text-white px-2 py-1 text-[10px] sm:text-xs shadow-lg ring-1 ring-black/10 dark:ring-white/10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-150"
                  >
                    {s.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Backend & Databases */}
        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-foreground/60">Backend & Databases</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6"
          >
            {backend.map((s) => {
              const hash = Array.from(s.name).reduce((h, ch) => ((h << 5) - h + ch.charCodeAt(0)) | 0, 0) >>> 0;
              const amplitude = 8 + (hash % 7);
              const duration = 3.2 + (hash % 23) * 0.1;
              const delay = ((hash >> 3) % 12) * 0.1;
              return (
                <motion.button
                  key={s.name}
                  type="button"
                  variants={item}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 dark:focus-visible:ring-cyan-400/35"
                  title={s.name}
                  aria-label={s.name}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.22)}, transparent 60%)` }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden dark:block"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.3)}, transparent 60%)` }}
                  />
                  <motion.span
                    className="icon relative z-10 text-foreground/80"
                    aria-hidden
                    animate={{ y: [0, -amplitude, 0] }}
                    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                  >
                    {s.src ? (
                      <Image src={s.src} alt="" aria-hidden width={56} height={56} className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
                    ) : (
                      s.icon
                    )}
                  </motion.span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 z-50 whitespace-nowrap rounded-md bg-white text-neutral-900 dark:bg-neutral-900/90 dark:text-white px-2 py-1 text-[10px] sm:text-xs shadow-lg ring-1 ring-black/10 dark:ring-white/10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-150"
                  >
                    {s.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-foreground/60">Tools & Platforms</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6"
          >
            {tools.map((s, idx) => {
              const hash = Array.from(s.name).reduce((h, ch) => ((h << 5) - h + ch.charCodeAt(0)) | 0, 0) >>> 0;
              const amplitude = 8 + (hash % 7);
              const duration = 3.2 + (hash % 23) * 0.1;
              const delay = ((hash >> 3) % 12) * 0.1;
              const bottomStartIdx = tools.length - 3;
              const offsetClass = idx === bottomStartIdx ? "sm:col-start-2 md:col-start-3" : "";
              return (
                <motion.button
                  key={s.name}
                  type="button"
                  variants={item}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative inline-flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 dark:focus-visible:ring-cyan-400/35 ${offsetClass}`}
                  title={s.name}
                  aria-label={s.name}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.22)}, transparent 60%)` }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden dark:block"
                    style={{ background: `radial-gradient(112px circle at 50% 50%, ${hexToRgba(s.color, 0.3)}, transparent 60%)` }}
                  />
                  <motion.span
                    className="icon relative z-10 text-foreground/80"
                    aria-hidden
                    animate={{ y: [0, -amplitude, 0] }}
                    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
                  >
                    {s.src ? (
                      <Image src={s.src} alt="" aria-hidden width={56} height={56} className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
                    ) : (
                      s.icon
                    )}
                  </motion.span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 z-50 whitespace-nowrap rounded-md bg-white text-neutral-900 dark:bg-neutral-900/90 dark:text-white px-2 py-1 text-[10px] sm:text-xs shadow-lg ring-1 ring-black/10 dark:ring-white/10 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-150"
                  >
                    {s.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
