import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Br as CircleCheck, D as TriangleAlert, Fr as Circle, Hr as CircleAlert, M as TimerReset, Vr as CircleCheckBig, hr as Download } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
import { t as Textarea } from "./textarea-BXbb9FJL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/validation-Drxs4x0R.js
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
function StateField({ label, state, message, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute end-3 top-1/2 -translate-y-1/2",
					children: [state === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-success" }), state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-destructive" })]
				})]
			}),
			message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-xs ${state === "error" ? "text-destructive" : state === "success" ? "text-success" : "text-muted-foreground"}`,
				children: message
			})
		]
	});
}
function FormValidationApp() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [timingEmail, setTimingEmail] = (0, import_react.useState)("");
	const [timingTouched, setTimingTouched] = (0, import_react.useState)(false);
	const [submitTiming, setSubmitTiming] = (0, import_react.useState)(false);
	const emailOk = /^\S+@\S+\.\S+$/.test(email);
	const passwordRules = [
		password.length >= 8,
		/[A-Z]/.test(password),
		/[0-9]/.test(password)
	];
	const passwordOk = passwordRules.every(Boolean);
	const submit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		if (emailOk && passwordOk) toast.success("Account created successfully");
		else toast.error("Please correct the highlighted fields");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Form validation",
				subtitle: "Clear validation states, useful messages, and friendly recovery patterns.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Validation rules saved"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "me-2 size-4" }), "Save rules"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Field states"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use immediate, readable feedback near the field."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Default",
						description: "Neutral helper text",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Workspace name",
							state: "default",
							message: "Use the name your team recognizes.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "Edzen",
								className: "pe-10"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Success",
						description: "Input is ready to submit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Work email",
							state: "success",
							message: "This email is available.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "elena@edzenadmin.com",
								className: "border-success pe-10 focus-visible:ring-success"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "Error",
						description: "Explain how to fix it",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Website",
							state: "error",
							message: "Enter a valid URL, such as https://example.com.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "edzen admin",
								className: "border-destructive pe-10 focus-visible:ring-destructive"
							})
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
					title: "Create your account",
					description: "Inline validation after submitting the form",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-medium",
										children: "Full name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Jane Cooper" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-medium",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { placeholder: "Acme Inc." })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
								label: "Work email",
								state: email ? emailOk ? "success" : "error" : submitted ? "error" : "default",
								message: email ? emailOk ? "Looks good." : "Please enter a valid email address." : submitted ? "Email is required." : "We will use this for account updates.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: email,
									onChange: (event) => setEmail(event.target.value),
									placeholder: "jane@company.com",
									className: `pe-10 ${email && (emailOk ? "border-success focus-visible:ring-success" : "border-destructive focus-visible:ring-destructive")}`
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
								label: "Password",
								state: password ? passwordOk ? "success" : "error" : submitted ? "error" : "default",
								message: password ? passwordOk ? "Strong password." : "Your password does not meet all requirements." : submitted ? "Password is required." : "Choose a strong password to protect your account.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: password,
									onChange: (event) => setPassword(event.target.value),
									type: "password",
									placeholder: "Create a password",
									className: `pe-10 ${password && (passwordOk ? "border-success focus-visible:ring-success" : "border-destructive focus-visible:ring-destructive")}`
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => {
										setEmail("");
										setPassword("");
										setSubmitted(false);
									},
									children: "Clear form"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									children: "Create account"
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DemoCard, {
					title: "Password requirements",
					description: "Guide the user while they type",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Password strength"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2.5 py-1 text-xs font-medium ${passwordOk ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`,
								children: passwordOk ? "Strong" : password ? "In progress" : "Not set"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1.5",
							children: [
								0,
								1,
								2
							].map((index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 flex-1 rounded-full ${passwordRules[index] ? "bg-success" : "bg-muted"}` }, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-3",
							children: [
								["At least 8 characters", passwordRules[0]],
								["One uppercase letter", passwordRules[1]],
								["One number", passwordRules[2]]
							].map(([label, complete]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs",
								children: [complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: complete ? "text-foreground" : "text-muted-foreground",
									children: label
								})]
							}, label))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Validation patterns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Helpful messages for complex forms."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DemoCard, {
					title: "Form-level summary",
					description: "Bring attention to fields that need review",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-destructive/30 bg-destructive/5 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-destructive",
								children: "There are 2 issues to fix"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-2 space-y-1 text-xs text-destructive/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: " Email address is required" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: " Please accept the terms to continue" })]
							})] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Email",
							state: "error",
							message: "Email is required.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { className: "border-destructive pe-10" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 text-xs text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox" }), " I agree to the terms of service"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
					title: "Async availability",
					description: "Validate values that need a server check",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium",
								children: "Workspace URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-s-md border border-e-0 border-border bg-muted px-3 text-xs text-muted-foreground",
									children: "edzenadmin.com/"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "rounded-s-none",
									defaultValue: "design-team"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 rounded-lg bg-success/10 p-3 text-xs text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0" }), "This workspace URL is available."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => toast.success("Availability checked"),
								children: "Check availability"
							})
						]
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerReset, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Validation timing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Choose when feedback appears for a calmer form experience."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "On change",
						description: "Feedback updates while the user types",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: "invalid-email",
									className: "border-destructive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-destructive",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), "Enter a valid email address."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-2 text-[11px] text-muted-foreground",
									children: "Best for predictable input formats and passwords."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "On blur",
						description: "Validate after a field is finished",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Email address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: timingEmail,
									onChange: (event) => setTimingEmail(event.target.value),
									onBlur: () => setTimingTouched(true),
									placeholder: "you@company.com",
									className: timingTouched && !/^\S+@\S+\.\S+$/.test(timingEmail) ? "border-destructive" : timingTouched ? "border-success" : ""
								}),
								timingTouched && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center gap-1.5 text-xs ${/^\S+@\S+\.\S+$/.test(timingEmail) ? "text-success" : "text-destructive"}`,
									children: [/^\S+@\S+\.\S+$/.test(timingEmail) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), /^\S+@\S+\.\S+$/.test(timingEmail) ? "Email looks good." : "Enter a valid email address."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pt-2 text-[11px] text-muted-foreground",
									children: "Click outside the field to validate it."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
						title: "On submit",
						description: "Show messages only after the form is sent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-3",
							onSubmit: (event) => {
								event.preventDefault();
								setSubmitTiming(true);
								toast.error("Please complete the required field");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs",
											children: "Project name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											placeholder: "Website redesign",
											className: submitTiming ? "border-destructive" : ""
										}),
										submitTiming && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs text-destructive",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), "Project name is required."]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "sm",
									className: "mt-1",
									children: "Submit form"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: "Good for shorter forms with a single final action."
								})
							]
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoCard, {
				title: "Validated contact request",
				description: "Error messages remain close to the fields and preserve the user input",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-5 lg:grid-cols-2",
					onSubmit: (event) => {
						event.preventDefault();
						toast.success("Request sent");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Project name",
							state: "success",
							message: "Name is available.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "Website redesign",
								className: "border-success pe-10"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateField, {
							label: "Budget",
							state: "error",
							message: "Enter a budget greater than $500.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								defaultValue: "$100",
								className: "border-destructive pe-10"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium",
								children: "Project details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "min-h-28",
								placeholder: "Tell us what you are planning..."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Send request"
							})
						})]
					})]
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormValidationApp, {}) });
//#endregion
export { SplitComponent as component };
