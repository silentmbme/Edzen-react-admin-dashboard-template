import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Landmark,
  Plus,
  ReceiptText,
  ShieldCheck,
  FileCheck2,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Badge, Card, PageHeader } from "./widgets";
import { Button } from "@/components/ui/button";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const cashMovements = [
  { label: "Subscription settlements", value: 142800, color: "bg-primary" },
  { label: "Services collections", value: 48600, color: "bg-chart-2" },
  { label: "Payroll and benefits", value: -68600, color: "bg-destructive" },
  { label: "Operating spend", value: -31400, color: "bg-warning" },
];

export function FinanceDashboard() {
  const { base } = useChartTheme();
  const [range, setRange] = useState<"6M" | "12M">("6M");
  const [showAllActivity, setShowAllActivity] = useState(false);
  const labels = useMemo(
    () =>
      range === "6M"
        ? ["Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        : [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
          ],
    [range],
  );
  const chart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "area", toolbar: { show: false } },
        colors: [token("--chart-1"), token("--chart-2")],
        stroke: { curve: "smooth", width: [3, 2] },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.3, opacityTo: 0.02 },
        },
        dataLabels: { enabled: false },
        legend: { position: "top", horizontalAlign: "left" },
        xaxis: { categories: labels },
        yaxis: { labels: { formatter: (value: number) => `$${value}k` } },
      }),
    [base, labels],
  );
  const allocationChart = useMemo(
    () =>
      mergeOptions(base, {
        chart: { type: "donut", toolbar: { show: false } },
        labels: ["Growth programs", "Platform", "Risk reserve", "Available"],
        colors: [
          token("--chart-1"),
          token("--chart-2"),
          token("--chart-3"),
          token("--chart-4"),
        ],
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: { width: 4, colors: [token("--card")] },
        plotOptions: {
          pie: {
            donut: {
              size: "68%",
              labels: {
                show: true,
                name: { show: true, offsetY: 18 },
                value: { show: true, offsetY: -12, fontSize: "22px" },
                total: {
                  show: true,
                  label: "allocated",
                  formatter: () => "$468K",
                },
              },
            },
          },
        },
      }),
    [base],
  );
  const revenue =
    range === "6M"
      ? [138, 149, 156, 167, 179, 194]
      : [101, 108, 119, 126, 132, 136, 138, 149, 156, 167, 179, 194];
  const operatingCash =
    range === "6M"
      ? [301, 326, 348, 362, 394, 423]
      : [238, 242, 251, 264, 278, 291, 301, 326, 348, 362, 394, 423];

  return (
    <>
      <PageHeader
        title="Finance"
        subtitle="A working view of liquidity, controls, and the decisions ahead."
        breadcrumb={["Edzen", "Dashboards", "Finance"]}
        actions={
          <>
            <Button variant="outline" size="sm">
              <CalendarDays /> August close
            </Button>
            <Button size="sm">
              <Plus /> Record transaction
            </Button>
          </>
        }
      />

      <section>
        <div className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
          <div className="relative rounded-xl overflow-hidden bg-primary p-6 text-primary-foreground sm:p-7">
            <div className="absolute -right-14 -top-14 size-56 rounded-full border-[32px] border-primary-foreground/10" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  <WalletCards className="size-4" /> Treasury command
                </span>
                <Badge
                  tone="secondary"
                  className="border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground"
                >
                  Reconciled 09:30
                </Badge>
              </div>
              <p className="mt-7 text-sm text-primary-foreground/70">
                Usable cash today
              </p>
              <div className="mt-1 flex flex-wrap items-end gap-x-5 gap-y-2">
                <h2 className="text-4xl text-white font-semibold tracking-tight">
                  $482,640
                </h2>
                <span className="mb-1 flex items-center gap-1 text-sm font-medium text-primary-foreground">
                  <ArrowUpRight className="size-4" /> 8.6% from July
                </span>
              </div>
              <div className="mt-7 grid max-w-xl grid-cols-3 divide-x divide-primary-foreground/15 text-sm">
                <div>
                  <p className="text-primary-foreground/65">Operating</p>
                  <b className="mt-1 block">$314.8K</b>
                </div>
                <div className="ps-4">
                  <p className="text-primary-foreground/65">Reserve</p>
                  <b className="mt-1 block">$112.4K</b>
                </div>
                <div className="ps-4">
                  <p className="text-primary-foreground/65">Credit ready</p>
                  <b className="mt-1 block">$55.4K</b>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-y divide-border bg-card border rounded-xl sm:grid-cols-4 xl:grid-cols-2">
            {[
              ["13.4 mo", "cash runway", ShieldCheck, "text-success"],
              ["25.9%", "net margin", TrendingUp, "text-chart-3"],
              ["$96.4K", "receivable", ReceiptText, "text-chart-2"],
              ["$18.3K", "requires review", Clock3, "text-chart-4"],
            ].map(([value, label, Icon, color]) => (
              <div key={label as string} className="p-5">
                <Icon className={(color as string) + " size-5"} />
                <p className="mt-7 text-xl font-semibold tabular-nums">
                  {value as string}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Liquidity trajectory"
          description="Revenue collected and operating cash over time"
          action={
            <div className="flex rounded-lg border border-border p-0.5">
              {(["6M", "12M"] as const).map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setRange(period)}
                  className={
                    (range === period
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground") +
                    " rounded-md px-2.5 py-1 text-xs font-medium transition"
                  }
                >
                  {period}
                </button>
              ))}
            </div>
          }
        >
          <ApexChart
            type="area"
            height={290}
            options={chart}
            series={[
              { name: "Collections", data: revenue },
              { name: "Operating cash", data: operatingCash },
            ]}
          />
          <div className="mt-3 grid grid-cols-3 border-t border-border pt-4 text-xs">
            <span>
              <b className="block text-sm">$194K</b>
              <small className="text-muted-foreground">
                August collections
              </small>
            </span>
            <span>
              <b className="block text-sm text-success">+$38.4K</b>
              <small className="text-muted-foreground">
                Net cash this month
              </small>
            </span>
            <span>
              <b className="block text-sm">$42.6K</b>
              <small className="text-muted-foreground">Monthly burn</small>
            </span>
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Close checklist"
          description="August control room"
          action={<Badge tone="warning">2 actions</Badge>}
        >
          <div className="space-y-3">
            {[
              [
                "Bank reconciliation",
                "Completed today",
                "success",
                CheckCircle2,
              ],
              ["Invoice approvals", "3 awaiting approval", "warning", Clock3],
              [
                "Payroll funding",
                "Scheduled for Aug 28",
                "primary",
                CalendarDays,
              ],
              ["Tax reserve", "Fund by Aug 30", "destructive", ShieldCheck],
            ].map(([title, detail, tone, Icon]) => (
              <div
                key={title as string}
                className="flex items-center gap-3 rounded-xl border border-border p-3"
              >
                <span
                  className={
                    (tone === "success"
                      ? "bg-success/10 text-success"
                      : tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : tone === "destructive"
                          ? "bg-destructive/10 text-destructive"
                          : "bg-primary/10 text-primary") +
                    " grid size-9 place-items-center rounded-xl"
                  }
                >
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{title as string}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {detail as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <Card title="Cash movement" description="Booked in the current period">
          <div className="space-y-4">
            {cashMovements.map((movement) => (
              <div key={movement.label}>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span>{movement.label}</span>
                  <b
                    className={
                      movement.value > 0 ? "text-success" : "text-destructive"
                    }
                  >
                    {movement.value > 0 ? "+" : ""}
                    {money(movement.value)}
                  </b>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={movement.color + " h-full rounded-full"}
                    style={{ width: `${Math.abs(movement.value) / 1450}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Capital allocation"
          description="Spend against approved plan"
        >
          <ApexChart
            type="donut"
            height={205}
            options={allocationChart}
            series={[284, 68, 116, 172]}
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-4 text-xs">
            {[
              ["Growth programs", "$284K", "bg-chart-1"],
              ["Platform", "$68K", "bg-chart-2"],
              ["Risk reserve", "$116K", "bg-chart-3"],
              ["Available", "$172K", "bg-chart-4"],
            ].map(([label, value, color]) => (
              <div key={label as string} className="flex items-center gap-2">
                <span className={(color as string) + " size-2 rounded-full"} />
                <span className="min-w-0 flex-1 truncate text-muted-foreground">
                  {label as string}
                </span>
                <b>{value as string}</b>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-7"
          title="Account stations"
          description="Balances available for the next payment cycle"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Operating account", "4582", 184600, Landmark, "primary"],
              ["Reserve account", "8174", 128240, ShieldCheck, "success"],
              ["Payroll account", "2951", 68400, CreditCard, "warning"],
              ["Petty cash", "Local", 1400, Banknote, "chart-2"],
            ].map(([name, number, amount, Icon, tone]) => (
              <div
                key={name as string}
                className="rounded-2xl border border-border bg-muted/15 p-4"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={
                      (tone === "success"
                        ? "bg-success/10 text-success"
                        : tone === "warning"
                          ? "bg-warning/10 text-warning"
                          : tone === "chart-2"
                            ? "bg-chart-2/10 text-chart-2"
                            : "bg-primary/10 text-primary") +
                      " grid size-10 place-items-center rounded-xl"
                    }
                  >
                    <Icon className="size-5" />
                  </span>
                  <Badge tone="secondary">•• {number as string}</Badge>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  {name as string}
                </p>
                <p className="mt-1 text-xl font-semibold">
                  {money(amount as number)}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-5"
          title="Decisions ahead"
          description="Prioritized financial moves"
        >
          <div className="space-y-3">
            {[
              [
                "Fund payroll reserve",
                "$68.6K required by Aug 28",
                "High",
                "warning",
                Target,
              ],
              [
                "Chase 9 overdue invoices",
                "$18.3K at risk this month",
                "Priority",
                "destructive",
                ReceiptText,
              ],
              [
                "Release infrastructure PO",
                "$8.4K due after approval",
                "Review",
                "primary",
                CheckCircle2,
              ],
            ].map(([title, detail, badge, tone, Icon]) => (
              <button
                type="button"
                key={title as string}
                className="flex w-full items-center gap-3 rounded-xl border border-border p-3 text-left transition hover:border-primary/35 hover:bg-muted/25"
              >
                <span
                  className={
                    (tone === "warning"
                      ? "bg-warning/10 text-warning"
                      : tone === "destructive"
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary") +
                    " grid size-9 shrink-0 place-items-center rounded-xl"
                  }
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{title as string}</b>
                  <small className="mt-0.5 block text-xs text-muted-foreground">
                    {detail as string}
                  </small>
                </span>
                <Badge
                  tone={
                    tone === "destructive"
                      ? "danger"
                      : tone === "warning"
                        ? "warning"
                        : "primary"
                  }
                >
                  {badge as string}
                </Badge>
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid xl:grid-cols-2 mt-5 gap-4">
        <Card
          title="Cash activity"
          description="Recently reconciled movements"
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllActivity((value) => !value)}
            >
              {showAllActivity ? "Show recent" : "View all activity"}
            </Button>
          }
          bodyClassName="p-0"
        >
          <div className="divide-y divide-border">
            {[
              [
                "Stripe settlement",
                "Operating account",
                "Today, 09:24",
                "+$12,840",
                "success",
                CircleDollarSign,
              ],
              [
                "AWS cloud services",
                "Operating account",
                "Today, 08:10",
                "-$4,280",
                "destructive",
                CreditCard,
              ],
              [
                "Payroll batch",
                "Payroll account",
                "Yesterday, 16:30",
                "-$28,600",
                "destructive",
                Users,
              ],
              ...(showAllActivity
                ? [
                    [
                      "Enterprise renewal",
                      "Operating account",
                      "Aug 21, 14:10",
                      "+$24,000",
                      "success",
                      Landmark,
                    ],
                    [
                      "Software licenses",
                      "Operating account",
                      "Aug 21, 10:42",
                      "-$5,200",
                      "destructive",
                      ReceiptText,
                    ],
                  ]
                : []),
            ].map(([name, account, date, amount, tone, Icon]) => (
              <div
                key={name as string}
                className="flex items-center gap-3 px-5 py-4"
              >
                <span
                  className={
                    (tone === "success"
                      ? "bg-success/10 text-success"
                      : "bg-destructive/10 text-destructive") +
                    " grid size-10 place-items-center rounded-xl"
                  }
                >
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{name as string}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {account as string} · {date as string}
                  </p>
                </div>
                <b
                  className={
                    tone === "success" ? "text-success" : "text-destructive"
                  }
                >
                  {amount as string}
                </b>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="Collections health"
          description="How quickly invoices convert"
          action={<Badge tone="success">Improving</Badge>}
        >
          <div className="rounded-2xl border border-success/20 bg-success/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Collection score
                </p>
                <p className="mt-1 text-3xl font-semibold tabular-nums">
                  86
                  <span className="text-base text-muted-foreground">/100</span>
                </p>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl bg-success/15 text-success">
                <ArrowDownRight className="size-5" />
              </span>
            </div>
            <p className="mt-2 text-xs text-success">
              DSO improved by 2.4 days this month
            </p>
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["Current", "$69.4K", 72, "bg-success"],
              ["Due in 7 days", "$18.7K", 19, "bg-warning"],
              ["Past due", "$8.3K", 9, "bg-destructive"],
            ].map(([label, value, percent, color]) => (
              <div
                key={label as string}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-xs"
              >
                <span
                  className={(color as string) + " size-2.5 rounded-full"}
                />
                <span className="flex-1 font-medium">{label as string}</span>
                <b>{value as string}</b>
                <span className="rounded-md bg-muted px-1.5 py-0.5 text-muted-foreground">
                  {percent as number}%
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-dashed border-border px-3 py-2.5 text-xs font-medium transition hover:border-primary/40 hover:bg-muted/25"
          >
            <span>Open collection queue</span>
            <ArrowUpRight className="size-4 text-primary" />
          </button>
        </Card>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-5"
          title="Working capital radar"
          description="Cash conversion signals for the current close"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              ["DSO", "38.2", "days", "bg-primary", "-2.4 days"],
              ["DPO", "26.6", "days", "bg-chart-2", "+1.2 days"],
              ["Inventory", "14.8", "days", "bg-warning", "On plan"],
              ["Cash cycle", "26.4", "days", "bg-success", "-3.6 days"],
            ].map(([label, value, unit, color, trend]) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-muted/15 p-4"
              >
                <span className={color + " block size-2 rounded-full"} />
                <p className="mt-5 text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">
                  {value}{" "}
                  <small className="text-xs font-medium text-muted-foreground">
                    {unit}
                  </small>
                </p>
                <p className="mt-2 text-[11px] font-medium text-success">
                  {trend}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Approval runway"
          description="Spend moving through financial controls"
        >
          <div className="space-y-4">
            {[
              ["Purchase orders", "7", "$42.8K", 68, "bg-primary"],
              ["Vendor invoices", "4", "$19.4K", 42, "bg-chart-2"],
              ["Expense claims", "12", "$6.7K", 24, "bg-warning"],
            ].map(([label, count, value, progress, color]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-sm">
                  <span>{label}</span>
                  <b>
                    {count}{" "}
                    <small className="font-medium text-muted-foreground">
                      {value}
                    </small>
                  </b>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={color + " h-full rounded-full"}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-3 text-left text-xs transition hover:border-primary/40 hover:bg-muted/25"
          >
            <span className="flex items-center gap-2 font-medium">
              <FileCheck2 className="size-4 text-primary" /> Open approvals
              center
            </span>
            <ArrowUpRight className="size-4 text-muted-foreground" />
          </button>
        </Card>
        <Card
          className="xl:col-span-3"
          title="Entity pulse"
          description="August consolidation"
        >
          <div className="space-y-3">
            {[
              ["US Holdings", "Closed", "success"],
              ["EMEA Ltd", "In review", "warning"],
              ["APAC Pte", "2 tasks", "destructive"],
            ].map(([entity, state, tone]) => (
              <div
                key={entity}
                className="flex items-center gap-3 rounded-xl border border-border p-3"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-muted text-primary">
                  <Building2 className="size-4" />
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium">
                  {entity}
                </span>
                <Badge
                  tone={
                    tone === "success"
                      ? "success"
                      : tone === "warning"
                        ? "warning"
                        : "danger"
                  }
                >
                  {state}
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-primary/5 p-3 text-xs text-muted-foreground">
            Group close is <b className="text-foreground">82% complete</b> with
            two entity tasks remaining.
          </div>
        </Card>
      </div>
    </>
  );
}
