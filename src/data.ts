/* ---------------- ticker ---------------- */
export const tickerItems = [
  "CLOSED — $2.4M ARR // B2B SAAS // 41 DAYS",
  "FIRST DEAL — 11 DAYS // LOGISTICS PLATFORM",
  "PIPELINE BUILT — $8.6M // FINTECH",
  "3 WHALES LANDED // CYBERSECURITY",
  "142% TO QUOTA // Q4 2025",
  "19 DEMOS BOOKED — WEEK ONE // DEVTOOLS",
  "$4.2M SINGLE DEAL // ENTERPRISE DATA",
  "22 OPERATORS ON DEPLOYMENT — GLOBAL",
  "WIN RATE 71% // LATE-STAGE BOOK",
  "NEXT SLOT OPENS — MARCH // APPLY NOW",
];

/* ---------------- hero stats ---------------- */
export const heroStats = [
  { value: 212, prefix: "$", suffix: "M+", label: "CLOSED BY OUR OPERATORS" },
  { value: 11, prefix: "", suffix: " DAYS", label: "MEDIAN TIME TO FIRST DEAL" },
  { value: 142, prefix: "", suffix: "%", label: "AVG QUOTA ATTAINMENT" },
  { value: 72, prefix: "", suffix: " HRS", label: "CALL → DEPLOYED IN SLACK" },
];

/* ---------------- live deal board ---------------- */
export type DealSeed = { company: string; sector: string; value: number };

export const initialDeals: (DealSeed & { id: number; stage: number })[] = [
  { id: 1, company: "NORTHWIND", sector: "DATA PLATFORM", value: 480000, stage: 2 },
  { id: 2, company: "HELIOX", sector: "DEVTOOLS", value: 260000, stage: 1 },
  { id: 3, company: "VANTIQ", sector: "CYBERSEC", value: 910000, stage: 2 },
  { id: 4, company: "ORO PAY", sector: "FINTECH", value: 340000, stage: 0 },
  { id: 5, company: "CARGOLINK", sector: "LOGISTICS", value: 520000, stage: 1 },
];

export const dealPool: DealSeed[] = [
  { company: "STRATAFORM", sector: "CLOUD", value: 295000 },
  { company: "MERIDIAN", sector: "ERP", value: 760000 },
  { company: "BLUEHARROW", sector: "HR TECH", value: 180000 },
  { company: "KESTREL AI", sector: "AI / ML", value: 640000 },
  { company: "IRONLEDGER", sector: "FINTECH", value: 410000 },
  { company: "GRIDSONIC", sector: "IOT", value: 230000 },
  { company: "PALEFIRE", sector: "SAAS", value: 355000 },
  { company: "ATLASPORT", sector: "SUPPLY CHAIN", value: 505000 },
];

export const stageNames = ["DISCOVERY", "DEMO", "NEGOTIATION", "CLOSED"] as const;

/* ---------------- problem cards ---------------- */
export const failureCards = [
  {
    n: "01",
    icon: "flag",
    title: "Founder-led sales hits a wall",
    body: "The founder closes the first ten customers on vision alone. The next hundred need process, follow-up, and someone who lives on the phone. Vision doesn't scale.",
  },
  {
    n: "02",
    icon: "bolt",
    title: "Engineers pitch features, not outcomes",
    body: "Your demo is a guided tour of the codebase. Buyers hear specs when they wanted results. Great product — wrong conversation — dead deal.",
  },
  {
    n: "03",
    icon: "funnel",
    title: "One rep, zero system",
    body: "You hired a lone AE with no playbook, no locked ICP and no lead engine — then blamed “sales” when the quarter missed. The rep was set up to fail.",
  },
  {
    n: "04",
    icon: "clock",
    title: "The nine-month ramp",
    body: "A traditional enterprise hire burns two to three quarters of salary before their first meaningful deal lands. You do not have nine months. Nobody does.",
  },
  {
    n: "05",
    icon: "skull",
    title: "Pipeline theater",
    body: "The CRM is full of “warm” deals that never close. The forecast says up-and-to-the-right. The bank account disagrees — every single quarter.",
  },
];

/* ---------------- roster ---------------- */
export type Operator = {
  callsign: string;
  name: string;
  archetype: string;
  desc: string;
  stats: { v: string; l: string }[];
  verticals: string[];
  status: { label: string; tone: "cash" | "amber" | "steel" };
};

export const operators: Operator[] = [
  {
    callsign: "VIPER",
    name: "V. Okafor",
    archetype: "THE HUNTER",
    desc: "Cold outbound to signed paper. Finds the logos you didn't know existed and opens doors that stayed shut for years.",
    stats: [
      { v: "168%", l: "QUOTA" },
      { v: "214", l: "LOGOS" },
      { v: "9 DAYS", l: "RAMP" },
    ],
    verticals: ["SAAS", "CYBER", "DEVTOOLS"],
    status: { label: "AVAILABLE NOW", tone: "cash" },
  },
  {
    callsign: "IRON",
    name: "S. Lindqvist",
    archetype: "THE WHALE WRANGLER",
    desc: "Six- and seven-figure enterprise deals. Multi-stakeholder, procurement, legal — walks the longest cycles and wins them.",
    stats: [
      { v: "154%", l: "QUOTA" },
      { v: "$4.2M", l: "LARGEST DEAL" },
      { v: "14 DAYS", l: "RAMP" },
    ],
    verticals: ["FINTECH", "DATA", "ERP"],
    status: { label: "1 SLOT — Q3", tone: "amber" },
  },
  {
    callsign: "SWITCH",
    name: "R. Delgado",
    archetype: "THE PIPELINE SURGEON",
    desc: "Rebuilds broken funnels. Qualification, stages, RevOps — cuts pipeline velocity problems out and stitches the process back together.",
    stats: [
      { v: "+212%", l: "VELOCITY" },
      { v: "6", l: "REBUILDS" },
      { v: "7 DAYS", l: "RAMP" },
    ],
    verticals: ["ANY CRM-DRIVEN"],
    status: { label: "AVAILABLE NOW", tone: "cash" },
  },
  {
    callsign: "GHOST",
    name: "K. Tanaka",
    archetype: "THE INFILTRATOR",
    desc: "Turns product-led motion into enterprise revenue. Speaks fluent engineer, then translates it into a contract the CFO signs.",
    stats: [
      { v: "147%", l: "QUOTA" },
      { v: "38", l: "EXPANSIONS" },
      { v: "11 DAYS", l: "RAMP" },
    ],
    verticals: ["PLG", "API", "DEVTOOLS"],
    status: { label: "DEPLOYED — 3 WKS", tone: "steel" },
  },
  {
    callsign: "BOOM",
    name: "D. McKenna",
    archetype: "THE CLOSER",
    desc: "Late-stage only. Negotiation, procurement, the final mile — hands BOOM a deal at 80% and it crosses the line at 100%.",
    stats: [
      { v: "71%", l: "WIN RATE" },
      { v: "$31M", l: "CLOSED" },
      { v: "5 DAYS", l: "RAMP" },
    ],
    verticals: ["ENTERPRISE", "MID-MARKET"],
    status: { label: "AVAILABLE NOW", tone: "cash" },
  },
  {
    callsign: "ATLAS",
    name: "A. Reyes",
    archetype: "THE CAPTAIN",
    desc: "Builds and leads the pod. Goes from your first sales hire to a team of eight — then hands you the keys and the playbook.",
    stats: [
      { v: "4", l: "TEAMS BUILT" },
      { v: "139%", l: "TEAM AVG" },
      { v: "21 DAYS", l: "RAMP" },
    ],
    verticals: ["SEED → SERIES C"],
    status: { label: "2 SLOTS — Q3", tone: "amber" },
  },
];

/* ---------------- protocol ---------------- */
export const protocolSteps = [
  {
    n: "01",
    phase: "RECON",
    when: "FIRST 48 HOURS",
    body: "We audit your pricing, ICP, funnel and call recordings. You get a closing-gap report — the exact, unflattering reason revenue is stuck, and what it's worth fixing.",
    deliverables: ["GAP REPORT", "ICP LOCK", "PRICING CHECK"],
  },
  {
    n: "02",
    phase: "MATCH",
    when: "DAY 5",
    body: "Operator matched to battlefield. You approve the profile and the war plan before a single call is made. No résumé roulette, no “culture fit” roulette either.",
    deliverables: ["OPERATOR PROFILE", "WAR PLAN", "PRICING LOCKED"],
  },
  {
    n: "03",
    phase: "DEPLOY",
    when: "WEEK 1–2",
    body: "Operator is embedded in your Slack, CRM and calendar by Monday. Prospecting starts day one. The live playbook ships inside fourteen days.",
    deliverables: ["DAY-1 PROSPECTING", "PLAYBOOK V1", "CRM WIRED"],
  },
  {
    n: "04",
    phase: "REPORT",
    when: "EVERY FRIDAY",
    body: "A war-room report lands weekly: pipeline, calls, forecast, next moves. You see everything. We eat what we kill — base plus commission on closed revenue only.",
    deliverables: ["WEEKLY WAR REPORT", "FORECAST", "KILL-SWITCH"],
  },
];

/* ---------------- scoreboard ---------------- */
export const scoreboardRows = [
  {
    client: "SERIES A · DEVTOOLS",
    team: "1× HUNTER",
    closed: "$1.9M ARR",
    first: "34 DAYS",
    note: "0 → 12 logos in seven months",
  },
  {
    client: "FINTECH · SERIES B",
    team: "3-POD SQUAD",
    closed: "$6.4M ARR",
    first: "19 DAYS",
    note: "Three whales landed in quarter one",
  },
  {
    client: "CYBERSEC · SEED",
    team: "1× CLOSER",
    closed: "$1.1M ARR",
    first: "26 DAYS",
    note: "Seed runway extended by revenue, not dilution",
  },
  {
    client: "LOGISTICS · SERIES C",
    team: "WAR ROOM (6)",
    closed: "$14.2M ARR",
    first: "41 DAYS",
    note: "Replaced a 9-rep team that missed four quarters",
  },
  {
    client: "PLG SAAS · SERIES B",
    team: "1× INFILTRATOR",
    closed: "$3.8M ARR",
    first: "23 DAYS",
    note: "Enterprise tier opened — 31% of revenue inside 90 days",
  },
];

export const testimonials = [
  {
    quote:
      "We'd built the best product in our category and told almost nobody. Viper booked more qualified demos in two weeks than we'd had in a year.",
    name: "LENA M.",
    role: "CTO — DEVTOOLS, SERIES A",
  },
  {
    quote:
      "They don't send résumés. They send a war plan — and then they execute it while you watch the pipeline fill up.",
    name: "PRIYA S.",
    role: "CEO — FINTECH, SERIES B",
  },
  {
    quote:
      "I stopped doing demos in week two. Easily the best money I've spent as a founder, and I've spent plenty badly.",
    name: "JONAS K.",
    role: "FOUNDER — LOGISTICS, SERIES C",
  },
];

/* ---------------- engagement models ---------------- */
export const models = [
  {
    name: "STRIKE",
    tag: "ONE OPERATOR, YOUR PICK",
    price: "$9K",
    priceNote: "/MO + 8% COMMISSION",
    target: "FOR: PROVEN PRODUCT, ZERO SALES MOTION",
    includes: [
      "1 deployed operator",
      "Closing playbook",
      "Weekly war report",
      "30-day kill switch",
    ],
    cta: "DEPLOY STRIKE",
    featured: false,
  },
  {
    name: "SQUAD",
    tag: "3-OPERATOR POD + CAPTAIN OVERSIGHT",
    price: "$24K",
    priceNote: "/MO + 6% COMMISSION",
    target: "FOR: SERIES A–B READY TO OWN A CATEGORY",
    includes: [
      "Hunter + closer + SDR engine",
      "Full playbook build",
      "Lead engine + data layer",
      "RevOps setup",
      "Weekly live war room",
    ],
    cta: "DEPLOY A SQUAD",
    featured: true,
  },
  {
    name: "WAR ROOM",
    tag: "FULL REVENUE TAKEOVER",
    price: "CUSTOM",
    priceNote: "EQUITY-ALIGNED",
    target: "FOR: SERIES B+ UNDER BOARD PRESSURE",
    includes: [
      "6 operators + RevOps lead",
      "Revenue org rebuild",
      "Hiring & handover plan",
      "Board-ready reporting",
    ],
    cta: "OPEN A WAR ROOM",
    featured: false,
  },
];

/* ---------------- objections ---------------- */
export const objections = [
  {
    q: "“We already have a salesperson.”",
    a: "Then you know the feeling of hoping they figure it out. We don't replace your rep — we embed a proven closer alongside them, transfer the playbook, and everyone gets sharper. If your rep survives the comparison, you keep them and the system. Either way, you win.",
  },
  {
    q: "“We can't afford top sales talent.”",
    a: "You can't afford a nine-month ramp, a missed quarter, and a rep who needs “more leads.” Our operators produce in week one. Compare cost-per-closed-deal, not cost-per-seat — that's where cheap hires get expensive.",
  },
  {
    q: "“What if it doesn't work?”",
    a: "Thirty-day kill switch, no exit fee. If we haven't generated qualified pipeline by day 30, you walk and keep the playbook. In four years, two clients have ever pulled it.",
  },
  {
    q: "“Aren't mercenaries disloyal to the product?”",
    a: "Mercenaries get paid when you get paid. Our commission fires only on revenue that lands in your bank account — our incentive is your growth curve, not your org chart.",
  },
  {
    q: "“How fast can you actually start?”",
    a: "Recon begins within 48 hours of the first call. An operator is in your Slack by Monday of the following week, prospecting the same day the CRM is wired.",
  },
];
