import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Copy,
  Download,
  FileText,
  Flame,
  Layers3,
  Megaphone,
  MousePointer2,
  Plus,
  Send,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Badge, Card, PageHeader } from "./widgets";
import { Button } from "@/components/ui/button";

const flights = [
  ["Concept", "Aug 01", "Approved", "success"],
  ["Creative", "Aug 12", "In review", "warning"],
  ["Launch", "Aug 22", "Live", "primary"],
  ["Retarget", "Sep 03", "Queued", "info"],
] as const;

export function MarketingDashboard() {
  const { base } = useChartTheme();
  const [period, setPeriod] = useState("August");
  const [flightLive, setFlightLive] = useState(true);
  const [activeAudience, setActiveAudience] = useState("Operations leaders");

  const liftChart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "line", toolbar: { show: false } },
        colors: [token("--chart-1"), token("--chart-2"), token("--chart-3")],
        stroke: { curve: "smooth", width: [3, 2, 2] },
        dataLabels: { enabled: false },
        legend: { position: "top", horizontalAlign: "left" },
        xaxis: {
          categories: [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Week 6",
          ],
        },
        yaxis: { labels: { formatter: (value: number) => `${value}k` } },
        grid: { borderColor: token("--border"), strokeDashArray: 4 },
      }),
    [base],
  );
  const budgetChart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "donut", toolbar: { show: false } },
        labels: ["Paid social", "Search", "Content", "Partner"],
        colors: [
          token("--chart-1"),
          token("--chart-2"),
          token("--chart-3"),
          token("--chart-4"),
        ],
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: { colors: [token("--card")], width: 4 },
        plotOptions: {
          pie: {
            donut: {
              size: "68%",
              labels: {
                show: true,
                total: { show: true, label: "used", formatter: () => "$34.6K" },
              },
            },
          },
        },
      }),
    [base],
  );

  return (
    <>
      <PageHeader
        title="Marketing"
        subtitle="Run the launch, learn from attention, and turn signals into pipeline."
        breadcrumb={["Edzen", "Dashboards", "Marketing"]}
        actions={
          <>
            <select
              aria-label="Reporting period"
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              <option>August</option>
              <option>July</option>
              <option>Quarter to date</option>
            </select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.success("Marketing report exported")}
            >
              <Download /> Export
            </Button>
            <Button
              size="sm"
              onClick={() => toast.success("Campaign draft created")}
            >
              <Plus /> New campaign
            </Button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-4"
          title="Campaign flight"
          description="Autumn product launch"
          action={
            <Badge tone={flightLive ? "success" : "warning"}>
              {flightLive ? "Live" : "Paused"}
            </Badge>
          }
        >
          <div className="space-y-1">
            {flights.map(([phase, date, status, tone], index) => (
              <button
                key={phase}
                type="button"
                onClick={() => toast.info(`${phase} phase opened`)}
                className="group flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-muted/50"
              >
                <span
                  className={
                    (index < 2
                      ? "bg-success"
                      : index === 2
                        ? "bg-primary"
                        : "bg-muted-foreground/35") +
                    " grid size-7 place-items-center rounded-full text-[10px] font-bold text-primary-foreground"
                  }
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{phase}</b>
                  <small className="text-xs text-muted-foreground">
                    {date}
                  </small>
                </span>
                <Badge tone={tone}>{status}</Badge>
              </button>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <Button
              className="flex-1"
              size="sm"
              variant={flightLive ? "outline" : "default"}
              onClick={() => setFlightLive((value) => !value)}
            >
              <Megaphone /> {flightLive ? "Pause flight" : "Resume flight"}
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => toast.info("Campaign brief copied")}
            >
              <Copy className="size-4" />
            </Button>
          </div>
        </Card>
        <section className="overflow-hidden rounded-2xl border border-border bg-card xl:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/20 px-5 py-4">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <Sparkles className="size-4 text-primary" /> Signal board
            </span>
            <Badge tone="success" variant="dot">
              Live intent feed
            </Badge>
          </div>
          <div className="grid lg:grid-cols-[1.12fr_.88fr]">
            <div className="border-b border-border p-5 lg:border-b-0 lg:border-e">
              <div className="flex items-start gap-3">
                <div>
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Flame className="size-5" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Strongest signal
                  </p>
                  <h2 className="mt-1 text-lg font-semibold">
                    Social video is pulling in enterprise demand
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Operations-leader accounts that watched the launch cut-down are
                returning to pricing pages 2.4× more often than the campaign
                average.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button
                  size="sm"
                  onClick={() => toast.info("Retargeting audience created")}
                >
                  <Target /> Build retargeting audience
                </Button>
                <button
                  type="button"
                  onClick={() => toast.info("Signal evidence opened")}
                  className="text-xs font-semibold text-primary"
                >
                  View evidence <ArrowRight className="ms-1 inline size-3.5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-border">
              {[
                ["426", "accounts warming", UsersRound, "bg-chart-1"],
                ["7.4%", "engagement", MousePointer2, "bg-chart-2"],
                ["$426K", "pipeline touched", CircleDollarSign, "bg-chart-3"],
                ["3.8×", "return on spend", Target, "bg-chart-4"],
              ].map(([value, label, Icon, color]) => (
                <div key={label as string} className="p-4">
                  <span
                    className={
                      (color as string) +
                      " grid size-9 place-items-center rounded-xl text-primary-foreground"
                    }
                  >
                    <Icon className="size-4" />
                  </span>
                  <p className="mt-5 text-xl font-semibold tabular-nums">
                    {value as string}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {label as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-3 text-xs">
            <span className="text-muted-foreground">
              {period} signal confidence
            </span>
            <span className="font-semibold text-success">
              High · 94% data coverage
            </span>
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Demand lift by touchpoint"
          description="Pipeline response after each campaign release"
          action={<Badge tone="primary">+18% above plan</Badge>}
        >
          <ApexChart
            type="line"
            height={295}
            options={liftChart}
            series={[
              { name: "Paid social", data: [14, 18, 24, 31, 37, 43] },
              { name: "Lifecycle email", data: [11, 14, 16, 22, 25, 30] },
              { name: "Partner", data: [5, 8, 12, 13, 18, 22] },
            ]}
          />
        </Card>
        <Card
          className="xl:col-span-4"
          title="Audience heatmap"
          description="Accounts showing repeated intent"
        >
          <div className="grid grid-cols-5 gap-2">
            {[
              1, 2, 3, 4, 5, 2, 4, 1, 3, 5, 5, 3, 2, 4, 1, 2, 5, 4, 1, 3, 3, 1,
              5, 2, 4,
            ].map((level, index) => (
              <button
                type="button"
                aria-label={`Intent cell ${index + 1}`}
                onClick={() =>
                  setActiveAudience(
                    index % 2 ? "Scaling SaaS" : "Operations leaders",
                  )
                }
                key={index}
                className={
                  (level > 4
                    ? "bg-primary"
                    : level > 3
                      ? "bg-chart-2"
                      : level > 2
                        ? "bg-chart-3"
                        : level > 1
                          ? "bg-chart-4"
                          : "bg-muted") +
                  " aspect-square rounded-lg transition hover:scale-105"
                }
              />
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-border bg-muted/15 p-3">
            <p className="text-xs text-muted-foreground">Most active segment</p>
            <p className="mt-1 text-sm font-semibold">{activeAudience}</p>
            <p className="mt-1 text-xs text-success">
              418 accounts showed repeat activity
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-5"
          title="Attribution paths"
          description="Journeys creating the strongest hand-raise"
        >
          <div className="space-y-4">
            {[
              [
                "Social → Playbook → Demo",
                "38%",
                "124 opportunities",
                "bg-primary",
              ],
              [
                "Webinar → Nurture → Demo",
                "26%",
                "86 opportunities",
                "bg-chart-2",
              ],
              [
                "Partner → Case study → Demo",
                "18%",
                "54 opportunities",
                "bg-chart-3",
              ],
            ].map(([path, share, detail, color]) => (
              <button
                type="button"
                key={path as string}
                onClick={() => toast.info(`${path} attribution opened`)}
                className="w-full rounded-xl border border-border p-3 text-left transition hover:border-primary/35"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={(color as string) + " size-2.5 rounded-full"}
                  />
                  <b className="flex-1 text-sm">{path as string}</b>
                  <span className="text-sm font-semibold">
                    {share as string}
                  </span>
                </div>
                <p className="mt-2 pl-4.5 text-xs text-muted-foreground">
                  {detail as string}
                </p>
              </button>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-7"
          title="Launch room"
          description="The next work that affects campaign readiness"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {[
              [
                "Today · 10:30",
                "Approve social cut-downs",
                "6 variants need a final decision",
                "warning",
                Clock3,
              ],
              [
                "Today · 15:00",
                "Brief sales on target accounts",
                "48 accounts matched to the launch",
                "primary",
                UsersRound,
              ],
              [
                "Aug 28",
                "Send customer proof sequence",
                "Lifecycle email · segment A",
                "success",
                Send,
              ],
              [
                "Sep 03",
                "Open partner retargeting",
                "Partner channel · phase 4",
                "info",
                Layers3,
              ],
            ].map(([time, title, detail, tone, Icon]) => (
              <button
                type="button"
                key={title as string}
                onClick={() => toast.info(`${title} opened`)}
                className="flex items-start gap-3 rounded-2xl border border-border p-4 text-left transition hover:border-primary/35 hover:bg-muted/25"
              >
                <span
                  className={
                    (tone === "success"
                      ? "bg-success/10 text-success"
                      : tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : tone === "info"
                          ? "bg-info/10 text-info"
                          : "bg-primary/10 text-primary") +
                    " grid size-10 shrink-0 place-items-center rounded-xl"
                  }
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <small className="text-xs font-semibold text-primary">
                    {time as string}
                  </small>
                  <b className="mt-1 block text-sm">{title as string}</b>
                  <small className="mt-1 block text-xs text-muted-foreground">
                    {detail as string}
                  </small>
                </span>
                <ChevronRight className="mt-1 size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Content experiment board"
          description="Assets that are earning attention and changing behavior"
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.success("Content brief created")}
            >
              <FileText /> New brief
            </Button>
          }
        >
          <div className="grid gap-3 md:grid-cols-3">
            {[
              [
                "Benchmark report",
                "Research",
                "1,284 reads",
                "18.2%",
                "bg-chart-1",
              ],
              [
                "Planning template",
                "Tool",
                "764 downloads",
                "11.4%",
                "bg-chart-2",
              ],
              [
                "Maturity webinar",
                "Event",
                "413 registrations",
                "8.6%",
                "bg-chart-3",
              ],
            ].map(([title, type, metric, conversion, color]) => (
              <article
                key={title as string}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className={(color as string) + " h-2"} />
                <div className="p-4">
                  <span className="rounded-md bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {type as string}
                  </span>
                  <h3 className="mt-5 text-sm font-semibold">
                    {title as string}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {metric as string}
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <span>
                      <small className="block text-xs text-muted-foreground">
                        Conversion
                      </small>
                      <b className="text-lg">{conversion as string}</b>
                    </span>
                    <button
                      type="button"
                      onClick={() => toast.info(`${title} opened`)}
                      className="grid size-8 place-items-center rounded-lg bg-muted text-primary transition hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Budget guardrail"
          description="$42K approved media plan"
          action={<Badge tone="warning">82% used</Badge>}
        >
          <ApexChart
            type="donut"
            height={200}
            options={budgetChart}
            series={[14800, 9300, 6400, 4100]}
          />
          <div className="mt-2 flex items-center justify-between rounded-xl bg-warning/10 p-3 text-xs">
            <span className="flex items-center gap-2 font-medium text-warning">
              <Flame className="size-4" /> Paid social is pacing high
            </span>
            <b>$2.4K</b>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-5"
          title="Creative production desk"
          description="Assets moving through the launch workflow"
          action={<Badge tone="info">14 in motion</Badge>}
        >
          <div className="space-y-3">
            {[
              [
                "Launch film cut-downs",
                "Social video",
                "6",
                "Review",
                "warning",
              ],
              [
                "Enterprise landing page",
                "Web experience",
                "2",
                "Build",
                "primary",
              ],
              [
                "Customer proof carousel",
                "Paid social",
                "4",
                "Ready",
                "success",
              ],
              ["Partner email kit", "Lifecycle", "2", "Brief", "info"],
            ].map(([name, format, count, state, tone]) => (
              <button
                type="button"
                key={name}
                onClick={() => toast.info(`${name} opened`)}
                className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-primary/35 hover:bg-muted/25"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-muted text-primary">
                  <Layers3 className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{name}</b>
                  <small className="text-xs text-muted-foreground">
                    {format} · {count} assets
                  </small>
                </span>
                <Badge
                  tone={tone as "primary" | "success" | "warning" | "info"}
                >
                  {state}
                </Badge>
              </button>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Market coverage"
          description="Demand concentration by territory"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              ["North America", "1,184", "High", "bg-primary"],
              ["Europe", "746", "Rising", "bg-chart-2"],
              ["Asia Pacific", "518", "Watch", "bg-chart-3"],
              ["LATAM", "212", "Seed", "bg-chart-4"],
            ].map(([region, accounts, signal, color]) => (
              <button
                type="button"
                key={region}
                onClick={() => toast.info(`${region} demand opened`)}
                className="rounded-2xl border border-border bg-muted/15 p-4 text-left transition hover:border-primary/35"
              >
                <span
                  className={(color as string) + " block size-2.5 rounded-full"}
                />
                <b className="mt-5 block text-sm">{region}</b>
                <span className="mt-1 block text-lg font-semibold">
                  {accounts}
                </span>
                <small className="mt-1 block text-xs text-muted-foreground">
                  engaged accounts · {signal}
                </small>
              </button>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-3"
          title="Lead routing"
          description="Handoff readiness today"
        >
          <div className="rounded-2xl bg-success/10 p-4 text-center">
            <CheckCircle2 className="mx-auto size-7 text-success" />
            <p className="mt-3 text-2xl font-semibold">94%</p>
            <p className="mt-1 text-xs text-muted-foreground">
              routed within SLA
            </p>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Ready for sales</span>
              <b>68</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Needs enrichment</span>
              <b className="text-warning">12</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Average response</span>
              <b>18 min</b>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Lead routing opened")}
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-3 text-xs font-medium transition hover:border-primary/40"
          >
            <span>Open routing queue</span>
            <ArrowRight className="size-4 text-primary" />
          </button>
        </Card>
      </div>
    </>
  );
}
