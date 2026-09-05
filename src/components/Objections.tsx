import { useState } from "react";
import { objections } from "../data";
import { Plus } from "../icons";
import Reveal from "./Reveal";

export default function Objections() {
  const [open, setOpen] = useState(0);

  return (
    <section id="objections" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
                <span className="inline-block h-2 w-2 bg-flare" />
                OBJECTION HANDLING
              </p>
              <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide text-bone md:text-6xl">
                WE CLOSE OBJECTIONS
                <br />
                FOR A LIVING.
                <br />
                <span className="text-flare">LET'S PRACTICE ON YOURS.</span>
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-steel">
                Every founder raises the same five objections. We've answered them on
                hundreds of calls — here are the answers in writing, so the first call
                can skip straight to the war plan.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3.5">
            {objections.map((o, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={o.q} delay={i * 80}>
                  <div
                    className={`border transition-all duration-300 ${
                      isOpen ? "border-flare bg-ink-2" : "border-line bg-ink-2/60 hover:border-steel"
                    }`}
                  >
                    <button
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[10px] tracking-[0.2em] text-flare">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-lg tracking-wide transition-colors md:text-xl ${
                            isOpen ? "text-flare" : "text-bone"
                          }`}
                        >
                          {o.q}
                        </span>
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-flare" : "text-steel"
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="border-t border-line/60 px-6 py-5 pl-[4.4rem] leading-relaxed text-steel">
                          {o.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={200}>
              <a
                href="#deploy"
                className="group mt-4 inline-flex items-center gap-3 border border-line px-6 py-4 font-mono text-[11px] font-bold tracking-[0.24em] text-bone transition-all duration-200 hover:border-flare hover:bg-flare hover:text-ink"
              >
                RAISE A NEW OBJECTION LIVE →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
