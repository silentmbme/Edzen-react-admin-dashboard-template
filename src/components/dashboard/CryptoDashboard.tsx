import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowDownUp,
  ArrowUpRight,
  Bitcoin,
  Check,
  ChevronRight,
  CircleDollarSign,
  Download,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CRYPTO_ASSETS,
  CRYPTO_CASH,
  CRYPTO_TRANSACTIONS,
  cryptoCompact,
  cryptoMoney,
  getCryptoHistory,
  type CryptoAsset,
  type CryptoRange,
} from "@/data/crypto-dashboard-data";
import { Card, PageHeader } from "./widgets";
import { CryptoPriceChart } from "./CryptoPriceChart";

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
const field =
  "h-9 max-w-full cursor-pointer rounded-md border border-border bg-card px-3 text-xs";
const assetIndex = (symbol: string) =>
  Math.max(
    0,
    CRYPTO_ASSETS.findIndex((a) => a.symbol === symbol),
  );
function Coin({ asset }: { asset: CryptoAsset }) {
  const i = assetIndex(asset.symbol) % 4;
  return (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${accents[i]!.soft} ${accents[i]!.text}`}
      aria-hidden="true"
    >
      {asset.symbol === "BTC" ? (
        <Bitcoin className="size-5" />
      ) : (
        asset.symbol.slice(0, 3)
      )}
    </span>
  );
}
function Change({ value }: { value: number }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-medium ${accents[value >= 0 ? 0 : 1]!.text}`}
    >
      {value >= 0 ? (
        <ArrowUpRight className="size-3.5" />
      ) : (
        <ArrowDownLeft className="size-3.5" />
      )}
      {value >= 0 ? "+" : ""}
      {value.toFixed(2)}%
    </span>
  );
}

export function CryptoDashboard() {
  const [symbol, setSymbol] = useState("BTC");
  const [range, setRange] = useState<CryptoRange>("7d");
  const [query, setQuery] = useState("");
  const [watchlist, setWatchlist] = useState<string[]>(["BTC", "ETH", "SOL"]);
  const [onlyWatchlist, setOnlyWatchlist] = useState(false);
  const [transactionType, setTransactionType] = useState("all");
  const [exchangeSymbol, setExchangeSymbol] = useState("BTC");
  const [amount, setAmount] = useState("1000");
  const [reverse, setReverse] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [detail, setDetail] = useState<string | null>(null);
  const asset = CRYPTO_ASSETS.find((a) => a.symbol === symbol)!;
  const exchangeAsset = CRYPTO_ASSETS.find((a) => a.symbol === exchangeSymbol)!;
  const detailAsset = CRYPTO_ASSETS.find((a) => a.symbol === detail);
  const history = getCryptoHistory(asset, range);
  const holdings = CRYPTO_ASSETS.reduce(
    (sum, a) => sum + a.holding * a.price,
    0,
  );
  const invested = CRYPTO_ASSETS.reduce(
    (sum, a) => sum + a.holding * a.entry,
    0,
  );
  const profit = holdings - invested;
  const dayProfit = CRYPTO_ASSETS.reduce(
    (sum, a) => sum + a.holding * (a.price - a.price / (1 + a.change / 100)),
    0,
  );
  const visibleAssets = CRYPTO_ASSETS.filter(
    (a) =>
      (!onlyWatchlist || watchlist.includes(a.symbol)) &&
      `${a.symbol} ${a.name}`.toLowerCase().includes(query.toLowerCase()),
  );
  const transactions = CRYPTO_TRANSACTIONS.filter(
    (t) => transactionType === "all" || t.type === transactionType,
  );
  const entered = Number(amount),
    validAmount =
      amount.trim() !== "" && Number.isFinite(entered) && entered > 0;
  const converted = validAmount
    ? reverse
      ? entered * exchangeAsset.price
      : entered / exchangeAsset.price
    : 0;
  const output = reverse
    ? cryptoMoney(converted)
    : `${converted.toFixed(6)} ${exchangeSymbol}`;
  const toggleWatchlist = (s: string) =>
    setWatchlist((v) => (v.includes(s) ? v.filter((a) => a !== s) : [...v, s]));
  const exportPortfolio = () => {
    const csv = [
      "Asset,Quantity,Price USD,Value USD,Entry USD,Unrealized PnL USD",
      ...CRYPTO_ASSETS.map(
        (a) =>
          `${a.symbol},${a.holding},${a.price},${(a.holding * a.price).toFixed(2)},${a.entry},${((a.price - a.entry) * a.holding).toFixed(2)}`,
      ),
    ].join("\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "crypto-portfolio.csv";
    link.click();
    URL.revokeObjectURL(url);
  };
  const orderRows = Array.from({ length: 6 }, (_, i) => ({
    ask: asset.price * (1.0002 + (5 - i) * 0.0003),
    bid: asset.price * (0.9998 - i * 0.0003),
    quantity: 0.18 + ((i * 7) % 11) * 0.09,
    depth: 22 + ((i * 17) % 70),
  }));
  return (
    <>
      <PageHeader
        title="Crypto Dashboard"
        subtitle="Your portfolio, market movements, and digital assets in one place."
        breadcrumb={["Dashboards", "Crypto"]}
        actions={
          <Button variant="outline" size="sm" onClick={exportPortfolio}>
            <Download className="size-4" />
            Export portfolio
          </Button>
        }
      />
      <div className="grid gap-4 xl:grid-cols-12">
        <Card
          className="xl:col-span-8"
          bodyClassName="flex h-full flex-col p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${accents[0]!.soft} ${accents[0]!.text}`}
              >
                <Wallet className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-[15px] font-semibold">Portfolio balance</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Digital assets &amp; available cash
                </p>
              </div>
            </div>
            <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground">
              Sample account · USD
            </span>
          </div>
          <div className="my-5">
            <div className="grid gap-4 xl:grid-cols-12">
              <div className="xl:col-span-7">
                <p className="text-xs text-muted-foreground">
                  Total account value
                </p>
                <p className="mt-1 text-[32px] font-semibold leading-tight tabular-nums">
                  {cryptoMoney(holdings + CRYPTO_CASH)}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-2 py-1 font-semibold ${accents[dayProfit >= 0 ? 0 : 1]!.soft} ${accents[dayProfit >= 0 ? 0 : 1]!.text}`}
                  >
                    <ArrowUpRight className="size-3.5" />
                    {dayProfit >= 0 ? "+" : ""}
                    {cryptoMoney(dayProfit)}
                  </span>
                  <span className="text-muted-foreground">
                    today's asset movement
                  </span>
                </div>
              </div>
              <div className="xl:col-span-5">
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground">
                      Unrealized return
                    </p>
                    <p
                      className={`mt-1 text-lg font-semibold ${accents[profit >= 0 ? 0 : 1]!.text}`}
                    >
                      {profit >= 0 ? "+" : ""}
                      {((profit / invested) * 100).toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground">
                      Cash reserve
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      {((CRYPTO_CASH / (holdings + CRYPTO_CASH)) * 100).toFixed(
                        1,
                      )}
                      <span className="text-xs font-normal text-muted-foreground">
                        % available
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto border-t border-border pt-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-medium">Allocation breakdown</span>
              <span className="text-muted-foreground">
                Select an asset to inspect
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CRYPTO_ASSETS.map((a, i) => (
                <button
                  key={a.symbol}
                  onClick={() => {
                    setSymbol(a.symbol);
                    setDetail(a.symbol);
                  }}
                  className="cursor-pointer flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-xs transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring"
                  aria-label={`Inspect ${a.symbol} allocation`}
                >
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <span
                      className={`size-1.5 rounded-full ${accents[i % 4]!.bg}`}
                    />
                    {a.symbol}
                  </span>
                  <span className="tabular-nums text-muted-foreground">
                    {(
                      ((a.holding * a.price) / (holdings + CRYPTO_CASH)) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </button>
              ))}
              <div className="flex items-center justify-between gap-2 rounded-lg bg-muted/40 px-3 py-2 text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                  USD
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {((CRYPTO_CASH / (holdings + CRYPTO_CASH)) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </Card>
        <Card
          title="Capital position"
          description="Your invested and available balances"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <dl className="space-y-4">
            {[
              {
                label: "Digital assets",
                value: cryptoMoney(holdings),
                icon: Layers3,
                i: 2,
              },
              {
                label: "Available cash",
                value: cryptoMoney(CRYPTO_CASH),
                icon: CircleDollarSign,
                i: 3,
              },
              {
                label: "Unrealized P&L",
                value: `+${cryptoMoney(profit)}`,
                icon: ArrowUpRight,
                i: 0,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <span
                    className={`rounded-lg p-2 ${accents[s.i]!.soft} ${accents[s.i]!.text}`}
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="mt-1 text-lg font-semibold">{s.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Market terminal"
          description="Illustrative price action · sample prices ending Oct 9, 2026"
          className="xl:col-span-8"
          bodyClassName="p-5"
          action={
            <div className="flex flex-wrap gap-2">
              <select
                aria-label="Market asset"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className={field}
              >
                {CRYPTO_ASSETS.map((a) => (
                  <option key={a.symbol} value={a.symbol}>
                    {a.symbol}
                  </option>
                ))}
              </select>
              <div
                className="flex rounded-md border border-border p-1"
                role="group"
                aria-label="Market range"
              >
                {(["24h", "7d", "30d"] as const).map((r) => (
                  <button
                    key={r}
                    aria-pressed={range === r}
                    onClick={() => setRange(r)}
                    className={`cursor-pointer rounded px-2.5 py-1 text-xs ${range === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          }
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Coin asset={asset} />
              <div>
                <p className="text-sm font-semibold">
                  {asset.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    / USD
                  </span>
                </p>
                <p className="mt-1 text-[26px] font-semibold">
                  {cryptoMoney(asset.price)}
                </p>
              </div>
            </div>
            <div className="text-end">
              <Change value={history.change} />
              <p className="mt-1 text-[11px] text-muted-foreground">
                over {range}
              </p>
            </div>
          </div>
          <CryptoPriceChart asset={asset} range={range} />
          <div className="mt-3 grid grid-cols-3 gap-3 border-t border-border pt-3 text-xs">
            <div>
              <p className="text-muted-foreground">Period high close</p>
              <p className="mt-1 font-semibold">
                {cryptoMoney(Math.max(...history.prices.map((p) => p.y)))}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Period low close</p>
              <p className="mt-1 font-semibold">
                {cryptoMoney(Math.min(...history.prices.map((p) => p.y)))}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">24h volume</p>
              <p className="mt-1 font-semibold">
                ${cryptoCompact(asset.volume * 1000000)}
              </p>
            </div>
          </div>
        </Card>
        <Card
          title="Order book"
          description={`${symbol} / USD · simulated depth snapshot`}
          className="xl:col-span-4"
          bodyClassName="p-0"
        >
          <div className="grid grid-cols-3 gap-2 px-5 py-3 text-[11px] text-muted-foreground">
            <span>PRICE (USD)</span>
            <span className="text-end">SIZE ({symbol})</span>
            <span className="text-end">TOTAL (USD)</span>
          </div>
          <div className="space-y-1 px-3">
            {orderRows.map((row, i) => (
              <div
                key={i}
                className="relative grid grid-cols-3 gap-2 rounded px-2 py-1.5 text-[11px] tabular-nums"
              >
                <span
                  className={`absolute inset-y-0 end-0 rounded ${accents[1]!.soft}`}
                  style={{ width: `${row.depth}%` }}
                  aria-hidden="true"
                />
                <span className={`relative ${accents[1]!.text}`}>
                  {row.ask.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="relative text-end">
                  {row.quantity.toFixed(3)}
                </span>
                <span className="relative text-end text-muted-foreground">
                  {cryptoCompact(row.quantity * row.ask)}
                </span>
              </div>
            ))}
          </div>
          <div className="my-3 flex flex-wrap items-center justify-between gap-2 border-y border-border px-5 py-3">
            <span className="text-lg font-semibold">
              {cryptoMoney(asset.price)}
            </span>
            <span className="text-[11px] text-muted-foreground">
              Spread 0.04%
            </span>
          </div>
          <div className="space-y-1 px-3">
            {orderRows.map((row, i) => (
              <div
                key={i}
                className="relative grid grid-cols-3 gap-2 rounded px-2 py-1.5 text-[11px] tabular-nums"
              >
                <span
                  className={`absolute inset-y-0 end-0 rounded ${accents[0]!.soft}`}
                  style={{ width: `${85 - row.depth / 2}%` }}
                  aria-hidden="true"
                />
                <span className={`relative ${accents[0]!.text}`}>
                  {row.bid.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="relative text-end">
                  {(row.quantity * 1.12).toFixed(3)}
                </span>
                <span className="relative text-end text-muted-foreground">
                  {cryptoCompact(row.quantity * 1.12 * row.bid)}
                </span>
              </div>
            ))}
          </div>
          <p className="px-5 py-3 text-[11px] text-muted-foreground">
            Indicative levels only · no live orders
          </p>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Quick exchange"
          description="Conversion calculator · sample rates"
          className="xl:col-span-4"
          bodyClassName="p-5"
        >
          <label
            htmlFor="crypto-amount"
            className="text-xs text-muted-foreground"
          >
            You pay ({reverse ? exchangeSymbol : "USD"})
          </label>
          <input
            id="crypto-amount"
            type="number"
            min="0"
            step="any"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-2 h-12 w-full rounded-lg border border-border bg-card px-3 text-xl font-semibold"
          />
          <div className="my-3 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <button
              aria-label="Reverse conversion"
              onClick={() => {
                setReverse((v) => !v);
                setAmount("1");
              }}
              className="cursor-pointer rounded-full border border-border p-2 hover:bg-muted"
            >
              <ArrowDownUp className="size-4" />
            </button>
            <div className="h-px flex-1 bg-border" />
          </div>
          <label
            htmlFor="crypto-convert-asset"
            className="text-xs text-muted-foreground"
          >
            Crypto asset
          </label>
          <select
            id="crypto-convert-asset"
            aria-label="Exchange asset"
            value={exchangeSymbol}
            onChange={(e) => setExchangeSymbol(e.target.value)}
            className={`${field} mt-2 w-full`}
          >
            {CRYPTO_ASSETS.map((a) => (
              <option key={a.symbol} value={a.symbol}>
                {a.name} ({a.symbol})
              </option>
            ))}
          </select>
          <div className="mt-4 rounded-xl bg-muted/40 p-4">
            <p className="text-xs text-muted-foreground">
              Estimated receive ({reverse ? "USD" : exchangeSymbol})
            </p>
            <p className="mt-2 break-words text-xl font-semibold">{output}</p>
          </div>
          <p className="my-3 text-[11px] text-muted-foreground">
            1 {exchangeSymbol} = {cryptoMoney(exchangeAsset.price)} · no preview
            fee
          </p>
          <Button
            className="w-full"
            disabled={!validAmount}
            onClick={() => setPreviewOpen(true)}
          >
            Preview exchange
            <ArrowUpRight className="size-4" />
          </Button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Demo only. No funds are moved.
          </p>
        </Card>
        <Card
          title="Holdings ledger"
          description="Your positions, entry prices and unrealized performance"
          className="xl:col-span-8"
          bodyClassName="p-0"
          action={
            <div className="flex flex-wrap gap-2">
              <label className="relative">
                <Search className="absolute start-2.5 top-2.5 size-3.5 text-muted-foreground" />
                <input
                  aria-label="Search crypto assets"
                  placeholder="Find an asset"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className={`${field} w-36 ps-8`}
                />
              </label>
              <Button
                variant={onlyWatchlist ? "default" : "outline"}
                size="sm"
                aria-pressed={onlyWatchlist}
                onClick={() => setOnlyWatchlist((v) => !v)}
              >
                <Star className="size-3.5" />
                Watchlist
              </Button>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted-foreground">
                  {[
                    "Asset",
                    "Price / 24h",
                    "Position",
                    "Unrealized P&L",
                    "",
                  ].map((h) => (
                    <th
                      key={h || "watch"}
                      className="px-5 py-3 text-start font-medium"
                    >
                      {h || <span className="sr-only">Watchlist</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleAssets.map((a) => (
                  <tr
                    key={a.symbol}
                    className="border-b border-border last:border-0 hover:bg-muted/40"
                  >
                    <td className="px-5 py-4">
                      <button
                        onClick={() => {
                          setSymbol(a.symbol);
                          setDetail(a.symbol);
                        }}
                        className="cursor-pointer flex items-center gap-2 text-start"
                      >
                        <Coin asset={a} />
                        <span>
                          <span className="block text-sm font-medium">
                            {a.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {a.symbol}
                          </span>
                        </span>
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-medium">
                        {cryptoMoney(a.price)}
                      </p>
                      <div className="mt-1">
                        <Change value={a.change} />
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-xs font-semibold">
                        {cryptoMoney(a.price * a.holding)}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {a.holding} {a.symbol}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <p
                        className={`text-xs font-semibold ${accents[a.price >= a.entry ? 0 : 1]!.text}`}
                      >
                        {a.price >= a.entry ? "+" : ""}
                        {cryptoMoney((a.price - a.entry) * a.holding)}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Entry {cryptoMoney(a.entry)}
                      </p>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        aria-label={`${watchlist.includes(a.symbol) ? "Remove" : "Add"} ${a.symbol} ${watchlist.includes(a.symbol) ? "from" : "to"} watchlist`}
                        aria-pressed={watchlist.includes(a.symbol)}
                        onClick={() => toggleWatchlist(a.symbol)}
                        className="cursor-pointer rounded-md p-2 hover:bg-muted"
                      >
                        <Star
                          className={`size-4 ${watchlist.includes(a.symbol) ? `fill-current ${accents[3]!.text}` : "text-muted-foreground"}`}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {visibleAssets.length === 0 && (
              <p className="p-6 text-center text-sm text-muted-foreground">
                No assets match your filters.
              </p>
            )}
          </div>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-12">
        <Card
          title="Position return ranges"
          description="Entry-to-current price movement · unrealized return"
          className="xl:col-span-7"
          bodyClassName="p-5"
        >
          <div className="mb-3 grid grid-cols-[60px_1fr_70px] gap-3 text-[11px] text-muted-foreground">
            <span>ASSET</span>
            <div className="relative flex justify-between">
              <span>−10%</span>
              <span
                className="absolute -translate-x-1/2 rtl:translate-x-1/2"
                style={{ insetInlineStart: "25%" }}
              >
                Entry
              </span>
              <span>+30%</span>
            </div>
            <span className="text-end">RETURN</span>
          </div>
          {CRYPTO_ASSETS.map((a, i) => {
            const change = (a.price / a.entry - 1) * 100;
            const start = 25,
              end = Math.min(100, Math.max(0, ((change + 10) / 40) * 100));
            return (
              <div
                key={a.symbol}
                className="grid grid-cols-[60px_1fr_70px] items-center gap-3 border-t border-border py-4"
              >
                <span className="text-xs font-medium">{a.symbol}</span>
                <div className="relative h-7 rounded bg-muted/30">
                  <span
                    className="absolute inset-y-0 w-px bg-muted-foreground/40"
                    style={{ insetInlineStart: "25%" }}
                  />
                  <span
                    className={`absolute top-2 h-3 rounded ${accents[i % 4]!.bg}`}
                    style={{
                      insetInlineStart: `${Math.min(start, end)}%`,
                      width: `${Math.max(0.7, Math.abs(end - start))}%`,
                    }}
                  />
                  <span
                    className={`absolute top-1.5 size-4 -translate-x-1/2 rounded-full border-2 border-card rtl:translate-x-1/2 ${accents[i % 4]!.bg}`}
                    style={{ insetInlineStart: `${end}%` }}
                  />
                </div>
                <span
                  className={`text-end text-xs font-semibold ${accents[change >= 0 ? 0 : 1]!.text}`}
                >
                  {change >= 0 ? "+" : ""}
                  {change.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </Card>
        <Card
          title="Custody overview"
          description="Sample wallet balance distribution"
          className="xl:col-span-5"
          bodyClassName="p-5"
        >
          <div className="flex items-start gap-3">
            <span
              className={`rounded-xl p-3 ${accents[2]!.soft} ${accents[2]!.text}`}
            >
              <LockKeyhole className="size-6" />
            </span>
            <div>
              <p className="text-xl font-semibold">
                {cryptoMoney(holdings * 0.75)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Illustrative cold-storage allocation
              </p>
            </div>
          </div>
          <div
            className="mt-5 flex h-9 gap-1 overflow-hidden rounded-lg"
            role="img"
            aria-label="75 percent cold storage and 25 percent trading balance"
          >
            <div
              className={`flex items-center justify-center text-xs font-semibold text-white ${accents[2]!.bg}`}
              style={{ width: "75%" }}
            >
              75%
            </div>
            <div
              className={`flex items-center justify-center text-xs font-semibold text-white ${accents[3]!.bg}`}
              style={{ width: "25%" }}
            >
              25%
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-2 text-xs text-muted-foreground">
            <span>Cold storage</span>
            <span>Trading wallet</span>
          </div>
          <div className="mt-5 flex items-start gap-2 rounded-lg bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className={`size-4 shrink-0 ${accents[2]!.text}`} />
            Balances and custody allocations are sample data for this dashboard
            preview.
          </div>
        </Card>
      </div>
      <Card
        className="mt-4"
        title="Transfer journal"
        description="Recent sample account activity"
        bodyClassName="p-0"
        action={
          <select
            aria-label="Transaction type"
            className={field}
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="all">All transactions</option>
            <option>Buy</option>
            <option>Sell</option>
            <option>Deposit</option>
          </select>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                {[
                  "Activity",
                  "Asset / quantity",
                  "Amount",
                  "Time",
                  "Status",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 text-start font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-border last:border-0 hover:bg-muted/40"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-lg p-2 ${accents[t.type === "Sell" ? 1 : 0]!.soft} ${accents[t.type === "Sell" ? 1 : 0]!.text}`}
                      >
                        {t.type === "Sell" ? (
                          <ArrowUpRight className="size-4" />
                        ) : (
                          <ArrowDownLeft className="size-4" />
                        )}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{t.type}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          {t.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-xs">
                    {t.quantity} {t.symbol}
                  </td>
                  <td className="px-5 py-4 text-xs font-semibold">
                    {cryptoMoney(t.amount)}
                  </td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">
                    {t.time}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs ${accents[t.status === "Pending" ? 1 : 0]!.text}`}
                    >
                      {t.status === "Completed" && (
                        <Check className="size-3.5" />
                      )}
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Exchange preview</DialogTitle>
            <DialogDescription>
              Illustrative conversion using sample prices. No transaction will
              be submitted.
            </DialogDescription>
          </DialogHeader>
          <dl className="space-y-4">
            <div className="flex justify-between gap-4 border-b border-border pb-3 text-sm">
              <dt className="text-muted-foreground">You pay</dt>
              <dd className="font-semibold">
                {reverse ? `${amount} ${exchangeSymbol}` : cryptoMoney(entered)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-3 text-sm">
              <dt className="text-muted-foreground">You receive</dt>
              <dd className="break-all text-end font-semibold">{output}</dd>
            </div>
            <div className="flex justify-between text-sm">
              <dt className="text-muted-foreground">Preview fee</dt>
              <dd>$0.00</dd>
            </div>
          </dl>
          <Button onClick={() => setPreviewOpen(false)}>Close preview</Button>
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
            <DialogTitle>{detailAsset?.name} position</DialogTitle>
            <DialogDescription>
              Sample holding and cost basis in USD.
            </DialogDescription>
          </DialogHeader>
          {detailAsset && (
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Quantity",
                  value: `${detailAsset.holding} ${detailAsset.symbol}`,
                },
                {
                  label: "Market value",
                  value: cryptoMoney(detailAsset.holding * detailAsset.price),
                },
                {
                  label: "Cost basis",
                  value: cryptoMoney(detailAsset.holding * detailAsset.entry),
                },
                {
                  label: "Unrealized P&L",
                  value: cryptoMoney(
                    detailAsset.holding *
                      (detailAsset.price - detailAsset.entry),
                  ),
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-border p-4"
                >
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="mt-2 break-words text-lg font-semibold">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          )}
          <Button variant="outline" onClick={() => setDetail(null)}>
            Close details
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
