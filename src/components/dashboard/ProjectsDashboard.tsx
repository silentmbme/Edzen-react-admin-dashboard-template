import { useMemo, useState } from "react";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  FolderKanban,
  Flag,
  Layers3,
  MoreHorizontal,
  Plus,
  Sparkles,
  Target,
  TimerReset,
  UsersRound,
} from "lucide-react";

import { ApexChart } from "@/components/charts/ApexChart";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/project-dashboard-data";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";

import { Avatar, Badge, Card, PageHeader } from "./widgets";

const phaseTones = {
  "On Track": { dot: "bg-success", text: "text-success", fill: "bg-success" },
  "At Risk": { dot: "bg-warning", text: "text-warning", fill: "bg-warning" },
  Delayed: {
    dot: "bg-destructive",
    text: "text-destructive",
    fill: "bg-destructive",
  },
} as const;

const milestones = [
  ["26", "AUG", "Homepage sign-off", "Website Redesign", "Today", "warning"],
  ["29", "AUG", "Beta release", "Mobile App v2", "3 days", "primary"],
  ["02", "SEP", "Data validation", "CRM Migration", "1 week", "danger"],
  [
    "05",
    "SEP",
    "Campaign launch",
    "Marketing Automation",
    "10 days",
    "success",
  ],
] as const;

const team = [
  ["Design", "Sophia Carter", "SC", 76, "2 reviews left"],
  ["Engineering", "Daniel Lee", "DL", 88, "API decision pending"],
  ["Quality", "Olivia Smith", "OS", 64, "Beta coverage booked"],
  ["Product", "Ethan Brown", "EB", 92, "3 approvals queued"],
] as const;

const decisions = [
  [
    "Confirm legacy API owner",
    "CRM Migration",
    "Unblocks 14 tasks",
    "Critical",
  ],
  [
    "Approve mobile beta cohort",
    "Mobile App v2",
    "Release plan is ready",
    "Today",
  ],
  [
    "Choose homepage variation",
    "Website Redesign",
    "Design handoff waits",
    "Today",
  ],
] as const;

const workstreamStages = [
  {
    title: "Ready to move",
    count: "06",
    tone: "bg-[var(--chart-1)]",
    items: [
      ["Design system handoff", "Website Redesign", "SC"],
      ["Beta cohort brief", "Mobile App v2", "EB"],
    ],
  },
  {
    title: "In motion",
    count: "12",
    tone: "bg-[var(--chart-2)]",
    items: [
      ["Customer data mapping", "CRM Migration", "DL"],
      ["Campaign automation", "Marketing Automation", "OS"],
    ],
  },
  {
    title: "Waiting",
    count: "03",
    tone: "bg-[var(--chart-4)]",
    items: [
      ["Legacy API decision", "CRM Migration", "DL"],
      ["Homepage approval", "Website Redesign", "SC"],
    ],
  },
] as const;

function Progress({
  value,
  className = "bg-primary",
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full transition-all ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function ProjectsDashboard() {
  const { base, themeKey } = useChartTheme();
  const [activeLane, setActiveLane] = useState<"All work" | "Needs attention">(
    "All work",
  );
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);
  const [decisionAcknowledged, setDecisionAcknowledged] = useState(false);

  const visibleProjects = useMemo(
    () =>
      activeLane === "All work"
        ? projects
        : projects.filter(([, , , , status]) => status !== "On Track"),
    [activeLane],
  );

  const toggleMilestone = (title: string) => {
    setCompletedMilestones((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  const deliveryOptions = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "line", stacked: false },
        colors: [
          token("--chart-1"),
          token("--chart-2"),
          token("--chart-3"),
          token("--chart-4"),
        ],
        stroke: { width: [0, 3, 3, 0], curve: "smooth" },
        fill: { opacity: [0.9, 1, 1, 0.9] },
        plotOptions: {
          bar: { columnWidth: "42%", borderRadius: 4 },
        },
        xaxis: {
          categories: [
            "Aug 05",
            "Aug 12",
            "Aug 19",
            "Aug 26",
            "Sep 02",
            "Sep 09",
          ],
        },
        yaxis: {
          labels: { formatter: (value: number) => String(Math.round(value)) },
        },
        tooltip: { shared: true, intersect: false },
        legend: { position: "bottom", horizontalAlign: "left" },
      }),
    [base],
  );

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="A clear view of what is moving, what is waiting, and where to steer next."
        breadcrumb={["Edzen", "Dashboards", "Projects"]}
        actions={
          <>
            <Button variant="outline" size="sm">
              <CalendarDays />
              Aug 2026
            </Button>
            <Button size="sm">
              <Plus />
              New project
            </Button>
          </>
        }
      />

      <section className="edzen-card sm:p-6 p-4 overflow-hidden">
        <div className="grid xl:grid-cols-2 gap-4">
         <div className="xl:col-span-6 col-span-12">
           <div className="relative overflow-hidden">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-primary/8 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-primary">
                <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="size-3.5" />
                </span>
                Portfolio cockpit
              </div>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Your delivery plan is holding steady.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                14 active initiatives are moving through the studio. Focus the
                next planning session on two dependencies and one client
                approval.
              </p>
            </div>
          </div>
         </div>
         <div className="xl:col-span-6 col-span-12">
          <div className="bg-muted/50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Delivery signal</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  This week’s operating health
                </p>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-success/12 text-success">
                <Target className="size-5" />
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                ["Scope confidence", "84%", "bg-[var(--chart-1)]"],
                ["Schedule confidence", "76%", "bg-[var(--chart-2)]"],
                ["Capacity coverage", "91%", "bg-[var(--chart-4)]"],
              ].map(([label, value, tone]) => (
                <div key={label}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-muted-foreground">{label}</span>
                    <b>{value}</b>
                  </div>
                  <Progress
                    value={Number.parseInt(value, 10)}
                    className={tone}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Live projects", "14", "across 4 clients"],
            ["On-plan work", "68%", "up 8 points"],
            ["Open decisions", "3", "need an owner"],
            ["Capacity left", "18h", "this week"],
          ].map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-xl border border-border/80 bg-background/65 p-3"
            >
              <p className="text-[11px] text-muted-foreground">{label}</p>
              <p className="mt-1 text-xl font-semibold tracking-tight">
                {value}
              </p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                {note}
              </p>
            </div>
          ))}
        </div>
      </section>

     <div className="mt-5 grid gap-4 xl:grid-cols-12">
       <Card
        className="xl:col-span-8"
        title="Delivery outlook"
        description="Planned, completed, reviewed, and blocked work across the next six weeks"
        action={
          <Badge tone="success" variant="dot">
            Updated today
          </Badge>
        }
      >
        <ApexChart
          key={themeKey}
          type="line"
          height={285}
          options={deliveryOptions}
          series={[
            {
              name: "Planned",
              type: "column",
              data: [58, 72, 76, 84, 92, 104],
            },
            {
              name: "Completed",
              type: "line",
              data: [46, 61, 66, 78, 81, 94],
            },
            {
              name: "In review",
              type: "line",
              data: [14, 12, 18, 13, 16, 11],
            },
            { name: "Blocked", type: "column", data: [7, 5, 8, 4, 6, 3] },
          ]}
        />
      </Card>

      <Card
        className="xl:col-span-4"
        title="Portfolio rhythm"
        description="This week at a glance"
      >
        <div className="space-y-2">
          {[
            ["12","Mon", "Planning sync", "09:30" , "12.6%"],
            ["04","Wed", "Design critique", "14:00", "22.64%"],
            ["23","Thu", "Client steering", "11:00", "34.53%"],
            ["15","Fri", "Release checkpoint", "16:00", "42.6%"],
          ].map(([date,day, event, time,value], index) => (
            <div key={event} className="flex items-center gap-3 p-2 border rounded-xl">
              <span
                className={`flex flex-col justify-center size-12 place-items-center rounded-lg text-[11px] font-bold ${index === 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                <span>{date}</span>
                {day}
              </span>
              <span className="min-w-0 flex-1">
                <b className="block truncate text-sm">{event}</b>
                <small className="text-xs text-muted-foreground">
                  {time}
                </small>
              </span>
              <span className="text-xs text-muted">{value}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg border py-2 text-xs font-semibold text-primary transition hover:bg-primary/5"
        >
          <Layers3 className="size-3.5" />
          Open planning board
        </button>
      </Card>
     </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Project lanes"
          description="A concise view of delivery across the active portfolio"
          action={
            <span className="text-[11px] font-medium text-muted-foreground">
              {visibleProjects.length} active lanes
            </span>
          }
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-lg bg-muted p-1">
              {(["All work", "Needs attention"] as const).map((lane) => (
                <button
                  key={lane}
                  type="button"
                  onClick={() => setActiveLane(lane)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition ${activeLane === lane ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {lane}
                </button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              Updated 12 minutes ago
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {visibleProjects.map(
              ([name, client, progress, due, status, owner], index) => {
                const tone = phaseTones[status];
                const accent = [
                  "bg-[var(--chart-1)]",
                  "bg-[var(--chart-2)]",
                  "bg-[var(--chart-3)]",
                  "bg-[var(--chart-4)]",
                ][index];
                return (
                  <button
                    key={name}
                    type="button"
                    className="group relative min-h-40 cursor-pointer overflow-hidden rounded-xl border bg-card p-4 text-left transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm"
                  >
                    <span
                      className={`absolute inset-y-0 start-0 w-1 ${accent}`}
                    />
                    <div className="flex items-start justify-between gap-3 ps-1">
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground transition group-hover:bg-primary/10 group-hover:text-primary">
                          <FolderKanban className="size-4" />
                        </span>
                        <span className="min-w-0 text-start">
                          <b className="block truncate text-sm">{name}</b>
                          <small className="block truncate text-xs text-muted-foreground">
                            {client}
                          </small>
                        </span>
                      </span>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold ${tone.text}`}
                      >
                        <i className={`size-2 rounded-full ${tone.dot}`} />
                        {status}
                      </span>
                    </div>
                    <div className="mt-5 ps-1">
                      <div className="mb-2 flex items-center justify-between text-[11px]">
                        <span className="text-muted-foreground">
                          Delivery progress
                        </span>
                        <b>{progress}%</b>
                      </div>
                      <Progress
                        value={Number(progress)}
                        className={tone.fill}
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t pt-3 ps-1">
                      <span className="flex items-center gap-2">
                        <Avatar initials={owner} className="size-6" />
                        <small className="text-xs text-muted-foreground">
                          Project owner
                        </small>
                      </span>
                      <small className="rounded-md bg-muted px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                        Due {due}
                      </small>
                    </div>
                  </button>
                );
              },
            )}
          </div>
        </Card>

        <Card
          className="xl:col-span-4"
          title="Next best move"
          description="The one action that clears the most work"
          action={
            <Badge
              tone={decisionAcknowledged ? "success" : "danger"}
              variant="dot"
            >
              {decisionAcknowledged ? "Owner assigned" : "Needs action"}
            </Badge>
          }
        >
          <div
            className={`rounded-xl border p-4 ${
              decisionAcknowledged
                ? "border-success/25 bg-success/6"
                : "border-destructive/20 bg-destructive/6"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                  decisionAcknowledged
                    ? "bg-success text-success-foreground"
                    : "bg-destructive text-destructive-foreground"
                }`}
              >
                {decisionAcknowledged ? (
                  <Check className="size-5" />
                ) : (
                  <CircleAlert className="size-5" />
                )}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Assign the API owner</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  CRM Migration is waiting on a compatibility decision.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 divide-x rounded-lg border bg-card/60 text-center">
              {[
                ["Impact", "14 tasks"],
                ["Deadline", "Today"],
                ["Effort", "15 min"],
              ].map(([label, value]) => (
                <span key={label} className="px-2 py-2.5">
                  <small className="block text-[10px] text-muted-foreground">
                    {label}
                  </small>
                  <b className="mt-1 block text-xs">{value}</b>
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDecisionAcknowledged((current) => !current)}
            className="mt-4 flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition hover:border-primary/35 hover:bg-muted/25"
          >
            <Avatar initials="DL" />
            <span className="flex-1">
              <b className="block text-sm text-start">Daniel Lee</b>
              <small className="text-xs text-muted-foreground text-start">
                {decisionAcknowledged
                  ? "Decision owner confirmed"
                  : "Suggested decision owner"}
              </small>
            </span>
            <span
              className={`grid size-8 place-items-center rounded-lg ${
                decisionAcknowledged
                  ? "bg-success/12 text-success"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {decisionAcknowledged ? (
                <Check className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setDecisionAcknowledged(true)}
            className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-primary"
          >
            {decisionAcknowledged ? "Open decision brief" : "Assign owner now"}
            <ArrowRight className="size-3.5" />
          </button>
          <div className="mt-4 border-t pt-3 text-[11px] text-muted-foreground">
            Resolving this dependency releases the migration workstream.
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="Milestone runway"
          description="The commitments that define the next ten days"
        >
          <div className="relative mt-2 grid gap-3 sm:grid-cols-2">
            <div className="absolute left-5 top-7 hidden h-[calc(100%-56px)] w-px bg-border sm:block" />
            {milestones.map(([date, month, title, project, state, tone]) => {
              const complete = completedMilestones.includes(title);
              const badgeTone =
                tone === "danger"
                  ? "danger"
                  : tone === "warning"
                    ? "warning"
                    : tone === "success"
                      ? "success"
                      : "primary";
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => toggleMilestone(title)}
                  className={`relative flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition ${complete ? "border-success/30 bg-success/5" : "hover:border-primary/35"}`}
                >
                  <time
                    className={`grid size-10 shrink-0 place-items-center rounded-xl border text-center ${complete ? "border-success/30 bg-success text-success-foreground" : "bg-card"}`}
                  >
                    <b className="text-sm leading-none">
                      {complete ? <Check className="size-4" /> : date}
                    </b>
                    {!complete && (
                      <small className="mt-0.5 text-[8px] font-semibold text-muted-foreground">
                        {month}
                      </small>
                    )}
                  </time>
                  <span className="min-w-0 flex-1">
                    <b
                      className={`block truncate text-sm ${complete ? "line-through opacity-60" : ""}`}
                    >
                      {title}
                    </b>
                    <small className="block truncate text-xs text-muted-foreground">
                      {project}
                    </small>
                  </span>
                  <Badge tone={badgeTone}>{complete ? "Done" : state}</Badge>
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Click a milestone when it is delivered.
          </p>
        </Card>

        <Card
          className="xl:col-span-5"
          title="People allocation"
          description="Current load by practice area"
        >
          <div className="space-y-4">
            {team.map(([discipline, name, initials, load, note]) => (
              <div key={discipline} className="flex items-center gap-3">
                <Avatar initials={initials} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span>
                      <b className="text-sm">{discipline}</b>
                      <small className="ml-2 text-xs text-muted-foreground">
                        {name}
                      </small>
                    </span>
                    <b
                      className={load > 85 ? "text-xs text-warning" : "text-xs"}
                    >
                      {load}%
                    </b>
                  </div>
                  <Progress
                    value={load}
                    className={
                      load > 85
                        ? "bg-warning"
                        : load > 75
                          ? "bg-primary"
                          : "bg-success"
                    }
                  />
                  <small className="mt-1 block text-[11px] text-muted-foreground">
                    {note}
                  </small>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-xl bg-info/10 p-3 text-xs text-info">
            <UsersRound className="size-4 shrink-0" />
            <span>12 people are assigned across the active portfolio.</span>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-5"
          title="Investment posture"
          description="Portfolio allocation for the current quarter"
        >
          <div className="flex items-center justify-center gap-6 py-3">
            <div
              className="relative grid size-32 shrink-0 place-items-center rounded-full"
              style={{
                background:
                  "conic-gradient(var(--chart-1) 0 42%, var(--chart-2) 42% 70%, var(--chart-3) 70% 88%, var(--muted) 88% 100%)",
              }}
            >
              <span className="grid size-24 place-items-center p-5 rounded-full bg-card text-center">
                <b className="block text-xl">$410K</b>
                <small className="text-[10px] text-muted-foreground">
                  allocated
                </small>
              </span>
            </div>
            <div className="space-y-3 text-xs">
              {[
                ["Product build", "42%", "bg-[var(--chart-1)]"],
                ["Growth", "28%", "bg-[var(--chart-2)]"],
                ["Platform", "18%", "bg-[var(--chart-3)]"],
                ["Reserve", "12%", "bg-muted-foreground"],
              ].map(([label, value, color]) => (
                <p key={label} className="flex items-center gap-2">
                  <i className={`size-2.5 rounded-full ${color}`} />
                  <span className="flex-1 text-muted-foreground">{label}</span>
                  <b>{value}</b>
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2 rounded-xl border bg-muted/20 p-3 text-xs text-muted-foreground">
            <b className="text-foreground">$126K</b> remains uncommitted for the
            quarter.
          </div>
        </Card>

        <Card
          className="xl:col-span-7"
          title="Decision queue"
          description="Small calls with outsized delivery impact"
        >
          <div className="divide-y rounded-xl border">
            {decisions.map(([decision, project, detail, timing]) => (
              <button
                key={decision}
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 px-3 py-3 text-left transition hover:bg-muted/35"
              >
                <span
                  className={`grid size-8 place-items-center rounded-lg ${timing === "Critical" ? "bg-destructive/12 text-destructive" : "bg-warning/14 text-warning"}`}
                >
                  <Clock3 className="size-4" />
                </span>
                <span className="min-w-0 flex-1 text-start">
                  <b className="block truncate text-sm">{decision}</b>
                  <small className="block truncate text-xs text-muted-foreground">
                    {project} - {detail}
                  </small>
                </span>
                <Badge tone={timing === "Critical" ? "danger" : "warning"}>
                  {timing}
                </Badge>
                <MoreHorizontal className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Workstream control board"
          description="A project-focused board for moving work through the week"
          action={
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
              <TimerReset className="size-3.5" />
              Sprint 18
            </span>
          }
        >
          <div className="grid gap-3 md:grid-cols-3">
            {workstreamStages.map((stage) => (
              <section
                key={stage.title}
                className="rounded-xl border bg-muted/15 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-semibold">
                    <i className={`size-2.5 rounded-full ${stage.tone}`} />
                    {stage.title}
                  </span>
                  <span className="grid size-6 place-items-center rounded-md bg-card text-[10px] font-bold text-muted-foreground">
                    {stage.count}
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  {stage.items.map(([task, project, owner], index) => (
                    <button
                      key={task}
                      type="button"
                      className="w-full cursor-pointer rounded-lg border bg-card p-3 text-left transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm"
                    >
                      <span className="flex items-start justify-between gap-2">
                        <b className="text-xs leading-5 text-start">{task}</b>
                        <MoreHorizontal className="size-4 shrink-0 text-muted-foreground" />
                      </span>
                      <span className="mt-3 flex items-center justify-between gap-2">
                        <small className="truncate text-[11px] text-muted-foreground">
                          {project}
                        </small>
                        <span
                          className={`grid size-6 shrink-0 place-items-center rounded-md text-[9px] font-bold ${
                            index === 0
                              ? "bg-primary/12 text-primary"
                              : "bg-[var(--chart-2)]/15 text-[var(--chart-2)]"
                          }`}
                        >
                          {owner}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-primary"
          >
            View the full work board <ArrowRight className="size-3.5" />
          </button>
        </Card>

        <Card
          className="xl:col-span-4"
          title="Portfolio momentum"
          description="How the team is converting planned work"
        >
          <div className="grid grid-cols-3 gap-2">
            {[
              ["Planned", "128", "bg-[var(--chart-1)]"],
              ["Shipped", "94", "bg-[var(--chart-2)]"],
              ["Blocked", "08", "bg-[var(--chart-4)]"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-xl border p-3">
                <i className={`mb-4 block size-2.5 rounded-full ${color}`} />
                <b className="block text-xl tracking-tight">{value}</b>
                <small className="mt-1 block text-[10px] text-muted-foreground">
                  {label}
                </small>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-medium">Weekly completion</span>
              <b className="text-success">73%</b>
            </div>
            <div className="flex h-3 overflow-hidden rounded-full bg-muted">
              <span className="bg-[var(--chart-1)]" style={{ width: "31%" }} />
              <span className="bg-[var(--chart-2)]" style={{ width: "42%" }} />
              <span className="bg-[var(--chart-3)]" style={{ width: "18%" }} />
              <span className="bg-[var(--chart-4)]" style={{ width: "9%" }} />
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-success/10 p-2.5 text-xs text-success">
              <BarChart3 className="size-4" />
              <span>9 more tasks shipped than last week.</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-5"
          title="Scope guardrails"
          description="Changes that should be reviewed before the next sprint"
        >
          <div className="space-y-3">
            {[
              [
                "Mobile App v2",
                "2 change requests",
                "Product review",
                "warning",
              ],
              [
                "CRM Migration",
                "1 integration request",
                "Technical review",
                "danger",
              ],
              ["Website Redesign", "No scope change", "Protected", "success"],
            ].map(([project, request, review, tone]) => (
              <button
                key={project}
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition hover:border-primary/35"
              >
                <span
                  className={`grid size-9 place-items-center rounded-xl ${
                    tone === "danger"
                      ? "bg-destructive/12 text-destructive"
                      : tone === "warning"
                        ? "bg-warning/15 text-warning"
                        : "bg-success/12 text-success"
                  }`}
                >
                  <Flag className="size-4" />
                </span>
                <span className="min-w-0 flex-1 text-start">
                  <b className="block text-sm">{project}</b>
                  <small className="block text-xs text-muted-foreground">
                    {request}
                  </small>
                </span>
                <small
                  className={`text-xs font-semibold ${
                    tone === "danger"
                      ? "text-destructive"
                      : tone === "warning"
                        ? "text-warning"
                        : "text-success"
                  }`}
                >
                  {review}
                </small>
              </button>
            ))}
          </div>
        </Card>

        <Card
          className="xl:col-span-7"
          title="Delivery snapshots"
          description="Project outcomes worth sharing in the next leadership review"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              [
                "Website Redesign",
                "Design system handoff",
                "82%",
                "7 screens approved",
                "bg-[var(--chart-1)]",
              ],
              [
                "Mobile App v2",
                "Beta release readiness",
                "64%",
                "42 testers enrolled",
                "bg-[var(--chart-2)]",
              ],
              [
                "Marketing Automation",
                "Launch sequence",
                "71%",
                "3 journeys validated",
                "bg-[var(--chart-3)]",
              ],
            ].map(([project, outcome, value, proof, color]) => (
              <article key={project} className="rounded-xl border p-4">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`grid size-9 place-items-center rounded-xl ${
                      color === "bg-[var(--chart-1)]"
                        ? "bg-[var(--chart-1)]/12 text-[var(--chart-1)]"
                        : color === "bg-[var(--chart-2)]"
                          ? "bg-[var(--chart-2)]/15 text-[var(--chart-2)]"
                          : "bg-[var(--chart-3)]/15 text-[var(--chart-3)]"
                    }`}
                  >
                    <FolderKanban className="size-4" />
                  </span>
                  <b className="text-xl tracking-tight">{value}</b>
                </div>
                <p className="mt-4 text-sm font-semibold">{outcome}</p>
                <p className="mt-1 text-xs text-muted-foreground">{project}</p>
                <div className="mt-4 border-t pt-3 text-xs font-medium text-muted-foreground">
                  {proof}
                </div>
              </article>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
