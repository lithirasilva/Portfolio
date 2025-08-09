import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const pages = [
    { label: "About", href: "#about" },
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
          {/* Brand word (left) */}
          <div className="sm:col-span-6">
            <div className="display-accent text-5xl leading-none select-none">Lithira</div>
          </div>

          {/* Right group: Pages + Socials */}
          <div className="sm:col-span-6 flex flex-col sm:flex-row sm:justify-end gap-6 sm:gap-12">
            <div>
              <div className="serif-accent text-lg font-semibold">Pages</div>
              <ul className="mt-2 space-y-1 text-sm">
                {pages.map((p) => (
                  <li key={p.label}>
                    <Link href={p.href} className="hover:opacity-80 transition">{p.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="serif-accent text-lg font-semibold">Socials</div>
              <ul className="mt-2 space-y-1 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="hover:opacity-80 transition">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom divider */}
        <div className="h-px w-full bg-[color:var(--border-strong)]/80" />
        <div className="py-4 text-xs text-foreground/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name.replace(/\p{Emoji_Presentation}/gu, "").trim()}</span>
          <a href="#home" className="hover:opacity-80">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
