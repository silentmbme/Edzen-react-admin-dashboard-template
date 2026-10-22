import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  Clock3,
  Coins,
  Cpu,
  Download,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AI_MODELS,
  AI_WORKLOADS,
  formatAiCost,
  formatAiNumber,
  getAiAnalytics,
  type AiPeriod,
} from "@/data/ai-analytics-data";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Card, PageHeader } from "./widgets";

const accents = [
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
const evaluations = [
  { id: "atlas-pro", scores: [94, 91, 88, 96, 90], passed: 481, total: 500 },
  { id: "atlas-mini", scores: [86, 88, 93, 90, 84], passed: 462, total: 500 },
  { id: "vision-one", scores: [89, 95, 76, 88, 92], passed: 448, total: 500 },
  { id: "embed-v2", scores: [91, 96, 98, 94, 95], passed: 487, total: 500 },
];
const field =
  "h-9 max-w-full rounded-md border border-border bg-card px-3 text-xs";
type Workload = (typeof AI_WORKLOADS)[number];

export function AiAnalyticsDashboard() {
  const { base } = useChartTheme();
  const palette = [1, 2, 3, 4].map((i) => token(`--chart-${i}`));
  const [period, setPeriod] = useState<AiPeriod>("30");
  const [modelId, setModelId] = useState("all");
  const [monthlyBudget, setMonthlyBudget] = useState(1200);
  const [budgetDraft, setBudgetDraft] = useState("1200");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [modelDetail, setModelDetail] = useState<string | null>(null);
  const [workload, setWorkload] = useState<Workload | null>(null);
  const [workloadFilter, setWorkloadFilter] = useState("All runs");
  const [query, setQuery] = useState("");
  const [percentile, setPercentile] = useState<"p50" | "p95">("p95");
  const [reviewed, setReviewed] = useState<string[]>([]);
  const data = getAiAnalytics(period, modelId);
  const periodBudget = (monthlyBudget * Number(period)) / 30;
  const budgetPercent = (data.cost / periodBudget) * 100;
  const selectedModel = data.models.find((m) => m.id === modelDetail);
  const selectedEvaluations = evaluations.filter(
    (e) => modelId === "all" || e.id === modelId,
  );
  const passed = selectedEvaluations.reduce((a, e) => a + e.passed, 0),
    evalTotal = selectedEvaluations.reduce((a, e) => a + e.total, 0);
  const failures = data.failedRequests;
  const workloadRows = AI_WORKLOADS.filter(
    (w) =>
      (modelId === "all" || w.modelId === modelId) &&
      (workloadFilter === "All runs" || w.status === workloadFilter) &&
      `${w.id} ${w.name}`.toLowerCase().includes(query.toLowerCase()),
  );
  const modelIndex = (id: string) =>
    Math.max(
      0,
      AI_MODELS.findIndex((m) => m.id === id),
    );
  const latencyOptions = mergeOptions(base, {
    chart: { type: "line" },
    colors: data.models.map((m) => palette[modelIndex(m.id)]!),
    stroke: { curve: "stepline", width: 2.5 },
    fill: { opacity: 1 },
    markers: { size: 0 },
    xaxis: { categories: data.labels, tickAmount: 5 },
    yaxis: { min: 0, labels: { formatter: (v: number) => `${v.toFixed(1)}s` } },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (v: number) => `${v.toFixed(2)}s` },
    },
    legend: { position: "bottom", horizontalAlign: "left" },
  });
  const evaluationOptions = mergeOptions(base, {
    chart: { type: "radar" },
    colors: data.models.map((m) => palette[modelIndex(m.id)]!),
    stroke: { width: 2 },
    fill: { opacity: 0.07 },
    markers: { size: 3, strokeWidth: 1 },
    xaxis: {
      categories: [
        "Accuracy",
        "Grounding",
        "Efficiency",
        "Safety",
        "Consistency",
      ],
      labels: {
        style: {
          colors: Array(5).fill(token("--muted-foreground")),
          fontSize: "11px",
        },
      },
    },
    yaxis: { min: 0, max: 100, tickAmount: 4, show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: token("--border"),
          connectorColors: token("--border"),
          fill: { colors: ["transparent"] },
        },
      },
    },
    legend: { position: "bottom", horizontalAlign: "center" },
    tooltip: { y: { formatter: (v: number) => `${v}/100` } },
  });
  const exportReport = () => {
    const csv = [
      "Model,Period days,Requests,Tokens,Cost USD,Latency seconds,Success percent",
      ...data.models.map(
        (m) =>
          `${m.name},${period},${m.requests},${m.tokens},${m.cost.toFixed(2)},${m.latency},${m.success}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `ai-analytics-${modelId}-${period}-days.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("AI analytics report exported");
  };
  return (
    <>
      <PageHeader
        title="AI Analytics"
        subtitle="A clearer view of your AI usage, performance, and spend."
        breadcrumb={["Dashboards", "AI Analytics"]}
        actions={
          <>
            <select
              aria-label="Analytics period"
              className={field}
              value={period}
              onChange={(e) => setPeriod(e.target.value as AiPeriod)}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
            <Button variant="outline" size="sm" onClick={exportReport}>
              <Download className="size-4" />
              Export report
            </Button>
          </>
        }
      />
      <Card bodyClassName="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-lg p-2 ${accents[0]!.soft} ${accents[0]!.text}`}
            >
              <Cpu className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Inference control room</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Sample environment · reporting ends Oct 9, 2026
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={`size-1.5 rounded-full ${accents[0]!.bg}`} />
              {data.models.filter((m) => m.status === "Healthy").length} /{" "}
              {data.models.length} models healthy
            </span>
            <select
              aria-label="AI model filter"
              className={field}
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
            >
              <option value="all">All models</option>
              {AI_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          bodyClassName="flex h-full flex-col p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${accents[0]!.soft} ${accents[0]!.text}`}
              >
                <Activity className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold">
                  Request operations
                </h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {modelId === "all"
                    ? "All production models"
                    : data.models[0]?.name}{" "}
                  · last {period} days
                </p>
              </div>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${accents[data.success >= 99 ? 0 : 1]!.soft} ${accents[data.success >= 99 ? 0 : 1]!.text}`}
            >
              <span
                className={`size-1.5 rounded-full ${accents[data.success >= 99 ? 0 : 1]!.bg}`}
              />
              {data.success >= 99
                ? "Within reliability target"
                : "Reliability needs review"}
            </span>
          </div>
          <div className="my-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-xs text-muted-foreground">
                Total inference requests
              </p>
              <p className="mt-1 text-[32px] font-semibold leading-tight tabular-nums">
                {data.requests.toLocaleString("en-US")}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`inline-flex items-center gap-1 font-semibold ${accents[0]!.text}`}
                >
                  <ArrowUpRight className="size-3.5" />+{data.change.toFixed(1)}
                  %
                </span>
                <span className="text-muted-foreground">
                  vs preceding period
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-muted/30 px-4 py-3 sm:min-w-44">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className={`size-4 ${accents[2]!.text}`} />
                Success rate
              </div>
              <p className="mt-1 text-[26px] font-semibold tabular-nums">
                {data.success.toFixed(2)}
                <span className="ms-0.5 text-sm font-medium text-muted-foreground">
                  %
                </span>
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Target ≥ 99.0%
              </p>
            </div>
          </div>
          <div className="mt-auto rounded-xl border border-border p-4">
            <div className="mb-3 flex flex-wrap justify-between gap-2 text-xs">
              <span className="font-medium">Request outcomes</span>
              <span className="text-muted-foreground">
                {(100 - data.success).toFixed(2)}% failure rate
              </span>
            </div>
            <div
              className="flex h-2 overflow-hidden rounded-full bg-muted"
              role="img"
              aria-label={`${data.success.toFixed(2)} percent successful requests`}
            >
              <div
                className={accents[0]!.bg}
                style={{ width: `${data.success}%` }}
              />
              <div
                className={accents[1]!.bg}
                style={{ width: `${100 - data.success}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                {
                  label: "Successful",
                  value: (data.requests - failures).toLocaleString("en-US"),
                  icon: Check,
                  i: 0,
                },
                {
                  label: "Failed requests",
                  value: failures.toLocaleString("en-US"),
                  icon: Activity,
                  i: 1,
                },
                {
                  label: "Avg. response",
                  value: `${data.latency.toFixed(2)}s`,
                  icon: Clock3,
                  i: 3,
                },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex items-center gap-2.5">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${accents[m.i]!.soft} ${accents[m.i]!.text}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                      <p className="mt-0.5 text-sm font-semibold tabular-nums">
                        {m.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
        <Card
          title="Spend envelope"
          description="Budget applies to the selected reporting period"
          className="xl:col-span-4"
          bodyClassName="p-5"
          action={
            <button
              className="text-xs font-medium text-primary"
              onClick={() => {
                setBudgetDraft(String(monthlyBudget));
                setBudgetOpen(true);
              }}
            >
              Edit budget
            </button>
          }
        >
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-[26px] font-semibold">
              {formatAiCost(data.cost)}
            </p>
            <span className="text-xs text-muted-foreground">
              of {formatAiCost(periodBudget)}
            </span>
          </div>
          <div
            className="my-5 grid grid-cols-10 gap-1.5"
            role="img"
            aria-label={`${budgetPercent.toFixed(1)} percent of budget used`}
          >
            {Array.from({ length: 30 }, (_, i) => (
              <span
                key={i}
                className={`h-5 rounded-sm ${i < Math.round((Math.min(budgetPercent, 100) / 100) * 30) ? accents[budgetPercent > 90 ? 1 : 3]!.bg : "bg-muted"}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-between gap-2 text-xs">
            <span className="text-muted-foreground">
              {budgetPercent.toFixed(1)}% consumed
            </span>
            <span
              className={`font-semibold ${accents[budgetPercent > 100 ? 1 : 0]!.text}`}
            >
              {formatAiCost(Math.abs(periodBudget - data.cost))}{" "}
              {budgetPercent > 100 ? "over budget" : "available"}
            </span>
          </div>
          <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
            {formatAiCost((data.cost / data.requests) * 1000)} per 1K requests ·{" "}
            {formatAiNumber(data.tokens)} tokens processed
          </p>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.models.map((m) => {
          const i = modelIndex(m.id);
          return (
            <button
              key={m.id}
              onClick={() => setModelDetail(m.id)}
              className="edzen-card min-w-0 p-4 text-start transition-colors hover:bg-muted/40 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-lg p-2 ${accents[i]!.soft} ${accents[i]!.text}`}
                >
                  <Bot className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{m.name}</p>
                  <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                    {m.category}
                  </p>
                </div>
                <ChevronRight className="size-3.5 text-muted-foreground" />
              </div>
              <div className="my-4 flex items-baseline justify-between gap-2">
                <span className="text-xl font-semibold">
                  {formatAiNumber(m.requests)}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatAiCost(m.cost)}
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-2 border-t border-border pt-3 text-[11px]">
                <span className={accents[m.status === "Healthy" ? i : 1]!.text}>
                  {m.status}
                </span>
                <span className="text-muted-foreground">
                  {m.latency.toFixed(2)}s avg
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Latency fingerprints"
          description="Model response times across reporting intervals"
          className="xl:col-span-7"
          bodyClassName="p-3"
          action={
            <div
              className="flex rounded-md border border-border p-1"
              role="group"
              aria-label="Latency percentile"
            >
              {(["p50", "p95"] as const).map((p) => (
                <button
                  key={p}
                  className={`rounded px-3 py-1 text-xs ${percentile === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                  aria-pressed={percentile === p}
                  onClick={() => setPercentile(p)}
                >
                  {p.toUpperCase()}
                </button>
              ))}
            </div>
          }
        >
          <ApexChart
            type="line"
            height={290}
            options={latencyOptions}
            series={data.models.map((m, i) => ({
              name: m.name,
              data: data.labels.map((_, j) =>
                Number(
                  (
                    m.latency *
                    (percentile === "p95" ? 1.65 : 0.82) *
                    (0.88 + ((j * 3 + i * 2) % 7) / 22)
                  ).toFixed(2),
                ),
              ),
            }))}
          />
          <p className="mx-2 border-t border-border pt-3 text-xs text-muted-foreground">
            {percentile === "p95"
              ? "P95 highlights the slowest 5% of requests; use it to monitor tail latency."
              : "P50 shows the typical response time for each model."}
          </p>
        </Card>
        <Card
          title="Evaluation constellation"
          description="Normalized scores · model-specific benchmark suites"
          className="xl:col-span-5"
          bodyClassName="p-3"
          action={
            <span className={`text-xs font-semibold ${accents[2]!.text}`}>
              {((passed / evalTotal) * 100).toFixed(1)}% passing
            </span>
          }
        >
          <ApexChart
            type="radar"
            height={290}
            options={evaluationOptions}
            series={selectedEvaluations.map((e) => ({
              name: AI_MODELS.find((m) => m.id === e.id)!.name,
              data: e.scores,
            }))}
          />
          <p className="mx-2 border-t border-border pt-3 text-xs text-muted-foreground">
            {passed.toLocaleString("en-US")} of{" "}
            {evalTotal.toLocaleString("en-US")} evaluation cases passed · scores
            out of 100
          </p>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Token processing ledger"
        description="Where tokens enter, leave and benefit from caching"
        bodyClassName="p-5"
        action={<Layers3 className={`size-4 ${accents[2]!.text}`} />}
      >
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {[
            {
              name: "Uncached input",
              value: data.inputTokens,
              share: 60,
              note: "Prompt and retrieved context",
              i: 0,
              icon: Cpu,
            },
            {
              name: "Cached input",
              value: data.cachedTokens,
              share: 12,
              note: "Reused context at reduced cost",
              i: 3,
              icon: Zap,
            },
            {
              name: "Generated output",
              value: data.outputTokens,
              share: 28,
              note: "Model completions and responses",
              i: 2,
              icon: Sparkles,
            },
          ].map((s, index) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="contents">
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between gap-2">
                    <Icon className={`size-5 ${accents[s.i]!.text}`} />
                    <span className="text-xs text-muted-foreground">
                      {s.share}% of tokens
                    </span>
                  </div>
                  <p className="mt-4 text-[26px] font-semibold">
                    {formatAiNumber(s.value)}
                  </p>
                  <h3 className="mt-1 text-sm font-medium">{s.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                </div>
                {index < 2 && (
                  <ArrowRight
                    className="m-auto hidden size-4 text-muted-foreground lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Input and cached input represent distinct token classes. Together with
          output, they total {data.tokens.toLocaleString("en-US")} processed
          tokens.
        </p>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Cost-to-quality frontier"
          description="Model cost per 1K requests versus benchmark pass rate"
          className="xl:col-span-8"
          bodyClassName="p-5"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="mb-3 grid grid-cols-[120px_1fr_90px] gap-3 text-[11px] text-muted-foreground">
                <span>MODEL</span>
                <div className="flex justify-between">
                  <span>$0</span>
                  <span>$10</span>
                  <span>$20 / 1K</span>
                </div>
                <span className="text-end">EVAL PASS</span>
              </div>
              {data.models.map((m) => {
                const index = modelIndex(m.id),
                  evaluation = evaluations[index]!,
                  cost = (m.cost / m.requests) * 1000;
                return (
                  <div
                    key={m.id}
                    className="grid grid-cols-[120px_1fr_90px] items-center gap-3 border-t border-border py-5"
                  >
                    <button
                      className="text-start text-xs font-medium hover:underline"
                      onClick={() => setModelDetail(m.id)}
                    >
                      {m.name}
                    </button>
                    <div className="relative h-5 rounded bg-muted/40">
                      <div
                        className={`absolute inset-y-1 rounded ${accents[index]!.bg}`}
                        style={{
                          insetInlineStart: 0,
                          width: `${Math.min(100, (cost / 20) * 100)}%`,
                        }}
                      />
                      <span
                        className="absolute top-1/2 -translate-y-1/2 rounded bg-card px-1 text-[11px] font-semibold"
                        style={{
                          insetInlineStart: `${Math.min(83, (cost / 20) * 100)}%`,
                        }}
                      >
                        {formatAiCost(cost)}
                      </span>
                    </div>
                    <span
                      className={`text-end text-xs font-semibold ${accents[index]!.text}`}
                    >
                      {((evaluation.passed / evaluation.total) * 100).toFixed(
                        1,
                      )}
                      %
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Compare models within the same task family before changing
            production routing.
          </p>
        </Card>
        <Card
          title="Routing opportunities"
          description="Operator review queue"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <ul className="space-y-4">
            {[
              {
                id: "cache",
                title: "Reuse stable system context",
                detail:
                  "Cached input is 12% of token volume. Review repeat prompts for additional cache opportunities.",
              },
              {
                id: "vision",
                title: "Inspect vision tail latency",
                detail:
                  "Vision One averages 2.18s. Review image size and preprocessing before the next rollout.",
              },
            ]
              .filter(
                (item) =>
                  !reviewed.includes(item.id) &&
                  (modelId === "all" ||
                    item.id !== "vision" ||
                    modelId === "vision-one"),
              )
              .map((item) => (
                <li
                  key={item.id}
                  className="border-b border-border pb-4 last:border-0"
                >
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                  <button
                    className="mt-3 text-xs font-semibold text-primary"
                    onClick={() => setReviewed((v) => [...v, item.id])}
                  >
                    Mark reviewed
                  </button>
                </li>
              ))}
          </ul>
          {reviewed.length > 0 && (
            <button
              className="mt-3 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setReviewed([])}
            >
              Reset reviews
            </button>
          )}
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Execution journal"
        description="Recent sample workloads · select a run to inspect its details"
        bodyClassName="p-0"
        action={
          <div className="flex flex-wrap gap-2">
            <label className="relative">
              <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                aria-label="Search AI workloads"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Run or workload"
                className={`${field} w-40 ps-8`}
              />
            </label>
            <select
              aria-label="Workload status"
              className={field}
              value={workloadFilter}
              onChange={(e) => setWorkloadFilter(e.target.value)}
            >
              <option>All runs</option>
              <option>Completed</option>
              <option>Retried</option>
            </select>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                {["Workload", "Model", "Tokens", "Duration", "Status", ""].map(
                  (h) => (
                    <th
                      key={h || "action"}
                      className="px-5 py-3 text-start font-medium"
                    >
                      {h || <span className="sr-only">Inspect</span>}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {workloadRows.map((w) => (
                <tr
                  key={w.id}
                  className="border-b border-border last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium">{w.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {w.id} · {w.time}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-xs">
                    {AI_MODELS.find((m) => m.id === w.modelId)?.name}
                  </td>
                  <td className="px-5 py-4 text-xs">
                    {w.tokens.toLocaleString("en-US")}
                  </td>
                  <td className="px-5 py-4 text-xs">{w.duration}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-md px-2 py-1 text-xs ${accents[w.status === "Retried" ? 1 : 0]!.soft} ${accents[w.status === "Retried" ? 1 : 0]!.text}`}
                    >
                      {w.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      aria-label={`Inspect ${w.id}`}
                      className="rounded-md p-2 hover:bg-muted"
                      onClick={() => setWorkload(w)}
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {workloadRows.length === 0 && (
            <p className="p-6 text-center text-sm text-muted-foreground">
              No workloads match your filters.
            </p>
          )}
        </div>
      </Card>
      <Dialog open={budgetOpen} onOpenChange={setBudgetOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit AI spend budget</DialogTitle>
            <DialogDescription>
              Set a monthly budget in USD. Reporting periods use a proportional
              allowance. Saved for this session.
            </DialogDescription>
          </DialogHeader>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const value = Number(budgetDraft);
              if (!Number.isFinite(value) || value <= 0) return;
              setMonthlyBudget(value);
              setBudgetOpen(false);
              toast.success("AI budget updated");
            }}
          >
            <label htmlFor="ai-budget" className="block text-sm font-medium">
              Monthly budget (USD)
            </label>
            <input
              id="ai-budget"
              required
              type="number"
              min="1"
              max="10000000"
              step="1"
              className={`${field} w-full`}
              value={budgetDraft}
              onChange={(e) => setBudgetDraft(e.target.value)}
            />
            <Button type="submit">Save budget</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={modelDetail !== null}
        onOpenChange={(open) => {
          if (!open) setModelDetail(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedModel?.name} performance</DialogTitle>
            <DialogDescription>
              Sample analytics for the last {period} days, ending October 9,
              2026.
            </DialogDescription>
          </DialogHeader>
          {selectedModel && (
            <>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Requests",
                    value: selectedModel.requests.toLocaleString("en-US"),
                  },
                  {
                    label: "Processed tokens",
                    value: formatAiNumber(selectedModel.tokens),
                  },
                  { label: "Spend", value: formatAiCost(selectedModel.cost) },
                  { label: "Success", value: `${selectedModel.success}%` },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border p-4"
                  >
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-2 text-lg font-semibold">{m.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedModel.category} · {selectedModel.latency.toFixed(2)}s
                average response time.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={workload !== null}
        onOpenChange={(open) => {
          if (!open) setWorkload(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{workload?.name}</DialogTitle>
            <DialogDescription>
              Sample execution details · {workload?.id}
            </DialogDescription>
          </DialogHeader>
          {workload && (
            <dl className="space-y-4">
              {[
                {
                  label: "Model",
                  value: AI_MODELS.find((m) => m.id === workload.modelId)?.name,
                },
                { label: "Task family", value: workload.category },
                {
                  label: "Tokens",
                  value: workload.tokens.toLocaleString("en-US"),
                },
                { label: "Duration", value: workload.duration },
                { label: "Outcome", value: workload.status },
                { label: "Executed", value: workload.time },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
                >
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="text-end font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
