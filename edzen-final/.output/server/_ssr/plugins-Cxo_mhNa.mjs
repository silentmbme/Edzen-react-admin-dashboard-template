import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as Tags, On as Italic, Or as CloudUpload, T as Underline, U as Star, _r as CreditCard, gi as Bold, hn as Link, hr as Download, ii as CalendarDays, ir as FileText, oi as CalendarCheck, q as Sparkles, r as X, un as List } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
import { t as Textarea } from "./textarea-BXbb9FJL.mjs";
import { t as Slider } from "./slider-Df2pPzSe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plugins-Cxo_mhNa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PluginCard({ title, description, children, className = "" }) {
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
var allTags = [
	"Design",
	"Development",
	"Marketing",
	"Product",
	"Research",
	"Customer success"
];
function FormPluginsApp() {
	const [tags, setTags] = (0, import_react.useState)(["Design", "Product"]);
	const [tagSearch, setTagSearch] = (0, import_react.useState)("");
	const [rating, setRating] = (0, import_react.useState)(4);
	const [range, setRange] = (0, import_react.useState)([48]);
	const [files, setFiles] = (0, import_react.useState)([]);
	const fileInput = (0, import_react.useRef)(null);
	const addTag = (tag) => {
		if (!tags.includes(tag)) setTags([...tags, tag]);
		setTagSearch("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Form plugins",
				subtitle: "Enhanced controls for richer, faster data entry.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Plugin configuration saved"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "me-2 size-4" }), "Create configuration"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Date & time"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Schedule events with clear date and time controls."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
					title: "Date range",
					description: "Select a start and end date",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Start date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								defaultValue: "2026-08-25"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "End date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								defaultValue: "2026-08-30"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 rounded-xl bg-primary/5 px-3 py-2 text-xs text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "size-4" }), " 5-day project sprint"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
					title: "Date & time picker",
					description: "Choose a specific moment",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								defaultValue: "2026-09-02"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Time",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "time",
								defaultValue: "10:30"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => toast.success("Meeting scheduled"),
							children: "Schedule meeting"
						})
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tags, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Selection controls"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Searchable tags, rating, and range inputs."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 xl:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
						title: "Tag selector",
						description: "Add labels to organize this project",
						className: "xl:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-background p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary",
									children: [tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remove ${tag}`,
										onClick: () => setTags(tags.filter((item) => item !== tag)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
									})]
								}, tag)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: tagSearch,
									onChange: (e) => setTagSearch(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter" && tagSearch.trim()) {
											e.preventDefault();
											addTag(tagSearch.trim());
										}
									},
									className: "min-w-28 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground",
									placeholder: "Add a tag..."
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: allTags.filter((tag) => !tags.includes(tag) && tag.toLowerCase().includes(tagSearch.toLowerCase())).slice(0, 4).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => addTag(tag),
								className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary",
								children: ["+ ", tag]
							}, tag))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
						title: "Star rating",
						description: "Capture product feedback",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 py-3",
								children: [
									1,
									2,
									3,
									4,
									5
								].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setRating(star),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-7 transition ${star <= rating ? "fill-warning text-warning" : "text-muted-foreground/40"}` })
								}, star))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: [rating, ".0 out of 5"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Click a star to change your rating."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 xl:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginCard, {
						title: "Range slider",
						description: "Set a monthly spending limit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-1 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								value: range,
								onValueChange: setRange,
								max: 100,
								step: 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "$0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary",
										children: [
											"$",
											range[0],
											"k"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "$100k"
									})
								]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
						title: "Input mask",
						description: "Formatted card number field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Card number",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "ps-9",
									placeholder: "4242 4242 4242 4242",
									inputMode: "numeric",
									onChange: (event) => {
										const digits = event.target.value.replace(/\D/g, "").slice(0, 16);
										event.target.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
									}
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "Spaces are added automatically as you type."
						})]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Files & rich input"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Upload assets and capture detailed notes."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
					title: "File upload",
					description: "Drop files or browse from your computer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileInput,
							type: "file",
							multiple: true,
							className: "hidden",
							onChange: (event) => setFiles(Array.from(event.target.files ?? []))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => fileInput.current?.click(),
							onDragOver: (event) => event.preventDefault(),
							onDrop: (event) => {
								event.preventDefault();
								setFiles(Array.from(event.dataTransfer.files));
							},
							className: "flex min-h-40 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/20 px-5 text-center transition hover:border-primary hover:bg-primary/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-medium",
									children: "Drop files here or click to browse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "PNG, JPG, PDF up to 10 MB"
								})
							]
						}),
						files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2",
							children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 truncate",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 text-primary" }), file.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setFiles(files.filter((item) => item !== file)),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-muted-foreground" })
								})]
							}, file.name))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PluginCard, {
					title: "Rich text composer",
					description: "A simple formatting toolbar for long-form input",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-xl border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 border-b border-border bg-muted/30 p-2",
							children: [
								Bold,
								Italic,
								Underline,
								Link,
								List
							].map((Icon, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-background hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
							}, index))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "min-h-32 resize-none border-0 focus-visible:ring-0",
							placeholder: "Write a project update..."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => toast.success("Draft saved"),
							children: "Save draft"
						})
					})]
				})]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormPluginsApp, {}) });
//#endregion
export { SplitComponent as component };
