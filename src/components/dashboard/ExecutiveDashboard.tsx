import { useState, type ReactNode } from "react";
import {
  Download,
  Plus,
  TrendingUp,
  Wallet,
  Users,
  ArrowUpRight,
  Target,
  CircleCheck,
  CircleAlert,
  Globe2,
  ArrowDownRight,
  CircleDollarSign,
  GitBranch,
  RefreshCw,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Card, PageHeader } from "./widgets";
import { ExecutiveAdvancedWidgets } from "./ExecutiveAdvancedWidgets";
import { executiveAccents, executiveColors } from "./executive-widget-palette";
import { Button } from "@/components/ui/button";

const periods = {
  "6 months": {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    revenue: [640, 680, 710, 755, 790, 840],
    plan: [620, 650, 690, 730, 780, 810],
  },
  "12 months": {
    labels: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    revenue: [450, 480, 520, 560, 580, 610, 640, 680, 710, 755, 790, 840],
    plan: [460, 490, 510, 540, 570, 600, 620, 650, 690, 730, 780, 810],
  },
};
const units = [
  {
    name: "Enterprise",
    detail: "Strategic accounts",
    revenue: 378,
    growth: 18.4,
    margin: 38,
    attainment: 108,
    color: "bg-[var(--chart-1)]",
  },
  {
    name: "Commercial",
    detail: "Mid-market business",
    revenue: 252,
    growth: 12.8,
    margin: 32,
    attainment: 96,
    color: "bg-[var(--chart-2)]",
  },
  {
    name: "Self-serve",
    detail: "Digital acquisition",
    revenue: 126,
    growth: 22.6,
    margin: 42,
    attainment: 112,
    color: "bg-[var(--chart-3)]",
  },
  {
    name: "Services",
    detail: "Implementation & advisory",
    revenue: 84,
    growth: -3.2,
    margin: 24,
    attainment: 84,
    color: "bg-[var(--chart-4)]",
  },
];
const regions = [
  {
    name: "North America",
    share: 45,
    value: "$378K",
    color: "bg-[var(--chart-1)]",
  },
  { name: "Europe", share: 30, value: "$252K", color: "bg-[var(--chart-2)]" },
  {
    name: "Asia Pacific",
    share: 18,
    value: "$151.2K",
    color: "bg-[var(--chart-3)]",
  },
  {
    name: "Other markets",
    share: 7,
    value: "$58.8K",
    color: "bg-[var(--chart-4)]",
  },
];
const priorities = [
  {
    title: "Accelerate enterprise expansion",
    detail:
      "$126K in qualified upsell opportunities. Sales review scheduled for Aug 21.",
    owner: "Sales - Aug 21",
    tone: "primary" as const,
  },
  {
    title: "Protect services profitability",
    detail:
      "Margin is 4 points below the 28% target. Review delivery capacity and project scope.",
    owner: "Operations - Aug 22",
    tone: "warning" as const,
  },
  {
    title: "Scale the APAC launch",
    detail:
      "Regional revenue grew 24% month over month. Validate the next market investment.",
    owner: "Strategy - Aug 25",
    tone: "info" as const,
  },
];

function Badge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: string;
}) {
  const accent =
    executiveAccents[
      tone === "warning" ? 1 : tone === "info" ? 3 : tone === "success" ? 2 : 0
    ];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11.5px] font-semibold ${tone === "muted" ? "bg-muted text-muted-foreground" : `${accent.soft} ${accent.text}`}`}
    >
      {children}
    </span>
  );
}

function Delta({ value, caption }: { value: number; caption?: string }) {
  const accent = executiveAccents[value >= 0 ? 2 : 1];
  return (
    <span className="inline-flex flex-wrap items-center gap-1 text-[12.5px]">
      <span
        className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-semibold ${accent.soft} ${accent.text}`}
      >
        {value >= 0 ? (
          <ArrowUpRight className="size-3.5" />
        ) : (
          <ArrowDownRight className="size-3.5" />
        )}
        {value >= 0 ? "+" : ""}
        {value}%
      </span>
      {caption && <span className="text-muted-foreground">{caption}</span>}
    </span>
  );
}

function Progress({
  value,
  label,
  color = "bg-[var(--chart-1)]",
}: {
  value: number;
  label: string;
  color?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 overflow-hidden rounded-full bg-muted"
    >
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function ExecutiveDashboard() {
  const { base } = useChartTheme();
  const [period, setPeriod] = useState<keyof typeof periods>("6 months");
  const [reviewed, setReviewed] = useState<string[]>([]);
  const data = periods[period];
  const palette = executiveColors.map((color) => token(color));
  const revenueOptions = mergeOptions(base, {
    chart: { type: "line" },
    colors: [palette[0]!, palette[3]!],
    stroke: { width: [0, 2], dashArray: [0, 5], curve: "straight" },
    plotOptions: { bar: { columnWidth: "38%", borderRadius: 4 } },
    fill: { opacity: [1, 1] },
    xaxis: { categories: data.labels },
    yaxis: {
      labels: { formatter: (value: number) => `$${Math.round(value)}K` },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (value: number) => `$${value.toLocaleString()}K` },
    },
    legend: { position: "top", horizontalAlign: "left" },
  });
  const marginOptions = mergeOptions(base, {
    chart: { type: "radialBar", sparkline: { enabled: true } },
    colors: [palette[2]!],
    stroke: { lineCap: "round" },
    labels: ["Operating margin"],
    plotOptions: {
      radialBar: {
        startAngle: -110,
        endAngle: 110,
        hollow: { size: "72%" },
        track: { background: token("--muted"), strokeWidth: "100%" },
        dataLabels: {
          name: {
            offsetY: 25,
            fontSize: "12px",
            color: token("--muted-foreground"),
          },
          value: {
            offsetY: -15,
            fontSize: "26px",
            fontWeight: 600,
            color: token("--foreground"),
            formatter: (v: number) => `${v}%`,
          },
        },
      },
    },
  });
  const regionOptions = mergeOptions(base, {
    chart: { type: "donut" },
    colors: palette,
    labels: regions.map((region) => region.name),
    stroke: { width: 4, colors: [token("--card")] },
    legend: { show: false },
    tooltip: { y: { formatter: (value: number) => `${value}% of revenue` } },
    plotOptions: {
      pie: {
        donut: {
          size: "76%",
          labels: {
            show: true,
            value: { formatter: (value: string) => `${value}%` },
            total: {
              show: true,
              showAlways: true,
              label: "28 countries",
              color: token("--muted-foreground"),
              formatter: () => "$840K",
            },
          },
        },
      },
    },
  });
  const exportReport = () => {
    const rows = [
      "Business unit,August revenue (USD),Growth (%),Margin (%),Quota attainment (%)",
      ...units.map(
        (u) =>
          `${u.name},${u.revenue * 1000},${u.growth},${u.margin},${u.attainment}`,
      ),
    ];
    const url = URL.createObjectURL(
      new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "executive-august-2026.csv";
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Executive report exported");
  };

  return (
    <>
      <PageHeader
        title="Executive overview"
        subtitle="Company-wide performance for August 2026"
        breadcrumb={["Edzen", "Dashboards", "Executive"]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2"
              onClick={exportReport}
            >
              <Download className="size-4" /> Export
            </Button>
            <Button
              size="sm"
              className="h-9 gap-2"
              onClick={() => {
                exportReport();
                toast.success("New August business-unit report created");
              }}
            >
              <Plus className="size-4" /> New report
            </Button>
          </>
        }
      />


      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Annual recurring revenue",
            value: "$8.64M",
            change: "+16.2% YoY",
            detail: "$720K monthly recurring revenue",
            icon: CircleDollarSign,
          },
          {
            label: "Qualified pipeline",
            value: "$3.8M",
            change: "3.4x coverage",
            detail: "Against $960K next-quarter target",
            icon: GitBranch,
          },
          {
            label: "Net revenue retention",
            value: "112%",
            change: "+4 pts YoY",
            detail: "Expansion outpaces contraction",
            icon: RefreshCw,
          },
          {
            label: "Revenue per employee",
            value: "$14.0K",
            change: "+9.4% YoY",
            detail: "$840K revenue / 60 employees",
            icon: UserRound,
          },
        ].map((metric, index) => {
          const MetricIcon = metric.icon;
          return (
            <Card key={metric.label} bodyClassName="p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white ${executiveAccents[index]!.background}`}
                  aria-hidden="true"
                >
                  <MetricIcon className="size-5" strokeWidth={1.75} />
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <p className="text-[26px] font-semibold">{metric.value}</p>
                <span
                  className={`text-xs font-medium ${executiveAccents[index]!.text}`}
                >
                  {metric.change}
                </span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                {metric.detail}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="Revenue command"
          description="August performance, plan coverage, and business-unit contribution"
          action={<Badge tone="success">$30K above plan</Badge>}
        >
          <div className="grid gap-4 md:grid-cols-[1fr_.95fr]">
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-primary-foreground/70">
                <TrendingUp className="size-4" /> Revenue this month
              </span>
              <p className="mt-5 text-4xl font-semibold">$840,000</p>
              <p className="mt-2 text-sm text-primary-foreground/75">
                103.7% of plan delivered across four business units.
              </p>
              <div className="mt-6 grid grid-cols-3 divide-x divide-primary-foreground/15 text-xs">
                <span>
                  <b className="block text-sm">$810K</b>plan
                </span>
                <span className="ps-3">
                  <b className="block text-sm">+6.3%</b>vs July
                </span>
                <span className="ps-3">
                  <b className="block text-sm">$140K</b>weekly run rate
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                ["Enterprise", "$378K", "45%", "bg-chart-1"],
                ["Commercial", "$252K", "30%", "bg-chart-2"],
                ["Self-serve", "$126K", "15%", "bg-chart-3"],
                ["Services", "$84K", "10%", "bg-chart-4"],
              ].map(([unit, value, share, color]) => (
                <div
                  key={unit as string}
                  className="flex items-center gap-3 rounded-xl border border-border p-3"
                >
                  <span
                    className={(color as string) + " size-2.5 rounded-full"}
                  />
                  <span className="flex-1 text-sm">{unit as string}</span>
                  <b className="text-sm">{value as string}</b>
                  <small className="w-8 text-right text-xs text-muted-foreground">
                    {share as string}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Value creation pulse"
          description="Profitability and customer quality in one executive view"
        >
          <div className="grid grid-cols-[auto_1fr] gap-5">
            <div className="grid size-28 place-items-center rounded-full border-[12px] border-[var(--chart-3)] text-center">
              <span>
                <b className="block text-2xl">32%</b>
                <small className="text-[10px] text-muted-foreground">
                  margin
                </small>
              </span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Operating profit</p>
              <p className="mt-1 text-3xl font-semibold">$268,800</p>
              <p className="mt-2 text-xs font-medium text-success">
                +8.2% from July · 2 pts above target
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-chart-4 text-white">
                  <Users className="size-4" />
                </span>
                <span>
                  <b className="block text-sm">9,412 active customers</b>
                  <small className="text-xs text-muted-foreground">
                    112% net revenue retention
                  </small>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center text-xs">
            <div>
              <b className="block text-base">4.2K</b>
              <span className="text-muted-foreground">monthly active</span>
            </div>
            <div>
              <b className="block text-base">3.1K</b>
              <span className="text-muted-foreground">weekly active</span>
            </div>
            <div>
              <b className="block text-base text-success">94</b>
              <span className="text-muted-foreground">health score</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Revenue performance"
          description="Actual revenue against the operating plan"
          className="xl:col-span-8"
          action={
            <div
              className="flex rounded-lg border border-border p-1"
              role="group"
              aria-label="Revenue chart period"
            >
              {(Object.keys(periods) as (keyof typeof periods)[]).map((p) => (
                <button
                  key={p}
                  aria-pressed={period === p}
                  onClick={() => setPeriod(p)}
                  className={`rounded-md px-3 py-1 text-xs font-medium ${period === p ? "bg-[var(--chart-1)] text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          }
          bodyClassName="p-3"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2 px-2 pt-1">
            <div>
              <p className="text-xs text-muted-foreground">Period revenue</p>
              <p className="mt-1 text-xl font-semibold">
                ${(data.revenue.reduce((a, b) => a + b, 0) / 1000).toFixed(2)}M
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Above period plan</p>
              <p className="mt-1 text-xl font-semibold text-[var(--chart-3)]">
                +$
                {data.revenue.reduce((a, b) => a + b, 0) -
                  data.plan.reduce((a, b) => a + b, 0)}
                K
              </p>
            </div>
          </div>
          <ApexChart
            type="line"
            height={275}
            options={revenueOptions}
            series={[
              { name: "Actual revenue", type: "column", data: data.revenue },
              { name: "Operating plan", type: "line", data: data.plan },
            ]}
          />
          <div className="mx-2 flex items-start gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
            <ArrowUpRight className="size-4 shrink-0 text-[var(--chart-3)]" />
            August revenue exceeded plan by 3.7%, led by enterprise expansion.
          </div>
        </Card>
        <Card
          title="Financial health"
          description="Profitability & cash resilience"
          className="xl:col-span-4"
          action={<Badge tone="success">Healthy</Badge>}
          bodyClassName="p-5"
        >
          <ApexChart
            type="radialBar"
            height={205}
            options={marginOptions}
            series={[32]}
          />
          <div className="space-y-3">
            <div className="flex justify-between border-b border-border pb-3 text-sm">
              <span className="text-muted-foreground">Margin target</span>
              <span className="font-medium">
                30% <span className="text-[var(--chart-3)]">(+2 pts)</span>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Cash balance</span>
              <span className="font-semibold">$2.46M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Operating runway</span>
              <span className="font-semibold">18 months</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Receivables overdue</span>
              <span className="font-semibold text-[var(--chart-2)]">
                $42,600
              </span>
            </div>
          </div>
        </Card>

        <Card
          title="Business unit scorecard"
          description="August revenue, efficiency and quota attainment"
          className="xl:col-span-7"
          bodyClassName="p-0"
          action={<Badge>4 business units</Badge>}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-start text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  {[
                    "Business unit",
                    "Revenue",
                    "Growth",
                    "Margin",
                    "Quota",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 text-start font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {units.map((u) => (
                  <tr
                    key={u.name}
                    className="border-b border-border last:border-0 hover:bg-muted/50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`size-2 shrink-0 rounded-full ${u.color}`}
                        />
                        <span className="font-medium">{u.name}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {u.detail}
                      </p>
                    </td>
                    <td className="px-5 py-4 font-semibold">${u.revenue}K</td>
                    <td className="px-5 py-4">
                      <Delta value={u.growth} />
                    </td>
                    <td className="px-5 py-4">{u.margin}%</td>
                    <td className="px-5 py-4">
                      <span
                        className={
                          u.attainment >= 100
                            ? "text-[var(--chart-3)]"
                            : "text-muted-foreground"
                        }
                      >
                        {u.attainment}%
                      </span>
                      <div className="mt-2 w-16">
                        <Progress
                          value={Math.min(u.attainment, 100)}
                          label={`${u.name} quota completion`}
                          color={u.color}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span>Enterprise contributes 45% of total revenue</span>
            <span className="font-semibold text-foreground">Total $840K</span>
          </div>
          <div className="mx-5 mb-5 mt-3 rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex flex-wrap justify-between gap-2 text-xs">
              <span className="font-medium">Revenue concentration</span>
              <span className="text-muted-foreground">
                35.6% weighted unit margin
              </span>
            </div>
            <div
              className="my-3 flex h-2 overflow-hidden rounded-full"
              aria-hidden="true"
            >
              {units.map((unit) => (
                <span
                  key={unit.name}
                  className={unit.color}
                  style={{ width: `${(unit.revenue / 840) * 100}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {units.map((unit) => (
                <div
                  key={unit.name}
                  className="flex items-center gap-1.5 text-xs"
                >
                  <span className={`size-1.5 rounded-full ${unit.color}`} />
                  <span className="text-muted-foreground">{unit.name}</span>
                  <span className="font-medium">
                    {Math.round((unit.revenue / 840) * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card
          title="Revenue footprint"
          description="August contribution by market"
          className="xl:col-span-5"
          action={<Globe2 className="size-4 text-muted-foreground" />}
          bodyClassName="p-5"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-[26px] font-semibold">$840K</span>
            <span className="text-xs text-muted-foreground">
              across 28 countries
            </span>
          </div>
          <ApexChart
            type="donut"
            height={215}
            options={regionOptions}
            series={regions.map((region) => region.share)}
          />
          <ul className="space-y-4">
            {regions.map((r) => (
              <li key={r.name} className="flex items-center gap-2 text-sm">
                <span className={`size-2 rounded-full ${r.color}`} />
                <span className="min-w-0 flex-1">{r.name}</span>
                <span className="font-medium">{r.value}</span>
                <span className="w-9 text-end text-xs text-muted-foreground">
                  {r.share}%
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-lg bg-[color-mix(in_oklab,var(--chart-4)_10%,transparent)] p-3 text-xs leading-relaxed">
            <span className="font-semibold text-[var(--chart-4)]">
              APAC momentum
            </span>
            <p className="mt-1 text-muted-foreground">
              Revenue up 24% vs July following the regional launch.
            </p>
          </div>
        </Card>

        <Card
          title="Quarterly commitments"
          description="Q3 progress - through August 31"
          className="xl:col-span-4"
          action={<Target className="size-4 text-[var(--chart-1)]" />}
          bodyClassName="space-y-5 p-5"
        >
          {[
            {
              label: "Revenue",
              value: "$1.63M",
              target: "$2.40M",
              progress: 68,
              color: "bg-[var(--chart-1)]",
            },
            {
              label: "New enterprise accounts",
              value: "38",
              target: "50",
              progress: 76,
              color: "bg-[var(--chart-4)]",
            },
            {
              label: "Market launches",
              value: "3",
              target: "4",
              progress: 75,
              color: "bg-[var(--chart-3)]",
            },
          ].map((g) => (
            <div key={g.label}>
              <div className="flex justify-between gap-2 text-sm">
                <span className="font-medium">{g.label}</span>
                <span className="font-semibold">{g.progress}%</span>
              </div>
              <p className="mb-2 mt-1 text-xs text-muted-foreground">
                {g.value} of {g.target}
              </p>
              <Progress
                value={g.progress}
                label={`${g.label} quarterly goal`}
                color={g.color}
              />
            </div>
          ))}
          <div className="flex items-start gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <CircleAlert className="size-4 shrink-0 text-[var(--chart-2)]" />
            September revenue of $770K is needed to reach the quarter target.
          </div>
        </Card>
        <Card
          title="Executive priorities"
          description="Signals that deserve your attention this week"
          className="xl:col-span-8"
          action={
            <Badge tone="primary">
              {priorities.length - reviewed.length} to review
            </Badge>
          }
          bodyClassName="p-0"
        >
          <ul className="divide-y divide-border">
            {priorities.map((item, i) => {
              const done = reviewed.includes(item.title);
              return (
                <li key={item.title} className="flex items-start gap-3 p-5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold text-muted-foreground">
                    {done ? (
                      <CircleCheck className="size-4 text-[var(--chart-3)]" />
                    ) : (
                      `0${i + 1}`
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <Badge tone={item.tone}>{item.owner}</Badge>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label={`${done ? "Reopen" : "Review"} ${item.title}`}
                    onClick={() =>
                      setReviewed((current) =>
                        done
                          ? current.filter((t) => t !== item.title)
                          : [...current, item.title],
                      )
                    }
                    className="h-7 px-2 text-xs"
                  >
                    {done ? "Reviewed" : "Review"}
                  </Button>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
      <ExecutiveAdvancedWidgets />
    </>
  );
}
