import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Br as CircleCheck, Rn as Headphones, _t as ReceiptText, dr as ExternalLink, hr as Download, in as Mail, it as Settings2, lr as Eye, or as FilePlusCorner, ot as Send, rn as MapPin, xn as Layers, xt as Printer, zr as CircleDollarSign } from "../_libs/lucide-react.mjs";
import { i as cn, n as Button, t as BrandLogo } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, r as Badge, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/detail-NMCbI70m.js
var import_jsx_runtime = require_jsx_runtime();
var lineItems = [
	{
		name: "Enterprise platform",
		description: "Annual workspace license",
		quantity: 1,
		rate: "$6,000.00",
		amount: "$6,000.00",
		icon: Layers
	},
	{
		name: "Implementation",
		description: "10 hours of onboarding and setup",
		quantity: 10,
		rate: "$180.00",
		amount: "$1,800.00",
		icon: Settings2
	},
	{
		name: "Priority support",
		description: "Premium support coverage",
		quantity: 1,
		rate: "$620.00",
		amount: "$620.00",
		icon: Headphones
	}
];
function InvoiceDetailsApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Invoice INV-2048",
		subtitle: "CloudAxis billing record - issued Aug 22, 2026",
		breadcrumb: ["Invoices", "Invoice Details"],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => window.print(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => toast.success("Invoice sent to billing@cloudaxis.com"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Send invoice"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => toast.success("Payment recording opened"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDollarSign, { className: "size-4" }), "Record payment"]
			})
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "min-w-0 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden rounded-2xl border bg-card shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -end-20 -top-24 size-72 rounded-full bg-primary/[.08] blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-4 sm:p-6 lg:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-center gap-3 sm:gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-12 place-items-center rounded-xl bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptText, { className: "size-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm text-muted-foreground",
												children: "Invoice document"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-1 text-2xl font-semibold tracking-tight",
												children: "INV-2048"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-start sm:text-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "success",
											children: "Paid in full"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground",
											children: "Paid on Aug 25, 2026"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid gap-6 border-y py-5 sm:mt-8 sm:grid-cols-2 sm:gap-7 sm:py-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
											children: "Bill to"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-semibold",
											children: "CloudAxis"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm leading-6 text-muted-foreground",
											children: [
												"billing@cloudaxis.com",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"127 Madison Avenue",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"New York, NY 10016, United States"
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "sm:text-end",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
												children: "Issued by"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "mt-3 h-7 w-auto sm:ms-auto" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-sm leading-6 text-muted-foreground",
												children: [
													"billing@edzen.app",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"San Francisco, CA",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"United States"
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-6 sm:grid-cols-4",
									children: [
										["Issued", "Aug 22, 2026"],
										["Due date", "Sep 05, 2026"],
										["Payment terms", "Net 14"],
										["Purchase order", "PO-8821"]
									].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "mt-1 block text-sm",
										children: value
									})] }, label))
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Invoice items",
					subtitle: "Services included in this billing cycle",
					bodyClassName: "p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "table-scroll",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm sm:min-w-[660px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "border-y bg-muted/30 text-start text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3 font-medium",
										children: "Description"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "hidden px-4 py-3 text-center font-medium sm:table-cell",
										children: "Qty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "hidden px-4 py-3 text-end font-medium sm:table-cell",
										children: "Rate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-3 text-end font-medium",
										children: "Amount"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: lineItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-4 sm:px-6 sm:py-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "block",
													children: item.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-xs text-muted-foreground",
													children: item.description
												})]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "hidden px-4 py-5 text-center sm:table-cell",
										children: item.quantity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "hidden px-4 py-5 text-end text-muted-foreground sm:table-cell",
										children: item.rate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-4 text-end font-semibold sm:px-6 sm:py-5",
										children: item.amount
									})
								]
							}, item.name)) })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ms-auto w-full max-w-sm space-y-3 p-4 text-sm sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: "$8,420.00"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: "$0.00"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tax" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-foreground",
									children: "$0.00"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t pt-4 text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Total due" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-lg",
									children: "$8,420.00"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Notes and payment terms",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-muted/45 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-6 text-muted-foreground",
							children: "Thank you for choosing Edzen. This invoice was paid in full by card. Please retain this record for your accounting files. Questions about this invoice can be sent to billing@edzen.app."
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "min-w-0 space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Payment summary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-success/10 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-xl bg-success text-success-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-sm text-success",
									children: "Payment complete"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Received Aug 25, 2026"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4 text-sm",
							children: [
								[
									"Invoice total",
									"$8,420.00",
									""
								],
								[
									"Paid",
									"$8,420.00",
									"text-success"
								],
								[
									"Balance",
									"$0.00",
									""
								],
								[
									"Method",
									"Visa ending 4812",
									""
								]
							].map(([label, value, style]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: cn("text-end", style),
									children: value
								})]
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "mt-5 w-full",
							onClick: () => toast.success("Payment receipt downloaded"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download receipt"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Customer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 place-items-center rounded-xl bg-info/10 font-semibold text-info",
									children: "CA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block",
										children: "CloudAxis"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Enterprise customer"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-3 border-t pt-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 break-all",
									children: "billing@cloudaxis.com"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New York, United States" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-3 w-full",
							onClick: () => toast.success("Customer profile opened"),
							children: "View customer"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Invoice activity",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							[
								FilePlusCorner,
								"Invoice created",
								"Aug 22, 9:40 AM",
								"bg-primary/10 text-primary"
							],
							[
								Send,
								"Invoice sent",
								"Aug 22, 10:15 AM",
								"bg-info/10 text-info"
							],
							[
								Eye,
								"Invoice viewed",
								"Aug 23, 2:24 PM",
								"bg-warning/10 text-warning"
							],
							[
								CircleCheck,
								"Payment received",
								"Aug 25, 11:02 AM",
								"bg-success/10 text-success"
							]
						].map(([Icon, title, time, style], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-8 place-items-center rounded-full", String(style)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}), index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-6 w-px bg-border" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block text-sm",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: time
							})] })]
						}, String(title)))
					})
				})
			]
		})]
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceDetailsApp, {}) });
//#endregion
export { SplitComponent as component };
