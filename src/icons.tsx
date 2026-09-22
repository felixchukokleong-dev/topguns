type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "square" as const,
};

export function Crosshair({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Radar({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="5" opacity="0.55" />
      <path d="M12 12 20 6.5" />
      <circle cx="15.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Bolt({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M13.5 2 5 13.5h5L9 22l9.5-12h-5.5l0.5-8z" />
    </svg>
  );
}

export function ChartUp({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 17v-4M10 17v-8M15 17V6M20 17V3" />
      <path d="M14.5 3H20v5.5" />
    </svg>
  );
}

export function Funnel({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 4h18l-7 8.5V19l-4 2.5v-9L3 4z" />
    </svg>
  );
}

export function Flag({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M5 22V3" />
      <path d="M5 4h13l-3 4.5L18 13H5" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M6 18 18 6M9 6h9v9" />
    </svg>
  );
}

export function Plus({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export function Check({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="m4 12.5 5.5 5.5L20 6.5" />
    </svg>
  );
}

export function Phone({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4.5 3h4l1.5 5-2.2 1.7a12.5 12.5 0 0 0 6.5 6.5L16 14l5 1.5v4a1.5 1.5 0 0 1-1.6 1.5C10.5 20.5 3.5 13.5 3 4.6A1.5 1.5 0 0 1 4.5 3z" />
    </svg>
  );
}

export function Clock({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.5V12l3.5 3.5" />
    </svg>
  );
}

export function Skull({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 2.5c-5 0-8.5 3.6-8.5 8.2 0 2.8 1.4 4.9 3.5 6.3V21h10v-4c2.1-1.4 3.5-3.5 3.5-6.3 0-4.6-3.5-8.2-8.5-8.2z" />
      <circle cx="8.8" cy="11" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="15.2" cy="11" r="1.8" fill="currentColor" stroke="none" />
      <path d="M10 21v-2.5M14 21v-2.5" />
    </svg>
  );
}

export function Scope({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M3 12h6M15 12h6M12 3v6M12 15v6" opacity="0.5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="8" strokeDasharray="3 4" />
    </svg>
  );
}
