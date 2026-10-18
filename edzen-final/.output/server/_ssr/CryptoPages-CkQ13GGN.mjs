import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Mi as ArrowLeftRight, U as Star, c as Wallet, hr as Download, wr as Coins } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { i as cryptoCompact, o as getCryptoHistory, t as CRYPTO_ASSETS } from "./crypto-dashboard-data-gvJTK8_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CryptoPages-CkQ13GGN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var money = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 2
}).format(n);
var titles = {
	market: "Crypto Market",
	wallet: "Crypto Wallet",
	exchange: "Exchange Preview",
	transactions: "Crypto Transactions"
};
var activity = [
	{
		id: "CTX-101",
		asset: "BTC",
		type: "Buy",
		amount: .025,
		status: "Completed",
		date: "2026-10-09"
	},
	{
		id: "CTX-102",
		asset: "ETH",
		type: "Receive",
		amount: .4,
		status: "Completed",
		date: "2026-10-08"
	},
	{
		id: "CTX-103",
		asset: "SOL",
		type: "Sell",
		amount: 3,
		status: "Pending",
		date: "2026-10-08"
	},
	{
		id: "CTX-104",
		asset: "BNB",
		type: "Receive",
		amount: .6,
		status: "Completed",
		date: "2026-10-07"
	},
	{
		id: "CTX-105",
		asset: "BTC",
		type: "Send",
		amount: .012,
		status: "Completed",
		date: "2026-10-06"
	},
	{
		id: "CTX-106",
		asset: "ETH",
		type: "Buy",
		amount: .8,
		status: "Completed",
		date: "2026-10-05"
	},
	{
		id: "CTX-107",
		asset: "SOL",
		type: "Receive",
		amount: 12,
		status: "Completed",
		date: "2026-10-04"
	},
	{
		id: "CTX-108",
		asset: "AVAX",
		type: "Send",
		amount: 5,
		status: "Failed",
		date: "2026-10-03"
	},
	{
		id: "CTX-109",
		asset: "BNB",
		type: "Sell",
		amount: 1.2,
		status: "Completed",
		date: "2026-10-02"
	},
	{
		id: "CTX-110",
		asset: "ETH",
		type: "Send",
		amount: .15,
		status: "Pending",
		date: "2026-10-01"
	}
];
function CryptoPage({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CryptoWorkspace, { kind }, kind) });
}
function CryptoWorkspace({ kind }) {
	const [transactionType, setTransactionType] = (0, import_react.useState)("All");
	const [transactionSort, setTransactionSort] = (0, import_react.useState)("newest");
	const [transactionDetail, setTransactionDetail] = (0, import_react.useState)(null);
	const [sort, setSort] = (0, import_react.useState)("cap");
	const [chartSymbol, setChartSymbol] = (0, import_react.useState)("BTC");
	const [range, setRange] = (0, import_react.useState)("24h");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const { base } = useChartTheme();
	const [query, setQuery] = (0, import_react.useState)("");
	const [favorites, setFavorites] = (0, import_react.useState)(["BTC", "ETH"]);
	const [onlyFavorites, setOnlyFavorites] = (0, import_react.useState)(false);
	const [from, setFrom] = (0, import_react.useState)("BTC");
	const [to, setTo] = (0, import_react.useState)("ETH");
	const [amount, setAmount] = (0, import_react.useState)("0.1");
	const [preview, setPreview] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("All");
	const visible = CRYPTO_ASSETS.filter((a) => `${a.name} ${a.symbol}`.toLowerCase().includes(query.toLowerCase()) && (!onlyFavorites || favorites.includes(a.symbol)));
	visible.sort((a, b) => sort === "gainers" ? b.change - a.change : sort === "losers" ? a.change - b.change : sort === "volume" ? b.volume - a.volume : b.marketCap - a.marketCap);
	const chartAsset = CRYPTO_ASSETS.find((a) => a.symbol === chartSymbol);
	const history = getCryptoHistory(chartAsset, range);
	const priceOptions = mergeOptions(base, {
		colors: [token("--chart-1")],
		stroke: {
			curve: "smooth",
			width: 2
		},
		fill: {
			opacity: .18,
			type: "solid"
		},
		xaxis: { type: "datetime" },
		yaxis: { labels: { formatter: (value) => money(value) } },
		tooltip: {
			x: { format: "MMM dd HH:mm" },
			y: { formatter: (value) => money(value) }
		}
	});
	const source = CRYPTO_ASSETS.find((a) => a.symbol === from);
	const target = CRYPTO_ASSETS.find((a) => a.symbol === to);
	const value = Number(amount);
	const valid = Number.isFinite(value) && value > 0 && value <= 1e6 && from !== to;
	const gross = valid ? value * source.price : 0;
	const fee = gross * .0025;
	const receive = (gross - fee) / target.price;
	const total = CRYPTO_ASSETS.reduce((sum, a) => sum + a.holding * a.price, 0);
	const costBasis = CRYPTO_ASSETS.reduce((sum, a) => sum + a.holding * a.entry, 0);
	const allocationOptions = mergeOptions(base, {
		labels: CRYPTO_ASSETS.map((a) => a.symbol),
		colors: CRYPTO_ASSETS.map((a) => token(a.color)),
		stroke: {
			width: 3,
			colors: [token("--card")]
		},
		dataLabels: { enabled: false },
		legend: { position: "bottom" },
		plotOptions: { pie: { donut: {
			size: "75%",
			labels: {
				show: true,
				total: {
					show: true,
					showAlways: true,
					label: "Portfolio",
					formatter: () => money(total)
				}
			}
		} } },
		tooltip: { y: { formatter: (value) => money(value) } }
	});
	const records = activity.filter((r) => (status === "All" || r.status === status) && (transactionType === "All" || r.type === transactionType) && `${r.id} ${r.asset} ${r.type}`.toLowerCase().includes(query.toLowerCase()));
	records.sort((a, b) => transactionSort === "value" ? b.amount * (CRYPTO_ASSETS.find((asset) => asset.symbol === b.asset)?.price ?? 0) - a.amount * (CRYPTO_ASSETS.find((asset) => asset.symbol === a.asset)?.price ?? 0) : b.date.localeCompare(a.date));
	const transactionValue = (record) => record.amount * (CRYPTO_ASSETS.find((asset) => asset.symbol === record.asset)?.price ?? 0);
	function exportRecords() {
		const csv = (kind === "transactions" ? [[
			"ID",
			"Asset",
			"Type",
			"Amount",
			"Status",
			"Date"
		], ...records.map((r) => [
			r.id,
			r.asset,
			r.type,
			r.amount,
			r.status,
			r.date
		])] : [[
			"Asset",
			"Name",
			"Sample price USD",
			"Holding",
			"Value USD"
		], ...visible.map((a) => [
			a.symbol,
			a.name,
			a.price,
			a.holding,
			a.holding * a.price
		])]).map((row) => row.map((v) => `"${String(v).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const a = document.createElement("a");
		a.href = url;
		a.download = `crypto-${kind}.csv`;
		a.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: titles[kind],
			subtitle: "Explore sample digital asset data in a focused workspace.",
			breadcrumb: [
				"Management",
				"Crypto",
				titles[kind]
			],
			actions: kind !== "exchange" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportRecords,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
			}) : void 0
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground",
			children: "Illustrative prices and balances. No live feed, connected wallet, or real transactions. Changes stay in this page session."
		}),
		kind === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Tracked market cap",
					value: cryptoCompact(CRYPTO_ASSETS.reduce((sum, a) => sum + a.marketCap * 1e6, 0))
				},
				{
					label: "Sample 24h volume",
					value: cryptoCompact(CRYPTO_ASSETS.reduce((sum, a) => sum + a.volume * 1e6, 0))
				},
				{
					label: "Advancing assets",
					value: CRYPTO_ASSETS.filter((a) => a.change > 0).length + " / " + CRYPTO_ASSETS.length
				},
				{
					label: "Watchlist assets",
					value: favorites.length.toString()
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "vexui-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: m.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-2xl font-semibold",
						children: m.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[10px] text-muted-foreground",
						children: "Sample tracked asset universe"
					})
				]
			}, m.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: chartAsset.name + " price activity",
				description: "Illustrative price history ending October 9, 2026",
				className: "xl:col-span-2",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						"aria-label": "Chart asset",
						className: "rounded-lg border border-border bg-card px-2 py-1 text-xs",
						value: chartSymbol,
						onChange: (e) => setChartSymbol(e.target.value),
						children: CRYPTO_ASSETS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a.symbol }, a.symbol))
					}), [
						"24h",
						"7d",
						"30d"
					].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: range === value ? "default" : "outline",
						"aria-pressed": range === value,
						onClick: () => setRange(value),
						children: value
					}, value))]
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-semibold",
						children: money(chartAsset.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs " + (history.change >= 0 ? "text-success" : "text-destructive"),
						children: [
							history.change > 0 ? "+" : "",
							history.change.toFixed(2),
							"% over ",
							range
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "area",
					height: 265,
					options: priceOptions,
					series: [{
						name: chartAsset.symbol,
						data: history.prices
					}]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Market movers",
				description: "Highest sample 24h changes",
				bodyClassName: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [...CRYPTO_ASSETS].sort((a, b) => b.change - a.change).slice(0, 4).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex w-full items-center gap-3 rounded-xl border border-border p-3 text-start hover:bg-muted/30",
						onClick: () => setChartSymbol(a.symbol),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg text-xs font-semibold " + a.tone,
								children: a.symbol.slice(0, 2)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: a.symbol
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: money(a.price)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-semibold " + (a.change >= 0 ? "text-success" : "text-destructive"),
								children: [
									a.change > 0 ? "+" : "",
									a.change,
									"%"
								]
							})
						]
					}, a.symbol))
				})
			})]
		})] }),
		kind === "exchange" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "vexui-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Exchange assets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Explore a quote before you decide"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-muted/20 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "You pay"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"Sample holding: ",
											source.holding,
											" ",
											from
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										"aria-label": "Exchange amount",
										className: "h-12 min-w-0 flex-1 border-0 bg-transparent px-0 text-2xl font-semibold shadow-none",
										type: "number",
										min: "0.00000001",
										max: 1e6,
										step: "any",
										value: amount,
										onChange: (e) => setAmount(e.target.value)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										"aria-label": "From asset",
										className: "h-10 rounded-xl border border-border bg-card px-3 text-sm font-semibold",
										value: from,
										onChange: (e) => setFrom(e.target.value),
										children: CRYPTO_ASSETS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a.symbol }, a.symbol))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: [money(gross), " estimated value"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1",
										children: [
											25,
											50,
											100
										].map((percent) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded-md bg-card px-2 py-1 text-[10px] font-semibold text-primary",
											onClick: () => setAmount(String(Number((source.holding * percent / 100).toFixed(8)))),
											children: percent === 100 ? "Max" : percent + "%"
										}, percent))
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": "Reverse exchange pair",
								className: "rounded-xl",
								onClick: () => {
									setFrom(to);
									setTo(from);
									setAmount("");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/20 bg-primary/5 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "You receive"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "primary",
										size: "sm",
										children: "Estimate"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "min-w-0 flex-1 break-all text-2xl font-semibold",
										children: receive.toFixed(6)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										"aria-label": "To asset",
										className: "h-10 rounded-xl border border-border bg-card px-3 text-sm font-semibold",
										value: to,
										onChange: (e) => setTo(e.target.value),
										children: CRYPTO_ASSETS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a.symbol }, a.symbol))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-muted-foreground",
									children: [
										target.name,
										" / ",
										money(gross - fee),
										" after sample fee"
									]
								})
							]
						}),
						!valid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "text-xs text-muted-foreground",
							children: "Choose different assets and enter a positive amount up to 1,000,000."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "h-11 w-full",
							disabled: !valid,
							onClick: () => setPreview(true),
							children: "Review exchange estimate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[10px] text-muted-foreground",
							children: "Preview only. No order or payment is submitted."
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Quote breakdown",
					description: "Fixed sample prices / 0.25% fee",
					bodyClassName: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-muted/30 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Exchange rate before fee"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-lg font-semibold",
							children: [
								"1 ",
								from,
								" = ",
								(source.price / target.price).toFixed(6),
								" ",
								to
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4 text-sm",
						children: [
							{
								label: "Source price",
								value: money(source.price)
							},
							{
								label: "Destination price",
								value: money(target.price)
							},
							{
								label: "Input value",
								value: money(gross)
							},
							{
								label: "Sample fee (0.25%)",
								value: money(fee)
							},
							{
								label: "After fee",
								value: money(gross - fee)
							}
						].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: row.value
							})]
						}, row.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-lg bg-info/10 text-info",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "How this preview works"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: [
							"Choose the source and destination assets.",
							"Enter an amount or use a sample balance shortcut.",
							"Review the estimate using fixed prices."
						].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 text-xs leading-5 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 shrink-0 place-items-center rounded-full bg-muted text-[10px] font-semibold",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })]
						}, text))
					})]
				})]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			kind === "wallet" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card relative overflow-hidden bg-primary/10 p-6 xl:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Portfolio overview"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "primary",
								children: "Sample wallet"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-xs text-muted-foreground",
							children: "Total asset value ? USD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-4xl font-semibold tracking-tight",
							children: money(total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-4 border-t border-border pt-5 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Cost basis"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg font-semibold",
									children: money(costBasis)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Unrealized gain / loss"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg font-semibold " + (total >= costBasis ? "text-success" : "text-destructive"),
									children: money(total - costBasis)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Assets held"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg font-semibold",
									children: CRYPTO_ASSETS.length
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[11px] text-muted-foreground",
							children: "Portfolio totals include all sample holdings, independent of search filters."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Asset allocation",
					description: "Share of the complete sample portfolio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "donut",
						height: 285,
						options: allocationOptions,
						series: CRYPTO_ASSETS.map((a) => a.holding * a.price)
					})
				})]
			}),
			kind === "transactions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					{
						label: "Transactions in view",
						value: records.length.toString(),
						color: "--primary"
					},
					{
						label: "Completed records",
						value: records.filter((r) => r.status === "Completed").length.toString(),
						color: "--success"
					},
					{
						label: "Pending records",
						value: records.filter((r) => r.status === "Pending").length.toString(),
						color: "--warning"
					},
					{
						label: "Illustrative value",
						value: money(records.filter((r) => r.status !== "Failed").reduce((sum, r) => sum + transactionValue(r), 0)),
						color: "--info"
					}
				].map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-3 grid size-9 place-items-center rounded-xl",
							style: {
								color: `var(${metric.color})`,
								background: `color-mix(in oklch,var(${metric.color}) 12%,transparent)`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: metric.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl font-semibold",
							children: metric.value
						})
					]
				}, metric.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: kind === "market" ? "Market watch" : kind === "wallet" ? "Asset balances" : "Transaction history",
				description: "Sample records",
				bodyClassName: "p-5",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"aria-label": "Search crypto records",
							placeholder: "Search assets or records…",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							className: "sm:w-60"
						}),
						kind === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Sort market assets",
							className: "rounded-lg border border-border bg-card px-3 text-sm",
							value: sort,
							onChange: (e) => setSort(e.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "cap",
									children: "Market cap"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "gainers",
									children: "Top gainers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "losers",
									children: "Top losers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "volume",
									children: "Volume"
								})
							]
						}),
						kind === "market" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: onlyFavorites ? "default" : "outline",
							"aria-pressed": onlyFavorites,
							onClick: () => setOnlyFavorites((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4" }), "Watchlist"]
						}),
						kind === "transactions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "Transaction type",
							className: "rounded-lg border border-border bg-card px-3 text-sm",
							value: transactionType,
							onChange: (e) => setTransactionType(e.target.value),
							children: [
								"All",
								"Buy",
								"Sell",
								"Receive",
								"Send"
							].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: type }, type))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Sort crypto transactions",
							className: "rounded-lg border border-border bg-card px-3 text-sm",
							value: transactionSort,
							onChange: (e) => setTransactionSort(e.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "newest",
								children: "Newest first"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "value",
								children: "Largest value"
							})]
						})] }),
						kind === "transactions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "Crypto transaction status",
							className: "rounded-lg border border-border bg-card px-3 text-sm",
							value: status,
							onChange: (e) => setStatus(e.target.value),
							children: [
								"All",
								"Completed",
								"Pending",
								"Failed"
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})
					]
				}),
				children: [kind === "transactions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
					"ID",
					"Asset",
					"Type",
					"Quantity",
					"Sample value",
					"Status",
					"Date",
					""
				].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h || "actions")) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: records.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.id }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.asset }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.type }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
						r.amount,
						" ",
						r.asset
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: money(transactionValue(r)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: r.status === "Completed" ? "success" : "warning",
						children: r.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.date }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						"aria-label": "View transaction " + r.id,
						onClick: () => setTransactionDetail(r),
						children: "Details"
					}) })
				] }, r.id)) })] }) : kind === "wallet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
					children: visible.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-2xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							style: { background: `color-mix(in oklch,var(${a.color}) 6%,var(--card))` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 place-items-center rounded-xl font-semibold " + a.tone,
										children: a.symbol.slice(0, 2)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-semibold",
										children: a.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: a.symbol
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-2xl font-semibold",
									children: [
										a.holding,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: a.symbol
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: money(a.holding * a.price)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-2 rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-primary",
										style: { width: a.holding * a.price / total * 100 + "%" }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [(a.holding * a.price / total * 100).toFixed(1), "% of sample portfolio"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-t border-border px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: "Unrealized gain / loss"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold " + (a.price >= a.entry ? "text-success" : "text-destructive"),
								children: money(a.holding * (a.price - a.entry))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								"aria-label": "Balance details " + a.symbol,
								onClick: () => setDetail(a),
								children: "Details"
							})]
						})]
					}, a.symbol))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
					"",
					"Asset",
					"Price",
					"24h change",
					"Sample volume",
					"Market cap",
					""
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, i)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: visible.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": `Watch ${a.symbol}`,
						"aria-pressed": favorites.includes(a.symbol),
						onClick: () => setFavorites((current) => current.includes(a.symbol) ? current.filter((s) => s !== a.symbol) : [...current, a.symbol]),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 " + (favorites.includes(a.symbol) ? "fill-warning text-warning" : "text-muted-foreground") })
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: a.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: a.symbol
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: money(a.price) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: a.change >= 0 ? "text-success" : "text-destructive",
						children: [
							a.change > 0 ? "+" : "",
							a.change,
							"%"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: cryptoCompact(a.volume * 1e6) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: cryptoCompact(a.marketCap * 1e6) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						"aria-label": `View ${a.symbol}`,
						onClick: () => setDetail(a),
						children: "Details"
					}) })
				] }, a.symbol)) })] }), (kind === "transactions" ? records.length : visible.length) === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-sm text-muted-foreground",
					children: "No matching records."
				})]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!transactionDetail,
			onOpenChange: (open) => {
				if (!open) setTransactionDetail(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Transaction details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [transactionDetail?.id, " / Sample record, not an on-chain transaction"] })] }), transactionDetail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-primary/5 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: transactionDetail.status === "Completed" ? "success" : "warning",
								children: transactionDetail.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-3xl font-semibold",
								children: [
									transactionDetail.amount,
									" ",
									transactionDetail.asset
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: [money(transactionValue(transactionDetail)), " at current sample price"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 rounded-xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium",
								children: transactionDetail.type
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: transactionDetail.date
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Asset"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: CRYPTO_ASSETS.find((a) => a.symbol === transactionDetail.asset)?.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Reference"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: transactionDetail.id
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-5 text-muted-foreground",
						children: "USD values use fixed sample prices, not historical execution prices. No wallet address or transaction hash is connected."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						onClick: () => setTransactionDetail(null),
						children: "Close details"
					})
				]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!detail,
			onOpenChange: (open) => {
				if (!open) setDetail(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
				detail?.name,
				" / ",
				detail?.symbol
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: kind === "wallet" ? "Sample balance and cost basis. No connected wallet." : "Illustrative asset details. No live market feed." })] }), detail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-primary/5 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Sample price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-semibold",
							children: money(detail.price)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "24h change"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [detail.change, "%"]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Market cap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: cryptoCompact(detail.marketCap * 1e6)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "24h volume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: cryptoCompact(detail.volume * 1e6)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Sample holdings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [
									detail.holding,
									" ",
									detail.symbol
								]
							})] })
						]
					}),
					kind === "wallet" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 rounded-xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Holding value"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold",
								children: money(detail.holding * detail.price)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Cost basis"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-semibold",
								children: money(detail.holding * detail.entry)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Portfolio share"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [(detail.holding * detail.price / total * 100).toFixed(1), "%"]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Unrealized gain / loss"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: money(detail.holding * (detail.price - detail.entry))
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: () => {
							setChartSymbol(detail.symbol);
							setDetail(null);
						},
						children: kind === "wallet" ? "Close balance details" : "View price chart"
					})
				]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: preview,
			onOpenChange: setPreview,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "sm:max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Review exchange estimate" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Estimate only. No order is placed or balance changed." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-primary/5 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									amount,
									" ",
									from
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeftRight, { className: "my-3 size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-2xl font-semibold",
								children: [
									receive.toFixed(6),
									" ",
									to
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Includes a sample fee of ",
							money(fee),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setPreview(false),
						children: "Close preview"
					})
				]
			})
		})
	] });
}
//#endregion
export { CryptoPage as t };
