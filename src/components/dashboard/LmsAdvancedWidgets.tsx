import { useState } from "react";
import { Award, ArrowUpRight, MessageSquare, Target } from "lucide-react";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Card } from "./widgets";
import {
  getLmsOverview,
  type LmsCourse,
  type LmsLearner,
} from "@/data/lms-dashboard-data";
import { getUserImage } from "@/lib/user-images";

const assessmentScores: Record<string, number> = {
  "CRS-101": 84,
  "CRS-102": 91,
  "CRS-103": 78,
  "CRS-104": 87,
};
const engagement = [
  { name: "Sun", values: [12, 18, 28, 36, 54, 41] },
  { name: "Sat", values: [18, 26, 44, 61, 72, 48] },
  { name: "Fri", values: [24, 42, 73, 86, 65, 39] },
  { name: "Thu", values: [28, 46, 82, 94, 78, 44] },
  { name: "Wed", values: [26, 48, 88, 96, 81, 52] },
  { name: "Tue", values: [22, 44, 79, 91, 76, 46] },
  { name: "Mon", values: [20, 36, 71, 85, 68, 38] },
];
const field =
  "h-8 max-w-full cursor-pointer rounded-md border border-border bg-card px-2 text-xs";

export function LmsAdvancedWidgets({
  courses,
  learners,
  period,
  category,
  onCourse,
}: {
  courses: LmsCourse[];
  learners: LmsLearner[];
  period: "7" | "30";
  category: string;
  onCourse: (course: LmsCourse) => void;
}) {
  const { base } = useChartTheme();
  const colors = [1, 2, 3, 4].map((i) => token(`--chart-${i}`));
  const data = getLmsOverview(courses, period, category);
  const published = data.selected.filter((c) => c.status === "Published");
  const [trend, setTrend] = useState<"Enrollments" | "Completions">(
    "Enrollments",
  );
  const [contacted, setContacted] = useState<string[]>([]);
  const [target, setTarget] = useState(80);
  const current =
    trend === "Enrollments" ? data.enrollmentSeries : data.completionSeries;
  const previous = current.map((v, i) => Math.round(v / (1.12 + i * 0.015)));
  const trendOptions = mergeOptions(base, {
    chart: { type: "area" },
    colors: [colors[0]!, colors[3]!],
    stroke: { width: [3, 2], dashArray: [0, 5], curve: "smooth" },
    fill: { opacity: [0.16, 0] },
    xaxis: { categories: data.labels },
    yaxis: {
      min: 0,
      labels: { formatter: (v: number) => String(Math.round(v)) },
    },
    legend: { position: "top", horizontalAlign: "left" },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (v: number) => `${v} ${trend.toLowerCase()}` },
    },
  });
  const assessmentOptions = mergeOptions(base, {
    chart: { type: "bar" },
    colors: [colors[2]!],
    stroke: { width: 0 },
    plotOptions: {
      bar: { horizontal: true, barHeight: "35%", borderRadius: 3 },
    },
    xaxis: {
      min: 0,
      max: 100,
      tickAmount: 4,
      categories: published.map((c) =>
        c.title
          .replace(" Masterclass", "")
          .replace(" Fundamentals", "")
          .replace(" Essentials", ""),
      ),
      labels: { formatter: (v: string) => `${Math.round(Number(v))}%` },
    },
    yaxis: { labels: { maxWidth: 130 } },
    legend: { show: false },
    tooltip: {
      y: { formatter: (v: number) => `${v}% average assessment score` },
    },
  });
  const heatOptions = mergeOptions(base, {
    chart: { type: "heatmap" },
    colors,
    stroke: { width: 4, colors: [token("--card")] },
    dataLabels: { enabled: false },
    plotOptions: {
      heatmap: {
        radius: 4,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 29, color: colors[3]!, name: "Low" },
            { from: 30, to: 54, color: colors[1]!, name: "Moderate" },
            { from: 55, to: 79, color: colors[2]!, name: "High" },
            { from: 80, to: 100, color: colors[0]!, name: "Peak" },
          ],
        },
      },
    },
    xaxis: {
      type: "category",
      categories: ["06–09", "09–12", "12–15", "15–18", "18–21", "21–24"],
    },
    legend: { show: false },
    tooltip: { y: { formatter: (v: number) => `${v}/100 engagement index` } },
  });
  const attention = learners.filter((l) => {
    const c = published.find((c) => c.id === l.courseId);
    return c && l.finished < c.lessons;
  });
  const averageScore = published.length
    ? published.reduce((s, c) => s + (assessmentScores[c.id] ?? 0), 0) /
      published.length
    : 0;
  return (
    <>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Learning momentum"
          description="Period growth in course participation and completions"
          className="xl:col-span-8"
          bodyClassName="p-5"
          action={
            <select
              aria-label="Learning momentum metric"
              className={field}
              value={trend}
              onChange={(e) => setTrend(e.target.value as typeof trend)}
            >
              <option>Enrollments</option>
              <option>Completions</option>
            </select>
          }
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[26px] font-semibold">
                {current.reduce((s, v) => s + v, 0).toLocaleString("en-US")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {trend.toLowerCase()} across selected programs
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--chart-1)]">
              <ArrowUpRight className="size-3.5" />
              Compared with prior sample period
            </span>
          </div>
          <ApexChart
            type="area"
            height={265}
            options={trendOptions}
            series={[
              { name: "Current period", data: current },
              { name: "Previous period", data: previous },
            ]}
          />
          <div className="grid grid-cols-3 gap-3 border-t border-border pt-3">
            {[
              { label: "Published programs", value: published.length },
              { label: "Completions", value: data.completions },
              {
                label: "Still learning",
                value: data.enrollments - data.completions,
              },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-[11px] text-muted-foreground">{m.label}</p>
                <p className="mt-1 text-sm font-semibold">
                  {m.value.toLocaleString("en-US")}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Certification pipeline"
          description="Progress toward learning credentials"
          className="xl:col-span-4"
          bodyClassName="p-5"
          action={<Award className="size-5 text-[var(--chart-3)]" />}
        >
          <p className="text-[32px] font-semibold">
            {data.completions.toLocaleString("en-US")}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Course completion milestones in period
          </p>
          <div className="my-5 rounded-xl border border-border p-4">
            <div className="flex justify-between gap-2 text-xs">
              <span>Completion rate</span>
              <b>{data.completionRate.toFixed(1)}%</b>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-[var(--chart-3)]"
                style={{ width: `${data.completionRate}%` }}
              />
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Course completion is the prerequisite for credential review.
            </p>
          </div>
          <dl className="space-y-4 text-xs">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                Learners still in progress
              </dt>
              <dd className="font-semibold">
                {data.enrollments - data.completions}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                Published learning paths
              </dt>
              <dd className="font-semibold">{published.length}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-border pt-3 text-[11px] text-muted-foreground">
            Illustrative academy reporting · credentials require a final
            assessment.
          </p>
        </Card>
        <Card
          title="Assessment benchmarks"
          description="Illustrative average scores by course · target marker"
          className="xl:col-span-7"
          bodyClassName="p-3"
          action={
            <select
              aria-label="Assessment target"
              className={field}
              value={target}
              onChange={(e) => setTarget(Number(e.target.value))}
            >
              <option value={80}>80% target</option>
              <option value={85}>85% target</option>
              <option value={90}>90% target</option>
            </select>
          }
        >
          <div className="flex gap-6 px-2 pt-2">
            <div>
              <p className="text-xs text-muted-foreground">
                Average assessment
              </p>
              <p className="mt-1 text-xl font-semibold">
                {averageScore.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                Programs meeting target
              </p>
              <p className="mt-1 text-xl font-semibold">
                {
                  published.filter(
                    (c) => (assessmentScores[c.id] ?? 0) >= target,
                  ).length
                }{" "}
                / {published.length}
              </p>
            </div>
          </div>
          {published.length ? (
            <ApexChart
              type="bar"
              height={250}
              options={assessmentOptions}
              series={[
                {
                  name: "Average score",
                  data: published.map((c) => ({
                    x: c.title
                      .replace(" Masterclass", "")
                      .replace(" Fundamentals", "")
                      .replace(" Essentials", ""),
                    y: assessmentScores[c.id] ?? 0,
                    goals: [
                      {
                        name: "Target",
                        value: target,
                        strokeWidth: 3,
                        strokeHeight: 8,
                        strokeColor: colors[1]!,
                      },
                    ],
                  })),
                },
              ]}
            />
          ) : (
            <p className="p-6 text-sm text-muted-foreground">
              No published programs in this category.
            </p>
          )}
        </Card>
        <Card
          title="Study-time patterns"
          description="Illustrative learner engagement by weekday and hour · UTC"
          className="xl:col-span-5"
          bodyClassName="p-3"
        >
          <ApexChart
            type="heatmap"
            height={290}
            options={heatOptions}
            series={engagement.map((d) => ({
              name: d.name,
              data: d.values.map((y, i) => ({
                x: ["06–09", "09–12", "12–15", "15–18", "18–21", "21–24"][i]!,
                y,
              })),
            }))}
          />
          <div className="flex flex-wrap gap-3 border-t border-border px-2 pt-3 text-[11px] text-muted-foreground">
            {[
              { name: "Low", i: 3 },
              { name: "Moderate", i: 1 },
              { name: "High", i: 2 },
              { name: "Peak", i: 0 },
            ].map((l) => (
              <span key={l.name} className="flex items-center gap-1">
                <span
                  className="size-2 rounded-sm"
                  style={{ background: `var(--chart-${l.i + 1})` }}
                />
                {l.name}
              </span>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Learner support queue"
          description="Incomplete sample pathways that benefit from a check-in"
          className="xl:col-span-7"
          bodyClassName="p-0"
        >
          <ul className="divide-y divide-border">
            {attention.map((l) => {
              const course = published.find((c) => c.id === l.courseId)!;
              return (
                <li
                  key={l.id}
                  className="flex flex-wrap items-center gap-3 p-4"
                >
                  <img
                    src={getUserImage(l.name)}
                    alt={l.name}
                    className="size-9 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{l.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {course.title} · {course.lessons - l.finished} lessons
                      remaining
                    </p>
                  </div>
                  <button
                    className="cursor-pointer rounded-md border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted disabled:cursor-default disabled:text-muted-foreground"
                    disabled={contacted.includes(l.id)}
                    onClick={() => setContacted((v) => [...v, l.id])}
                  >
                    {contacted.includes(l.id)
                      ? "Check-in noted"
                      : "Record check-in"}
                  </button>
                </li>
              );
            })}
          </ul>
          {!attention.length && (
            <p className="p-5 text-sm text-muted-foreground">
              All sample learners in this selection have completed their
              pathways.
            </p>
          )}
        </Card>
        <Card
          title="Course improvement desk"
          description="Prioritize content with lower completion rates"
          className="xl:col-span-5"
          bodyClassName="p-5"
        >
          <div className="space-y-4">
            {[...published]
              .sort(
                (a, b) => a.completed / a.students - b.completed / b.students,
              )
              .slice(0, 3)
              .map((c) => (
                <button
                  key={c.id}
                  className="flex w-full cursor-pointer items-start gap-3 text-start"
                  onClick={() => onCourse(c)}
                >
                  <span className="rounded-lg bg-muted p-2 text-[var(--chart-2)]">
                    <Target className="size-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium">{c.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {((c.completed / c.students) * 100).toFixed(1)}%
                      completion · {c.students - c.completed} still learning
                    </span>
                  </span>
                </button>
              ))}
          </div>
          <p className="mt-5 flex items-center gap-2 border-t border-border pt-3 text-[11px] text-muted-foreground">
            <MessageSquare className="size-3.5" />
            Open a program to review its lesson plan.
          </p>
        </Card>
      </div>
    </>
  );
}
