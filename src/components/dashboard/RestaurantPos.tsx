import food0 from "@/assets/images/restaurant/margherita-pizza.jpg";
import food1 from "@/assets/images/restaurant/vegetable-pizza.jpg";
import food2 from "@/assets/images/restaurant/garden-salad.jpg";
import food3 from "@/assets/images/restaurant/greek-salad.jpg";
import food4 from "@/assets/images/restaurant/mushroom-pasta.jpg";
import food5 from "@/assets/images/restaurant/grilled-chicken.jpg";
import food6 from "@/assets/images/restaurant/iced-latte.jpg";
import food7 from "@/assets/images/restaurant/lemonade.jpg";
import { useState } from "react";
import {
  UtensilsCrossed,
  Search,
  Plus,
  Minus,
  Trash2,
  ReceiptText,
  ShoppingBag,
  Coffee,
  Pizza,
  Salad,
  Check,
  ChefHat,
  Clock3,
  MapPin,
  Users,
  Timer,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, PageHeader, Badge } from "./widgets";
const menu = [
  {
    id: "M1",
    image: food0,
    name: "Margherita pizza",
    category: "Pizza",
    price: 14,
    description: "Tomato, mozzarella, fresh basil",
    icon: Pizza,
    color: "--primary",
  },
  {
    id: "M2",
    image: food1,
    name: "Roasted vegetable pizza",
    category: "Pizza",
    price: 17,
    description: "Peppers, mushrooms, olives",
    icon: Pizza,
    color: "--warning",
  },
  {
    id: "M3",
    image: food2,
    name: "Garden salad",
    category: "Salads",
    price: 9,
    description: "Mixed greens, cucumber, lemon dressing",
    icon: Salad,
    color: "--success",
  },
  {
    id: "M4",
    image: food3,
    name: "Greek salad",
    category: "Salads",
    price: 11,
    description: "Feta, olives, tomato, cucumber",
    icon: Salad,
    color: "--info",
  },
  {
    id: "M5",
    image: food4,
    name: "Creamy mushroom pasta",
    category: "Mains",
    price: 16,
    description: "Penne, mushrooms, parmesan",
    icon: UtensilsCrossed,
    color: "--primary",
  },
  {
    id: "M6",
    image: food5,
    name: "Grilled chicken plate",
    category: "Mains",
    price: 19,
    description: "Herb chicken, potatoes, seasonal greens",
    icon: UtensilsCrossed,
    color: "--warning",
  },
  {
    id: "M7",
    image: food6,
    name: "Iced latte",
    category: "Drinks",
    price: 5,
    description: "Espresso, milk, ice",
    icon: Coffee,
    color: "--info",
  },
  {
    id: "M8",
    image: food7,
    name: "Fresh lemonade",
    category: "Drinks",
    price: 4,
    description: "Lemon, sparkling water, mint",
    icon: Coffee,
    color: "--success",
  },
];
const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );
type Order = {
  notes: string;
  id: string;
  table: string;
  items: string;
  total: number;
  status: string;
};
export function RestaurantPosPage() {
  return (
    <AppShell navigationPath="/dashboards/restaurant-pos">
      <RestaurantPos />
    </AppShell>
  );
}
export function RestaurantPos() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [table, setTable] = useState("Table 01");
  const [notes, setNotes] = useState("");
  const [orderType, setOrderType] = useState("Dine in");
  const [discount, setDiscount] = useState("0");
  const [orders, setOrders] = useState<Order[]>([]);
  const [receipt, setReceipt] = useState<Order | null>(null);
  const items = menu.filter((item) => (cart[item.id] ?? 0) > 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (cart[item.id] ?? 0),
    0,
  );
  const discountAmount = Math.round(subtotal * Number(discount)) / 100;
  const tax = Math.round((subtotal - discountAmount) * 0.08 * 100) / 100;
  const total = Math.round((subtotal - discountAmount + tax) * 100) / 100;
  const visible = menu.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      `${item.name} ${item.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  function quantity(id: string, delta: number) {
    setCart((current) => ({
      ...current,
      [id]: Math.max(0, Math.min(99, (current[id] ?? 0) + delta)),
    }));
  }
  function placeOrder() {
    if (!items.length) return;
    const order = {
      id: `ORD-${1001 + orders.length}`,
      table: orderType === "Dine in" ? table : orderType,
      items: items.map((item) => `${cart[item.id]} × ${item.name}`).join(", "),
      total,
      status: "Preparing",
      notes: notes.trim(),
    };
    setOrders((current) => [order, ...current]);
    setReceipt(order);
    setCart({});
    setNotes("");
    toast.success("Sample order sent to kitchen");
  }
  function downloadReceipt() {
    if (!receipt) return;
    const blob = new Blob(
      [
        `Edzen Restaurant — SAMPLE RECEIPT\n${receipt.id}\n${receipt.table}\n${receipt.items}\nTotal (includes sample 8% tax): ${money(receipt.total)}\nNo payment processed.`,
      ],
      { type: "text/plain;charset=utf-8" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${receipt.id}-receipt.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <PageHeader
        title="Restaurant POS"
        subtitle="Take orders, manage tables, and keep your kitchen moving."
        breadcrumb={["Dashboards", "Restaurant POS"]}
      />
      <section className="mb-5 overflow-hidden">
        <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative rounded-2xl overflow-hidden bg-primary px-5 py-6 text-primary-foreground sm:px-7">
            <div className="absolute -right-10 -top-12 size-48 rounded-full border-[28px] border-primary-foreground/10" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary-foreground/75">
                  <ChefHat className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    Service station
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-white">The Green Table</h2>
                <p className="mt-1 text-sm text-primary-foreground/75">
                  Lunch service · 12:00–15:00 · Downtown dining room
                </p>
              </div>
              <Badge
                tone="secondary"
                className="bg-primary-foreground/15 text-primary-foreground"
              >
                Live shift
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-2xl border divide-x divide-border bg-card">
            {[
              ["06", "seated", Users],
              ["04", "open", MapPin],
              ["14m", "ticket time", Timer],
            ].map(([value, label, Icon]) => (
              <div key={label as string} className="p-4 sm:p-5">
                <Icon className="size-4 text-primary" />
                <p className="mt-4 text-xl font-semibold tabular-nums">
                  {value as string}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {label as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mb-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {[
          {
            label: "Orders placed",
            value: orders.length.toString(),
            icon: ReceiptText,
            color: "--info",
            note: "Orders created this session",
          },
          {
            label: "Kitchen queue",
            value: orders
              .filter((o) => o.status === "Preparing")
              .length.toString(),
            icon: UtensilsCrossed,
            color: "--warning",
            note: "Waiting for kitchen preparation",
          },
          {
            label: "Sample order value",
            value: money(orders.reduce((sum, o) => sum + o.total, 0)),
            icon: ShoppingBag,
            color: "--success",
            note: "Combined sample order totals",
          },
        ].map((metric) => (
          <section
            key={metric.label}
            className="group relative bg-card p-5 transition hover:bg-muted/30"
            style={{
              background: `color-mix(in oklch, var(${metric.color}) 6%, var(--card))`,
            }}
          >
            <div className="relative flex items-center gap-4">
              <span
                className="grid size-12 shrink-0 place-items-center rounded-2xl"
                style={{
                  color: `var(${metric.color})`,
                  background: `color-mix(in oklch,var(${metric.color}) 12%,transparent)`,
                }}
              >
                <metric.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">
                  {metric.value}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {metric.note}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-muted/20 p-4">
            <div>
              <h2 className="text-lg font-semibold">Menu composer</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Build a table ticket from the live menu
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute start-3 top-3 size-4 text-muted-foreground" />
              <Input
                aria-label="Search menu"
                className="ps-9"
                placeholder="Search dishes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-wrap gap-2 rounded-xl border border-border bg-card p-2">
            {["All", "Pizza", "Salads", "Mains", "Drinks"].map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "outline"}
                size="sm"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {visible.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/35 hover:shadow-md"
              >
                <div className="group relative min-h-45 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className="absolute start-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-semibold shadow-sm"
                    style={{ color: `var(${item.color})` }}
                  >
                    {item.category}
                  </span>
                  {(cart[item.id] ?? 0) > 0 && (
                    <span className="absolute end-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground shadow-sm">
                      {cart[item.id]} in order
                    </span>
                  )}
                </div>
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <span className="text-base font-semibold">
                      {money(item.price)}
                    </span>
                  </div>
                  <p className="mt-1 min-h-8 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Per serving
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      style={{
                        color: `var(${item.color})`,
                        borderColor: `color-mix(in oklch,var(${item.color}) 25%,var(--border))`,
                        background: `color-mix(in oklch,var(${item.color}) 8%,var(--card))`,
                      }}
                      aria-label={`Add ${item.name}`}
                      onClick={() => quantity(item.id, 1)}
                    >
                      <Plus className="size-4" />
                      Add
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!visible.length && (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No dishes match your search.
            </p>
          )}
        </div>
        <aside className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm xl:sticky xl:top-24">
          <div className="flex items-center justify-between border-b border-border bg-muted/25 p-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ReceiptText className="size-4" />
                </span>
                <h2 className="font-semibold">Ticket builder</h2>
              </div>
            </div>
            
            <p className="mt-1 text-xs text-muted-foreground bg-primary/12 text-primary px-2 py-0.5 rounded-full font-medium">
              {items.reduce((sum, item) => sum + (cart[item.id] ?? 0), 0)}{" "}
              items
            </p>
            
          </div>
          <div className="p-5">
            <div className="mb-4 grid grid-cols-3 gap-1 rounded-2xl border border-border bg-muted/50 p-1.5">
              {["Dine in", "Takeaway", "Delivery"].map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={orderType === type}
                  className={
                    "rounded-md px-2 py-2 text-xs font-medium transition " +
                    (orderType === type
                      ? "bg-card text-primary shadow-sm ring-1 ring-border"
                      : "text-muted-foreground")
                  }
                  onClick={() => setOrderType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <label htmlFor="pos-table" className="text-xs font-medium">
              Table / order type
            </label>
            <select
              id="pos-table"
              disabled={orderType !== "Dine in"}
              className="mb-5 mt-2 h-10 w-full rounded-xl border border-border bg-muted/20 px-3 text-sm"
              value={table}
              onChange={(e) => setTable(e.target.value)}
            >
              {["Table 01", "Table 02", "Table 03", "Table 04", "Takeaway"].map(
                (t) => (
                  <option key={t}>{t}</option>
                ),
              )}
            </select>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-muted/15 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <img
                      src={item.image}
                      alt=""
                      className="size-11 shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {money(item.price)} each
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      aria-label={`Remove ${item.name}`}
                      onClick={() =>
                        setCart((current) => ({ ...current, [item.id]: 0 }))
                      }
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t pt-3">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => quantity(item.id, -1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="text-sm font-semibold tabular-nums">
                        {cart[item.id]}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-7"
                        disabled={cart[item.id] === 99}
                        aria-label={`Increase ${item.name}`}
                        onClick={() => quantity(item.id, 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                    <span className="text-sm font-semibold">
                      {money(item.price * (cart[item.id] ?? 0))}
                    </span>
                  </div>
                </div>
              ))}
              {!items.length && (
                <div className="py-8 text-center">
                  <ShoppingBag className="mx-auto mb-3 size-9 text-muted-foreground/40" />
                  <p className="text-sm font-medium">Your order is empty</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Add a dish from the menu to begin.
                  </p>
                </div>
              )}
            </div>
            <label
              htmlFor="pos-notes"
              className="mt-5 block text-xs font-medium"
            >
              Kitchen notes
            </label>
            <Input
              id="pos-notes"
              className="mt-2"
              maxLength={200}
              placeholder="Special requests…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="mt-4 flex items-center justify-between gap-3">
              <label htmlFor="pos-discount" className="text-xs font-medium">
                Sample discount
              </label>
              <select
                id="pos-discount"
                className="rounded-lg border border-border bg-card px-3 py-2 text-xs"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              >
                {["0", "5", "10", "15"].map((value) => (
                  <option key={value} value={value}>
                    {value}%
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{money(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sample tax (8%)</span>
                <span>{money(tax)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-success">
                  <span>Discount ({discount}%)</span>
                  <span>-{money(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-border pt-3 text-lg font-semibold">
                <span>Total</span>
                <span>{money(total)}</span>
              </div>
            </div>
            <Button
              className="mt-5 w-full"
              disabled={!items.length}
              onClick={placeOrder}
            >
              <ReceiptText className="size-4" />
              Place sample order
            </Button>
          </div>
        </aside>
      </div>
      <section className="mt-6 grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          title="Expedite board"
          description="Tickets move from the line to the pass as the kitchen progresses."
        >
          <div className="grid gap-3 md:grid-cols-3">
            {[
              [
                "On the line",
                "Preparing",
                "border-warning/30 bg-warning/5",
                Clock3,
              ],
              ["At the pass", "Preparing", "border-info/30 bg-info/5", ChefHat],
              [
                "Ready to serve",
                "Ready",
                "border-success/30 bg-success/5",
                Check,
              ],
            ].map(([label, status, color, Icon], columnIndex) => {
              const tickets = orders.filter(
                (order, index) =>
                  order.status === status &&
                  (status === "Ready" || index % 2 === columnIndex % 2),
              );
              return (
                <div
                  key={label as string}
                  className="rounded-2xl border border-border bg-muted/20 p-3"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-semibold">
                      <span
                        className={
                          (color as string) +
                          " grid size-7 place-items-center rounded-lg border"
                        }
                      >
                        <Icon className="size-3.5" />
                      </span>
                      {label as string}
                    </span>
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {tickets.length}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {tickets.map((order) => (
                      <article
                        key={order.id}
                        className="rounded-xl border border-border bg-card p-3 shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <b className="text-xs">{order.id}</b>
                          <span className="text-[10px] text-muted-foreground">
                            {order.table}
                          </span>
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                          {order.items}
                        </p>
                        {order.notes && (
                          <p className="mt-2 rounded-lg bg-warning/10 px-2 py-1 text-[10px] text-warning">
                            Note: {order.notes}
                          </p>
                        )}
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs font-semibold">
                            {money(order.total)}
                          </span>
                          {order.status !== "Ready" && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-7 px-2 text-xs"
                              onClick={() =>
                                setOrders((current) =>
                                  current.map((o) =>
                                    o.id === order.id
                                      ? { ...o, status: "Ready" }
                                      : o,
                                  ),
                                )
                              }
                            >
                              Ready <ArrowUpRight className="size-3" />
                            </Button>
                          )}
                        </div>
                      </article>
                    ))}
                    {!tickets.length && (
                      <div className="rounded-xl border border-dashed border-border p-5 text-center text-xs text-muted-foreground">
                        Clear station
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card
          className="xl:col-span-4"
          title="Sales mix"
          description="Current sample shift"
        >
          <div className="space-y-5 pt-1">
            {[
              ["Food", 62, "bg-primary"],
              ["Drinks", 24, "bg-info"],
              ["Add-ons", 14, "bg-warning"],
            ].map(([label, value, color]) => (
              <div key={label as string}>
                <div className="mb-2 flex justify-between text-xs">
                  <span>{label as string}</span>
                  <b>{value as number}%</b>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={(color as string) + " h-full rounded-full"}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/20 p-3">
              <span className="grid size-9 place-items-center rounded-xl bg-success/10 text-success">
                <CircleDollarSign className="size-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Average ticket</p>
                <p className="font-semibold">$28.40</p>
              </div>
              <span className="ms-auto text-xs font-medium text-success">
                +8.2%
              </span>
            </div>
          </div>
        </Card>
      </section>
      <Dialog
        open={!!receipt}
        onOpenChange={(open) => {
          if (!open) setReceipt(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sample order confirmed</DialogTitle>
            <DialogDescription>
              No payment was processed. Your sample order is in the kitchen
              queue.
            </DialogDescription>
          </DialogHeader>
          {receipt && (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>{receipt.id}</span>
                <span>{receipt.table}</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {receipt.items}
              </p>
              <p className="border-t border-border pt-4 text-xl font-semibold">
                Total {money(receipt.total)}
              </p>
              <Button onClick={downloadReceipt} className="w-full">
                Download sample receipt
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
