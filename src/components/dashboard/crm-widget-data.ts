export interface CrmDeal {
  id: string;
  name: string;
  company: string;
  value: number;
  stage: "Qualified" | "Discovery" | "Proposal" | "Negotiation";
  owner: string;
  confidence: number;
  close: string;
  next: string;
  risk: boolean;
}
export const CRM_DEALS: CrmDeal[] = [
  {
    id: "DL-1041",
    name: "Northstar expansion",
    company: "Northstar Labs",
    value: 84000,
    stage: "Negotiation",
    owner: "Amara Okafor",
    confidence: 85,
    close: "2026-10-16",
    next: "Send executive recap",
    risk: false,
  },
  {
    id: "DL-1042",
    name: "Automation rollout",
    company: "Vertex Labs",
    value: 42000,
    stage: "Proposal",
    owner: "Daniel Reyes",
    confidence: 58,
    close: "2026-10-22",
    next: "Complete security review",
    risk: true,
  },
  {
    id: "DL-1043",
    name: "Platform upgrade",
    company: "Edzen Systems",
    value: 128000,
    stage: "Negotiation",
    owner: "Priya Raman",
    confidence: 78,
    close: "2026-10-15",
    next: "Confirm legal approver",
    risk: false,
  },
  {
    id: "DL-1044",
    name: "Customer success suite",
    company: "Harbor Health",
    value: 56000,
    stage: "Discovery",
    owner: "Amara Okafor",
    confidence: 40,
    close: "2026-11-05",
    next: "Map buying committee",
    risk: false,
  },
  {
    id: "DL-1045",
    name: "Reporting workspace",
    company: "Kinetic Systems",
    value: 32000,
    stage: "Qualified",
    owner: "Daniel Reyes",
    confidence: 25,
    close: "2026-11-12",
    next: "Schedule discovery call",
    risk: false,
  },
  {
    id: "DL-1046",
    name: "Regional deployment",
    company: "Meridian Group",
    value: 96000,
    stage: "Proposal",
    owner: "Priya Raman",
    confidence: 62,
    close: "2026-10-28",
    next: "Validate rollout budget",
    risk: true,
  },
  {
    id: "DL-1047",
    name: "Team collaboration",
    company: "Brightpath Media",
    value: 28000,
    stage: "Discovery",
    owner: "Daniel Reyes",
    confidence: 35,
    close: "2026-11-19",
    next: "Share solution outline",
    risk: false,
  },
  {
    id: "DL-1048",
    name: "Analytics pilot",
    company: "Orbit Commerce",
    value: 24000,
    stage: "Qualified",
    owner: "Amara Okafor",
    confidence: 20,
    close: "2026-11-20",
    next: "Confirm business goals",
    risk: false,
  },
];
export const CRM_REPS = [
  { name: "Amara Okafor", closed: 186000, quota: 250000, calls: 42 },
  { name: "Daniel Reyes", closed: 142000, quota: 220000, calls: 36 },
  { name: "Priya Raman", closed: 224000, quota: 280000, calls: 48 },
];
export const CRM_STAGES = [
  "Qualified",
  "Discovery",
  "Proposal",
  "Negotiation",
] as const;
export const CRM_ACCENTS = [
  {
    bg: "bg-[var(--chart-1)]",
    text: "text-[var(--chart-1)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-1)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-2)]",
    text: "text-[var(--chart-2)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-2)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-3)]",
    text: "text-[var(--chart-3)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-3)_10%,transparent)]",
  },
  {
    bg: "bg-[var(--chart-4)]",
    text: "text-[var(--chart-4)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-4)_10%,transparent)]",
  },
];
