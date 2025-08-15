import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const pages = [
    { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const socials = [
    { label: "GitHub", href: siteConfig.socials.github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
  ];

  return (
    <footer className="mt-20">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--border-strong)] to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* angled hairline like in reference */}
        <div className="relative h-px mt-2 mb-8">
          <div className="absolute inset-0 rotate-[.5deg] origin-left bg-[color:var(--border-strong)]/90" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 py-8">
          {/* Left: Brand word + copyright */}
          <div className="sm:col-span-4">
            <div className="display-accent text-5xl leading-none select-none">Lithira</div>
            <p className="mt-16 text-xs text-foreground/60">© {new Date().getFullYear()} {siteConfig.name.replace(/\p{Emoji_Presentation}/gu, "").trim()}</p>
          </div>

          {/* Middle: Back to top */}
          <div className="sm:col-span-4 flex items-start justify-center">
            <a href="#home" className="mt-27 text-sm hover:opacity-80">Back to top ↑</a>
          </div>

          {/* Right: Pages + Socials */}
          <div className="sm:col-span-4 flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-12">
            <div>
              <div className="text-lg font-semibold">Pages</div>
              <ul className="mt-2 space-y-1 text-sm">
                {pages.map((p) => (
                  <li key={p.label}>
                    <Link href={p.href} className="group relative inline-flex items-center px-1.5 py-0.5 rounded-md">
                      <span className="relative z-10">{p.label}</span>
                      <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-lg font-semibold">Socials</div>
              <ul className="mt-2 space-y-1 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="group relative inline-flex items-center px-1.5 py-0.5 rounded-md">
                      <span className="relative z-10">{s.label}</span>
                      <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
