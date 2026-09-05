import { scoreboardRows, testimonials } from "../data";
import Reveal from "./Reveal";

export default function Scoreboard() {
  return (
    <section id="scoreboard" className="relative bg-bone text-ink">
      <div className="hazard h-2.5 w-full" />

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
              <span className="inline-block h-2 w-2 bg-flare" />
              THE SCOREBOARD
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide md:text-7xl">
              RECEIPTS, <span className="text-flare">NOT PROMISES.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex gap-10 border-l-2 border-ink/20 pl-6">
              <div>
                <p className="font-display text-4xl">48</p>
                <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-ink/60">ENGAGEMENTS</p>
              </div>
              <div>
                <p className="font-display text-4xl">$212M</p>
                <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-ink/60">CLOSED</p>
              </div>
              <div>
                <p className="font-display text-4xl">92%</p>
                <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-ink/60">RENEWED</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-14">
          <div className="overflow-x-auto border-2 border-ink">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b-2 border-ink bg-ink text-bone">
                  <th className="px-6 py-4 font-mono text-[10px] tracking-[0.24em]">ENGAGEMENT</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-[0.24em]">TEAM</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-[0.24em]">CLOSED</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-[0.24em]">FIRST DEAL</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-[0.24em]">DEBRIEF</th>
                </tr>
              </thead>
              <tbody>
                {scoreboardRows.map((row) => (
                  <tr
                    key={row.client}
                    className="group border-b border-ink/15 transition-colors duration-200 last:border-0 hover:bg-ink/[0.06]"
                  >
                    <td className="px-6 py-5 font-display text-lg tracking-wide">{row.client}</td>
                    <td className="px-6 py-5 font-mono text-xs tracking-[0.14em] text-ink/70">
                      {row.team}
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-display text-2xl tracking-wide text-flare">
                        {row.closed}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs font-bold tracking-[0.14em]">
                      {row.first}
                    </td>
                    <td className="px-6 py-5 text-sm leading-snug text-ink/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 130}>
              <figure className="group h-full border-2 border-ink bg-bone p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_var(--color-ink)]">
                <span className="font-display text-6xl leading-none text-flare">“</span>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-ink/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t-2 border-ink/15 pt-4">
                  <p className="font-display text-base tracking-wide">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[9px] tracking-[0.18em] text-ink/55">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="hazard h-2.5 w-full" />
    </section>
  );
}
