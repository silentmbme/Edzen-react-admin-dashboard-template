import { useState, type FormEvent } from "react";
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Code2,
  GraduationCap,
  Layers3,
  Palette,
  Plus,
  Search,
  Star,
  Target,
  TrendingUp,
  UsersRound,
  Download,
  CircleDollarSign,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  LMS_CATEGORIES,
  LMS_COURSES,
  LMS_INSTRUCTORS,
  LMS_LEARNERS,
  LMS_SESSIONS,
  getLmsOverview,
  lmsMoney,
  type LmsCourse,
} from "@/data/lms-dashboard-data";
import { getUserImage } from "@/lib/user-images";

import { Badge, Card, PageHeader } from "./widgets";
import { LmsAdvancedWidgets } from "./LmsAdvancedWidgets";

const lmsField =
  "h-9 max-w-full cursor-pointer rounded-md border border-border bg-card px-3 text-xs";
const lmsAccents = [
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
function CategoryIcon({
  category,
  className = "size-6",
}: {
  category: string;
  className?: string;
}) {
  const Icon =
    category === "Development"
      ? Code2
      : category === "Design"
        ? Palette
        : category === "Data Science"
          ? Layers3
          : TrendingUp;
  return <Icon className={className} />;
}
export function LmsDashboard() {
  const [courses, setCourses] = useState(LMS_COURSES);
  const [learners, setLearners] = useState(LMS_LEARNERS);
  const [period, setPeriod] = useState<"7" | "30">("30");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [courseStatus, setCourseStatus] = useState("all");
  const [newCourseOpen, setNewCourseOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Development");
  const [instructorId, setInstructorId] = useState("daniel");
  const [lessons, setLessons] = useState("12");
  const [price, setPrice] = useState("49");
  const [formError, setFormError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<LmsCourse | null>(null);
  const [selectedSession, setSelectedSession] = useState<
    (typeof LMS_SESSIONS)[number] | null
  >(null);

  const data = getLmsOverview(courses, period, category);
  const visibleCourses = data.selected.filter(
    (course) =>
      (courseStatus === "all" || course.status === courseStatus) &&
      `${course.title} ${course.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const visibleLearners = learners.filter((learner) =>
    data.selected.some((course) => course.id === learner.courseId),
  );
  const sessions = LMS_SESSIONS.filter(
    (session) => category === "all" || session.category === category,
  );
  const instructors = LMS_INSTRUCTORS.filter((instructor) =>
    data.selected.some((course) => course.instructorId === instructor.id),
  );
  function createCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const count = Number(lessons),
      fee = Number(price);
    if (
      courseTitle.trim().length < 3 ||
      !Number.isInteger(count) ||
      count < 1 ||
      count > 200 ||
      !Number.isFinite(fee) ||
      fee < 0 ||
      fee > 10000
    ) {
      setFormError(
        "Enter a course title, 1–200 lessons, and a price between $0 and $10,000.",
      );
      return;
    }
    setCourses((current) => [
      {
        id: `CRS-${101 + current.length}`,
        title: courseTitle.trim(),
        category: newCategory,
        instructorId,
        lessons: count,
        price: fee,
        students: 0,
        completed: 0,
        status: "Draft",
        color: "--primary",
      },
      ...current,
    ]);
    setCategory("all");
    setCourseStatus("all");
    setQuery("");
    setNewCourseOpen(false);
    toast.success("Sample course saved as a draft");
  }
  function completeLesson(id: string) {
    const learner = learners.find((item) => item.id === id),
      course = courses.find((item) => item.id === learner?.courseId);
    if (!learner || !course || learner.finished >= course.lessons) return;
    setLearners((current) =>
      current.map((item) =>
        item.id === id ? { ...item, finished: item.finished + 1 } : item,
      ),
    );
    if (learner.finished + 1 === course.lessons)
      setCourses((current) =>
        current.map((item) =>
          item.id === course.id
            ? { ...item, completed: item.completed + 1 }
            : item,
        ),
      );
    toast.success(
      learner.finished + 1 === course.lessons
        ? "Sample course completed"
        : "Sample lesson marked complete",
    );
  }
  function exportReport() {
    const rows = [
      [
        "Course",
        "Category",
        "Instructor",
        "Lessons",
        "Enrollments (30-day sample)",
        "Completed",
        "Price (USD)",
        "Status",
      ],
      ...visibleCourses.map((course) => [
        course.title,
        course.category,
        LMS_INSTRUCTORS.find((item) => item.id === course.instructorId)?.name ??
          "",
        course.lessons,
        course.students,
        course.completed,
        course.price,
        course.status,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(","),
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lms-course-report.csv";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <PageHeader
        title="LMS Dashboard"
        subtitle="Track learning, manage courses, and help every student move forward."
        breadcrumb={["Dashboards", "LMS"]}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={exportReport}>
              <Download className="size-4" />
              Export report
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setCourseTitle("");
                setFormError("");
                setNewCourseOpen(true);
              }}
            >
              <Plus className="size-4" />
              Create course
            </Button>
          </>
        }
      />
      <Card bodyClassName="p-0">
        <div className="grid lg:grid-cols-[230px_1fr]">
          <div
            className={`border-b border-border p-5 lg:border-b-0 lg:border-e ${lmsAccents[2]!.soft}`}
          >
            <GraduationCap className={`size-7 ${lmsAccents[2]!.text}`} />
            <h2 className="mt-3 text-lg font-semibold">Academy overview</h2>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Sample learning programs · period ending Oct 9, 2026
            </p>
            <select
              aria-label="LMS reporting period"
              className={`${lmsField} mt-4 w-full`}
              value={period}
              onChange={(e) => setPeriod(e.target.value as "7" | "30")}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
            </select>
          </div>
          <div className="flex flex-col justify-between p-5">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                {
                  label: "Enrollments",
                  icon: UsersRound,
                  value: data.enrollments.toLocaleString("en-US"),
                },
                {
                  label: "Completions",
                  icon: GraduationCap,
                  value: data.completions.toLocaleString("en-US"),
                },
                {
                  label: "Completion rate",
                  icon: Target,
                  value: `${data.completionRate.toFixed(1)}%`,
                },
                {
                  label: "Course sales",
                  value: lmsMoney(data.revenue),
                  icon: CircleDollarSign,
                },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={m.label}>
                    <div className="p-3 rounded-xl border text-center">
                      <span
                        className={`flex mx-auto mb-3 size-8 shrink-0 items-center justify-center rounded-full text-white ${lmsAccents[i]!.bg}`}
                        aria-hidden="true"
                      >
                        <Icon className="size-4" />
                      </span>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                       <p
                          className={`mt-2 text-[22px] font-semibold ${lmsAccents[i]!.text}`}
                        >
                          {m.value}
                        </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
              <span>
                <b className="text-foreground">
                  {data.selected.filter((c) => c.status === "Published").length}
                </b>{" "}
                published courses
              </span>
              <span>
                <b className="text-foreground">
                  {data.selected.filter((c) => c.status === "Draft").length}
                </b>{" "}
                drafts in development
              </span>
              <span>
                <b className="text-foreground">{instructors.length}</b>{" "}
                instructors
              </span>
              <span>
                <b className="text-foreground">{sessions.length}</b> upcoming
                sessions
              </span>
            </div>
          </div>
        </div>
      </Card>
      <LmsAdvancedWidgets
        courses={courses}
        learners={learners}
        period={period}
        category={category}
        onCourse={setSelectedCourse}
      />
      <div className="mt-4 grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card
          title="Course studio"
          description="Your curriculum, organized by learning program"
          bodyClassName="p-0"
          action={
            <div className="flex flex-wrap gap-2">
              <select
                aria-label="LMS category"
                className={lmsField}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All categories</option>
                {LMS_CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                aria-label="Course status"
                className={lmsField}
                value={courseStatus}
                onChange={(e) => setCourseStatus(e.target.value)}
              >
                <option value="all">All statuses</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
              <input
                aria-label="Search LMS courses"
                placeholder="Find a course"
                className={`${lmsField} w-32`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          }
        >
          <div className="divide-y divide-border">
            {visibleCourses.map((c, i) => {
              const index = Math.max(
                0,
                LMS_CATEGORIES.findIndex((cat) => cat === c.category),
              );
              const instructor = LMS_INSTRUCTORS.find(
                (p) => p.id === c.instructorId,
              );
              return (
                <article
                  key={c.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
                >
                  <span className="hidden w-6 shrink-0 text-xs font-medium text-muted-foreground sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${lmsAccents[index]!.soft} ${lmsAccents[index]!.text}`}
                  >
                    <CategoryIcon category={c.category} className="size-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-muted-foreground">
                        {c.category}
                      </span>
                      <span
                        className={`text-[11px] font-medium ${lmsAccents[c.status === "Draft" ? 1 : 0]!.text}`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(c)}
                      className="mt-1 cursor-pointer text-start text-sm font-semibold hover:underline"
                    >
                      {c.title}
                    </button>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {instructor?.name} · {c.lessons} lessons · {c.students}{" "}
                      enrolled
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <span className="text-sm font-semibold">
                      {lmsMoney(c.price)}
                    </span>
                    <button
                      onClick={() => setSelectedCourse(c)}
                      className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary"
                    >
                      Open course
                      <ChevronRight className="size-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {visibleCourses.length === 0 && (
            <p className="p-6 text-sm text-muted-foreground">
              No courses match your filters.
            </p>
          )}
        </Card>
        <Card
          title="Classroom planner"
          description="Upcoming instructor-led sessions"
          bodyClassName="p-0"
        >
          <ol className="divide-y divide-border">
            {sessions.map((s, i) => (
              <li key={s.id} className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-lg font-semibold ${lmsAccents[i % 4]!.text}`}
                  >
                    {s.month} {s.day}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.time}</p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={getUserImage(
                        LMS_INSTRUCTORS.find((p) => p.id === s.instructorId)
                          ?.imageName ?? "",
                      )}
                      alt="Session instructor"
                      className="size-6 rounded-full object-cover"
                    />
                    <span className="text-[11px] text-muted-foreground">
                      {
                        LMS_INSTRUCTORS.find((p) => p.id === s.instructorId)
                          ?.name
                      }
                    </span>
                  </div>
                  <button
                    aria-label={`View ${s.title}`}
                    onClick={() => setSelectedSession(s)}
                    className="cursor-pointer rounded-full border border-border p-1.5 hover:bg-muted"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ol>
          {sessions.length === 0 && (
            <p className="p-5 text-sm text-muted-foreground">
              No sessions for this category.
            </p>
          )}
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Learning pathway board"
        description="Individual lesson progress · select the next milestone to advance"
        bodyClassName="p-5"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {visibleLearners.map((learner, i) => {
            const course = courses.find((c) => c.id === learner.courseId)!;
            const complete = learner.finished >= course.lessons;
            return (
              <article
                key={learner.id}
                className="rounded-xl border border-border p-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={getUserImage(learner.name)}
                    alt={learner.name}
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold">{learner.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {course.title}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${lmsAccents[i % 4]!.text}`}
                  >
                    {Math.round((learner.finished / course.lessons) * 100)}%
                  </span>
                </div>
                <div
                  className="my-4 flex flex-wrap gap-1"
                  role="img"
                  aria-label={`${learner.name}: ${learner.finished} of ${course.lessons} lessons complete`}
                >
                  {Array.from({ length: course.lessons }, (_, j) => (
                    <span
                      key={j}
                      className={`h-2 w-4 rounded-sm ${j < learner.finished ? lmsAccents[i % 4]!.bg : "bg-muted"}`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                  <span className="text-xs text-muted-foreground">
                    {learner.finished} / {course.lessons} lessons
                  </span>
                  <button
                    disabled={complete}
                    aria-label={`Complete next lesson for ${learner.name}`}
                    onClick={() => completeLesson(learner.id)}
                    className="cursor-pointer text-xs font-semibold text-primary disabled:cursor-default disabled:text-muted-foreground"
                  >
                    {complete ? "Course completed" : "Complete next lesson →"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {visibleLearners.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No sample learners in this category.
          </p>
        )}
      </Card>
      <Card
        className="mt-4"
        title="Program completion report"
        description="Completion outcomes across published courses · 30-day sample"
        bodyClassName="p-0"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[580px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                {[
                  "Program",
                  "Enrollments",
                  "Completed",
                  "Completion",
                  "Remaining",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 text-start font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.selected
                .filter((c) => c.status === "Published")
                .map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-4 font-medium">{c.title}</td>
                    <td className="px-5 py-4">{c.students}</td>
                    <td className="px-5 py-4">{c.completed}</td>
                    <td className="px-5 py-4 font-semibold">
                      {c.students
                        ? ((c.completed / c.students) * 100).toFixed(1)
                        : 0}
                      %
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {c.students - c.completed}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card
        className="mt-4"
        title="Your teaching team"
        description="Meet the specialists behind your learning programs"
        bodyClassName="p-5"
        action={
          <span className="text-xs text-muted-foreground">
            {instructors.length} instructors in view
          </span>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {instructors.map((instructor, i) => {
            const assigned = data.selected.filter(
              (c) => c.instructorId === instructor.id,
            );
            const enrollments = assigned.reduce(
              (sum, c) => sum + c.students,
              0,
            );
            return (
              <article
                key={instructor.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border"
              >
                <div
                  className={`flex items-center justify-between gap-3 px-4 py-3 ${lmsAccents[i % 4]!.soft}`}
                >
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${lmsAccents[i % 4]!.text}`}
                  >
                    <GraduationCap className="size-3.5" />
                    Teaching specialist
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-card px-2 py-1 text-xs font-semibold">
                    <Star className="size-3 fill-current text-[var(--chart-2)]" />
                    {instructor.rating}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={getUserImage(instructor.imageName)}
                      alt={instructor.name}
                      loading="lazy"
                      className="size-14 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">
                        {instructor.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {instructor.specialty}
                      </p>
                    </div>
                  </div>
                  <dl className="my-4 grid grid-cols-2 gap-3 border-y border-border py-3">
                    <div>
                      <dt className="text-[11px] text-muted-foreground">
                        Programs
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        {assigned.length}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] text-muted-foreground">
                        Enrollments
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        {enrollments.toLocaleString("en-US")}
                      </dd>
                    </div>
                  </dl>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">
                    TEACHING CATEGORIES
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {[...new Set(assigned.map((c) => c.category))].map(
                      (name) => (
                        <span
                          key={name}
                          className="rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground"
                        >
                          {name}
                        </span>
                      ),
                    )}
                  </div>
                  <button
                    className="mt-auto flex cursor-pointer items-center justify-between rounded-lg border border-border px-3 py-2 text-xs font-medium hover:bg-muted disabled:cursor-default disabled:text-muted-foreground"
                    disabled={!assigned.length}
                    onClick={() =>
                      setSelectedCourse(
                        assigned.find((c) => c.status === "Published") ??
                          assigned[0] ??
                          null,
                      )
                    }
                  >
                    View featured course
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {instructors.length === 0 && (
          <p className="py-4 text-sm text-muted-foreground">
            No instructors assigned to this category yet.
          </p>
        )}
      </Card>
      <Dialog open={newCourseOpen} onOpenChange={setNewCourseOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create course</DialogTitle>
            <DialogDescription>
              Add a draft to the sample catalog. Changes are kept for this page
              session.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={createCourse} className="space-y-4">
            <div>
              <Label htmlFor="lms-course-title">Course title</Label>
              <Input
                id="lms-course-title"
                className="mt-2"
                value={courseTitle}
                onChange={(event) => setCourseTitle(event.target.value)}
                required
                minLength={3}
                maxLength={100}
                placeholder="Enter course title"
              />
            </div>
            <div>
              <Label htmlFor="lms-new-category">Category</Label>
              <Select value={newCategory} onValueChange={setNewCategory}>
                <SelectTrigger id="lms-new-category" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LMS_CATEGORIES.map((name) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="lms-instructor">Instructor</Label>
              <Select value={instructorId} onValueChange={setInstructorId}>
                <SelectTrigger id="lms-instructor" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LMS_INSTRUCTORS.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="lms-lessons">Lessons</Label>
                <Input
                  id="lms-lessons"
                  type="number"
                  min="1"
                  max="200"
                  step="1"
                  required
                  className="mt-2"
                  value={lessons}
                  onChange={(event) => setLessons(event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lms-price">Price (USD)</Label>
                <Input
                  id="lms-price"
                  type="number"
                  min="0"
                  max="10000"
                  step="0.01"
                  required
                  className="mt-2"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </div>
            {formError && (
              <p role="alert" className="text-sm text-destructive">
                {formError}
              </p>
            )}
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setNewCourseOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save draft</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={selectedCourse !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCourse(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>
              Sample course details and learning outcomes.
            </DialogDescription>
          </DialogHeader>
          {selectedCourse && (
            <>
              <div className="flex flex-wrap gap-2">
                <Badge tone="primary">{selectedCourse.category}</Badge>
                <Badge
                  tone={
                    selectedCourse.status === "Published"
                      ? "success"
                      : "warning"
                  }
                >
                  {selectedCourse.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  [
                    "Instructor",
                    LMS_INSTRUCTORS.find(
                      (item) => item.id === selectedCourse.instructorId,
                    )?.name ?? "",
                  ],
                  ["Lessons", selectedCourse.lessons],
                  ["Enrollments", selectedCourse.students],
                  ["Price", lmsMoney(selectedCourse.price)],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border bg-muted/30 p-4"
                    key={label}
                  >
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-semibold">{value}</p>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="size-4 text-primary" />
                {selectedCourse.completed} learners have completed this course.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={selectedSession !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedSession(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedSession?.title}</DialogTitle>
            <DialogDescription>
              Sample live session information.
            </DialogDescription>
          </DialogHeader>
          {selectedSession && (
            <>
              <div className="space-y-3 rounded-lg border bg-muted/30 p-4 text-sm">
                <p className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" />
                  {selectedSession.date}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="size-4 text-primary" />
                  {selectedSession.time} · {selectedSession.duration}
                </p>
                <p className="flex items-center gap-2">
                  <UsersRound className="size-4 text-primary" />
                  {
                    LMS_INSTRUCTORS.find(
                      (item) => item.id === selectedSession.instructorId,
                    )?.name
                  }
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selectedSession.description}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
