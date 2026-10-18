import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as Plus, Tn as Landmark, ii as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finance-7d-fiFKi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function P({ v, t = "bg-primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
			className: `block h-full rounded-full ${t}`,
			style: { width: `${v}%` }
		})
	});
}
function FinanceDashboard() {
	const { base } = useChartTheme();
	const chart = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: { type: "bar" },
		colors: [
			token("--chart-1"),
			token("--destructive"),
			token("--chart-3")
		],
		xaxis: { categories: [
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug"
		] },
		plotOptions: { bar: {
			columnWidth: "44%",
			borderRadius: 5
		} },
		stroke: {
			curve: "smooth",
			width: [
				0,
				0,
				3
			]
		},
		legend: {
			position: "top",
			horizontalAlign: "left"
		}
	}), [base]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Finance",
			subtitle: "Cash, profitability and control signals across the business.",
			breadcrumb: [
				"Edzen",
				"Dashboards",
				"Finance"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}), "August"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "New transaction"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-8 overflow-hidden border-primary/25",
				title: "Cash position",
				description: "Last reconciled today, 09:30 AM",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "success",
					children: "+8.6%"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-4xl font-semibold tracking-tight",
						children: "$482,640"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-success",
						children: "Available cash healthy liquidity"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-3 text-end text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Bank balance", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-base",
								children: "$314,800"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Equivalents", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-base",
								children: "$112,400"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Credit", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-base",
								children: "$55,440"
							})] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 600 80",
					className: "mt-6 h-16 w-full text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 68 C70 55 90 70 150 48 S250 45 310 30 S430 48 500 17 S570 23 600 5",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "4"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-4",
				title: "Profitability",
				description: "This month",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						[
							"Revenue",
							"$186,420",
							"bg-primary"
						],
						[
							"Gross profit",
							"$92,640",
							"bg-success"
						],
						[
							"Net profit",
							"$48,280",
							"bg-chart-2"
						]
					].map(([n, a, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: a })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
						v: n === "Revenue" ? 100 : n === "Gross profit" ? 50 : 26,
						t: c
					})] }, n))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 border-t pt-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Net margin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "float-right text-success",
						children: "25.9%"
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Cash flow",
					description: "Inflow vs outflow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-muted-foreground",
							children: "Cash in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block text-xl text-success",
							children: "$124,800"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-muted-foreground",
							children: "Cash out"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block text-xl text-destructive",
							children: "$86,400"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-lg bg-success/10 p-3 text-sm font-semibold text-success",
						children: "+$38,400 net cash flow"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Operating runway",
					description: "Based on current monthly burn",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-semibold",
							children: "6.0 months"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "$255,600 operating cash $42,600 burn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid grid-cols-6 gap-1",
							children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "h-3 rounded bg-primary",
								style: { opacity: 1 - i * .1 }
							}, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Margin trend",
					description: "Profitability quality",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							["Gross margin", 49.7],
							["Operating margin", 32.1],
							["Net margin", 25.9]
						].map(([n, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [v, "%"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
							v,
							t: "bg-success"
						})] }, n))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-8",
				title: "Income vs expenses",
				description: "Revenue, operating expenses and net income",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 300,
					options: chart,
					series: [
						{
							name: "Revenue",
							type: "column",
							data: [
								142,
								158,
								166,
								171,
								179,
								186
							]
						},
						{
							name: "Operating expenses",
							type: "column",
							data: [
								88,
								94,
								102,
								108,
								112,
								116
							]
						},
						{
							name: "Net income",
							type: "line",
							data: [
								32,
								38,
								42,
								44,
								46,
								48
							]
						}
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-4",
				title: "Expense breakdown",
				description: "$86,400 total operating spend",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						[
							"Payroll",
							"$34,800",
							40
						],
						[
							"Operations",
							"$17,500",
							20
						],
						[
							"Marketing",
							"$12,600",
							15
						],
						[
							"Software",
							"$8,900",
							10
						],
						[
							"Facilities",
							"$6,200",
							7
						]
					].map(([n, a, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							a,
							" ",
							v,
							"%"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { v })] }, n))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Accounts",
					description: "Available balances",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Operating",
								" 4582",
								"$184,600"
							],
							[
								"Reserve",
								" 8174",
								"$128,240"
							],
							[
								"Payroll",
								" 2951",
								"$68,400"
							],
							[
								"Petty cash",
								"",
								"$1,400"
							]
						].map(([n, id, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1 text-sm",
									children: [n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "block text-xs text-muted-foreground",
										children: id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: a })
							]
						}, n))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Receivables",
					description: "$96,420 outstanding",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 text-center text-xs",
						children: [
							["030", "$51K"],
							["3160", "$24K"],
							["6190", "$13K"],
							["90+", "$8K"]
						].map(([n, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-lg bg-muted p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-base",
									children: a
								}),
								n,
								" days"
							]
						}, n))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-destructive",
						children: "$18,260 overdue"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Payables",
					description: "$72,840 total payable",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Cloud hosting",
								"$8,400",
								"Aug 26"
							],
							[
								"Office lease",
								"$6,800",
								"Aug 28"
							],
							[
								"Software licenses",
								"$5,200",
								"Sep 01"
							]
						].map(([n, a, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "block text-xs text-muted-foreground",
								children: d
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: a })]
						}, n))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "mt-5",
			title: "Recent transactions",
			description: "Latest reconciled account activity",
			bodyClassName: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "vexui-table min-w-[680px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Transaction",
						"Account",
						"Category",
						"Date",
						"Amount",
						"Status"
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: x }, x)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
						[
							"Stripe settlement",
							"Operating",
							"Sales",
							"Aug 22",
							"+$12,840",
							"Completed"
						],
						[
							"AWS cloud services",
							"Operating",
							"Infrastructure",
							"Aug 22",
							"-$4,280",
							"Paid"
						],
						[
							"Payroll batch",
							"Payroll",
							"People",
							"Aug 21",
							"-$28,600",
							"Paid"
						]
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: r.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: i === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: x.startsWith("+") ? "text-success" : "text-destructive",
						children: x
					}) : i === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "success",
						children: x
					}) : x }, x)) }, r[0])) })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Revenue sources",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Subscriptions",
								48,
								"$89.4K"
							],
							[
								"Services",
								24,
								"$44.7K"
							],
							[
								"Marketplace",
								17,
								"$31.7K"
							],
							[
								"Other",
								11,
								"$20.6K"
							]
						].map(([n, v, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: a })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { v })] }, n))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Financial goals",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							["Annual revenue", 71],
							["Expense reduction", 68],
							["Cash reserve", 64],
							["Net margin", 86]
						].map(([n, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [v, "%"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, {
							v,
							t: "bg-success"
						})] }, n))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "P&L summary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 text-sm",
						children: [
							["Revenue", "$186,420"],
							["Cost of revenue", "-$93,780"],
							["Gross profit", "$92,640"],
							["Operating expenses", "-$44,360"],
							["Net income", "$39,860"]
						].map(([n, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: i === 2 || i === 4 ? "border-t pt-2 font-semibold" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "float-right",
								children: a
							})]
						}, n))
					})
				})
			]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceDashboard, {}) });
//#endregion
export { SplitComponent as component };
