import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Br as CircleCheck, E as Truck, Gr as ChevronRight, Jn as Gift, Mr as Clock3, Ri as Archive, X as SlidersHorizontal, _t as ReceiptText, ft as RotateCcw, ki as ArrowRight, q as Sparkles, w as Undo2, wt as Play, yr as Copy, zt as PackageOpen } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ecommerce-Dw84myEg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var liveOrders = [
	[
		"2m",
		"#NV-10482",
		"Olivia Chen",
		"$548.00",
		"3 items",
		"New"
	],
	[
		"7m",
		"#NV-10481",
		"Marcus Rivera",
		"$249.00",
		"1 item",
		"Paid"
	],
	[
		"12m",
		"#NV-10480",
		"Ava Patel",
		"$1,290.00",
		"4 items",
		"Packed"
	],
	[
		"18m",
		"#NV-10479",
		"Ryan Cooper",
		"$326.00",
		"2 items",
		"Paid"
	]
];
function EcommerceDashboard() {
	const { base } = useChartTheme();
	const [promoLive, setPromoLive] = (0, import_react.useState)(true);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [orders, setOrders] = (0, import_react.useState)(liveOrders);
	const marginOptions = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: {
			type: "line",
			toolbar: { show: false }
		},
		colors: [token("--chart-1"), token("--chart-3")],
		stroke: {
			curve: "smooth",
			width: [3, 3],
			dashArray: [0, 6]
		},
		fill: {
			opacity: .18,
			type: ["solid", "solid"]
		},
		dataLabels: { enabled: false },
		xaxis: { categories: [
			"Aug 1",
			"5",
			"9",
			"13",
			"17",
			"21",
			"25",
			"Today"
		] },
		yaxis: {
			min: 30,
			max: 70,
			labels: { formatter: (value) => `${value}%` }
		},
		grid: {
			borderColor: token("--border"),
			strokeDashArray: 4
		},
		legend: {
			position: "top",
			horizontalAlign: "right",
			fontSize: "12px"
		},
		tooltip: { y: { formatter: (value) => `${value.toFixed(1)}%` } }
	}), [base]);
	const basketOptions = (0, import_react.useMemo)(() => mergeOptions(base, {
		chart: { type: "donut" },
		labels: [
			"Single item",
			"2 items",
			"3 items",
			"4+ items"
		],
		colors: [
			token("--chart-1"),
			token("--chart-2"),
			token("--chart-3"),
			token("--chart-4")
		],
		legend: { show: false },
		dataLabels: { enabled: false },
		stroke: { width: 0 },
		plotOptions: { pie: { donut: {
			size: "72%",
			labels: {
				show: true,
				total: {
					show: true,
					label: "Items / order",
					formatter: () => "2.6"
				}
			}
		} } }
	}), [base]);
	const copyCode = () => {
		setCopied(true);
		navigator.clipboard?.writeText("AURORA20");
		toast.success("Promo code copied");
	};
	const completeOrder = (id) => {
		setOrders((items) => items.filter((item) => item[1] !== id));
		toast.success(`${id} sent to fulfillment`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Commerce",
			subtitle: "A hands-on workspace for merchandising, order operations and customer purchase behavior.",
			breadcrumb: [
				"Edzen",
				"Dashboards",
				"eCommerce"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => toast.info("Store settings opened"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {}), "Store controls"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: () => toast.success("New collection draft created"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {}), "Create collection"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[290px] overflow-hidden rounded-2xl bg-primary/10 p-6 shadow-card sm:p-8 xl:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -end-20 -top-14 size-72 rounded-full border-[30px] border-primary/5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-90px] end-24 size-56 rounded-full bg-primary/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), "Merchandising spotlight"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm",
								children: "This weeks featured collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 max-w-md text-3xl font-semibold tracking-tight",
								children: "Desk setups that work harder."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm leading-6",
								children: "The Workspace Edit is outperforming the homepage average with a 6.8% conversion rate and a $182 basket value."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "bg-success text-success-foreground hover:bg-muted",
								size: "sm",
								onClick: () => toast.info("Collection editor opened"),
								children: ["Edit collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: "+28% conversion since feature"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-5",
				title: "The order tape",
				description: "Every paid order entering the store now",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "success",
					variant: "dot",
					children: "Live"
				}),
				bodyClassName: "p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: orders.length ? orders.map(([time, id, customer, value, items, status]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex items-center gap-3 px-5 py-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								className: "w-7 text-xs font-semibold text-primary",
								children: time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-sm",
									children: customer
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
									className: "block text-xs text-muted-foreground",
									children: [
										id,
										" ",
										items
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-sm",
									children: value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "text-xs text-muted-foreground",
									children: status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => completeOrder(id),
								className: "hidden rounded-md p-1.5 text-success hover:bg-success/10 group-hover:block",
								"aria-label": `Complete ${id}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" })
							})
						]
					}, id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-h-48 place-items-center text-sm text-muted-foreground",
						children: "Order tape is clear"
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-7",
				title: "Margin momentum",
				description: "Gross margin performance against the store target",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "success",
					children: "$96.4K gross profit"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "line",
					height: 280,
					options: marginOptions,
					series: [{
						name: "Gross margin",
						type: "area",
						data: [
							44,
							47,
							45,
							51,
							49,
							55,
							53,
							58
						]
					}, {
						name: "Margin target",
						type: "line",
						data: [
							50,
							50,
							50,
							50,
							50,
							50,
							50,
							50
						]
					}]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-foreground",
						children: "Merchandising cue:"
					}), " gross margin is now 8 points above target, led by bundle sales and accessory attach rate."]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-5",
				title: "Basket composer",
				description: "What customers are adding together",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "donut",
						height: 220,
						options: basketOptions,
						series: [
							32,
							38,
							19,
							11
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						["Single item", "32%"],
						["2 items", "38%"],
						["3 items", "19%"],
						["4+ items", "11%"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-muted/55 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "float-right",
							children: value
						})]
					}, label))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-4 overflow-hidden rounded-2xl border bg-card shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-4 border-b px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[15px] font-semibold",
						children: "Fulfillment control tower"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: "Todays order handoff, warehouse pace and carrier capacity."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full bg-warning/12 px-3 py-1.5 text-xs font-semibold text-warning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3.5" }), "Next carrier cutoff in 41 min"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid xl:grid-cols-[1.2fr_.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid gap-3 md:grid-cols-3",
						children: [
							[
								"Scan queue",
								"18",
								"Orders awaiting pick",
								"bg-primary",
								"42% complete"
							],
							[
								"Pack bench",
								"12",
								"Orders being packed",
								"bg-info",
								"68% complete"
							],
							[
								"Carrier handoff",
								"14",
								"Ready for collection",
								"bg-success",
								"86% complete"
							]
						].map(([stage, count, note, color, progress], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-xl border bg-background/50 p-4",
							children: [
								index < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -end-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full border bg-card md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block size-2.5 rounded-full ${color}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "mt-4 block text-3xl",
									children: count
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-sm font-semibold",
									children: stage
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: progress
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toast.info(`${stage} opened`),
										className: "font-semibold text-primary",
										children: "Open"
									})]
								})
							]
						}, stage))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-sm",
								children: "SLA forecast: 96% on time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-xs text-muted-foreground",
								children: "Two express orders need a scan before the 13:30 pickup."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => toast.success("Priority pick list created"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, {}), "Create pick list"]
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "border-t bg-muted/30 p-5 xl:border-s xl:border-t-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Carrier capacity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-4",
							children: [
								[
									"Express collection",
									"13:30",
									"84%",
									"bg-primary"
								],
								[
									"Standard collection",
									"16:00",
									"52%",
									"bg-info"
								],
								[
									"Same-day courier",
									"17:30",
									"36%",
									"bg-success"
								]
							].map(([carrier, time, capacity, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block",
									children: carrier
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
									className: "text-xs text-muted-foreground",
									children: ["Pickup ", time]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: capacity })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-2 rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full rounded-full ${color}`,
									style: { width: capacity }
								})
							})] }, carrier))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toast.warning("3 fulfillment exceptions need review"),
							className: "mt-5 flex w-full items-center justify-between rounded-xl border border-warning/30 bg-warning/8 p-3 text-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-sm text-warning",
								children: "3 exceptions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "text-xs text-muted-foreground",
								children: "Address and payment reviews"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-warning rtl:rotate-180" })]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "xl:col-span-5",
				title: "Promotion test bench",
				description: "A single promotion with its actual trading impact",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-warning/12 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-warning",
								children: "Active code"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-xl font-semibold",
								children: "AURORA20"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: copyCode,
								className: "rounded-md bg-card p-2 text-warning shadow-sm",
								"aria-label": "Copy promotion code",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "20% off selected audio. Ends Sunday at 23:59."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-3 text-center text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-lg",
								children: "184"
							}), "Uses"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-lg",
								children: "$8.4K"
							}), "Revenue"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-lg text-success",
								children: "3.9"
							}), "Return"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "flex-1",
							onClick: () => setPromoLive(!promoLive),
							children: promoLive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {}), "Pause code"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Resume code"] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: copyCode,
							children: copied ? "Copied" : "Copy"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "xl:col-span-7",
				title: "Commerce signals",
				description: "A short list of decisions worth making today",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: [
						[
							"Returns are falling",
							"Lighting returns dropped to 1.1% after the new sizing guide.",
							"Positive",
							"bg-success/12 text-success",
							RotateCcw
						],
						[
							"Pickup capacity",
							"The 13:30 carrier collection is 86% full. Add one more cage.",
							"Action needed",
							"bg-warning/16 text-warning",
							Truck
						],
						[
							"New customer lift",
							"First-time buyers are adding 0.4 more items per order this week.",
							"Opportunity",
							"bg-primary/12 text-primary",
							Archive
						]
					].map(([title, detail, tag, color, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid size-9 place-items-center rounded-lg ${color}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-sm font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-5 text-muted-foreground",
								children: detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: tag === "Positive" ? "success" : tag === "Action needed" ? "warning" : "primary",
								className: "mt-4",
								children: tag
							})
						]
					}, title))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "xl:col-span-5",
					title: "Cart recovery workbench",
					description: "The current abandoned-cart sequence and its payoff",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative ms-2 border-s border-primary/25 ps-5",
						children: [
							[
								"After 30 min",
								"Reminder email",
								"684 shoppers in sequence",
								"42% open rate"
							],
							[
								"After 4 hrs",
								"Dynamic product message",
								"402 eligible shoppers",
								"18% recovery rate"
							],
							[
								"After 24 hrs",
								"Limited stock nudge",
								"186 eligible shoppers",
								"9% recovery rate"
							]
						].map(([when, title, detail, result]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pb-5 last:pb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -start-[25px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-card" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "font-semibold text-primary",
									children: when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block text-sm",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "block text-xs text-muted-foreground",
										children: detail
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										children: result
									})]
								})
							]
						}, when))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-5 w-full",
						size: "sm",
						onClick: () => toast.success("Recovery sequence opened for editing"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Edit recovery sequence"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "xl:col-span-4",
					title: "Returns intelligence",
					description: "Why customers are sending items back",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"Changed mind",
								"38%",
								"Most common for accessories",
								"bg-muted-foreground"
							],
							[
								"Fit or size",
								"26%",
								"Lighting and furniture",
								"bg-warning"
							],
							[
								"Damaged in transit",
								"14%",
								"Down 3.2 pts this month",
								"bg-destructive"
							],
							[
								"Not as expected",
								"12%",
								"Improve product detail pages",
								"bg-info"
							]
						].map(([reason, share, note, color]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2.5 rounded-full ${color}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block text-sm",
										children: reason
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
										className: "block truncate text-xs text-muted-foreground",
										children: note
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-sm",
									children: share
								})
							]
						}, reason))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toast.info("Returns report opened"),
						className: "mt-5 inline-flex items-center text-xs font-semibold text-primary",
						children: ["Open return report", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 rtl:rotate-180" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "xl:col-span-3",
					title: "Customer loop",
					description: "From first order to loyal buyer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: [
							[
								"First purchase",
								"1,284",
								"100%"
							],
							[
								"Second order",
								"486",
								"38%"
							],
							[
								"Loyal customer",
								"212",
								"16%"
							],
							[
								"Advocate",
								"84",
								"7%"
							]
						].map(([label, customers, rate], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-7 place-items-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary",
									children: index + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block text-sm",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
										className: "text-xs text-muted-foreground",
										children: [customers, " customers"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold",
									children: rate
								})
							]
						}, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl bg-success/8 p-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-success",
							children: "Retention win:"
						}), " loyalty members reorder 21 days sooner."]
					})]
				})
			]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EcommerceDashboard, {}) });
//#endregion
export { SplitComponent as component };
