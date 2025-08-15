import { Noto_Sans, Noto_Serif, Playwrite_AU_QLD } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Preloader from "@/components/ui/Preloader";
import BackgroundFX from "@/components/ui/BackgroundFX";
import Footer from "@/components/ui/Footer";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const playwrite = Playwrite_AU_QLD({
  variable: "--font-playwrite",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lithira Silva | Portfolio",
  description: "UI/UX-focused frontend developer and final year CS undergraduate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16 md:scroll-pt-20">
  <body className={`${notoSans.variable} ${notoSerif.variable} ${playwrite.variable} antialiased snap-y snap-mandatory`}>
  <Preloader />
        <BackgroundFX />
        {/* Minimal Header */}
        <header className="sticky top-0 z-50 backdrop-blur border-b border-black/[.06] dark:border-white/[.12] bg-background/70">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
            <a href="#home" className="font-semibold tracking-tight">LS</a>
            <div className="flex items-center gap-2 sm:gap-3 text-sm">
              <a href="#about" className="hidden sm:inline group relative inline-flex items-center px-2 py-1 rounded-md">
                <span className="relative z-10">About</span>
                <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
              </a>
              <a href="#experience" className="hidden sm:inline group relative inline-flex items-center px-2 py-1 rounded-md">
                <span className="relative z-10">Experience</span>
                <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
              </a>
              <a href="#projects" className="hidden sm:inline group relative inline-flex items-center px-2 py-1 rounded-md">
                <span className="relative z-10">Work</span>
                <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
              </a>
              <a href="#contact" className="hidden sm:inline group relative inline-flex items-center px-2 py-1 rounded-md">
                <span className="relative z-10">Contact</span>
                <span aria-hidden className="pointer-events-none absolute -inset-1 rounded-md opacity-0 blur-md transition-opacity duration-300 bg-gradient-to-br from-indigo-500/18 via-fuchsia-500/14 to-cyan-400/18 dark:from-cyan-400/18 dark:via-sky-500/14 dark:to-indigo-500/18 group-hover:opacity-100" />
              </a>
              {/* Social icons */}
              <a
                href="https://github.com/lithirasilva"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="ml-1 inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.76 1.05a9.3 9.3 0 0 1 5.02 0c1.92-1.32 2.76-1.05 2.76-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.89 0 1.36-.01 2.46-.01 2.79 0 .26.18.58.69.48A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lithira-silva/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.83v1.98h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.52c0-1.56-.03-3.57-2.18-3.57-2.19 0-2.52 1.71-2.52 3.46V23h-4V8.5z" />
                </svg>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {children}

  <Footer />
      </body>
    </html>
  );
}
