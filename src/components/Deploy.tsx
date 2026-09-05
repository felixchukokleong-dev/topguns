import { useState } from "react";
import type { FormEvent } from "react";
import { usePrefersReducedMotion } from "../hooks";
import { ArrowUpRight, Check, Clock, Phone } from "../icons";
import Reveal from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "company" | "problem", string>>;

const stages = ["PRE-SEED", "SEED", "SERIES A", "SERIES B", "SERIES C+", "BOOTSTRAPPED"];

export default function Deploy() {
  const reduced = usePrefersReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", company: "", stage: stages[2], problem: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [ticket, setTicket] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (form.name.trim().length < 2) errs.name = "NAME REQUIRED — WE NEED TO KNOW WHO'S CALLING THE SHOTS";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "THAT EMAIL WON'T SURVIVE RECON — CHECK IT";
    if (form.company.trim().length < 2) errs.company = "COMPANY REQUIRED";
    if (form.problem.trim().length < 10) errs.problem = "GIVE US AT LEAST A SENTENCE — WHERE DOES IT HURT?";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setTicket(`TG-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  };

  const inputCls = (bad?: string) =>
    `w-full border bg-ink px-4 py-3.5 text-sm text-bone placeholder:text-steel/50 transition-colors duration-200 focus:outline-none ${
      bad ? "border-flare" : "border-line focus:border-flare"
    }`;

  const labelCls = "mb-2 block font-mono text-[10px] tracking-[0.24em] text-steel";

  return (
    <section id="deploy" className="relative border-t border-line bg-ink-2/40">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-flare">
              <span className="inline-block h-2 w-2 bg-flare" />
              REQUEST DEPLOYMENT
            </p>
            <h2 className="mt-5 font-display text-6xl leading-[0.95] tracking-wide text-bone md:text-7xl">
              PUT GUNS ON
              <br />
              YOUR <span className="text-flare">PIPELINE.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-steel md:text-lg">
              Tell us where it hurts. Within 48 hours you'll get a closing-gap report —
              the exact reason revenue is stuck — and the name of the operator who fixes it.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 space-y-4">
              <a
                href="mailto:deploy@topguns.syndicate"
                className="group flex items-center gap-4 border border-line bg-ink px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-flare"
              >
                <ArrowUpRight className="h-5 w-5 text-flare transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="font-mono text-xs tracking-[0.14em] text-bone">
                  DEPLOY@TOPGUNS.SYNDICATE
                </span>
              </a>
              <a
                href="tel:+15550100199"
                className="group flex items-center gap-4 border border-line bg-ink px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-flare"
              >
                <Phone className="h-5 w-5 text-flare" />
                <span className="font-mono text-xs tracking-[0.14em] text-bone">+1 (555) 010-0199</span>
              </a>
              <div className="flex items-center gap-4 border border-line bg-ink px-5 py-4">
                <Clock className="h-5 w-5 text-flare" />
                <span className="font-mono text-xs tracking-[0.14em] text-bone">
                  RESPONSE IN UNDER 48 HOURS
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 border border-line bg-ink p-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.22em] text-steel">
                  DEPLOYMENT CAPACITY — MARCH
                </p>
                <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-flare">3 SLOTS OPEN</p>
              </div>
              <div className="mt-3 flex gap-1.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-3 flex-1 ${i < 7 ? "bg-line" : i < 10 ? "bg-flare" : ""} ${
                      i >= 7 && !reduced ? "blink" : ""
                    }`}
                    style={i >= 7 ? { animationDelay: `${(i - 7) * 0.25}s` } : undefined}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border border-line bg-ink-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="hazard h-1.5 w-full" />
            {ticket ? (
              <div className="flex min-h-[520px] flex-col items-start justify-center p-10">
                <span className="flex h-14 w-14 items-center justify-center border-2 border-cash bg-cash/10">
                  <Check className="h-7 w-7 text-cash" />
                </span>
                <h3 className="mt-7 font-display text-4xl tracking-wide text-bone md:text-5xl">
                  TRANSMISSION <span className="text-cash">RECEIVED.</span>
                </h3>
                <p className="mt-3 font-mono text-xs tracking-[0.2em] text-flare">
                  TICKET #{ticket} — PRIORITY: HIGH
                </p>
                <p className="mt-6 max-w-sm leading-relaxed text-steel">
                  Recon begins within 48 hours. A gap report and an operator match will
                  land in <span className="text-bone">{form.email || "your inbox"}</span>. Keep
                  your calendar loose — the first call moves fast.
                </p>
                <button
                  onClick={() => {
                    setTicket(null);
                    setForm({ name: "", email: "", company: "", stage: stages[2], problem: "" });
                  }}
                  className="mt-9 border border-line px-6 py-3.5 font-mono text-[11px] font-bold tracking-[0.22em] text-bone transition-all duration-200 hover:border-flare hover:text-flare"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="p-8 md:p-10">
                <p className="font-mono text-[10px] tracking-[0.24em] text-steel">
                  SECURE CHANNEL — <span className="text-flare">RECON REQUEST FORM</span>
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="d-name" className={labelCls}>NAME *</label>
                    <input
                      id="d-name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Jordan Vale"
                      className={inputCls(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-flare">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="d-email" className={labelCls}>WORK EMAIL *</label>
                    <input
                      id="d-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="jordan@company.com"
                      className={inputCls(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-flare">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="d-company" className={labelCls}>COMPANY *</label>
                    <input
                      id="d-company"
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Northwind Data"
                      className={inputCls(errors.company)}
                    />
                    {errors.company && (
                      <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-flare">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="d-stage" className={labelCls}>STAGE</label>
                    <select
                      id="d-stage"
                      value={form.stage}
                      onChange={set("stage")}
                      className={`${inputCls()} cursor-pointer appearance-none`}
                    >
                      {stages.map((s) => (
                        <option key={s} value={s} className="bg-ink">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="d-problem" className={labelCls}>
                    BIGGEST SALES PROBLEM * <span className="text-steel/60">— WHERE DOES IT HURT?</span>
                  </label>
                  <textarea
                    id="d-problem"
                    value={form.problem}
                    onChange={set("problem")}
                    rows={4}
                    placeholder="e.g. Great product, 400 customers on free tier, zero enterprise deals, and our only AE just quit…"
                    className={`${inputCls(errors.problem)} resize-none`}
                  />
                  {errors.problem && (
                    <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-flare">{errors.problem}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-3 border border-flare bg-flare py-4.5 font-mono text-xs font-bold tracking-[0.26em] text-ink transition-all duration-200 hover:bg-flare-2 hover:shadow-[6px_6px_0_rgba(255,77,28,0.3)]"
                >
                  REQUEST RECON
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

                <p className="mt-4 text-center font-mono text-[9px] tracking-[0.16em] text-steel">
                  NO RETAINER TO TALK. NO DECKS. JUST A WAR PLAN.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
