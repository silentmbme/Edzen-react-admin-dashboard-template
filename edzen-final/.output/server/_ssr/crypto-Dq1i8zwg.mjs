import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Di as ArrowUpRight, Li as ArrowDownLeft, O as TrendingUp, Pi as ArrowDownUp, U as Star, c as Wallet, cn as LockKeyhole, hr as Download, mr as Earth, st as Search, vi as Bitcoin, xn as Layers, zr as CircleDollarSign } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { i as SelectItem, n as SelectContent, o as SelectTrigger, s as SelectValue, t as Select } from "./select-DtJbsb0z.mjs";
import { a as cryptoMoney, i as cryptoCompact, n as CRYPTO_CASH, o as getCryptoHistory, r as CRYPTO_TRANSACTIONS, t as CRYPTO_ASSETS } from "./crypto-dashboard-data-gvJTK8_n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crypto-Dq1i8zwg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Coin({ asset, small = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: `grid shrink-0 place-items-center rounded-full font-semibold ${small ? "size-8 text-lg" : "size-11 text-2xl"} ${asset.tone}`,
		children: asset.mark
	});
}
function Change({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-1 text-xs font-medium ${value >= 0 ? "text-success" : "text-destructive"}`,
		children: [
			value >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-3.5" }),
			value > 0 ? "+" : "",
			value.toFixed(2),
			"%"
		]
	});
}
function Stat({ label, value, icon, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "metric-card vexui-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "metric-icon grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[27px] font-semibold tracking-tight tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-xs text-muted-foreground",
				children: note
			})
		]
	});
}
function CryptoDashboard() {
	const [symbol, setSymbol] = (0, import_react.useState)("BTC");
	const [range, setRange] = (0, import_react.useState)("7d");
	const [query, setQuery] = (0, import_react.useState)("");
	const [watchlist, setWatchlist] = (0, import_react.useState)([
		"BTC",
		"ETH",
		"SOL"
	]);
	const [onlyWatchlist, setOnlyWatchlist] = (0, import_react.useState)(false);
	const [transactionType, setTransactionType] = (0, import_react.useState)("all");
	const [exchangeSymbol, setExchangeSymbol] = (0, import_react.useState)("BTC");
	const [amount, setAmount] = (0, import_react.useState)("1000");
	const [reverse, setReverse] = (0, import_react.useState)(false);
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const { base } = useChartTheme();
	const asset = CRYPTO_ASSETS.find((item) => item.symbol === symbol) ?? CRYPTO_ASSETS[0];
	const exchangeAsset = CRYPTO_ASSETS.find((item) => item.symbol === exchangeSymbol) ?? CRYPTO_ASSETS[0];
	const history = getCryptoHistory(asset, range);
	const holdings = CRYPTO_ASSETS.reduce((sum, item) => sum + item.price * item.holding, 0);
	const invested = CRYPTO_ASSETS.reduce((sum, item) => sum + item.entry * item.holding, 0);
	const profit = holdings - invested;
	const dayProfit = CRYPTO_ASSETS.reduce((sum, item) => sum + item.holding * (item.price - item.price / (1 + item.change / 100)), 0);
	const visibleAssets = CRYPTO_ASSETS.filter((item) => (!onlyWatchlist || watchlist.includes(item.symbol)) && `${item.name} ${item.symbol}`.toLowerCase().includes(query.trim().toLowerCase()));
	const transactions = CRYPTO_TRANSACTIONS.filter((item) => transactionType === "all" || item.type === transactionType);
	const entered = Number(amount);
	const validAmount = amount.trim() !== "" && Number.isFinite(entered) && entered > 0;
	const converted = validAmount ? reverse ? entered * exchangeAsset.price : entered / exchangeAsset.price : 0;
	const output = reverse ? cryptoMoney(converted) : `${converted.toFixed(6)} ${exchangeSymbol}`;
	const priceOptions = mergeOptions(base, {
		chart: { type: "area" },
		colors: [token("--chart-1")],
		stroke: {
			curve: "smooth",
			width: 3
		},
		fill: {
			opacity: .18,
			type: "solid"
		},
		xaxis: {
			type: "datetime",
			tickAmount: 5,
			labels: {
				datetimeUTC: true,
				format: range === "24h" ? "HH:mm" : "MMM dd"
			}
		},
		yaxis: {
			min: Math.min(...history.prices.map((point) => point.y)) * .992,
			max: Math.max(...history.prices.map((point) => point.y)) * 1.008,
			labels: { formatter: (value) => "$" + cryptoCompact(value) }
		},
		tooltip: {
			x: { format: "MMM dd, HH:mm" },
			y: { formatter: cryptoMoney }
		}
	});
	const volumeOptions = mergeOptions(base, {
		colors: [token("--chart-2")],
		stroke: { width: 0 },
		plotOptions: { bar: {
			columnWidth: "45%",
			borderRadius: 3
		} },
		xaxis: {
			type: "datetime",
			tickAmount: 5,
			labels: {
				datetimeUTC: true,
				format: range === "24h" ? "HH:mm" : "MMM dd"
			}
		},
		yaxis: { labels: { formatter: (value) => "$" + cryptoCompact(value) + "M" } },
		tooltip: {
			x: { format: "MMM dd, HH:mm" },
			y: { formatter: (value) => cryptoMoney(value * 1e6) }
		}
	});
	const allocationOptions = mergeOptions(base, {
		labels: CRYPTO_ASSETS.map((item) => item.symbol),
		colors: CRYPTO_ASSETS.map((item) => token(item.color)),
		legend: { show: false },
		stroke: {
			width: 4,
			colors: [token("--card")]
		},
		plotOptions: { pie: { donut: {
			size: "78%",
			labels: {
				show: true,
				value: { formatter: (value) => cryptoMoney(Number(value)) },
				total: {
					show: true,
					showAlways: true,
					label: "Total assets",
					formatter: () => cryptoMoney(holdings)
				}
			}
		} } },
		tooltip: { y: { formatter: cryptoMoney } }
	});
	function toggleWatchlist(value) {
		setWatchlist((current) => current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
	}
	function exportPortfolio() {
		const csv = [[
			"Asset",
			"Quantity",
			"Price (USD)",
			"Value (USD)",
			"Unrealized P/L (USD)"
		], ...CRYPTO_ASSETS.map((item) => [
			item.symbol,
			item.holding,
			item.price,
			(item.price * item.holding).toFixed(2),
			((item.price - item.entry) * item.holding).toFixed(2)
		])].map((row) => row.map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = "crypto-portfolio.csv";
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Crypto Dashboard",
			subtitle: "Your portfolio, market movements, and digital assets in one place.",
			breadcrumb: ["Dashboards", "Crypto"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "primary",
				children: "Sample market data"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportPortfolio,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export portfolio"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Portfolio balance",
					value: cryptoMoney(holdings + CRYPTO_CASH),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-5" }),
					note: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: dayProfit / (holdings + CRYPTO_CASH - dayProfit) * 100 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [cryptoMoney(dayProfit), " today"] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Unrealized profit",
					value: cryptoMoney(profit),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-5" }),
					note: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: profit / invested * 100 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "vs. purchase cost" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Available cash",
					value: cryptoMoney(CRYPTO_CASH),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, { className: "size-5" }),
					note: "USD balance in your sample wallet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Assets held",
					value: String(CRYPTO_ASSETS.length),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" }),
					note: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-success" }), "Diversified across five assets"]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: CRYPTO_ASSETS.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-pressed": symbol === item.symbol,
				onClick: () => setSymbol(item.symbol),
				className: `vexui-card p-4 text-start transition-colors hover:border-primary/50 ${symbol === item.symbol ? "border-primary/50 bg-primary/5" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, {
							asset: item,
							small: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [item.symbol, " / USD"]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ms-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: item.change })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold tabular-nums",
						children: cryptoMoney(item.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 100 32",
						className: "h-8 w-20",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
							points: item.change >= 0 ? "0,26 10,22 20,25 30,14 40,18 50,12 60,17 70,7 80,10 90,4 100,6" : "0,5 10,8 20,4 30,12 40,9 50,18 60,14 70,25 80,22 90,29 100,26",
							fill: "none",
							stroke: `var(${item.change >= 0 ? "--success" : "--destructive"})`,
							strokeWidth: "2.5",
							strokeLinejoin: "round"
						})
					})]
				})]
			}, item.symbol))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Market overview",
				description: "Illustrative prices ending October 9, 2026",
				className: "xl:col-span-2",
				bodyClassName: "px-3 pb-3 pt-5",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: symbol,
						onValueChange: setSymbol,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Chart asset",
							className: "h-8 w-[120px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CRYPTO_ASSETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: item.symbol,
							children: [item.symbol, " / USD"]
						}, item.symbol)) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 rounded-lg bg-muted p-1",
						children: [
							"24h",
							"7d",
							"30d"
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": range === value,
							onClick: () => setRange(value),
							className: `rounded-md px-3 py-1 text-xs font-medium ${range === value ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`,
							children: value.toUpperCase()
						}, value))
					})]
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap items-center gap-3 px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, { asset }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [asset.name, " / USD"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-2xl font-semibold",
								children: cryptoMoney(asset.price)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ms-auto text-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: history.change }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[11px] text-muted-foreground",
									children: ["over ", range]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "area",
						height: 265,
						options: priceOptions,
						series: [{
							name: asset.symbol,
							data: history.prices
						}]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-3 mt-2 flex items-center justify-between border-t border-border pt-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Trading volume"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium",
							children: [asset.symbol, " / USD"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "bar",
						height: 145,
						options: volumeOptions,
						series: [{
							name: "Volume",
							data: history.volume
						}]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Portfolio allocation",
				description: "Your digital asset balance",
				bodyClassName: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "donut",
						height: 250,
						options: allocationOptions,
						series: CRYPTO_ASSETS.map((item) => item.price * item.holding)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: CRYPTO_ASSETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-2.5 rounded-full",
									style: { background: `var(${item.color})` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ms-auto font-semibold",
									children: [(item.price * item.holding / holdings * 100).toFixed(1), "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-20 text-end text-muted-foreground",
									children: cryptoMoney(item.price * item.holding)
								})
							]
						}, item.symbol))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-between border-t border-border pt-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Cash held separately"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: cryptoMoney(CRYPTO_CASH)
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Market watchlist",
				description: "Explore assets and save your favorites",
				className: "xl:col-span-2",
				bodyClassName: "p-0",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": onlyWatchlist,
					onClick: () => setOnlyWatchlist(!onlyWatchlist),
					className: `inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${onlyWatchlist ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5" }),
						"Favorites (",
						watchlist.length,
						")"
					]
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Search crypto assets",
								placeholder: "Search name or symbol...",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								className: "ps-9"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "ps-5",
							children: "Asset"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Price" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "24h change" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Market cap" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
							className: "pe-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Watchlist"
							})
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visibleAssets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "ps-5 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSymbol(item.symbol),
								className: "flex items-center gap-2.5 text-start",
								"aria-label": `Show ${item.name} chart`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coin, {
									asset: item,
									small: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[13px] font-semibold",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: item.symbol
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-medium tabular-nums",
							children: cryptoMoney(item.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Change, { value: item.change }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-muted-foreground",
							children: ["$", cryptoCompact(item.marketCap * 1e6)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "pe-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `${watchlist.includes(item.symbol) ? "Remove" : "Add"} ${item.symbol} ${watchlist.includes(item.symbol) ? "from" : "to"} watchlist`,
								"aria-pressed": watchlist.includes(item.symbol),
								onClick: () => toggleWatchlist(item.symbol),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${watchlist.includes(item.symbol) ? "fill-warning text-warning" : "text-muted-foreground"}` })
							})
						})
					] }, item.symbol)), visibleAssets.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: 5,
						className: "py-10 text-center text-muted-foreground",
						children: "No assets match your filters."
					}) })] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border px-5 py-3 text-xs text-muted-foreground",
						children: [
							"Showing ",
							visibleAssets.length,
							" of ",
							CRYPTO_ASSETS.length,
							" assets · Sample prices"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Quick exchange",
				description: "Try a conversion with sample rates",
				bodyClassName: "p-5",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownUp, { className: "size-4 text-primary" }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "crypto-exchange-amount",
						className: "mb-2 block text-xs text-muted-foreground",
						children: [
							"You pay (",
							reverse ? exchangeSymbol : "USD",
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "crypto-exchange-amount",
						type: "number",
						min: "0",
						step: "any",
						inputMode: "decimal",
						value: amount,
						onChange: (event) => setAmount(event.target.value),
						className: "h-12 text-lg font-semibold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-3 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": "Reverse conversion",
								onClick: () => {
									setReverse(!reverse);
									setAmount("1");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownUp, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "crypto-exchange-asset",
						className: "mb-2 block text-xs text-muted-foreground",
						children: "Crypto asset"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: exchangeSymbol,
						onValueChange: setExchangeSymbol,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "crypto-exchange-asset",
							"aria-label": "Exchange asset",
							className: "h-11",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CRYPTO_ASSETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: item.symbol,
							children: [
								item.name,
								" (",
								item.symbol,
								")"
							]
						}, item.symbol)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-lg border bg-muted/30 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Estimated amount (",
								reverse ? "USD" : exchangeSymbol,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 break-words text-xl font-semibold tabular-nums",
							children: output
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "my-3 text-[11px] text-muted-foreground",
						children: [
							"1 ",
							exchangeSymbol,
							" = ",
							cryptoMoney(exchangeAsset.price),
							" · No fee in this preview."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						disabled: !validAmount,
						onClick: () => setPreviewOpen(true),
						children: ["Preview exchange ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] text-muted-foreground",
						children: "Demo only. No funds are moved."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm font-semibold",
									children: "Staking overview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Sample ETH position"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									size: "sm",
									children: "Active"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-semibold",
							children: "1.20 ETH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Estimated APR"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-success",
								children: "3.8%"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex justify-between border-t border-border pt-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Monthly reward estimate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: cryptoMoney(1.2 * (CRYPTO_ASSETS[1]?.price ?? 0) * .038 / 12)
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-xl bg-warning/15 text-warning",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bitcoin, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Bitcoin exposure"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Share of your crypto balance"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-semibold",
							children: [(CRYPTO_ASSETS[0].holding * CRYPTO_ASSETS[0].price / holdings * 100).toFixed(1), "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-4 h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-warning",
								style: { width: `${CRYPTO_ASSETS[0].holding * CRYPTO_ASSETS[0].price / holdings * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								CRYPTO_ASSETS[0].holding,
								" BTC ·",
								" ",
								cryptoMoney(CRYPTO_ASSETS[0].holding * CRYPTO_ASSETS[0].price)
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "vexui-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-xl bg-info/10 text-info",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Market snapshot"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Tracked assets only"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-semibold",
							children: ["$", cryptoCompact(CRYPTO_ASSETS.reduce((sum, item) => sum + item.volume * 1e6, 0))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "combined sample 24h volume"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center justify-between border-t border-border pt-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-success",
								children: "3 advancing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive",
								children: "2 declining"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Recent transactions",
			description: "Sample wallet activity from October 8–9, 2026",
			bodyClassName: "p-0",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: transactionType,
				onValueChange: setTransactionType,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					"aria-label": "Filter transactions",
					className: "h-8 w-[140px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: "All transactions"
				}), [
					"Buy",
					"Sell",
					"Deposit"
				].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: type,
					children: type
				}, type))] })]
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "ps-5",
					children: "Transaction"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Asset" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Amount" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Value" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "pe-5",
					children: "Status"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: transactions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "ps-5 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-8 place-items-center rounded-lg ${item.type === "Sell" ? "bg-warning/10 text-warning" : "bg-success/10 text-success"}`,
							children: item.type === "Sell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownLeft, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: item.id
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium",
					children: item.symbol
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "tabular-nums",
					children: [
						item.quantity,
						" ",
						item.symbol
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "tabular-nums",
					children: cryptoMoney(item.amount)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "whitespace-nowrap text-xs text-muted-foreground",
					children: item.time
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pe-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: item.status === "Completed" ? "success" : "warning",
						size: "sm",
						children: item.status
					})
				})
			] }, item.id)) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border px-5 py-3 text-xs text-muted-foreground",
				children: [
					"Showing ",
					transactions.length,
					" transactions"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: previewOpen,
			onOpenChange: setPreviewOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Exchange preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Illustrative conversion using the sample ",
					exchangeSymbol,
					" price. This preview does not place an order."
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 rounded-lg border bg-muted/30 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "You pay"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: reverse ? `${entered} ${exchangeSymbol}` : cryptoMoney(entered)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "You receive"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: output
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3 border-t border-border pt-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Rate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"1 ",
								exchangeSymbol,
								" = ",
								cryptoMoney(exchangeAsset.price)
							] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setPreviewOpen(false),
					children: "Close preview"
				})
			] })
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CryptoDashboard, {}) });
//#endregion
export { SplitComponent as component };
