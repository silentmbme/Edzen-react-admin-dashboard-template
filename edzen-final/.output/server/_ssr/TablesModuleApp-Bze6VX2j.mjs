import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { An as Inbox, Gr as ChevronRight, Oi as ArrowUpDown, ct as SearchX, hr as Download, or as FilePlusCorner, pr as Ellipsis, st as Search } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Card, r as Badge, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Checkbox } from "./checkbox-D68DiAFY.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { i as SelectItem, n as SelectContent, o as SelectTrigger, s as SelectValue, t as Select } from "./select-DtJbsb0z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TablesModuleApp-Bze6VX2j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var names = [
	"Elena Marquez",
	"Noah Bennett",
	"Sophie Turner",
	"Liam Walker",
	"Emma Brooks",
	"Olivia Hayes",
	"Henry Whitlock",
	"Camila Rossi",
	"Priya Nair",
	"Mason Reed"
];
var countries = [
	"United States",
	"India",
	"United Kingdom",
	"Germany",
	"Canada"
];
var statuses = [
	"Active",
	"Pending",
	"Inactive",
	"Blocked"
];
var tablePeople = Array.from({ length: 48 }, (_, index) => ({
	id: 1001 + index,
	name: names[index % names.length],
	company: [
		"Northstar",
		"Acme Studio",
		"Vireo Labs",
		"Horizon Co."
	][index % 4],
	email: `${names[index % names.length].toLowerCase().replace(" ", ".")}@example.com`,
	country: countries[index % countries.length],
	status: statuses[index % statuses.length],
	orders: index % 13,
	spent: 120 + index * 175,
	date: `2026-08-${String(index % 28 + 1).padStart(2, "0")}`,
	role: [
		"Product Designer",
		"Operations Lead",
		"Engineer",
		"Analyst"
	][index % 4],
	department: [
		"Product",
		"Operations",
		"Engineering",
		"Finance"
	][index % 4],
	amount: 180 + index * 92,
	payment: index % 3 === 0 ? "Pending" : "Paid"
}));
var tone = (status) => status === "Active" || status === "Paid" ? "success" : status === "Pending" ? "warning" : status === "Blocked" ? "danger" : "muted";
function Heading({ mode }) {
	const config = {
		basic: ["Basic Tables", "Core table styles, states and layout patterns used across the application."],
		responsive: ["Responsive Tables", "Adaptive table layouts designed to stay usable across desktop, tablet and mobile screens."],
		filter: ["Filter Tables", "Search and refine large datasets using flexible filtering patterns."],
		data: ["Data Table", "Manage structured datasets with sorting, pagination, selection and row actions."],
		advanced: ["Advanced Table", "Enterprise-grade table controls for complex datasets and operational workflows."]
	}[mode];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Tables",
		title: config[0],
		subtitle: config[1],
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			onClick: () => window.print(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: () => toast.success("Table report created"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlusCorner, { className: "me-2 size-4" }), "Create report"]
		})] })
	});
}
function Surface({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between border-b border-border px-5 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: description
			})] })
		}), children]
	});
}
function Action({ label = "View" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => toast.message(`${label} action opened`),
		className: "rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground",
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
	});
}
function PeopleTable({ rows, striped = false, compact = false, selectable, selected = /* @__PURE__ */ new Set(), toggle, sort, onSort, visible }) {
	const show = (key) => !visible || visible.includes(key);
	const head = (label, key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => key && onSort?.(key),
		className: "inline-flex items-center gap-1 font-medium",
		children: [label, key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, { className: `size-3 ${sort === key ? "text-primary" : ""}` })]
	}) }, label);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
		className: "bg-muted/35",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				checked: rows.length > 0 && rows.every((row) => selected.has(row.id)),
				onCheckedChange: (value) => rows.forEach((row) => value ? !selected.has(row.id) && toggle?.(row.id) : selected.has(row.id) && toggle?.(row.id))
			}) }),
			show("name") && head("Customer", "name"),
			show("company") && head("Company", "company"),
			show("country") && head("Country", "country"),
			show("orders") && head("Orders", "orders"),
			show("amount") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: "text-end",
				children: "Amount"
			}),
			show("status") && head("Status", "status"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { className: "w-12" })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
		"data-state": selected.has(row.id) ? "selected" : void 0,
		className: `${striped && index % 2 ? "bg-muted/25" : ""} ${compact ? "[&>td]:py-1" : ""}`,
		children: [
			selectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				checked: selected.has(row.id),
				onCheckedChange: () => toggle?.(row.id)
			}) }),
			show("name") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
					children: row.name.split(" ").map((p) => p[0]).join("")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: row.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted-foreground",
					children: row.email
				})] })]
			}) }),
			show("company") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row.company }),
			show("country") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row.country }),
			show("orders") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: row.orders }),
			show("amount") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "text-end font-medium",
				children: ["$", row.amount.toLocaleString()]
			}),
			show("status") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: tone(row.status),
				children: row.status
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {}) })
		]
	}, row.id)) })] });
}
function Basic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
				title: "Basic table",
				description: "Core customer information",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleTable, { rows: tablePeople.slice(0, 6) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
					title: "Striped table",
					description: "Subtle alternating row treatment",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleTable, {
						rows: tablePeople.slice(6, 11),
						striped: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
					title: "Compact table",
					description: "Reduced vertical density",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleTable, {
						rows: tablePeople.slice(12, 17),
						compact: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
					title: "Empty state",
					description: "Use a clear message when there is no data",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-52 flex-col items-center justify-center p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-8 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: "No records found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Try adjusting your filters or create a new record."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
					title: "Loading state",
					description: "Skeleton rows preserve table structure",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3 p-5",
						children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-9 animate-pulse rounded-lg bg-muted" }, i))
					})
				})]
			})
		]
	});
}
function Responsive() {
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
			title: "Horizontal scroll",
			description: "Wide order data stays inside a local scroll container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "min-w-[950px] w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-muted/35 text-start text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"Order",
							"Customer",
							"Email",
							"Country",
							"Items",
							"Date",
							"Amount",
							"Payment",
							"Status"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: x
						}, x)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tablePeople.slice(0, 8).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 font-medium",
								children: ["#", row.id]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.country
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.orders
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: ["$", row.amount]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: row.payment
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: tone(row.payment),
									children: row.payment
								})
							})
						]
					}, row.id)) })]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
				title: "Priority columns",
				description: "Secondary data hides on smaller screens",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm text-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/35",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-start",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "hidden p-3 text-start md:table-cell",
									children: "SKU"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "hidden p-3 text-start lg:table-cell",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-end",
									children: "Price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-end",
									children: "Stock"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-3 text-start",
									children: "Status"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tablePeople.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-3 font-medium",
									children: "Workspace kit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "hidden p-3 md:table-cell",
									children: ["SKU-", r.id]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "hidden p-3 lg:table-cell",
									children: "Office"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "p-3 text-end",
									children: ["$", r.amount]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-3 text-end",
									children: r.orders + 4
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "success",
										children: "In stock"
									})
								})
							]
						}, r.id)) })]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Surface, {
				title: "Expandable details",
				description: "Keep the primary row concise",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y",
					children: tablePeople.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setExpanded(expanded === r.id ? null : r.id),
						className: "flex w-full items-center gap-3 p-4 text-start hover:bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `size-4 transition ${expanded === r.id ? "rotate-90" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-medium",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: ["$", r.amount] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: tone(r.status),
								children: r.status
							})
						]
					}), expanded === r.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 bg-muted/30 px-11 py-4 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Email: ", r.email] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Location: ", r.country] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Last order: ", r.date] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Payment: ", r.payment] })
						]
					})] }, r.id))
				})
			})]
		})]
	});
}
function Filter$1() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("All");
	const [country, setCountry] = (0, import_react.useState)("All");
	const rows = (0, import_react.useMemo)(() => tablePeople.filter((r) => `${r.name} ${r.company} ${r.email} ${r.country}`.toLowerCase().includes(search.toLowerCase()) && (status === "All" || r.status === status) && (country === "All" || r.country === country)), [
		search,
		status,
		country
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Surface, {
			title: "Customer filters",
			description: `Showing ${rows.length} of ${tablePeople.length} records`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-b border-border p-4 lg:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: search,
								onChange: (e) => setSearch(e.target.value),
								className: "ps-9",
								placeholder: "Search customers, company, email or country..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: status,
							onValueChange: setStatus,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-full lg:w-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "All",
								children: "All statuses"
							}), statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: s,
								children: s
							}, s))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: country,
							onValueChange: setCountry,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-full lg:w-44",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "All",
								children: "All countries"
							}), countries.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: s,
								children: s
							}, s))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								setSearch("");
								setStatus("All");
								setCountry("All");
							},
							children: "Reset filters"
						})
					]
				}),
				(status !== "All" || country !== "All") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 px-4 pt-3",
					children: [status !== "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setStatus("All"),
						className: "rounded-full bg-primary/10 px-3 py-1 text-xs text-primary",
						children: ["Status: ", status]
					}), country !== "All" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setCountry("All"),
						className: "rounded-full bg-primary/10 px-3 py-1 text-xs text-primary",
						children: ["Country: ", country]
					})]
				}),
				rows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleTable, { rows }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, { className: "mx-auto size-8 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-medium",
							children: "No matching records"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Try removing some filters."
						})
					]
				})
			]
		})
	});
}
function Data({ advanced = false }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("name");
	const [asc, setAsc] = (0, import_react.useState)(true);
	const [page, setPage] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)("10");
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [density, setDensity] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)([
		"name",
		"company",
		"country",
		"orders",
		"amount",
		"status"
	]);
	const rows = (0, import_react.useMemo)(() => tablePeople.filter((r) => `${r.name} ${r.company} ${r.country}`.toLowerCase().includes(search.toLowerCase())).sort((a, b) => (a[sort] > b[sort] ? 1 : -1) * (asc ? 1 : -1)), [
		search,
		sort,
		asc
	]);
	const count = Number(size);
	const displayed = rows.slice((page - 1) * count, page * count);
	const toggle = (id) => setSelected((prev) => {
		const next = new Set(prev);
		next.has(id) ? next.delete(id) : next.add(id);
		return next;
	});
	const onSort = (key) => {
		if (sort === key) setAsc(!asc);
		else {
			setSort(key);
			setAsc(true);
		}
	};
	const exportRows = () => {
		const content = ["ID,Customer,Amount,Status", ...rows.map((r) => `${r.id},${r.name},${r.amount},${r.status}`)].join("\n");
		const link = document.createElement("a");
		link.href = URL.createObjectURL(new Blob([content], { type: "text/csv" }));
		link.download = "table-export.csv";
		link.click();
		toast.success("CSV export downloaded");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Surface, {
			title: advanced ? "Orders operations" : "Employee directory",
			description: `${rows.length} records available`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-b border-border p-4 lg:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: search,
								onChange: (e) => {
									setSearch(e.target.value);
									setPage(1);
								},
								className: "ps-9",
								placeholder: "Search records..."
							})]
						}),
						advanced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: density ? "compact" : "comfortable",
								onValueChange: (v) => setDensity(v === "compact"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "w-full lg:w-36",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "comfortable",
									children: "Comfortable"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "compact",
									children: "Compact"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setVisible(visible.length === 6 ? [
									"name",
									"amount",
									"status"
								] : [
									"name",
									"company",
									"country",
									"orders",
									"amount",
									"status"
								]),
								children: "Columns"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: exportRows,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: size,
							onValueChange: (v) => {
								setSize(v);
								setPage(1);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-full lg:w-28",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
								"10",
								"20",
								"50"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: v,
								children: [v, " rows"]
							}, v)) })]
						})
					]
				}),
				selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 bg-primary/5 px-4 py-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [selected.size, " selected"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => toast.success("Selected records activated"),
							children: "Activate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: exportRows,
							children: "Export selected"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setSelected(/* @__PURE__ */ new Set()),
							children: "Clear"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleTable, {
					rows: displayed,
					selectable: true,
					selected,
					toggle,
					sort,
					onSort,
					compact: density,
					visible: advanced ? visible : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-between gap-3 border-t border-border p-4 text-sm sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"Showing ",
							(page - 1) * count + 1,
							Math.min(page * count, rows.length),
							" of ",
							rows.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								disabled: page === 1,
								onClick: () => setPage(page - 1),
								children: "Previous"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground",
								children: page
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								disabled: page * count >= rows.length,
								onClick: () => setPage(page + 1),
								children: "Next"
							})
						]
					})]
				})
			]
		})
	});
}
function TablesModuleApp({ mode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, { mode }), mode === "basic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Basic, {}) : mode === "responsive" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Responsive, {}) : mode === "filter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter$1, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Data, { advanced: mode === "advanced" })]
	});
}
//#endregion
export { TablesModuleApp as t };
