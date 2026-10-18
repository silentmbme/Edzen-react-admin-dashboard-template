import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Jr as Check, Vr as CircleCheckBig, X as SlidersHorizontal, _n as Lightbulb, ci as Building2, ft as RotateCcw, ji as ArrowLeft, ki as ArrowRight, m as UsersRound, pt as Rocket, r as X, ut as Save } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { t as Checkbox } from "./checkbox-D68DiAFY.mjs";
import { t as Switch } from "./switch-rzYppfRo.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/multi-step-wizard-oa0-BcRj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		title: "Workspace",
		description: "Set up your basics",
		icon: Building2
	},
	{
		title: "Your team",
		description: "Invite collaborators",
		icon: UsersRound
	},
	{
		title: "Preferences",
		description: "Tailor your experience",
		icon: SlidersHorizontal
	},
	{
		title: "Review",
		description: "Ready to launch",
		icon: CircleCheckBig
	}
];
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
function MultiStepWizardApp() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [workspace, setWorkspace] = (0, import_react.useState)("Acme Studio");
	const [email, setEmail] = (0, import_react.useState)("elena@acme.com");
	const [team, setTeam] = (0, import_react.useState)(["elena@acme.com"]);
	const [invite, setInvite] = (0, import_react.useState)("");
	const [updates, setUpdates] = (0, import_react.useState)(true);
	const [tips, setTips] = (0, import_react.useState)(true);
	const current = steps[step];
	const next = () => {
		if (step === steps.length - 1) {
			toast.success("Workspace created successfully");
			setStep(0);
			return;
		}
		setStep(step + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Multi-step wizard",
				subtitle: "Guided form flows that break complex work into simple steps.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setStep(0),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "me-2 size-4" }), "Reset wizard"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Wizard saved as draft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "me-2 size-4" }), "Save draft"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "overflow-hidden border-primary/15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-foreground px-6 py-7 text-background sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[.18em] text-background/60",
								children: "Onboarding workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-2xl text-background  font-bold",
								children: "Create your workspace"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm text-background/70",
								children: "A focused, guided setup with progress, review, and safe navigation between steps."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-background/15 bg-background/10 px-5 py-3 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-background/65",
								children: "Setup progress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xl font-bold",
								children: [Math.round((step + 1) / steps.length * 100), "%"]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-[650px] items-start",
							children: steps.map((item, index) => {
								const Icon = item.icon;
								const active = index === step;
								const done = index < step;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 flex-1 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => index <= step && setStep(index),
										className: "flex min-w-0 items-center gap-3 text-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `flex size-9 shrink-0 items-center justify-center rounded-full border-2 transition ${done ? "border-primary bg-primary text-primary-foreground" : active ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`,
											children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `block text-sm font-semibold ${active || done ? "text-foreground" : "text-muted-foreground"}`,
											children: item.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-xs text-muted-foreground",
											children: item.description
										})] })]
									}), index < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mx-4 h-px flex-1 ${index < step ? "bg-primary" : "bg-border"}` })]
								}, item.title);
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-all duration-500",
							style: { width: `${(step + 1) / steps.length * 100}%` }
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between border-b border-border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(current.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-xl font-semibold",
								children: current.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: step === 0 ? "Start with the information your team will see every day." : step === 1 ? "Invite the people who will build with you." : step === 2 ? "Choose how we keep you informed." : "Check the details before creating your workspace."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground",
							children: [
								"Step ",
								step + 1,
								" of ",
								steps.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8",
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Workspace name",
										hint: "This appears in your dashboard and invitations.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: workspace,
											onChange: (event) => setWorkspace(event.target.value)
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Workspace URL",
										hint: "You can change this later.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center rounded-s-md border border-e-0 border-border bg-muted px-3 text-sm text-muted-foreground",
												children: "edzenadmin.com/"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												className: "rounded-s-none",
												value: workspace.toLowerCase().replace(/\s+/g, "-"),
												readOnly: true
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your role",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											className: "h-10 w-full rounded-md border border-border bg-background px-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Operations" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Product" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Marketing" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Engineering" })
											]
										})
									})
								]
							}),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: "Invite your teammates"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "You can invite more people later."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-col gap-2 sm:flex-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: invite,
												onChange: (event) => setInvite(event.target.value),
												placeholder: "name@company.com"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												onClick: () => {
													if (invite.includes("@")) {
														setTeam([...team, invite]);
														setInvite("");
														toast.success("Invite added");
													} else toast.error("Enter a valid email address");
												},
												children: "Add invite"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-border rounded-xl border border-border",
									children: team.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex size-8 items-center justify-center rounded-full bg-chart-3/10 text-xs font-bold text-chart-3",
												children: member.charAt(0).toUpperCase()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm",
												children: member
											})]
										}), index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Owner"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTeam(team.filter((_, itemIndex) => itemIndex !== index)),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-muted-foreground" })
										})]
									}, `${member}-${index}`))
								})]
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [[[
									"Weekly workspace summary",
									"A quick overview every Monday morning",
									updates,
									setUpdates
								], [
									"Helpful product tips",
									"Guides for getting more from Edzen",
									tips,
									setTips
								]].map(([title, description, checked, setter]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4 rounded-xl border border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: description
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked,
										onCheckedChange: setter
									})]
								}, title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-xl bg-muted/40 p-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, { defaultChecked: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: "Share anonymous usage data"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-muted-foreground",
										children: "Help us improve the product for every team."
									})] })]
								})]
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl bg-success/10 p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-6 shrink-0 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold text-success",
											children: "Your workspace is ready to create"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-success",
											children: "Review the setup summary below, then finish to launch."
										})] })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-border rounded-xl border border-border",
									children: [
										["Workspace", workspace],
										["Owner", email],
										["Team invites", `${team.length} member${team.length === 1 ? "" : "s"}`],
										["Weekly summary", updates ? "Enabled" : "Disabled"],
										["Product tips", tips ? "Enabled" : "Disabled"]
									].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between px-4 py-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value })]
									}, label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-between border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									disabled: step === 0,
									onClick: () => setStep(step - 1),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "me-2 size-4" }), "Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: next,
									children: step === steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "me-2 size-4" }), "Create workspace"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ms-2 size-4" })] })
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: "Why a wizard?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "One decision at a time"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" }), "Keeps complex forms manageable"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" }), "Shows progress and reduces uncertainty"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" }), "Lets users review before submitting"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-foreground p-5 text-background",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-success" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-sm text-background font-semibold",
								children: "Safe to leave"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-muted-foreground",
								children: "Your progress can be saved as a draft at any point in the flow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								className: "mt-4 border-background/20 bg-background/10 text-background hover:bg-background/20 hover:text-background",
								onClick: () => toast.success("Draft saved"),
								children: "Save progress"
							})
						]
					})]
				})]
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiStepWizardApp, {}) });
//#endregion
export { SplitComponent as component };
