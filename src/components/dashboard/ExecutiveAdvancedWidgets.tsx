import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Layers3,
  CircleDollarSign,
  ChevronRight,
} from "lucide-react";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Card } from "./widgets";
import { executiveColors, executiveAccents } from "./executive-widget-palette";

const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const mix = [
  { name: "Enterprise", data: [270, 290, 310, 333, 350, 378] },
  { name: "Commercial", data: [200, 210, 215, 227, 238, 252] },
  { name: "Self-serve", data: [90, 96, 102, 111, 118, 126] },
  { name: "Services", data: [80, 84, 83, 84, 84, 84] },
];
const scenarios = {
  Base: {
    receipts: [860, 890, 920, 960],
    payments: [640, 660, 670, 690],
    cash: [2680, 2910, 3160, 3430],
    note: "Expected collections and approved operating spend.",
  },
  Upside: {
    receipts: [910, 980, 1050, 1120],
    payments: [650, 680, 710, 750],
    cash: [2720, 3020, 3360, 3730],
    note: "Faster enterprise closes and stronger renewal collections.",
  },
  Downside: {
    receipts: [740, 750, 780, 800],
    payments: [640, 650, 660, 670],
    cash: [2560, 2660, 2780, 2910],
    note: "Slower collections with essential spending maintained.",
  },
};
const channels = [
  {
    name: "Enterprise",
    cac: 2400,
    ltv: 14400,
    growth: 18.4,
    retention: 96,
    customers: 180,
  },
  {
    name: "Commercial",
    cac: 1200,
    ltv: 6600,
    growth: 12.8,
    retention: 92,
    customers: 340,
  },
  {
    name: "Self-serve",
    cac: 380,
    ltv: 2280,
    growth: 22.6,
    retention: 88,
    customers: 610,
  },
  {
    name: "Partners",
    cac: 860,
    ltv: 5160,
    growth: 15.2,
    retention: 94,
    customers: 260,
  },
];
const cohorts = [
  { name: "Mar · 340", values: [100, 96, 93, 91, 89, 88] },
  { name: "Apr · 365", values: [100, 97, 94, 92, 90] },
  { name: "May · 382", values: [100, 97, 95, 93] },
  { name: "Jun · 410", values: [100, 98, 96] },
  { name: "Jul · 434", values: [100, 98] },
  { name: "Aug · 452", values: [100] },
];
const budgets = [
  { name: "Product & engineering", spent: 186, budget: 220, color: 0 },
  { name: "Sales & marketing", spent: 142, budget: 180, color: 1 },
  { name: "Customer operations", spent: 98, budget: 120, color: 2 },
  { name: "Corporate & admin", spent: 74, budget: 80, color: 3 },
];

export function ExecutiveAdvancedWidgets() {
  const { base } = useChartTheme();
  const palette = executiveColors.map((c) => token(c));
  const [scenario, setScenario] = useState<keyof typeof scenarios>("Base");
  const [lens, setLens] = useState<"Unit economics" | "Growth & retention">(
    "Unit economics",
  );
  const [allocation, setAllocation] = useState<
    "All departments" | "Over 85% used"
  >("All departments");
  const forecast = scenarios[scenario];
  const economics = lens === "Unit economics";
  const mixOptions = mergeOptions(base, {
    chart: { type: "area", stacked: true },
    colors: palette,
    stroke: { width: 2, curve: "smooth" },
    fill: { opacity: 0.3 },
    xaxis: { categories: months },
    yaxis: { labels: { formatter: (v: number) => `$${Math.round(v)}K` } },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (v: number) => `$${v}K` },
    },
    legend: { position: "bottom", horizontalAlign: "left" },
  });
  const cashOptions = mergeOptions(base, {
    chart: { type: "bar" },
    colors: [palette[0]!, palette[1]!],
    stroke: { width: 0 },
    plotOptions: { bar: { columnWidth: "45%", borderRadius: 3 } },
    xaxis: { categories: ["Sep", "Oct", "Nov", "Dec"] },
    yaxis: { labels: { formatter: (v: number) => `$${Math.round(v)}K` } },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (v: number) => `$${v}K` },
    },
    legend: { position: "bottom", horizontalAlign: "left" },
  });
  const bubbleOptions = mergeOptions(base, {
    chart: { type: "bubble" },
    colors: palette,
    fill: { opacity: 0.75 },
    stroke: { width: 1 },
    xaxis: {
      min: 0,
      max: economics ? 3000 : 30,
      tickAmount: 3,
      title: {
        text: economics ? "Acquisition cost ($)" : "Revenue growth (%)",
      },
      labels: {
        formatter: (v: string) =>
          economics
            ? `$${Math.round(Number(v)).toLocaleString()}`
            : `${Math.round(Number(v))}%`,
      },
    },
    yaxis: {
      min: economics ? 0 : 80,
      max: economics ? 18000 : 100,
      tickAmount: economics ? 3 : 4,
      title: {
        text: economics ? "Lifetime value ($)" : "Customer retention (%)",
      },
      labels: {
        formatter: (v: number) =>
          economics ? `$${Math.round(v / 1000)}K` : `${Math.round(v)}%`,
      },
    },
    plotOptions: {
      bubble: { minBubbleRadius: 9, maxBubbleRadius: 24, zScaling: true },
    },
    tooltip: {
      x: {
        formatter: (v: number) =>
          economics ? `CAC: $${v.toLocaleString()}` : `Growth: ${v}%`,
      },
      y: {
        title: { formatter: () => (economics ? "LTV:" : "Retention:") },
        formatter: (v: number) =>
          economics ? `$${v.toLocaleString()}` : `${v}%`,
      },
      z: { title: "New customers:", formatter: (v: number) => String(v) },
    },
    legend: { position: "bottom", horizontalAlign: "left", fontSize: "11px" },
  });
  const cohortOptions = mergeOptions(base, {
    chart: { type: "heatmap" },
    colors: palette,
    stroke: { width: 4, colors: [token("--card")] },
    plotOptions: {
      heatmap: {
        radius: 4,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: -1,
              to: -1,
              color: token("--muted"),
              name: "Not yet available",
            },
            { from: 0, to: 89, color: palette[1]!, name: "Below 90%" },
            { from: 90, to: 94, color: palette[3]!, name: "90–94%" },
            { from: 95, to: 98, color: palette[2]!, name: "95–98%" },
            { from: 99, to: 100, color: palette[0]!, name: "99–100%" },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: { fontSize: "11px", colors: [token("--primary-foreground")] },
      formatter: (v: number) => (v < 0 ? "" : `${v}%`),
    },
    xaxis: {
      type: "category",
      categories: ["M0", "M1", "M2", "M3", "M4", "M5"],
      position: "top",
      tooltip: { enabled: false },
    },
    yaxis: { reversed: false },
    legend: { show: false },
    tooltip: {
      y: {
        title: { formatter: () => "Customers retained:" },
        formatter: (v: number) => (v < 0 ? "Not yet available" : `${v}%`),
      },
    },
  });

  return (
    <>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Revenue engine"
          description="How each business unit contributes to growth"
          className="xl:col-span-7"
          bodyClassName="p-5"
          action={<Layers3 className={`size-4 ${executiveAccents[2].text}`} />}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {mix.map((s, i) => (
              <div
                key={s.name}
                className="border-s-2 ps-3"
                style={{ borderColor: `var(${executiveColors[i]})` }}
              >
                <p className="text-xs text-muted-foreground">{s.name}</p>
                <p className="mt-1 text-lg font-semibold">${s.data[5]}K</p>
              </div>
            ))}
          </div>
          <ApexChart
            type="area"
            height={280}
            options={mixOptions}
            series={mix}
          />
          <p className="border-t border-border pt-3 text-xs text-muted-foreground">
            Enterprise generated 54% of the $200K revenue increase since March.
          </p>
        </Card>
        <Card
          title="Cash flow outlook"
          description="Monthly cash receipts and operating payments"
          className="xl:col-span-5"
          bodyClassName="p-5"
          action={
            <select
              aria-label="Cash flow scenario"
              value={scenario}
              onChange={(e) =>
                setScenario(e.target.value as keyof typeof scenarios)
              }
              className="h-8 max-w-full rounded-md border border-border bg-card px-2 text-xs"
            >
              <option>Base</option>
              <option>Upside</option>
              <option>Downside</option>
            </select>
          }
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">
                Projected December cash
              </p>
              <p className="mt-1 text-[26px] font-semibold">
                ${((forecast.cash[3] ?? 0) / 1000).toFixed(2)}M
              </p>
            </div>
            <span
              className={`flex items-center gap-1 text-xs font-medium ${executiveAccents[2].text}`}
            >
              <ArrowUpRight className="size-3.5" />
              From $2.46M today
            </span>
          </div>
          <ApexChart
            type="bar"
            height={240}
            options={cashOptions}
            series={[
              { name: "Receipts", data: forecast.receipts },
              { name: "Payments", data: forecast.payments },
            ]}
          />
          <div className="flex flex-wrap justify-between gap-2 border-t border-border pt-3 text-xs">
            <span className="text-muted-foreground">
              September net cash flow
            </span>
            <span className={`font-semibold ${executiveAccents[0].text}`}>
              +${forecast.receipts[0]! - forecast.payments[0]!}K
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {forecast.note}
          </p>
        </Card>
        <Card
          title="Customer economics"
          description="Compare acquisition efficiency across channels"
          className="xl:col-span-5"
          bodyClassName="p-3"
          action={
            <select
              aria-label="Customer economics view"
              value={lens}
              onChange={(e) => setLens(e.target.value as typeof lens)}
              className="h-8 max-w-full rounded-md border border-border bg-card px-2 text-xs"
            >
              <option>Unit economics</option>
              <option>Growth &amp; retention</option>
            </select>
          }
        >
          <div className="flex flex-wrap gap-5 px-2 py-2">
            <div>
              <p className="text-xs text-muted-foreground">Blended LTV : CAC</p>
              <p className="mt-1 text-xl font-semibold">5.8x</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">CAC payback</p>
              <p className="mt-1 text-xl font-semibold">
                8.4{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  months
                </span>
              </p>
            </div>
          </div>
          <ApexChart
            key={lens}
            type="bubble"
            height={295}
            options={bubbleOptions}
            series={channels.map((c) => ({
              name: c.name,
              data: [
                {
                  x: economics ? c.cac : c.growth,
                  y: economics ? c.ltv : c.retention,
                  z: c.customers,
                },
              ],
            }))}
          />
          <p className="mx-2 border-t border-border pt-3 text-xs text-muted-foreground">
            Bubble size represents new customers acquired in August.
          </p>
        </Card>
        <Card
          title="Customer retention cohorts"
          description="Customers retained since signup · cohort size beside each month"
          className="xl:col-span-7"
          bodyClassName="p-3"
          action={
            <span
              className={`rounded-full px-2 py-1 text-xs font-semibold ${executiveAccents[2].soft} ${executiveAccents[2].text}`}
            >
              +3 pts at M3
            </span>
          }
        >
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-2">
            <p className="text-xs text-muted-foreground">
              June retains{" "}
              <span className="font-semibold text-foreground">96%</span> of
              customers at month 2
            </p>
            <span className="text-xs text-muted-foreground">
              March – August 2026
            </span>
          </div>
          <ApexChart
            type="heatmap"
            height={295}
            options={cohortOptions}
            series={[...cohorts].reverse().map((c) => ({
              name: c.name,
              data: Array.from({ length: 6 }, (_, i) => ({
                x: `M${i}`,
                y: c.values[i] ?? -1,
              })),
            }))}
          />
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border px-2 pt-3 text-xs text-muted-foreground">
            {[
              { label: "Below 90%", color: 1 },
              { label: "90–94%", color: 3 },
              { label: "95–98%", color: 2 },
              { label: "99–100%", color: 0 },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5"
              >
                <span
                  className={`size-2 rounded-sm ${executiveAccents[item.color]!.background}`}
                />
                {item.label}
              </span>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Capital allocation"
          description="August operating investment against approved budgets"
          className="xl:col-span-7"
          bodyClassName="p-5"
          action={
            <select
              aria-label="Capital allocation filter"
              value={allocation}
              onChange={(e) =>
                setAllocation(e.target.value as typeof allocation)
              }
              className="h-8 max-w-full rounded-md border border-border bg-card px-2 text-xs"
            >
              <option>All departments</option>
              <option>Over 85% used</option>
            </select>
          }
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[26px] font-semibold">
                $500K{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  / $600K
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                83.3% deployed across four departments
              </p>
            </div>
            <span
              className={`rounded-md px-2 py-1 text-xs font-medium ${executiveAccents[3].soft} ${executiveAccents[3].text}`}
            >
              $100K available
            </span>
          </div>
          <ul className="space-y-5">
            {budgets
              .filter(
                (b) =>
                  allocation === "All departments" || b.spent / b.budget > 0.85,
              )
              .map((b) => (
                <li key={b.name}>
                  <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm">
                    <span className="font-medium">{b.name}</span>
                    <span className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        ${b.spent}K
                      </span>{" "}
                      / ${b.budget}K{" "}
                      <span className="ms-2">
                        {Math.round((b.spent / b.budget) * 100)}%
                      </span>
                    </span>
                  </div>
                  <div
                    role="meter"
                    aria-label={`${b.name} budget used`}
                    aria-valuemin={0}
                    aria-valuemax={b.budget}
                    aria-valuenow={b.spent}
                    className="h-2 overflow-hidden rounded-full bg-muted"
                  >
                    <div
                      className={`h-full rounded-full ${executiveAccents[b.color]!.background}`}
                      style={{ width: `${(b.spent / b.budget) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
          </ul>
          <p className="mt-5 flex items-start gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
            <CircleDollarSign
              className={`size-4 shrink-0 ${executiveAccents[3].text}`}
            />
            Corporate &amp; admin has used 92.5% of its budget; $6K remains.
          </p>
        </Card>
        <Card
          title="Business pulse"
          description="Recent milestones and operating signals"
          className="xl:col-span-5"
          bodyClassName="p-5"
          action={
            <span className="text-xs text-muted-foreground">Last 24 hours</span>
          }
        >
          <ol className="space-y-5">
            {[
              {
                title: "Enterprise agreement signed",
                detail: "Halcyon Retail · $86K annual contract",
                time: "22 minutes ago",
                color: 0,
                up: true,
              },
              {
                title: "APAC collections accelerated",
                detail: "Settlement time reduced from 5 to 3 days",
                time: "1 hour ago",
                color: 3,
                up: true,
              },
              {
                title: "Services capacity under review",
                detail: "Utilization at 91%; delivery review scheduled",
                time: "3 hours ago",
                color: 1,
                up: false,
              },
              {
                title: "August board pack ready",
                detail: "Financial results reconciled and approved",
                time: "5 hours ago",
                color: 2,
                up: true,
              },
            ].map((a) => (
              <li key={a.title} className="flex items-start gap-3">
                <span
                  className={`rounded-lg p-2 ${executiveAccents[a.color]!.soft} ${executiveAccents[a.color]!.text}`}
                >
                  {a.up ? (
                    <ArrowUpRight className="size-4" />
                  ) : (
                    <ArrowDownRight className="size-4" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {a.detail}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {a.time}
                  </p>
                </div>
                <ChevronRight
                  className="mt-2 size-3.5 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </>
  );
}
