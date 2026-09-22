import { protocolSteps } from "../data";
import { Check } from "../icons";
import Reveal from "./Reveal";

const cardBgs = ["bg-ink-2", "bg-ink-3", "bg-ink-2", "bg-ink-3"];

export default function Protocol() {
  return (
    <section id="protocol" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
            <span className="inline-block h-2 w-2 bg-flare" />
            DEPLOYMENT PROTOCOL
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] tracking-wide text-bone md:text-7xl">
            FROM CALL TO CLOSED <span className="text-flare">IN 4 MOVES.</span>
          </h2>
        </Reveal>

        <div className="mt-16">
          {protocolSteps.map((step, i) => (
            <div
              key={step.n}
              className="sticky mb-6 border border-line shadow-[0_-20px_50px_rgba(0,0,0,0.45)]"
              style={{ top: `${104 + i * 22}px` }}
            >
              <div className={`hazard h-1.5 w-full ${cardBgs[i]}`} />
              <div className={`${cardBgs[i]} relative overflow-hidden px-7 py-10 md:px-12 md:py-14`}>
                <span className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[10rem] leading-none text-bone/[0.045] md:text-[14rem]">
                  {step.n}
                </span>

                <div className="relative grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-14">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.28em] text-flare">
                      MOVE {step.n}
                    </p>
                    <h3 className="mt-3 font-display text-4xl tracking-wide text-bone md:text-5xl">
                      {step.phase}
                    </h3>
                    <p className="mt-3 inline-block border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-steel">
                      {step.when}
                    </p>
                  </div>
                  <div>
                    <p className="max-w-2xl text-base leading-relaxed text-steel md:text-lg">
                      {step.body}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center gap-2 border border-flare/40 bg-flare/5 px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.16em] text-flare-2"
                        >
                          <Check className="h-3 w-3" />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={100}>
          <p className="mt-10 text-center font-mono text-[11px] tracking-[0.2em] text-steel">
            TOTAL ELAPSED TIME TO FIRST PIPELINE:{" "}
            <span className="font-bold text-flare">UNDER 21 DAYS.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
