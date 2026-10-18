import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Br as CircleCheck, Cr as Columns3, G as SquareCheckBig, Rr as CircleDot, Zt as MessageSquare, bi as BellRing, hr as Download, ii as CalendarDays, in as Mail, it as Settings2, j as ToggleRight, kt as Pencil, lr as Eye, un as List, ut as Save, yi as Bell } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { t as Checkbox } from "./checkbox-D68DiAFY.mjs";
import { t as Switch } from "./switch-rzYppfRo.mjs";
import { n as RadioGroupItem, t as RadioGroup } from "./radio-group-BHaDaxWy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checks-switches-radios-YV__6jzC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ControlCard({ title, description, children, className = "" }) {
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
function ChecksSwitchesRadiosApp() {
	const [newsletter, setNewsletter] = (0, import_react.useState)(true);
	const [analytics, setAnalytics] = (0, import_react.useState)(false);
	const [notifications, setNotifications] = (0, import_react.useState)(true);
	const [billing, setBilling] = (0, import_react.useState)("monthly");
	const [role, setRole] = (0, import_react.useState)("editor");
	const [tasks, setTasks] = (0, import_react.useState)({
		research: true,
		design: false,
		testing: true
	});
	const [channels, setChannels] = (0, import_react.useState)({
		email: true,
		push: false,
		sms: false
	});
	const [view, setView] = (0, import_react.useState)("board");
	const [consent, setConsent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-7 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: "Forms",
				title: "Checks, switches & radios",
				subtitle: "Selection controls for simple choices, preferences, and configuration.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "me-2 size-4" }), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => toast.success("Control preferences saved"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "me-2 size-4" }), "Save settings"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Checkboxes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use checkboxes when people can select multiple options."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
					title: "Basic checkbox list",
					description: "Clear labels and helper text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: newsletter,
									onCheckedChange: (value) => setNewsletter(value === true),
									className: "mt-0.5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "Weekly product newsletter"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: "A round-up of releases, tips, and product news."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: analytics,
									onCheckedChange: (value) => setAnalytics(value === true),
									className: "mt-0.5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "Share anonymous analytics"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: "Help improve the dashboard experience."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 opacity-55",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									disabled: true,
									className: "mt-0.5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "Required compliance setting"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: "This option is managed by your organization."
								})] })]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlCard, {
					title: "Task checklist",
					description: "A compact multiple-selection list",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border rounded-xl border border-border",
						children: [
							[
								"research",
								"Customer research",
								"Review interview notes"
							],
							[
								"design",
								"Design exploration",
								"Create first concept directions"
							],
							[
								"testing",
								"Usability testing",
								"Schedule five participants"
							]
						].map(([id, title, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-3 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: tasks[id],
									onCheckedChange: (value) => setTasks({
										...tasks,
										[id]: value === true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs text-muted-foreground",
										children: description
									})]
								}),
								tasks[id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-success" })
							]
						}, id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [Object.values(tasks).filter(Boolean).length, " of 3 tasks selected"]
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-chart-3/10 text-chart-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRight, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Switches"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use a switch for a setting that turns on or off immediately."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
					title: "Notification preferences",
					description: "Settings with a direct on/off action",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: [
							[
								"Workspace notifications",
								"Activity and updates from your workspace",
								notifications,
								setNotifications
							],
							[
								"Product recommendations",
								"Personalized feature suggestions",
								true,
								() => {}
							],
							[
								"Security activity",
								"Sign-ins and account changes",
								true,
								() => {}
							]
						].map(([title, description, checked, setter]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 py-4",
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
						}, title))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
					title: "Live setting",
					description: "A clear binary control",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl p-5 ${notifications ? "bg-success/10" : "bg-muted"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex size-11 items-center justify-center rounded-xl ${notifications ? "bg-success text-success-foreground" : "bg-muted-foreground/20 text-muted-foreground"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: notifications,
									onCheckedChange: setNotifications
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-semibold",
								children: notifications ? "Notifications are on" : "Notifications are off"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: notifications ? "You will receive workspace alerts." : "You will not receive workspace alerts."
							})
						]
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-warning/10 text-warning",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Radio groups"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use radio controls when only one option can be active."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
					title: "Plan selection",
					description: "Visual cards make pricing options easier to compare",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
						value: billing,
						onValueChange: setBilling,
						className: "space-y-3",
						children: [
							[
								"monthly",
								"Monthly",
								"$24 / month",
								"Flexible, cancel any time"
							],
							[
								"yearly",
								"Yearly",
								"$19 / month",
								"Save 20% with annual billing"
							],
							[
								"enterprise",
								"Enterprise",
								"Talk to us",
								"For teams with custom needs"
							]
						].map(([value, title, price, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${billing === value ? "border-primary bg-primary/5 ring-1 ring-primary" : "hover:border-primary/40"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-muted-foreground",
										children: description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-sm",
									children: price
								})
							]
						}, value))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlCard, {
					title: "Team role",
					description: "A simple radio group with a current-value panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
						value: role,
						onValueChange: setRole,
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							[
								"viewer",
								"Viewer",
								Eye
							],
							[
								"editor",
								"Editor",
								Pencil
							],
							[
								"admin",
								"Admin",
								ShieldCheck
							]
						].map(([value, title, Icon]) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `cursor-pointer rounded-xl border p-4 text-center transition ${role === value ? "border-primary bg-primary/5 text-primary" : "hover:border-primary/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
										value,
										className: "sr-only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mx-auto size-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-sm font-medium",
										children: title
									})
								]
							}, value);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-between rounded-xl bg-muted/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Selected role"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold capitalize text-primary",
							children: role
						})]
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-xl bg-success/10 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "More control patterns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Compact selection patterns for everyday product settings."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
						title: "Notification channels",
						description: "Select multiple delivery channels",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								[
									"email",
									"Email",
									"Receive updates in your inbox",
									Mail
								],
								[
									"push",
									"Push notifications",
									"Show browser and mobile alerts",
									Bell
								],
								[
									"sms",
									"SMS",
									"Use text messages for urgent updates",
									MessageSquare
								]
							].map(([id, title, description, Icon]) => {
								const ChannelIcon = Icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-center gap-3 rounded-xl border border-border p-3 transition hover:border-primary/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: channels[id],
											onCheckedChange: (value) => setChannels({
												...channels,
												[id]: value === true
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelIcon, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-medium",
												children: title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: description
											})]
										})
									]
								}, id);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlCard, {
						title: "Segmented radio control",
						description: "A compact single-choice alternative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-muted p-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-1",
								children: [
									[
										"board",
										"Board",
										Columns3
									],
									[
										"list",
										"List",
										List
									],
									[
										"calendar",
										"Calendar",
										CalendarDays
									]
								].map(([value, label, Icon]) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setView(value),
										className: `flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition ${view === value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), label]
									}, value);
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-xl border border-dashed border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: [view.charAt(0).toUpperCase() + view.slice(1), " view selected"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "This keeps the radio behavior but uses a compact visual layout."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ControlCard, {
						title: "Consent confirmation",
						description: "A required acknowledgement before an action",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-muted/40 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: consent,
									onCheckedChange: (value) => setConsent(value === true),
									className: "mt-0.5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: "I agree to the workspace terms"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs leading-5 text-muted-foreground",
									children: "I understand that this action shares the selected workspace information with invited members."
								})] })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							disabled: !consent,
							onClick: () => toast.success("Workspace created"),
							children: "Continue"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlCard, {
						title: "Status switches",
						description: "Switches can clearly show operating status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: [
								[
									"Automations",
									true,
									"Run rules when records change"
								],
								[
									"Maintenance mode",
									false,
									"Temporarily pause public access"
								],
								[
									"Public API",
									true,
									"Allow external integrations"
								]
							].map(([label, checked, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 rounded-xl border border-border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									defaultChecked: checked,
									onCheckedChange: () => toast.message(`${label} updated`)
								})]
							}, label))
						})
					})
				]
			})] })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChecksSwitchesRadiosApp, {}) });
//#endregion
export { SplitComponent as component };
