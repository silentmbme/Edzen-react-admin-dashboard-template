import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as Truck, Rt as Package, Yr as CheckCheck, hr as Download, rn as MapPin, st as Search } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LogisticsDashboard-CoIITaOU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialShipments = [
	{
		id: "SHP-1001",
		customer: "Northstar Retail",
		origin: "Mumbai",
		destination: "Pune",
		status: "In transit",
		weight: 240,
		driver: "Daniel Lee",
		vehicle: "TRK-01",
		eta: "October 10, 2026",
		progress: 65
	},
	{
		id: "SHP-1002",
		customer: "Greenfield Foods",
		origin: "Bengaluru",
		destination: "Chennai",
		status: "Delivered",
		weight: 180,
		driver: "Sophia Carter",
		vehicle: "TRK-02",
		eta: "October 9, 2026",
		progress: 100
	},
	{
		id: "SHP-1003",
		customer: "Atlas Supplies",
		origin: "Delhi",
		destination: "Jaipur",
		status: "Pending",
		weight: 360,
		driver: "James Wilson",
		vehicle: "TRK-03",
		eta: "October 11, 2026",
		progress: 0
	},
	{
		id: "SHP-1004",
		customer: "Urban Living",
		origin: "Hyderabad",
		destination: "Vijayawada",
		status: "Delayed",
		weight: 120,
		driver: "Maya Patel",
		vehicle: "TRK-04",
		eta: "October 11, 2026",
		progress: 40
	},
	{
		id: "SHP-1005",
		customer: "Summit Electronics",
		origin: "Mumbai",
		destination: "Nashik",
		status: "In transit",
		weight: 210,
		driver: "Olivia Smith",
		vehicle: "TRK-05",
		eta: "October 10, 2026",
		progress: 80
	},
	{
		id: "SHP-1006",
		customer: "Cedar Trading",
		origin: "Delhi",
		destination: "Agra",
		status: "Delivered",
		weight: 150,
		driver: "Noah Williams",
		vehicle: "TRK-06",
		eta: "October 9, 2026",
		progress: 100
	}
];
function LogisticsDashboardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		navigationPath: "/dashboards/logistics-dashboard",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogisticsDashboard, {})
	});
}
function LogisticsDashboard() {
	const [shipments, setShipments] = (0, import_react.useState)(initialShipments);
	const [query, setQuery] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const visible = shipments.filter((s) => (status === "All" || s.status === status) && `${s.id} ${s.customer} ${s.origin} ${s.destination}`.toLowerCase().includes(query.toLowerCase()));
	const statuses = [
		"Pending",
		"In transit",
		"Delayed",
		"Delivered"
	];
	const { base } = useChartTheme();
	const distribution = mergeOptions(base, {
		labels: statuses,
		colors: [
			token("--chart-2"),
			token("--chart-1"),
			token("--chart-4"),
			token("--success")
		],
		stroke: {
			width: 2,
			colors: [token("--card")]
		},
		fill: { opacity: .8 },
		plotOptions: { polarArea: {
			rings: {
				strokeWidth: 1,
				strokeColor: token("--border")
			},
			spokes: {
				strokeWidth: 1,
				connectorColors: token("--border")
			}
		} },
		yaxis: {
			min: 0,
			labels: { show: false }
		},
		legend: {
			show: true,
			position: "bottom"
		},
		dataLabels: { enabled: false },
		tooltip: { y: { formatter: (value) => value + " shipments" } }
	});
	const loadOptions = mergeOptions(base, {
		colors: [token("--chart-1"), token("--chart-2")],
		stroke: {
			width: [0, 3],
			curve: "smooth"
		},
		markers: { size: [0, 4] },
		plotOptions: { bar: {
			columnWidth: "30%",
			borderRadius: 5
		} },
		xaxis: { categories: visible.map((s) => s.id.replace("SHP-", "")) },
		yaxis: [{
			seriesName: "Cargo weight",
			min: 0,
			labels: { formatter: (v) => Math.round(v) + " kg" }
		}, {
			seriesName: "Route progress",
			opposite: true,
			min: 0,
			max: 100,
			labels: { formatter: (v) => Math.round(v) + "%" }
		}],
		legend: {
			position: "top",
			horizontalAlign: "left"
		},
		tooltip: {
			shared: true,
			intersect: false
		}
	});
	function exportReport() {
		const csv = [[
			"Shipment",
			"Customer",
			"Origin",
			"Destination",
			"Status",
			"Weight kg",
			"Progress %"
		], ...visible.map((s) => [
			s.id,
			s.customer,
			s.origin,
			s.destination,
			s.status,
			s.weight,
			s.progress
		])].map((row) => row.map((v) => `"${String(v).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const a = document.createElement("a");
		a.href = url;
		a.download = "logistics-shipments.csv";
		a.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	function deliver(id) {
		setShipments((current) => current.map((s) => s.id === id ? {
			...s,
			status: "Delivered",
			progress: 100
		} : s));
		setSelected(null);
		toast.success("Sample shipment marked delivered");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Logistics Dashboard",
			subtitle: "Keep shipments, routes, and fleet operations moving.",
			breadcrumb: ["Dashboards", "Logistics"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportReport,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export shipments"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Every shipment. One clear view."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Sample operations · October 9, 2026 · Session-only updates"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "primary",
				children: "Demo tracking"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Shipments in view",
					value: visible.length,
					icon: Package,
					color: "--primary",
					note: "Matching your current filters"
				},
				{
					label: "In transit",
					value: visible.filter((s) => s.status === "In transit").length,
					icon: Truck,
					color: "--info",
					note: "Shipments moving toward destination"
				},
				{
					label: "Delivered",
					value: visible.filter((s) => s.status === "Delivered").length,
					icon: CheckCheck,
					color: "--success",
					note: "Completed sample deliveries"
				},
				{
					label: "Needs attention",
					value: visible.filter((s) => s.status === "Delayed").length,
					icon: MapPin,
					color: "--warning",
					note: "Delayed shipments to review"
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "metric-card vexui-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: m.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-3xl font-semibold",
						children: m.value
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "metric-icon grid size-12 place-items-center rounded-xl",
						style: {
							color: `var(${m.color})`,
							background: `color-mix(in oklch,var(${m.color}) 12%,transparent)`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "size-6" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground",
					children: m.note
				})]
			}, m.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Cargo & route progress",
				description: "Weight in kilograms and progress percentage by shipment",
				className: "xl:col-span-2",
				children: visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 300,
					options: loadOptions,
					series: [{
						name: "Cargo weight",
						type: "column",
						data: visible.map((s) => s.weight)
					}, {
						name: "Route progress",
						type: "area",
						data: visible.map((s) => s.progress)
					}]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-20 text-center text-sm text-muted-foreground",
					children: "No shipments match your filters."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Shipment status",
				description: "Current distribution in your filtered view",
				children: visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "polarArea",
					height: 300,
					options: distribution,
					series: statuses.map((status) => visible.filter((s) => s.status === status).length)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-20 text-center text-sm text-muted-foreground",
					children: "No shipments in view."
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			title: "Shipment tracking",
			description: `${visible.length} shipments in view`,
			className: "mb-6",
			bodyClassName: "p-0",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"aria-label": "Search shipments",
						className: "ps-9 sm:w-56",
						placeholder: "Search ID, customer, or city…",
						value: query,
						onChange: (e) => setQuery(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Shipment status",
					value: status,
					onChange: (e) => setStatus(e.target.value),
					className: "rounded-lg border border-border bg-card px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }), statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
				})]
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
				"Shipment",
				"Route",
				"Status",
				"Cargo",
				"ETA",
				""
			].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, i)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: s.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: s.customer
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs",
					children: [
						s.origin,
						" → ",
						s.destination
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 w-32 rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary",
						style: { width: s.progress + "%" }
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: s.status === "Delivered" ? "success" : s.status === "Delayed" ? "warning" : "primary",
					children: s.status
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [s.weight, " kg"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-xs",
					children: s.eta
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					"aria-label": `Track ${s.id}`,
					onClick: () => setSelected(s),
					children: "Track"
				}) })
			] }, s.id)), !visible.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 6,
				className: "py-8 text-center text-muted-foreground",
				children: "No matching shipments."
			}) })] })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Fleet overview",
				description: "Vehicles assigned to shipments in view",
				className: "xl:col-span-2",
				bodyClassName: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: s.vehicle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.driver
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex justify-between gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									s.origin,
									" / ",
									s.destination
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [s.progress, "%"] })]
						})]
					}, s.vehicle))
				}), !visible.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No assigned vehicles in view."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Dispatch checklist",
				description: "Sample daily operations",
				bodyClassName: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						"Review delayed shipments",
						"Confirm driver assignments",
						"Check cargo documentation",
						"Prepare next-day dispatch"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4 accent-primary"
						}), item]
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 rounded-lg bg-primary/5 p-3 text-xs leading-5 text-muted-foreground",
					children: "Tracking details are sample records. No live GPS or carrier connection is configured."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Delivery performance",
					description: "Current filtered shipments",
					bodyClassName: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-14 place-items-center rounded-2xl bg-success/10 text-success",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "size-7" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-3xl font-semibold",
								children: [visible.length ? Math.round(visible.filter((s) => s.status === "Delivered").length / visible.length * 100) : 0, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Shipments completed"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 h-2 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-success",
								style: { width: (visible.length ? visible.filter((s) => s.status === "Delivered").length / visible.length * 100 : 0) + "%" }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg font-semibold",
								children: [visible.reduce((sum, s) => sum + s.weight, 0), " kg"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: "Total cargo in view"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg font-semibold",
								children: [visible.length ? Math.round(visible.reduce((sum, s) => sum + s.progress, 0) / visible.length) : 0, "%"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: "Average route progress"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Origin cargo load",
					description: "Weight allocation across dispatch cities",
					bodyClassName: "p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [[...new Set(visible.map((s) => s.origin))].map((origin) => {
							const weight = visible.filter((s) => s.origin === origin).reduce((sum, s) => sum + s.weight, 0);
							const total = visible.reduce((sum, s) => sum + s.weight, 0);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: origin
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [weight, " kg"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary",
									style: { width: weight / total * 100 + "%" }
								})
							})] }, origin);
						}), !visible.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "No cargo in this view."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Dispatch attention",
					description: "Pending and delayed shipments in view",
					bodyClassName: "p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [visible.filter((s) => s.status === "Delayed" || s.status === "Pending").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelected(s),
							className: "flex w-full items-start gap-3 rounded-xl border border-border p-3 text-start transition hover:bg-muted/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-lg bg-warning/10 text-warning",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold",
											children: s.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "warning",
											size: "sm",
											children: s.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: [
											s.origin,
											" to ",
											s.destination
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: s.status === "Pending" ? "Awaiting dispatch" : "Review arrival schedule"
									})
								]
							})]
						}, s.id)), !visible.some((s) => s.status === "Delayed" || s.status === "Pending") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "mx-auto mb-2 size-8 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "No shipments need attention"
							})]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!selected,
			onOpenChange: (open) => {
				if (!open) setSelected(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Track ", selected?.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Sample shipment details · No live location tracking" })] }), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-primary/5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [
								selected.origin,
								" → ",
								selected.destination
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: selected.customer
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Driver / vehicle"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [
									selected.driver,
									" / ",
									selected.vehicle
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Expected arrival"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: selected.eta
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Cargo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [selected.weight, " kg"]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [
									selected.progress,
									"% · ",
									selected.status
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						disabled: selected.status === "Delivered" || selected.status === "Pending",
						onClick: () => deliver(selected.id),
						children: "Mark sample delivery complete"
					})
				]
			})] })
		})
	] });
}
//#endregion
export { LogisticsDashboardPage as t };
