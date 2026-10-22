import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  BellRing,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Download,
  HeartPulse,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  UserPlus,
  UsersRound,
  Wallet,
  X,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserImage } from "@/lib/user-images";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";

import { Badge, Card, PageHeader } from "./widgets";

const departments = ["Engineering", "Design", "Marketing", "Operations"];
const initialEmployees = [
  {
    id: "EMP-101",
    name: "Sophia Carter",
    role: "Product designer",
    department: "Design",
    status: "Present",
    salary: 6200,
  },
  {
    id: "EMP-102",
    name: "Daniel Lee",
    role: "Frontend engineer",
    department: "Engineering",
    status: "Present",
    salary: 7800,
  },
  {
    id: "EMP-103",
    name: "Olivia Smith",
    role: "Marketing lead",
    department: "Marketing",
    status: "Remote",
    salary: 6800,
  },
  {
    id: "EMP-104",
    name: "James Wilson",
    role: "Operations manager",
    department: "Operations",
    status: "On leave",
    salary: 7100,
  },
  {
    id: "EMP-105",
    name: "Maya Patel",
    role: "Backend engineer",
    department: "Engineering",
    status: "Present",
    salary: 8200,
  },
  {
    id: "EMP-106",
    name: "Noah Williams",
    role: "Brand designer",
    department: "Design",
    status: "Remote",
    salary: 5900,
  },
];
const initialLeave = [
  {
    id: 1,
    name: "Daniel Lee",
    department: "Engineering",
    type: "Annual leave",
    dates: "Oct 12-13",
    days: 2,
    status: "Pending",
  },
  {
    id: 2,
    name: "Sophia Carter",
    department: "Design",
    type: "Personal leave",
    dates: "Oct 16",
    days: 1,
    status: "Pending",
  },
  {
    id: 3,
    name: "Olivia Smith",
    department: "Marketing",
    type: "Annual leave",
    dates: "Oct 19-21",
    days: 3,
    status: "Pending",
  },
];
const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      tone={
        status === "Present" || status === "Approved"
          ? "success"
          : status === "Remote"
            ? "info"
            : status === "Pending"
              ? "warning"
              : "danger"
      }
      variant="dot"
    >
      {status}
    </Badge>
  );
}

export function HrmDashboard() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [requests, setRequests] = useState(initialLeave);
  const [department, setDepartment] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [newDepartment, setNewDepartment] = useState("Engineering");
  const [salary, setSalary] = useState("5000");
  const [error, setError] = useState("");
  const [trendView, setTrendView] = useState<"12 weeks" | "6 weeks">(
    "12 weeks",
  );
  const [onboarding, setOnboarding] = useState([
    { title: "Welcome pack sent", department: "Engineering", done: true },
    { title: "Workstation prepared", department: "Engineering", done: false },
    { title: "Design orientation", department: "Design", done: false },
    { title: "Buddy matched", department: "Marketing", done: true },
    { title: "Policy introduction", department: "Operations", done: false },
  ]);
  const { base, themeKey } = useChartTheme();

  const selected = employees.filter(
    (employee) => department === "all" || employee.department === department,
  );
  const visible = selected.filter((employee) =>
    (employee.name + " " + employee.role)
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const leave = requests.filter(
    (request) => department === "all" || request.department === department,
  );
  const present = selected.filter(
    (employee) => employee.status === "Present",
  ).length;
  const remote = selected.filter(
    (employee) => employee.status === "Remote",
  ).length;
  const absent = selected.filter(
    (employee) => employee.status === "On leave",
  ).length;
  const payroll = selected.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  const pendingLeave = leave.filter(
    (request) => request.status === "Pending",
  ).length;
  const onboardingTasks = onboarding.filter(
    (task) => department === "all" || task.department === department,
  );
  const onboardingProgress = onboardingTasks.length
    ? Math.round(
        (onboardingTasks.filter((task) => task.done).length /
          onboardingTasks.length) *
          100,
      )
    : 0;

  const presenceOptions = mergeOptions(base, {
    chart: { type: "donut" },
    colors: [token("--chart-1"), token("--chart-4"), token("--chart-2")],
    labels: ["On site", "Remote", "On leave"],
    stroke: { width: 5, colors: [token("--card")] },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Team today",
              color: token("--muted-foreground"),
              formatter: () => String(selected.length),
            },
          },
        },
      },
    },
  });
  const talentOptions = mergeOptions(base, {
    chart: { type: "radar" },
    colors: [token("--chart-3"), token("--chart-1")],
    xaxis: {
      categories: ["Capacity", "Retention", "Hiring", "Growth", "Wellbeing"],
    },
    yaxis: { show: false, min: 0, max: 100, tickAmount: 4 },
    stroke: { width: 2.5 },
    fill: { opacity: 0.16 },
    markers: { size: 3 },
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
  });
  const workforceTrendOptions = mergeOptions(base, {
    chart: { type: "area" },
    colors: [
      token("--chart-1"),
      token("--chart-2"),
      token("--chart-3"),
      token("--chart-4"),
    ],
    stroke: {
      width: [3, 2.5, 2.5, 2],
      curve: "smooth",
      dashArray: [0, 0, 0, 5],
    },
    fill: { type: "solid", opacity: [0.16, 0.08, 0.08, 0] },
    markers: { size: [0, 0, 0, 4] },
    xaxis: {
      categories:
        trendView === "12 weeks"
          ? [
              "Jul 21",
              "Jul 28",
              "Aug 04",
              "Aug 11",
              "Aug 18",
              "Aug 25",
              "Sep 01",
              "Sep 08",
              "Sep 15",
              "Sep 22",
              "Sep 29",
              "Oct 06",
            ]
          : ["Sep 01", "Sep 08", "Sep 15", "Sep 22", "Sep 29", "Oct 06"],
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: { formatter: (value: number) => Math.round(value) + "%" },
    },
    legend: { position: "top", horizontalAlign: "left" },
    tooltip: {
      shared: true,
      intersect: false,
      y: { formatter: (value: number) => Math.round(value) + "%" },
    },
  });

  function addEmployee(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const amount = Number(salary);
    if (
      name.trim().length < 2 ||
      role.trim().length < 2 ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      amount > 100000
    ) {
      setError(
        "Enter a name, role, and monthly salary between $1 and $100,000.",
      );
      return;
    }
    setEmployees((current) => [
      ...current,
      {
        id: "EMP-" + (101 + current.length),
        name: name.trim(),
        role: role.trim(),
        department: newDepartment,
        salary: amount,
        status: "Present",
      },
    ]);
    setDepartment("all");
    setQuery("");
    setOpen(false);
    toast.success("Sample employee added");
  }
  function review(id: number, status: string) {
    setRequests((current) =>
      current.map((request) =>
        request.id === id && request.status === "Pending"
          ? { ...request, status }
          : request,
      ),
    );
    toast.success("Sample leave request " + status.toLowerCase());
  }
  function exportEmployees() {
    const rows = [
      [
        "Employee ID",
        "Name",
        "Role",
        "Department",
        "Attendance",
        "Monthly salary (USD)",
      ],
      ...visible.map((employee) => [
        employee.id,
        employee.name,
        employee.role,
        employee.department,
        employee.status,
        employee.salary,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row
          .map((value) => '"' + String(value).replaceAll('"', '""') + '"')
          .join(","),
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "hrm-employees.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <>
      <PageHeader
        title="HRM Dashboard"
        subtitle="People signals, workforce decisions, and team momentum in one place."
        breadcrumb={["Dashboards", "HRM"]}
        actions={
          <>
            <Button variant="outline" onClick={exportEmployees}>
              <Download className="size-4" />
              Export
            </Button>
            <Button
              onClick={() => {
                setName("");
                setRole("");
                setSalary("5000");
                setError("");
                setOpen(true);
              }}
            >
              <Plus className="size-4" />
              Add employee
            </Button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-12">
        <Card className="xl:col-span-8" bodyClassName="p-0">
          <div className="grid overflow-hidden lg:grid-cols-[1.45fr_.8fr]">
            <div className="relative p-6 sm:p-7">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/8 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  People command center
                </span>
                <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight">
                  A healthy team is ready to move.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  Today’s workforce is steady. Review leave coverage, keep the
                  hiring pipeline moving, and complete the onboarding handoffs
                  waiting this week.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-lg border bg-card px-3 py-2">
                    <small className="block text-[10px] text-muted-foreground">
                      Available now
                    </small>
                    <b className="block text-sm text-success">
                      {present + remote} people
                    </b>
                  </span>
                  <span className="rounded-lg border bg-card px-3 py-2">
                    <small className="block text-[10px] text-muted-foreground">
                      Leave to review
                    </small>
                    <b className="block text-sm text-warning">
                      {pendingLeave} requests
                    </b>
                  </span>
                  <span className="rounded-lg border bg-card px-3 py-2">
                    <small className="block text-[10px] text-muted-foreground">
                      New hire readiness
                    </small>
                    <b className="block text-sm text-primary">
                      {onboardingProgress}%
                    </b>
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t bg-muted/35 p-5 lg:border-s lg:border-t-0">
              <div className="flex items-center justify-between">
                <span>
                  <p className="text-sm font-semibold">Today’s presence</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Live team availability
                  </p>
                </span>
                <UsersRound className="size-5 text-primary" />
              </div>
              <div className="mt-3">
                <ApexChart
                  key={themeKey}
                  type="donut"
                  height={180}
                  options={presenceOptions}
                  series={[present, remote, absent]}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Filter the workforce"
          description="Apply one focus across the dashboard"
        >
          <label
            htmlFor="hrm-department-filter"
            className="text-xs font-medium text-muted-foreground"
          >
            Department
          </label>
          <select
            id="hrm-department-filter"
            aria-label="HRM department"
            className="mt-2 h-10 w-full cursor-pointer rounded-lg border border-border bg-card px-3 text-sm"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="all">All departments</option>
            {departments.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <div className="mt-5 rounded-xl border bg-muted/25 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Friday review
              </span>
              <Badge tone="success" variant="dot">
                Ready
              </Badge>
            </div>
            <p className="mt-3 text-sm font-semibold">
              People operations review
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Attendance, team coverage, and hiring activity are ready for the
              weekly sync.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-3"
          title="Team pulse"
          description="Availability today"
        >
          <div className="space-y-4 pt-1">
            {[
              ["On site", present, "bg-[var(--chart-1)]"],
              ["Remote", remote, "bg-[var(--chart-4)]"],
              ["Out today", absent, "bg-[var(--chart-2)]"],
            ].map(([label, value, color]) => (
              <div key={label as string} className="flex items-center gap-3">
                <i className={"size-2.5 rounded-full " + color} />
                <span className="flex-1 text-sm">{label}</span>
                <b className="text-sm">{value}</b>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-success/10 p-3 text-xs text-success">
            <b>
              {selected.length
                ? Math.round(((present + remote) / selected.length) * 100)
                : 0}
              % coverage
            </b>
            <span className="block pt-1 text-muted-foreground">
              Above the 90% operating target.
            </span>
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Talent health map"
          description="Signals behind sustainable team performance"
        >
          <ApexChart
            key={themeKey + "-talent"}
            type="radar"
            height={245}
            options={talentOptions}
            series={[
              { name: "Current", data: [82, 74, 63, 78, 86] },
              { name: "Target", data: [80, 80, 75, 78, 82] },
            ]}
          />
        </Card>
        <Card
          className="xl:col-span-4"
          title="Action desk"
          description="Decisions waiting for people operations"
        >
          <div className="space-y-2">
            {[
              ["Approve leave coverage", pendingLeave + " requests", "warning"],
              ["Schedule hiring panel", "Senior frontend engineer", "primary"],
              ["Complete equipment handoff", "1 new starter", "info"],
            ].map(([title, detail, tone]) => (
              <button
                key={title}
                type="button"
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition hover:border-primary/35 hover:bg-muted/25"
              >
                <span
                  className={
                    "grid size-8 place-items-center rounded-lg " +
                    (tone === "warning"
                      ? "bg-warning/15 text-warning"
                      : tone === "info"
                        ? "bg-info/12 text-info"
                        : "bg-primary/10 text-primary")
                  }
                >
                  <BellRing className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block truncate text-sm">{title}</b>
                  <small className="block truncate text-xs text-muted-foreground">
                    {detail}
                  </small>
                </span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-primary"
          >
            Open people inbox <ArrowUpRight className="size-3.5" />
          </button>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="People directory"
          description={visible.length + " people in the current view"}
          action={
            <div className="relative w-full sm:w-56">
              <Search className="absolute start-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                aria-label="Search employees"
                placeholder="Search people..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="ps-9"
              />
            </div>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {visible.map((employee) => (
              <article
                key={employee.id}
                className="rounded-xl border p-3 transition hover:border-primary/35"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={getUserImage(employee.name)}
                    alt=""
                    className="size-10 rounded-xl object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <b className="block truncate text-sm">{employee.name}</b>
                    <small className="block truncate text-xs text-muted-foreground">
                      {employee.role}
                    </small>
                  </span>
                  <MoreHorizontal className="size-4 text-muted-foreground" />
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="text-[11px] text-muted-foreground">
                    {employee.department}
                  </span>
                  <StatusBadge status={employee.status} />
                </div>
              </article>
            ))}
            {!visible.length && (
              <p className="col-span-full py-8 text-center text-sm text-muted-foreground">
                No employees match your search.
              </p>
            )}
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Time off desk"
          description="Review coverage before approving requests"
        >
          <div className="space-y-3">
            {leave.map((request) => (
              <div key={request.id} className="rounded-xl border p-3">
                <div className="flex items-start justify-between gap-3">
                  <span>
                    <b className="block text-sm">{request.name}</b>
                    <small className="mt-1 block text-xs text-muted-foreground">
                      {request.type} · {request.dates} · {request.days} days
                    </small>
                  </span>
                  <StatusBadge status={request.status} />
                </div>
                {request.status === "Pending" && (
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => review(request.id, "Approved")}
                    >
                      <Check className="size-3.5" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => review(request.id, "Declined")}
                    >
                      <X className="size-3.5" />
                      Decline
                    </Button>
                  </div>
                )}
              </div>
            ))}
            {!leave.length && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No leave requests for this department.
              </p>
            )}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-4"
          title="Hiring studio"
          description="Open roles and candidate energy"
        >
          <div className="space-y-4">
            {[
              [
                "Senior frontend engineer",
                "Engineering",
                18,
                "bg-[var(--chart-1)]",
              ],
              ["Product designer", "Design", 12, "bg-[var(--chart-3)]"],
              ["Growth marketer", "Marketing", 9, "bg-[var(--chart-4)]"],
            ]
              .filter((item) => department === "all" || item[1] === department)
              .map(([roleName, team, candidates, color]) => (
                <div
                  key={roleName as string}
                  className="flex items-center gap-3"
                >
                  <span
                    className={
                      "grid size-10 place-items-center rounded-xl " +
                      color +
                      " text-white"
                    }
                  >
                    <BriefcaseBusiness className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <b className="block truncate text-sm">{roleName}</b>
                    <small className="text-xs text-muted-foreground">
                      {team}
                    </small>
                  </span>
                  <span className="text-end">
                    <b className="block text-sm">{candidates}</b>
                    <small className="text-[10px] text-muted-foreground">
                      candidates
                    </small>
                  </span>
                </div>
              ))}
            {department === "Operations" && (
              <p className="py-5 text-center text-sm text-muted-foreground">
                No open roles in Operations.
              </p>
            )}
          </div>
          <button
            type="button"
            className="mt-5 flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg border py-2 text-xs font-semibold text-primary"
          >
            Review pipeline <ChevronRight className="size-3.5" />
          </button>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Onboarding runway"
          description={
            onboardingTasks.filter((task) => task.done).length +
            " of " +
            onboardingTasks.length +
            " tasks complete"
          }
        >
          <div className="mb-4 flex items-center gap-4">
            <div
              className="relative grid size-16 place-items-center rounded-full"
              style={{
                background:
                  "conic-gradient(var(--chart-1) " +
                  onboardingProgress +
                  "%, var(--muted) 0)",
              }}
            >
              <span className="grid size-12 place-items-center rounded-full bg-card text-xs font-bold">
                {onboardingProgress}%
              </span>
            </div>
            <span>
              <b className="block text-sm">New starter journey</b>
              <small className="text-xs text-muted-foreground">
                Make every handoff visible
              </small>
            </span>
          </div>
          <div className="space-y-2">
            {onboardingTasks.map((task) => (
              <label
                key={task.title}
                className="flex cursor-pointer items-center gap-3 rounded-lg border p-2.5"
              >
                <input
                  type="checkbox"
                  className="size-4 accent-primary"
                  checked={task.done}
                  onChange={() =>
                    setOnboarding((current) =>
                      current.map((item) =>
                        item.title === task.title
                          ? { ...item, done: !item.done }
                          : item,
                      ),
                    )
                  }
                />
                <span
                  className={
                    task.done
                      ? "text-xs text-muted-foreground line-through"
                      : "text-xs"
                  }
                >
                  {task.title}
                </span>
              </label>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="People rhythm"
          description="Important moments this month"
        >
          <ol className="space-y-4 border-s ps-4">
            {[
              ["12", "Sophia Carter", "Work anniversary"],
              ["15", "Maya Patel", "Birthday"],
              ["18", "All hands", "Team survey opens"],
              ["21", "James Wilson", "Work anniversary"],
            ].map(([date, title, note], index) => (
              <li key={title} className="relative">
                <i
                  className={
                    "absolute -start-[21px] top-1.5 size-2.5 rounded-full ring-4 ring-card " +
                    (index === 2
                      ? "bg-[var(--chart-2)]"
                      : "bg-[var(--chart-1)]")
                  }
                />
                <span className="text-xs font-semibold text-primary">
                  Oct {date}
                </span>
                <b className="mt-1 block text-sm">{title}</b>
                <small className="text-xs text-muted-foreground">{note}</small>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl bg-info/10 p-3 text-xs text-info">
            <ShieldCheck className="me-1 inline size-4" />
            Team survey opens in 6 days.
          </div>
        </Card>
      </div>

      <Card
        className="mt-5"
        title="Workforce experience trend"
        description="A long-range view of engagement, manager connection, wellbeing, and learning participation"
        action={
          <div className="inline-flex rounded-lg bg-muted p-1">
            {(["12 weeks", "6 weeks"] as const).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setTrendView(view)}
                className={
                  "cursor-pointer rounded-md px-2.5 py-1 text-[11px] font-semibold transition " +
                  (trendView === view
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {view}
              </button>
            ))}
          </div>
        }
      >
        <ApexChart
          key={themeKey + trendView}
          type="area"
          height={330}
          options={workforceTrendOptions}
          series={[
            {
              name: "Engagement",
              data:
                trendView === "12 weeks"
                  ? [68, 70, 71, 69, 73, 74, 76, 75, 78, 79, 81, 82]
                  : [76, 75, 78, 79, 81, 82],
            },
            {
              name: "Manager connection",
              data:
                trendView === "12 weeks"
                  ? [62, 63, 65, 66, 66, 69, 70, 72, 71, 74, 76, 77]
                  : [70, 72, 71, 74, 76, 77],
            },
            {
              name: "Wellbeing",
              data:
                trendView === "12 weeks"
                  ? [74, 73, 75, 76, 74, 77, 78, 79, 80, 78, 81, 83]
                  : [78, 79, 80, 78, 81, 83],
            },
            {
              name: "Learning participation",
              data:
                trendView === "12 weeks"
                  ? [48, 50, 54, 56, 58, 61, 63, 62, 66, 68, 71, 74]
                  : [63, 62, 66, 68, 71, 74],
            },
          ]}
        />
      </Card>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-4"
          title="Manager check-ins"
          description="Team conversations due this week"
        >
          <div className="space-y-3">
            {[
              ["Engineering", "4 of 5 completed", 80, "bg-[var(--chart-1)]"],
              ["Design", "2 of 3 completed", 67, "bg-[var(--chart-3)]"],
              ["Marketing", "1 of 2 completed", 50, "bg-[var(--chart-4)]"],
            ].map(([team, detail, value, tone]) => (
              <div key={team as string} className="rounded-xl border p-3">
                <div className="flex items-center justify-between text-sm">
                  <b>{team}</b>
                  <span className="text-xs font-semibold">{value}%</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={"h-full rounded-full " + tone}
                    style={{ width: String(value) + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card
          className="xl:col-span-4"
          title="Recognition wall"
          description="Team wins shared this week"
        >
          <div className="space-y-3">
            {[
              [
                "Sophia Carter",
                "Recognized for making the new design review faster.",
                "SC",
                "bg-[var(--chart-3)]",
              ],
              [
                "Daniel Lee",
                "Recognized for mentoring the frontend cohort.",
                "DL",
                "bg-[var(--chart-1)]",
              ],
              [
                "Olivia Smith",
                "Recognized for a thoughtful launch retrospective.",
                "OS",
                "bg-[var(--chart-4)]",
              ],
            ].map(([person, note, initials, tone]) => (
              <div key={person} className="flex gap-3">
                <span
                  className={
                    "grid size-9 shrink-0 place-items-center rounded-xl text-[10px] font-bold text-white " +
                    tone
                  }
                >
                  {initials}
                </span>
                <span>
                  <b className="block text-sm">{person}</b>
                  <small className="mt-0.5 block text-xs leading-5 text-muted-foreground">
                    {note}
                  </small>
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-primary"
          >
            Celebrate a teammate <ArrowUpRight className="size-3.5" />
          </button>
        </Card>

        <Card
          className="xl:col-span-4"
          title="Policy readiness"
          description="Required people operations controls"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Handbook", "100%", "Complete", "success"],
              ["Security", "94%", "3 pending", "warning"],
              ["Benefits", "100%", "Complete", "success"],
              ["Training", "82%", "4 pending", "info"],
            ].map(([label, value, detail, tone]) => (
              <div key={label} className="rounded-xl border p-3">
                <span
                  className={
                    "grid size-8 place-items-center rounded-lg " +
                    (tone === "success"
                      ? "bg-success/12 text-success"
                      : tone === "warning"
                        ? "bg-warning/14 text-warning"
                        : "bg-info/12 text-info")
                  }
                >
                  {tone === "success" ? (
                    <CheckCircle2 className="size-4" />
                  ) : (
                    <CircleAlert className="size-4" />
                  )}
                </span>
                <b className="mt-3 block text-lg">{value}</b>
                <small className="block text-[11px] text-muted-foreground">
                  {label} · {detail}
                </small>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add employee</DialogTitle>
            <DialogDescription>
              Create a sample employee record for this page session.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={addEmployee} className="space-y-4">
            <div>
              <Label htmlFor="hrm-name">Full name</Label>
              <Input
                id="hrm-name"
                required
                maxLength={80}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="hrm-role">Job title</Label>
              <Input
                id="hrm-role"
                required
                maxLength={80}
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="hrm-department">Department</Label>
              <select
                id="hrm-department"
                className="mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm"
                value={newDepartment}
                onChange={(event) => setNewDepartment(event.target.value)}
              >
                {departments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="hrm-salary">Monthly salary (USD)</Label>
              <Input
                id="hrm-salary"
                type="number"
                min={1}
                max={100000}
                step="0.01"
                required
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
              />
            </div>
            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full">
              Save employee
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
