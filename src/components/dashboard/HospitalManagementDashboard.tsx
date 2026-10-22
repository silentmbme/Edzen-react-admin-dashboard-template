import { useState, type FormEvent } from "react";
import {
  BedDouble,
  CalendarDays,
  Check,
  ClipboardList,
  Download,
  Eye,
  Hospital,
  Package,
  Plus,
  Search,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/layout/AppShell";
import { ApexChart } from "@/components/charts/ApexChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HOSPITAL_APPOINTMENTS,
  HOSPITAL_DEPARTMENTS,
  HOSPITAL_DOCTORS,
  HOSPITAL_SUPPLIES,
  getHospitalOverview,
  hospitalMoney,
  type HospitalAppointment,
} from "@/data/hospital-dashboard-data";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Card, PageHeader } from "./widgets";

const hospitalField =
  "h-9 max-w-full cursor-pointer rounded-md border border-border bg-card px-3 text-xs";
const hospitalAccents = [
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
export function HospitalManagementPage() {
  return (
    <AppShell navigationPath="/dashboards/hospital-management">
      <HospitalManagementDashboard />
    </AppShell>
  );
}

function DoctorPortrait({
  doctorId,
  small = false,
}: {
  doctorId: string;
  small?: boolean;
}) {
  const doctor = HOSPITAL_DOCTORS.find((item) => item.id === doctorId);
  if (!doctor) return null;
  return (
    <span
      role="img"
      aria-label={`Portrait of ${doctor.name}`}
      data-doctor-portrait={doctor.id}
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-border font-semibold ${small ? "size-9 text-xs" : "size-16 text-lg"} ${doctor.tone}`}
    >
      <span aria-hidden>{doctor.initials}</span>
      <img
        src={doctor.image}
        alt=""
        aria-hidden
        width={384}
        height={384}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </span>
  );
}

export function HospitalManagementDashboard() {
  const [period, setPeriod] = useState<"7" | "30">("7");
  const [department, setDepartment] = useState("all");
  const [appointments, setAppointments] = useState(HOSPITAL_APPOINTMENTS);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [patient, setPatient] = useState("");
  const [doctorId, setDoctorId] = useState("dr-01");
  const [date, setDate] = useState("2026-10-09");
  const [time, setTime] = useState("14:00");
  const [appointmentType, setAppointmentType] = useState("Consultation");
  const [bookingError, setBookingError] = useState("");
  const [details, setDetails] = useState<HospitalAppointment | null>(null);
  const { base } = useChartTheme();
  const data = getHospitalOverview(period, department);
  const departmentAppointments = appointments.filter(
    (item) => department === "all" || item.department === department,
  );
  const visibleAppointments = departmentAppointments.filter(
    (item) =>
      (status === "all" || item.status === status) &&
      `${item.patient} ${item.id} ${item.department}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const doctors = HOSPITAL_DOCTORS.filter(
    (item) => department === "all" || item.department === department,
  );
  const scheduled = departmentAppointments.filter(
    (item) => item.status === "Scheduled",
  ).length;
  const flowOptions = mergeOptions(base, {
    chart: { type: "bar", stacked: true },
    colors: [token("--chart-1"), token("--chart-2")],
    stroke: { width: 0 },
    plotOptions: { bar: { columnWidth: "40%", borderRadius: 3 } },
    xaxis: { categories: data.labels },
    yaxis: {
      labels: {
        formatter: (value: number) => Math.abs(Math.round(value)).toString(),
      },
    },
    legend: { position: "top", horizontalAlign: "left" },
    tooltip: {
      y: {
        formatter: (value: number) => `${Math.abs(Math.round(value))} patients`,
      },
    },
  });
  const [supplyRequests, setSupplyRequests] = useState<string[]>([]);
  function completeVisit(id: string) {
    setAppointments((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: "Completed" } : item,
      ),
    );
    toast.success("Sample visit completed");
  }
  function openBooking(id = "dr-01") {
    setDoctorId(id);
    setPatient("");
    setDate("2026-10-09");
    setTime("14:00");
    setBookingError("");
    setBookingOpen(true);
  }
  function bookAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const doctor = HOSPITAL_DOCTORS.find(
      (item) => item.id === doctorId && item.available,
    );
    if (
      !doctor ||
      patient.trim().length < 2 ||
      date < "2026-10-09" ||
      !/^\d{2}:\d{2}$/.test(time)
    ) {
      setBookingError(
        "Enter a patient name, an available doctor, and a valid appointment date and time.",
      );
      return;
    }
    if (
      appointments.some(
        (item) =>
          item.doctorId === doctorId &&
          item.date === date &&
          item.time === time,
      )
    ) {
      setBookingError(
        "This doctor already has an appointment at that time. Choose another time.",
      );
      return;
    }
    const appointment: HospitalAppointment = {
      id: `APT-${2101 + appointments.length}`,
      patient: patient.trim(),
      age: null,
      doctorId,
      department: doctor.department,
      date,
      time,
      type: appointmentType,
      status: "Scheduled",
    };
    setAppointments((current) => [appointment, ...current]);
    setDepartment("all");
    setStatus("all");
    setQuery("");
    setBookingOpen(false);
    toast.success("Sample appointment added");
  }
  function checkIn(id: string) {
    setAppointments((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: "Checked in" } : item,
      ),
    );
    toast.success("Sample patient checked in");
  }
  function exportAppointments() {
    const rows = [
      [
        "Appointment",
        "Patient",
        "Department",
        "Doctor",
        "Date",
        "Time",
        "Status",
      ],
      ...visibleAppointments.map((item) => [
        item.id,
        item.patient,
        item.department,
        HOSPITAL_DOCTORS.find((doctor) => doctor.id === item.doctorId)?.name ??
          "",
        item.date,
        item.time,
        item.status,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row.map((value) => `"${value.replaceAll('"', '""')}"`).join(","),
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "hospital-appointments.csv";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <>
      <PageHeader
        title="Hospital Management"
        subtitle="A coordinated view of patients, appointments, and hospital operations."
        breadcrumb={["Dashboards", "Hospital Management"]}
        actions={
          <>
            <Button variant="outline" size="sm" onClick={exportAppointments}>
              <Download className="size-4" />
              Export appointments
            </Button>
            <Button size="sm" onClick={() => openBooking()}>
              <Plus className="size-4" />
              New appointment
            </Button>
          </>
        }
      />
      <Card bodyClassName="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-lg p-2 ${hospitalAccents[0]!.soft} ${hospitalAccents[0]!.text}`}
            >
              <Hospital className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Operations desk</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Sample hospital · October 9, 2026
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              aria-label="Hospital department"
              className={hospitalField}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="all">All departments</option>
              {HOSPITAL_DEPARTMENTS.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
            <select
              aria-label="Hospital reporting period"
              className={hospitalField}
              value={period}
              onChange={(e) => setPeriod(e.target.value as "7" | "30")}
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
            </select>
          </div>
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Hospital capacity"
          description="Inpatient census and availability across selected wards"
          className="xl:col-span-8"
          bodyClassName="flex flex-col p-5"
          action={
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${hospitalAccents[3]!.soft} ${hospitalAccents[3]!.text}`}
            >
              <Hospital className="size-3.5" />
              {data.departments.length} wards
            </span>
          }
        >
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
            <div className={`rounded-xl p-4 ${hospitalAccents[0]!.soft}`}>
              <div className="flex items-center gap-2 text-xs font-medium">
                <BedDouble className={`size-4 ${hospitalAccents[0]!.text}`} />
                Beds ready for admission
              </div>
              <p className="mt-3 text-[32px] font-semibold leading-tight tabular-nums">
                {data.available}
                <span className="ms-2 text-sm font-normal text-muted-foreground">
                  of {data.beds}
                </span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {((data.available / data.beds) * 100).toFixed(1)}% of capacity
                available
              </p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium">Current occupancy</span>
                <span
                  className={`rounded-lg p-1.5 ${hospitalAccents[2]!.soft} ${hospitalAccents[2]!.text}`}
                >
                  <UsersRound className="size-4" />
                </span>
              </div>
              <p className="mt-2 text-[26px] font-semibold tabular-nums">
                {data.occupancy.toFixed(1)}
                <span className="text-sm font-normal text-muted-foreground">
                  %
                </span>
              </p>
              <div
                className="mt-3 flex gap-1"
                role="img"
                aria-label={`${data.occupancy.toFixed(1)} percent of beds occupied`}
              >
                {Array.from({ length: 20 }, (_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-sm ${i < Math.round(data.occupancy / 5) ? hospitalAccents[2]!.bg : "bg-muted"}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {data.occupied} beds occupied at this snapshot
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
            <div className="flex items-center gap-3">
              <span
                className={`rounded-lg p-2 ${hospitalAccents[3]!.soft} ${hospitalAccents[3]!.text}`}
              >
                <ClipboardList className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Patient visits</p>
                <p className="mt-0.5 text-lg font-semibold">
                  {data.visits.toLocaleString("en-US")}
                  <span className="ms-1 text-[11px] font-normal text-muted-foreground">
                    / {period} days
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`rounded-lg p-2 ${hospitalAccents[1]!.soft} ${hospitalAccents[1]!.text}`}
              >
                <CalendarDays className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">
                  Expected arrivals
                </p>
                <p className="mt-0.5 text-lg font-semibold">
                  {scheduled}
                  <span className="ms-1 text-[11px] font-normal text-muted-foreground">
                    scheduled
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Card>
        <Card
          title="Clinic readiness"
          description="Live status of the sample appointment queue"
          className="xl:col-span-4"
          bodyClassName="flex flex-col p-5"
        >
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">
                Visits coordinated
              </p>
              <p className="mt-1 text-[32px] font-semibold leading-tight tabular-nums">
                {departmentAppointments.length}
              </p>
            </div>
            <div className="text-end">
              <p
                className={`text-lg font-semibold ${hospitalAccents[0]!.text}`}
              >
                {departmentAppointments.length
                  ? (
                      (departmentAppointments.filter(
                        (a) => a.status === "Completed",
                      ).length /
                        departmentAppointments.length) *
                      100
                    ).toFixed(0)
                  : "0"}
                %
              </p>
              <p className="text-[11px] text-muted-foreground">completed</p>
            </div>
          </div>
          <div
            className="my-4 flex h-2 overflow-hidden rounded-full bg-muted"
            role="img"
            aria-label="Appointment status distribution"
          >
            {[
              { status: "Scheduled", i: 3 },
              { status: "Checked in", i: 1 },
              { status: "Completed", i: 0 },
            ].map((s) => (
              <span
                key={s.status}
                className={hospitalAccents[s.i]!.bg}
                style={{
                  width: `${departmentAppointments.length ? (departmentAppointments.filter((a) => a.status === s.status).length / departmentAppointments.length) * 100 : 0}%`,
                }}
              />
            ))}
          </div>
          <div className="space-y-2">
            {[
              {
                label: "Expected",
                status: "Scheduled",
                icon: CalendarDays,
                i: 3,
              },
              {
                label: "Checked in",
                status: "Checked in",
                icon: UsersRound,
                i: 1,
              },
              { label: "Completed", status: "Completed", icon: Check, i: 0 },
            ].map((s) => {
              const Icon = s.icon;
              const count = departmentAppointments.filter(
                (a) => a.status === s.status,
              ).length;
              return (
                <div
                  key={s.status}
                  className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-2"
                >
                  <span
                    className={`rounded-md p-1.5 ${hospitalAccents[s.i]!.soft} ${hospitalAccents[s.i]!.text}`}
                  >
                    <Icon className="size-3.5" />
                  </span>
                  <span className="flex-1 text-xs font-medium">{s.label}</span>
                  <span className="text-sm font-semibold tabular-nums">
                    {count}
                  </span>
                  <span className="w-9 text-end text-[11px] tabular-nums text-muted-foreground">
                    {departmentAppointments.length
                      ? Math.round(
                          (count / departmentAppointments.length) * 100,
                        )
                      : 0}
                    %
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span
              className={`size-1.5 rounded-full ${hospitalAccents[0]!.bg}`}
            />
            Updates with booking and check-in actions
          </p>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Ward capacity matrix"
        description="Each cell represents one bed · occupied and available"
        bodyClassName="p-5"
        action={
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className={`size-2 rounded-sm ${hospitalAccents[0]!.bg}`} />
              Occupied
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-sm border border-border bg-muted" />
              Available
            </span>
          </div>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.departments.map((d) => {
            const index =
              HOSPITAL_DEPARTMENTS.findIndex((item) => item.name === d.name) %
              4;
            return (
              <section
                key={d.name}
                className="rounded-xl border border-border p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold">{d.name}</h3>
                  <span
                    className={`text-xs font-semibold ${hospitalAccents[index]!.text}`}
                  >
                    {d.beds - d.occupied} free
                  </span>
                </div>
                <div
                  className="my-4 grid grid-cols-12 gap-1"
                  role="img"
                  aria-label={`${d.name}: ${d.occupied} occupied and ${d.beds - d.occupied} available beds`}
                >
                  {Array.from({ length: d.beds }, (_, i) => (
                    <span
                      key={i}
                      className={`h-3 rounded-sm ${i < d.occupied ? hospitalAccents[index]!.bg : "border border-border bg-muted/50"}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>
                    {d.occupied} / {d.beds} occupied
                  </span>
                  <span>{((d.occupied / d.beds) * 100).toFixed(0)}%</span>
                </div>
              </section>
            );
          })}
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Patient movement"
          description="Recorded arrivals and discharges by reporting interval"
          className="xl:col-span-8"
          bodyClassName="p-3"
        >
          <ApexChart
            type="bar"
            height={280}
            options={flowOptions}
            series={[
              { name: "Arrivals", data: data.admissions },
              { name: "Discharges", data: data.discharged.map((v) => -v) },
            ]}
          />
          <div className="mx-2 flex flex-wrap justify-between gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
            <span>Above zero: arrivals · below zero: discharges</span>
            <span className="font-medium text-foreground">
              {data.visits.toLocaleString("en-US")} arrivals in period
            </span>
          </div>
        </Card>
        <Card
          title="Department workload"
          description="Relative visit volume across the selected departments"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <ul className="space-y-4">
            {data.departments.map((d, i) => (
              <li key={d.name}>
                <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                  <span className="font-medium">{d.name}</span>
                  <span className="text-muted-foreground">
                    {Math.round((d.visits * Number(period)) / 7)} visits
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${hospitalAccents[i % 4]!.bg}`}
                    style={{
                      width: `${(d.visits / Math.max(...data.departments.map((item) => item.visits))) * 100}%`,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground">
            Relative visit volume across the selected departments.
          </p>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Patient appointment queue"
        description="Coordinate scheduled arrivals, check-in and visit completion"
        bodyClassName="p-0"
        action={
          <div className="flex flex-wrap gap-2">
            <label className="relative">
              <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                aria-label="Search hospital appointments"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Patient or appointment"
                className={`${hospitalField} w-44 ps-8`}
              />
            </label>
            <select
              aria-label="Appointment status filter"
              className={hospitalField}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">All statuses</option>
              <option>Scheduled</option>
              <option>Checked in</option>
              <option>Completed</option>
            </select>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                {[
                  "Patient",
                  "Appointment",
                  "Care team",
                  "Department",
                  "Status",
                  "Actions",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 text-start font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleAppointments.map((item) => {
                const doctor = HOSPITAL_DOCTORS.find(
                  (d) => d.id === item.doctorId,
                );
                return (
                  <tr
                    key={item.id}
                    className="border-b border-border last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-5 py-4">
                      <p className="font-medium">{item.patient}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {item.id}
                        {item.age !== null ? ` · ${item.age} years` : ""}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-semibold">{item.time}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {item.date} · {item.type}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <DoctorPortrait doctorId={item.doctorId} small />
                        <span className="text-xs">{doctor?.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {item.department}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-md px-2 py-1 text-xs ${hospitalAccents[item.status === "Completed" ? 0 : item.status === "Checked in" ? 3 : 1]!.soft} ${hospitalAccents[item.status === "Completed" ? 0 : item.status === "Checked in" ? 3 : 1]!.text}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {item.status === "Scheduled" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => checkIn(item.id)}
                          >
                            Check in
                          </Button>
                        )}
                        {item.status === "Checked in" && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => completeVisit(item.id)}
                          >
                            Complete
                          </Button>
                        )}
                        <button
                          className="cursor-pointer rounded-md p-2 hover:bg-muted"
                          aria-label={`View ${item.id}`}
                          onClick={() => setDetails(item)}
                        >
                          <Eye className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {visibleAppointments.length === 0 && (
            <p className="p-6 text-center text-sm text-muted-foreground">
              No appointments match your filters.
            </p>
          )}
        </div>
        <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          {visibleAppointments.length} appointments shown · sample patient data
        </div>
      </Card>
      <Card
        className="mt-4"
        title="Care team coverage"
        description="Consultant availability and clinic assignments"
        bodyClassName="p-0"
        action={
          <span className="text-xs text-muted-foreground">
            {doctors.filter((d) => d.available).length} available to book
          </span>
        }
      >
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4">
          {doctors.map((doctor, i) => (
            <article
              key={doctor.id}
              className="min-w-0 p-5 sm:border-e sm:border-border last:border-e-0"
            >
              <div className="flex items-center justify-between gap-2">
                <DoctorPortrait doctorId={doctor.id} />
                <span
                  className={`rounded-full px-2 py-1 text-[11px] font-medium ${hospitalAccents[doctor.available ? 0 : 1]!.soft} ${hospitalAccents[doctor.available ? 0 : 1]!.text}`}
                >
                  {doctor.available ? "Available" : "In procedure"}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{doctor.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {doctor.department}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Stethoscope
                  className={`size-3.5 ${hospitalAccents[i % 4]!.text}`}
                />
                {doctor.patients} assigned patients
              </p>
              <Button
                className="mt-4 w-full"
                variant="outline"
                size="sm"
                disabled={!doctor.available}
                onClick={() => openBooking(doctor.id)}
              >
                {doctor.available ? "Book appointment" : "Unavailable"}
              </Button>
            </article>
          ))}
        </div>
        {doctors.length === 0 && (
          <p className="p-6 text-sm text-muted-foreground">
            No consultants listed for this department in the sample roster.
          </p>
        )}
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Supply watch"
          description="Current stock against replenishment targets"
          className="xl:col-span-7"
          bodyClassName="p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {HOSPITAL_SUPPLIES.map((s, i) => {
              const low = s.remaining / s.target < 0.3;
              const requested = supplyRequests.includes(s.name);
              return (
                <div
                  key={s.name}
                  className="rounded-xl border border-border p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Package
                      className={`size-4 ${hospitalAccents[low ? 1 : i % 4]!.text}`}
                    />
                    <span
                      className={`text-[11px] font-medium ${hospitalAccents[low ? 1 : 0]!.text}`}
                    >
                      {low ? "Replenish soon" : "In stock"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-medium">{s.name}</h3>
                  <p className="mt-2 text-xl font-semibold">
                    {s.remaining.toLocaleString("en-US")}
                    <span className="ms-1 text-xs font-normal text-muted-foreground">
                      {s.unit}
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Target: {s.target.toLocaleString("en-US")} {s.unit}
                  </p>
                  <button
                    disabled={requested}
                    className="mt-4 cursor-pointer text-xs font-semibold text-primary disabled:cursor-not-allowed disabled:text-muted-foreground"
                    onClick={() => {
                      setSupplyRequests((v) => [...v, s.name]);
                      toast.success(
                        `Replenishment request recorded for ${s.name}`,
                      );
                    }}
                  >
                    {requested ? "Request recorded" : "Request replenishment"}
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
        <Card
          title="Shift handover"
          description="Operational notes for the next team"
          className="xl:col-span-5"
          bodyClassName="p-5"
        >
          <ol className="space-y-5">
            {[
              {
                title: "Bed census reconciled",
                detail: `${data.occupied} occupied beds confirmed in selected wards.`,
                time: "10:20",
                icon: BedDouble,
                i: 0,
              },
              {
                title: "Clinic roster confirmed",
                detail: `${doctors.filter((d) => d.available).length} consultants accepting appointments.`,
                time: "10:30",
                icon: Stethoscope,
                i: 3,
              },
              {
                title: "Supply review due",
                detail:
                  "PPE kits and sterile dressing packs are below 30% of target.",
                time: "10:45",
                icon: Package,
                i: 1,
              },
            ].map((note) => {
              const Icon = note.icon;
              return (
                <li key={note.title} className="flex gap-3">
                  <span
                    className={`h-fit rounded-lg p-2 ${hospitalAccents[note.i]!.soft} ${hospitalAccents[note.i]!.text}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="text-sm font-medium">{note.title}</p>
                      <time className="text-[11px] text-muted-foreground">
                        {note.time}
                      </time>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {note.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="mt-5 rounded-lg bg-muted/40 p-4">
            <p className="flex items-center gap-2 text-xs font-medium">
              <ClipboardList className="size-4" />
              Reporting snapshot
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Sample billed services:{" "}
              <span className="font-semibold text-foreground">
                {hospitalMoney(data.revenue)}
              </span>
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Last {period} days · selected departments only
            </p>
          </div>
        </Card>
      </div>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New appointment</DialogTitle>
            <DialogDescription>
              Add a sample booking. Appointment changes are kept for this page
              session.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={bookAppointment} className="space-y-4">
            <div>
              <Label htmlFor="hospital-patient">Patient name</Label>
              <Input
                id="hospital-patient"
                className="mt-2"
                placeholder="Enter sample patient name"
                value={patient}
                onChange={(event) => setPatient(event.target.value)}
                required
                minLength={2}
                maxLength={80}
              />
            </div>
            <div>
              <Label htmlFor="hospital-doctor">Doctor</Label>
              <Select value={doctorId} onValueChange={setDoctorId}>
                <SelectTrigger
                  id="hospital-doctor"
                  aria-label="Appointment doctor"
                  className="mt-2"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {HOSPITAL_DOCTORS.filter((item) => item.available).map(
                    (doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name} · {doctor.department}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hospital-date">Date</Label>
                <Input
                  id="hospital-date"
                  type="date"
                  min="2026-10-09"
                  className="mt-2"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="hospital-time">Time</Label>
                <Input
                  id="hospital-time"
                  type="time"
                  className="mt-2"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="hospital-visit-type">Visit type</Label>
              <Select
                value={appointmentType}
                onValueChange={setAppointmentType}
              >
                <SelectTrigger id="hospital-visit-type" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Consultation">Consultation</SelectItem>
                  <SelectItem value="Follow-up">Follow-up</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {bookingError && (
              <p role="alert" className="text-sm text-destructive">
                {bookingError}
              </p>
            )}
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setBookingOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                <Plus className="size-4" />
                Save appointment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={details !== null}
        onOpenChange={(open) => {
          if (!open) setDetails(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment details</DialogTitle>
            <DialogDescription>
              Sample patient visit information.
            </DialogDescription>
          </DialogHeader>
          {details && (
            <dl className="grid grid-cols-2 gap-4 rounded-lg border bg-muted/30 p-4">
              {[
                ["Patient", details.patient],
                ["Appointment ID", details.id],
                [
                  "Doctor",
                  HOSPITAL_DOCTORS.find(
                    (doctor) => doctor.id === details.doctorId,
                  )?.name ?? "",
                ],
                ["Department", details.department],
                ["Date / time", `${details.date} · ${details.time}`],
                [
                  "Status",
                  appointments.find((item) => item.id === details.id)?.status ??
                    details.status,
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
