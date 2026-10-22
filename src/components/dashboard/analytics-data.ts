export const analyticsChannels = [
  {
    name: "Organic search",
    sessions: 38400,
    engaged: 26880,
    conversions: 1920,
    cost: 0,
    trend: 18.4,
  },
  {
    name: "Direct",
    sessions: 25600,
    engaged: 16640,
    conversions: 1280,
    cost: 0,
    trend: 9.2,
  },
  {
    name: "Paid campaigns",
    sessions: 19200,
    engaged: 10752,
    conversions: 768,
    cost: 13824,
    trend: 12.6,
  },
  {
    name: "Referrals",
    sessions: 12800,
    engaged: 8960,
    conversions: 768,
    cost: 3840,
    trend: 24.1,
  },
];
export const analyticsPages = [
  {
    path: "/workspace/overview",
    title: "Workspace overview",
    views: 28480,
    engaged: 72.4,
    conversions: 1282,
    time: "4m 32s",
  },
  {
    path: "/solutions/teams",
    title: "Solutions for teams",
    views: 21640,
    engaged: 68.1,
    conversions: 974,
    time: "3m 48s",
  },
  {
    path: "/pricing",
    title: "Plans & pricing",
    views: 18250,
    engaged: 61.8,
    conversions: 1460,
    time: "2m 56s",
  },
  {
    path: "/resources/report",
    title: "Industry report",
    views: 14760,
    engaged: 78.6,
    conversions: 590,
    time: "5m 12s",
  },
  {
    path: "/integrations",
    title: "Integration directory",
    views: 12640,
    engaged: 64.2,
    conversions: 430,
    time: "3m 24s",
  },
];
export const analyticsPalette = [
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
] as const;
export const analyticsAccents = [
  { bg: "bg-[var(--chart-1)]", text: "text-[var(--chart-1)]" },
  { bg: "bg-[var(--chart-2)]", text: "text-[var(--chart-2)]" },
  { bg: "bg-[var(--chart-3)]", text: "text-[var(--chart-3)]" },
  { bg: "bg-[var(--chart-4)]", text: "text-[var(--chart-4)]" },
] as const;
