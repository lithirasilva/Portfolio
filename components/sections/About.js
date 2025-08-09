"use client";
import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 snap-start snap-always">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>

      <div className="mt-6 grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
        {/* Intro + details (left) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight">
            I design interfaces and build them into fast, accessible products.
          </h3>
          <p className="mt-4 text-foreground/80">
            {siteConfig.title}
          </p>
          {/* Moved details below main text */}
          <ul className="mt-6 space-y-2 text-sm sm:text-base text-foreground/80">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-foreground/60" /> Based in: {siteConfig.location}</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-foreground/60" /> Open to: Internships / Full-time / Freelance</li>
            {siteConfig?.email && (
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-foreground/60" /> Contact: <a className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            )}
          </ul>
        </motion.div>

        {/* Image (right) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="relative w-full max-w-sm md:max-w-md select-none">
            <div className="relative w-full rounded-xl bg-white dark:bg-white text-neutral-900 shadow-2xl p-3 pb-8 -rotate-2 transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src="/user.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
