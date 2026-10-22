import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Gift,
  PackageCheck,
  PackageOpen,
  Pause,
  Play,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { toast } from "sonner";
import { ApexChart } from "@/components/charts/ApexChart";
import { mergeOptions, token, useChartTheme } from "@/lib/chart-config";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Card, PageHeader } from "./widgets";
import {
  commerceAccents as accents,
  commerceOrders,
  commerceProducts as products,
} from "./commerce-data";

const periods = {
  "This week": { factor: 1, label: "Aug 25–31, 2026" },
  "This month": { factor: 4, label: "Aug 1–31, 2026" },
};
const money = (v: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v);
const field =
  "h-9 max-w-full rounded-md border border-border bg-card px-3 text-xs";
const categories = [
  { name: "Audio", value: 42316 },
  { name: "Lighting", value: 17444 },
  { name: "Accessories", value: 18318 },
  { name: "Wearables", value: 33432 },
];

export function EcommerceDashboard() {
  const { base } = useChartTheme();
  const palette = [1, 2, 3, 4].map((i) => token(`--chart-${i}`));
  const [period, setPeriod] = useState<keyof typeof periods>("This week");
  const [categoryMetric, setCategoryMetric] = useState<"Revenue" | "Units">(
    "Revenue",
  );
  const [orders, setOrders] = useState(commerceOrders);
  const [orderFilter, setOrderFilter] = useState("All orders");
  const [query, setQuery] = useState("");
  const [promoLive, setPromoLive] = useState(true);
  const [copied, setCopied] = useState(false);
  const [recoveryLive, setRecoveryLive] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [collectionName, setCollectionName] = useState("The Workspace Edit");
  const [collectionDraft, setCollectionDraft] = useState("");
  const [express, setExpress] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [restocked, setRestocked] = useState<string[]>([]);
  const factor = periods[period].factor;
  const gross = categories.reduce((s, c) => s + c.value, 0) * factor;
  const discounts = 3520 * factor,
    refunds = 1840 * factor,
    shipping = 1280 * factor;
  const net = gross - discounts - refunds + shipping;
  const salesDates =
    period === "This month"
      ? [
          "Aug 1",
          "Aug 5",
          "Aug 9",
          "Aug 13",
          "Aug 17",
          "Aug 21",
          "Aug 25",
          "Aug 31",
        ]
      : ["Aug 25", "Aug 26", "Aug 27", "Aug 28", "Aug 29", "Aug 30", "Aug 31"];
  const salesWeights =
    period === "This month"
      ? [84, 108, 96, 132, 121, 158, 143, 176]
      : [80, 90, 100, 115, 140, 190, 220];
  const metricTotal =
    categoryMetric === "Revenue"
      ? gross
      : products.reduce((sum, product) => sum + product.units, 0) * factor;
  const weightTotal = salesWeights.reduce((sum, weight) => sum + weight, 0);
  const salesValues = salesWeights.map((weight) =>
    Math.round((weight / weightTotal) * metricTotal),
  );
  const comparisonValues = salesValues.map((value, index) =>
    Math.round(
      value * [0.81, 0.75, 0.81, 0.79, 0.76, 0.79, 0.83, 0.79][index]!,
    ),
  );
  const categoryOptions = mergeOptions(base, {
    chart: { type: "line" },
    colors: [palette[0]!, palette[1]!],
    legend: { show: false },
    stroke: { width: [0, 3], curve: "smooth" },
    fill: { opacity: 1 },
    plotOptions: {
      bar: {
        columnWidth: "48%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    markers: {
      size: [0, 5],
      strokeWidth: 2,
      strokeColors: token("--card"),
      hover: { sizeOffset: 2 },
    },
    dataLabels: { enabled: false },
    xaxis: { categories: salesDates },
    yaxis: {
      min: 0,
      tickAmount: 4,
      labels: {
        formatter: (value: number) =>
          categoryMetric === "Revenue"
            ? `${Math.round(value / 1000)}k`
            : String(Math.round(value)),
      },
    },
    grid: { strokeDashArray: 5 },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (v: number) =>
          categoryMetric === "Revenue" ? money(v) : `${v} units`,
      },
    },
  });
  const productOptions = mergeOptions(base, {
    chart: { type: "scatter" },
    colors: palette,
    markers: { size: 9, strokeWidth: 2, strokeColors: token("--card") },
    xaxis: {
      min: 0,
      max: 360 * factor,
      tickAmount: 3,
      title: { text: "Units sold" },
      labels: { formatter: (v: string) => String(Math.round(Number(v))) },
    },
    yaxis: {
      min: 30,
      max: 80,
      tickAmount: 5,
      title: { text: "Gross margin (%)" },
      labels: { formatter: (v: number) => `${Math.round(v)}%` },
    },
    annotations: {
      yaxis: [
        {
          y: 50,
          borderColor: token("--muted-foreground"),
          strokeDashArray: 4,
          label: {
            text: "50% target",
            style: {
              background: token("--muted"),
              color: token("--foreground"),
            },
          },
        },
      ],
    },
    tooltip: {
      x: { formatter: (v: number) => `${v} units` },
      y: { formatter: (v: number) => `${v}% margin` },
    },
    legend: { show: false },
  });
  const returnOptions = mergeOptions(base, {
    chart: { type: "polarArea" },
    colors: palette,
    labels: ["Changed mind", "Fit / size", "Transit damage", "Not as expected"],
    stroke: { width: 2, colors: [token("--card")] },
    fill: { opacity: 0.85 },
    yaxis: { show: false },
    legend: { show: false },
    plotOptions: {
      polarArea: {
        rings: { strokeColor: token("--border") },
        spokes: { connectorColors: token("--border") },
      },
    },
    tooltip: { y: { formatter: (v: number) => `${v} returns` } },
  });
  const filteredOrders = orders.filter(
    (o) =>
      (orderFilter === "All orders" || o.status === orderFilter) &&
      `${o.id} ${o.customer}`.toLowerCase().includes(query.toLowerCase()),
  );
  const shipOrder = (id: string) => {
    setOrders((current) =>
      current.map((o) =>
        o.id === id
          ? { ...o, status: o.status === "Packed" ? "Shipped" : "Packed" }
          : o,
      ),
    );
    toast.success(`${id} moved to the next fulfillment stage`);
  };
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("AURORA20");
      setCopied(true);
      toast.success("Promotion code copied");
    } catch {
      toast.error("Copy unavailable. Use code AURORA20.");
    }
  };
  const exportOrders = () => {
    const csv = [
      "Order,Customer,Amount,Status,Shipping",
      ...filteredOrders.map(
        (o) => `${o.id},${o.customer},${o.value},${o.status},${o.method}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "commerce-orders.csv";
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Orders exported");
  };

  return (
    <>
      <PageHeader
        title="Commerce"
        subtitle="Your store's trading desk. Merchandise, fulfill and grow."
        breadcrumb={["Edzen", "Dashboards", "eCommerce"]}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSettingsOpen(true)}
            >
              <SlidersHorizontal className="size-4" />
              Store controls
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setCollectionDraft("");
                setCollectionOpen(true);
              }}
            >
              <Gift className="size-4" />
              Create collection
            </Button>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-12">
        <Card className="xl:col-span-8" bodyClassName="p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                STORE SETTLEMENT
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {periods[period].label}
              </p>
            </div>
            <select
              aria-label="Commerce reporting period"
              value={period}
              onChange={(e) =>
                setPeriod(e.target.value as keyof typeof periods)
              }
              className={field}
            >
              <option>This week</option>
              <option>This month</option>
            </select>
          </div>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Net sales</p>
              <p className="mt-1 text-[32px] font-semibold">{money(net)}</p>
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${accents[0].soft} ${accents[0].text}`}
            >
              <ArrowUpRight className="size-3.5" />
              18.6% vs previous period
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 border-y border-border py-4 sm:grid-cols-4">
            {[
              { name: "Gross sales", value: gross, prefix: "", i: 0 },
              { name: "Discounts", value: discounts, prefix: "−", i: 1 },
              { name: "Refunds", value: refunds, prefix: "−", i: 2 },
              { name: "Shipping", value: shipping, prefix: "+", i: 3 },
            ].map((m) => (
              <div key={m.name}>
                <span className="text-xs text-muted-foreground">{m.name}</span>
                <p
                  className={`mt-1 text-lg font-semibold ${accents[m.i]!.text}`}
                >
                  {m.prefix}
                  {money(m.value)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap justify-between gap-4 text-sm">
            <span>
              <b>{790 * factor}</b>{" "}
              <span className="text-muted-foreground">orders</span>
            </span>
            <span>
              <b>{money(net / (790 * factor))}</b>{" "}
              <span className="text-muted-foreground">average order</span>
            </span>
            <span>
              <b>54.2%</b>{" "}
              <span className="text-muted-foreground">gross margin</span>
            </span>
            <span>
              <b>2.6</b>{" "}
              <span className="text-muted-foreground">items / order</span>
            </span>
          </div>
        </Card>
        <Card
          title="Featured collection"
          description="Your storefront merchandising slot"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <div className="flex items-center gap-4">
            <img
              src={products[0]!.image}
              alt="Wireless Headphones Pro"
              className="size-28 shrink-0 rounded-xl bg-muted/50 object-contain p-2"
            />
            <div className="min-w-0">
              <span className={`text-xs font-semibold ${accents[0].text}`}>
                STOREFRONT FEATURE
              </span>
              <h2 className="mt-2 text-lg font-semibold">{collectionName}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Curated essentials for a better workday.
              </p>
            </div>
          </div>
          <div className="my-4 flex justify-between border-y border-border py-3 text-xs">
            <span className="text-muted-foreground">Collection conversion</span>
            <b className={accents[0].text}>
              6.8% <span className="font-normal">(+1.4 pts)</span>
            </b>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setCollectionDraft(collectionName);
                setCollectionOpen(true);
              }}
            >
              Edit collection
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <Link to="/ecommerce/products">
                Browse products
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Category sales landscape"
          description="Sales across all categories compared with the previous period"
          className="xl:col-span-7"
          bodyClassName="p-3"
          action={
            <select
              aria-label="Category chart metric"
              value={categoryMetric}
              onChange={(e) =>
                setCategoryMetric(e.target.value as typeof categoryMetric)
              }
              className={field}
            >
              <option>Revenue</option>
              <option>Units</option>
            </select>
          }
        >
          <ApexChart
            type="line"
            height={295}
            options={categoryOptions}
            series={[
              { name: "Current period", type: "column", data: salesValues },
              { name: "Previous period", type: "line", data: comparisonValues },
            ]}
          />
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border px-2 pt-3 text-xs text-muted-foreground">
            {["Current period", "Previous period"].map((label, i) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <span className={`size-2 rounded-sm ${accents[i]!.bg}`} />
                {label}
              </span>
            ))}
          </div>
        </Card>
        <Card
          title="Product opportunity map"
          description="Volume against margin · prioritize the upper-right quadrant"
          className="xl:col-span-5"
          bodyClassName="p-3"
        >
          <ApexChart
            type="scatter"
            height={295}
            options={productOptions}
            series={products.map((p) => ({
              name: p.category,
              data: [{ x: p.units * factor, y: p.margin }],
            }))}
          />
          <p className="border-t border-border px-2 pt-3 text-xs text-muted-foreground">
            Audio combines the highest sales volume with a margin 8 points above
            target.
          </p>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Merchandise shelf"
        description="Your four leading products · sales and stock at a glance"
        bodyClassName="p-0"
        action={
          <Button variant="ghost" size="sm" asChild>
            <Link to="/ecommerce/products">
              Product catalog
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        }
      >
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.sku}
              className="min-w-0 p-5 sm:border-e sm:border-border last:border-e-0"
            >
              <div className="relative rounded-xl bg-muted/40 p-3">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full rounded"
                />
                <span
                  className={`absolute start-6 top-6 rounded-md bg-card px-2 py-1 text-[11px] font-semibold ${accents[p.color]!.text}`}
                >
                  {p.margin}% margin
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[11px] text-muted-foreground">{p.sku}</p>
                <h3 className="mt-1 text-sm font-semibold">{p.name}</h3>
                <p className="mt-2 text-lg font-semibold">
                  {money(p.price * p.units * factor)}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.units * factor} sold · {money(p.price)} each
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3 text-xs">
                <span className={accents[p.stock < 20 ? 1 : 0].text}>
                  {restocked.includes(p.sku)
                    ? "Reorder requested"
                    : `${p.stock} in stock`}
                </span>
                {p.stock < 20 ? (
                  <button
                    disabled={restocked.includes(p.sku)}
                    onClick={() => {
                      setRestocked((v) => [...v, p.sku]);
                      toast.success(`Reorder requested for ${p.name}`);
                    }}
                    className="font-semibold text-foreground disabled:text-muted-foreground"
                  >
                    {restocked.includes(p.sku) ? "Requested" : "Reorder"}
                  </button>
                ) : (
                  <span className="text-muted-foreground">Healthy stock</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </Card>
      <Card
        className="mt-4"
        title="Dispatch schedule"
        description="Warehouse handoffs for today · local warehouse time"
        bodyClassName="p-5"
        action={
          <span
            className={`flex items-center gap-1.5 text-xs font-medium ${accents[3].text}`}
          >
            <Truck className="size-4" />
            96% on-time dispatch
          </span>
        }
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
          <div className="min-w-0 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="mb-3 grid grid-cols-[110px_1fr] text-[11px] text-muted-foreground">
                <span>DISPATCH LANE</span>
                <div className="flex justify-between">
                  <span>09:00</span>
                  <span>12:00</span>
                  <span>15:00</span>
                  <span>18:00</span>
                </div>
              </div>
              {[
                {
                  name: "Pick & pack",
                  start: 0,
                  width: 44,
                  label: `${orders.filter((o) => o.status === "New" || o.status === "Paid").length} orders in queue`,
                  i: 0,
                },
                {
                  name: "Express carrier",
                  start: 40,
                  width: 16,
                  label: "13:30 pickup",
                  i: 1,
                },
                {
                  name: "Standard carrier",
                  start: 67,
                  width: 22,
                  label: "16:00 pickup",
                  i: 3,
                },
              ].map((l) => (
                <div
                  key={l.name}
                  className="grid grid-cols-[110px_1fr] items-center border-t border-border py-4"
                >
                  <span className="text-xs font-medium">{l.name}</span>
                  <div className="relative h-9 rounded-md bg-muted/40">
                    <div
                      className={`absolute top-0 h-full rounded-md ${accents[l.i]!.bg}`}
                      style={{
                        insetInlineStart: `${l.start}%`,
                        width: `${l.width}%`,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-0 flex h-full items-center justify-center whitespace-nowrap text-[11px] font-semibold text-foreground"
                      style={{
                        insetInlineStart: `${l.start}%`,
                        width: `${l.width}%`,
                      }}
                    >
                      <span className="rounded bg-card/90 px-1.5 py-0.5">
                        {l.label}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <PackageCheck className={`size-5 ${accents[0].text}`} />
            <p className="mt-3 text-xl font-semibold">
              {orders.filter((o) => o.status === "Packed").length} packed
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Ready for carrier collection. Pack paid orders from the queue
              below.
            </p>
            <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
              {orders.filter((o) => o.status === "Shipped").length} shipped in
              this session
            </div>
          </div>
        </div>
      </Card>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Order workbench"
          description="Move orders from payment to packing and carrier handoff"
          className="xl:col-span-8"
          bodyClassName="p-0"
          action={
            <div className="flex flex-wrap gap-2">
              <label className="relative">
                <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
                <input
                  aria-label="Search commerce orders"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Order or customer"
                  className={`${field} w-40 ps-8`}
                />
              </label>
              <select
                aria-label="Order status filter"
                value={orderFilter}
                onChange={(e) => setOrderFilter(e.target.value)}
                className={field}
              >
                {["All orders", "New", "Paid", "Packed", "Shipped"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <Button
                size="sm"
                variant="outline"
                onClick={exportOrders}
                aria-label="Export orders"
              >
                <Download className="size-3.5" />
              </Button>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  {[
                    "Order / customer",
                    "Amount",
                    "Delivery",
                    "Status",
                    "Next action",
                  ].map((h) => (
                    <th key={h} className="px-5 py-3 text-start font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-b border-border last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-5 py-4">
                      <p className="font-medium">{o.customer}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {o.id} · {o.items} items
                      </p>
                    </td>
                    <td className="px-5 py-4 font-semibold">
                      {money(o.value)}
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground">
                      {o.method}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-md px-2 py-1 text-xs font-medium ${accents[o.status === "Shipped" ? 0 : o.status === "Packed" ? 3 : o.status === "New" ? 1 : 2].soft} ${accents[o.status === "Shipped" ? 0 : o.status === "Packed" ? 3 : o.status === "New" ? 1 : 2].text}`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      {o.status === "Shipped" ? (
                        <span
                          className={`flex items-center gap-1 text-xs ${accents[0].text}`}
                        >
                          <Check className="size-3.5" />
                          Complete
                        </span>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => shipOrder(o.id)}
                          aria-label={`${o.status === "Packed" ? "Ship" : "Pack"} ${o.id}`}
                        >
                          {o.status === "Packed" ? "Ship order" : "Pack order"}
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredOrders.length === 0 && (
              <p className="p-6 text-center text-sm text-muted-foreground">
                No orders match your filters.
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-between gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span>{filteredOrders.length} orders shown</span>
            <span>
              Value {money(filteredOrders.reduce((a, o) => a + o.value, 0))}
            </span>
          </div>
        </Card>
        <Card
          title="Promotion desk"
          description="Control the current audio offer"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <div
            className={`rounded-xl border border-dashed border-border p-4 ${accents[1].soft}`}
          >
            <div className="flex items-center justify-between gap-3">
              <Gift className={`size-5 ${accents[1].text}`} />
              <span className={`text-xs font-semibold ${accents[1].text}`}>
                {promoLive ? "ACTIVE" : "PAUSED"}
              </span>
            </div>
            <p className="mt-3 text-xl font-semibold tracking-wide">AURORA20</p>
            <p className="mt-1 text-xs text-muted-foreground">
              20% off selected audio · ends Aug 31
            </p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" onClick={copyCode}>
                <Copy className="size-3.5" />
                {copied ? "Copied" : "Copy code"}
              </Button>
              <Button
                size="sm"
                variant="outline"
                aria-pressed={!promoLive}
                onClick={() => setPromoLive((v) => !v)}
              >
                {promoLive ? (
                  <Pause className="size-3.5" />
                ) : (
                  <Play className="size-3.5" />
                )}
                {promoLive ? "Pause" : "Resume"}
              </Button>
            </div>
          </div>
          <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div>
              <dt className="text-[11px] text-muted-foreground">Redemptions</dt>
              <dd className="mt-1 text-lg font-semibold">184</dd>
            </div>
            <div>
              <dt className="text-[11px] text-muted-foreground">
                Attributed sales
              </dt>
              <dd className="mt-1 text-lg font-semibold">$8.4K</dd>
            </div>
            <div>
              <dt className="text-[11px] text-muted-foreground">
                Return on spend
              </dt>
              <dd className="mt-1 text-lg font-semibold">3.9x</dd>
            </div>
          </dl>
          <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
            {promoLive
              ? "Eligible audio checkouts can apply this promotion."
              : "New redemptions are paused. Previous results are retained."}
          </p>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Return reasons"
          description="Share of 50 return requests this week"
          className="xl:col-span-4"
          bodyClassName="p-5"
          action={<RotateCcw className="size-4 text-muted-foreground" />}
        >
          <ApexChart
            type="polarArea"
            height={230}
            options={returnOptions}
            series={[19, 15, 9, 7]}
          />
          <ul className="space-y-2">
            {[
              { label: "Changed mind", count: 19 },
              { label: "Fit / size", count: 15 },
              { label: "Transit damage", count: 9 },
              { label: "Not as expected", count: 7 },
            ].map((r, i) => (
              <li key={r.label} className="flex items-center gap-2 text-xs">
                <span className={`size-2 rounded-full ${accents[i]!.bg}`} />
                <span className="flex-1 text-muted-foreground">{r.label}</span>
                <b>{r.count * 2}%</b>
                <span className="w-12 text-end text-muted-foreground">
                  {r.count} cases
                </span>
              </li>
            ))}
          </ul>
        </Card>
        <Card
          title="Recovery sequence"
          description="Abandoned-cart follow-ups and recovered revenue"
          className="xl:col-span-8"
          bodyClassName="p-5"
          action={
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {recoveryLive ? "Enabled" : "Paused"}
              </span>
              <Switch
                aria-label="Enable cart recovery"
                checked={recoveryLive}
                onCheckedChange={setRecoveryLive}
              />
            </div>
          }
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[26px] font-semibold">$12,480</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Recovered from 96 abandoned checkouts
              </p>
            </div>
            <span className={`text-xs font-semibold ${accents[2].text}`}>
              18.4% recovery rate
            </span>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              {
                when: "30 minutes",
                title: "A helpful reminder",
                eligible: 684,
                result: "42% open rate",
                icon: PackageOpen,
                i: 0,
              },
              {
                when: "4 hours",
                title: "Your basket is waiting",
                eligible: 402,
                result: "18% click rate",
                icon: Gift,
                i: 1,
              },
              {
                when: "24 hours",
                title: "Last chance to checkout",
                eligible: 186,
                result: "9% conversion",
                icon: Truck,
                i: 3,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.when}
                  className="rounded-xl border border-border p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Icon className={`size-5 ${accents[s.i]!.text}`} />
                    <span className="text-[11px] text-muted-foreground">
                      After {s.when}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold">{s.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {s.eligible} eligible shoppers
                  </p>
                  <p
                    className={`mt-4 border-t border-border pt-3 text-xs font-semibold ${accents[s.i]!.text}`}
                  >
                    {s.result}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {recoveryLive
              ? "The sequence is accepting new abandoned checkouts."
              : "The sequence is paused. Historical recovery performance remains visible."}
          </p>
        </Card>
      </div>
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Store controls</DialogTitle>
            <DialogDescription>
              Manage the demo store's fulfillment preferences for this session.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5 py-4">
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="commerce-express" className="text-sm">
                Express shipping available
              </label>
              <Switch
                id="commerce-express"
                checked={express}
                onCheckedChange={setExpress}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="commerce-notifications" className="text-sm">
                Order notifications
              </label>
              <Switch
                id="commerce-notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {express
                ? "Express checkout is available for eligible new orders."
                : "New checkouts use standard shipping. Existing orders keep their delivery method."}{" "}
              {notifications
                ? "Order notifications are enabled."
                : "Order notifications are paused."}
            </p>
          </div>
          <Button
            onClick={() => {
              setSettingsOpen(false);
              toast.success("Store preferences saved for this session");
            }}
          >
            Save preferences
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={collectionOpen} onOpenChange={setCollectionOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {collectionDraft === collectionName
                ? "Edit featured collection"
                : "Create collection"}
            </DialogTitle>
            <DialogDescription>
              Name the collection to feature on your storefront preview.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!collectionDraft.trim()) return;
              setCollectionName(collectionDraft.trim());
              setCollectionOpen(false);
              toast.success("Featured collection updated");
            }}
            className="space-y-4"
          >
            <label
              className="block text-sm font-medium"
              htmlFor="commerce-collection"
            >
              Collection name
            </label>
            <input
              id="commerce-collection"
              required
              maxLength={60}
              value={collectionDraft}
              onChange={(e) => setCollectionDraft(e.target.value)}
              className={`${field} w-full`}
              placeholder="e.g. The Weekend Edit"
            />
            <Button type="submit">Save collection</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
