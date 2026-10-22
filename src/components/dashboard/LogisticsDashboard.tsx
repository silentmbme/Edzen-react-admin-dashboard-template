import { useState } from "react";
import { Truck, Package, Search, Download } from "lucide-react";
import { toast } from "sonner";
import { getUserImage } from "@/lib/user-images";
import { AppShell } from "@/components/layout/AppShell";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Card, PageHeader } from "./widgets";
import { LogisticsLocationMap } from "./LogisticsLocationMap";
const logisticsField =
  "h-9 max-w-full cursor-pointer rounded-md border border-border bg-card px-3 text-xs";
const logisticsAccents = [
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
const initialShipments = [
  {
    id: "SHP-1001",
    customer: "Northstar Retail",
    origin: "Mumbai",
    destination: "Pune",
    status: "In transit",
    weight: 240,
    driver: "Daniel Lee",
    vehicle: "TRK-01",
    eta: "October 10, 2026",
    progress: 65,
  },
  {
    id: "SHP-1002",
    customer: "Greenfield Foods",
    origin: "Bengaluru",
    destination: "Chennai",
    status: "Delivered",
    weight: 180,
    driver: "Sophia Carter",
    vehicle: "TRK-02",
    eta: "October 9, 2026",
    progress: 100,
  },
  {
    id: "SHP-1003",
    customer: "Atlas Supplies",
    origin: "Delhi",
    destination: "Jaipur",
    status: "Pending",
    weight: 360,
    driver: "James Wilson",
    vehicle: "TRK-03",
    eta: "October 11, 2026",
    progress: 0,
  },
  {
    id: "SHP-1004",
    customer: "Urban Living",
    origin: "Hyderabad",
    destination: "Vijayawada",
    status: "Delayed",
    weight: 120,
    driver: "Maya Patel",
    vehicle: "TRK-04",
    eta: "October 11, 2026",
    progress: 40,
  },
  {
    id: "SHP-1005",
    customer: "Summit Electronics",
    origin: "Mumbai",
    destination: "Nashik",
    status: "In transit",
    weight: 210,
    driver: "Olivia Smith",
    vehicle: "TRK-05",
    eta: "October 10, 2026",
    progress: 80,
  },
  {
    id: "SHP-1006",
    customer: "Cedar Trading",
    origin: "Delhi",
    destination: "Agra",
    status: "Delivered",
    weight: 150,
    driver: "Noah Williams",
    vehicle: "TRK-06",
    eta: "October 9, 2026",
    progress: 100,
  },
];
type Shipment = (typeof initialShipments)[number];
export function LogisticsDashboardPage() {
  return (
    <AppShell navigationPath="/dashboards/logistics-dashboard">
      <LogisticsDashboard />
    </AppShell>
  );
}
export function LogisticsDashboard() {
  const [shipments, setShipments] = useState(initialShipments);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<Shipment | null>(null);
  const visible = shipments.filter(
    (s) =>
      (status === "All" || s.status === status) &&
      `${s.id} ${s.customer} ${s.origin} ${s.destination}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const statuses = ["Pending", "In transit", "Delayed", "Delivered"];
  const { base } = useChartTheme();
  const [checklist, setChecklist] = useState<string[]>([]);
  const origins = [...new Set(shipments.map((s) => s.origin))];
  const hubOptions = mergeOptions(base, {
    chart: { type: "bar", stacked: true },
    colors: [1, 2, 3, 4].map((i) => token(`--chart-${i}`)),
    stroke: { width: 0 },
    plotOptions: {
      bar: { horizontal: true, barHeight: "42%", borderRadius: 3 },
    },
    xaxis: {
      categories: origins,
      labels: { formatter: (v: string) => `${Math.round(Number(v))} kg` },
    },
    legend: { position: "bottom", horizontalAlign: "left" },
    tooltip: { y: { formatter: (v: number) => `${v} kg` } },
  });
  function exportReport() {
    const rows = [
      [
        "Shipment",
        "Customer",
        "Origin",
        "Destination",
        "Status",
        "Weight kg",
        "Progress %",
      ],
      ...visible.map((s) => [
        s.id,
        s.customer,
        s.origin,
        s.destination,
        s.status,
        s.weight,
        s.progress,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","),
      )
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "logistics-shipments.csv";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function deliver(id: string) {
    setShipments((current) =>
      current.map((s) =>
        s.id === id ? { ...s, status: "Delivered", progress: 100 } : s,
      ),
    );
    setSelected(null);
    toast.success("Sample shipment marked delivered");
  }
  return (
    <>
      <PageHeader
        title="Logistics Dashboard"
        subtitle="Keep shipments, routes, and fleet operations moving."
        breadcrumb={["Dashboards", "Logistics"]}
        actions={
          <Button variant="outline" size="sm" onClick={exportReport}>
            <Download className="size-4" />
            Export report
          </Button>
        }
      />
      <Card bodyClassName="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={`flex size-11 items-center justify-center rounded-xl ${logisticsAccents[3]!.soft} ${logisticsAccents[3]!.text}`}
            >
              <Truck className="size-6" />
            </span>
            <div>
              <h2 className="text-[15px] font-semibold">
                Dispatch command center
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Sample fleet snapshot · October 9, 2026
              </p>
            </div>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {origins.length} origin hubs · {shipments.length} assigned vehicles
          </span>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[220px_1fr]">
          <div className="rounded-xl bg-muted/40 p-4">
            <p className="text-xs text-muted-foreground">Cargo in motion</p>
            <p className="mt-2 text-[32px] font-semibold leading-tight">
              {shipments
                .filter((s) => s.status === "In transit")
                .reduce((sum, s) => sum + s.weight, 0)
                .toLocaleString("en-US")}
              <span className="ms-1 text-sm font-normal text-muted-foreground">
                kg
              </span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {shipments.filter((s) => s.status === "In transit").length} active
              shipment lanes
            </p>
            <div className="mt-4 border-t border-border pt-3 text-xs">
              <span className="text-muted-foreground">Manifest total </span>
              <b>
                {shipments
                  .reduce((sum, s) => sum + s.weight, 0)
                  .toLocaleString("en-US")}{" "}
                kg
              </b>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {statuses.map((label, i) => {
              const count = shipments.filter((s) => s.status === label).length;
              return (
                <button
                  key={label}
                  onClick={() => setStatus(status === label ? "All" : label)}
                  aria-pressed={status === label}
                  className={`flex cursor-pointer flex-col rounded-xl border p-4 text-start transition-colors hover:bg-muted/40 ${status === label ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <span
                    className={`mb-3 flex size-8 items-center justify-center rounded-full text-white ${logisticsAccents[i]!.bg}`}
                  >
                    <Package className="size-4" />
                  </span>
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="mt-1 text-[26px] font-semibold">
                    {count}
                  </span>
                  <span className="mt-auto pt-3 text-[11px] text-muted-foreground">
                    {shipments.length
                      ? Math.round((count / shipments.length) * 100)
                      : 0}
                    % of shipments
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Card>
      <LogisticsLocationMap shipments={shipments} />
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Route network"
          description="Illustrative lane connections · schematic, not a live map"
          className="xl:col-span-8"
          bodyClassName="p-5"
        >
          <svg
            viewBox="0 0 700 310"
            className="h-auto w-full"
            role="img"
            aria-label="Mumbai to Pune and Nashik, Delhi to Jaipur and Agra, Bengaluru to Chennai, Hyderabad to Vijayawada route connections"
          >
            <defs>
              <pattern
                id="logistics-grid"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="var(--border)" />
              </pattern>
            </defs>
            <rect
              width="700"
              height="310"
              rx="12"
              fill="url(#logistics-grid)"
            />
            {[
              {
                a: [100, 75],
                b: [310, 45],
                origin: "Delhi",
                destination: "Jaipur",
                i: 1,
              },
              {
                a: [100, 75],
                b: [500, 85],
                origin: "",
                destination: "Agra",
                i: 0,
              },
              {
                a: [90, 190],
                b: [300, 150],
                origin: "Mumbai",
                destination: "Nashik",
                i: 0,
              },
              {
                a: [90, 190],
                b: [325, 235],
                origin: "",
                destination: "Pune",
                i: 2,
              },
              {
                a: [450, 175],
                b: [600, 220],
                origin: "Hyderabad",
                destination: "Vijayawada",
                i: 1,
              },
              {
                a: [120, 280],
                b: [530, 280],
                origin: "Bengaluru",
                destination: "Chennai",
                i: 3,
              },
            ].map((lane, index) => (
              <g key={index}>
                <path
                  d={`M${lane.a[0]},${lane.a[1]} Q${(lane.a[0]! + lane.b[0]!) / 2},${lane.a[1]! - 30} ${lane.b[0]},${lane.b[1]}`}
                  stroke={`var(--chart-${lane.i + 1})`}
                  strokeWidth="2"
                  strokeDasharray={lane.i === 1 ? "5 5" : undefined}
                  fill="none"
                  opacity="0.65"
                />
                <circle
                  cx={lane.a[0]}
                  cy={lane.a[1]}
                  r="5"
                  fill="var(--card)"
                  stroke={`var(--chart-${lane.i + 1})`}
                  strokeWidth="2"
                />
                <circle
                  cx={lane.b[0]}
                  cy={lane.b[1]}
                  r="5"
                  fill={`var(--chart-${lane.i + 1})`}
                />
                <text
                  x={lane.a[0]}
                  y={lane.a[1]! - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--foreground)"
                >
                  {lane.origin}
                </text>
                <text
                  x={lane.b[0]}
                  y={lane.b[1]! - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--foreground)"
                >
                  {lane.destination}
                </text>
              </g>
            ))}
          </svg>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
            <span>4 origin hubs</span>
            <span>6 destination lanes</span>
            <span>
              {shipments.filter((s) => s.status === "In transit").length}{" "}
              shipments currently in transit
            </span>
          </div>
        </Card>
        <Card
          title="Exception desk"
          description="Shipments needing a dispatch decision"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <div className="flex items-end gap-2">
            <p className="text-[32px] font-semibold">
              {
                shipments.filter(
                  (s) => s.status === "Delayed" || s.status === "Pending",
                ).length
              }
            </p>
            <p className="pb-1 text-xs text-muted-foreground">
              open exceptions
            </p>
          </div>
          <div className="mt-4 space-y-3">
            {shipments
              .filter((s) => s.status === "Delayed" || s.status === "Pending")
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className="flex w-full cursor-pointer items-start gap-3 rounded-xl border border-border p-4 text-start hover:bg-muted/40"
                >
                  <span
                    className={`rounded-lg p-2 ${logisticsAccents[1]!.soft} ${logisticsAccents[1]!.text}`}
                  >
                    <Package className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold">
                      {s.origin} → {s.destination}
                    </span>
                    <span className="mt-1 block text-[11px] text-muted-foreground">
                      {s.id} · {s.status}
                    </span>
                    <span className="mt-2 block text-xs text-muted-foreground">
                      {s.status === "Pending"
                        ? "Awaiting dispatch release"
                        : "Confirm revised delivery ETA"}
                    </span>
                  </span>
                </button>
              ))}
          </div>
          {!shipments.some(
            (s) => s.status === "Delayed" || s.status === "Pending",
          ) && (
            <p className="mt-5 text-sm text-muted-foreground">
              No shipments need attention.
            </p>
          )}
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Shipment control board"
        description="Track route progress and act on each shipment"
        bodyClassName="p-0"
        action={
          <div className="flex flex-wrap gap-2">
            <label className="relative">
              <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <Input
                aria-label="Search logistics shipments"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 w-44 ps-8 text-xs"
                placeholder="Shipment, customer or city"
              />
            </label>
            <select
              aria-label="Shipment status filter"
              className={logisticsField}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        }
      >
        <div className="divide-y divide-border">
          {visible.map((s) => {
            const i = statuses.indexOf(s.status);
            return (
              <article
                key={s.id}
                className="grid items-center gap-4 p-5 lg:grid-cols-[200px_minmax(0,1fr)_150px_auto]"
              >
                <div>
                  <button
                    onClick={() => setSelected(s)}
                    className="cursor-pointer text-sm font-semibold hover:underline"
                  >
                    {s.id}
                  </button>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.customer}
                  </p>
                  <span
                    className={`mt-2 inline-block rounded-md px-2 py-1 text-[11px] ${logisticsAccents[i]!.soft} ${logisticsAccents[i]!.text}`}
                  >
                    {s.status}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="mb-2 flex justify-between gap-2 text-xs font-medium">
                    <span>{s.origin}</span>
                    <span>{s.destination}</span>
                  </div>
                  <div
                    className="relative h-2 rounded-full bg-muted"
                    role="meter"
                    aria-label={`${s.id} route progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={s.progress}
                  >
                    <div
                      className={`h-full rounded-full ${logisticsAccents[i]!.bg}`}
                      style={{ width: `${s.progress}%` }}
                    />
                    <span
                      className={`absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-card ${logisticsAccents[i]!.bg}`}
                      style={{
                        insetInlineStart: `calc(${Math.max(1, Math.min(99, s.progress))}% - 6px)`,
                      }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                    <span>
                      {s.weight} kg · {s.vehicle}
                    </span>
                    <span>{s.progress}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={getUserImage(s.driver)}
                    alt={s.driver}
                    className="size-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium">{s.driver}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      {s.eta.replace("October ", "Oct ")}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelected(s)}
                >
                  Track
                </Button>
              </article>
            );
          })}
        </div>
        {!visible.length && (
          <p className="p-6 text-center text-sm text-muted-foreground">
            No shipments match your filters.
          </p>
        )}
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Hub cargo balance"
          description="Cargo weight by origin and shipment status"
          className="xl:col-span-7"
          bodyClassName="p-3"
        >
          <ApexChart
            type="bar"
            height={275}
            options={hubOptions}
            series={statuses.map((label) => ({
              name: label,
              data: origins.map((origin) =>
                shipments
                  .filter((s) => s.origin === origin && s.status === label)
                  .reduce((sum, s) => sum + s.weight, 0),
              ),
            }))}
          />
          <p className="mx-2 border-t border-border pt-3 text-[11px] text-muted-foreground">
            Total cargo:{" "}
            {shipments
              .reduce((sum, s) => sum + s.weight, 0)
              .toLocaleString("en-US")}{" "}
            kg · current sample manifest
          </p>
        </Card>
        <Card
          title="Dispatch release checklist"
          description="Confirm the essentials before releasing pending cargo"
          className="xl:col-span-5"
          bodyClassName="p-5"
        >
          <div className="space-y-3">
            {[
              "Verify cargo manifest",
              "Confirm driver assignment",
              "Check vehicle readiness",
              "Approve dispatch documents",
            ].map((label) => (
              <label
                key={label}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3"
              >
                <input
                  type="checkbox"
                  checked={checklist.includes(label)}
                  onChange={() =>
                    setChecklist((v) =>
                      v.includes(label)
                        ? v.filter((i) => i !== label)
                        : [...v, label],
                    )
                  }
                  className="size-4 cursor-pointer accent-primary"
                />
                <span className="text-xs font-medium">{label}</span>
              </label>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {checklist.length} / 4 checks complete
          </p>
          <Button
            className="mt-4 w-full"
            disabled={
              checklist.length !== 4 ||
              !shipments.some((s) => s.status === "Pending")
            }
            onClick={() => {
              setShipments((v) =>
                v.map((s) =>
                  s.status === "Pending"
                    ? { ...s, status: "In transit", progress: 10 }
                    : s,
                ),
              );
              setChecklist([]);
              toast.success("Pending sample cargo released to transit");
            }}
          >
            Release pending shipments
          </Button>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Driver & vehicle roster"
        description="Assigned routes and current delivery state"
        bodyClassName="p-5"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shipments.map((s, i) => (
            <article
              key={s.vehicle}
              className="rounded-xl border border-border p-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={getUserImage(s.driver)}
                  alt={s.driver}
                  loading="lazy"
                  className="size-11 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{s.driver}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.vehicle}
                  </p>
                </div>
                <Truck className={`size-4 ${logisticsAccents[i % 4]!.text}`} />
              </div>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-xs font-medium">
                  {s.origin} → {s.destination}
                </p>
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
                  <span>{s.weight} kg assigned</span>
                  <span
                    className={
                      logisticsAccents[statuses.indexOf(s.status)]!.text
                    }
                  >
                    {s.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Card>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Track {selected?.id}</DialogTitle>
            <DialogDescription>
              Sample shipment details · No live location tracking
            </DialogDescription>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="rounded-xl bg-primary/5 p-4">
                <p className="font-semibold">
                  {selected.origin} → {selected.destination}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {selected.customer}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Driver / vehicle
                  </p>
                  <p className="mt-1">
                    {selected.driver} / {selected.vehicle}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Expected arrival
                  </p>
                  <p className="mt-1">{selected.eta}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cargo</p>
                  <p className="mt-1">{selected.weight} kg</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Progress</p>
                  <p className="mt-1">
                    {selected.progress}% · {selected.status}
                  </p>
                </div>
              </div>
              <Button
                className="w-full"
                disabled={
                  selected.status === "Delivered" ||
                  selected.status === "Pending"
                }
                onClick={() => deliver(selected.id)}
              >
                Mark sample delivery complete
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
