"use client";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";

export default function Hero() {
  const hasWave = siteConfig.name?.includes("👋");
  const baseName = hasWave ? siteConfig.name.replace("👋", "").trim() : siteConfig.name;
  return (
  <section id="home" className="text-center sm:text-left grid grid-cols-1 md:grid-cols-[1.25fr_1fr] items-start gap-12 sm:gap-14 snap-start snap-always">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm uppercase tracking-widest text-foreground/60 mb-4 sm:mb-5"
        >
          "Designing Digital Experiences, One Pixel at a Time."
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="display-accent text-4xl sm:text-6xl font-bold tracking-tight flex items-center justify-center sm:justify-start gap-2 mt-2"
        >
          {baseName}
          {hasWave && (
            <motion.span
              aria-hidden
              className="inline-block"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 18, -10, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2 }}
              style={{ transformOrigin: "70% 70%" }}
              title="wave"
            >
              👋
            </motion.span>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 sm:mt-7 text-base sm:text-lg leading-relaxed sm:leading-8 text-foreground/80 max-w-2xl mx-auto sm:mx-0"
        >
          I’m a Com Sci Undergrad with a passion for UI/UX design. I craft user-friendly, visually engaging digital products, and I’m always learning how to make every interaction intuitive and delightful. (more to come soon)
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-foreground/65"
        >
          <li className="rounded-full border border-strong px-3 py-1">Based in {siteConfig.location}</li>
          <li className="rounded-full border border-strong px-3 py-1">Open to opportunities</li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center sm:justify-start"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-3 text-sm font-medium transition hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/45"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-black/[.14] dark:border-white/[.18] px-5 py-3 text-sm font-medium transition hover:bg-black/[.04] dark:hover:bg-white/[.06] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/45 dark:focus-visible:ring-cyan-400/40"
          >
            Lets connect!
          </a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: .1, duration: .6 }} className="order-first md:order-last">
  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border border-black/[.08] dark:border-white/[.145] shadow-sm hover:shadow-md transition bg-gradient-to-b from-black/[.04] to-transparent dark:from-white/[.06]">
          {/* Replace /profile.jpg with your image in /public */}
          <Image src="/avatartion.png" alt={`${siteConfig.name} profile`} fill className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
