import { useEffect, useState } from "react";
import { Crosshair } from "../icons";

const links = [
  { href: "#roster", label: "ROSTER" },
  { href: "#protocol", label: "PROTOCOL" },
  { href: "#scoreboard", label: "SCOREBOARD" },
  { href: "#models", label: "MODELS" },
  { href: "#objections", label: "OBJECTIONS" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-all duration-300 ${
        scrolled ? "bg-ink/95 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur" : "bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <Crosshair className="h-7 w-7 text-flare transition-transform duration-500 group-hover:rotate-90" />
          <span className="leading-none">
            <span className="block font-display text-xl tracking-wide text-bone">TOPGUNS</span>
            <span className="block font-mono text-[9px] tracking-[0.34em] text-steel">
              SALES SYNDICATE
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-[11px] tracking-[0.22em] text-steel transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-flare transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#deploy"
            className="border border-flare bg-flare px-5 py-2.5 font-mono text-[11px] font-bold tracking-[0.22em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-flare-2 hover:shadow-[4px_4px_0_rgba(255,77,28,0.35)]"
          >
            DEPLOY →
          </a>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-line transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 font-mono text-xs tracking-[0.22em] text-steel transition-colors hover:text-flare"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#deploy"
              onClick={() => setOpen(false)}
              className="mt-3 bg-flare px-5 py-3 text-center font-mono text-xs font-bold tracking-[0.22em] text-ink"
            >
              DEPLOY →
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
