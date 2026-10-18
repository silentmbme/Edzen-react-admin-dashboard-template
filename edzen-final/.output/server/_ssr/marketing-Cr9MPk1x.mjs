import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as Plus, F as Target, Gt as MousePointer2, hr as Download, ki as ArrowRight, m as UsersRound, ot as Send, q as Sparkles, tn as Megaphone, yr as Copy } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marketing-Cr9MPk1x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var campaigns = [
	[
		"Autumn product launch",
		"Paid social  Email",
		"$18,420",
		"4.8x",
		"Live",
		"success"
	],
	[
		"Workflow playbook",
		"Content  Organic",
		"$7,860",
		"3.2x",
		"Live",
		"success"
	],
	[
		"Partner co-marketing",
		"Events  Partner",
		"$5,400",
		"2.1x",
		"Review",
		"warning"
	],
	[
		"Enterprise retargeting",
		"Paid search",
		"$12,770",
		"3.9x",
		"Optimizing",
		"info"
	]
];
function MarketingDashboard() {
	const { base } = useChartTheme();
	const [period, setPeriod] = (0, import_react.useState)("This month");
	const [campaignLive, setCampaignLive] = (0, import_react.useState)(true);
	const demandChart = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: {
			type: "area",
			toolbar: { show: false }
		},
		colors: [token("--chart-1"), token("--chart-2")],
		stroke: {
			curve: "smooth",
			width: [3, 2]
		},
		fill: {
			opacity: .18,
			type: "solid"
		},
		xaxis: { categories: [
			"Aug 1",
			"Aug 5",
			"Aug 9",
			"Aug 13",
			"Aug 17",
			"Aug 21",
			"Aug 25",
			"Aug 29"
		] },
		yaxis: { labels: { formatter: (value) => `${Math.round(value / 1e3)}k` } },
		dataLabels: { enabled: false },
		grid: {
			borderColor: token("--border"),
			strokeDashArray: 4
		},
		legend: {
			position: "top",
			horizontalAlign: "left"
		}
	}), [base]);
	const channelChart = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: { type: "donut" },
		labels: [
			"Paid social",
			"Organic",
			"Email",
			"Partners",
			"Direct"
		],
		colors: [
			token("--chart-1"),
			token("--chart-2"),
			token("--chart-3"),
			token("--warning"),
			token("--muted-foreground")
		],
		stroke: {
			colors: [token("--card")],
			width: 4
		},
		legend: { position: "bottom" },
		dataLabels: { enabled: false },
		plotOptions: { pie: { donut: {
			size: "68%",
			labels: {
				show: true,
				total: {
					show: true,
					label: "Qualified leads",
					formatter: () => "2,846"
				}
			}
		} } }
	}), [base]);
	const conversionChart = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: {
			type: "bar",
			toolbar: { show: false }
		},
		colors: [token("--chart-2")],
		plotOptions: { bar: {
			horizontal: true,
			borderRadius: 6,
			barHeight: "54%"
		} },
		xaxis: {
			categories: [
				"Visits",
				"Engaged",
				"Leads",
				"Meetings",
				"Won"
			],
			max: 100,
			labels: { formatter: (value) => `${value}%` }
		},
		dataLabels: {
			enabled: true,
			formatter: (value) => `${value}%`
		},
		grid: {
			borderColor: token("--border"),
			strokeDashArray: 4
		}
	}), [base]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Marketing command center",
			subtitle: "Plan campaigns, measure demand, and turn attention into qualified pipeline.",
			breadcrumb: [
				"Edzen",
				"Dashboards",
				"Marketing"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Reporting period",
					value: period,
					onChange: (event) => setPeriod(event.target.value),
					className: "h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "This month" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Last month" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Quarter to date" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => toast.success("Marketing report exported"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Export"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => toast.success("Campaign draft created"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}), "Create campaign"]
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "reference-hero relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-card xl:col-span-7 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -end-20 -top-20 size-72 rounded-full border-[28px] border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-110px] end-28 size-64 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-between gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "Campaign focus"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 max-w-xl text-3xl text-white font-semibold tracking-tight",
								children: "The autumn launch is building momentum."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-lg text-sm leading-6 text-white/80",
								children: "Audience engagement is 18% above plan. Move the best-performing social segment into the retargeting workflow today."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "bg-white text-primary hover:bg-white/90",
								onClick: () => setCampaignLive((value) => !value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {}), campaignLive ? "Campaign live" : "Resume campaign"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toast.info("Campaign brief copied"),
								className: "inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Copy brief"]
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-5",
				title: "Growth scoreboard",
				description: period,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						[
							"Pipeline influenced",
							"$426K",
							"+14.8%",
							"text-success"
						],
						[
							"Qualified leads",
							"2,846",
							"+9.2%",
							"text-success"
						],
						[
							"Cost per lead",
							"$34.20",
							"6.1%",
							"text-success"
						],
						[
							"Campaign ROI",
							"3.8x",
							"+0.4x",
							"text-primary"
						]
					].map(([label, value, delta, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-muted/20 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xl font-semibold",
								children: value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `mt-1 text-xs font-semibold ${color}`,
								children: [delta, " vs previous period"]
							})
						]
					}, label))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-8",
				title: "Demand momentum",
				description: "Qualified demand generated across acquisition and nurture programs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "area",
					height: 300,
					options: demandChart,
					series: [{
						name: "Pipeline influenced",
						data: [
							26,
							32,
							29,
							43,
							47,
							52,
							61,
							68
						]
					}, {
						name: "Media spend",
						data: [
							18,
							20,
							24,
							26,
							31,
							34,
							38,
							42
						]
					}]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-4",
				title: "Channel quality",
				description: "Where qualified demand begins",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "donut",
					height: 288,
					options: channelChart,
					series: [
						34,
						27,
						18,
						12,
						9
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-7",
				title: "Campaign portfolio",
				description: "Revenue contribution and next optimization action",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y rounded-xl border",
					children: campaigns.map(([name, channel, revenue, roi, status, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-40 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-sm",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "text-xs text-muted-foreground",
									children: channel
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "block text-xs text-muted-foreground",
									children: "Pipeline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: revenue })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "block text-xs text-muted-foreground",
									children: "ROI"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: roi })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone,
								children: status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toast.info(`${name} opened`),
								className: "text-xs font-semibold text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 rtl:rotate-180" })
							})
						]
					}, name))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-5",
				title: "Conversion ladder",
				description: "The journey from attention to revenue",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 255,
					options: conversionChart,
					series: [{
						name: "Conversion",
						data: [
							100,
							62,
							27,
							11,
							4
						]
					}]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid gap-4 xl:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-4",
					title: "Audience signals",
					description: "Segments worth activating now",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Operations leaders",
								"418 engaged accounts",
								"High intent",
								"success",
								UsersRound
							],
							[
								"Scaling SaaS teams",
								"296 product-page returns",
								"Rising",
								"info",
								MousePointer2
							],
							[
								"Agency partners",
								"18 co-sell opportunities",
								"Review",
								"warning",
								Send
							]
						].map(([name, note, status, tone, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toast.info(`${name} audience opened`),
							className: "flex w-full items-center gap-3 rounded-xl border p-3 text-start transition hover:border-primary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block text-sm",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "block truncate text-xs text-muted-foreground",
										children: note
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone,
									children: status
								})
							]
						}, name))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-4",
					title: "Content pulse",
					description: "Assets moving prospects forward",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							[
								"2026 workflow benchmark",
								"1,284 views",
								82
							],
							[
								"Campaign planning template",
								"764 downloads",
								67
							],
							[
								"Operations maturity webinar",
								"413 registrations",
								54
							]
						].map(([title, reach, score]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [score, "%"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: reach
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary",
									style: { width: `${score}%` }
								})
							})
						] }, title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "xl:col-span-4",
					title: "Next marketing moments",
					description: "Important campaign checkpoints",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-4 border-s ps-4",
						children: [
							[
								"Today",
								"Social creative approval",
								"Autumn product launch"
							],
							[
								"Sep 05",
								"Partner briefing",
								"Co-marketing campaign"
							],
							[
								"Sep 09",
								"Nurture sequence review",
								"Workflow playbook"
							],
							[
								"Sep 12",
								"Attribution readout",
								"Growth team"
							]
						].map(([date, event, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -start-[21px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-card" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "text-xs font-semibold text-primary",
									children: date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "mt-1 block text-sm",
									children: event
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "text-xs text-muted-foreground",
									children: detail
								})
							]
						}, event))
					})
				})
			]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingDashboard, {}) });
//#endregion
export { SplitComponent as component };
