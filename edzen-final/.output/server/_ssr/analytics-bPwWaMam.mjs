import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as Plus, Jt as MonitorSmartphone, Wt as MousePointerClick, hr as Download, ii as CalendarDays, m as UsersRound, mr as Earth, qr as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-bPwWaMam.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var days = [
	"Aug 1",
	"Aug 5",
	"Aug 9",
	"Aug 13",
	"Aug 17",
	"Aug 21",
	"Aug 25",
	"Aug 31"
];
function Metric({ icon: Icon, label, value, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "metric-card flex items-center gap-3 border-e border-border px-1 last:border-0 sm:px-4 py-3 rounded",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "icon-tile size-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xl font-semibold",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-success",
				children: trend
			})
		] })]
	});
}
function AnalyticsDashboard() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("Overview");
	const [traffic, setTraffic] = (0, import_react.useState)("All traffic");
	const { base } = useChartTheme();
	const visitors = mergeOptions(base, {
		chart: {
			type: "bar",
			height: 350
		},
		colors: [token("--chart-1"), token("--chart-2")],
		xaxis: { categories: days },
		yaxis: { labels: { formatter: (value) => `${Math.round(value)}k` } },
		stroke: {
			curve: "smooth",
			width: [0, 3]
		},
		plotOptions: { bar: {
			columnWidth: "48%",
			borderRadius: 5
		} },
		markers: {
			size: [0, 4],
			hover: { size: 6 }
		},
		grid: { padding: {
			left: 6,
			right: 12
		} }
	});
	const device = mergeOptions(base, {
		chart: { type: "radar" },
		colors: [token("--chart-1"), token("--chart-2")],
		xaxis: { categories: [
			"Engagement",
			"Pages / visit",
			"Conversion",
			"Speed",
			"Retention"
		] },
		yaxis: { show: false },
		stroke: { width: 2 },
		fill: { opacity: .2 },
		markers: { size: 3 },
		legend: { position: "bottom" }
	});
	const conversion = mergeOptions(base, {
		chart: { type: "bar" },
		colors: [token("--chart-1")],
		plotOptions: { bar: {
			horizontal: true,
			borderRadius: 5,
			barHeight: "54%"
		} },
		xaxis: { categories: [
			"Product page",
			"Pricing",
			"Start trial",
			"Activation"
		] },
		dataLabels: {
			enabled: true,
			formatter: (value) => `${value}%`,
			style: { fontSize: "11px" }
		},
		legend: { show: false },
		grid: { padding: { right: 24 } }
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Analytics",
			subtitle: "See how visitors discover, explore and convert across your product.",
			breadcrumb: [
				"Edzen",
				"Dashboards",
				"Analytics"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Export"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create report"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			bodyClassName: "p-3 sm:p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 lg:flex-row lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1 rounded-lg bg-muted p-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: activeTab === "Overview" ? "default" : "ghost",
							onClick: () => setActiveTab("Overview"),
							children: "Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: activeTab === "Acquisition" ? "default" : "ghost",
							onClick: () => setActiveTab("Acquisition"),
							children: "Acquisition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: activeTab === "Behavior" ? "default" : "ghost",
							onClick: () => setActiveTab("Behavior"),
							children: "Behavior"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: activeTab === "Conversion" ? "default" : "ghost",
							onClick: () => setActiveTab("Conversion"),
							children: "Conversion"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 lg:ms-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "\n                  pointer-events-none\n                  absolute\n                  start-3\n                  top-1/2\n                  size-4\n                  -translate-y-1/2\n                  text-muted-foreground\n                " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: traffic,
								onChange: (event) => setTraffic(event.target.value),
								className: "\n                  h-8\n                  appearance-none\n                  rounded-md\n                  border\n                  bg-background\n                  py-0\n                  ps-9\n                  pe-8\n                  text-xs\n                ",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All traffic" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Organic traffic" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paid traffic" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Referral traffic" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "\n                  pointer-events-none\n                  absolute\n                  end-2\n                  top-1/2\n                  size-3.5\n                  -translate-y-1/2\n                  text-muted-foreground\n                " })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {}), "Aug 131, 2026"]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "mt-4",
			title: "Audience pulse",
			description: "A quick read on this periods web performance",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						icon: UsersRound,
						label: "Visitors",
						value: "84,268",
						trend: "+14.2% vs Jul"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						icon: MousePointerClick,
						label: "Engaged sessions",
						value: "52,614",
						trend: "+8.4% vs Jul"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						icon: MonitorSmartphone,
						label: "Avg. session",
						value: "4m 18s",
						trend: "+9.1% vs Jul"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						icon: Earth,
						label: "Conversion rate",
						value: "4.56%",
						trend: "+0.62 pts vs Jul"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-3",
				title: "Visitors & sessions",
				description: "Daily volume across the selected period",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 350,
					options: visitors,
					series: [{
						name: "Visitors",
						type: "column",
						data: [
							8.4,
							10.8,
							9.6,
							13.2,
							12.1,
							15.8,
							14.3,
							17.6
						]
					}, {
						name: "Sessions",
						type: "line",
						data: [
							6.8,
							8.1,
							7.7,
							10.4,
							9.2,
							12.5,
							11.8,
							13.9
						]
					}]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-2",
				title: "Device engagement profile",
				description: "How desktop and mobile audiences behave",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "radar",
					height: 292,
					options: device,
					series: [{
						name: "Desktop",
						data: [
							78,
							72,
							64,
							82,
							68
						]
					}, {
						name: "Mobile",
						data: [
							62,
							54,
							48,
							58,
							52
						]
					}]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 grid grid-cols-3 gap-2 text-center text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "78"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Desktop score"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "62"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Mobile score"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: "64"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Average score"
						})] })
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-2",
					title: "Acquisition mix",
					description: "Sessions by source",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							[
								"Organic search",
								"32,840",
								68,
								"bg-primary"
							],
							[
								"Direct",
								"18,920",
								52,
								"bg-chart-2"
							],
							[
								"Paid social",
								"14,482",
								36,
								"bg-chart-3"
							],
							[
								"Partner referrals",
								"8,604",
								22,
								"bg-chart-4"
							]
						].map(([name, count, width, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: count
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full ${color}`,
								style: { width: `${width}%` }
							})
						})] }, name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-2",
					title: "Conversion funnel",
					description: "Visitors advancing through the product journey",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "bar",
						height: 260,
						options: conversion,
						series: [{
							name: "Conversion",
							data: [
								100,
								64,
								31,
								18
							]
						}]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-2",
					title: "Browser distribution",
					description: "Browser share and experience quality",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Chrome",
								"62%",
								"Excellent"
							],
							[
								"Safari",
								"19%",
								"Excellent"
							],
							[
								"Edge",
								"11%",
								"Good"
							],
							[
								"Firefox",
								"5%",
								"Good"
							]
						].map(([browser, share, status]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: browser
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [share, " of traffic"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: status === "Excellent" ? "success" : "info",
								children: status
							})]
						}, browser))
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-3",
				title: "Top pages",
				description: "Content attracting the most qualified audience",
				bodyClassName: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "vexui-table min-w-[620px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Page" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Views" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Engagement" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Conversions" })
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
							[
								"/workspace/overview",
								"18,482",
								"68.4%",
								"842"
							],
							[
								"/solutions/teams",
								"12,946",
								"54.1%",
								"486"
							],
							[
								"/pricing",
								"8,254",
								"42.8%",
								"392"
							],
							[
								"/resources/report",
								"6,812",
								"61.2%",
								"184"
							]
						].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: index === 0 ? "font-medium" : "text-muted-foreground",
							children: cell
						}, cell)) }, row[0])) })]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-2",
				title: "Top locations",
				description: "Visitor volume by market",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						[
							"United States",
							"24,680",
							"29%"
						],
						[
							"United Kingdom",
							"11,240",
							"13%"
						],
						[
							"Germany",
							"8,920",
							"11%"
						],
						[
							"Singapore",
							"6,482",
							"8%"
						]
					].map(([country, visitors, share], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
								children: index + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: country
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [share, " of total visitors"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: visitors
							})
						]
					}, country))
				})
			})]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsDashboard, {}) });
//#endregion
export { SplitComponent as component };
