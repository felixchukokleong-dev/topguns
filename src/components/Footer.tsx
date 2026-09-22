import { Crosshair } from "../icons";

const nav = [
  { href: "#roster", label: "THE ROSTER" },
  { href: "#protocol", label: "PROTOCOL" },
  { href: "#scoreboard", label: "SCOREBOARD" },
  { href: "#models", label: "MODELS" },
  { href: "#objections", label: "OBJECTIONS" },
  { href: "#deploy", label: "DEPLOY" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="grid gap-10 border-b border-line pb-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Crosshair className="h-8 w-8 text-flare" />
              <span className="font-display text-2xl tracking-wide text-bone">TOPGUNS</span>
            </a>
            <p className="mt-5 max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.16em] text-steel">
              ELITE SALES OPERATORS FOR HIRE. WE DON'T FIX PRODUCTS — WE FIX THE REASON
              NOBODY HEARS ABOUT THEM.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.26em] text-flare">NAVIGATE</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-[11px] tracking-[0.18em] text-steel transition-colors hover:text-flare"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.26em] text-flare">COORDINATES</p>
            <ul className="mt-4 space-y-2.5 font-mono text-[11px] tracking-[0.16em] text-steel">
              <li>
                <a href="mailto:deploy@topguns.syndicate" className="transition-colors hover:text-flare">
                  DEPLOY@TOPGUNS.SYNDICATE
                </a>
              </li>
              <li>
                <a href="tel:+15550100199" className="transition-colors hover:text-flare">
                  +1 (555) 010-0199
                </a>
              </li>
              <li>REMOTE-FIRST // 11 TIME ZONES</li>
              <li className="text-bone/70">STATUS: <span className="text-cash">ACCEPTING DEPLOYMENTS</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="font-mono text-[10px] tracking-[0.18em] text-steel">
            © 2026 TOPGUN SALES SYNDICATE — <span className="text-flare">WE EAT WHAT WE KILL.</span>
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] text-steel/70">
            NO PIPELINE THEATER SINCE 2019.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.22em] text-bone transition-colors hover:text-flare"
          >
            ▲ BACK TO BASE
          </a>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="text-ghost pointer-events-none -mb-[2vw] select-none text-center font-display text-[19vw] leading-[0.8] tracking-tight"
      >
        TOPGUNS
      </p>
    </footer>
  );
}
