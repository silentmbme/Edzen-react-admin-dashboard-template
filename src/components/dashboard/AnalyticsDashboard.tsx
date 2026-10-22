import { useState } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  Download,
  Globe2,
  MousePointerClick,
  Plus,
  Radio,
  Search,
  Smartphone,
  Target,
  UsersRound,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Button } from "@/components/ui/button";
import { Card, PageHeader } from "./widgets";
import {
  analyticsAccents as accents,
  analyticsChannels as channels,
  analyticsPages as pages,
  analyticsPalette,
} from "./analytics-data";

const trends = {
  "Last 7 days": {
    labels: [
      "Aug 25",
      "Aug 26",
      "Aug 27",
      "Aug 28",
      "Aug 29",
      "Aug 30",
      "Aug 31",
    ],
    values: [121, 138, 132, 154, 162, 143, 150],
  },
  "Last 30 days": {
    labels: [
      "Aug 1–4",
      "Aug 5–8",
      "Aug 9–12",
      "Aug 13–16",
      "Aug 17–20",
      "Aug 21–24",
      "Aug 25–28",
      "Aug 29–31",
    ],
    values: [112, 116, 121, 123, 128, 132, 138, 130],
  },
};
const devices = [
  { name: "Desktop", share: 58 },
  { name: "Mobile", share: 34 },
  { name: "Tablet", share: 6 },
  { name: "Other", share: 2 },
];
const number = (value: number) => Math.round(value).toLocaleString("en-US");
const selectClass =
  "h-9 max-w-full rounded-md border border-border bg-card px-3 text-xs";

function Meter({
  value,
  label,
  index = 0,
}: {
  value: number;
  label: string;
  index?: number;
}) {
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 overflow-hidden rounded-full bg-muted"
    >
      <div
        className={`h-full rounded-full ${accents[index % 4]!.bg}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function AnalyticsDashboard() {
  const { base } = useChartTheme();
  const palette = analyticsPalette.map((color) => token(color));
  const [tab, setTab] = useState("Overview");
  const [traffic, setTraffic] = useState("All traffic");
  const [period, setPeriod] = useState<keyof typeof trends>("Last 30 days");
  const [metric, setMetric] = useState<
    "Sessions" | "Engagement" | "Conversions"
  >("Sessions");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Views");
  const [dismissed, setDismissed] = useState<string[]>([]);
  const selected = channels.filter(
    (c) => traffic === "All traffic" || traffic === c.name,
  );
  const periodScale = period === "Last 7 days" ? 0.24 : 1;
  const sessions = selected.reduce((a, c) => a + c.sessions, 0) * periodScale;
  const engaged = selected.reduce((a, c) => a + c.engaged, 0) * periodScale;
  const conversions =
    selected.reduce((a, c) => a + c.conversions, 0) * periodScale;
  const visitors = sessions * 0.82;
  const allSessions = channels.reduce(
    (sum, channel) => sum + channel.sessions,
    0,
  );
  const conversionRate = (conversions / sessions) * 100;
  const timeline = trends[period];
  const weights = timeline.values.reduce((a, b) => a + b, 0);
  const total =
    metric === "Sessions"
      ? sessions
      : metric === "Engagement"
        ? engaged
        : conversions;
  const current = timeline.values.map((v) => Math.round((v / weights) * total));
  const previous = current.map((v, i) =>
    Math.round(v / (1.08 + (i % 3) * 0.03)),
  );
  const axisFormat = (value: number) =>
    value >= 1000 ? `${(value / 1000).toFixed(1)}K` : String(Math.round(value));
  const trendOptions = mergeOptions(base, {
    chart: { type: "area" },
    colors: [palette[0]!, palette[3]!],
    stroke: { width: [3, 2], dashArray: [0, 5], curve: "smooth" },
    fill: { opacity: [0.12, 0] },
    xaxis: { categories: timeline.labels },
    yaxis: { labels: { formatter: axisFormat } },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (v: number) => number(v) },
    },
    legend: { position: "top", horizontalAlign: "left" },
  });
  const deviceOptions = mergeOptions(base, {
    chart: { type: "donut" },
    colors: palette,
    labels: devices.map((d) => d.name),
    stroke: { width: 4, colors: [token("--card")] },
    legend: { show: false },
    tooltip: { y: { formatter: (v: number) => `${v}%` } },
    plotOptions: {
      pie: {
        donut: {
          size: "78%",
          labels: {
            show: true,
            value: { formatter: (v: string) => `${v}%` },
            total: {
              show: true,
              showAlways: true,
              label: "Sessions",
              color: token("--muted-foreground"),
              formatter: () => number(sessions),
            },
          },
        },
      },
    },
  });
  const acquisitionOptions = mergeOptions(base, {
    chart: { type: "bar", stacked: true, stackType: "100%" },
    colors: [palette[0]!, palette[1]!],
    stroke: { width: 0 },
    plotOptions: {
      bar: { horizontal: true, barHeight: "42%", borderRadius: 3 },
    },
    xaxis: {
      categories: selected.map((c) => c.name),
      labels: { formatter: (v: string) => `${Math.round(Number(v))}%` },
    },
    yaxis: { labels: { maxWidth: 110 } },
    tooltip: { y: { formatter: (v: number) => number(v) } },
    legend: { position: "bottom", horizontalAlign: "left" },
  });
  const heatOptions = mergeOptions(base, {
    chart: { type: "heatmap" },
    colors: palette,
    stroke: { width: 4, colors: [token("--card")] },
    dataLabels: { enabled: false },
    plotOptions: {
      heatmap: {
        radius: 3,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 39, color: palette[3]!, name: "Quiet" },
            { from: 40, to: 59, color: palette[1]!, name: "Steady" },
            { from: 60, to: 79, color: palette[2]!, name: "Active" },
            { from: 80, to: 100, color: palette[0]!, name: "Peak" },
          ],
        },
      },
    },
    xaxis: {
      type: "category",
      categories: ["00–04", "04–08", "08–12", "12–16", "16–20", "20–24"],
    },
    legend: { show: false },
    tooltip: {
      y: {
        title: { formatter: () => "Activity index:" },
        formatter: (v: number) => `${v}/100`,
      },
    },
  });
  const heatSeries = ["Sun", "Sat", "Fri", "Thu", "Wed", "Tue", "Mon"].map(
    (name, i) => ({
      name,
      data: [18, 24, 64, 92, 78, 46].map((value, j) => ({
        x: ["00–04", "04–08", "08–12", "12–16", "16–20", "20–24"][j]!,
        y: Math.min(
          100,
          Math.max(5, value - (i < 2 ? 25 : 0) + ((i * 7 + j * 3) % 12)),
        ),
      })),
    }),
  );
  const filteredPages = pages
    .filter((p) =>
      `${p.path} ${p.title}`.toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      sort === "Conversions"
        ? b.conversions - a.conversions
        : b.views - a.views,
    );
  const exportReport = () => {
    const csv = [
      "Channel,Sessions,Engaged sessions,Conversions",
      ...selected.map(
        (c) =>
          `${c.name},${Math.round(c.sessions * periodScale)},${Math.round(c.engaged * periodScale)},${Math.round(c.conversions * periodScale)}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${period === "Last 7 days" ? "7" : "30"}-days.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Analytics report exported");
  };
  const overview = tab === "Overview";
  return (
    <>
      <PageHeader
        title="Analytics"
        subtitle="See how visitors discover, explore and convert across your product."
        breadcrumb={["Edzen", "Dashboards", "Analytics"]}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={exportReport}>
              <Download className="size-4" />
              Export
            </Button>
            <Button size="sm" onClick={exportReport}>
              <Plus className="size-4" />
              Create report
            </Button>
          </>
        }
      />
      <Card bodyClassName="p-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            className="flex flex-wrap gap-1 rounded-lg bg-muted p-1"
            role="group"
            aria-label="Analytics sections"
          >
            {["Overview", "Acquisition", "Behavior", "Conversion"].map((t) => (
              <Button
                key={t}
                size="sm"
                variant={tab === t ? "default" : "ghost"}
                aria-pressed={tab === t}
                onClick={() => setTab(t)}
              >
                {t}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              aria-label="Traffic source"
              value={traffic}
              onChange={(e) => setTraffic(e.target.value)}
              className={selectClass}
            >
              <option>All traffic</option>
              {channels.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </select>
            <select
              aria-label="Analytics date range"
              value={period}
              onChange={(e) => setPeriod(e.target.value as keyof typeof trends)}
              className={selectClass}
            >
              {Object.keys(trends).map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Unique visitors",
            value: number(visitors),
            change: "+14.2%",
            icon: UsersRound,
          },
          {
            label: "Engaged sessions",
            value: number(engaged),
            change: `${((engaged / sessions) * 100).toFixed(1)}% rate`,
            icon: MousePointerClick,
          },
          {
            label: "Average engagement",
            value: traffic === "Paid campaigns" ? "2m 48s" : "4m 18s",
            change: "+9.1%",
            icon: Clock3,
          },
          {
            label: "Session conversion",
            value: `${conversionRate.toFixed(2)}%`,
            change: "+0.62 pts",
            icon: Target,
          },
        ].map((m, i) => {
          const Icon = m.icon;
          return (
            <Card key={m.label} bodyClassName="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-muted-foreground">
                  {m.label}
                </p>
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white ${accents[i]!.bg}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-3 text-[26px] font-semibold">{m.value}</p>
              <p className="mt-2 flex flex-wrap items-center gap-1 text-xs">
                {i !== 1 && (
                  <ArrowUpRight className={`size-3.5 ${accents[i]!.text}`} />
                )}
                <span className={`font-medium ${accents[i]!.text}`}>
                  {m.change}
                </span>
                <span className="text-muted-foreground">
                  {i === 1 ? "of selected sessions" : "vs previous period"}
                </span>
              </p>
            </Card>
          );
        })}
      </div>
      {overview && (
        <div className="mt-4 grid gap-4 xl:grid-cols-12">
          <Card
            title="Audience momentum"
            description="Current period compared with the preceding period"
            className="xl:col-span-8"
            bodyClassName="p-5"
            action={
              <select
                aria-label="Audience metric"
                value={metric}
                onChange={(e) => setMetric(e.target.value as typeof metric)}
                className={selectClass}
              >
                <option>Sessions</option>
                <option>Engagement</option>
                <option>Conversions</option>
              </select>
            }
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[26px] font-semibold">{number(total)}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric} across the selected period
                </p>
              </div>
              <span className={`text-xs font-medium ${accents[0].text}`}>
                August 2026
              </span>
            </div>
            <ApexChart
              type="area"
              height={275}
              options={trendOptions}
              series={[
                { name: "Current period", data: current },
                { name: "Previous period", data: previous },
              ]}
            />
            <div className="flex items-start gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
              <Activity className={`size-4 shrink-0 ${accents[0].text}`} />
              Audience growth is accelerating toward the end of the month.
            </div>
          </Card>
          <Card
            title="Device composition"
            description="Session share across device categories"
            className="xl:col-span-4"
            bodyClassName="p-5"
            action={<Smartphone className="size-4 text-muted-foreground" />}
          >
            <ApexChart
              type="donut"
              height={230}
              options={deviceOptions}
              series={devices.map((d) => d.share)}
            />
            <ul className="space-y-3">
              {devices.map((d, i) => (
                <li key={d.name} className="flex items-center gap-2 text-sm">
                  <span className={`size-2 rounded-full ${accents[i]!.bg}`} />
                  <span className="flex-1 text-muted-foreground">{d.name}</span>
                  <span className="font-semibold">{d.share}%</span>
                  <span className="w-14 text-end text-xs text-muted-foreground">
                    {number((sessions * d.share) / 100)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
      {(overview || tab === "Acquisition") && (
        <div className="mt-4 grid gap-4 xl:grid-cols-12">
          <Card
            title="Acquisition quality"
            description="Engaged and non-engaged sessions by channel"
            className="xl:col-span-7"
            bodyClassName="p-5"
          >
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-xs text-muted-foreground">Engagement rate</p>
                <p className="mt-1 text-xl font-semibold">
                  {((engaged / sessions) * 100).toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  Channel conversions
                </p>
                <p className="mt-1 text-xl font-semibold">
                  {number(conversions)}
                </p>
              </div>
            </div>
            <ApexChart
              type="bar"
              height={245}
              options={acquisitionOptions}
              series={[
                {
                  name: "Engaged",
                  data: selected.map((c) =>
                    Math.round(c.engaged * periodScale),
                  ),
                },
                {
                  name: "Not engaged",
                  data: selected.map((c) =>
                    Math.round((c.sessions - c.engaged) * periodScale),
                  ),
                },
              ]}
            />
            <p className="border-t border-border pt-3 text-xs text-muted-foreground">
              Partner referrals convert at 6.0%, the strongest rate across
              channels.
            </p>
          </Card>
          <Card
            title="Channel efficiency"
            description="Conversion yield and acquisition investment"
            className="xl:col-span-5"
            bodyClassName="p-5"
          >
            <ul className="space-y-5">
              {selected.map((c) => {
                const index = channels.indexOf(c);
                return (
                  <li key={c.name}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <span
                          className={`size-2 rounded-full ${accents[index]!.bg}`}
                        />
                        {c.name}
                      </span>
                      <span
                        className={`text-xs font-semibold ${accents[index]!.text}`}
                      >
                        {((c.conversions / c.sessions) * 100).toFixed(1)}% CVR
                      </span>
                    </div>
                    <div className="mb-2 mt-1 flex justify-between gap-2 text-xs text-muted-foreground">
                      <span>
                        {number(c.conversions * periodScale)} conversions
                      </span>
                      <span>
                        {c.cost
                          ? `$${(c.cost / c.conversions).toFixed(0)} per conversion`
                          : "No media spend"}
                      </span>
                    </div>
                    <Meter
                      value={(c.engaged / c.sessions) * 100}
                      label={`${c.name} engagement rate`}
                      index={index}
                    />
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
              Paid spend:{" "}
              <span className="font-semibold text-foreground">
                $
                {number(selected.reduce((a, c) => a + c.cost, 0) * periodScale)}
              </span>{" "}
              · Direct media costs only
            </div>
          </Card>
        </div>
      )}
      {(overview || tab === "Conversion") && (
        <div className="mt-4 grid gap-4 xl:grid-cols-12">
          <Card
            title="Conversion journey"
            description="Session-based progression from discovery to activation"
            className="xl:col-span-8"
            bodyClassName="p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { name: "All sessions", count: sessions, rate: 100 },
                { name: "Product explored", count: sessions * 0.64, rate: 64 },
                { name: "Trial started", count: sessions * 0.12, rate: 12 },
                {
                  name: "Goal completed",
                  count: conversions,
                  rate: conversionRate,
                },
              ].map((step, i) => (
                <div
                  key={step.name}
                  className="rounded-lg border border-border p-4"
                >
                  <span className={`text-xs font-semibold ${accents[i]!.text}`}>
                    0{i + 1}
                  </span>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {step.name}
                  </p>
                  <p className="mt-1 text-xl font-semibold">
                    {number(step.count)}
                  </p>
                  <div className="my-3">
                    <Meter
                      value={step.rate}
                      label={`${step.name} share of sessions`}
                      index={i}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {step.rate.toFixed(i === 3 ? 2 : 0)}% of sessions
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <ArrowDownRight
                className={`size-4 shrink-0 ${accents[1].text}`}
              />
              Largest drop-off: product exploration to trial signup. Prioritize
              the trial entry experience.
            </p>
          </Card>
          <Card
            title="Optimization queue"
            description="Actions informed by audience behavior"
            className="xl:col-span-4"
            bodyClassName="p-5"
          >
            <ul className="space-y-4">
              {[
                {
                  title: "Simplify mobile signup",
                  detail:
                    "Reduce form fields and improve the trial entry flow.",
                },
                {
                  title: "Expand referral partnerships",
                  detail:
                    "Build on the strongest converting acquisition channel.",
                },
              ]
                .filter((item) => !dismissed.includes(item.title))
                .map((item, i) => (
                  <li
                    key={item.title}
                    className="border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                    <button
                      onClick={() => setDismissed((v) => [...v, item.title])}
                      className={`mt-2 text-xs font-semibold ${accents[i]!.text}`}
                    >
                      Mark reviewed
                    </button>
                  </li>
                ))}
            </ul>
            {dismissed.length === 2 && (
              <div className="py-3 text-sm text-muted-foreground">
                All recommendations reviewed.
                <button
                  className="mt-3 block text-xs font-medium text-foreground"
                  onClick={() => setDismissed([])}
                >
                  Reset reviews
                </button>
              </div>
            )}
          </Card>
        </div>
      )}
      {(overview || tab === "Behavior") && (
        <div className="mt-4 grid gap-4 xl:grid-cols-12">
          <Card
            title="Engagement rhythm"
            description="Relative session activity by weekday and time · UTC"
            className="xl:col-span-7"
            bodyClassName="p-3"
          >
            <ApexChart
              type="heatmap"
              height={285}
              options={heatOptions}
              series={heatSeries}
            />
            <div className="flex flex-wrap gap-4 border-t border-border px-2 pt-3 text-xs text-muted-foreground">
              {[
                { label: "Quiet", i: 3 },
                { label: "Steady", i: 1 },
                { label: "Active", i: 2 },
                { label: "Peak", i: 0 },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1.5">
                  <span className={`size-2 rounded-sm ${accents[l.i]!.bg}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </Card>
          <Card
            title="Audience geography"
            description="Visitor contribution across key markets"
            className="xl:col-span-5"
            bodyClassName="p-5"
            action={<Globe2 className="size-4 text-muted-foreground" />}
          >
            <ul className="space-y-5">
              {[
                { name: "United States", share: 38 },
                { name: "United Kingdom", share: 22 },
                { name: "Germany", share: 16 },
                { name: "Other markets", share: 24 },
              ].map((country, i) => (
                <li key={country.name}>
                  <div className="mb-2 flex justify-between gap-2 text-sm">
                    <span className="font-medium">{country.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {number((visitors * country.share) / 100)}{" "}
                      <span className="ms-2 font-semibold text-foreground">
                        {country.share}%
                      </span>
                    </span>
                  </div>
                  <Meter
                    value={country.share}
                    label={`${country.name} visitor share`}
                    index={i}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-border pt-3 text-xs text-muted-foreground">
              Leading market: United States · {number(visitors * 0.38)} visitors
            </div>
          </Card>
        </div>
      )}
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Content performance"
          description="High-impact pages across the selected audience"
          className="xl:col-span-8"
          bodyClassName="p-0"
          action={
            <div className="flex flex-wrap gap-2">
              <label className="relative">
                <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
                <input
                  aria-label="Search analytics pages"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find a page..."
                  className="h-9 w-40 rounded-md border border-border bg-card pe-2 ps-8 text-xs"
                />
              </label>
              <select
                aria-label="Sort analytics pages"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={selectClass}
              >
                <option>Views</option>
                <option>Conversions</option>
              </select>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px] text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  {["Page", "Views", "Engagement", "Goals", "Avg. time"].map(
                    (h) => (
                      <th key={h} className="px-5 py-3 text-start font-medium">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredPages.map((p) => (
                  <tr
                    key={p.path}
                    className="border-b border-border last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-5 py-3.5">
                      <p className="font-medium">{p.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {p.path}
                      </p>
                    </td>
                    <td className="px-5 py-3.5 font-medium">
                      {number(
                        p.views *
                          periodScale *
                          (sessions / (allSessions * periodScale)),
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-xs">{p.engaged}%</span>
                      <div className="mt-1.5 w-16">
                        <Meter
                          value={p.engaged}
                          label={`${p.title} engagement`}
                        />
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      {number(
                        p.conversions *
                          periodScale *
                          (sessions / (allSessions * periodScale)),
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">
                      {p.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredPages.length === 0 && (
              <p className="p-6 text-center text-sm text-muted-foreground">
                No pages match your search.
              </p>
            )}
          </div>
        </Card>
        <Card
          title="Experience quality"
          description="Core Web Vitals · 75th percentile"
          className="xl:col-span-4"
          bodyClassName="p-5"
          action={<Radio className={`size-4 ${accents[0].text}`} />}
        >
          <p className="text-[26px] font-semibold">
            92
            <span className="text-sm font-normal text-muted-foreground">
              {" "}
              / 100
            </span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Overall experience score
          </p>
          <ul className="mt-5 space-y-4">
            {[
              {
                name: "Largest contentful paint",
                value: "1.8s",
                detail: "Target ≤ 2.5s",
                i: 0,
              },
              {
                name: "Interaction to next paint",
                value: "148ms",
                detail: "Target ≤ 200ms",
                i: 2,
              },
              {
                name: "Cumulative layout shift",
                value: "0.04",
                detail: "Target ≤ 0.10",
                i: 3,
              },
            ].map((v) => (
              <li
                key={v.name}
                className="flex items-center justify-between gap-3 border-b border-border pb-3 last:border-0"
              >
                <div>
                  <p className="text-xs font-medium">{v.name}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {v.detail}
                  </p>
                </div>
                <span className={`text-sm font-semibold ${accents[v.i]!.text}`}>
                  {v.value}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            All three metrics meet the selected performance targets.
          </p>
        </Card>
      </div>
    </>
  );
}
