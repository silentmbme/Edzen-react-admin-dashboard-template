import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { hr as Download, st as Search } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, r as Badge, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/list-_KGtZRGM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	[
		"INV-2048",
		"CloudAxis",
		"billing@cloudaxis.com",
		"$8,420",
		"Paid",
		"$0",
		"Aug 22",
		"Sep 05"
	],
	[
		"INV-2049",
		"Vertex Labs",
		"billing@vertexlabs.com",
		"$4,860",
		"Sent",
		"$4,860",
		"Aug 23",
		"Sep 06"
	],
	[
		"INV-2050",
		"Edzen Systems",
		"billing@edzensystems.com",
		"$12,640",
		"Partially Paid",
		"$5,000",
		"Aug 20",
		"Aug 27"
	],
	[
		"INV-2051",
		"BrightWorks",
		"billing@brightworks.com",
		"$2,180",
		"Overdue",
		"$2,180",
		"Aug 15",
		"Aug 22"
	],
	[
		"INV-2052",
		"Acme Inc.",
		"billing@acmeinc.com",
		"$6,920",
		"Draft",
		"$6,920",
		"Aug 24",
		"Sep 07"
	]
];
var tone = {
	Paid: "success",
	Sent: "info",
	"Partially Paid": "warning",
	Overdue: "danger",
	Draft: "muted"
};
function InvoiceListApp() {
	const [q, setQ] = (0, import_react.useState)("");
	const f = rows.filter((x) => x.join(" ").toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Invoices",
			subtitle: "Track billing, payment status, due dates and outstanding balances.",
			breadcrumb: ["Invoices", "Invoice List"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => toast.success("Invoice export downloaded"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Export"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => toast.success("Create Invoice is ready"),
				children: "Create Invoice"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "mb-4",
			bodyClassName: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 divide-x rtl:divide-x-reverse divide-y sm:grid-cols-4 xl:grid-cols-7 xl:divide-y-0",
				children: [
					["Total Invoices", "1,284"],
					["Paid", "842"],
					["Pending", "218"],
					["Overdue", "96"],
					["Draft", "128"],
					["Outstanding", "$486K"],
					["Paid This Month", "$284K"]
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "text-muted-foreground",
						children: x[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "block text-lg",
						children: x[1]
					})]
				}, x[0]))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			bodyClassName: "p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2 border-b p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative min-w-56 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search invoice or client",
							className: "h-10 w-full rounded border bg-background ps-9 pe-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-10 rounded border bg-background px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All statuses" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paid" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Sent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Overdue" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-10 rounded border bg-background px-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All clients" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "CloudAxis" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Vertex Labs" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[900px] text-start text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/40 text-xs uppercase text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Invoice",
							"Client",
							"Issue",
							"Due",
							"Amount",
							"Balance",
							"Status",
							"Payment",
							""
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: x
						}, x)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: f.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: x[0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "block text-muted-foreground",
									children: "PO-8821"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: x[1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "block text-muted-foreground",
									children: x[2]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: x[6]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: x[7]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4 font-semibold",
								children: x[3]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: x[5]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: tone[x[4]],
									children: x[4]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: "Credit Card"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => toast.success(`Invoice ${x[0]} opened`),
									children: "View"
								})
							})
						]
					}, x[0])) })]
				})
			})]
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceListApp, {}) });
//#endregion
export { SplitComponent as component };
