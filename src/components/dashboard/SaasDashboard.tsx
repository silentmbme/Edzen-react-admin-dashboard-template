import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Download,
  Flame,
  Gauge,
  Layers3,
  Plus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Badge, Card, PageHeader } from "./widgets";
import { Button } from "@/components/ui/button";

export function SaasDashboard() {
  const { base } = useChartTheme();
  const [period, setPeriod] = useState("August");
  const [activeSegment, setActiveSegment] = useState("Expansion-ready");
  const usageChart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "area", toolbar: { show: false } },
        colors: [token("--chart-1"), token("--chart-2")],
        stroke: { curve: "smooth", width: [3, 2] },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.28, opacityTo: 0.02 },
        },
        dataLabels: { enabled: false },
        legend: { position: "top", horizontalAlign: "left" },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        grid: { borderColor: token("--border"), strokeDashArray: 4 },
      }),
    [base],
  );
  const retentionChart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "radialBar", toolbar: { show: false } },
        colors: [
          token("--chart-1"),
          token("--chart-2"),
          token("--chart-3"),
          token("--chart-4"),
        ],
        labels: ["Enterprise", "Growth", "Business", "Starter"],
        plotOptions: {
          radialBar: {
            hollow: { size: "32%" },
            dataLabels: {
              total: { show: true, label: "NRR", formatter: () => "116.8%" },
            },
          },
        },
        legend: { position: "bottom" },
      }),
    [base],
  );

  return (
    <>
      <PageHeader
        title="SaaS"
        subtitle="A product-led operating view of usage, expansion, and customer momentum."
        breadcrumb={["Edzen", "Dashboards", "SaaS"]}
        actions={
          <>
            <select
              aria-label="Reporting period"
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option>August</option>
              <option>July</option>
              <option>Quarter to date</option>
            </select>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.success("Growth report exported")}
            >
              <Download /> Export
            </Button>
            <Button
              size="sm"
              onClick={() => toast.success("Workspace invite created")}
            >
              <Plus /> Invite customer
            </Button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="Feature adoption control"
          description="Which product behaviors create the next expansion signal"
          action={<Badge tone="primary">42 opportunities</Badge>}
        >
          <div className="grid gap-3 md:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-primary-foreground/70">
                <Zap className="size-4" /> Highest-impact behavior
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                Automation usage
              </h2>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
                Accounts with five or more live automations retain 18 points
                better and expand 2.1× faster.
              </p>
              <button
                type="button"
                onClick={() => setActiveSegment("Automation power users")}
                className="mt-6 rounded-xl bg-primary-foreground/15 px-3 py-2 text-xs font-semibold hover:bg-primary-foreground/20"
              >
                View power users
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Workflow builder", "72%", "4,982 teams", "bg-chart-1", Boxes],
                ["Automation rules", "63%", "3,844 teams", "bg-chart-2", Zap],
                [
                  "Team invites",
                  "83%",
                  "5,371 teams",
                  "bg-chart-3",
                  UsersRound,
                ],
                ["Reports", "48%", "2,941 teams", "bg-chart-4", Gauge],
              ].map(([feature, rate, teams, color, Icon]) => (
                <button
                  type="button"
                  key={feature as string}
                  onClick={() => setActiveSegment(feature as string)}
                  className="rounded-2xl border border-border p-4 text-left transition hover:border-primary/35"
                >
                  <span
                    className={
                      (color as string) +
                      " grid size-9 place-items-center rounded-xl text-primary-foreground shadow-sm"
                    }
                  >
                    <Icon className="size-4" />
                  </span>
                  <b className="mt-5 block text-xl">{rate as string}</b>
                  <span className="mt-1 block text-xs font-medium">
                    {feature as string}
                  </span>
                  <small className="mt-1 block text-[11px] text-muted-foreground">
                    {teams as string}
                  </small>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-border px-3 py-2.5 text-xs">
            <span className="text-muted-foreground">Active segment</span>
            <b className="text-primary">{activeSegment}</b>
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Revenue cockpit"
          description="Monthly recurring revenue changes at a glance"
          action={<Badge tone="success">+$23.3K net</Badge>}
        >
          <div className="rounded-2xl border border-border bg-muted/20 p-4">
            <p className="text-xs text-muted-foreground">Closing MRR</p>
            <p className="mt-1 text-4xl font-semibold tracking-tight">
              $184.6K
            </p>
            <p className="mt-2 text-xs font-medium text-success">
              Up 9.4% from the previous month
            </p>
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["New business", "+$18.4K", "bg-chart-1"],
              ["Expansion", "+$12.9K", "bg-chart-2"],
              ["Contraction", "-$3.2K", "bg-chart-3"],
              ["Churn", "-$4.8K", "bg-chart-4"],
            ].map(([label, value, color]) => (
              <div
                key={label as string}
                className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-sm"
              >
                <span
                  className={(color as string) + " size-2.5 rounded-full"}
                />
                <span className="flex-1">{label as string}</span>
                <b
                  className={
                    (value as string).startsWith("+")
                      ? "text-success"
                      : "text-destructive"
                  }
                >
                  {value as string}
                </b>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="Workspace pulse"
          description={`${period} active seats and automation runs`}
          action={<Badge tone="success">+11.2% weekly</Badge>}
        >
          <ApexChart
            type="area"
            height={285}
            options={usageChart}
            series={[
              { name: "Active seats", data: [42, 48, 51, 55, 59, 47, 53] },
              { name: "Automation runs", data: [27, 31, 35, 39, 43, 34, 41] },
            ]}
          />
          <div className="grid grid-cols-3 border-t border-border pt-4 text-xs">
            <span>
              <b className="block text-sm">4,982</b>
              <small className="text-muted-foreground">
                weekly active teams
              </small>
            </span>
            <span>
              <b className="block text-sm">72.4%</b>
              <small className="text-muted-foreground">
                core-feature adoption
              </small>
            </span>
            <span>
              <b className="block text-sm">18 min</b>
              <small className="text-muted-foreground">
                time to first value
              </small>
            </span>
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Expansion radar"
          description="Accounts earning a proactive growth motion"
        >
          <div className="space-y-3">
            {[
              [
                "Northstar Labs",
                "Enterprise · $8.4K MRR",
                "94",
                "Automation use up 34%",
                "success",
              ],
              [
                "Cedar & Co.",
                "Growth · $3.2K MRR",
                "82",
                "Seat limit reached",
                "primary",
              ],
              [
                "Atlas Studio",
                "Business · $2.8K MRR",
                "61",
                "Usage needs attention",
                "warning",
              ],
            ].map(([name, detail, score, reason, tone]) => (
              <button
                type="button"
                key={name as string}
                onClick={() => toast.info(`${name} account opened`)}
                className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-primary/35"
              >
                <span
                  className={
                    (tone === "success"
                      ? "bg-success/10 text-success"
                      : tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-primary/10 text-primary") +
                    " grid size-10 place-items-center rounded-xl font-semibold"
                  }
                >
                  {score}
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{name as string}</b>
                  <small className="block text-xs text-muted-foreground">
                    {detail as string}
                  </small>
                  <small className="mt-1 block text-xs text-primary">
                    {reason as string}
                  </small>
                </span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-4"
          title="Activation map"
          description="Where new workspaces are stalling"
        >
          <div className="space-y-2">
            {[
              ["Workspace created", "1,284", "100%", "bg-chart-1"],
              ["Team invited", "1,068", "83%", "bg-chart-2"],
              ["First workflow", "864", "67%", "bg-chart-3"],
              ["Automation live", "618", "48%", "bg-chart-4"],
              ["Paid conversion", "509", "40%", "bg-success"],
            ].map(([label, value, rate, color]) => (
              <div
                key={label as string}
                className="flex items-center gap-3 rounded-xl bg-muted/25 p-2.5"
              >
                <span
                  className={(color as string) + " size-2.5 rounded-full"}
                />
                <span className="flex-1 text-xs">{label as string}</span>
                <b className="text-xs">{value as string}</b>
                <span className="w-9 text-right text-xs text-muted-foreground">
                  {rate as string}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-warning/10 p-3 text-xs text-warning">
            <Flame className="me-2 inline size-4" />
            Member invitation is the biggest conversion lever.
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Retention by plan"
          description="Net retention across customer segments"
        >
          <ApexChart
            type="radialBar"
            height={270}
            options={retentionChart}
            series={[124, 116, 108, 96]}
          />
        </Card>
        <Card
          className="xl:col-span-3"
          title="Release adoption"
          description="Automation Studio v2"
        >
          <div className="rounded-2xl bg-chart-2/10 p-4">
            <Boxes className="size-6 text-chart-2" />
            <p className="mt-5 text-3xl font-semibold">63%</p>
            <p className="mt-1 text-xs text-muted-foreground">
              eligible teams activated
            </p>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Launched</span>
              <b>Aug 16</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">New automations</span>
              <b>1,842</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">NPS impact</span>
              <b className="text-success">+6 pts</b>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Release detail opened")}
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-3 text-xs font-medium"
          >
            View release detail <ArrowUpRight className="size-4 text-primary" />
          </button>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Customer signal stream"
          description="Important activity from the account portfolio"
        >
          <div className="divide-y divide-border">
            {[
              [
                "Northstar Labs added 24 seats",
                "Expansion signal",
                "8 min ago",
                "success",
                UsersRound,
              ],
              [
                "Cedar & Co. hit the workflow limit",
                "Upgrade opportunity",
                "42 min ago",
                "primary",
                Zap,
              ],
              [
                "Atlas Studio adoption dipped",
                "Success intervention",
                "2 hr ago",
                "warning",
                Gauge,
              ],
              [
                "Kinetic Systems renewed early",
                "Retention win",
                "Today",
                "success",
                CheckCircle2,
              ],
            ].map(([event, type, time, tone, Icon]) => (
              <button
                type="button"
                key={event as string}
                onClick={() => toast.info(`${event} opened`)}
                className="flex w-full items-center gap-3 px-2 py-3 text-left transition hover:bg-muted/30"
              >
                <span
                  className={
                    (tone === "success"
                      ? "bg-success/10 text-success"
                      : tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-primary/10 text-primary") +
                    " grid size-9 place-items-center rounded-xl"
                  }
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{event as string}</b>
                  <small className="text-xs text-muted-foreground">
                    {type as string}
                  </small>
                </span>
                <small className="text-xs text-muted-foreground">
                  {time as string}
                </small>
              </button>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Operator calendar"
          description="Upcoming customer moments"
        >
          <div className="space-y-3">
            {[
              ["Today", "Renewal review", "Northstar Labs"],
              ["Aug 28", "Office hours", "Automation Studio"],
              ["Sep 01", "QBR prep", "Kinetic Systems"],
            ].map(([date, event, account]) => (
              <button
                type="button"
                key={event as string}
                onClick={() => toast.info(`${event} opened`)}
                className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary">
                  <CalendarDays className="size-4" />
                </span>
                <span>
                  <small className="text-xs font-semibold text-primary">
                    {date as string}
                  </small>
                  <b className="block text-sm">{event as string}</b>
                  <small className="text-xs text-muted-foreground">
                    {account as string}
                  </small>
                </span>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-4"
          title="Support load"
          description="Customer effort and product friction"
          action={<Badge tone="success">SLA protected</Badge>}
        >
          <div className="rounded-2xl border border-border bg-muted/20 p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Customer effort score
                </p>
                <p className="mt-1 text-3xl font-semibold">
                  4.7<span className="text-sm text-muted-foreground">/5</span>
                </p>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl bg-success/10 text-success">
                <ShieldCheck className="size-5" />
              </span>
            </div>
            <p className="mt-3 text-xs text-success">
              Response time is 34% faster than the service target.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl border border-border p-2.5">
              <b className="block text-base">42</b>
              <span className="text-muted-foreground">open</span>
            </div>
            <div className="rounded-xl border border-warning/25 bg-warning/5 p-2.5">
              <b className="block text-base text-warning">6</b>
              <span className="text-muted-foreground">triage</span>
            </div>
            <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-2.5">
              <b className="block text-base text-destructive">2</b>
              <span className="text-muted-foreground">escalated</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["Billing questions", "14 tickets", "bg-chart-1"],
              ["Automation setup", "11 tickets", "bg-chart-2"],
              ["Integrations", "9 tickets", "bg-chart-3"],
            ].map(([topic, count, color]) => (
              <div
                key={topic as string}
                className="flex items-center gap-2 text-xs"
              >
                <span className={(color as string) + " size-2 rounded-full"} />
                <span className="flex-1">{topic as string}</span>
                <b>{count as string}</b>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => toast.info("Support queue opened")}
            className="mt-4 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-3 text-xs font-medium"
          >
            Open support queue <ArrowRight className="size-4 text-primary" />
          </button>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Renewal windows"
          description="Accounts approaching a commercial moment"
          action={<Badge tone="primary">$23.6K in view</Badge>}
        >
          <div className="mb-4 flex items-center justify-between rounded-xl bg-primary/5 p-3 text-xs">
            <span className="text-muted-foreground">Next 30 days forecast</span>
            <b className="text-primary">92% expected to renew</b>
          </div>
          <div className="relative space-y-3 before:absolute before:bottom-4 before:start-4 before:top-4 before:w-px before:bg-border">
            {[
              [
                "Northstar Labs",
                "Sep 03",
                "$8.4K",
                "High confidence",
                "success",
              ],
              ["Atlas Studio", "Sep 11", "$2.8K", "Needs plan", "warning"],
              [
                "Kinetic Systems",
                "Sep 19",
                "$12.4K",
                "Early renewal",
                "primary",
              ],
            ].map(([account, date, mrr, note, tone]) => (
              <button
                type="button"
                key={account as string}
                onClick={() => toast.info(`${account} renewal opened`)}
                className="relative flex w-full items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition hover:border-primary/35"
              >
                <span className="z-10 grid size-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <CalendarDays className="size-4" />
                </span>
                <span className="flex-1">
                  <b className="block text-sm">{account as string}</b>
                  <small className="text-xs text-muted-foreground">
                    {date as string} · {note as string}
                  </small>
                </span>
                <b>{mrr as string}</b>
                <span
                  className={
                    tone === "success"
                      ? "size-2.5 rounded-full bg-success"
                      : tone === "warning"
                        ? "size-2.5 rounded-full bg-warning"
                        : "size-2.5 rounded-full bg-primary"
                  }
                />
              </button>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-3"
          title="Feedback pulse"
          description="Voice of customer this week"
          action={<Badge tone="success">+4 pts</Badge>}
        >
          <div className="rounded-2xl bg-chart-3/10 p-4">
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-xl bg-card text-chart-3 shadow-sm">
                <Sparkles className="size-5" />
              </span>
              <span className="text-xs font-semibold text-success">
                Healthy signal
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold">48</p>
            <p className="mt-1 text-xs text-muted-foreground">
              new product responses
            </p>
          </div>
          <div className="mt-4 space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Top request</span>
              <b>More integrations</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Product sentiment</span>
              <b className="text-success">4.6 / 5</b>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Advocates identified
              </span>
              <b>17</b>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toast.info("Feedback inbox opened")}
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-3 text-xs font-medium transition hover:border-primary/40"
          >
            Open feedback inbox <ArrowRight className="size-4 text-primary" />
          </button>
        </Card>
      </div>
    </>
  );
}
