import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Download,
  Mail,
  MessageSquare,
  Phone,
  Plus,
  Search,
  UsersRound,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { getUserImage } from "@/lib/user-images";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, PageHeader } from "./widgets";
import {
  CRM_ACCENTS as accents,
  CRM_DEALS,
  CRM_REPS,
  CRM_STAGES,
  type CrmDeal,
} from "./crm-widget-data";

const money = (v: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
const compact = (v: number) => `$${(v / 1000).toFixed(v % 1000 ? 1 : 0)}K`;
const field =
  "h-9 max-w-full cursor-pointer rounded-md border border-border bg-card px-3 text-xs";
const meetings = [
  {
    time: "09:30",
    title: "Discovery call",
    company: "Kinetic Systems",
    icon: Phone,
  },
  {
    time: "11:00",
    title: "Proposal review",
    company: "Northstar Labs",
    icon: Video,
  },
  {
    time: "14:30",
    title: "Security follow-up",
    company: "Vertex Labs",
    icon: MessageSquare,
  },
  {
    time: "16:00",
    title: "Renewal check-in",
    company: "Harbor Health",
    icon: Mail,
  },
];

export function CrmDashboard() {
  const { base } = useChartTheme();
  const palette = [1, 2, 3, 4].map((i) => token(`--chart-${i}`));
  const [deals, setDeals] = useState(CRM_DEALS);
  const [focus, setFocus] = useState("Pipeline");
  const [owner, setOwner] = useState("All owners");
  const [query, setQuery] = useState("");
  const [done, setDone] = useState<string[]>([]);
  const [detail, setDetail] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [dealName, setDealName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("25000");
  const [newOwner, setNewOwner] = useState(CRM_REPS[0]!.name);
  const [scenario, setScenario] = useState("Expected");
  const [meetingDone, setMeetingDone] = useState<string[]>([]);
  const [renewals, setRenewals] = useState<string[]>([]);
  const selected = deals.filter(
    (d) =>
      (owner === "All owners" || d.owner === owner) &&
      (focus !== "At risk" || d.risk) &&
      `${d.name} ${d.company}`.toLowerCase().includes(query.toLowerCase()),
  );
  const portfolio = deals.filter(
    (d) => owner === "All owners" || d.owner === owner,
  );
  const pipeline = portfolio.reduce((s, d) => s + d.value, 0);
  const weighted = portfolio.reduce(
    (s, d) => s + (d.value * d.confidence) / 100,
    0,
  );
  const riskValue = portfolio
    .filter((d) => d.risk)
    .reduce((s, d) => s + d.value, 0);
  const activeDetail = deals.find((d) => d.id === detail);
  const closed = CRM_REPS.filter(
    (r) => owner === "All owners" || r.name === owner,
  ).reduce((s, r) => s + r.closed, 0);
  const forecastBase = [closed * 0.24, closed * 0.49, closed * 0.73, closed];
  const forecastFactor =
    scenario === "Conservative" ? 0.7 : scenario === "Upside" ? 1.25 : 1;
  const forecast = [
    ...forecastBase,
    closed + weighted * 0.42 * forecastFactor,
    closed + weighted * forecastFactor,
  ];
  const forecastOptions = mergeOptions(base, {
    chart: { type: "line" },
    colors: [palette[0]!, palette[3]!],
    stroke: { width: [3, 2], curve: "straight", dashArray: [0, 5] },
    fill: { opacity: 1 },
    markers: { size: 4, strokeWidth: 2, strokeColors: token("--card") },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    },
    yaxis: { labels: { formatter: (v: number) => compact(v) } },
    legend: { position: "top", horizontalAlign: "left" },
    tooltip: { shared: true, intersect: false, y: { formatter: money } },
  });
  const responseOptions = mergeOptions(base, {
    chart: { type: "bar" },
    colors: palette,
    stroke: { width: 0 },
    plotOptions: {
      bar: { distributed: true, columnWidth: "40%", borderRadius: 4 },
    },
    xaxis: { categories: ["<5 min", "5–15 min", "15–60 min", ">1 hour"] },
    yaxis: { labels: { formatter: (v: number) => `${Math.round(v)}%` } },
    legend: { show: false },
    tooltip: { y: { formatter: (v: number) => `${v}% of inbound leads` } },
  });
  const exportBrief = () => {
    const csv = [
      "Deal,Company,Value USD,Stage,Owner,Confidence percent,Next step",
      ...selected.map((d) =>
        [d.name, d.company, d.value, d.stage, d.owner, d.confidence, d.next]
          .map((v) => `"${String(v).replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "crm-sales-brief.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Sales brief exported");
  };
  function createDeal(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      dealName.trim().length < 3 ||
      company.trim().length < 2 ||
      !Number.isFinite(Number(value)) ||
      Number(value) <= 0
    )
      return;
    setDeals((v) => [
      {
        id: `DL-${1041 + v.length}`,
        name: dealName.trim(),
        company: company.trim(),
        value: Number(value),
        stage: "Qualified",
        owner: newOwner,
        confidence: 25,
        close: "2026-11-20",
        next: "Schedule discovery call",
        risk: false,
      },
      ...v,
    ]);
    setCreateOpen(false);
    setFocus("Pipeline");
    setOwner("All owners");
    setQuery("");
    toast.success("Sample deal created");
  }
  const advance = (id: string) => {
    setDeals((v) =>
      v.map((d) =>
        d.id === id
          ? {
              ...d,
              stage: CRM_STAGES[Math.min(3, CRM_STAGES.indexOf(d.stage) + 1)]!,
              confidence: Math.min(90, d.confidence + 15),
            }
          : d,
      ),
    );
  };
  return (
    <>
      <PageHeader
        title="CRM"
        subtitle="A focused sales workspace for the conversations and decisions that move revenue today."
        breadcrumb={["Edzen", "Dashboards", "CRM"]}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={exportBrief}>
              <Download className="size-4" />
              Export brief
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setDealName("");
                setCompany("");
                setCreateOpen(true);
              }}
            >
              <Plus className="size-4" />
              New deal
            </Button>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-12">
        <Card className="xl:col-span-8" bodyClassName="p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`rounded-xl p-2.5 ${accents[2]!.soft} ${accents[2]!.text}`}
              >
                <UsersRound className="size-5" />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold">
                  Revenue command desk
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Your next revenue opportunities · October 2026
                </p>
              </div>
            </div>
            <select
              aria-label="CRM owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className={field}
            >
              <option>All owners</option>
              {CRM_REPS.map((r) => (
                <option key={r.name}>{r.name}</option>
              ))}
            </select>
          </div>
          <div className="my-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">
                Open pipeline value
              </p>
              <p className="mt-1 text-[32px] font-semibold tabular-nums">
                {money(pipeline)}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                <span className="rounded-md bg-muted px-2 py-1">
                  {portfolio.length} opportunities
                </span>
                <span className="rounded-md bg-muted px-2 py-1">
                  {new Set(portfolio.map((d) => d.company)).size} accounts
                </span>
              </div>
            </div>
            <div
              className={`rounded-xl border border-border p-4 ${accents[2]!.soft}`}
            >
              <p className="text-xs text-muted-foreground">
                Confidence-weighted forecast
              </p>
              <p
                className={`mt-1 text-[26px] font-semibold ${accents[2]!.text}`}
              >
                {money(weighted)}
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {pipeline ? ((weighted / pipeline) * 100).toFixed(1) : "0.0"}%
                of open pipeline at current confidence
              </p>
            </div>
          </div>
          <div className="grid gap-3 border-t border-border pt-4 sm:grid-cols-3">
            {[
              {
                label: "Closed this quarter",
                value: compact(closed),
                note: "Booked revenue",
                icon: Check,
                i: 0,
              },
              {
                label: "Negotiation stage",
                value: compact(
                  portfolio
                    .filter((d) => d.stage === "Negotiation")
                    .reduce((sum, d) => sum + d.value, 0),
                ),
                note: "Closest to a decision",
                icon: MessageSquare,
                i: 3,
              },
              {
                label: "Needs attention",
                value: compact(riskValue),
                note: `${portfolio.filter((d) => d.risk).length} flagged opportunities`,
                icon: CircleAlert,
                i: 1,
              },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-lg border border-border p-3"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full text-white ${accents[m.i]!.bg}`}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {m.label}
                    </span>
                  </div>
                  <p className="mt-3 text-xl font-semibold">{m.value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {m.note}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
        <Card
          title="Action queue"
          description="Prioritized follow-ups for the selected owner"
          className="xl:col-span-4"
          bodyClassName="flex flex-col p-5"
          action={
            <span
              className={`rounded-full px-2 py-1 text-[11px] font-semibold ${accents[1]!.soft} ${accents[1]!.text}`}
            >
              {portfolio.filter((d) => d.risk && !done.includes(d.id)).length}{" "}
              need attention
            </span>
          }
        >
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[32px] font-semibold leading-tight">
                {portfolio.filter((d) => !done.includes(d.id)).length}
                <span className="ms-2 text-xs font-normal text-muted-foreground">
                  to follow up
                </span>
              </p>
            </div>
            <span className="text-xs text-muted-foreground">
              {portfolio.filter((d) => done.includes(d.id)).length} done
            </span>
          </div>
          <div className="space-y-2">
            {portfolio
              .filter((d) => !done.includes(d.id))
              .sort((a, b) => Number(b.risk) - Number(a.risk))
              .slice(0, 3)
              .map((d) => (
                <div
                  key={d.id}
                  className="flex items-start gap-2 rounded-lg border border-border p-3"
                >
                  <button
                    aria-label={`Complete queued follow-up ${d.id}`}
                    onClick={() => setDone((v) => [...v, d.id])}
                    className="mt-0.5 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded border border-border hover:border-primary hover:bg-primary/10"
                  >
                    <span className="sr-only">Mark complete</span>
                  </button>
                  <button
                    onClick={() => setDetail(d.id)}
                    className="min-w-0 flex-1 cursor-pointer text-start"
                  >
                    <span className="block text-xs font-semibold">
                      {d.next}
                    </span>
                    <span className="mt-1 block text-[11px] text-muted-foreground">
                      {d.company} · {compact(d.value)}
                    </span>
                  </button>
                  {d.risk ? (
                    <CircleAlert
                      className={`size-3.5 shrink-0 ${accents[1]!.text}`}
                      aria-label="At risk"
                    />
                  ) : (
                    <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
                  )}
                </div>
              ))}
          </div>
          {portfolio.every((d) => done.includes(d.id)) && (
            <div className="rounded-xl bg-muted/40 p-5 text-center">
              <Check className={`mx-auto size-6 ${accents[0]!.text}`} />
              <p className="mt-2 text-sm font-medium">Follow-ups complete</p>
              <p className="mt-1 text-xs text-muted-foreground">
                All selected opportunities are up to date.
              </p>
            </div>
          )}
          <div className="mt-auto pt-4">
            <p className="border-t border-border pt-3 text-[11px] text-muted-foreground">
              Review flagged opportunities first, then work through the
              remaining next steps.
            </p>
          </div>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Opportunity lanes"
        description="Inspect a deal, advance its stage, and complete its next action"
        bodyClassName="p-4"
        action={
          <div className="flex flex-wrap gap-2">
            <div
              className="flex rounded-md border border-border p-1"
              role="group"
              aria-label="Deal focus"
            >
              {["Pipeline", "At risk"].map((t) => (
                <button
                  key={t}
                  aria-pressed={focus === t}
                  onClick={() => setFocus(t)}
                  className={`cursor-pointer rounded px-3 py-1 text-xs ${focus === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <label className="relative">
              <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                aria-label="Search CRM deals"
                placeholder="Deal or company"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`${field} w-40 ps-8`}
              />
            </label>
          </div>
        }
      >
        <div className="grid items-start gap-3 md:grid-cols-2 xl:grid-cols-4">
          {CRM_STAGES.map((stage, i) => {
            const lane = selected.filter((d) => d.stage === stage);
            return (
              <section
                key={stage}
                className="min-w-0 rounded-xl border border-border bg-muted/20 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-xs font-semibold">
                    <span className={`size-2 rounded-full ${accents[i]!.bg}`} />
                    {stage}
                    <span className="font-normal text-muted-foreground">
                      {lane.length}
                    </span>
                  </h3>
                  <span className="text-xs font-semibold">
                    {compact(lane.reduce((s, d) => s + d.value, 0))}
                  </span>
                </div>
                <div className="mt-3 space-y-3">
                  {lane.map((d) => (
                    <article
                      key={d.id}
                      className="rounded-lg border border-border bg-card p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <button
                          onClick={() => setDetail(d.id)}
                          className="cursor-pointer text-start text-sm font-semibold hover:underline"
                        >
                          {d.name}
                        </button>
                        {d.risk && (
                          <CircleAlert
                            className={`size-4 shrink-0 ${accents[1]!.text}`}
                            aria-label="At risk"
                          />
                        )}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {d.company}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="text-lg font-semibold">
                          {compact(d.value)}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {d.confidence}% likely
                        </span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <img
                          src={getUserImage(d.owner)}
                          alt={d.owner}
                          className="size-6 rounded-full object-cover"
                        />
                        <span className="truncate text-[11px] text-muted-foreground">
                          {d.owner}
                        </span>
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <p className="text-[11px] leading-relaxed text-muted-foreground">
                          {d.next}
                        </p>
                        <div className="mt-2 flex flex-wrap justify-between gap-2">
                          <button
                            aria-label={`Complete follow-up ${d.id}`}
                            disabled={done.includes(d.id)}
                            onClick={() => setDone((v) => [...v, d.id])}
                            className="cursor-pointer text-[11px] font-semibold text-primary disabled:cursor-default disabled:text-muted-foreground"
                          >
                            {done.includes(d.id) ? "Completed" : "Mark done"}
                          </button>
                          {stage !== "Negotiation" && (
                            <button
                              aria-label={`Advance ${d.id}`}
                              onClick={() => advance(d.id)}
                              className="cursor-pointer text-[11px] font-medium text-muted-foreground hover:text-foreground"
                            >
                              Advance →
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {!lane.length && (
                  <p className="py-6 text-center text-xs text-muted-foreground">
                    No matching deals
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Revenue forecast"
          description="Closed revenue plus confidence-weighted open opportunities"
          className="xl:col-span-8"
          bodyClassName="p-5"
          action={
            <select
              aria-label="CRM forecast scenario"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className={field}
            >
              <option>Expected</option>
              <option>Conservative</option>
              <option>Upside</option>
            </select>
          }
        >
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <p className="text-[26px] font-semibold">{money(forecast[5]!)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Projected six-week closing total
              </p>
            </div>
            <span
              className={`self-end text-xs font-medium ${accents[3]!.text}`}
            >
              {scenario} scenario
            </span>
          </div>
          <ApexChart
            type="line"
            height={260}
            options={forecastOptions}
            series={[
              { name: "Closed + projected", data: forecast },
              {
                name: "Baseline",
                data: [
                  closed * 0.25,
                  closed * 0.5,
                  closed * 0.75,
                  closed,
                  closed * 1.15,
                  closed * 1.3,
                ],
              },
            ]}
          />
          <p className="border-t border-border pt-3 text-[11px] text-muted-foreground">
            Illustrative forecast; closing outcomes depend on deal progression.
          </p>
        </Card>
        <Card
          title="Today's conversation plan"
          description="Sample calendar · October 9"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <ol className="space-y-4">
            {meetings.map((m, i) => {
              const Icon = m.icon;
              return (
                <li
                  key={m.time}
                  className="flex items-start gap-3 border-b border-border pb-4 last:border-0"
                >
                  <time
                    className={`pt-1 text-xs font-semibold ${accents[i]!.text}`}
                  >
                    {m.time}
                  </time>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold">{m.title}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {m.company}
                    </p>
                    <button
                      disabled={meetingDone.includes(m.time)}
                      onClick={() => setMeetingDone((v) => [...v, m.time])}
                      className="mt-2 cursor-pointer text-[11px] font-medium text-primary disabled:cursor-default disabled:text-muted-foreground"
                    >
                      {meetingDone.includes(m.time)
                        ? "Meeting noted"
                        : "Mark attended"}
                    </button>
                  </div>
                  <Icon className="size-4 text-muted-foreground" />
                </li>
              );
            })}
          </ol>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Sales team scorecard"
        description="Closed revenue and remaining opportunity against quota"
        bodyClassName="p-5"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {CRM_REPS.filter(
            (r) => owner === "All owners" || r.name === owner,
          ).map((r, i) => (
            <article
              key={r.name}
              className="rounded-xl border border-border p-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={getUserImage(r.name)}
                  alt={r.name}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">{r.name}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {r.calls} customer conversations
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-2 text-xs">
                <span className="font-semibold">
                  {compact(r.closed)} closed
                </span>
                <span className="text-muted-foreground">
                  {compact(r.quota)} quota
                </span>
              </div>
              <div
                role="meter"
                aria-label={`${r.name} quota attainment`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={(r.closed / r.quota) * 100}
                className="mt-3 h-2 overflow-hidden rounded-full bg-muted"
              >
                <div
                  className={`h-full rounded-full ${accents[i]!.bg}`}
                  style={{ width: `${(r.closed / r.quota) * 100}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
                <span>{((r.closed / r.quota) * 100).toFixed(1)}% achieved</span>
                <span>
                  {portfolio.filter((d) => d.owner === r.name).length} open
                  deals
                </span>
              </div>
            </article>
          ))}
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Lead response velocity"
          description="Sample inbound lead response-time distribution"
          className="xl:col-span-5"
          bodyClassName="p-3"
        >
          <div className="flex gap-6 px-2 pt-2">
            <div>
              <p className="text-xs text-muted-foreground">Median response</p>
              <p className="mt-1 text-xl font-semibold">4m 32s</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Within 15 minutes</p>
              <p className="mt-1 text-xl font-semibold">76%</p>
            </div>
          </div>
          <ApexChart
            type="bar"
            height={220}
            options={responseOptions}
            series={[{ name: "Lead share", data: [48, 28, 16, 8] }]}
          />
        </Card>
        <Card
          title="Account signals"
          description="Evidence to review before the next customer conversation"
          className="xl:col-span-7"
          bodyClassName="p-5"
        >
          <div className="space-y-4">
            {portfolio.slice(0, 3).map((d, i) => (
              <button
                key={d.id}
                onClick={() => setDetail(d.id)}
                className="flex w-full cursor-pointer items-start gap-3 border-b border-border pb-4 text-start last:border-0"
              >
                <span
                  className={`rounded-lg p-2 ${accents[i]!.soft} ${accents[i]!.text}`}
                >
                  <UsersRound className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{d.company}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {d.risk
                      ? "Decision blocker recorded. Confirm the next stakeholder action."
                      : "Active opportunity. Align the next conversation with the close plan."}
                  </span>
                  <span className="mt-2 block text-[11px] text-muted-foreground">
                    Next: {d.next}
                  </span>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Renewal runway"
        description="Protect recurring revenue with clear account ownership and next steps"
        bodyClassName="p-5"
        action={
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${accents[3]!.soft} ${accents[3]!.text}`}
          >
            <CalendarDays className="size-3.5" />
            November – December 2026
          </span>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[210px_minmax(0,1fr)]">
          <div className="flex flex-col rounded-xl border border-border bg-muted/20 p-4">
            <p className="text-xs text-muted-foreground">
              Upcoming renewal ARR
            </p>
            <p className="mt-2 text-[32px] font-semibold leading-tight">
              $204K
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Across 3 customer accounts
            </p>
            <div className="my-4 border-t border-border" />
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="text-muted-foreground">Reviews scheduled</span>
              <span className="font-semibold">{renewals.length} / 3</span>
            </div>
            <div
              className="mt-3 flex gap-1.5"
              role="img"
              aria-label={`${renewals.length} of 3 renewal reviews scheduled`}
            >
              {Array.from({ length: 3 }, (_, i) => (
                <span
                  key={i}
                  className={`h-2 flex-1 rounded-full ${i < renewals.length ? accents[0]!.bg : "bg-muted"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
              Sample planning snapshot as of October 9. Track the account review
              before confirming renewal terms.
            </p>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {[
              {
                name: "Harbor Health",
                value: 72000,
                month: "NOV",
                day: "04",
                days: 26,
                detail: "Confirm rollout adoption",
                owner: "Amara Okafor",
                context: "Adoption review",
                i: 0,
              },
              {
                name: "Northstar Labs",
                value: 96000,
                month: "NOV",
                day: "18",
                days: 40,
                detail: "Review expansion scope",
                owner: "Priya Raman",
                context: "Expansion discussion",
                i: 2,
              },
              {
                name: "Brightpath Media",
                value: 36000,
                month: "DEC",
                day: "02",
                days: 54,
                detail: "Schedule value review",
                owner: "Daniel Reyes",
                context: "Value alignment",
                i: 3,
              },
            ].map((r) => {
              const scheduled = renewals.includes(r.name);
              return (
                <article
                  key={r.name}
                  className="flex min-w-0 flex-col rounded-xl border border-border p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`rounded-lg px-3 py-2 text-center ${accents[r.i]!.soft} ${accents[r.i]!.text}`}
                    >
                      <p className="text-[10px] font-semibold tracking-wide">
                        {r.month}
                      </p>
                      <p className="text-xl font-semibold leading-tight">
                        {r.day}
                      </p>
                    </div>
                    <span className="rounded-full bg-muted px-2 py-1 text-[11px] text-muted-foreground">
                      In {r.days} days
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{r.name}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {r.context}
                  </p>
                  <div className="my-4">
                    <p className="text-[26px] font-semibold leading-tight">
                      {compact(r.value)}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Annual recurring revenue
                    </p>
                  </div>
                  <div className="mb-4 flex items-center gap-2 border-y border-border py-3">
                    <img
                      src={getUserImage(r.owner)}
                      alt={r.owner}
                      loading="lazy"
                      className="size-7 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground">
                        Account owner
                      </p>
                      <p className="truncate text-xs font-medium">{r.owner}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                    {r.detail}
                  </p>
                  <button
                    disabled={scheduled}
                    onClick={() =>
                      setRenewals((v) =>
                        v.includes(r.name) ? v : [...v, r.name],
                      )
                    }
                    className={`mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:bg-muted disabled:cursor-default ${scheduled ? `${accents[0]!.soft} ${accents[0]!.text}` : "text-foreground"}`}
                  >
                    {scheduled ? (
                      <>
                        <Check className="size-3.5" />
                        Review scheduled
                      </>
                    ) : (
                      <>
                        <CalendarDays className="size-3.5" />
                        Schedule review
                      </>
                    )}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </Card>
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create opportunity</DialogTitle>
            <DialogDescription>
              Add a qualified deal to the sample pipeline. Changes last for this
              page session.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={createDeal} className="space-y-4">
            <label
              className="block text-xs font-medium"
              htmlFor="crm-deal-name"
            >
              Deal name
            </label>
            <input
              id="crm-deal-name"
              required
              minLength={3}
              maxLength={100}
              value={dealName}
              onChange={(e) => setDealName(e.target.value)}
              className={`${field} w-full`}
            />
            <label className="block text-xs font-medium" htmlFor="crm-company">
              Company
            </label>
            <input
              id="crm-company"
              required
              minLength={2}
              maxLength={100}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={`${field} w-full`}
            />
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium">
                Value (USD)
                <input
                  required
                  type="number"
                  min="1"
                  max="100000000"
                  step="1"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className={`${field} mt-2 w-full`}
                />
              </label>
              <label className="text-xs font-medium">
                Owner
                <select
                  value={newOwner}
                  onChange={(e) => setNewOwner(e.target.value)}
                  className={`${field} mt-2 w-full`}
                >
                  {CRM_REPS.map((r) => (
                    <option key={r.name}>{r.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <Button type="submit">Save opportunity</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={detail !== null}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeDetail?.name}</DialogTitle>
            <DialogDescription>
              {activeDetail?.company} · sample opportunity details
            </DialogDescription>
          </DialogHeader>
          {activeDetail && (
            <>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Deal value", value: money(activeDetail.value) },
                  { label: "Stage", value: activeDetail.stage },
                  { label: "Owner", value: activeDetail.owner },
                  { label: "Expected close", value: activeDetail.close },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border p-3"
                  >
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-2 text-sm font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-muted/40 p-4">
                <p className="text-xs text-muted-foreground">
                  Next customer action
                </p>
                <p className="mt-2 text-sm font-medium">{activeDetail.next}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Confidence {activeDetail.confidence}% ·{" "}
                  {activeDetail.risk ? "Needs attention" : "Active"}
                </p>
              </div>
              <Button
                onClick={() => {
                  setDone((v) =>
                    v.includes(activeDetail.id) ? v : [...v, activeDetail.id],
                  );
                  setDetail(null);
                }}
              >
                Complete follow-up
                <Check className="size-4" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
