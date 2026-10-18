import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as ShieldCheck, Bi as Activity, Ct as Plus, Di as ArrowUpRight, H as Stethoscope, Jr as Check, Ln as HeartPulse, Mr as Clock3, Nr as ClipboardList, Pn as Hospital, Rt as Package, Si as BedDouble, hr as Download, ii as CalendarDays, lr as Eye, m as UsersRound, st as Search } from "../_libs/lucide-react.mjs";
import { n as Button } from "./BrandLogo-DMNOUf0B.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./sophia-carter-CPbN4m2N.mjs";
import { d as token, f as useChartTheme, i as Card, r as Badge, s as PageHeader, t as ApexChart, u as mergeOptions } from "./widgets-7dkqdyCt.mjs";
import { t as Input } from "./input-C_OVFjtb.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-ODtyfUcb.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-Ch_2cWA8.mjs";
import { i as SelectItem, n as SelectContent, o as SelectTrigger, s as SelectValue, t as Select } from "./select-DtJbsb0z.mjs";
import { a as getHospitalOverview, i as HOSPITAL_SUPPLIES, n as HOSPITAL_DEPARTMENTS, o as hospitalMoney, r as HOSPITAL_DOCTORS, t as HOSPITAL_APPOINTMENTS } from "./hospital-dashboard-data-D3yLYuck.mjs";
import { t as Label } from "./label-Bkl91Djh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HospitalManagementDashboard-BvIrP6W5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HospitalManagementPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		navigationPath: "/dashboards/hospital-management",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HospitalManagementDashboard, {})
	});
}
function DoctorPortrait({ doctorId, small = false }) {
	const doctor = HOSPITAL_DOCTORS.find((item) => item.id === doctorId);
	if (!doctor) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		role: "img",
		"aria-label": `Portrait of ${doctor.name}`,
		"data-doctor-portrait": doctor.id,
		className: `relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-border font-semibold ${small ? "size-9 text-xs" : "size-16 text-lg"} ${doctor.tone}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			children: doctor.initials
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: doctor.image,
			alt: "",
			"aria-hidden": true,
			width: 384,
			height: 384,
			loading: "lazy",
			decoding: "async",
			className: "absolute inset-0 h-full w-full object-cover",
			onError: (event) => {
				event.currentTarget.style.display = "none";
			}
		})]
	});
}
function Metric({ title, value, icon, iconColor, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "metric-card vexui-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `metric-icon grid size-10 place-items-center rounded-xl ${iconColor}`,
					children: icon
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[28px] font-semibold tracking-tight tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-xs text-muted-foreground",
				children: footer
			})
		]
	});
}
function HospitalManagementDashboard() {
	const [period, setPeriod] = (0, import_react.useState)("7");
	const [department, setDepartment] = (0, import_react.useState)("all");
	const [appointments, setAppointments] = (0, import_react.useState)(HOSPITAL_APPOINTMENTS);
	const [query, setQuery] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [bookingOpen, setBookingOpen] = (0, import_react.useState)(false);
	const [patient, setPatient] = (0, import_react.useState)("");
	const [doctorId, setDoctorId] = (0, import_react.useState)("dr-01");
	const [date, setDate] = (0, import_react.useState)("2026-10-09");
	const [time, setTime] = (0, import_react.useState)("14:00");
	const [appointmentType, setAppointmentType] = (0, import_react.useState)("Consultation");
	const [bookingError, setBookingError] = (0, import_react.useState)("");
	const [details, setDetails] = (0, import_react.useState)(null);
	const { base } = useChartTheme();
	const data = getHospitalOverview(period, department);
	const departmentAppointments = appointments.filter((item) => department === "all" || item.department === department);
	const visibleAppointments = departmentAppointments.filter((item) => (status === "all" || item.status === status) && `${item.patient} ${item.id} ${item.department}`.toLowerCase().includes(query.trim().toLowerCase()));
	const doctors = HOSPITAL_DOCTORS.filter((item) => department === "all" || item.department === department);
	const scheduled = departmentAppointments.filter((item) => item.status === "Scheduled").length;
	const flowOptions = mergeOptions(base, {
		colors: [token("--chart-1"), token("--chart-2")],
		stroke: {
			curve: "smooth",
			width: [3, 2],
			dashArray: [0, 5]
		},
		xaxis: { categories: data.labels },
		yaxis: {
			min: 0,
			labels: { formatter: (value) => Math.round(value).toString() }
		},
		legend: {
			position: "top",
			horizontalAlign: "left"
		},
		tooltip: { y: { formatter: (value) => `${Math.round(value)} patients` } }
	});
	const departmentOptions = mergeOptions(base, {
		colors: data.departments.map((item) => token(item.color)),
		stroke: { width: 0 },
		fill: { opacity: .95 },
		plotOptions: { bar: {
			horizontal: true,
			distributed: true,
			borderRadius: 4,
			barHeight: "45%"
		} },
		legend: { show: false },
		xaxis: {
			categories: data.departments.map((item) => item.name),
			labels: { formatter: (value) => Math.round(Number(value)).toString() }
		},
		yaxis: { labels: { maxWidth: 125 } },
		tooltip: { y: { formatter: (value) => `${value} visits` } }
	});
	const occupancyOptions = mergeOptions(base, {
		colors: [token("--chart-1")],
		labels: ["Beds occupied"],
		stroke: { lineCap: "round" },
		plotOptions: { radialBar: {
			startAngle: -125,
			endAngle: 125,
			hollow: { size: "70%" },
			track: { background: token("--muted") },
			dataLabels: {
				name: {
					offsetY: 25,
					fontSize: "12px"
				},
				value: {
					offsetY: -15,
					fontSize: "28px",
					fontWeight: 600,
					formatter: (value) => value.toFixed(1) + "%"
				}
			}
		} }
	});
	function openBooking(id = "dr-01") {
		setDoctorId(id);
		setPatient("");
		setDate("2026-10-09");
		setTime("14:00");
		setBookingError("");
		setBookingOpen(true);
	}
	function bookAppointment(event) {
		event.preventDefault();
		const doctor = HOSPITAL_DOCTORS.find((item) => item.id === doctorId && item.available);
		if (!doctor || patient.trim().length < 2 || date < "2026-10-09" || !/^\d{2}:\d{2}$/.test(time)) {
			setBookingError("Enter a patient name, an available doctor, and a valid appointment date and time.");
			return;
		}
		if (appointments.some((item) => item.doctorId === doctorId && item.date === date && item.time === time)) {
			setBookingError("This doctor already has an appointment at that time. Choose another time.");
			return;
		}
		const appointment = {
			id: `APT-${2101 + appointments.length}`,
			patient: patient.trim(),
			age: null,
			doctorId,
			department: doctor.department,
			date,
			time,
			type: appointmentType,
			status: "Scheduled"
		};
		setAppointments((current) => [appointment, ...current]);
		setDepartment("all");
		setStatus("all");
		setQuery("");
		setBookingOpen(false);
		toast.success("Sample appointment added");
	}
	function checkIn(id) {
		setAppointments((current) => current.map((item) => item.id === id ? {
			...item,
			status: "Checked in"
		} : item));
		toast.success("Sample patient checked in");
	}
	function exportAppointments() {
		const csv = [[
			"Appointment",
			"Patient",
			"Department",
			"Doctor",
			"Date",
			"Time",
			"Status"
		], ...visibleAppointments.map((item) => [
			item.id,
			item.patient,
			item.department,
			HOSPITAL_DOCTORS.find((doctor) => doctor.id === item.doctorId)?.name ?? "",
			item.date,
			item.time,
			item.status
		])].map((row) => row.map((value) => `"${value.replaceAll("\"", "\"\"")}"`).join(",")).join("\r\n");
		const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = "hospital-appointments.csv";
		anchor.click();
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Hospital Management",
			subtitle: "A coordinated view of patients, appointments, and hospital operations.",
			breadcrumb: ["Dashboards", "Hospital Management"],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportAppointments,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export report"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => openBooking(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New appointment"]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hospital, { className: "size-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Carewell Medical Center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "primary",
						size: "sm",
						children: "Sample data"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Friday, October 9, 2026 · Hospital operations overview"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: department,
					onValueChange: setDepartment,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						"aria-label": "Hospital department",
						className: "h-9 w-[190px] bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "All departments"
					}), HOSPITAL_DEPARTMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item.name,
						children: item.name
					}, item.name))] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: period,
					onValueChange: (value) => setPeriod(value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						"aria-label": "Hospital reporting period",
						className: "h-9 w-[140px] bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "7",
						children: "Last 7 days"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "30",
						children: "Last 30 days"
					})] })]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					title: "Patient visits",
					iconColor: "bg-primary/10 text-primary",
					value: data.visits.toLocaleString("en-US"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { className: "size-5" }),
					footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 text-success" }),
							"Across the last ",
							period,
							" days"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					title: "Appointments",
					iconColor: "bg-info/10 text-info",
					value: String(departmentAppointments.length),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5" }),
					footer: `${scheduled} scheduled · ${departmentAppointments.filter((item) => item.status === "Checked in").length} checked in`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					title: "Available beds",
					iconColor: "bg-success/10 text-success",
					value: String(data.available),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "size-5" }),
					footer: `${data.occupied} occupied of ${data.beds} total beds`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					title: "Sample revenue",
					iconColor: "bg-warning/10 text-warning",
					value: hospitalMoney(data.revenue),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "size-5" }),
					footer: `Visit revenue over ${period} days`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Patient flow",
				description: `Arrivals and discharges over the last ${period} days`,
				className: "xl:col-span-2",
				bodyClassName: "px-3 pb-2 pt-4",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "primary",
					children: [data.visits.toLocaleString("en-US"), " arrivals"]
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex gap-6 px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold",
						children: data.visits.toLocaleString("en-US")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Patient arrivals"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold",
						children: data.discharged.reduce((sum, value) => sum + value, 0).toLocaleString("en-US")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Discharged"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "line",
					height: 290,
					options: flowOptions,
					series: [{
						name: "Arrivals",
						data: data.admissions
					}, {
						name: "Discharged",
						data: data.discharged
					}]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				title: "Bed occupancy",
				description: "Current capacity in selected departments",
				bodyClassName: "px-5 pb-5 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
						type: "radialBar",
						height: 255,
						options: occupancyOptions,
						series: [data.occupancy]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 text-center",
						children: [
							["Total beds", data.beds],
							["Occupied", data.occupied],
							["Available", data.available]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-muted/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: label
							})]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-center gap-1.5 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-success" }),
							data.available,
							" beds available for allocation"
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			title: "Appointments",
			description: "Manage sample patient visits and check-ins",
			bodyClassName: "p-0",
			className: "mb-6",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				tone: "primary",
				children: [visibleAppointments.length, " appointments"]
			}),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 border-b border-border px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute start-3 top-2.5 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							"aria-label": "Search hospital appointments",
							className: "ps-9",
							placeholder: "Search patient, appointment, or department...",
							value: query,
							onChange: (event) => setQuery(event.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: status,
						onValueChange: setStatus,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							"aria-label": "Appointment status",
							className: "w-[150px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All statuses"
						}), [
							"Scheduled",
							"Checked in",
							"Completed"
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value,
							children: value
						}, value))] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "ps-5",
						children: "Patient"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Doctor / department" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Appointment" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Type" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "pe-5",
						children: "Actions"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [visibleAppointments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "ps-5 py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
								children: item.patient.split(" ").map((part) => part[0]).slice(0, 2).join("")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "whitespace-nowrap text-[13px] font-semibold",
								children: item.patient
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: [item.id, item.age !== null ? ` · ${item.age} years` : ""]
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorPortrait, {
							doctorId: item.doctorId,
							small: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap text-xs font-medium",
							children: HOSPITAL_DOCTORS.find((doctor) => doctor.id === item.doctorId)?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted-foreground",
							children: item.department
						})] })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "whitespace-nowrap text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.time }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted-foreground",
							children: item.date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs",
						children: item.type
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						size: "sm",
						tone: item.status === "Completed" ? "success" : item.status === "Checked in" ? "info" : "warning",
						children: item.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "pe-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [item.status === "Scheduled" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "soft",
								"aria-label": `Check in ${item.patient}`,
								onClick: () => checkIn(item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), "Check in"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "iconSm",
								variant: "ghost",
								"aria-label": `View ${item.patient} appointment`,
								onClick: () => setDetails(item),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
							})]
						})
					})
				] }, item.id)), visibleAppointments.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 6,
					className: "py-10 text-center text-muted-foreground",
					children: "No appointments match your filters."
				}) })] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-5 py-3 text-xs text-muted-foreground",
					children: [
						"Showing ",
						visibleAppointments.length,
						" of",
						" ",
						departmentAppointments.length,
						" appointments · Changes stay in this demo session"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-6 xl:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Visits by department",
				description: `Department activity over ${period} days`,
				bodyClassName: "px-3 pb-2 pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApexChart, {
					type: "bar",
					height: 285,
					options: departmentOptions,
					series: [{
						name: "Visits",
						data: data.departments.map((item) => Math.round(item.visits * Number(period) / 7))
					}]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Ward capacity",
				description: "Occupied and available beds by ward",
				className: "xl:col-span-2",
				bodyClassName: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: data.departments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									item.occupied,
									" / ",
									item.beds,
									" beds"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-muted",
							role: "progressbar",
							"aria-label": `${item.name} occupancy`,
							"aria-valuenow": item.occupied,
							"aria-valuemin": 0,
							"aria-valuemax": item.beds,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full",
								style: {
									width: `${item.occupied / item.beds * 100}%`,
									background: `var(${item.color})`
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-[11px] text-muted-foreground",
							children: [item.beds - item.occupied, " beds available"]
						})
					] }, item.name))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[15px] font-semibold",
					children: "Doctor availability"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground",
				children: [doctors.filter((item) => item.available).length, " available"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [doctors.map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "vexui-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorPortrait, { doctorId: doctor.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							size: "sm",
							tone: doctor.available ? "success" : "warning",
							children: doctor.available ? "Available" : "In surgery"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: doctor.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: doctor.department
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted-foreground",
						children: doctor.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-4 flex items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { className: "size-3.5" }),
							doctor.patients,
							" patients assigned"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "w-full",
						size: "sm",
						disabled: !doctor.available,
						onClick: () => openBooking(doctor.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }), "Book appointment"]
					})
				]
			}, doctor.id)), doctors.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "col-span-full rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground",
				children: "No doctors are listed for this department in the sample roster."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Supply inventory",
				description: "Stock levels for daily hospital operations",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-muted-foreground" }),
				bodyClassName: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: HOSPITAL_SUPPLIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								size: "sm",
								tone: item.remaining / item.target < .3 ? "warning" : "success",
								children: item.remaining / item.target < .3 ? "Low stock" : "In stock"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full rounded-full ${item.remaining / item.target < .3 ? "bg-warning" : "bg-primary"}`,
								style: { width: `${item.remaining / item.target * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 text-[11px] text-muted-foreground",
							children: [
								item.remaining.toLocaleString("en-US"),
								" of",
								" ",
								item.target.toLocaleString("en-US"),
								" ",
								item.unit
							]
						})
					] }, item.name))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				title: "Operations activity",
				description: "Sample updates from the hospital team",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4 text-muted-foreground" }),
				bodyClassName: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-5",
					children: [
						{
							title: "Morning ward review completed",
							text: "Capacity and staffing reviewed across all six departments.",
							time: "09:15",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "size-4" }),
							tone: "bg-primary/10 text-primary"
						},
						{
							title: "Supply stock review",
							text: "PPE kits and dressing packs marked for replenishment.",
							time: "09:40",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" }),
							tone: "bg-warning/10 text-warning"
						},
						{
							title: "Afternoon clinic schedule ready",
							text: "Available doctors are accepting sample appointment bookings.",
							time: "10:00",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4" }),
							tone: "bg-success/10 text-success"
						},
						{
							title: "Bed allocation updated",
							text: "Available beds confirmed with ward coordinators for incoming patients.",
							time: "10:20",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "size-4" }),
							tone: "bg-info/10 text-info"
						},
						{
							title: "Staff handover completed",
							text: "The afternoon team received appointment and department updates.",
							time: "10:45",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, { className: "size-4" }),
							tone: "bg-primary/10 text-primary"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-9 shrink-0 place-items-center rounded-lg ${item.tone}`,
							children: item.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: item.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted-foreground",
								children: item.text
							})]
						})]
					}, item.title))
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: bookingOpen,
			onOpenChange: setBookingOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New appointment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Add a sample booking. Appointment changes are kept for this page session." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: bookAppointment,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "hospital-patient",
						children: "Patient name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "hospital-patient",
						className: "mt-2",
						placeholder: "Enter sample patient name",
						value: patient,
						onChange: (event) => setPatient(event.target.value),
						required: true,
						minLength: 2,
						maxLength: 80
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "hospital-doctor",
						children: "Doctor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: doctorId,
						onValueChange: setDoctorId,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "hospital-doctor",
							"aria-label": "Appointment doctor",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: HOSPITAL_DOCTORS.filter((item) => item.available).map((doctor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: doctor.id,
							children: [
								doctor.name,
								" · ",
								doctor.department
							]
						}, doctor.id)) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "hospital-date",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "hospital-date",
							type: "date",
							min: "2026-10-09",
							className: "mt-2",
							value: date,
							onChange: (event) => setDate(event.target.value),
							required: true
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "hospital-time",
							children: "Time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "hospital-time",
							type: "time",
							className: "mt-2",
							value: time,
							onChange: (event) => setTime(event.target.value),
							required: true
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "hospital-visit-type",
						children: "Visit type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: appointmentType,
						onValueChange: setAppointmentType,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "hospital-visit-type",
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Consultation",
							children: "Consultation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Follow-up",
							children: "Follow-up"
						})] })]
					})] }),
					bookingError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-destructive",
						children: bookingError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setBookingOpen(false),
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Save appointment"]
						})]
					})
				]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: details !== null,
			onOpenChange: (open) => {
				if (!open) setDetails(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Appointment details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Sample patient visit information." })] }), details && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-4 rounded-lg border bg-muted/30 p-4",
				children: [
					["Patient", details.patient],
					["Appointment ID", details.id],
					["Doctor", HOSPITAL_DOCTORS.find((doctor) => doctor.id === details.doctorId)?.name ?? ""],
					["Department", details.department],
					["Date / time", `${details.date} · ${details.time}`],
					["Status", appointments.find((item) => item.id === details.id)?.status ?? details.status]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-sm font-medium",
					children: value
				})] }, label))
			})] })
		})
	] });
}
//#endregion
export { HospitalManagementPage as t };
