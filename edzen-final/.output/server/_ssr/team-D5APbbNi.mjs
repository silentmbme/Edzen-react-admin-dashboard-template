import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Br as CircleCheck, D as TriangleAlert, Gr as ChevronRight, Zr as ChartNoAxesCombined, Zt as MessageSquare, an as MailPlus, b as UserPlus, kt as Pencil, p as Users, pr as Ellipsis, ri as CalendarOff, st as Search, ui as BriefcaseBusiness, un as List, yn as LayoutGrid } from "../_libs/lucide-react.mjs";
import { i as cn, n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { i as Card, l as getUserImage, r as Badge, s as PageHeader } from "./widgets-7dkqdyCt.mjs";
import { n as SheetContent, t as Sheet } from "./sheet-CveiHStA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-D5APbbNi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var members = [
	{
		name: "Sophia Carter",
		role: "Project Manager",
		department: "Product",
		utilization: 82,
		availability: "Partially available",
		tasks: 12,
		projects: ["Website Redesign", "CRM Migration"],
		skills: [
			"Planning",
			"Client management",
			"Agile"
		],
		email: "sophia@nexui.app"
	},
	{
		name: "Daniel Lee",
		role: "Frontend Developer",
		department: "Engineering",
		utilization: 94,
		availability: "Fully allocated",
		tasks: 18,
		projects: ["Website Redesign", "Mobile App v2"],
		skills: [
			"React",
			"API",
			"Performance"
		],
		email: "daniel@nexui.app"
	},
	{
		name: "Emma Wilson",
		role: "Product Designer",
		department: "Design",
		utilization: 68,
		availability: "Available",
		tasks: 9,
		projects: ["Website Redesign", "Marketing Automation"],
		skills: [
			"UI/UX",
			"Figma",
			"Design systems"
		],
		email: "emma@nexui.app"
	},
	{
		name: "Noah Williams",
		role: "QA Engineer",
		department: "Quality",
		utilization: 106,
		availability: "Overloaded",
		tasks: 14,
		projects: ["Website Redesign", "CRM Migration"],
		skills: [
			"QA",
			"Automation",
			"Testing"
		],
		email: "noah@nexui.app"
	},
	{
		name: "Olivia Smith",
		role: "Business Analyst",
		department: "Product",
		utilization: 72,
		availability: "Available",
		tasks: 8,
		projects: ["CRM Migration", "Marketing Automation"],
		skills: [
			"Analytics",
			"Agile",
			"Research"
		],
		email: "olivia@nexui.app"
	}
];
var availabilityTone = {
	Available: "success",
	"Partially available": "warning",
	"Fully allocated": "info",
	Overloaded: "danger"
};
function ProjectTeamApp() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [view, setView] = (0, import_react.useState)("grid");
	const [availability, setAvailability] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => members.filter((member) => `${member.name} ${member.role} ${member.department} ${member.skills.join(" ")}`.toLowerCase().includes(query.toLowerCase()) && (availability === "All" || member.availability === availability)), [query, availability]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Project team",
			subtitle: "Balance delivery capacity, roles, workload and project coverage across your team.",
			breadcrumb: ["Projects", "Team"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: () => toast.success("Invitation composer opened"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailPlus, { className: "size-4" }), "Invite member"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => toast.success("Member creation form opened"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-4" }), "Add member"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mb-5 overflow-hidden rounded-2xl border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 divide-x rtl:divide-x-reverse divide-y md:grid-cols-3 xl:grid-cols-6 xl:divide-y-0",
				children: [
					[
						"Team members",
						"42",
						Users,
						"text-primary bg-primary/10"
					],
					[
						"Available now",
						"18",
						CircleCheck,
						"text-success bg-success/10"
					],
					[
						"Fully allocated",
						"17",
						BriefcaseBusiness,
						"text-info bg-info/10"
					],
					[
						"Need attention",
						"4",
						TriangleAlert,
						"text-destructive bg-destructive/10"
					],
					[
						"On leave",
						"3",
						CalendarOff,
						"text-warning bg-warning/10"
					],
					[
						"Average utilization",
						"74%",
						ChartNoAxesCombined,
						"text-primary bg-primary/10"
					]
				].map(([label, value, Icon, className]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-9 place-items-center rounded-xl", String(className)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "mt-1 block text-xl tracking-tight",
							children: value
						})
					]
				}, String(label)))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative min-w-[230px] flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Search members, roles or skills",
						className: "h-10 w-full rounded-xl border bg-card ps-9 pe-3 text-sm outline-none ring-primary transition focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: availability,
					onChange: (event) => setAvailability(event.target.value),
					className: "h-10 rounded-xl border bg-card px-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Available" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Partially available" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Fully allocated" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Overloaded" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex rounded-xl border bg-card p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Grid view",
						onClick: () => setView("grid"),
						className: cn("grid size-8 place-items-center rounded-lg", view === "grid" && "bg-primary text-primary-foreground"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "List view",
						onClick: () => setView("list"),
						className: cn("grid size-8 place-items-center rounded-lg", view === "list" && "bg-primary text-primary-foreground"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
					})]
				})
			]
		}),
		view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
			children: rows.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				bodyClassName: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "w-full text-start",
					onClick: () => setActive(member),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: getUserImage(member.name),
										alt: member.name,
										className: "size-12 rounded-xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-1 -end-1 size-3 rounded-full border-2 border-card", member.availability === "Overloaded" ? "bg-destructive" : member.availability === "Available" ? "bg-success" : "bg-warning") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block truncate text-base",
										children: member.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block truncate text-sm text-muted-foreground",
										children: member.role
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5 text-muted-foreground" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: availabilityTone[member.availability],
								children: member.availability
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: member.department
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Weekly utilization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [member.utilization, "%"] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-2 overflow-hidden rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("h-full rounded-full", member.utilization > 100 ? "bg-destructive" : member.utilization > 85 ? "bg-warning" : "bg-primary"),
									style: { width: `${Math.min(member.utilization, 100)}%` }
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: member.tasks }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "active tasks"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex -space-x-2 rtl:space-x-reverse",
								children: member.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-7 place-items-center rounded-full border-2 border-card bg-primary/10 text-[9px] font-bold text-primary",
									children: index + 1
								}, project))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: member.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-muted px-2 py-1 text-[11px] text-muted-foreground",
								children: skill
							}, skill))
						})
					]
				})
			}, member.name))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			bodyClassName: "overflow-x-auto p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "min-w-[760px] w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "border-b bg-muted/30 text-start text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-medium",
							children: "Member"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Department"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Workload"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Availability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b last:border-0 hover:bg-muted/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getUserImage(member.name),
									alt: "",
									className: "size-9 rounded-lg object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "block",
									children: member.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: member.role
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4",
							children: member.department
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 w-16 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("h-full rounded-full", member.utilization > 100 ? "bg-destructive" : "bg-primary"),
										style: { width: `${Math.min(member.utilization, 100)}%` }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [member.utilization, "%"] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: availabilityTone[member.availability],
								children: member.availability
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-4",
							children: member.projects.length
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-5 py-4 text-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setActive(member),
								children: "View profile"
							})
						})
					]
				}, member.name)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: !!active,
			onOpenChange: (open) => !open && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
				className: "w-full overflow-y-auto p-0 sm:max-w-xl",
				children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden border-b bg-primary/[.16] p-6 pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -end-12 -top-10 size-40 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex items-start justify-between gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: getUserImage(active.name),
									alt: active.name,
									className: "size-16 rounded-2xl object-cover shadow-sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -bottom-1 -end-1 size-4 rounded-full border-2 border-card", active.availability === "Overloaded" ? "bg-destructive" : active.availability === "Available" ? "bg-success" : "bg-warning") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold",
									children: active.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: [
										active.role,
										" - ",
										active.department
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: availabilityTone[active.availability],
										children: active.availability
									})
								})
							] })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border bg-muted/[.3] p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Utilization"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
										className: "mt-1 block text-lg",
										children: [active.utilization, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border bg-muted/[.3] p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Active tasks"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "mt-1 block text-lg",
										children: active.tasks
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border bg-muted/[.3] p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Projects"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "mt-1 block text-lg",
										children: active.projects.length
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "rounded-xl border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold",
										children: "Capacity this week"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Workload based on committed delivery work."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesCombined, { className: "size-5 text-primary" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-2.5 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("h-full rounded-full", active.utilization > 100 ? "bg-destructive" : active.utilization > 85 ? "bg-warning" : "bg-success"),
										style: { width: `${Math.min(active.utilization, 100)}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: active.utilization > 100 ? "Over capacity - rebalance tasks" : "Capacity is being monitored" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.max(0, 100 - active.utilization), "% available"] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Assigned projects"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Current delivery ownership"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toast.success("Project assignments opened"),
								className: "text-sm font-semibold text-primary hover:underline",
								children: "Manage"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-2",
							children: active.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-xl border p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-sm font-bold text-primary",
										children: index + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block text-sm",
											children: project
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Active project allocation"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-muted-foreground" })
								]
							}, project))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Skills"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Areas of expertise used on current projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: active.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: skill }, skill))
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 border-t pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => toast.success("Message composer opened"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), "Message"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => toast.success("Member editor opened"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Manage member"]
							})]
						})
					]
				})] })
			})
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectTeamApp, {}) });
//#endregion
export { SplitComponent as component };
