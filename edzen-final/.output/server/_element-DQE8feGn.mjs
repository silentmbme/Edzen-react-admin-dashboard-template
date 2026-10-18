import { r as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button } from "./_ssr/BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as Route } from "./_element-CW1uTEbc.mjs";
import { t as AppShell } from "./_ssr/sophia-carter-CPbN4m2N.mjs";
import { i as Card, r as Badge, s as PageHeader } from "./_ssr/widgets-7dkqdyCt.mjs";
import { t as UiElementDetailApp } from "./_ssr/UiElementDetailApp-CVn4g6CA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_element-DQE8feGn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TailwindElementApp({ element }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const rows = [
		[
			"Website Redesign",
			"Sophia Carter",
			"Active",
			"12 min ago"
		],
		[
			"CRM Migration",
			"Olivia Smith",
			"Review",
			"1 hour ago"
		],
		[
			"Mobile App v2",
			"Daniel Lee",
			"Planning",
			"Yesterday"
		]
	].filter((row) => row.join(" ").toLowerCase().includes(query.toLowerCase()));
	if (element !== "tables") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Data Tables",
		subtitle: "Responsive data tables, status cells and row actions.",
		breadcrumb: [
			"Components",
			"UI Elements",
			"Data Tables"
		],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			onClick: () => location.assign("/ui/buttons"),
			children: "Buttons"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		title: "Data table examples",
		description: "A responsive operational table using the current theme tokens.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "Search projects",
				className: "h-10 flex-1 rounded-lg border bg-background px-3 text-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => setQuery(""),
				children: "Clear"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[620px] text-start text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "border-b bg-muted/35 text-xs uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Project",
						"Owner",
						"Status",
						"Updated",
						""
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3",
						children: item
					}, item)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b transition hover:bg-muted/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 font-medium",
							children: row[0]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: row[1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: row[2] === "Active" ? "success" : row[2] === "Review" ? "warning" : "primary",
								children: row[2]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-muted-foreground",
							children: row[3]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => toast.message(`${row[0]} opened`),
								children: "View"
							})
						})
					]
				}, row[0])) })]
			})
		})]
	})] });
}
var tailwindElements = /* @__PURE__ */ new Set(["tables"]);
function UiElementRoute() {
	const { element } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: tailwindElements.has(element) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TailwindElementApp, { element }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UiElementDetailApp, { element }) });
}
//#endregion
export { UiElementRoute as component };
