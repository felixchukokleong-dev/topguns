import { operators } from "../data";
import { Crosshair } from "../icons";
import Reveal from "./Reveal";

const toneMap = {
  cash: "text-cash border-cash/40 bg-cash/10",
  amber: "text-amber border-amber/40 bg-amber/10",
  steel: "text-steel border-steel/40 bg-steel/10",
} as const;

const dotMap = {
  cash: "bg-cash",
  amber: "bg-amber",
  steel: "bg-steel",
} as const;

export default function Roster() {
  return (
    <section id="roster" className="relative border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
              <span className="inline-block h-2 w-2 bg-flare" />
              THE ROSTER
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide text-bone md:text-7xl">
              PICK YOUR <span className="text-flare">GUN(S).</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm border-l-2 border-flare pl-4 font-mono text-[11px] leading-relaxed tracking-[0.12em] text-steel">
              EVERY OPERATOR HAS CLOSED $1M+ ARR IN THE LAST 24 MONTHS.
              <span className="text-bone"> NO JUNIORS. NO PAPER QUOTAS. NO MERCY ON FORECASTS.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {operators.map((op, i) => (
            <Reveal key={op.callsign} delay={(i % 3) * 110}>
              <article className="group relative h-full overflow-hidden border border-line bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-flare hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                {/* crosshair on hover */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <Crosshair className="h-40 w-40 scale-50 text-flare/10 transition-transform duration-500 group-hover:scale-100" />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-[2.6rem] leading-none tracking-wide text-bone transition-colors duration-300 group-hover:text-flare">
                      {op.callsign}
                    </h3>
                    <span
                      className={`mt-1 inline-flex shrink-0 items-center gap-2 border px-2.5 py-1.5 font-mono text-[9px] font-bold tracking-[0.14em] ${toneMap[op.status.tone]}`}
                    >
                      <span className={`relative flex h-1.5 w-1.5 ${dotMap[op.status.tone]}`}>
                        {op.status.tone === "cash" && (
                          <span className="ping-soft absolute h-full w-full bg-cash" />
                        )}
                      </span>
                      {op.status.label}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-[11px] font-bold tracking-[0.26em] text-flare">
                    {op.archetype}
                    <span className="ml-3 font-normal text-steel">— {op.name}</span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-steel">{op.desc}</p>

                  <div className="mt-6 grid grid-cols-3 gap-px border border-line bg-line">
                    {op.stats.map((s) => (
                      <div key={s.l} className="bg-ink px-3 py-3 text-center">
                        <p className="font-display text-xl tracking-wide text-bone">{s.v}</p>
                        <p className="mt-0.5 font-mono text-[8px] tracking-[0.18em] text-steel">{s.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {op.verticals.map((v) => (
                      <span
                        key={v}
                        className="border border-line px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] text-steel transition-colors duration-300 group-hover:border-flare/50 group-hover:text-bone"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-flare transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
