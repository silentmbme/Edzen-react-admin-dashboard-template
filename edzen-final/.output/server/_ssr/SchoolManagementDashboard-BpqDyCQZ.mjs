import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as Plus, Di as ArrowUpRight, Mr as Clock3, Pr as ClipboardCheck, Wn as GraduationCap, Yr as CheckCheck, c as Wallet, ft as RotateCcw, hi as BookOpen, hr as Download, ii as CalendarDays, m as UsersRound } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as token, f as useChartTheme, i as Card, l as getUserImage, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SchoolManagementDashboard-BpqDyCQZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var grades = [
	"Grade 8",
	"Grade 9",
	"Grade 10",
	"Grade 11",
	"Grade 12"
];
var initialStudents = [
	{
		id: "ST-101",
		name: "Emma Wilson",
		grade: "Grade 8",
		attendance: "Present",
		fee: 1200,
		paid: 1200
	},
	{
		id: "ST-102",
		name: "Liam Parker",
		grade: "Grade 8",
		attendance: "Absent",
		fee: 1200,
		paid: 600
	},
	{
		id: "ST-103",
		name: "Ava Thompson",
		grade: "Grade 9",
		attendance: "Present",
		fee: 1400,
		paid: 1400
	},
	{
		id: "ST-104",
		name: "Noah Williams",
		grade: "Grade 9",
		attendance: "Present",
		fee: 1400,
		paid: 700
	},
	{
		id: "ST-105",
		name: "Mia Anderson",
		grade: "Grade 10",
		attendance: "Present",
		fee: 1600,
		paid: 1600
	},
	{
		id: "ST-106",
		name: "Oliver Davis",
		grade: "Grade 10",
		attendance: "Absent",
		fee: 1600,
		paid: 0
	},
	{
		id: "ST-107",
		name: "Isabella Clark",
		grade: "Grade 11",
		attendance: "Present",
		fee: 1600,
		paid: 1200
	},
	{
		id: "ST-108",
		name: "Lucas Brown",
		grade: "Grade 11",
		attendance: "Absent",
		fee: 1600,
		paid: 800
	},
	{
		id: "ST-109",
		name: "Amelia Hall",
		grade: "Grade 12",
		attendance: "Present",
		fee: 1600,
		paid: 1600
	},
	{
		id: "ST-110",
		name: "Ethan Miller",
		grade: "Grade 12",
		attendance: "Present",
		fee: 1600,
		paid: 800
	}
];
var teachers = [
	{
		name: "Sophia Carter",
		subject: "Mathematics",
		grade: "Grade 8"
	},
	{
		name: "Daniel Lee",
		subject: "Science",
		grade: "Grade 9"
	},
	{
		name: "Olivia Smith",
		subject: "English",
		grade: "Grade 10"
	}
];
var money = (n) => new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
}).format(n);
function SchoolManagementDashboard() {
	const [students, setStudents] = (0, import_react.useState)(initialStudents);
	const [grade, setGrade] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [newGrade, setNewGrade] = (0, import_react.useState)("Grade 8");
	const selected = students.filter((s) => grade === "all" || s.grade === grade);
	const visible = selected.filter((s) => `${s.name} ${s.id}`.toLowerCase().includes(query.toLowerCase()));
	const collected = selected.reduce((sum, s) => sum + s.paid, 0);
	const outstanding = selected.reduce((sum, s) => sum + s.fee - s.paid, 0);
	const classes = grades.filter((g) => grade === "all" || g === grade);
	const { base } = useChartTheme();
	const [assignments, setAssignments] = (0, import_react.useState)([
		{
			title: "Algebra practice",
			grade: "Grade 8",
			subject: "Mathematics",
			done: false
		},
		{
			title: "Science lab report",
			grade: "Grade 9",
			subject: "Science",
			done: false
		},
		{
			title: "Reading reflection",
			grade: "Grade 10",
			subject: "English",
			done: true
		}
	]);
	const attendanceOptions = mergeOptions(base, {
		colors: [token("--chart-1"), token("--chart-2")],
		stroke: {
			width: [0, 3],
			curve: "smooth"
		},
		fill: {
			type: ["solid", "solid"],
			opacity: [.9, .25]
		},
		markers: { size: [0, 4] },
		plotOptions: { bar: {
			columnWidth: "35%",
			borderRadius: 5
		} },
		xaxis: { categories: classes },
		yaxis: {
			min: 0,
			max: Math.max(...classes.map((g) => selected.filter((student) => student.grade === g).length), 1),
			tickAmount: Math.max(...classes.map((g) => selected.filter((student) => student.grade === g).length), 1),
			labels: { formatter: (value) => Math.round(value).toString() }
		},
		legend: {
			position: "top",
			horizontalAlign: "left"
		},
		dataLabels: { enabled: false },
		tooltip: {
			shared: true,
			intersect: false,
			y: { formatter: (value) => value + " students" }
		}
	});
	const feeOptions = mergeOptions(base, {
		colors: [
			token("--chart-1"),
			token("--chart-2"),
			token("--chart-3"),
			token("--chart-4"),
			token("--chart-5")
		],
		labels: classes,
		stroke: { lineCap: "round" },
		legend: {
			show: true,
			position: "bottom"
		},
		plotOptions: { radialBar: {
			hollow: { size: "35%" },
			track: {
				background: token("--muted"),
				margin: 8
			},
			dataLabels: {
				name: { fontSize: "12px" },
				value: {
					fontSize: "25px",
					formatter: (value) => value.toFixed(0) + "%"
				},
				total: {
					show: true,
					label: "Fees collected",
					formatter: () => (collected + outstanding ? Math.round(collected / (collected + outstanding) * 100) : 0) + "%"
				}
			}
		} }
	});
	function admit(event) {
		event.preventDefault();
		if (name.trim().length < 2) return;
		setStudents((current) => [...current, {
			id: `ST-${101 + current.length}`,
			name: name.trim(),
			grade: newGrade,
			attendance: "Present",
			fee: newGrade === "Grade 8" ? 1200 : newGrade === "Grade 9" ? 1400 : 1600,
			paid: 0
		}]);
		setGrade("all");
		setQuery("");
		setOpen(false);
		toast.success("Sample student admitted");
	}
	function exportReport() {
		const csv = [[
			"ID",
			"Student",
			"Grade",
			"Attendance",
			"Fees USD",
			"Paid USD"
		], ...visible.map((s) => [
			s.id,
			s.name,
			s.grade,
			s.attendance,
			s.fee,
			s.paid
		])].map((row) => row.map((v) => `"${String(v).replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const a = document.createElement("a");
		a.href = url;
		a.download = "school-students.csv";
		a.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "School Management",
			subtitle: "Bring students, classrooms, and school operations together.",
			breadcrumb: ["Dashboards", "School Management"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportReport,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export report"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => {
					setName("");
					setOpen(true);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Admit student"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-9 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Learning today. Leading tomorrow."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Sample school · October 9, 2026 · Session-only changes"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				"aria-label": "School grade",
				value: grade,
				onChange: (e) => setGrade(e.target.value),
				className: "h-10 rounded-lg border border-border bg-card px-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "all",
					children: "All grades"
				}), grades.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g }, g))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				{
					label: "Enrolled students",
					value: selected.length.toString(),
					icon: UsersRound,
					color: "--primary",
					note: "Active sample student records"
				},
				{
					label: "Attendance today",
					value: `${selected.length ? Math.round(selected.filter((s) => s.attendance === "Present").length / selected.length * 100) : 0}%`,
					icon: GraduationCap,
					color: "--chart-3",
					note: "Present students in selected grades"
				},
				{
					label: "Active classes",
					value: classes.length.toString(),
					icon: BookOpen,
					color: "--chart-4",
					note: "One sample class per grade"
				},
				{
					label: "Fees collected",
					value: money(collected),
					icon: Wallet,
					color: "--chart-5",
					note: `${money(outstanding)} outstanding`
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "metric-card vexui-card relative overflow-hidden p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -end-6 -top-6 size-24 rounded-full",
					style: { background: `color-mix(in oklch, var(${m.color}) 7%, transparent)` }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted-foreground",
								children: m.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "metric-icon grid size-11 place-items-center rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "size-5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-4xl font-semibold tracking-tight tabular-nums",
							children: m.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 border-t border-border pt-3 text-xs text-muted-foreground",
							children: m.note
						})
					]
				})]
			}, m.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Attendance pulse",
				description: "Present students as bars and absent students as an area",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 300,
					options: attendanceOptions,
					series: ["Present", "Absent"].map((status) => ({
						name: status,
						type: status === "Present" ? "column" : "area",
						data: classes.map((g) => selected.filter((student) => student.grade === g && student.attendance === status).length)
					}))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Fee collection",
				description: "Collected fees and outstanding balances · USD",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "radialBar",
					height: 300,
					options: feeOptions,
					series: classes.map((g) => {
						const group = selected.filter((student) => student.grade === g);
						const total = group.reduce((sum, student) => sum + student.fee, 0);
						return total ? group.reduce((sum, student) => sum + student.paid, 0) / total * 100 : 0;
					})
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Student directory",
			description: `${visible.length} students in view`,
			className: "mb-6",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				"aria-label": "Search students",
				placeholder: "Search student or ID…",
				className: "sm:w-64",
				value: query,
				onChange: (e) => setQuery(e.target.value)
			}),
			bodyClassName: "p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: [
				"Student",
				"Grade",
				"Attendance",
				"Fee balance",
				"Actions"
			].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: s.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: s.id
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: s.grade }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: s.attendance === "Present" ? "success" : "warning",
					children: s.attendance
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: money(s.fee - s.paid) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setStudents((current) => current.map((item) => item.id === s.id ? {
							...item,
							attendance: item.attendance === "Present" ? "Absent" : "Present"
						} : item)),
						children: ["Mark ", s.attendance === "Present" ? "absent" : "present"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: s.paid === s.fee,
						onClick: () => {
							setStudents((current) => current.map((item) => item.id === s.id ? {
								...item,
								paid: item.fee
							} : item));
							toast.success("Sample fee marked paid");
						},
						children: "Mark paid"
					})]
				}) })
			] }, s.id)), !visible.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "py-8 text-center text-muted-foreground",
				children: "No students match your search."
			}) })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border px-5 py-3 text-xs text-muted-foreground",
				children: "Attendance and fee actions update sample records only."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Classroom agenda",
				description: "Friday, October 9, 2026 ? Sample schedule",
				className: "xl:col-span-2",
				bodyClassName: "p-0",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "primary",
					children: [
						teachers.filter((t) => grade === "all" || t.grade === grade).length,
						" ",
						"lessons"
					]
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/20 px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Morning sessions" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "45 minutes per lesson"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5",
					children: [teachers.filter((t) => grade === "all" || t.grade === grade).map((t) => {
						const index = grades.indexOf(t.grade);
						const SubjectIcon = t.subject === "Mathematics" ? GraduationCap : t.subject === "Science" ? ClipboardCheck : BookOpen;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group grid grid-cols-[52px_minmax(0,1fr)] gap-3 sm:grid-cols-[76px_minmax(0,1fr)] sm:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold tabular-nums",
										children: [
											"09:00",
											"10:00",
											"11:00"
										][index]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: [
											"09:45",
											"10:45",
											"11:45"
										][index]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-6 w-px bg-border" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 overflow-hidden rounded-xl border border-border border-s-[3px] border-s-primary bg-card transition-shadow group-hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectIcon, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-base font-semibold",
												children: t.subject
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: "primary",
												size: "sm",
												children: t.grade
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Classroom lesson ? 45 minutes"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/20 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: getUserImage(t.name),
											alt: "",
											className: "size-7 rounded-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium",
											children: t.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-md border border-border bg-card px-2 py-1 text-[11px] font-medium",
										children: ["Room ", index + 101]
									})]
								})]
							})]
						}, t.name);
					}), !teachers.some((t) => grade === "all" || t.grade === grade) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-dashed border-border py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "mx-auto mb-3 size-8 text-muted-foreground/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: "No lessons in this view"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Choose another grade to see its sample schedule."
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "vexui-card flex flex-col overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-b border-border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[15px] font-semibold",
							children: "Campus calendar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Upcoming school events ? Sample schedule"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 bg-muted/20 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-semibold",
							children: [
								"October",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "2026"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[11px] text-muted-foreground",
							children: "Plan ahead for campus life"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							size: "sm",
							children: "3 events"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-4 p-5",
						children: [
							{
								title: "Parent-teacher meeting",
								day: "12",
								weekday: "MON",
								type: "Families",
								detail: "Connect with class teachers",
								color: "--primary"
							},
							{
								title: "Science fair registration",
								day: "16",
								weekday: "FRI",
								type: "Academics",
								detail: "Submit student project entries",
								color: "--info"
							},
							{
								title: "School sports day",
								day: "23",
								weekday: "FRI",
								type: "Campus life",
								detail: "Celebrate teamwork and school spirit",
								color: "--success"
							}
						].map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex items-start gap-4 rounded-xl border border-border p-3 transition-colors hover:bg-muted/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-12 shrink-0 overflow-hidden rounded-lg text-center",
								style: { background: `color-mix(in oklch, var(${event.color}) 8%, var(--card))` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "py-1 text-[9px] font-semibold tracking-wider",
									style: { color: `var(${event.color})` },
									children: event.weekday
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-2 text-2xl font-semibold leading-none",
									children: event.day
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold uppercase tracking-wider",
										style: { color: `var(${event.color})` },
										children: event.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-sm font-semibold leading-5",
										children: event.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] leading-4 text-muted-foreground",
										children: event.detail
									})
								]
							})]
						}, event.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-t border-border px-5 py-3 text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All dates shown in the school calendar" })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			title: "Faculty spotlight",
			description: "Class teachers and subjects",
			bodyClassName: "p-5",
			className: "mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [teachers.filter((t) => grade === "all" || t.grade === grade).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-xl bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: getUserImage(t.name),
						alt: t.name,
						className: "size-16 rounded-2xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							size: "sm",
							children: t.grade
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-sm font-semibold",
							children: t.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: t.subject
						})
					] })]
				}, t.name)), !teachers.some((t) => grade === "all" || t.grade === grade) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "No faculty records for this sample grade."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Assignment review board",
			description: "Review classroom work and keep feedback moving.",
			className: "mb-6",
			bodyClassName: "p-0",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				tone: "primary",
				children: [
					assignments.filter((task) => grade === "all" || task.grade === grade).length,
					" ",
					"assignments"
				]
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4 border-b border-border bg-muted/20 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Review progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								assignments.filter((task) => task.done && (grade === "all" || task.grade === grade)).length,
								" ",
								"completed /",
								" ",
								assignments.filter((task) => grade === "all" || task.grade === grade).length,
								" ",
								"in this view"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 w-32 overflow-hidden rounded-full bg-muted",
						role: "progressbar",
						"aria-label": "Assignment review progress",
						"aria-valuemin": 0,
						"aria-valuemax": 100,
						"aria-valuenow": Math.round(assignments.filter((task) => task.done && (grade === "all" || task.grade === grade)).length / Math.max(assignments.filter((task) => grade === "all" || task.grade === grade).length, 1) * 100),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-all",
							style: { width: assignments.filter((task) => task.done && (grade === "all" || task.grade === grade)).length / Math.max(assignments.filter((task) => grade === "all" || task.grade === grade).length, 1) * 100 + "%" }
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 p-5 lg:grid-cols-2",
				children: [false, true].map((done) => {
					const tasks = assignments.filter((task) => task.done === done && (grade === "all" || task.grade === grade));
					const StatusIcon = done ? CheckCheck : Clock3;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 rounded-2xl border border-border bg-muted/20 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg " + (done ? "bg-success/10 text-success" : "bg-primary/10 text-primary"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold",
										children: done ? "Reviewed" : "Needs review"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: done ? "Feedback complete" : "Ready for teacher feedback"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-7 place-items-center rounded-lg border border-border bg-card text-xs font-semibold",
									children: tasks.length
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
												children: task.subject
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: done ? "success" : "primary",
												size: "sm",
												children: task.grade
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-3 text-base font-semibold",
											children: task.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: getUserImage(teachers.find((teacher) => teacher.grade === task.grade)?.name),
												alt: "",
												className: "size-6 rounded-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground",
												children: teachers.find((teacher) => teacher.grade === task.grade)?.name ?? "Class teacher"
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3 border-t border-border bg-muted/20 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 text-[11px] " + (done ? "text-success" : "text-muted-foreground"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "size-3.5" }), done ? "Reviewed" : "Awaiting feedback"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: done ? "ghost" : "outline",
										size: "sm",
										onClick: () => setAssignments((current) => current.map((item) => item.title === task.title ? {
											...item,
											done: !item.done
										} : item)),
										children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 rtl:-scale-x-100" }), done ? "Reopen" : "Review"]
									})]
								})]
							}, task.title)), !tasks.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid min-h-40 place-items-center rounded-xl border border-dashed border-border px-4 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "mx-auto mb-2 size-7 text-muted-foreground/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: done ? "No reviewed work yet" : "All caught up"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: done ? "Reviewed assignments will appear here." : "No assignments waiting in this view."
									})
								] })
							})]
						})]
					}, String(done));
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 xl:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Transport operations",
				description: "Sample campus routes ? Independent of grade filters",
				bodyClassName: "p-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-b border-border bg-primary/5 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-3xl font-semibold",
						children: ["70", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ms-1 text-sm font-normal text-muted-foreground",
							children: "/ 94 seats"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Total route occupancy"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "success",
						children: "2 of 3 arrived"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border px-5",
					children: [
						{
							route: "North campus",
							bus: "01",
							color: "bg-primary/10 text-primary",
							barColor: "bg-primary",
							seats: 24,
							total: 32,
							status: "Arrived"
						},
						{
							route: "Central park",
							bus: "02",
							color: "bg-chart-3/10 text-chart-3",
							barColor: "bg-chart-3",
							seats: 28,
							total: 32,
							status: "Arrived"
						},
						{
							route: "West avenue",
							bus: "03",
							color: "bg-chart-4/10 text-chart-4",
							barColor: "bg-chart-4",
							seats: 18,
							total: 30,
							status: "En route"
						}
					].map((bus) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid size-10 place-items-center rounded-lg text-sm font-semibold ${bus.color}`,
								children: bus.bus
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: bus.route
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex gap-1",
									"aria-label": bus.seats + " of " + bus.total + " seats occupied",
									children: Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 flex-1 rounded-sm " + (i < Math.round(bus.seats / bus.total * 10) ? bus.barColor : "bg-muted") }, i))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: bus.status === "Arrived" ? "success" : "primary",
									size: "sm",
									children: bus.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[11px] text-muted-foreground",
									children: [
										bus.seats,
										"/",
										bus.total,
										" seats"
									]
								})]
							})
						]
					}, bus.bus))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "vexui-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[15px] font-semibold",
							children: "Library circulation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Sample campus totals ? October 9"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-6 text-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-end gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-4xl font-semibold",
							children: "42"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "Issued today"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-s border-border ps-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-4xl font-semibold text-primary",
								children: "36"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Returned today"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-3 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-primary",
							style: { width: "85.71428571428571%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "86% return-to-issue ratio today"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Upcoming returns"
					}),
					[{
						title: "The Science Explorer",
						due: "Oct 12"
					}, {
						title: "A World of Stories",
						due: "Oct 14"
					}].map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 border-t border-border py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: book.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 rounded-md bg-muted px-2 py-1 text-xs",
							children: book.due
						})]
					}, book.title))
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Admit student" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a sample student. Fees start unpaid and attendance starts present." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: admit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "school-name",
						children: "Student name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "school-name",
						minLength: 2,
						maxLength: 80,
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "school-grade",
						children: "Grade"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "school-grade",
						value: newGrade,
						onChange: (e) => setNewGrade(e.target.value),
						className: "mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm",
						children: grades.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g }, g))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Save student"
					})
				]
			})] })
		})
	] });
}
//#endregion
export { SchoolManagementDashboard as t };
