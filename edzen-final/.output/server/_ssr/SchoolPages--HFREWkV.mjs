import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as Plus, Di as ArrowUpRight, Gr as ChevronRight, Kr as ChevronLeft, Mr as Clock3, Nr as ClipboardList, V as StickyNote, Wn as GraduationCap, Xn as Funnel, Yr as CheckCheck, g as UserX, hi as BookOpen, hr as Download, ii as CalendarDays, p as Users, rn as MapPin, st as Search, w as Undo2 } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, p as userImages, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SchoolPages--HFREWkV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statuses = [
	"Present",
	"Late",
	"Absent",
	"Excused",
	"Unmarked"
];
var statusColor = {
	Present: "bg-success",
	Late: "bg-warning",
	Absent: "bg-destructive",
	Excused: "bg-info",
	Unmarked: "bg-muted-foreground/30"
};
function AttendancePage({ students, classes, initial }) {
	const [date, setDate] = (0, import_react.useState)("2026-10-09");
	const [registers, setRegisters] = (0, import_react.useState)({ "2026-10-09": Object.fromEntries(Object.entries(initial).map(([id, status]) => [id, {
		status,
		note: "",
		minutes: 0
	}])) });
	const [query, setQuery] = (0, import_react.useState)("");
	const [classFilter, setClassFilter] = (0, import_react.useState)("All");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [bulk, setBulk] = (0, import_react.useState)("Present");
	const [undo, setUndo] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)({
		status: "Present",
		note: "",
		minutes: 0
	});
	const [error, setError] = (0, import_react.useState)("");
	const { base } = useChartTheme();
	const register = registers[date] ?? {};
	const entry = (id) => register[id] ?? {
		status: "Unmarked",
		note: "",
		minutes: 0
	};
	const scope = students.filter((s) => classFilter === "All" || s.classId === classFilter);
	const count = (value) => scope.filter((s) => entry(s.id).status === value).length;
	const marked = scope.length - count("Unmarked");
	const denominator = count("Present") + count("Late") + count("Absent");
	const rate = denominator ? Math.round((count("Present") + count("Late")) / denominator * 100) : null;
	const visible = scope.filter((s) => `${s.name} ${s.id} ${s.guardian}`.toLowerCase().includes(query.trim().toLowerCase()) && (filter === "All" || entry(s.id).status === filter));
	const attention = scope.filter((s) => ["Absent", "Late"].includes(entry(s.id).status));
	const changeDate = (value) => {
		setDate(value);
		setSelected([]);
		setNotice("");
	};
	const moveDate = (days) => {
		if (!date) return;
		const day = /* @__PURE__ */ new Date(date + "T12:00:00Z");
		day.setUTCDate(day.getUTCDate() + days);
		changeDate(day.toISOString().slice(0, 10));
	};
	const changeEntries = (changes, message) => {
		if (!date) return;
		setUndo({
			date,
			entries: { ...register }
		});
		setRegisters((prev) => ({
			...prev,
			[date]: {
				...register,
				...changes
			}
		}));
		setNotice(message);
	};
	const apply = (ids, value) => {
		changeEntries(Object.fromEntries(ids.map((id) => [id, {
			...entry(id),
			status: value,
			minutes: value === "Late" ? entry(id).minutes : 0
		}])), `Marked ${ids.length} student${ids.length === 1 ? "" : "s"} ${value.toLowerCase()} for ${date}.`);
		setSelected([]);
	};
	const donutOptions = mergeOptions(base, {
		labels: statuses,
		colors: [
			token("--success"),
			token("--warning"),
			token("--destructive"),
			token("--info"),
			token("--muted")
		],
		stroke: {
			width: 3,
			colors: [token("--card")]
		},
		legend: { show: false },
		dataLabels: { enabled: false },
		plotOptions: { pie: { donut: {
			size: "78%",
			labels: {
				show: true,
				total: {
					show: true,
					showAlways: true,
					label: "Recorded",
					formatter: () => `${marked}/${scope.length}`
				}
			}
		} } }
	});
	const exportRegister = () => {
		const rows = [[
			"Date",
			"ID",
			"Student",
			"Class",
			"Status",
			"Late minutes",
			"Note"
		], ...visible.map((s) => [
			date,
			s.id,
			s.name,
			s.classId,
			entry(s.id).status,
			String(entry(s.id).minutes),
			entry(s.id).note
		])];
		const url = URL.createObjectURL(new Blob([rows.map((r) => r.map((v) => "\"" + v.replaceAll("\"", "\"\"") + "\"").join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" }));
		const a = document.createElement("a");
		a.href = url;
		a.download = `attendance-${date}.csv`;
		a.click();
		URL.revokeObjectURL(url);
		setNotice(`Exported ${visible.length} visible attendance records.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Attendance",
			subtitle: "A focused daily register for class attendance, exceptions, and review notes.",
			breadcrumb: [
				"Management",
				"School Management",
				"Attendance"
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				disabled: !date,
				onClick: exportRegister,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export register"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 place-items-center rounded-xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Daily attendance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Sample academic year 2026-27 / edits last for this page session"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						"aria-label": "Previous attendance day",
						disabled: !date,
						onClick: () => moveDate(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4 rtl:rotate-180" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"aria-label": "Attendance date",
						type: "date",
						className: "w-auto",
						value: date,
						onChange: (e) => changeDate(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						"aria-label": "Next attendance day",
						disabled: !date,
						onClick: () => moveDate(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 rtl:rotate-180" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "info",
						children: "Demo data"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Students in scope",
					value: scope.length,
					caption: classFilter === "All" ? "All five class groups" : classFilter,
					Icon: Users,
					tone: "bg-primary/10 text-primary"
				},
				{
					label: "Present / late",
					value: count("Present") + count("Late"),
					caption: `${count("Late")} late arrivals`,
					Icon: CheckCheck,
					tone: "bg-success/10 text-success"
				},
				{
					label: "Absent",
					value: count("Absent"),
					caption: `${count("Excused")} excused separately`,
					Icon: UserX,
					tone: "bg-destructive/10 text-destructive"
				},
				{
					label: "Unmarked",
					value: count("Unmarked"),
					caption: `${marked} of ${scope.length} recorded`,
					Icon: ClipboardList,
					tone: "bg-warning/10 text-warning"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				bodyClassName: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-10 place-items-center rounded-xl ${s.tone}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-3xl font-semibold",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: s.caption
					})
				]
			}, s.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-5 xl:grid-cols-[300px_minmax(0,1fr)_300px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Daily distribution",
					description: "Selected date and class scope",
					bodyClassName: "p-5",
					children: [
						marked || scope.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
							type: "donut",
							height: 180,
							options: donutOptions,
							series: statuses.map(count)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-8 text-center text-sm text-muted-foreground",
							children: "No students in this class."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-2",
							children: statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setFilter(filter === value ? "All" : value);
									setSelected([]);
								},
								"aria-pressed": filter === value,
								className: "flex w-full items-center justify-between rounded-lg px-2 py-1 text-xs hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${statusColor[value]}` }), value]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: count(value)
								})]
							}, value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-medium",
								children: ["Attendance rate: ", rate === null ? "Not available" : `${rate}%`]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] leading-4 text-muted-foreground",
								children: "Present and late divided by present, late, and absent. Excused and unmarked records are excluded."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Class completion",
					description: "Click a class to focus the register",
					bodyClassName: "p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: classes.map((c) => {
							const roster = students.filter((s) => s.classId === c.id);
							const recorded = roster.filter((s) => entry(s.id).status !== "Unmarked").length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"aria-label": `Focus ${c.id}`,
								"aria-pressed": classFilter === c.id,
								onClick: () => {
									setClassFilter(classFilter === c.id ? "All" : c.id);
									setSelected([]);
								},
								className: "block w-full text-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: c.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [
												recorded,
												"/",
												roster.length,
												" recorded"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex h-2 overflow-hidden rounded-full bg-muted",
										children: statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: statusColor[value],
											style: { width: `${roster.length ? roster.filter((s) => entry(s.id).status === value).length / roster.length * 100 : 0}%` }
										}, value))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[10px] text-muted-foreground",
										children: c.teacher
									})
								]
							}, c.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Needs attention",
					description: "Absent students and late arrivals",
					bodyClassName: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-64 space-y-3 overflow-y-auto",
						children: [attention.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex w-full items-center gap-3 rounded-xl border border-border p-3 text-start hover:bg-muted/40",
							onClick: () => {
								setEditing(s);
								setDraft(entry(s.id));
								setError("");
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.photo,
									alt: s.name,
									className: "size-9 shrink-0 rounded-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs font-semibold",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: [
											s.classId,
											" / ",
											entry(s.id).status,
											entry(s.id).minutes ? ` / ${entry(s.id).minutes} min` : ""
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNote, { className: "size-3.5 text-muted-foreground" })
							]
						}, s.id)), !attention.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "mx-auto size-8 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "No marked absences or late arrivals."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[10px] leading-4 text-muted-foreground",
						children: "Review notes remain local. No guardian notifications are sent."
					})]
				})
			]
		}),
		notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-success/10 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: "text-sm text-success",
				children: notice
			}), undo && undo.date === date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: () => {
					setRegisters((prev) => ({
						...prev,
						[date]: undo.entries
					}));
					setUndo(null);
					setNotice("Last attendance change undone.");
					setSelected([]);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" }), "Undo last change"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Student register",
			description: `${visible.length} students in the current view`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				disabled: !date || !visible.some((s) => entry(s.id).status === "Unmarked"),
				onClick: () => apply(visible.filter((s) => entry(s.id).status === "Unmarked").map((s) => s.id), "Present"),
				children: "Mark unmarked present"
			}),
			bodyClassName: "p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 border-b border-border p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-w-0 flex-1 sm:min-w-52",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Search school records",
								value: query,
								onChange: (e) => {
									setQuery(e.target.value);
									setSelected([]);
								},
								placeholder: "Search student, reference, or guardian...",
								className: "ps-9"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Filter class",
							value: classFilter,
							onChange: (e) => {
								setClassFilter(e.target.value);
								setSelected([]);
							},
							className: "h-10 rounded-lg border border-border bg-card px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "All",
								children: "All classes"
							}), classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.title
							}, c.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Filter school status",
							value: filter,
							onChange: (e) => {
								setFilter(e.target.value);
								setSelected([]);
							},
							className: "h-10 rounded-lg border border-border bg-card px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "All",
								children: "All statuses"
							}), statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
						})
					]
				}),
				selected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 border-b border-border bg-primary/5 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium",
							children: [selected.length, " selected"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "Bulk attendance status",
							value: bulk,
							onChange: (e) => setBulk(e.target.value),
							className: "rounded-lg border border-border bg-card px-3 py-2 text-xs",
							children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !date,
							onClick: () => apply(selected, bulk),
							children: "Apply to selected"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => setSelected([]),
							children: "Clear selection"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						"aria-label": "Select visible students",
						className: "accent-primary",
						checked: visible.length > 0 && visible.every((s) => selected.includes(s.id)),
						onChange: (e) => setSelected(e.target.checked ? visible.map((s) => s.id) : [])
					})
				}), [
					"Student",
					"Class",
					"Attendance",
					"Review notes",
					"Actions"
				].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						"aria-label": `Select ${s.id}`,
						className: "accent-primary",
						checked: selected.includes(s.id),
						onChange: (e) => setSelected((prev) => e.target.checked ? [...prev, s.id] : prev.filter((id) => id !== s.id))
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.photo,
							alt: s.name,
							className: "size-10 shrink-0 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: s.id
						})] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.classId }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						"aria-label": `Attendance ${s.id}`,
						disabled: !date,
						value: entry(s.id).status,
						onChange: (e) => apply([s.id], e.target.value),
						className: "rounded-lg border border-border bg-card px-3 py-2 text-sm",
						children: statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: value }, value))
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-52 truncate text-xs text-muted-foreground",
						children: entry(s.id).note || "No review note"
					}), entry(s.id).status === "Late" && entry(s.id).minutes > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-[10px] text-warning",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-3" }),
							entry(s.id).minutes,
							" minutes late"
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						"aria-label": `Review ${s.id}`,
						size: "sm",
						variant: "outline",
						disabled: !date,
						onClick: () => {
							setEditing(s);
							setDraft({ ...entry(s.id) });
							setError("");
						},
						children: "Review"
					}) })
				] }, s.id)), !visible.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
					colSpan: 6,
					className: "p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "mx-auto size-6 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "No students match your filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: "outline",
							size: "sm",
							onClick: () => {
								setQuery("");
								setClassFilter("All");
								setFilter("All");
								setSelected([]);
							},
							children: "Reset filters"
						})
					]
				}) })] })] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!editing,
			onOpenChange: (open) => {
				if (!open) setEditing(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Attendance review" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				editing?.id,
				" / ",
				date,
				" / Local sample record"
			] })] }), editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-5",
				onSubmit: (e) => {
					e.preventDefault();
					if (draft.status === "Late" && (!Number.isInteger(draft.minutes) || draft.minutes < 0 || draft.minutes > 240)) {
						setError("Late minutes must be a whole number from 0 to 240.");
						return;
					}
					changeEntries({ [editing.id]: {
						...draft,
						note: draft.note.trim(),
						minutes: draft.status === "Late" ? draft.minutes : 0
					} }, `Attendance review saved for ${editing.name}.`);
					setEditing(null);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl bg-muted/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: editing.photo,
							alt: editing.name,
							className: "size-12 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: editing.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								editing.classId,
								" / Guardian: ",
								editing.guardian
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["Status", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "Review attendance status",
							className: "mt-2 w-full rounded-lg border border-border bg-card p-2",
							value: draft.status,
							onChange: (e) => setDraft({
								...draft,
								status: e.target.value
							}),
							children: statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: value }, value))
						})]
					}),
					draft.status === "Late" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["Minutes late", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"aria-label": "Minutes late",
							type: "number",
							min: "0",
							max: "240",
							step: "1",
							required: true,
							className: "mt-2",
							value: draft.minutes,
							onChange: (e) => setDraft({
								...draft,
								minutes: Number(e.target.value)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: [
							"Reason or review note",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								"aria-label": "Attendance note",
								maxLength: 500,
								rows: 4,
								value: draft.note,
								onChange: (e) => setDraft({
									...draft,
									note: e.target.value
								}),
								placeholder: "Record an absence reason or follow-up note...",
								className: "mt-2 w-full resize-none rounded-xl border border-border bg-card p-3 text-sm outline-none focus:border-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-[10px] font-normal text-muted-foreground",
								children: [draft.note.length, "/500 characters / session-only record"]
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Save attendance review"
					})
				]
			})] })
		})
	] });
}
var classes = [
	{
		id: "8-A",
		title: "Grade 8 / A",
		teacher: "Sophia Carter",
		room: "Room 201",
		capacity: 30,
		subjects: 7,
		color: "primary"
	},
	{
		id: "9-A",
		title: "Grade 9 / A",
		teacher: "Daniel Reyes",
		room: "Room 202",
		capacity: 32,
		subjects: 8,
		color: "info"
	},
	{
		id: "10-A",
		title: "Grade 10 / A",
		teacher: "Emma Wilson",
		room: "Room 301",
		capacity: 30,
		subjects: 8,
		color: "success"
	},
	{
		id: "11-A",
		title: "Grade 11 / A",
		teacher: "Noah Williams",
		room: "Room 302",
		capacity: 28,
		subjects: 6,
		color: "warning"
	},
	{
		id: "12-A",
		title: "Grade 12 / A",
		teacher: "Olivia Smith",
		room: "Room 401",
		capacity: 28,
		subjects: 6,
		color: "primary"
	}
];
var initialStudents = [
	{
		id: "STU-101",
		name: "Ava Thompson",
		classId: "8-A",
		guardian: "Sarah Thompson",
		email: "sarah@example.com",
		status: "Active",
		photo: userImages.user1
	},
	{
		id: "STU-102",
		name: "Liam Brown",
		classId: "8-A",
		guardian: "Michael Brown",
		email: "michael@example.com",
		status: "Active",
		photo: userImages.user2
	},
	{
		id: "STU-103",
		name: "Emma Davis",
		classId: "9-A",
		guardian: "Laura Davis",
		email: "laura@example.com",
		status: "Active",
		photo: userImages.user3
	},
	{
		id: "STU-104",
		name: "Noah Patel",
		classId: "9-A",
		guardian: "Priya Patel",
		email: "priya@example.com",
		status: "On leave",
		photo: userImages.user4
	},
	{
		id: "STU-105",
		name: "Olivia Martin",
		classId: "10-A",
		guardian: "Alex Martin",
		email: "alex@example.com",
		status: "Active",
		photo: userImages.user1
	},
	{
		id: "STU-106",
		name: "James Wilson",
		classId: "10-A",
		guardian: "Grace Wilson",
		email: "grace@example.com",
		status: "Active",
		photo: userImages.user2
	},
	{
		id: "STU-107",
		name: "Sophia Lee",
		classId: "11-A",
		guardian: "David Lee",
		email: "david@example.com",
		status: "Active",
		photo: userImages.user3
	},
	{
		id: "STU-108",
		name: "Ethan Miller",
		classId: "11-A",
		guardian: "Rachel Miller",
		email: "rachel@example.com",
		status: "Active",
		photo: userImages.user4
	},
	{
		id: "STU-109",
		name: "Mia Anderson",
		classId: "12-A",
		guardian: "Lucy Anderson",
		email: "lucy@example.com",
		status: "Active",
		photo: userImages.user1
	},
	{
		id: "STU-110",
		name: "Lucas Meyer",
		classId: "12-A",
		guardian: "Thomas Meyer",
		email: "thomas@example.com",
		status: "Active",
		photo: userImages.user2
	}
];
var initialExams = [
	{
		id: "EXM-101",
		subject: "Mathematics",
		classId: "10-A",
		date: "2026-10-12",
		time: "09:00",
		duration: 90,
		room: "Hall A",
		status: "Scheduled"
	},
	{
		id: "EXM-102",
		subject: "English",
		classId: "9-A",
		date: "2026-10-13",
		time: "10:00",
		duration: 60,
		room: "Hall B",
		status: "Scheduled"
	},
	{
		id: "EXM-103",
		subject: "Science",
		classId: "8-A",
		date: "2026-10-14",
		time: "09:00",
		duration: 90,
		room: "Lab 1",
		status: "Scheduled"
	},
	{
		id: "EXM-104",
		subject: "Physics",
		classId: "11-A",
		date: "2026-10-15",
		time: "10:00",
		duration: 120,
		room: "Hall A",
		status: "Scheduled"
	},
	{
		id: "EXM-105",
		subject: "Economics",
		classId: "12-A",
		date: "2026-10-16",
		time: "09:00",
		duration: 90,
		room: "Hall B",
		status: "Scheduled"
	},
	{
		id: "EXM-106",
		subject: "History",
		classId: "10-A",
		date: "2026-10-17",
		time: "11:00",
		duration: 60,
		room: "Hall A",
		status: "Cancelled"
	}
];
var titles = {
	students: "Students",
	classes: "Classes",
	attendance: "Attendance",
	exams: "Exams"
};
var color = {
	primary: "bg-primary/10 text-primary",
	info: "bg-info/10 text-info",
	success: "bg-success/10 text-success",
	warning: "bg-warning/10 text-warning"
};
var sampleAttendance = {
	"STU-101": "Present",
	"STU-102": "Late",
	"STU-103": "Present",
	"STU-104": "Excused",
	"STU-105": "Present",
	"STU-106": "Absent",
	"STU-107": "Present",
	"STU-108": "Present",
	"STU-109": "Present",
	"STU-110": "Present"
};
function exportCsv(name, rows) {
	const csv = rows.map((r) => r.map((v) => "\"" + v.replaceAll("\"", "\"\"") + "\"").join(",")).join("\r\n");
	const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	URL.revokeObjectURL(url);
}
function SchoolPage({ kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: kind === "attendance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttendancePage, {
		students: initialStudents,
		classes,
		initial: sampleAttendance
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchoolWorkspace, { kind }, kind) });
}
function SchoolWorkspace({ kind }) {
	const [students, setStudents] = (0, import_react.useState)(initialStudents);
	const [exams, setExams] = (0, import_react.useState)(initialExams);
	const [query, setQuery] = (0, import_react.useState)("");
	const [classFilter, setClassFilter] = (0, import_react.useState)("All");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("All");
	const [date, setDate] = (0, import_react.useState)("2026-10-09");
	const [registers, setRegisters] = (0, import_react.useState)({ "2026-10-09": sampleAttendance });
	const [notice, setNotice] = (0, import_react.useState)("");
	const [modal, setModal] = (0, import_react.useState)(null);
	const [studentDetail, setStudentDetail] = (0, import_react.useState)(null);
	const [classDetail, setClassDetail] = (0, import_react.useState)(null);
	const [examDetail, setExamDetail] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [studentForm, setStudentForm] = (0, import_react.useState)({
		name: "",
		classId: "8-A",
		guardian: "",
		email: ""
	});
	const [examForm, setExamForm] = (0, import_react.useState)({
		subject: "",
		classId: "8-A",
		date: "2026-10-19",
		time: "09:00",
		duration: 60,
		room: "Hall A"
	});
	const register = registers[date] ?? {};
	const visibleStudents = students.filter((s) => (classFilter === "All" || s.classId === classFilter) && `${s.name} ${s.id} ${s.guardian}`.toLowerCase().includes(query.trim().toLowerCase())).filter((s) => statusFilter === "All" || (kind === "attendance" ? register[s.id] ?? "Unmarked" : s.status) === statusFilter);
	const visibleClasses = classes.filter((c) => (classFilter === "All" || c.id === classFilter) && `${c.title} ${c.teacher}`.toLowerCase().includes(query.trim().toLowerCase()));
	const visibleExams = exams.filter((e) => (classFilter === "All" || e.classId === classFilter) && (statusFilter === "All" || statusFilter === e.status) && `${e.id} ${e.subject} ${e.room}`.toLowerCase().includes(query.trim().toLowerCase())).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
	const count = (value) => students.filter((s) => register[s.id] === value).length;
	const stats = kind === "students" ? [
		["Sample students", students.length],
		["Active students", students.filter((s) => s.status === "Active").length],
		["On leave", students.filter((s) => s.status === "On leave").length],
		["Classes", classes.length]
	] : kind === "classes" ? [
		["Class groups", classes.length],
		["Enrolled sample students", students.length],
		["Teachers", classes.length],
		["Total capacity", classes.reduce((n, c) => n + c.capacity, 0)]
	] : kind === "attendance" ? [
		["Present / late", count("Present") + count("Late")],
		["Absent", count("Absent")],
		["Excused", count("Excused")],
		["Unmarked", students.filter((s) => !register[s.id]).length]
	] : [
		["Planned exams", exams.filter((e) => e.status === "Scheduled").length],
		["Subjects", new Set(exams.map((e) => e.subject)).size],
		["Exam venues", new Set(exams.map((e) => e.room)).size],
		["Cancelled", exams.filter((e) => e.status === "Cancelled").length]
	];
	const mark = (id, value) => setRegisters((prev) => ({
		...prev,
		[date]: {
			...prev[date] ?? {},
			[id]: value
		}
	}));
	const doExport = () => {
		if (kind === "students") exportCsv("students.csv", [[
			"ID",
			"Name",
			"Class",
			"Guardian",
			"Email",
			"Status"
		], ...visibleStudents.map((s) => [
			s.id,
			s.name,
			s.classId,
			s.guardian,
			s.email,
			s.status
		])]);
		if (kind === "classes") exportCsv("classes.csv", [[
			"Class",
			"Teacher",
			"Room",
			"Enrolled",
			"Capacity"
		], ...visibleClasses.map((c) => [
			c.title,
			c.teacher,
			c.room,
			String(students.filter((s) => s.classId === c.id).length),
			String(c.capacity)
		])]);
		if (kind === "attendance") exportCsv(`attendance-${date}.csv`, [[
			"Date",
			"Student ID",
			"Name",
			"Class",
			"Status"
		], ...visibleStudents.map((s) => [
			date,
			s.id,
			s.name,
			s.classId,
			register[s.id] ?? "Unmarked"
		])]);
		if (kind === "exams") exportCsv("exams.csv", [[
			"ID",
			"Subject",
			"Class",
			"Date",
			"Time",
			"Duration minutes",
			"Room",
			"Status"
		], ...visibleExams.map((e) => [
			e.id,
			e.subject,
			e.classId,
			e.date,
			e.time,
			String(e.duration),
			e.room,
			e.status
		])]);
		setNotice("Filtered sample records exported.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: titles[kind],
			subtitle: {
				students: "Manage your student directory and guardian contacts.",
				classes: "Explore class groups, teachers, and student rosters.",
				attendance: "Review and mark the daily attendance register.",
				exams: "Plan exam schedules, venues, and class assignments."
			}[kind],
			breadcrumb: [
				"Management",
				"School Management",
				titles[kind]
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: doExport,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export"]
			}), (kind === "students" || kind === "exams") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => {
					setError("");
					setModal(kind === "students" ? "student" : "exam");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), kind === "students" ? "Add student" : "Schedule exam"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: stats.map(([label, value], i) => {
				const Icon = [
					Users,
					CheckCheck,
					BookOpen,
					CalendarDays
				][i];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					bodyClassName: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-11 place-items-center rounded-xl ${Object.values(color)[i]}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-3xl font-semibold",
						children: value
					})]
				}, label);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-info/15 bg-info/5 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Sample academic workspace / 2026-27. Records and edits apply to this page session."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "info",
				children: "Demo data"
			})]
		}),
		notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "status",
			className: "mb-5 rounded-xl bg-success/10 p-3 text-sm text-success",
			children: notice
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 flex-1 sm:max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-3 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						"aria-label": "Search school records",
						placeholder: "Search records...",
						className: "ps-9",
						value: query,
						onChange: (e) => setQuery(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": "Filter class",
					value: classFilter,
					onChange: (e) => setClassFilter(e.target.value),
					className: "h-10 rounded-lg border border-border bg-card px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "All",
						children: "All classes"
					}), classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c.id,
						children: c.title
					}, c.id))]
				}),
				kind !== "classes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					"aria-label": "Filter school status",
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					className: "h-10 rounded-lg border border-border bg-card px-3 text-sm",
					children: (kind === "attendance" ? [
						"All",
						"Unmarked",
						"Present",
						"Absent",
						"Late",
						"Excused"
					] : kind === "students" ? [
						"All",
						"Active",
						"On leave"
					] : [
						"All",
						"Scheduled",
						"Cancelled"
					]).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: v,
						children: v === "All" ? "All statuses" : v
					}, v))
				}),
				kind === "attendance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					"aria-label": "Attendance date",
					type: "date",
					className: "w-auto",
					value: date,
					onChange: (e) => {
						setDate(e.target.value);
						setNotice("");
					}
				})
			]
		}),
		kind === "students" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			title: "Student directory",
			description: `${visibleStudents.length} students in the current view`,
			bodyClassName: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
				"Student",
				"Class",
				"Guardian",
				"Status",
				"Actions"
			].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visibleStudents.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.photo,
						alt: s.name,
						className: "size-10 shrink-0 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: s.id
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.classId }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.guardian }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: s.email
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: s.status === "Active" ? "success" : "warning",
					children: s.status
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					"aria-label": `View ${s.id}`,
					onClick: () => setStudentDetail(s),
					children: "View profile"
				}) })
			] }, s.id)), !visibleStudents.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "p-8 text-center text-muted-foreground",
				children: "No students match these filters."
			}) })] })] })
		}),
		kind === "classes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [visibleClasses.map((c) => {
				const count = students.filter((s) => s.classId === c.id).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					bodyClassName: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid size-12 place-items-center rounded-2xl ${color[c.color]}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "success",
								children: "Active class"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-lg font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: ["Class teacher: ", c.teacher]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-5 grid grid-cols-3 gap-2 rounded-xl bg-muted/40 p-4",
							children: [
								["Students", count],
								["Capacity", c.capacity],
								["Subjects", c.subjects]
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-muted-foreground",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-semibold",
								children: value
							})] }, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sample enrollment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(count / c.capacity * 100), "%"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${count / c.capacity * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), c.room]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-5 w-full",
							variant: "outline",
							"aria-label": `Roster ${c.id}`,
							onClick: () => setClassDetail(c),
							children: ["Open class roster", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				}, c.id);
			}), !visibleClasses.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-5 text-sm text-muted-foreground",
				children: "No matching classes."
			}) })]
		}),
		kind === "attendance" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			title: "Daily attendance register",
			description: `Date: ${date || "Select a date"} / ${visibleStudents.length} students in view`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				disabled: !date || !visibleStudents.length,
				onClick: () => {
					setRegisters((prev) => ({
						...prev,
						[date]: {
							...prev[date] ?? {},
							...Object.fromEntries(visibleStudents.map((s) => [s.id, "Present"]))
						}
					}));
					setNotice(`Marked ${visibleStudents.length} visible students present for ${date}.`);
				},
				children: "Mark visible present"
			}),
			bodyClassName: "p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
				"Student",
				"Class",
				"Attendance status",
				"Last recorded status"
			].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visibleStudents.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.photo,
						alt: s.name,
						className: "size-9 rounded-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: s.id
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.classId }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					"aria-label": `Attendance ${s.id}`,
					disabled: !date,
					value: register[s.id] ?? "Unmarked",
					onChange: (e) => mark(s.id, e.target.value),
					className: "rounded-lg border border-border bg-card px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "Unmarked",
						disabled: true,
						children: "Unmarked"
					}), [
						"Present",
						"Absent",
						"Late",
						"Excused"
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: v }, v))]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: register[s.id] === "Present" ? "success" : register[s.id] === "Absent" ? "warning" : "info",
					children: register[s.id] ?? "Unmarked"
				}) })
			] }, s.id)), !visibleStudents.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 4,
				className: "p-8 text-center text-muted-foreground",
				children: "No students match these filters."
			}) })] })] })
		}),
		kind === "exams" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [visibleExams.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				bodyClassName: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: e.status === "Scheduled" ? "success" : "muted",
							children: e.status
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[11px] text-muted-foreground",
						children: [
							e.id,
							" / ",
							e.classId
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-lg font-semibold",
						children: e.subject
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-muted-foreground" }), e.date]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 text-muted-foreground" }),
									e.time,
									" / ",
									e.duration,
									" minutes"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-muted-foreground" }), e.room]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "w-full",
						"aria-label": `Exam ${e.id}`,
						onClick: () => setExamDetail(e),
						children: ["Exam details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				]
			}, e.id)), !visibleExams.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-5 text-sm text-muted-foreground",
				children: "No exams match these filters."
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!modal,
			onOpenChange: (open) => {
				if (!open) setModal(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: modal === "student" ? "Add student" : "Schedule exam" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Creates a sample record for this page session." })] }), modal === "student" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						if (!studentForm.name.trim() || !studentForm.guardian.trim()) {
							setError("Enter the student and guardian names.");
							return;
						}
						const group = classes.find((c) => c.id === studentForm.classId);
						if (students.filter((s) => s.classId === group.id).length >= group.capacity) {
							setError("This class is at capacity.");
							return;
						}
						const id = `STU-${Math.max(...students.map((s) => Number(s.id.split("-")[1]))) + 1}`;
						setStudents((prev) => [...prev, {
							...studentForm,
							name: studentForm.name.trim(),
							guardian: studentForm.guardian.trim(),
							id,
							status: "Active",
							photo: userImages.user1
						}]);
						setNotice(`${id} added to the sample directory.`);
						setModal(null);
						setStudentForm({
							name: "",
							guardian: "",
							email: "",
							classId: "8-A"
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Student name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Student name",
								required: true,
								maxLength: 80,
								value: studentForm.name,
								onChange: (e) => setStudentForm({
									...studentForm,
									name: e.target.value
								}),
								className: "mt-2"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Class", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								"aria-label": "Student class",
								className: "mt-2 w-full rounded-lg border border-border bg-card p-2",
								value: studentForm.classId,
								onChange: (e) => setStudentForm({
									...studentForm,
									classId: e.target.value
								}),
								children: classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.title
								}, c.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Guardian name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Guardian name",
								required: true,
								maxLength: 80,
								className: "mt-2",
								value: studentForm.guardian,
								onChange: (e) => setStudentForm({
									...studentForm,
									guardian: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Guardian email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Guardian email",
								type: "email",
								required: true,
								maxLength: 120,
								className: "mt-2",
								value: studentForm.email,
								onChange: (e) => setStudentForm({
									...studentForm,
									email: e.target.value
								})
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Add student"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						if (!examForm.subject.trim() || !examForm.room.trim() || !Number.isInteger(examForm.duration) || examForm.duration < 30 || examForm.duration > 180) {
							setError("Enter a subject, venue, and a duration from 30 to 180 minutes.");
							return;
						}
						const minutes = (time) => Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]);
						const start = minutes(examForm.time);
						if (start + examForm.duration > 1440) {
							setError("The exam must finish on the selected date.");
							return;
						}
						if (exams.some((x) => x.status === "Scheduled" && x.date === examForm.date && (x.classId === examForm.classId || x.room.toLowerCase() === examForm.room.trim().toLowerCase()) && start < minutes(x.time) + x.duration && start + examForm.duration > minutes(x.time))) {
							setError("This time overlaps a scheduled exam for the same class or venue.");
							return;
						}
						const id = `EXM-${Math.max(...exams.map((x) => Number(x.id.split("-")[1]))) + 1}`;
						setExams((prev) => [...prev, {
							...examForm,
							subject: examForm.subject.trim(),
							room: examForm.room.trim(),
							id,
							status: "Scheduled"
						}]);
						setNotice(`${id} scheduled in the sample planner.`);
						setModal(null);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Subject", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Exam subject",
								required: true,
								maxLength: 80,
								className: "mt-2",
								value: examForm.subject,
								onChange: (e) => setExamForm({
									...examForm,
									subject: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Class", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								"aria-label": "Exam class",
								className: "mt-2 w-full rounded-lg border border-border bg-card p-2",
								value: examForm.classId,
								onChange: (e) => setExamForm({
									...examForm,
									classId: e.target.value
								}),
								children: classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.id,
									children: c.title
								}, c.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									"aria-label": "Exam date",
									type: "date",
									required: true,
									className: "mt-2",
									value: examForm.date,
									onChange: (e) => setExamForm({
										...examForm,
										date: e.target.value
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								children: ["Start time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									"aria-label": "Exam time",
									type: "time",
									required: true,
									className: "mt-2",
									value: examForm.time,
									onChange: (e) => setExamForm({
										...examForm,
										time: e.target.value
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Duration (minutes)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Exam duration",
								type: "number",
								min: "30",
								max: "180",
								step: "1",
								required: true,
								className: "mt-2",
								value: examForm.duration,
								onChange: (e) => setExamForm({
									...examForm,
									duration: Number(e.target.value)
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Venue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								"aria-label": "Exam venue",
								required: true,
								maxLength: 60,
								className: "mt-2",
								value: examForm.room,
								onChange: (e) => setExamForm({
									...examForm,
									room: e.target.value
								})
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Schedule exam"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!studentDetail,
			onOpenChange: (open) => {
				if (!open) setStudentDetail(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Student profile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [studentDetail?.id, " / Sample directory record"] })] }), studentDetail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: studentDetail.photo,
						alt: studentDetail.name,
						className: "size-16 rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: studentDetail.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "info",
						children: studentDetail.classId
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "space-y-4 rounded-xl bg-muted/40 p-4",
					children: [
						["Guardian", studentDetail.guardian],
						["Email", studentDetail.email],
						["Enrollment", studentDetail.status]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 break-words text-sm font-medium",
						children: value
					})] }, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						const status = studentDetail.status === "Active" ? "On leave" : "Active";
						setStudents((prev) => prev.map((s) => s.id === studentDetail.id ? {
							...s,
							status
						} : s));
						setStudentDetail({
							...studentDetail,
							status
						});
						setNotice(`${studentDetail.id} enrollment status updated.`);
					},
					children: studentDetail.status === "Active" ? "Mark on leave" : "Mark active"
				})
			] })] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!classDetail,
			onOpenChange: (open) => {
				if (!open) setClassDetail(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [classDetail?.title, " roster"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				classDetail?.teacher,
				" / ",
				classDetail?.room
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-80 space-y-3 overflow-y-auto",
				children: students.filter((s) => s.classId === classDetail?.id).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl border border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.photo,
							alt: s.name,
							className: "size-10 rounded-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.id
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: s.status
						})
					]
				}, s.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!examDetail,
			onOpenChange: (open) => {
				if (!open) setExamDetail(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [examDetail?.subject, " exam"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [examDetail?.id, " / Sample schedule"] })] }), examDetail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 rounded-xl bg-muted/40 p-4",
				children: [
					["Class", examDetail.classId],
					["Date", examDetail.date],
					["Time", examDetail.time],
					["Duration", `${examDetail.duration} min`],
					["Venue", examDetail.room],
					["Status", examDetail.status]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-medium",
					children: value
				})] }, label))
			}), examDetail.status === "Scheduled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => {
					setExams((prev) => prev.map((x) => x.id === examDetail.id ? {
						...x,
						status: "Cancelled"
					} : x));
					setExamDetail({
						...examDetail,
						status: "Cancelled"
					});
					setNotice(`${examDetail.id} cancelled in this session.`);
				},
				children: "Cancel sample exam"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "This sample exam is cancelled. Create a new schedule to plan it again."
			})] })] })
		})
	] });
}
//#endregion
export { SchoolPage as t };
