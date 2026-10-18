import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Hr as CircleAlert, I as Tags, Jr as Check, hr as Download, ln as LoaderCircle, lt as SearchCheck, pn as ListFilter, r as X, st as Search, ut as Save } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as SelectLabel, i as SelectItem, n as SelectContent, o as SelectTrigger, r as SelectGroup, s as SelectValue, t as Select } from "./select-DtJbsb0z.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/select-components-Bua8CQ0v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SelectCard({ title, description, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: `overflow-hidden ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between border-b border-border px-5 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: description
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-5",
			children
		})]
	});
}
function Field({ label, children, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-medium",
				children: label
			}),
			children,
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: hint
			})
		]
	});
}
var people = [
	"Elena Marquez",
	"Noah Bennett",
	"Sophie Turner",
	"Liam Walker",
	"Emma Brooks"
];
function SelectComponentsApp() {
	const [workspace, setWorkspace] = (0, import_react.useState)("product");
	const [assignee, setAssignee] = (0, import_react.useState)("Elena Marquez");
	const [search, setSearch] = (0, import_react.useState)("");
	const [tags, setTags] = (0, import_react.useState)(["Design", "Product"]);
	const [country, setCountry] = (0, import_react.useState)("us");
	const matches = people.filter((person) => person.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Select components",
				subtitle: "Single, grouped, searchable, and multi-value selection patterns.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Select preferences saved"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "me-2 size-4" }), "Save settings"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Single selection"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Pick one value from a focused set of choices."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectCard, {
					title: "Basic select",
					description: "A simple list for one workspace",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Workspace",
						hint: "Select the workspace for this report.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: workspace,
							onValueChange: setWorkspace,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "product",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "marketing",
									children: "Marketing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "operations",
									children: "Operations"
								})
							] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-xl bg-primary/5 px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: ["Selected workspace:", " "]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "capitalize text-primary",
							children: workspace
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectCard, {
					title: "Grouped select",
					description: "Organize longer lists into recognizable groups",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Location",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							defaultValue: "sf",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a location" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: "United States" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "sf",
									children: "San Francisco"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "ny",
									children: "New York"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: "Europe" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "ldn",
									children: "London"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "ber",
									children: "Berlin"
								})
							] })] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "Groups reduce visual scanning time when options grow."
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchCheck, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Searchable & rich selects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Help users find a person or choose an option with more context."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectCard, {
					title: "Searchable assignee",
					description: "Filter people, then select an assignee",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: search,
							onChange: (event) => setSearch(event.target.value),
							className: "ps-9",
							placeholder: "Search people..."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 max-h-56 divide-y divide-border overflow-auto rounded-xl border border-border",
						children: [matches.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setAssignee(person);
								setSearch("");
								toast.success(`${person} selected`);
							},
							className: `flex w-full items-center gap-3 px-4 py-3 text-start transition hover:bg-muted/40 ${assignee === person ? "bg-primary/5" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-8 items-center justify-center rounded-full bg-chart-3/10 text-xs font-bold text-chart-3",
									children: person.split(" ").map((part) => part[0]).join("")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-sm font-medium",
									children: person
								}),
								assignee === person && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-primary" })
							]
						}, person)), matches.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-4 py-6 text-center text-sm text-muted-foreground",
							children: "No team members found."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectCard, {
					title: "Select with details",
					description: "Use supporting data to clarify each option",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Billing country",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: country,
							onValueChange: setCountry,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "us",
									children: "United States USD"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "gb",
									children: "United Kingdom GBP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "in",
									children: "India INR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "de",
									children: "Germany EUR"
								})
							] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Billing destination"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-semibold",
								children: country === "us" ? "United States" : country === "gb" ? "United Kingdom" : country === "in" ? "India" : "Germany"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Taxes and available payment methods update automatically."
							})
						]
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-success/10 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Multi-select & states"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use chips and explicit states for multiple selected values."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectCard, {
					title: "Multi-select tags",
					description: "Add or remove the categories on this project",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary",
								children: [tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTags(tags.filter((item) => item !== tag)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
								})]
							}, tag)), [
								"Research",
								"Engineering",
								"Marketing"
							].filter((tag) => !tags.includes(tag)).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTags([...tags, tag]),
								className: "rounded-lg border border-dashed border-border px-2.5 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-primary",
								children: ["+ ", tag]
							}, tag))]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Click a suggested tag to add it; use to remove it."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectCard, {
					title: "Select states",
					description: "Disabled, error, and loading treatments",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Disabled select",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									disabled: true,
									className: "h-10 w-full rounded-md border border-border bg-muted px-3 text-sm text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not available" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Required category",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "h-10 w-full rounded-md border border-destructive bg-background px-3 text-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Choose a category" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "absolute end-8 top-1/2 size-4 -translate-y-1/2 text-destructive" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive",
									children: "Please choose a category."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Loading options",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										readOnly: true,
										defaultValue: "Loading teams...",
										className: "pe-10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "absolute end-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-primary" })]
								})
							})
						]
					})
				})]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectComponentsApp, {}) });
//#endregion
export { SplitComponent as component };
