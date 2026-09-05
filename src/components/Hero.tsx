import { useEffect, useRef, useState } from "react";
import { dealPool, heroStats, initialDeals, stageNames } from "../data";
import { useCountUp, useInView, useScramble } from "../hooks";
import { Crosshair } from "../icons";

type Deal = { id: number; company: string; sector: string; value: number; stage: number };

function DealBoard() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [total, setTotal] = useState(4_218_000);
  const counted = useRef<Set<number>>(new Set());
  const nextId = useRef(100);
  const poolIdx = useRef(0);

  /* advance a random open deal every few seconds */
  useEffect(() => {
    const id = window.setInterval(() => {
      setDeals((prev) => {
        const open = prev.map((d, i) => ({ d, i })).filter(({ d }) => d.stage < 3);
        if (open.length === 0) return prev;
        const pick = open[Math.floor(Math.random() * open.length)];
        const next = [...prev];
        const advanced: Deal = { ...pick.d, stage: pick.d.stage + 1 };
        next[pick.i] = advanced;
        if (advanced.stage === 3) {
          window.setTimeout(() => {
            setDeals((p) => {
              const ci = p.findIndex((x) => x.id === advanced.id);
              if (ci === -1) return p;
              const seed = dealPool[poolIdx.current % dealPool.length];
              poolIdx.current += 1;
              const rep = [...p];
              rep[ci] = { id: nextId.current, ...seed, stage: 0 };
              nextId.current += 1;
              return rep;
            });
          }, 2400);
        }
        return next;
      });
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  /* count closed revenue exactly once per deal */
  useEffect(() => {
    deals.forEach((d) => {
      if (d.stage === 3 && !counted.current.has(d.id)) {
        counted.current.add(d.id);
        setTotal((t) => t + d.value);
      }
    });
  }, [deals]);

  const stageTone = ["text-steel", "text-amber", "text-flare-2", "text-cash"];

  return (
    <div className="relative">
      {/* rotating radar rings */}
      <div className="pointer-events-none absolute -right-10 -top-12 hidden md:block">
        <svg viewBox="0 0 200 200" className="spin-slow h-56 w-56 text-flare/25" fill="none">
          <circle cx="100" cy="100" r="96" stroke="currentColor" strokeDasharray="4 10" />
          <circle cx="100" cy="100" r="66" stroke="currentColor" strokeDasharray="2 8" opacity="0.7" />
          <circle cx="100" cy="100" r="36" stroke="currentColor" strokeDasharray="2 6" opacity="0.5" />
        </svg>
      </div>

      <div className="relative border border-line bg-ink-2/90 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="hazard h-1.5 w-full" />
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="ping-soft absolute inline-flex h-full w-full bg-flare" />
              <span className="relative inline-flex h-2 w-2 bg-flare" />
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.24em] text-bone">
              LIVE CLOSING BOARD
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-steel blink">
            SYNDICATE FEED
          </span>
        </div>

        <div className="px-5 py-2">
          <div className="hidden grid-cols-[1fr_1fr_76px_110px] gap-3 border-b border-line/60 py-2 font-mono text-[9px] tracking-[0.22em] text-steel md:grid">
            <span>TARGET</span>
            <span>SECTOR</span>
            <span className="text-right">VALUE</span>
            <span className="text-right">STAGE</span>
          </div>
          {deals.map((d) => (
            <div
              key={d.id}
              className={`grid grid-cols-[1fr_76px_110px] items-center gap-3 border-b border-line/40 py-3 transition-colors last:border-0 hover:bg-ink-3/60 md:grid-cols-[1fr_1fr_76px_110px] ${
                d.stage === 3 ? "bg-cash/5" : ""
              }`}
            >
              <span className="truncate font-mono text-xs font-bold tracking-[0.12em] text-bone">
                {d.company}
              </span>
              <span className="hidden truncate font-mono text-[10px] tracking-[0.14em] text-steel md:block">
                {d.sector}
              </span>
              <span className="text-right font-mono text-xs text-bone/90">
                ${Math.round(d.value / 1000)}K
              </span>
              <span
                className={`text-right font-mono text-[10px] font-bold tracking-[0.12em] ${stageTone[d.stage]}`}
              >
                {d.stage === 3 ? "▲ " : ""}
                {stageNames[d.stage]}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-line bg-ink px-5 py-4">
          <p className="font-mono text-[9px] tracking-[0.24em] text-steel">
            CLOSED ON THIS FEED
          </p>
          <p
            key={total}
            className="tick-flash mt-1 font-mono text-2xl font-bold tracking-tight text-bone md:text-3xl"
          >
            ${total.toLocaleString("en-US")}
          </p>
          <p className="mt-1.5 font-mono text-[9px] tracking-[0.2em] text-cash">
            ▲ MEDIAN TIME TO FIRST DEAL — 11 DAYS
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, prefix, suffix, label, play, delay }: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  play: boolean;
  delay: number;
}) {
  const n = useCountUp(value, play, 1600 + delay);
  return (
    <div className="border-l-2 border-line pl-4 transition-colors duration-300 hover:border-flare">
      <p className="font-display text-3xl tracking-wide text-bone md:text-4xl">
        {prefix}
        {n}
        <span className="text-flare">{suffix}</span>
      </p>
      <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-steel">{label}</p>
    </div>
  );
}

export default function Hero() {
  const [masksIn, setMasksIn] = useState(false);
  const scrambled = useScramble("THEMSELVES.", 900, 1200);
  const [statsRef, statsInView] = useInView<HTMLDivElement>(0.3);

  useEffect(() => {
    const t = window.setTimeout(() => setMasksIn(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 md:px-8 md:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className={masksIn ? "masks-in" : ""}>
          <div className="mask-line">
            <span className="mask-inner flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
              <span className="inline-block h-2 w-2 bg-flare" />
              SALES OPERATORS FOR HIRE — DEPLOYED IN 72 HOURS
            </span>
          </div>

          <h1 className="mt-6 font-display leading-[0.94] tracking-wide text-bone">
            <span className="mask-line text-[13.5vw] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
              <span className="mask-inner" style={{ transitionDelay: "120ms" }}>
                GREAT PRODUCTS
              </span>
            </span>
            <span className="mask-line text-[13.5vw] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
              <span className="mask-inner" style={{ transitionDelay: "260ms" }}>
                DON'T SELL
              </span>
            </span>
            <span className="mask-line text-[13.5vw] text-flare sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem]">
              <span className="mask-inner whitespace-nowrap" style={{ transitionDelay: "400ms" }}>
                {scrambled}
              </span>
            </span>
          </h1>

          <div className="mask-line mt-7 max-w-xl">
            <p className="mask-inner text-base leading-relaxed text-steel md:text-lg" style={{ transitionDelay: "560ms" }}>
              Most failed startups didn't ship a bad product — they shipped a{" "}
              <span className="font-semibold text-bone">good one with nobody who could sell it</span>.
              We drop proven closers into your company and put revenue on the board.
              No nine-month ramps. No pipeline theater.
            </p>
          </div>

          <div className="mask-line mt-9">
            <div className="mask-inner flex flex-wrap items-center gap-4" style={{ transitionDelay: "700ms" }}>
              <a
                href="#deploy"
                className="group inline-flex items-center gap-3 border border-flare bg-flare px-7 py-4 font-mono text-xs font-bold tracking-[0.24em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-flare-2 hover:shadow-[6px_6px_0_rgba(255,77,28,0.3)]"
              >
                DEPLOY A TEAM
                <Crosshair className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
              </a>
              <a
                href="#roster"
                className="inline-flex items-center gap-3 border border-line px-7 py-4 font-mono text-xs font-bold tracking-[0.24em] text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-ink"
              >
                BROWSE THE ROSTER
              </a>
            </div>
          </div>
        </div>

        <DealBoard />
      </div>

      <div ref={statsRef} className="relative border-y border-line bg-ink-2/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-8 md:px-8 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Stat key={s.label} {...s} play={statsInView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
