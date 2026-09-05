import { models } from "../data";
import { Check } from "../icons";
import Reveal from "./Reveal";

export default function Models() {
  return (
    <section id="models" className="relative border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
            <span className="inline-block h-2 w-2 bg-flare" />
            ENGAGEMENT MODELS
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.98] tracking-wide text-bone md:text-7xl">
            THREE WAYS <span className="text-flare">TO ARM UP.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
          {models.map((m, i) => {
            const tilt =
              i === 0
                ? "lg:rotate-[-1.4deg] lg:hover:rotate-0"
                : i === 2
                  ? "lg:rotate-[1.4deg] lg:hover:rotate-0"
                  : "";
            return (
              <Reveal key={m.name} delay={i * 130} className="h-full">
                <article
                  className={`relative flex h-full flex-col border transition-all duration-300 ${tilt} ${
                    m.featured
                      ? "z-10 border-2 border-flare bg-ink-3 shadow-[0_30px_90px_rgba(255,77,28,0.12)] lg:-my-6 lg:py-6"
                      : "border-line bg-ink-2 hover:border-steel"
                  }`}
                >
                  {m.featured && (
                    <>
                      <div className="hazard h-2 w-full" />
                      <span className="absolute -top-4 left-6 bg-flare px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.22em] text-ink">
                        MOST DEPLOYED
                      </span>
                    </>
                  )}

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className={`font-display tracking-wide ${m.featured ? "text-6xl text-flare" : "text-5xl text-bone"}`}>
                      {m.name}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-steel">{m.tag}</p>

                    <div className="mt-7 flex items-baseline gap-2 border-y border-line py-5">
                      <span className={`font-display ${m.featured ? "text-5xl text-bone" : "text-4xl text-bone"}`}>
                        {m.price}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.16em] text-steel">
                        {m.priceNote}
                      </span>
                    </div>

                    <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-flare-2">
                      {m.target}
                    </p>

                    <ul className="mt-5 flex-1 space-y-3">
                      {m.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-3 text-sm text-steel">
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${m.featured ? "text-flare" : "text-cash"}`} />
                          {inc}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#deploy"
                      className={`mt-8 block border py-4 text-center font-mono text-[11px] font-bold tracking-[0.24em] transition-all duration-200 ${
                        m.featured
                          ? "border-flare bg-flare text-ink hover:-translate-y-0.5 hover:bg-flare-2 hover:shadow-[6px_6px_0_rgba(255,77,28,0.3)]"
                          : "border-line text-bone hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-ink"
                      }`}
                    >
                      {m.cta}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-16 text-center font-mono text-[11px] tracking-[0.18em] text-steel">
            EVERY MODEL SHIPS WITH THE <span className="text-flare">30-DAY KILL SWITCH.</span>{" "}
            IF THERE'S NO QUALIFIED PIPELINE BY DAY 30, YOU WALK — AND KEEP THE PLAYBOOK.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
