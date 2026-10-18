import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Bi as Activity, Di as ArrowUpRight, F as Target, Gr as ChevronRight, Ii as ArrowDownRight, Jr as Check, Mr as Clock3, Yn as Gauge, hr as Download, ii as CalendarDays, ir as FileText, n as Zap, pi as Bot, q as Sparkles, s as WandSparkles, vr as Cpu, wr as Coins, xn as Layers, zr as CircleDollarSign } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { i as SelectItem, n as SelectContent, o as SelectTrigger, s as SelectValue, t as Select } from "./select-DtJbsb0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-analytics-Wd4PKsMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AI_MODELS = [
	{
		id: "atlas-pro",
		name: "Atlas Pro",
		category: "Reasoning & analysis",
		requests: 48260,
		tokens: 186e5,
		cost: 486.2,
		latency: 1.24,
		success: 99.8,
		change: 18.4,
		color: "--primary",
		status: "Healthy"
	},
	{
		id: "atlas-mini",
		name: "Atlas Mini",
		category: "Fast text generation",
		requests: 72480,
		tokens: 242e5,
		cost: 168.4,
		latency: .42,
		success: 99.9,
		change: 24.8,
		color: "--chart-2",
		status: "Healthy"
	},
	{
		id: "vision-one",
		name: "Vision One",
		category: "Image understanding",
		requests: 18420,
		tokens: 98e5,
		cost: 294.6,
		latency: 2.18,
		success: 98.6,
		change: 12.6,
		color: "--chart-3",
		status: "Elevated latency"
	},
	{
		id: "embed-v2",
		name: "Embed v2",
		category: "Search & retrieval",
		requests: 32640,
		tokens: 84e5,
		cost: 42.8,
		latency: .18,
		success: 99.9,
		change: 8.2,
		color: "--chart-4",
		status: "Healthy"
	}
];
var DAILY_WEIGHTS = [
	.64,
	.78,
	.72,
	.92,
	.81,
	.96,
	.88,
	1.04,
	.94,
	1.12,
	1.08,
	1.24
];
function getAiAnalytics(period, modelId) {
	const factor = Number(period) / 30;
	const models = AI_MODELS.filter((model) => modelId === "all" || model.id === modelId).map((model) => ({
		...model,
		requests: Math.round(model.requests * factor),
		tokens: Math.round(model.tokens * factor),
		cost: Math.round(model.cost * factor * 100) / 100
	}));
	const requests = models.reduce((sum, model) => sum + model.requests, 0);
	const tokens = models.reduce((sum, model) => sum + model.tokens, 0);
	const cost = models.reduce((sum, model) => sum + model.cost, 0);
	const latency = models.reduce((sum, model) => sum + model.latency * model.requests, 0) / (requests || 1);
	const success = models.reduce((sum, model) => sum + model.success * model.requests, 0) / (requests || 1);
	const change = models.reduce((sum, model) => sum + model.change * model.requests, 0) / (requests || 1);
	const buckets = period === "7" ? 7 : 12;
	const weights = DAILY_WEIGHTS.slice(0, buckets);
	const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);
	const requestSeries = weights.map((weight) => Math.floor(weight / weightTotal * requests));
	requestSeries[buckets - 1] = (requestSeries[buckets - 1] ?? 0) + requests - requestSeries.reduce((sum, value) => sum + value, 0);
	const labels = weights.map((_, index) => {
		const offset = Math.round((buckets - 1 - index) * (Number(period) - 1) / (buckets - 1));
		return new Date(Date.UTC(2026, 9, 9 - offset)).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			timeZone: "UTC"
		});
	});
	const tokenSeries = requestSeries.map((value) => Math.floor(value * tokens / (requests || 1)));
	tokenSeries[buckets - 1] = (tokenSeries[buckets - 1] ?? 0) + tokens - tokenSeries.reduce((sum, value) => sum + value, 0);
	const failedRequests = Math.round(requests * (1 - success / 100));
	const failedSeries = requestSeries.map((value) => Math.floor(value * (1 - success / 100)));
	failedSeries[buckets - 1] = (failedSeries[buckets - 1] ?? 0) + failedRequests - failedSeries.reduce((sum, value) => sum + value, 0);
	const inputTokens = Math.round(tokens * .6);
	const cachedTokens = Math.round(tokens * .12);
	const outputTokens = tokens - inputTokens - cachedTokens;
	const inputTokenSeries = tokenSeries.map((value) => Math.floor(value * .6));
	const cachedTokenSeries = tokenSeries.map((value) => Math.floor(value * .12));
	inputTokenSeries[buckets - 1] = (inputTokenSeries[buckets - 1] ?? 0) + inputTokens - inputTokenSeries.reduce((sum, value) => sum + value, 0);
	cachedTokenSeries[buckets - 1] = (cachedTokenSeries[buckets - 1] ?? 0) + cachedTokens - cachedTokenSeries.reduce((sum, value) => sum + value, 0);
	const outputTokenSeries = tokenSeries.map((value, index) => value - (inputTokenSeries[index] ?? 0) - (cachedTokenSeries[index] ?? 0));
	const activityWeights = [
		.56,
		.8,
		1.12,
		1.34,
		1.06,
		.72
	];
	const dayWeights = [
		1.08,
		1.2,
		1.16,
		1.24,
		1.1,
		.62,
		.48
	];
	const activityTotal = activityWeights.reduce((sum, weight) => sum + weight, 0) * dayWeights.reduce((sum, weight) => sum + weight, 0);
	const activity = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	].map((name, day) => ({
		name,
		data: activityWeights.map((weight, index) => ({
			x: [
				"00–04",
				"04–08",
				"08–12",
				"12–16",
				"16–20",
				"20–24"
			][index] ?? "",
			y: Math.floor(requests * weight * (dayWeights[day] ?? 1) / activityTotal)
		}))
	}));
	const lastActivity = activity[6]?.data[5];
	if (lastActivity) lastActivity.y += requests - activity.reduce((sum, day) => sum + day.data.reduce((total, point) => total + point.y, 0), 0);
	return {
		models,
		requests,
		tokens,
		cost,
		latency,
		success,
		change,
		requestSeries,
		tokenSeries,
		failedRequests,
		failedSeries,
		inputTokens,
		outputTokens,
		cachedTokens,
		inputTokenSeries,
		cachedTokenSeries,
		outputTokenSeries,
		activity,
		labels
	};
}
var AI_WORKLOADS = [
	{
		id: "RUN-2048",
		modelId: "atlas-pro",
		name: "Weekly research summary",
		category: "Document analysis",
		tokens: 12480,
		duration: "1.4s",
		status: "Completed",
		time: "Oct 9, 14:32"
	},
	{
		id: "RUN-2047",
		modelId: "atlas-mini",
		name: "Support reply generation",
		category: "Customer experience",
		tokens: 3240,
		duration: "0.4s",
		status: "Completed",
		time: "Oct 9, 14:28"
	},
	{
		id: "RUN-2046",
		modelId: "vision-one",
		name: "Product image classification",
		category: "Image processing",
		tokens: 8160,
		duration: "3.1s",
		status: "Retried",
		time: "Oct 9, 14:21"
	},
	{
		id: "RUN-2045",
		modelId: "embed-v2",
		name: "Knowledge base indexing",
		category: "Semantic search",
		tokens: 28600,
		duration: "0.2s",
		status: "Completed",
		time: "Oct 9, 14:18"
	},
	{
		id: "RUN-2044",
		modelId: "atlas-pro",
		name: "Quarterly forecast review",
		category: "Financial analysis",
		tokens: 18920,
		duration: "1.6s",
		status: "Completed",
		time: "Oct 9, 14:12"
	}
];
function formatAiNumber(value) {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(value);
}
function formatAiCost(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 2
	}).format(value);
}
function Metric({ label, value, icon, detail, trend }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "metric-card vexui-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "metric-icon grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[28px] font-semibold tracking-tight tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-md bg-success/10 px-1.5 py-1 font-medium text-success",
					children: trend
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: detail
				})]
			})
		]
	});
}
function AiAnalyticsDashboard() {
	const [period, setPeriod] = (0, import_react.useState)("30");
	const [modelId, setModelId] = (0, import_react.useState)("all");
	const [chartMetric, setChartMetric] = (0, import_react.useState)("requests");
	const [selectedModel, setSelectedModel] = (0, import_react.useState)(null);
	const [monthlyBudget, setMonthlyBudget] = (0, import_react.useState)("1000");
	const { base } = useChartTheme();
	const data = getAiAnalytics(period, modelId);
	const selected = data.models.find((model) => model.id === selectedModel?.id);
	const usageSeries = chartMetric === "requests" ? [{
		name: "Successful",
		data: data.requestSeries.map((value, index) => value - (data.failedSeries[index] ?? 0))
	}, {
		name: "Failed",
		data: data.failedSeries
	}] : [
		{
			name: "Input",
			data: data.inputTokenSeries
		},
		{
			name: "Output",
			data: data.outputTokenSeries
		},
		{
			name: "Cached",
			data: data.cachedTokenSeries
		}
	];
	const periodBudget = Number(monthlyBudget) * Number(period) / 30;
	const budgetPercent = data.cost / periodBudget * 100;
	const workloads = AI_WORKLOADS.filter((workload) => modelId === "all" || workload.modelId === modelId);
	const usageOptions = mergeOptions(base, {
		colors: chartMetric === "requests" ? [token("--chart-1"), token("--warning")] : [
			token("--chart-1"),
			token("--chart-2"),
			token("--chart-3")
		],
		chart: {
			type: "bar",
			stacked: true
		},
		stroke: { width: 0 },
		fill: {
			type: "solid",
			opacity: 1
		},
		plotOptions: { bar: {
			columnWidth: "42%",
			borderRadius: 4,
			borderRadiusApplication: "end",
			borderRadiusWhenStacked: "last"
		} },
		legend: {
			show: true,
			position: "top",
			horizontalAlign: "left"
		},
		xaxis: {
			categories: data.labels,
			tickAmount: 6
		},
		yaxis: { labels: { formatter: formatAiNumber } },
		tooltip: { y: { formatter: (value) => value.toLocaleString("en-US") } }
	});
	const distributionOptions = mergeOptions(base, {
		colors: data.models.map((model) => token(model.color)),
		chart: { type: "bar" },
		plotOptions: { bar: {
			horizontal: true,
			distributed: true,
			barHeight: "38%",
			borderRadius: 5
		} },
		stroke: { width: 0 },
		fill: {
			type: "solid",
			opacity: .95
		},
		legend: { show: false },
		xaxis: {
			categories: data.models.map((model) => model.name),
			tickAmount: 3,
			labels: { formatter: (value) => formatAiCost(Number(value)) }
		},
		yaxis: { labels: { maxWidth: 90 } },
		grid: {
			padding: {
				left: 0,
				right: 12
			},
			xaxis: { lines: { show: true } },
			yaxis: { lines: { show: false } }
		},
		tooltip: { y: { formatter: formatAiCost } }
	});
	const latencyOptions = mergeOptions(base, {
		colors: [token("--chart-1"), token("--chart-2")],
		stroke: {
			curve: "smooth",
			width: [3, 2],
			dashArray: [0, 5]
		},
		xaxis: {
			categories: data.labels,
			tickAmount: 5
		},
		yaxis: {
			min: 0,
			labels: { formatter: (value) => value.toFixed(1) + "s" }
		},
		legend: {
			position: "top",
			horizontalAlign: "left"
		},
		tooltip: { y: { formatter: (value) => value.toFixed(2) + " seconds" } }
	});
	const heatmapOptions = mergeOptions(base, {
		colors: [token("--chart-1")],
		stroke: {
			width: 3,
			colors: [token("--card")]
		},
		plotOptions: { heatmap: {
			radius: 5,
			shadeIntensity: .65,
			colorScale: {
				min: 0,
				max: Math.max(...data.activity.flatMap((day) => day.data.map((point) => point.y)))
			}
		} },
		dataLabels: { enabled: false },
		legend: { show: false },
		xaxis: {
			labels: {
				rotate: 0,
				style: { fontSize: "10px" }
			},
			tooltip: { enabled: false }
		},
		yaxis: { labels: { style: { fontSize: "11px" } } },
		grid: {
			show: false,
			padding: {
				left: 0,
				right: 0
			}
		},
		tooltip: { y: { formatter: (value) => value.toLocaleString("en-US") + " requests" } }
	});
	const budgetOptions = mergeOptions(base, {
		colors: [token(budgetPercent >= 100 ? "--destructive" : "--primary")],
		labels: ["Budget used"],
		stroke: { lineCap: "round" },
		plotOptions: { radialBar: {
			startAngle: -125,
			endAngle: 125,
			hollow: { size: "70%" },
			track: {
				background: token("--muted"),
				strokeWidth: "100%"
			},
			dataLabels: {
				name: {
					fontSize: "12px",
					offsetY: 24
				},
				value: {
					fontSize: "28px",
					fontWeight: 600,
					offsetY: -15,
					formatter: () => budgetPercent.toFixed(1) + "%"
				}
			}
		} }
	});
	function exportReport() {
		const csv = [[
			"Model",
			"Period (days)",
			"Requests",
			"Tokens",
			"Cost (USD)",
			"Latency (seconds)",
			"Success rate (%)"
		], ...data.models.map((model) => [
			model.name,
			period,
			model.requests,
			model.tokens,
			model.cost.toFixed(2),
			model.latency,
			model.success
		])].map((row) => row.map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `ai-analytics-${modelId}-${period}-days.csv`;
		anchor.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "AI Analytics",
			subtitle: "A clearer view of your AI usage, performance, and spend.",
			breadcrumb: ["Dashboards", "AI Analytics"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: period,
				onValueChange: (value) => setPeriod(value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger, {
					className: "h-10 w-[166px] bg-card",
					"aria-label": "Analytics period",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "me-2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "7",
						children: "Last 7 days"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "30",
						children: "Last 30 days"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "90",
						children: "Last 90 days"
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportReport,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export report"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 shrink-0 place-items-center rounded-xl border border-primary/20 bg-card text-primary shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Your AI workspace, at a glance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "primary",
						size: "sm",
						children: "Sample data"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-[13px] text-muted-foreground",
					children: [
						data.models.length,
						" ",
						data.models.length === 1 ? "model" : "models",
						" in view ·",
						" ",
						data.success.toFixed(1),
						"% successful requests · Period ending Oct 9, 2026"
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: modelId,
				onValueChange: setModelId,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-10 w-full bg-card sm:w-[180px]",
					"aria-label": "Filter AI model",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: "All models"
				}), AI_MODELS.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: model.id,
					children: model.name
				}, model.id))] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Total requests",
					value: formatAiNumber(data.requests),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-5" }),
					trend: `↗ ${data.change.toFixed(1)}%`,
					detail: "vs. previous period"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Tokens processed",
					value: formatAiNumber(data.tokens),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" }),
					trend: `${Math.round(data.tokens / (data.requests || 1))} tokens`,
					detail: "average per request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Total AI spend",
					value: formatAiCost(data.cost),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, { className: "size-5" }),
					trend: formatAiCost(data.cost / (data.requests || 1) * 1e3),
					detail: "per 1,000 requests"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: "Average latency",
					value: `${data.latency.toFixed(2)}s`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-5" }),
					trend: `${data.success.toFixed(1)}%`,
					detail: "request success rate"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "AI usage over time",
				description: `Request and token volume over the last ${period} days`,
				className: "xl:col-span-2",
				bodyClassName: "px-3 pb-3 pt-5",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 rounded-lg bg-muted p-1",
					children: ["requests", "tokens"].map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": chartMetric === metric,
						onClick: () => setChartMetric(metric),
						className: `rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors ${chartMetric === metric ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
						children: metric
					}, metric))
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-baseline gap-2 px-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-semibold tabular-nums",
							children: formatAiNumber(chartMetric === "requests" ? data.requests : data.tokens)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: ["total ", chartMetric]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ms-auto inline-flex items-center gap-1 text-xs font-medium text-success",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" }),
								data.change.toFixed(1),
								"%"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 285,
					options: usageOptions,
					series: usageSeries
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Spend by model",
				description: "Compare the cost of each AI model",
				bodyClassName: "px-5 pb-5 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 235,
					options: distributionOptions,
					series: [{
						name: "Spend",
						data: data.models.map((model) => model.cost)
					}]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: data.models.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2.5 rounded-full",
								style: { backgroundColor: `var(${model.color})` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: model.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ms-auto font-semibold tabular-nums",
								children: [(model.cost / (data.cost || 1) * 100).toFixed(1), "%"]
							})
						]
					}, model.id))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Daily throughput",
					value: formatAiNumber(Math.round(data.requests / Number(period))),
					note: "requests per day",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5" }),
					tone: "bg-primary/10 text-primary"
				},
				{
					label: "Cached tokens",
					value: formatAiNumber(data.cachedTokens),
					note: "12% of processed tokens",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" }),
					tone: "bg-info/10 text-info"
				},
				{
					label: "Estimated cache savings",
					value: formatAiCost(data.cost * .12),
					note: "at the average token rate",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-5" }),
					tone: "bg-success/10 text-success"
				},
				{
					label: "Failed requests",
					value: formatAiNumber(data.failedRequests),
					note: `${(100 - data.success).toFixed(2)}% of total requests`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" }),
					tone: "bg-warning/10 text-warning"
				}
			].map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "metric-card vexui-card flex items-center gap-4 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `metric-icon grid size-11 shrink-0 place-items-center rounded-xl ${metric.tone}`,
					children: metric.icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: metric.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xl font-semibold tabular-nums",
						children: metric.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted-foreground",
						children: metric.note
					})
				] })]
			}, metric.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Response time trends",
					description: "Sample average and tail latency",
					bodyClassName: "px-3 pb-2 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-semibold",
							children: [data.latency.toFixed(2), "s"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "weighted average"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "line",
						height: 250,
						options: latencyOptions,
						series: [{
							name: "Average",
							data: data.labels.map((_, index) => Number((data.latency * (1 + Math.sin(index * 1.8) * .12)).toFixed(2)))
						}, {
							name: "P95 (sample)",
							data: data.labels.map((_, index) => Number((data.latency * (1.85 + Math.cos(index * 1.2) * .18)).toFixed(2)))
						}]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Request activity",
					description: `Requests grouped by weekday and hour over ${period} days`,
					bodyClassName: "px-3 pb-4 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "heatmap",
						height: 265,
						options: heatmapOptions,
						series: data.activity
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-2 px-3 text-[11px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Less" }),
							[
								.15,
								.3,
								.5,
								.7,
								1
							].map((opacity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-3 rounded-sm bg-primary",
								style: { opacity }
							}, opacity)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "More requests" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "AI spend budget",
					description: "Manage your sample spending target",
					className: "md:col-span-2 xl:col-span-1",
					bodyClassName: "px-5 pb-5 pt-2",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-4 text-muted-foreground" }),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
							type: "radialBar",
							height: 205,
							options: budgetOptions,
							series: [Math.min(budgetPercent, 100)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 grid grid-cols-2 gap-3 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: "Spent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base font-semibold",
								children: formatAiCost(data.cost)
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: budgetPercent > 100 ? "Over budget" : "Remaining"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-base font-semibold ${budgetPercent > 100 ? "text-destructive" : "text-success"}`,
								children: formatAiCost(Math.abs(periodBudget - data.cost))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "ai-monthly-budget",
								className: "text-xs text-muted-foreground",
								children: "Monthly target"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: monthlyBudget,
								onValueChange: setMonthlyBudget,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "ai-monthly-budget",
									className: "h-8 w-[110px]",
									"aria-label": "Monthly AI budget",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
									"500",
									"1000",
									"2000",
									"5000"
								].map((amount) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: amount,
									children: formatAiCost(Number(amount))
								}, amount)) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-[11px] text-muted-foreground",
							children: [
								"Target adjusted to ",
								formatAiCost(periodBudget),
								" for ",
								period,
								" days."
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Token breakdown",
				description: "Understand where your tokens go",
				bodyClassName: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-semibold",
							children: formatAiNumber(data.tokens)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "total processed tokens"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex h-3 overflow-hidden rounded-full",
						"aria-label": "Token mix: 60% input, 28% output, 12% cached",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[60%] bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[28%] bg-chart-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[12%] bg-chart-3" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							{
								label: "Input tokens",
								value: data.inputTokens,
								percent: "60%",
								color: "bg-primary"
							},
							{
								label: "Output tokens",
								value: data.outputTokens,
								percent: "28%",
								color: "bg-chart-2"
							},
							{
								label: "Cached tokens",
								value: data.cachedTokens,
								percent: "12%",
								color: "bg-chart-3"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2.5 rounded-full ${item.color}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: item.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ms-auto font-semibold",
									children: formatAiNumber(item.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-9 text-end text-muted-foreground",
									children: item.percent
								})
							]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-2 rounded-lg bg-success/5 p-3 text-xs text-success",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cached context helps reduce repeated processing." })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Recent AI workloads",
				description: "Sample runs from October 9, 2026",
				className: "xl:col-span-2",
				bodyClassName: "p-0",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "primary",
					size: "sm",
					children: [workloads.length, " runs"]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: workloads.map((workload) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 px-5 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[13px] font-medium",
									children: workload.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[11px] text-muted-foreground",
									children: [
										AI_MODELS.find((model) => model.id === workload.modelId)?.name,
										" ",
										"· ",
										workload.time
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden text-end sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium",
									children: [formatAiNumber(workload.tokens), " tokens"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] text-muted-foreground",
									children: workload.duration
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: workload.status === "Completed" ? "success" : "warning",
								size: "sm",
								children: workload.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `View model for ${workload.name}`,
								onClick: () => setSelectedModel(AI_MODELS.find((model) => model.id === workload.modelId) ?? null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 rtl:rotate-180" })
							})
						]
					}, workload.id))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[15px] font-semibold",
					children: "Workspace insights"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ms-auto text-xs text-muted-foreground",
					children: "Based on the selected sample"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" }),
					title: "Usage is growing",
					tone: "bg-primary/10 text-primary",
					description: `Request volume is up ${data.change.toFixed(1)}% compared with the previous period. Track capacity as your AI workflows scale.`,
					footer: `${data.requests.toLocaleString("en-US")} requests processed`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-5" }),
					title: "Keep an eye on cost",
					tone: "bg-success/10 text-success",
					description: `Your average cost is ${formatAiCost(data.cost / (data.requests || 1) * 1e3)} per 1,000 requests. Route simple tasks to smaller models to keep spend predictable.`,
					footer: `${formatAiCost(data.cost / Number(period))} average daily spend`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insight, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" }),
					title: "Quality stays consistent",
					tone: "bg-info/10 text-info",
					description: `${data.success.toFixed(1)}% of requests completed successfully. ${data.models.some((model) => model.status === "Elevated latency") ? "Vision One has elevated latency; review image sizes and request complexity." : "All selected models are operating within their latency targets."}`,
					footer: `${data.latency.toFixed(2)}s weighted average response`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Model performance",
			description: "Compare usage, reliability, and cost across your AI models",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				tone: "primary",
				children: [data.models.length, " models"]
			}),
			bodyClassName: "p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "ps-5",
					children: "Model"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Requests" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Tokens" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Avg. latency" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Success rate" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Cost" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "pe-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Details"
					})
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: data.models.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "ps-5 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 shrink-0 place-items-center rounded-lg bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
								className: "size-4",
								style: { color: `var(${model.color})` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap text-[13px] font-semibold",
							children: model.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 whitespace-nowrap text-xs text-muted-foreground",
							children: model.category
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "tabular-nums",
					children: formatAiNumber(model.requests)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "tabular-nums",
					children: formatAiNumber(model.tokens)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					className: "tabular-nums",
					children: [model.latency.toFixed(2), "s"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-success",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }),
						model.success,
						"%"
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-medium tabular-nums",
					children: formatAiCost(model.cost)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: model.status === "Healthy" ? "success" : "warning",
					size: "sm",
					children: model.status
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "pe-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": `View ${model.name} details`,
						onClick: () => setSelectedModel(AI_MODELS.find((item) => item.id === model.id) ?? null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 rtl:rotate-180" })
					})
				})
			] }, model.id)) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 py-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Showing ",
					data.models.length,
					" of ",
					AI_MODELS.length,
					" models"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5" }),
						"Sample reporting period · Last ",
						period,
						" days"
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: selectedModel !== null,
			onOpenChange: (open) => {
				if (!open) setSelectedModel(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [selectedModel?.name, " performance"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"Sample analytics for the last ",
				period,
				" days, ending October 9, 2026."
			] })] }), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						["Requests", selected.requests.toLocaleString("en-US")],
						["Tokens", formatAiNumber(selected.tokens)],
						["Total cost", formatAiCost(selected.cost)],
						["Success rate", `${selected.success}%`]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-muted/30 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg font-semibold",
							children: value
						})]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg bg-primary/5 p-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Average response time:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [selected.latency.toFixed(2), "s"] })
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						selected.category,
						".",
						" ",
						selected.status === "Healthy" ? "This model is operating within its latency target." : "Review image input sizes and request complexity to reduce response time."
					]
				})
			] })] })
		})
	] });
}
function Insight({ icon, title, description, footer, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vexui-card flex flex-col p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `grid size-9 shrink-0 place-items-center rounded-lg ${tone}`,
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "flex-1 text-[13px] leading-relaxed text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 border-t border-border pt-3 text-xs font-medium",
				children: footer
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiAnalyticsDashboard, {}) });
//#endregion
export { SplitComponent as component };
