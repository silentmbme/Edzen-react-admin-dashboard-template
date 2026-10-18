import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Br as CircleCheck, Hr as CircleAlert, N as TextCursorInput, Or as CloudUpload, X as SlidersHorizontal, hr as Download, ln as LoaderCircle, lr as Eye, mn as ListChecks, st as Search, ur as EyeOff, ut as Save } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Checkbox } from "./checkbox-D68DiAFY.mjs";
import { t as Switch } from "./switch-rzYppfRo.mjs";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-BHaDaxWy.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
import { t as Textarea } from "./textarea-BXbb9FJL.mjs";
import { t as Slider } from "./slider-Df2pPzSe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/elements-Dbnveiog.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ElementCard({ title, description, children, className = "" }) {
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
function Field({ label, children, hint, required = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				className: "text-xs font-medium",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ms-0.5 text-destructive",
					children: "*"
				})]
			}),
			children,
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: hint
			})
		]
	});
}
function FormElementsApp() {
	const [passwordVisible, setPasswordVisible] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const [plan, setPlan] = (0, import_react.useState)("pro");
	const [volume, setVolume] = (0, import_react.useState)([64]);
	const [alerts, setAlerts] = (0, import_react.useState)(true);
	const [access, setAccess] = (0, import_react.useState)(true);
	const [file, setFile] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Form elements",
				subtitle: "Core inputs, selection controls, and feedback states for every workflow.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Form configuration saved"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "me-2 size-4" }), "Save configuration"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextCursorInput, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Text inputs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Standard text fields, input groups, sizes, and states."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 xl:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Basic inputs",
						description: "Clear labels, helper text, and predictable dimensions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Elena Marquez" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email address",
									required: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "email",
										placeholder: "elena@company.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "tel",
										placeholder: "+1 (415) 555-0136"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Website",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "url",
										placeholder: "https://company.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Read only",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										readOnly: true,
										defaultValue: "PRJ-1048",
										className: "bg-muted/40"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Disabled",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										disabled: true,
										defaultValue: "Unavailable"
									})
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Input variations",
						description: "Choose a size to match the density of its context",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Search",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "ps-9",
											placeholder: "Search workspace"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Password",
									hint: "Use the icon to reveal the current value.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: passwordVisible ? "text" : "password",
											defaultValue: "Edzen2026",
											className: "pe-10"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setPasswordVisible(!passwordVisible),
											className: "absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground",
											children: passwordVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "h-8 text-xs",
											placeholder: "Small"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Default" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "h-11 text-base",
											placeholder: "Large"
										})
									]
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-5 xl:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Input groups",
						description: "Combine useful context with a familiar text field",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Profile URL",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex items-center rounded-s-md border border-e-0 border-border bg-muted px-3 text-sm text-muted-foreground",
											children: "edzen.com/"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "rounded-s-none",
											placeholder: "elena"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Budget",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center rounded-s-md border border-e-0 border-border bg-muted px-3 text-sm text-muted-foreground",
												children: "$"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												className: "rounded-none",
												type: "number",
												placeholder: "0.00"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center rounded-e-md border border-s-0 border-border bg-muted px-3 text-sm text-muted-foreground",
												children: "USD"
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Search reports",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "rounded-e-none",
											placeholder: "Search reports"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "rounded-s-none",
											onClick: () => toast.message("Search submitted"),
											children: "Search"
										})]
									})
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElementCard, {
						title: "Textarea & character count",
						description: "Long-form input with a visible maximum",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Project notes",
							hint: `${note.length} / 240 characters`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: note,
								onChange: (event) => setNote(event.target.value.slice(0, 240)),
								placeholder: "Add useful delivery context for the team...",
								className: "min-h-36 resize-y"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => {
									setNote("");
									toast.message("Notes cleared");
								},
								children: "Clear notes"
							})
						})]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListChecks, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Choices & toggles"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use the right selection pattern for one, many, or binary choices."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElementCard, {
					title: "Radio cards",
					description: "A visual single-selection control",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
						value: plan,
						onValueChange: setPlan,
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							[
								"starter",
								"Starter",
								"$0",
								"For personal work"
							],
							[
								"pro",
								"Pro",
								"$24",
								"For small teams"
							],
							[
								"scale",
								"Scale",
								"$79",
								"For growing teams"
							]
						].map(([value, title, price, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `cursor-pointer rounded-xl border p-4 transition ${plan === value ? "border-primary bg-primary/[.05] ring-1 ring-primary" : "border-border hover:border-primary/40"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold",
										children: price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: description
								})
							]
						}, value))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: "Selected plan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "capitalize",
							children: plan
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
					title: "Checkboxes & switches",
					description: "Multiple selections and binary preferences",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { defaultChecked: true }), "Share usage analytics"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {}), "Include guest users in reports"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { disabled: true }), "Restricted setting"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Product alerts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Feature and release messages"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: alerts,
										onCheckedChange: setAlerts
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Private workspace"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Only invited teammates can view it"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: access,
										onCheckedChange: setAccess
									})]
								})]
							})
						]
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-success/10 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Special controls"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Native, upload, and feedback controls for complete data capture."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Range slider",
						description: "Set a notification volume",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								value: volume,
								onValueChange: setVolume,
								max: 100,
								step: 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Silent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary",
										children: [volume[0], "%"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Loud"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ElementCard, {
						title: "File upload",
						description: "Browse or drop a file",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "file",
							className: "hidden",
							onChange: (event) => setFile(event.target.files?.[0] ?? null)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => inputRef.current?.click(),
							className: "flex min-h-32 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/20 text-center transition hover:border-primary hover:bg-primary/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-medium",
									children: file ? file.name : "Upload an attachment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "PDF, PNG, or JPG up to 10 MB"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Native controls",
						description: "Color, date, and time input types",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Accent color",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "color",
									defaultValue: "#0e7974",
									className: "h-10 p-1"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Start date",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Review time",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "time" })
								})]
							})]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Field feedback"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Make each state easy to identify and resolve."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Success",
						description: "A verified input",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Verified email",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "elena@northstar.com",
									className: "border-success pe-10 focus-visible:ring-success"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "absolute end-3 top-1/2 size-4 -translate-y-1/2 text-success" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-success",
								children: "Email is verified."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Error",
						description: "Explain what needs to change",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Project slug",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "North Star!",
									className: "border-destructive pe-10 focus-visible:ring-destructive"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "absolute end-3 top-1/2 size-4 -translate-y-1/2 text-destructive" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive",
								children: "Use lowercase letters, numbers, and hyphens only."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementCard, {
						title: "Loading",
						description: "Tell users when a check is running",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Workspace URL",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "Checking availability...",
									readOnly: true,
									className: "pe-10"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "absolute end-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-primary" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Checking this value in the background."
							})]
						})
					})
				]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormElementsApp, {}) });
//#endregion
export { SplitComponent as component };
