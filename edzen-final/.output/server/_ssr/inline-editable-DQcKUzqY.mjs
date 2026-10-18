import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ar as CloudCheck, I as Tags, Jr as Check, U as Star, Wt as MousePointerClick, ar as FileSpreadsheet, hr as Download, ii as CalendarDays, ir as FileText, kt as Pencil, r as X } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Textarea } from "./textarea-BXbb9FJL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inline-editable-DQcKUzqY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DemoCard({ title, description, children, className = "" }) {
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
function EditableText({ value, onSave, multiline = false, className = "" }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(value);
	const commit = () => {
		onSave(draft);
		setEditing(false);
		toast.success("Saved");
	};
	if (editing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				autoFocus: true,
				value: draft,
				onChange: (e) => setDraft(e.target.value),
				className: "min-h-24 pe-9"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				autoFocus: true,
				value: draft,
				onChange: (e) => setDraft(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "Enter") commit();
					if (e.key === "Escape") setEditing(false);
				},
				className: "pe-9"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setEditing(false),
				className: "absolute end-2 top-2 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: commit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "me-1.5 size-3.5" }), "Save"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => {
					setDraft(value);
					setEditing(false);
				},
				children: "Cancel"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setEditing(true),
		className: `group flex w-full items-center justify-between gap-3 rounded-lg border border-dashed border-transparent px-2 py-1.5 text-start transition hover:border-primary/30 hover:bg-primary/5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5 shrink-0 text-muted-foreground opacity-0 transition group-hover:opacity-100" })]
	});
}
function InlineEditableApp() {
	const [name, setName] = (0, import_react.useState)("Elena Marquez");
	const [role, setRole] = (0, import_react.useState)("Operations Lead");
	const [bio, setBio] = (0, import_react.useState)("Leading operations, customer experience, and scalable internal systems.");
	const [status, setStatus] = (0, import_react.useState)("In progress");
	const [tags, setTags] = (0, import_react.useState)(["Design", "Product"]);
	const [tagDraft, setTagDraft] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Inline editable",
				subtitle: "Edit values directly where they appear, without leaving the page.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("All changes synced"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudCheck, { className: "me-2 size-4" }), "Sync changes"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MousePointerClick, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Click to edit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Hover over a value, then click to edit it inline."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Simple text",
						description: "Enter saves, Escape cancels",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Project name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
									value: "Website redesign",
									onSave: () => {},
									className: "text-lg font-semibold"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-2 text-xs text-muted-foreground",
									children: "Try clicking the value above."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Inline select",
						description: "Change a record status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Current status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: status,
									onChange: (event) => {
										setStatus(event.target.value);
										toast.success("Status updated");
									},
									className: `h-10 w-full rounded-lg border px-3 text-sm font-medium ${status === "Complete" ? "border-success bg-success/5 text-success" : status === "Blocked" ? "border-destructive bg-destructive/5 text-destructive" : "border-warning bg-warning/5 text-warning"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "In progress" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Complete" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Blocked" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Select a new option to save immediately."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Editable date",
						description: "Use a native date editor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Launch date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									defaultValue: "2026-09-15",
									onChange: () => toast.success("Launch date updated")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-primary" }), "Expected launch: Sep 15, 2026"]
								})
							]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
					title: "Editable profile",
					description: "A polished profile card with in-place editing",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-20 shrink-0 items-center justify-center rounded-2xl bg-chart-3 text-xl font-bold text-white",
							children: "EM"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-xs text-muted-foreground",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
									value: name,
									onSave: setName,
									className: "text-xl font-semibold"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-xs text-muted-foreground",
									children: "Role"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
									value: role,
									onSave: setRole,
									className: "text-sm font-medium"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-xs text-muted-foreground",
									children: "About"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
									value: bio,
									onSave: setBio,
									multiline: true,
									className: "text-sm leading-6 text-muted-foreground"
								})] })
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
					title: "Details table",
					description: "Table cells can be edited too",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border text-sm",
						children: [
							["Account owner", "Elena Marquez"],
							["Department", "Operations"],
							["Cost centre", "OPS-404"],
							["Budget", "$48,000"]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[110px_1fr] items-center gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
								value,
								onSave: () => {},
								className: "font-medium"
							})]
						}, label))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Rich inline controls"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use inline editing for tags, amounts, and record details."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DemoCard, {
					title: "Editable tags",
					description: "Add and remove tags without opening a modal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary",
								children: [tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setTags(tags.filter((item) => item !== tag));
										toast.success("Tag removed");
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
								})]
							}, tag)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: tagDraft,
								onChange: (e) => setTagDraft(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && tagDraft.trim()) {
										e.preventDefault();
										setTags([...tags, tagDraft.trim()]);
										setTagDraft("");
										toast.success("Tag added");
									}
								},
								className: "min-w-28 flex-1 bg-transparent text-sm outline-none",
								placeholder: "Add a tag..."
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Press Enter to add the typed tag."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
					title: "Quick edit row",
					description: "Edit an item directly from a list",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "divide-y divide-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-9 items-center justify-center rounded-lg bg-info/10 text-info",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
										value: "Q3 operations plan",
										onSave: () => {},
										className: "text-sm font-medium"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Updated 2 hours ago"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toast.success("Item starred"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-muted-foreground hover:text-warning" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-9 items-center justify-center rounded-lg bg-success/10 text-success",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableText, {
										value: "Budget forecast",
										onSave: () => {},
										className: "text-sm font-medium"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Updated yesterday"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toast.success("Item starred"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 text-muted-foreground hover:text-warning" })
								})
							]
						})]
					})
				})]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEditableApp, {}) });
//#endregion
export { SplitComponent as component };
