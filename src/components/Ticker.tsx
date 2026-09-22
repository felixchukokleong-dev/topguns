import { tickerItems } from "../data";

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div
      className="marquee relative z-20 overflow-hidden border-b border-line bg-ink-2 py-2"
      aria-label="Recent closes by the syndicate"
    >
      <div className="marquee-track flex w-max items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-[11px] tracking-[0.18em] text-steel"
          >
            <span className={i % 3 === 0 ? "text-flare" : "text-bone/80"}>{item}</span>
            <span className="mx-6 text-flare/70">✕</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
