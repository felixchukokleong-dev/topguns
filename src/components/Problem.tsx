import type { ReactElement } from "react";
import { failureCards } from "../data";
import { ArrowUpRight, Bolt, Clock, Flag, Funnel, Skull } from "../icons";
import Reveal from "./Reveal";

const iconMap: Record<string, (p: { className?: string }) => ReactElement> = {
  flag: Flag,
  bolt: Bolt,
  funnel: Funnel,
  clock: Clock,
  skull: Skull,
};

export default function Problem() {
  return (
    <section id="problem" className="relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        {/* sticky rail */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
              <span className="inline-block h-2 w-2 bg-flare" />
              THE DIAGNOSIS
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide text-bone md:text-6xl">
              THE GRAVEYARD
              <br />
              IS FULL OF
              <br />
              <span className="text-flare">GOOD PRODUCTS.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-steel md:text-lg">
              Every year, hundreds of well-built products die for a single reason:{" "}
              <span className="font-semibold text-bone">nobody on the team could sell them</span>.
              The code shipped. The market wanted it. The pipeline never existed.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 border border-line bg-ink-2 p-6">
              <p className="font-display text-6xl text-bone">
                9<span className="text-steel">/</span>10
              </p>
              <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-[0.14em] text-steel">
                FAILED STARTUPS WE'VE AUTOPSIED HAD A PRODUCT THAT WORKED.
                <span className="text-flare"> WHAT FAILED WAS THE SELLING.</span>
              </p>
            </div>
            <a
              href="#protocol"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-[11px] font-bold tracking-[0.24em] text-bone transition-colors hover:text-flare"
            >
              SEE HOW WE FIX IT
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        {/* scrolling failure modes */}
        <div className="flex flex-col gap-5">
          {failureCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.n} delay={i * 90}>
                <article className="group relative border border-line border-l-2 border-l-line bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-l-flare hover:bg-ink-3 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.28em] text-flare">{card.n}</p>
                      <h3 className="mt-2.5 font-display text-2xl tracking-wide text-bone md:text-[1.7rem]">
                        {card.title.toUpperCase()}
                      </h3>
                    </div>
                    <Icon className="h-9 w-9 shrink-0 text-steel transition-colors duration-300 group-hover:text-flare" />
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-steel">{card.body}</p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={120}>
            <div className="hazard h-2 w-full opacity-80" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
