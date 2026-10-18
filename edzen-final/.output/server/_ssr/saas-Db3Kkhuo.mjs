import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Ct as Plus, Di as ArrowUpRight, Yn as Gauge, _r as CreditCard, hr as Download, m as UsersRound, pt as Rocket } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { a as Delta, d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saas-Db3Kkhuo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var accounts = [
	{
		name: "Northstar Labs",
		plan: "Enterprise",
		mrr: "$8,400",
		health: "Excellent",
		score: 94,
		owner: "JM"
	},
	{
		name: "Cedar & Co.",
		plan: "Growth",
		mrr: "$3,200",
		health: "Growing",
		score: 82,
		owner: "AK"
	},
	{
		name: "Atlas Studio",
		plan: "Business",
		mrr: "$2,880",
		health: "Watch",
		score: 61,
		owner: "RL"
	},
	{
		name: "Kinetic Systems",
		plan: "Enterprise",
		mrr: "$12,400",
		health: "Excellent",
		score: 96,
		owner: "SD"
	}
];
function Stat({ label, value, delta, note, icon: Icon, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "metric-card vexui-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] font-medium text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[28px] font-semibold leading-none tracking-tight",
				children: value
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `metric-icon grid size-10 place-items-center rounded-xl ${color}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[19px]" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delta, {
				value: delta,
				caption: note
			})
		})]
	});
}
function SaasDashboard() {
	const { base } = useChartTheme();
	const [period, setPeriod] = (0, import_react.useState)("This month");
	const [segment, setSegment] = (0, import_react.useState)("All customers");
	const revenueOptions = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: {
			type: "line",
			toolbar: { show: false }
		},
		colors: [token("--chart-1"), token("--chart-3")],
		stroke: {
			curve: "smooth",
			width: [0, 3]
		},
		plotOptions: { bar: {
			columnWidth: "48%",
			borderRadius: 6
		} },
		fill: {
			opacity: .18,
			type: ["solid", "solid"]
		},
		dataLabels: { enabled: false },
		xaxis: { categories: [
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug"
		] },
		yaxis: { labels: { formatter: (value) => `$${value}K` } },
		tooltip: { y: { formatter: (value) => `$${value.toFixed(1)}K` } },
		grid: {
			borderColor: token("--border"),
			strokeDashArray: 4
		},
		legend: {
			position: "top",
			horizontalAlign: "right",
			fontSize: "12px"
		}
	}), [base]);
	const cohortOptions = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: {
			type: "heatmap",
			toolbar: { show: false }
		},
		dataLabels: { enabled: false },
		colors: [token("--chart-1")],
		plotOptions: { heatmap: {
			shadeIntensity: .42,
			radius: 4,
			colorScale: { ranges: [
				{
					from: 0,
					to: 60,
					color: token("--muted")
				},
				{
					from: 61,
					to: 80,
					color: token("--chart-2")
				},
				{
					from: 81,
					to: 100,
					color: token("--chart-1")
				}
			] }
		} },
		xaxis: { categories: [
			"Month 0",
			"M1",
			"M2",
			"M3",
			"M4",
			"M5"
		] },
		legend: { show: false }
	}), [base]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "SaaS growth center",
			subtitle: "Recurring revenue, customer health and product adoption in one operating view.",
			breadcrumb: [
				"Edzen",
				"Dashboards",
				"SaaS"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Reporting period",
					value: period,
					onChange: (event) => setPeriod(event.target.value),
					className: "h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "This month" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Last quarter" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Year to date" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => toast.success("Revenue report exported"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Export"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => toast.success("Customer invite ready"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Invite customer"]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Monthly recurring revenue",
					value: "$184.6K",
					delta: 9.4,
					note: "net growth this month",
					icon: CreditCard,
					color: "bg-primary/12 text-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Net revenue retention",
					value: "116.8%",
					delta: 4.2,
					note: "above 110% target",
					icon: ArrowUpRight,
					color: "bg-success/14 text-success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Active subscriptions",
					value: "8,462",
					delta: 6.8,
					note: "258 net new accounts",
					icon: UsersRound,
					color: "bg-info/14 text-info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Account health score",
					value: "88.4",
					delta: 2.1,
					note: "portfolio average",
					icon: Gauge,
					color: "bg-warning/16 text-warning"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-8",
				title: "MRR movement",
				description: `${period}  expansion is offsetting churn`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "dot",
					tone: "success",
					children: "Forecast on track"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-4",
					children: [
						[
							"Starting MRR",
							"$161.3K",
							"neutral"
						],
						[
							"New business",
							"+$18.4K",
							"success"
						],
						[
							"Expansion",
							"+$12.9K",
							"success"
						],
						[
							"Churn & contraction",
							"-$8.0K",
							"danger"
						]
					].map(([label, value, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-background/60 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-1 text-lg font-semibold ${tone === "success" ? "text-success" : tone === "danger" ? "text-destructive" : ""}`,
							children: value
						})]
					}, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "line",
						height: 290,
						options: revenueOptions,
						series: [{
							name: "MRR",
							type: "column",
							data: [
								131,
								141,
								148,
								158,
								169,
								184.6
							]
						}, {
							name: "MRR target",
							type: "area",
							data: [
								132,
								140,
								149,
								160,
								171,
								184
							]
						}]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-4",
				title: "Growth forecast",
				description: "Expected month-end outcome",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reference-hero rounded-2xl bg-primary p-5 text-primary-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-primary-foreground/70",
								children: "Projected MRR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-semibold",
								children: "$197.2K"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-primary-foreground/80",
								children: "106.8% of August target"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 h-2 overflow-hidden rounded-full bg-white/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[86%] rounded-full bg-white" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Expansion pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-lg",
								children: "$28.4K"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "At-risk MRR"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-lg text-warning",
								children: "$7.9K"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "mt-4 w-full",
						size: "sm",
						onClick: () => toast.info("Forecast assumptions opened"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {}), "Review forecast"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-7",
				title: "Customer portfolio",
				description: "Accounts that need attention and accounts ready to grow",
				bodyClassName: "p-0",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Customer segment",
					value: segment,
					onChange: (event) => setSegment(event.target.value),
					className: "h-8 rounded-md border bg-background px-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All customers" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Enterprise" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Growth" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "At risk" })
					]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[610px] text-start text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "border-b bg-muted/40 text-[11px] uppercase tracking-wide text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Plan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "MRR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3",
									children: "Health"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-end",
									children: "Owner"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-border",
							children: accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-muted/35",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: account.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
											className: "mt-0.5 block text-xs text-muted-foreground",
											children: "Last active today"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: account.plan === "Enterprise" ? "primary" : "info",
											children: account.plan
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3.5 font-semibold",
										children: account.mrr
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-3.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "dot",
											tone: account.health === "Watch" ? "warning" : "success",
											children: [
												account.health,
												"  ",
												account.score
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3.5 text-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-grid size-8 place-items-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary",
											children: account.owner
										})
									})
								]
							}, account.name))
						})]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-5",
				title: "Activation journey",
				description: "New workspace progress over the last 30 days",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						[
							"Trial created",
							"1,284",
							"100%",
							"bg-primary"
						],
						[
							"Team invited",
							"1,068",
							"83%",
							"bg-info"
						],
						[
							"First workflow",
							"864",
							"67%",
							"bg-success"
						],
						[
							"Core feature adopted",
							"618",
							"48%",
							"bg-warning"
						],
						[
							"Converted to paid",
							"509",
							"40%",
							"bg-chart-3"
						]
					].map(([label, count, width, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2.5 rounded-full ${color}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: width
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 h-1.5 rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-full rounded-full ${color}`,
										style: { width }
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "w-10 text-end text-sm",
								children: count
							})
						]
					}, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl border border-success/25 bg-success/8 p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-success",
						children: "Activation insight"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "Teams that invite 3+ members in week one convert 2.4 more often."
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-7",
				title: "Retention cohorts",
				description: "Percentage of customers active after joining",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "heatmap",
					height: 265,
					options: cohortOptions,
					series: [
						{
							name: "Mar cohort",
							data: [
								100,
								94,
								90,
								88,
								87,
								86
							]
						},
						{
							name: "Apr cohort",
							data: [
								100,
								93,
								89,
								87,
								85,
								0
							]
						},
						{
							name: "May cohort",
							data: [
								100,
								95,
								91,
								89,
								0,
								0
							]
						},
						{
							name: "Jun cohort",
							data: [
								100,
								94,
								92,
								0,
								0,
								0
							]
						},
						{
							name: "Jul cohort",
							data: [
								100,
								96,
								0,
								0,
								0,
								0
							]
						}
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-5",
				title: "Product health",
				description: "Signals from the active customer base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						[
							"Weekly active teams",
							"4,982",
							"+11.2%",
							"success"
						],
						[
							"Feature adoption",
							"72.4%",
							"+5.1 pts",
							"success"
						],
						[
							"Support response",
							"8 min",
							"within SLA",
							"info"
						],
						[
							"Open incidents",
							"2",
							"being resolved",
							"warning"
						]
					].map(([label, value, detail, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-2 block text-xl",
								children: value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : "text-info",
								children: detail
							})
						]
					}, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between rounded-xl bg-muted/55 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-lg bg-success/14 text-success",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block text-sm",
							children: "Platform status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "text-xs text-muted-foreground",
							children: "All core systems operational"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "success",
						variant: "dot",
						children: "99.99%"
					})]
				})]
			})]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaasDashboard, {}) });
//#endregion
export { SplitComponent as component };
