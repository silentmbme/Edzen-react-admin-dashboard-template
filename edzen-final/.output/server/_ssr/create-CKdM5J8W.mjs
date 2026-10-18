import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, A as Trash2, Ct as Plus, Tn as Landmark, _r as CreditCard, ji as ArrowLeft, or as FilePlusCorner, ot as Send, ut as Save } from "../_libs/lucide-react.mjs";
import { n as Button, t as BrandLogo } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, r as Badge, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-CKdM5J8W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialItems = [{
	id: 1,
	name: "Enterprise Platform",
	description: "Annual workspace license",
	qty: 1,
	rate: 6e3
}, {
	id: 2,
	name: "Implementation",
	description: "Onboarding and configuration hours",
	qty: 10,
	rate: 180
}];
var inputClass = "mt-1.5 h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none ring-primary transition placeholder:text-muted-foreground focus:ring-2";
function CreateInvoiceApp() {
	const [items, setItems] = (0, import_react.useState)(initialItems);
	const [taxRate, setTaxRate] = (0, import_react.useState)(0);
	const [notes, setNotes] = (0, import_react.useState)("Thank you for your business. Payment is due within 14 days of the issue date.");
	const subtotal = (0, import_react.useMemo)(() => items.reduce((sum, item) => sum + item.qty * item.rate, 0), [items]);
	const tax = subtotal * (taxRate / 100);
	const total = subtotal + tax;
	const updateItem = (id, field, value) => setItems((current) => current.map((item) => item.id === id ? {
		...item,
		[field]: value
	} : item));
	const addItem = () => setItems((current) => [...current, {
		id: Date.now(),
		name: "New service",
		description: "Describe this service",
		qty: 1,
		rate: 0
	}]);
	const removeItem = (id) => setItems((current) => current.length > 1 ? current.filter((item) => item.id !== id) : current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Create invoice",
		subtitle: "Prepare a customer-ready invoice with line items, terms, and secure payment details.",
		breadcrumb: ["Invoices", "Create Invoice"],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => history.back(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Cancel"]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm lg:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -end-16 -top-20 size-60 rounded-full bg-primary/[.08] blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-wrap items-start justify-between gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Draft invoice"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "muted",
										children: "Not sent"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 text-xl font-semibold",
									children: "INV-2053"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-7 w-auto" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mt-7 grid gap-5 border-t pt-6 sm:grid-cols-3",
							children: [
								["Client", "CloudAxis"],
								["Currency", "USD - US Dollar"],
								["Payment terms", "Net 14"]
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "mt-1 block text-sm",
								children: value
							})] }, label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Recipient and billing details",
					subtitle: "Select who will receive this invoice and configure its schedule.",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex flex-wrap items-center gap-3 rounded-xl border bg-muted/[.3] p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-xl bg-info/10 font-semibold text-info",
								children: "CA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[180px] flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block text-sm",
									children: "CloudAxis"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "billing@cloudaxis.com - New York, United States"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => toast.success("Customer selector opened"),
								children: "Change client"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Invoice number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "INV-2053",
								className: inputClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Purchase order"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: "PO-8822",
								className: inputClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Issue date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								defaultValue: "2026-08-24",
								className: inputClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Due date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								defaultValue: "2026-09-07",
								className: inputClass
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Currency"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								defaultValue: "USD",
								className: inputClass,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "USD",
										children: "USD - US Dollar"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "EUR",
										children: "EUR - Euro"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "GBP",
										children: "GBP - Pound sterling"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Payment terms"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								defaultValue: "Net 14",
								className: inputClass,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Due on receipt" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Net 14" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Net 30" })
								]
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Line items",
					subtitle: "Amounts are calculated from quantity and unit rate.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: addItem,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add item"]
					}),
					bodyClassName: "p-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden grid-cols-[minmax(0,1fr)_72px_120px_132px_40px] gap-3 border-b bg-muted/30 px-6 py-3 text-xs font-medium text-muted-foreground md:grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Item and description" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Qty" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rate" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-end",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "divide-y",
							children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 p-5 md:grid-cols-[minmax(0,1fr)_72px_120px_132px_40px] md:items-center md:px-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: item.name,
										onChange: (event) => updateItem(item.id, "name", event.target.value),
										"aria-label": "Item name",
										className: "h-10 w-full border-0 bg-transparent px-0 text-sm font-semibold outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: item.description,
										onChange: (event) => updateItem(item.id, "description", event.target.value),
										"aria-label": "Item description",
										className: "mt-1 w-full border-0 bg-transparent px-0 text-xs text-muted-foreground outline-none"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "md:hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Quantity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "1",
											value: item.qty,
											onChange: (event) => updateItem(item.id, "qty", Math.max(1, Number(event.target.value))),
											className: inputClass
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: "1",
										value: item.qty,
										onChange: (event) => updateItem(item.id, "qty", Math.max(1, Number(event.target.value))),
										"aria-label": "Quantity",
										className: "hidden h-10 rounded-lg border bg-background px-2 text-sm md:block"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "md:hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Rate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: "0",
											value: item.rate,
											onChange: (event) => updateItem(item.id, "rate", Math.max(0, Number(event.target.value))),
											className: inputClass
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: "0",
										value: item.rate,
										onChange: (event) => updateItem(item.id, "rate", Math.max(0, Number(event.target.value))),
										"aria-label": "Rate",
										className: "hidden h-10 rounded-lg border bg-background px-2 text-sm md:block"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between md:block md:text-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground md:hidden",
											children: "Amount"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["$", (item.qty * item.rate).toLocaleString(void 0, { minimumFractionDigits: 2 })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										onClick: () => removeItem(item.id),
										disabled: items.length === 1,
										"aria-label": `Remove ${item.name}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-muted-foreground" })
									})
								]
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "m-5 flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
							onClick: addItem,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add another line item"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Message to customer",
					subtitle: "This appears on the invoice sent to your customer.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: notes,
						onChange: (event) => setNotes(event.target.value),
						rows: 4,
						className: "w-full rounded-xl border bg-background p-3 text-sm leading-6 outline-none ring-primary focus:ring-2"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-5 xl:sticky xl:top-5 xl:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Invoice summary",
				subtitle: "Review totals before sending.",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Subtotal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["$", subtotal.toLocaleString(void 0, { minimumFractionDigits: 2 })] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Tax rate"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex w-24 items-center rounded-lg border bg-background",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: "0",
										max: "100",
										value: taxRate,
										onChange: (event) => setTaxRate(Math.min(100, Math.max(0, Number(event.target.value)))),
										className: "h-8 min-w-0 w-full bg-transparent px-2 text-end text-sm outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pe-2 text-muted-foreground",
										children: "%"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Tax amount"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["$", tax.toLocaleString(void 0, { minimumFractionDigits: 2 })] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-t pt-4 text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Total due" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
									className: "text-xl",
									children: ["$", total.toLocaleString(void 0, { minimumFractionDigits: 2 })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-xl bg-primary/8 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-5 text-muted-foreground",
								children: "A secure payment link will be included when this invoice is sent to the customer."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => toast.success("Invoice INV-2053 saved as draft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Save draft"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => toast.success("Invoice INV-2053 sent to CloudAxis"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Save and send"]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Payment options",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center justify-between rounded-xl border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 text-primary" }), "Card payment"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							defaultChecked: true,
							className: "size-4 accent-primary"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center justify-between rounded-xl border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4 text-primary" }), "Bank transfer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							defaultChecked: true,
							className: "size-4 accent-primary"
						})]
					})]
				})
			})]
		})]
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateInvoiceApp, {}) });
//#endregion
export { SplitComponent as component };
