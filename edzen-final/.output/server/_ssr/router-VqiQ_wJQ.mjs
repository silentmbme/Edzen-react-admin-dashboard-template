import { a as themeBootstrapScript, o as useVexuiSettings } from "./nova-settings-BnwRTuM0.mjs";
import { b as require_jsx_runtime, c as DirectionProvider } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$166 } from "../_element-CW1uTEbc.mjs";
import { t as Route$167 } from "../_template-UD-JxjH1.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-VqiQ_wJQ.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BIqrWN5u.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$165 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Edzen – React 19 Tailwind CSS Admin Dashboard Template" },
			{
				name: "description",
				content: "Edzen is a modern React 19, TypeScript and Tailwind CSS v4 admin dashboard template for SaaS, eCommerce, CRM, analytics and business applications. Explore responsive layouts, reusable components and dark/light themes."
			},
			{
				name: "keywords",
				content: "react admin dashboard, react dashboard template, react admin template, tailwind css admin dashboard, tailwind dashboard template, react 19 admin template, typescript admin dashboard, vite admin template, saas dashboard, ecommerce dashboard, crm dashboard, analytics dashboard, responsive admin template, dark mode dashboard, admin panel template"
			},
			{
				name: "author",
				content: "SM Pixel Crafts"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: "Edzen – React 19 Tailwind CSS Admin Dashboard Template"
			},
			{
				property: "og:description",
				content: "Edzen is a modern React 19, TypeScript and Tailwind CSS v4 admin dashboard template for SaaS, eCommerce, CRM, analytics and business applications. Explore responsive layouts, reusable components and dark/light themes."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Edzen"
			},
			{
				property: "og:image",
				content: "/favicon.png"
			},
			{
				property: "og:image:alt",
				content: "Edzen Premium Admin Dashboard"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Edzen – React 19 Tailwind CSS Admin Dashboard Template"
			},
			{
				name: "twitter:description",
				content: "Edzen is a modern React 19, TypeScript and Tailwind CSS v4 admin dashboard template for SaaS, eCommerce, CRM, analytics and business applications. Explore responsive layouts, reusable components and dark/light themes."
			},
			{
				name: "twitter:image",
				content: "/favicon.png"
			},
			{
				name: "twitter:image:alt",
				content: "Edzen Premium Admin Dashboard"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/edzen-favicon.png",
				type: "image/png",
				sizes: "256x256"
			},
			{
				rel: "shortcut icon",
				href: "/edzen-favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/edzen-favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeBootstrapScript } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const settings = useVexuiSettings();
	const { queryClient } = Route$165.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionProvider, {
			dir: settings.direction,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})
	});
}
var $$splitComponentImporter$139 = () => import("./routes-CMFs4tZj.mjs");
var Route$164 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$139, "component") });
var $$splitComponentImporter$138 = () => import("../_-DgQlKyLi.mjs");
var Route$163 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$138, "component") });
var Route$162 = createFileRoute("/appointments.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/appointments" });
} });
var Route$161 = createFileRoute("/attendance-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/school/attendance" });
} });
var Route$160 = createFileRoute("/billing.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/billing" });
} });
var Route$159 = createFileRoute("/chatbot-conversations.html")({ beforeLoad: () => {
	throw redirect({ to: "/ai-analytics/chatbot-conversations" });
} });
var Route$158 = createFileRoute("/class-workspace.html")({ beforeLoad: () => {
	throw redirect({ to: "/school/classes" });
} });
var Route$157 = createFileRoute("/doctor-directory.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/doctors" });
} });
var Route$156 = createFileRoute("/emergency.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/ambulance" });
} });
var Route$155 = createFileRoute("/employees-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/hrm/employees" });
} });
var Route$154 = createFileRoute("/exam-planner.html")({ beforeLoad: () => {
	throw redirect({ to: "/school/exams" });
} });
var Route$153 = createFileRoute("/floor-layout.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/wards" });
} });
var $$splitComponentImporter$137 = () => import("./hospital-management_._html-CH2MyCxk.mjs");
var Route$152 = createFileRoute("/hospital-management.html")({
	head: () => ({ meta: [{ title: "Hospital Management | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$137, "component")
});
var Route$151 = createFileRoute("/insights-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/ai-analytics/insights" });
} });
var Route$150 = createFileRoute("/leave-requests-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/hrm/leave-requests" });
} });
var $$splitComponentImporter$136 = () => import("./logistics-dashboard_._html-pZTN5lE5.mjs");
var Route$149 = createFileRoute("/logistics-dashboard.html")({
	head: () => ({ meta: [{ title: "Logistics Dashboard | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$136, "component")
});
var Route$148 = createFileRoute("/medicine-catalog.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/pharmacy" });
} });
var Route$147 = createFileRoute("/model-settings-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/ai-analytics/model-settings" });
} });
var $$splitComponentImporter$135 = () => import("./notes_._html-D4xW9vjO.mjs");
var Route$146 = createFileRoute("/notes.html")({
	head: () => ({ meta: [{ title: "Notes | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$135, "component")
});
var Route$145 = createFileRoute("/patients.html")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/patients" });
} });
var Route$144 = createFileRoute("/payroll-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/hrm/payroll" });
} });
var Route$143 = createFileRoute("/predictions-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/ai-analytics/predictions" });
} });
var $$splitComponentImporter$134 = () => import("./restaurant-pos_._html-jk0os-6_.mjs");
var Route$142 = createFileRoute("/restaurant-pos.html")({
	head: () => ({ meta: [{ title: "Restaurant POS | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$134, "component")
});
var Route$141 = createFileRoute("/reviews-list.html")({ beforeLoad: () => {
	throw redirect({ to: "/hrm/reviews" });
} });
var $$splitComponentImporter$133 = () => import("./school-management_._html-DsNL10N3.mjs");
var Route$140 = createFileRoute("/school-management.html")({
	head: () => ({ meta: [{ title: "School Management | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$133, "component")
});
var $$splitComponentImporter$132 = () => import("./school-management_._htmlhtml-BjeXadJT.mjs");
var Route$139 = createFileRoute("/school-management.htmlhtml")({
	head: () => ({ meta: [{ title: "School Management | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$132, "component")
});
var Route$138 = createFileRoute("/student-directory.html")({ beforeLoad: () => {
	throw redirect({ to: "/school/students" });
} });
var Route$137 = createFileRoute("/ai-analytics/")({ beforeLoad: () => {
	throw redirect({ to: "/ai-analytics/insights" });
} });
var $$splitComponentImporter$131 = () => import("./chatbot-conversations-sOOZfwr-.mjs");
var Route$136 = createFileRoute("/ai-analytics/chatbot-conversations")({
	head: () => ({ meta: [{ title: "Chatbot Assistant | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$131, "component")
});
var $$splitComponentImporter$130 = () => import("./insights-fhiKoowq.mjs");
var Route$135 = createFileRoute("/ai-analytics/insights")({
	head: () => ({ meta: [{ title: "AI Insights | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$130, "component")
});
var $$splitComponentImporter$129 = () => import("./model-settings-O7aE9fDm.mjs");
var Route$134 = createFileRoute("/ai-analytics/model-settings")({
	head: () => ({ meta: [{ title: "Model Settings | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$129, "component")
});
var $$splitComponentImporter$128 = () => import("./predictions-DL8LlnrL.mjs");
var Route$133 = createFileRoute("/ai-analytics/predictions")({
	head: () => ({ meta: [{ title: "Predictions | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$128, "component")
});
var $$splitComponentImporter$127 = () => import("./ai-chat-F6xtjJDY.mjs");
var Route$132 = createFileRoute("/apps/ai-chat")({
	head: () => ({ meta: [{ title: "AI Chat | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$127, "component")
});
var $$splitComponentImporter$126 = () => import("./calendar-Bo4ZSSQU.mjs");
var Route$131 = createFileRoute("/apps/calendar")({ component: lazyRouteComponent($$splitComponentImporter$126, "component") });
var $$splitComponentImporter$125 = () => import("./chat-BC5HcNy3.mjs");
var Route$130 = createFileRoute("/apps/chat")({ component: lazyRouteComponent($$splitComponentImporter$125, "component") });
var $$splitComponentImporter$124 = () => import("./email-DmriYvhR.mjs");
var Route$129 = createFileRoute("/apps/email")({ component: lazyRouteComponent($$splitComponentImporter$124, "component") });
var $$splitComponentImporter$123 = () => import("./files-DmFYIVud.mjs");
var Route$128 = createFileRoute("/apps/files")({ component: lazyRouteComponent($$splitComponentImporter$123, "component") });
var $$splitComponentImporter$122 = () => import("./kanban-BXMteePr.mjs");
var Route$127 = createFileRoute("/apps/kanban")({ component: lazyRouteComponent($$splitComponentImporter$122, "component") });
var $$splitComponentImporter$121 = () => import("./notes-C0YAEibn.mjs");
var Route$126 = createFileRoute("/apps/notes")({
	head: () => ({ meta: [{ title: "Notes | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$121, "component")
});
var $$splitComponentImporter$120 = () => import("./tasks-DHTu_W0B.mjs");
var Route$125 = createFileRoute("/apps/tasks")({ component: lazyRouteComponent($$splitComponentImporter$120, "component") });
var $$splitComponentImporter$119 = () => import("./email-templates-BsIThyEw.mjs");
var Route$124 = createFileRoute("/auth/email-templates")({ component: lazyRouteComponent($$splitComponentImporter$119, "component") });
var $$splitComponentImporter$118 = () => import("./errors-DuO7MdoU.mjs");
var Route$123 = createFileRoute("/auth/errors")({ component: lazyRouteComponent($$splitComponentImporter$118, "component") });
var $$splitComponentImporter$117 = () => import("./login-K0i1HXx3.mjs");
var Route$122 = createFileRoute("/auth/login")({ component: lazyRouteComponent($$splitComponentImporter$117, "component") });
var $$splitComponentImporter$116 = () => import("./register-7pz4gez1.mjs");
var Route$121 = createFileRoute("/auth/register")({ component: lazyRouteComponent($$splitComponentImporter$116, "component") });
var $$splitComponentImporter$115 = () => import("./apex-Cq8ucdCP.mjs");
var Route$120 = createFileRoute("/charts/apex")({ component: lazyRouteComponent($$splitComponentImporter$115, "component") });
var $$splitComponentImporter$114 = () => import("./area-BY0P2UPU.mjs");
var Route$119 = createFileRoute("/charts/area")({ component: lazyRouteComponent($$splitComponentImporter$114, "component") });
var $$splitComponentImporter$113 = () => import("./bar-iTqzD36F.mjs");
var Route$118 = createFileRoute("/charts/bar")({ component: lazyRouteComponent($$splitComponentImporter$113, "component") });
var $$splitComponentImporter$112 = () => import("./heatmap-0nl3ksDE.mjs");
var Route$117 = createFileRoute("/charts/heatmap")({ component: lazyRouteComponent($$splitComponentImporter$112, "component") });
var $$splitComponentImporter$111 = () => import("./line-BQANYiV7.mjs");
var Route$116 = createFileRoute("/charts/line")({ component: lazyRouteComponent($$splitComponentImporter$111, "component") });
var $$splitComponentImporter$110 = () => import("./mixed-Dby7NWEj.mjs");
var Route$115 = createFileRoute("/charts/mixed")({ component: lazyRouteComponent($$splitComponentImporter$110, "component") });
var $$splitComponentImporter$109 = () => import("./pie-CJN_phcK.mjs");
var Route$114 = createFileRoute("/charts/pie")({ component: lazyRouteComponent($$splitComponentImporter$109, "component") });
var $$splitComponentImporter$108 = () => import("./radar-BKGLaSkV.mjs");
var Route$113 = createFileRoute("/charts/radar")({ component: lazyRouteComponent($$splitComponentImporter$108, "component") });
var $$splitComponentImporter$107 = () => import("./radial-CBE-Gf02.mjs");
var Route$112 = createFileRoute("/charts/radial")({ component: lazyRouteComponent($$splitComponentImporter$107, "component") });
var $$splitComponentImporter$106 = () => import("./scatter-BDSNJr18.mjs");
var Route$111 = createFileRoute("/charts/scatter")({ component: lazyRouteComponent($$splitComponentImporter$106, "component") });
var $$splitComponentImporter$105 = () => import("./sparkline-7kMeAjdO.mjs");
var Route$110 = createFileRoute("/charts/sparkline")({ component: lazyRouteComponent($$splitComponentImporter$105, "component") });
var $$splitComponentImporter$104 = () => import("./treemap-Xl39-rJe.mjs");
var Route$109 = createFileRoute("/charts/treemap")({ component: lazyRouteComponent($$splitComponentImporter$104, "component") });
var $$splitComponentImporter$103 = () => import("./companies-DHMbk8o8.mjs");
var Route$108 = createFileRoute("/crm/companies")({ component: lazyRouteComponent($$splitComponentImporter$103, "component") });
var $$splitComponentImporter$102 = () => import("./contacts-ByKHEu5-.mjs");
var Route$107 = createFileRoute("/crm/contacts")({ component: lazyRouteComponent($$splitComponentImporter$102, "component") });
var $$splitComponentImporter$101 = () => import("./deals-DDYO51aC.mjs");
var Route$106 = createFileRoute("/crm/deals")({ component: lazyRouteComponent($$splitComponentImporter$101, "component") });
var $$splitComponentImporter$100 = () => import("./leads-BwwVeCsm.mjs");
var Route$105 = createFileRoute("/crm/leads")({ component: lazyRouteComponent($$splitComponentImporter$100, "component") });
var $$splitComponentImporter$99 = () => import("./pipeline-CluaYOWX.mjs");
var Route$104 = createFileRoute("/crm/pipeline")({ component: lazyRouteComponent($$splitComponentImporter$99, "component") });
var Route$103 = createFileRoute("/crypto/")({ beforeLoad: () => {
	throw redirect({ to: "/crypto/market" });
} });
var $$splitComponentImporter$98 = () => import("./exchange-GjPfADTT.mjs");
var Route$102 = createFileRoute("/crypto/exchange")({
	head: () => ({ meta: [{ title: "Crypto exchange | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$98, "component")
});
var $$splitComponentImporter$97 = () => import("./market-e4197kXf.mjs");
var Route$101 = createFileRoute("/crypto/market")({
	head: () => ({ meta: [{ title: "Crypto market | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$97, "component")
});
var $$splitComponentImporter$96 = () => import("./transactions-DYTxbnIO.mjs");
var Route$100 = createFileRoute("/crypto/transactions")({
	head: () => ({ meta: [{ title: "Crypto transactions | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$96, "component")
});
var $$splitComponentImporter$95 = () => import("./wallet-J-xT2EpC.mjs");
var Route$99 = createFileRoute("/crypto/wallet")({
	head: () => ({ meta: [{ title: "Crypto wallet | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$95, "component")
});
var $$splitComponentImporter$94 = () => import("./ai-analytics-Wd4PKsMo.mjs");
var Route$98 = createFileRoute("/dashboards/ai-analytics")({
	head: () => ({ meta: [{ title: "AI Analytics | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$94, "component")
});
var $$splitComponentImporter$93 = () => import("./analytics-bPwWaMam.mjs");
var Route$97 = createFileRoute("/dashboards/analytics")({ component: lazyRouteComponent($$splitComponentImporter$93, "component") });
var $$splitComponentImporter$92 = () => import("./crm-Dq1BVEvd.mjs");
var Route$96 = createFileRoute("/dashboards/crm")({ component: lazyRouteComponent($$splitComponentImporter$92, "component") });
var $$splitComponentImporter$91 = () => import("./crypto-Dq1i8zwg.mjs");
var Route$95 = createFileRoute("/dashboards/crypto")({
	head: () => ({ meta: [{ title: "Crypto Dashboard | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$91, "component")
});
var $$splitComponentImporter$90 = () => import("./ecommerce-Dw84myEg.mjs");
var Route$94 = createFileRoute("/dashboards/ecommerce")({ component: lazyRouteComponent($$splitComponentImporter$90, "component") });
var $$splitComponentImporter$89 = () => import("./finance-7d-fiFKi.mjs");
var Route$93 = createFileRoute("/dashboards/finance")({ component: lazyRouteComponent($$splitComponentImporter$89, "component") });
var $$splitComponentImporter$88 = () => import("./hospital-management-DZsSP7FZ.mjs");
var Route$92 = createFileRoute("/dashboards/hospital-management")({
	head: () => ({ meta: [{ title: "Hospital Management | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$88, "component")
});
var $$splitComponentImporter$87 = () => import("./hrm-dashboard-C6MZi8Fh.mjs");
var Route$91 = createFileRoute("/dashboards/hrm-dashboard")({
	head: () => ({ meta: [{ title: "HRM Dashboard | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$87, "component")
});
var $$splitComponentImporter$86 = () => import("./lms-dashboard-DM-y23kJ.mjs");
var Route$90 = createFileRoute("/dashboards/lms-dashboard")({
	head: () => ({ meta: [{ title: "LMS Dashboard | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$86, "component")
});
var $$splitComponentImporter$85 = () => import("./logistics-dashboard-BnqYuJhJ.mjs");
var Route$89 = createFileRoute("/dashboards/logistics-dashboard")({
	head: () => ({ meta: [{ title: "Logistics Dashboard | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$85, "component")
});
var $$splitComponentImporter$84 = () => import("./marketing-Cr9MPk1x.mjs");
var Route$88 = createFileRoute("/dashboards/marketing")({ component: lazyRouteComponent($$splitComponentImporter$84, "component") });
var $$splitComponentImporter$83 = () => import("./projects-kJxRsVZy.mjs");
var Route$87 = createFileRoute("/dashboards/projects")({ component: lazyRouteComponent($$splitComponentImporter$83, "component") });
var $$splitComponentImporter$82 = () => import("./restaurant-pos-DGqwiFIf.mjs");
var Route$86 = createFileRoute("/dashboards/restaurant-pos")({
	head: () => ({ meta: [{ title: "Restaurant POS | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$82, "component")
});
var $$splitComponentImporter$81 = () => import("./saas-Db3Kkhuo.mjs");
var Route$85 = createFileRoute("/dashboards/saas")({ component: lazyRouteComponent($$splitComponentImporter$81, "component") });
var $$splitComponentImporter$80 = () => import("./school-management-Cxhv4q8E.mjs");
var Route$84 = createFileRoute("/dashboards/school-management")({
	head: () => ({ meta: [{ title: "School Management | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$80, "component")
});
var $$splitComponentImporter$79 = () => import("./add-product-6ELcFdri.mjs");
var Route$83 = createFileRoute("/ecommerce/add-product")({ component: lazyRouteComponent($$splitComponentImporter$79, "component") });
var $$splitComponentImporter$78 = () => import("./checkout-FGjaPvBM.mjs");
var Route$82 = createFileRoute("/ecommerce/checkout")({ component: lazyRouteComponent($$splitComponentImporter$78, "component") });
var $$splitComponentImporter$77 = () => import("./customers-hEkr2TBh.mjs");
var Route$81 = createFileRoute("/ecommerce/customers")({ component: lazyRouteComponent($$splitComponentImporter$77, "component") });
var $$splitComponentImporter$76 = () => import("./orders-FWdnzZTX.mjs");
var Route$80 = createFileRoute("/ecommerce/orders")({ component: lazyRouteComponent($$splitComponentImporter$76, "component") });
var $$splitComponentImporter$75 = () => import("./product-details-QVw-9SvC.mjs");
var Route$79 = createFileRoute("/ecommerce/product-details")({ component: lazyRouteComponent($$splitComponentImporter$75, "component") });
var $$splitComponentImporter$74 = () => import("./products-CV7WD-eN.mjs");
var Route$78 = createFileRoute("/ecommerce/products")({ component: lazyRouteComponent($$splitComponentImporter$74, "component") });
var Route$77 = createFileRoute("/finance/")({ beforeLoad: () => {
	throw redirect({ to: "/finance/transactions" });
} });
var $$splitComponentImporter$73 = () => import("./budgets-D8rM4Xrp.mjs");
var Route$76 = createFileRoute("/finance/budgets")({
	head: () => ({ meta: [{ title: "Budgets | Edzen Finance" }] }),
	component: lazyRouteComponent($$splitComponentImporter$73, "component")
});
var $$splitComponentImporter$72 = () => import("./expenses-BeaO0yib.mjs");
var Route$75 = createFileRoute("/finance/expenses")({
	head: () => ({ meta: [{ title: "Expenses | Edzen Finance" }] }),
	component: lazyRouteComponent($$splitComponentImporter$72, "component")
});
var $$splitComponentImporter$71 = () => import("./invoices-CAy6DFdd.mjs");
var Route$74 = createFileRoute("/finance/invoices")({
	head: () => ({ meta: [{ title: "Invoices | Edzen Finance" }] }),
	component: lazyRouteComponent($$splitComponentImporter$71, "component")
});
var $$splitComponentImporter$70 = () => import("./transactions-B9rBveVC.mjs");
var Route$73 = createFileRoute("/finance/transactions")({
	head: () => ({ meta: [{ title: "Transactions | Edzen Finance" }] }),
	component: lazyRouteComponent($$splitComponentImporter$70, "component")
});
var $$splitComponentImporter$69 = () => import("./checks-switches-radios-YV__6jzC.mjs");
var Route$72 = createFileRoute("/forms/checks-switches-radios")({ component: lazyRouteComponent($$splitComponentImporter$69, "component") });
var $$splitComponentImporter$68 = () => import("./date-pickers-CeGVnS7G.mjs");
var Route$71 = createFileRoute("/forms/date-pickers")({ component: lazyRouteComponent($$splitComponentImporter$68, "component") });
var $$splitComponentImporter$67 = () => import("./editors-C-nkx8TZ.mjs");
var Route$70 = createFileRoute("/forms/editors")({ component: lazyRouteComponent($$splitComponentImporter$67, "component") });
var $$splitComponentImporter$66 = () => import("./elements-Dbnveiog.mjs");
var Route$69 = createFileRoute("/forms/elements")({ component: lazyRouteComponent($$splitComponentImporter$66, "component") });
var $$splitComponentImporter$65 = () => import("./inline-editable-DQcKUzqY.mjs");
var Route$68 = createFileRoute("/forms/inline-editable")({ component: lazyRouteComponent($$splitComponentImporter$65, "component") });
var $$splitComponentImporter$64 = () => import("./layouts-BHIymqeU.mjs");
var Route$67 = createFileRoute("/forms/layouts")({ component: lazyRouteComponent($$splitComponentImporter$64, "component") });
var $$splitComponentImporter$63 = () => import("./multi-step-wizard-oa0-BcRj.mjs");
var Route$66 = createFileRoute("/forms/multi-step-wizard")({ component: lazyRouteComponent($$splitComponentImporter$63, "component") });
var $$splitComponentImporter$62 = () => import("./plugins-Cxo_mhNa.mjs");
var Route$65 = createFileRoute("/forms/plugins")({ component: lazyRouteComponent($$splitComponentImporter$62, "component") });
var $$splitComponentImporter$61 = () => import("./select-components-Bua8CQ0v.mjs");
var Route$64 = createFileRoute("/forms/select-components")({ component: lazyRouteComponent($$splitComponentImporter$61, "component") });
var $$splitComponentImporter$60 = () => import("./validation-Drxs4x0R.mjs");
var Route$63 = createFileRoute("/forms/validation")({ component: lazyRouteComponent($$splitComponentImporter$60, "component") });
var Route$62 = createFileRoute("/hospital/")({ beforeLoad: () => {
	throw redirect({ to: "/hospital/patients" });
} });
var $$splitComponentImporter$59 = () => import("./ambulance-CHtN4QkV.mjs");
var Route$61 = createFileRoute("/hospital/ambulance")({
	head: () => ({ meta: [{ title: "Ambulance | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$59, "component")
});
var $$splitComponentImporter$58 = () => import("./appointments-DmKrK5SY.mjs");
var Route$60 = createFileRoute("/hospital/appointments")({
	head: () => ({ meta: [{ title: "Appointments | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$58, "component")
});
var $$splitComponentImporter$57 = () => import("./billing-ByE5NKu7.mjs");
var Route$59 = createFileRoute("/hospital/billing")({
	head: () => ({ meta: [{ title: "Billing | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$57, "component")
});
var $$splitComponentImporter$56 = () => import("./doctors-By2nyfT9.mjs");
var Route$58 = createFileRoute("/hospital/doctors")({
	head: () => ({ meta: [{ title: "Doctors | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$56, "component")
});
var $$splitComponentImporter$55 = () => import("./patients-CT0iNJGx.mjs");
var Route$57 = createFileRoute("/hospital/patients")({
	head: () => ({ meta: [{ title: "Patients | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$55, "component")
});
var $$splitComponentImporter$54 = () => import("./pharmacy-BSrv4YRk.mjs");
var Route$56 = createFileRoute("/hospital/pharmacy")({
	head: () => ({ meta: [{ title: "Pharmacy | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$54, "component")
});
var $$splitComponentImporter$53 = () => import("./wards-BuROGQ2D.mjs");
var Route$55 = createFileRoute("/hospital/wards")({
	head: () => ({ meta: [{ title: "Wards & Beds | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$53, "component")
});
var Route$54 = createFileRoute("/hrm/")({ beforeLoad: () => {
	throw redirect({ to: "/hrm/employees" });
} });
var $$splitComponentImporter$52 = () => import("./employees-CIhYBLlr.mjs");
var Route$53 = createFileRoute("/hrm/employees")({
	head: () => ({ meta: [{ title: "Employees | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$52, "component")
});
var $$splitComponentImporter$51 = () => import("./leave-requests-CSGZbwMl.mjs");
var Route$52 = createFileRoute("/hrm/leave-requests")({
	head: () => ({ meta: [{ title: "Leave Requests | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$51, "component")
});
var $$splitComponentImporter$50 = () => import("./payroll-CtVv88YQ.mjs");
var Route$51 = createFileRoute("/hrm/payroll")({
	head: () => ({ meta: [{ title: "Payroll | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$50, "component")
});
var $$splitComponentImporter$49 = () => import("./reviews-DO6r1ju5.mjs");
var Route$50 = createFileRoute("/hrm/reviews")({
	head: () => ({ meta: [{ title: "Performance Reviews | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$49, "component")
});
var $$splitComponentImporter$48 = () => import("./create-CKdM5J8W.mjs");
var Route$49 = createFileRoute("/invoices/create")({ component: lazyRouteComponent($$splitComponentImporter$48, "component") });
var $$splitComponentImporter$47 = () => import("./detail-NMCbI70m.mjs");
var Route$48 = createFileRoute("/invoices/detail")({ component: lazyRouteComponent($$splitComponentImporter$47, "component") });
var $$splitComponentImporter$46 = () => import("./list-_KGtZRGM.mjs");
var Route$47 = createFileRoute("/invoices/list")({ component: lazyRouteComponent($$splitComponentImporter$46, "component") });
var $$splitComponentImporter$45 = () => import("./inventory-B67gk-nM.mjs");
var Route$46 = createFileRoute("/logistics/inventory")({
	head: () => ({ meta: [{ title: "Inventory | Edzen Logistics" }] }),
	component: lazyRouteComponent($$splitComponentImporter$45, "component")
});
var $$splitComponentImporter$44 = () => import("./purchase-orders-BOu8KcPa.mjs");
var Route$45 = createFileRoute("/logistics/purchase-orders")({
	head: () => ({ meta: [{ title: "Purchase Orders | Edzen Logistics" }] }),
	component: lazyRouteComponent($$splitComponentImporter$44, "component")
});
var $$splitComponentImporter$43 = () => import("./shipments-DkX-j9rz.mjs");
var Route$44 = createFileRoute("/logistics/shipments")({
	head: () => ({ meta: [{ title: "Shipments | Edzen Logistics" }] }),
	component: lazyRouteComponent($$splitComponentImporter$43, "component")
});
var $$splitComponentImporter$42 = () => import("./stock-transfer-C6xns1XT.mjs");
var Route$43 = createFileRoute("/logistics/stock-transfer")({
	head: () => ({ meta: [{ title: "Stock Transfer | Edzen Logistics" }] }),
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./suppliers-Ctk4_XX9.mjs");
var Route$42 = createFileRoute("/logistics/suppliers")({
	head: () => ({ meta: [{ title: "Suppliers | Edzen Logistics" }] }),
	component: lazyRouteComponent($$splitComponentImporter$41, "component")
});
var $$splitComponentImporter$40 = () => import("./faq-BVeOzRZ0.mjs");
var Route$41 = createFileRoute("/pages/faq")({ component: lazyRouteComponent($$splitComponentImporter$40, "component") });
var $$splitComponentImporter$39 = () => import("./pricing-DBt3_HBE.mjs");
var Route$40 = createFileRoute("/pages/pricing")({ component: lazyRouteComponent($$splitComponentImporter$39, "component") });
var $$splitComponentImporter$38 = () => import("./profile-D4ARp-nN.mjs");
var Route$39 = createFileRoute("/pages/profile")({ component: lazyRouteComponent($$splitComponentImporter$38, "component") });
var $$splitComponentImporter$37 = () => import("./settings-C-u2Cc27.mjs");
var Route$38 = createFileRoute("/pages/settings")({ component: lazyRouteComponent($$splitComponentImporter$37, "component") });
var $$splitComponentImporter$36 = () => import("./detail-DeimeDHa.mjs");
var Route$37 = createFileRoute("/projects/detail")({ component: lazyRouteComponent($$splitComponentImporter$36, "component") });
var $$splitComponentImporter$35 = () => import("./grid-C6y-X1oN.mjs");
var Route$36 = createFileRoute("/projects/grid")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./list-CL4_wvzC.mjs");
var Route$35 = createFileRoute("/projects/list")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./team-D5APbbNi.mjs");
var Route$34 = createFileRoute("/projects/team")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var Route$33 = createFileRoute("/school/")({ beforeLoad: () => {
	throw redirect({ to: "/school/students" });
} });
var $$splitComponentImporter$32 = () => import("./attendance-X7KB2TDI.mjs");
var Route$32 = createFileRoute("/school/attendance")({
	head: () => ({ meta: [{ title: "Attendance | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("./classes-DRFrg291.mjs");
var Route$31 = createFileRoute("/school/classes")({
	head: () => ({ meta: [{ title: "Classes | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./exams-C4rsZgWK.mjs");
var Route$30 = createFileRoute("/school/exams")({
	head: () => ({ meta: [{ title: "Exams | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./students-DpQ0-pYD.mjs");
var Route$29 = createFileRoute("/school/students")({
	head: () => ({ meta: [{ title: "Students | Edzen" }] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./advanced-pAVgI175.mjs");
var Route$28 = createFileRoute("/tables/advanced")({ component: lazyRouteComponent($$splitComponentImporter$28, "component") });
var $$splitComponentImporter$27 = () => import("./basic-2ufYtEMo.mjs");
var Route$27 = createFileRoute("/tables/basic")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./data-wdtzFcYB.mjs");
var Route$26 = createFileRoute("/tables/data")({ component: lazyRouteComponent($$splitComponentImporter$26, "component") });
var $$splitComponentImporter$25 = () => import("./filter-CCqk_gkT.mjs");
var Route$25 = createFileRoute("/tables/filter")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./responsive-BQFlEYjy.mjs");
var Route$24 = createFileRoute("/tables/responsive")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./elements-BzGuQ9ZU.mjs");
var Route$23 = createFileRoute("/ui/elements")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./email-templates-bC8dqgwq.mjs");
var Route$22 = createFileRoute("/auth/email-templates/")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./errors-DKdhVTQI.mjs");
var Route$21 = createFileRoute("/auth/errors/")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./404-BMN8OQ1f.mjs");
var Route$20 = createFileRoute("/auth/errors/404")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./500-D57m6Ahf.mjs");
var Route$19 = createFileRoute("/auth/errors/500")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./503-rcUc5CWF.mjs");
var Route$18 = createFileRoute("/auth/errors/503")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./maintenance-BXyJ3jvS.mjs");
var Route$17 = createFileRoute("/auth/errors/maintenance")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./forgot-password-CzVJnDqp.mjs");
var Route$16 = createFileRoute("/auth/forgot-password/")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./basic-BvMnbeER.mjs");
var Route$15 = createFileRoute("/auth/forgot-password/basic")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./cover-B_DjDVzv.mjs");
var Route$14 = createFileRoute("/auth/forgot-password/cover")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./basic-DAkZ14Op.mjs");
var Route$13 = createFileRoute("/auth/lock-screen/basic")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./cover-DEXcNNdm.mjs");
var Route$12 = createFileRoute("/auth/lock-screen/cover")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./basic-nZzg2oSG.mjs");
var Route$11 = createFileRoute("/auth/reset-password/basic")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./cover-BIPlpwij.mjs");
var Route$10 = createFileRoute("/auth/reset-password/cover")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./basic-CD8fJAOt.mjs");
var Route$9 = createFileRoute("/auth/sign-in/basic")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./cover-DedoDC1P.mjs");
var Route$8 = createFileRoute("/auth/sign-in/cover")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./basic-D5T60aj0.mjs");
var Route$7 = createFileRoute("/auth/sign-up/basic")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./cover-CCRhu6pu.mjs");
var Route$6 = createFileRoute("/auth/sign-up/cover")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./basic-QH-8k_IE.mjs");
var Route$5 = createFileRoute("/auth/two-step/basic")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./cover-CMob-JRt.mjs");
var Route$4 = createFileRoute("/auth/two-step/cover")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./basic-G9sNq8EM.mjs");
var Route$3 = createFileRoute("/auth/verify-email/basic")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./cover-BTM6Eoef.mjs");
var Route$2 = createFileRoute("/auth/verify-email/cover")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./add-D6CcLS5F.mjs");
var Route$1 = createFileRoute("/ecommerce/products/add")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./detail-C65_QZYO.mjs");
var Route = createFileRoute("/ecommerce/products/detail")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$164.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$165
});
var SplatRoute = Route$163.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$165
});
var AppointmentsDothtmlRoute = Route$162.update({
	id: "/appointments.html",
	path: "/appointments.html",
	getParentRoute: () => Route$165
});
var AttendanceListDothtmlRoute = Route$161.update({
	id: "/attendance-list.html",
	path: "/attendance-list.html",
	getParentRoute: () => Route$165
});
var BillingDothtmlRoute = Route$160.update({
	id: "/billing.html",
	path: "/billing.html",
	getParentRoute: () => Route$165
});
var ChatbotConversationsDothtmlRoute = Route$159.update({
	id: "/chatbot-conversations.html",
	path: "/chatbot-conversations.html",
	getParentRoute: () => Route$165
});
var ClassWorkspaceDothtmlRoute = Route$158.update({
	id: "/class-workspace.html",
	path: "/class-workspace.html",
	getParentRoute: () => Route$165
});
var DoctorDirectoryDothtmlRoute = Route$157.update({
	id: "/doctor-directory.html",
	path: "/doctor-directory.html",
	getParentRoute: () => Route$165
});
var EmergencyDothtmlRoute = Route$156.update({
	id: "/emergency.html",
	path: "/emergency.html",
	getParentRoute: () => Route$165
});
var EmployeesListDothtmlRoute = Route$155.update({
	id: "/employees-list.html",
	path: "/employees-list.html",
	getParentRoute: () => Route$165
});
var ExamPlannerDothtmlRoute = Route$154.update({
	id: "/exam-planner.html",
	path: "/exam-planner.html",
	getParentRoute: () => Route$165
});
var FloorLayoutDothtmlRoute = Route$153.update({
	id: "/floor-layout.html",
	path: "/floor-layout.html",
	getParentRoute: () => Route$165
});
var HospitalManagementDothtmlRoute = Route$152.update({
	id: "/hospital-management.html",
	path: "/hospital-management.html",
	getParentRoute: () => Route$165
});
var InsightsListDothtmlRoute = Route$151.update({
	id: "/insights-list.html",
	path: "/insights-list.html",
	getParentRoute: () => Route$165
});
var LeaveRequestsListDothtmlRoute = Route$150.update({
	id: "/leave-requests-list.html",
	path: "/leave-requests-list.html",
	getParentRoute: () => Route$165
});
var LogisticsDashboardDothtmlRoute = Route$149.update({
	id: "/logistics-dashboard.html",
	path: "/logistics-dashboard.html",
	getParentRoute: () => Route$165
});
var MedicineCatalogDothtmlRoute = Route$148.update({
	id: "/medicine-catalog.html",
	path: "/medicine-catalog.html",
	getParentRoute: () => Route$165
});
var ModelSettingsListDothtmlRoute = Route$147.update({
	id: "/model-settings-list.html",
	path: "/model-settings-list.html",
	getParentRoute: () => Route$165
});
var NotesDothtmlRoute = Route$146.update({
	id: "/notes.html",
	path: "/notes.html",
	getParentRoute: () => Route$165
});
var PatientsDothtmlRoute = Route$145.update({
	id: "/patients.html",
	path: "/patients.html",
	getParentRoute: () => Route$165
});
var PayrollListDothtmlRoute = Route$144.update({
	id: "/payroll-list.html",
	path: "/payroll-list.html",
	getParentRoute: () => Route$165
});
var PredictionsListDothtmlRoute = Route$143.update({
	id: "/predictions-list.html",
	path: "/predictions-list.html",
	getParentRoute: () => Route$165
});
var RestaurantPosDothtmlRoute = Route$142.update({
	id: "/restaurant-pos.html",
	path: "/restaurant-pos.html",
	getParentRoute: () => Route$165
});
var ReviewsListDothtmlRoute = Route$141.update({
	id: "/reviews-list.html",
	path: "/reviews-list.html",
	getParentRoute: () => Route$165
});
var SchoolManagementDothtmlRoute = Route$140.update({
	id: "/school-management.html",
	path: "/school-management.html",
	getParentRoute: () => Route$165
});
var SchoolManagementDothtmlhtmlRoute = Route$139.update({
	id: "/school-management.htmlhtml",
	path: "/school-management.htmlhtml",
	getParentRoute: () => Route$165
});
var StudentDirectoryDothtmlRoute = Route$138.update({
	id: "/student-directory.html",
	path: "/student-directory.html",
	getParentRoute: () => Route$165
});
var AiAnalyticsIndexRoute = Route$137.update({
	id: "/ai-analytics/",
	path: "/ai-analytics/",
	getParentRoute: () => Route$165
});
var AiAnalyticsChatbotConversationsRoute = Route$136.update({
	id: "/ai-analytics/chatbot-conversations",
	path: "/ai-analytics/chatbot-conversations",
	getParentRoute: () => Route$165
});
var AiAnalyticsInsightsRoute = Route$135.update({
	id: "/ai-analytics/insights",
	path: "/ai-analytics/insights",
	getParentRoute: () => Route$165
});
var AiAnalyticsModelSettingsRoute = Route$134.update({
	id: "/ai-analytics/model-settings",
	path: "/ai-analytics/model-settings",
	getParentRoute: () => Route$165
});
var AiAnalyticsPredictionsRoute = Route$133.update({
	id: "/ai-analytics/predictions",
	path: "/ai-analytics/predictions",
	getParentRoute: () => Route$165
});
var AppsAiChatRoute = Route$132.update({
	id: "/apps/ai-chat",
	path: "/apps/ai-chat",
	getParentRoute: () => Route$165
});
var AppsCalendarRoute = Route$131.update({
	id: "/apps/calendar",
	path: "/apps/calendar",
	getParentRoute: () => Route$165
});
var AppsChatRoute = Route$130.update({
	id: "/apps/chat",
	path: "/apps/chat",
	getParentRoute: () => Route$165
});
var AppsEmailRoute = Route$129.update({
	id: "/apps/email",
	path: "/apps/email",
	getParentRoute: () => Route$165
});
var AppsFilesRoute = Route$128.update({
	id: "/apps/files",
	path: "/apps/files",
	getParentRoute: () => Route$165
});
var AppsKanbanRoute = Route$127.update({
	id: "/apps/kanban",
	path: "/apps/kanban",
	getParentRoute: () => Route$165
});
var AppsNotesRoute = Route$126.update({
	id: "/apps/notes",
	path: "/apps/notes",
	getParentRoute: () => Route$165
});
var AppsTasksRoute = Route$125.update({
	id: "/apps/tasks",
	path: "/apps/tasks",
	getParentRoute: () => Route$165
});
var AuthEmailTemplatesRoute = Route$124.update({
	id: "/auth/email-templates",
	path: "/auth/email-templates",
	getParentRoute: () => Route$165
});
var AuthErrorsRoute = Route$123.update({
	id: "/auth/errors",
	path: "/auth/errors",
	getParentRoute: () => Route$165
});
var AuthLoginRoute = Route$122.update({
	id: "/auth/login",
	path: "/auth/login",
	getParentRoute: () => Route$165
});
var AuthRegisterRoute = Route$121.update({
	id: "/auth/register",
	path: "/auth/register",
	getParentRoute: () => Route$165
});
var ChartsApexRoute = Route$120.update({
	id: "/charts/apex",
	path: "/charts/apex",
	getParentRoute: () => Route$165
});
var ChartsAreaRoute = Route$119.update({
	id: "/charts/area",
	path: "/charts/area",
	getParentRoute: () => Route$165
});
var ChartsBarRoute = Route$118.update({
	id: "/charts/bar",
	path: "/charts/bar",
	getParentRoute: () => Route$165
});
var ChartsHeatmapRoute = Route$117.update({
	id: "/charts/heatmap",
	path: "/charts/heatmap",
	getParentRoute: () => Route$165
});
var ChartsLineRoute = Route$116.update({
	id: "/charts/line",
	path: "/charts/line",
	getParentRoute: () => Route$165
});
var ChartsMixedRoute = Route$115.update({
	id: "/charts/mixed",
	path: "/charts/mixed",
	getParentRoute: () => Route$165
});
var ChartsPieRoute = Route$114.update({
	id: "/charts/pie",
	path: "/charts/pie",
	getParentRoute: () => Route$165
});
var ChartsRadarRoute = Route$113.update({
	id: "/charts/radar",
	path: "/charts/radar",
	getParentRoute: () => Route$165
});
var ChartsRadialRoute = Route$112.update({
	id: "/charts/radial",
	path: "/charts/radial",
	getParentRoute: () => Route$165
});
var ChartsScatterRoute = Route$111.update({
	id: "/charts/scatter",
	path: "/charts/scatter",
	getParentRoute: () => Route$165
});
var ChartsSparklineRoute = Route$110.update({
	id: "/charts/sparkline",
	path: "/charts/sparkline",
	getParentRoute: () => Route$165
});
var ChartsTreemapRoute = Route$109.update({
	id: "/charts/treemap",
	path: "/charts/treemap",
	getParentRoute: () => Route$165
});
var CrmCompaniesRoute = Route$108.update({
	id: "/crm/companies",
	path: "/crm/companies",
	getParentRoute: () => Route$165
});
var CrmContactsRoute = Route$107.update({
	id: "/crm/contacts",
	path: "/crm/contacts",
	getParentRoute: () => Route$165
});
var CrmDealsRoute = Route$106.update({
	id: "/crm/deals",
	path: "/crm/deals",
	getParentRoute: () => Route$165
});
var CrmLeadsRoute = Route$105.update({
	id: "/crm/leads",
	path: "/crm/leads",
	getParentRoute: () => Route$165
});
var CrmPipelineRoute = Route$104.update({
	id: "/crm/pipeline",
	path: "/crm/pipeline",
	getParentRoute: () => Route$165
});
var CryptoIndexRoute = Route$103.update({
	id: "/crypto/",
	path: "/crypto/",
	getParentRoute: () => Route$165
});
var CryptoExchangeRoute = Route$102.update({
	id: "/crypto/exchange",
	path: "/crypto/exchange",
	getParentRoute: () => Route$165
});
var CryptoMarketRoute = Route$101.update({
	id: "/crypto/market",
	path: "/crypto/market",
	getParentRoute: () => Route$165
});
var CryptoTransactionsRoute = Route$100.update({
	id: "/crypto/transactions",
	path: "/crypto/transactions",
	getParentRoute: () => Route$165
});
var CryptoWalletRoute = Route$99.update({
	id: "/crypto/wallet",
	path: "/crypto/wallet",
	getParentRoute: () => Route$165
});
var DashboardsAiAnalyticsRoute = Route$98.update({
	id: "/dashboards/ai-analytics",
	path: "/dashboards/ai-analytics",
	getParentRoute: () => Route$165
});
var DashboardsAnalyticsRoute = Route$97.update({
	id: "/dashboards/analytics",
	path: "/dashboards/analytics",
	getParentRoute: () => Route$165
});
var DashboardsCrmRoute = Route$96.update({
	id: "/dashboards/crm",
	path: "/dashboards/crm",
	getParentRoute: () => Route$165
});
var DashboardsCryptoRoute = Route$95.update({
	id: "/dashboards/crypto",
	path: "/dashboards/crypto",
	getParentRoute: () => Route$165
});
var DashboardsEcommerceRoute = Route$94.update({
	id: "/dashboards/ecommerce",
	path: "/dashboards/ecommerce",
	getParentRoute: () => Route$165
});
var DashboardsFinanceRoute = Route$93.update({
	id: "/dashboards/finance",
	path: "/dashboards/finance",
	getParentRoute: () => Route$165
});
var DashboardsHospitalManagementRoute = Route$92.update({
	id: "/dashboards/hospital-management",
	path: "/dashboards/hospital-management",
	getParentRoute: () => Route$165
});
var DashboardsHrmDashboardRoute = Route$91.update({
	id: "/dashboards/hrm-dashboard",
	path: "/dashboards/hrm-dashboard",
	getParentRoute: () => Route$165
});
var DashboardsLmsDashboardRoute = Route$90.update({
	id: "/dashboards/lms-dashboard",
	path: "/dashboards/lms-dashboard",
	getParentRoute: () => Route$165
});
var DashboardsLogisticsDashboardRoute = Route$89.update({
	id: "/dashboards/logistics-dashboard",
	path: "/dashboards/logistics-dashboard",
	getParentRoute: () => Route$165
});
var DashboardsMarketingRoute = Route$88.update({
	id: "/dashboards/marketing",
	path: "/dashboards/marketing",
	getParentRoute: () => Route$165
});
var DashboardsProjectsRoute = Route$87.update({
	id: "/dashboards/projects",
	path: "/dashboards/projects",
	getParentRoute: () => Route$165
});
var DashboardsRestaurantPosRoute = Route$86.update({
	id: "/dashboards/restaurant-pos",
	path: "/dashboards/restaurant-pos",
	getParentRoute: () => Route$165
});
var DashboardsSaasRoute = Route$85.update({
	id: "/dashboards/saas",
	path: "/dashboards/saas",
	getParentRoute: () => Route$165
});
var DashboardsSchoolManagementRoute = Route$84.update({
	id: "/dashboards/school-management",
	path: "/dashboards/school-management",
	getParentRoute: () => Route$165
});
var EcommerceAddProductRoute = Route$83.update({
	id: "/ecommerce/add-product",
	path: "/ecommerce/add-product",
	getParentRoute: () => Route$165
});
var EcommerceCheckoutRoute = Route$82.update({
	id: "/ecommerce/checkout",
	path: "/ecommerce/checkout",
	getParentRoute: () => Route$165
});
var EcommerceCustomersRoute = Route$81.update({
	id: "/ecommerce/customers",
	path: "/ecommerce/customers",
	getParentRoute: () => Route$165
});
var EcommerceOrdersRoute = Route$80.update({
	id: "/ecommerce/orders",
	path: "/ecommerce/orders",
	getParentRoute: () => Route$165
});
var EcommerceProductDetailsRoute = Route$79.update({
	id: "/ecommerce/product-details",
	path: "/ecommerce/product-details",
	getParentRoute: () => Route$165
});
var EcommerceProductsRoute = Route$78.update({
	id: "/ecommerce/products",
	path: "/ecommerce/products",
	getParentRoute: () => Route$165
});
var FinanceIndexRoute = Route$77.update({
	id: "/finance/",
	path: "/finance/",
	getParentRoute: () => Route$165
});
var FinanceBudgetsRoute = Route$76.update({
	id: "/finance/budgets",
	path: "/finance/budgets",
	getParentRoute: () => Route$165
});
var FinanceExpensesRoute = Route$75.update({
	id: "/finance/expenses",
	path: "/finance/expenses",
	getParentRoute: () => Route$165
});
var FinanceInvoicesRoute = Route$74.update({
	id: "/finance/invoices",
	path: "/finance/invoices",
	getParentRoute: () => Route$165
});
var FinanceTransactionsRoute = Route$73.update({
	id: "/finance/transactions",
	path: "/finance/transactions",
	getParentRoute: () => Route$165
});
var FormsChecksSwitchesRadiosRoute = Route$72.update({
	id: "/forms/checks-switches-radios",
	path: "/forms/checks-switches-radios",
	getParentRoute: () => Route$165
});
var FormsDatePickersRoute = Route$71.update({
	id: "/forms/date-pickers",
	path: "/forms/date-pickers",
	getParentRoute: () => Route$165
});
var FormsEditorsRoute = Route$70.update({
	id: "/forms/editors",
	path: "/forms/editors",
	getParentRoute: () => Route$165
});
var FormsElementsRoute = Route$69.update({
	id: "/forms/elements",
	path: "/forms/elements",
	getParentRoute: () => Route$165
});
var FormsInlineEditableRoute = Route$68.update({
	id: "/forms/inline-editable",
	path: "/forms/inline-editable",
	getParentRoute: () => Route$165
});
var FormsLayoutsRoute = Route$67.update({
	id: "/forms/layouts",
	path: "/forms/layouts",
	getParentRoute: () => Route$165
});
var FormsMultiStepWizardRoute = Route$66.update({
	id: "/forms/multi-step-wizard",
	path: "/forms/multi-step-wizard",
	getParentRoute: () => Route$165
});
var FormsPluginsRoute = Route$65.update({
	id: "/forms/plugins",
	path: "/forms/plugins",
	getParentRoute: () => Route$165
});
var FormsSelectComponentsRoute = Route$64.update({
	id: "/forms/select-components",
	path: "/forms/select-components",
	getParentRoute: () => Route$165
});
var FormsValidationRoute = Route$63.update({
	id: "/forms/validation",
	path: "/forms/validation",
	getParentRoute: () => Route$165
});
var HospitalIndexRoute = Route$62.update({
	id: "/hospital/",
	path: "/hospital/",
	getParentRoute: () => Route$165
});
var HospitalAmbulanceRoute = Route$61.update({
	id: "/hospital/ambulance",
	path: "/hospital/ambulance",
	getParentRoute: () => Route$165
});
var HospitalAppointmentsRoute = Route$60.update({
	id: "/hospital/appointments",
	path: "/hospital/appointments",
	getParentRoute: () => Route$165
});
var HospitalBillingRoute = Route$59.update({
	id: "/hospital/billing",
	path: "/hospital/billing",
	getParentRoute: () => Route$165
});
var HospitalDoctorsRoute = Route$58.update({
	id: "/hospital/doctors",
	path: "/hospital/doctors",
	getParentRoute: () => Route$165
});
var HospitalPatientsRoute = Route$57.update({
	id: "/hospital/patients",
	path: "/hospital/patients",
	getParentRoute: () => Route$165
});
var HospitalPharmacyRoute = Route$56.update({
	id: "/hospital/pharmacy",
	path: "/hospital/pharmacy",
	getParentRoute: () => Route$165
});
var HospitalWardsRoute = Route$55.update({
	id: "/hospital/wards",
	path: "/hospital/wards",
	getParentRoute: () => Route$165
});
var HrmIndexRoute = Route$54.update({
	id: "/hrm/",
	path: "/hrm/",
	getParentRoute: () => Route$165
});
var HrmEmployeesRoute = Route$53.update({
	id: "/hrm/employees",
	path: "/hrm/employees",
	getParentRoute: () => Route$165
});
var HrmLeaveRequestsRoute = Route$52.update({
	id: "/hrm/leave-requests",
	path: "/hrm/leave-requests",
	getParentRoute: () => Route$165
});
var HrmPayrollRoute = Route$51.update({
	id: "/hrm/payroll",
	path: "/hrm/payroll",
	getParentRoute: () => Route$165
});
var HrmReviewsRoute = Route$50.update({
	id: "/hrm/reviews",
	path: "/hrm/reviews",
	getParentRoute: () => Route$165
});
var InvoicesCreateRoute = Route$49.update({
	id: "/invoices/create",
	path: "/invoices/create",
	getParentRoute: () => Route$165
});
var InvoicesDetailRoute = Route$48.update({
	id: "/invoices/detail",
	path: "/invoices/detail",
	getParentRoute: () => Route$165
});
var InvoicesListRoute = Route$47.update({
	id: "/invoices/list",
	path: "/invoices/list",
	getParentRoute: () => Route$165
});
var LogisticsInventoryRoute = Route$46.update({
	id: "/logistics/inventory",
	path: "/logistics/inventory",
	getParentRoute: () => Route$165
});
var LogisticsPurchaseOrdersRoute = Route$45.update({
	id: "/logistics/purchase-orders",
	path: "/logistics/purchase-orders",
	getParentRoute: () => Route$165
});
var LogisticsShipmentsRoute = Route$44.update({
	id: "/logistics/shipments",
	path: "/logistics/shipments",
	getParentRoute: () => Route$165
});
var LogisticsStockTransferRoute = Route$43.update({
	id: "/logistics/stock-transfer",
	path: "/logistics/stock-transfer",
	getParentRoute: () => Route$165
});
var LogisticsSuppliersRoute = Route$42.update({
	id: "/logistics/suppliers",
	path: "/logistics/suppliers",
	getParentRoute: () => Route$165
});
var PagesFaqRoute = Route$41.update({
	id: "/pages/faq",
	path: "/pages/faq",
	getParentRoute: () => Route$165
});
var PagesPricingRoute = Route$40.update({
	id: "/pages/pricing",
	path: "/pages/pricing",
	getParentRoute: () => Route$165
});
var PagesProfileRoute = Route$39.update({
	id: "/pages/profile",
	path: "/pages/profile",
	getParentRoute: () => Route$165
});
var PagesSettingsRoute = Route$38.update({
	id: "/pages/settings",
	path: "/pages/settings",
	getParentRoute: () => Route$165
});
var ProjectsDetailRoute = Route$37.update({
	id: "/projects/detail",
	path: "/projects/detail",
	getParentRoute: () => Route$165
});
var ProjectsGridRoute = Route$36.update({
	id: "/projects/grid",
	path: "/projects/grid",
	getParentRoute: () => Route$165
});
var ProjectsListRoute = Route$35.update({
	id: "/projects/list",
	path: "/projects/list",
	getParentRoute: () => Route$165
});
var ProjectsTeamRoute = Route$34.update({
	id: "/projects/team",
	path: "/projects/team",
	getParentRoute: () => Route$165
});
var SchoolIndexRoute = Route$33.update({
	id: "/school/",
	path: "/school/",
	getParentRoute: () => Route$165
});
var SchoolAttendanceRoute = Route$32.update({
	id: "/school/attendance",
	path: "/school/attendance",
	getParentRoute: () => Route$165
});
var SchoolClassesRoute = Route$31.update({
	id: "/school/classes",
	path: "/school/classes",
	getParentRoute: () => Route$165
});
var SchoolExamsRoute = Route$30.update({
	id: "/school/exams",
	path: "/school/exams",
	getParentRoute: () => Route$165
});
var SchoolStudentsRoute = Route$29.update({
	id: "/school/students",
	path: "/school/students",
	getParentRoute: () => Route$165
});
var TablesAdvancedRoute = Route$28.update({
	id: "/tables/advanced",
	path: "/tables/advanced",
	getParentRoute: () => Route$165
});
var TablesBasicRoute = Route$27.update({
	id: "/tables/basic",
	path: "/tables/basic",
	getParentRoute: () => Route$165
});
var TablesDataRoute = Route$26.update({
	id: "/tables/data",
	path: "/tables/data",
	getParentRoute: () => Route$165
});
var TablesFilterRoute = Route$25.update({
	id: "/tables/filter",
	path: "/tables/filter",
	getParentRoute: () => Route$165
});
var TablesResponsiveRoute = Route$24.update({
	id: "/tables/responsive",
	path: "/tables/responsive",
	getParentRoute: () => Route$165
});
var UiElementRoute = Route$166.update({
	id: "/ui/$element",
	path: "/ui/$element",
	getParentRoute: () => Route$165
});
var UiElementsRoute = Route$23.update({
	id: "/ui/elements",
	path: "/ui/elements",
	getParentRoute: () => Route$165
});
var AuthEmailTemplatesIndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthEmailTemplatesRoute
});
var AuthEmailTemplatesTemplateRoute = Route$167.update({
	id: "/$template",
	path: "/$template",
	getParentRoute: () => AuthEmailTemplatesRoute
});
var AuthErrorsIndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthErrorsRoute
});
var AuthErrors404Route = Route$20.update({
	id: "/404",
	path: "/404",
	getParentRoute: () => AuthErrorsRoute
});
var AuthErrors500Route = Route$19.update({
	id: "/500",
	path: "/500",
	getParentRoute: () => AuthErrorsRoute
});
var AuthErrors503Route = Route$18.update({
	id: "/503",
	path: "/503",
	getParentRoute: () => AuthErrorsRoute
});
var AuthErrorsMaintenanceRoute = Route$17.update({
	id: "/maintenance",
	path: "/maintenance",
	getParentRoute: () => AuthErrorsRoute
});
var AuthForgotPasswordIndexRoute = Route$16.update({
	id: "/auth/forgot-password/",
	path: "/auth/forgot-password/",
	getParentRoute: () => Route$165
});
var AuthForgotPasswordBasicRoute = Route$15.update({
	id: "/auth/forgot-password/basic",
	path: "/auth/forgot-password/basic",
	getParentRoute: () => Route$165
});
var AuthForgotPasswordCoverRoute = Route$14.update({
	id: "/auth/forgot-password/cover",
	path: "/auth/forgot-password/cover",
	getParentRoute: () => Route$165
});
var AuthLockScreenBasicRoute = Route$13.update({
	id: "/auth/lock-screen/basic",
	path: "/auth/lock-screen/basic",
	getParentRoute: () => Route$165
});
var AuthLockScreenCoverRoute = Route$12.update({
	id: "/auth/lock-screen/cover",
	path: "/auth/lock-screen/cover",
	getParentRoute: () => Route$165
});
var AuthResetPasswordBasicRoute = Route$11.update({
	id: "/auth/reset-password/basic",
	path: "/auth/reset-password/basic",
	getParentRoute: () => Route$165
});
var AuthResetPasswordCoverRoute = Route$10.update({
	id: "/auth/reset-password/cover",
	path: "/auth/reset-password/cover",
	getParentRoute: () => Route$165
});
var AuthSignInBasicRoute = Route$9.update({
	id: "/auth/sign-in/basic",
	path: "/auth/sign-in/basic",
	getParentRoute: () => Route$165
});
var AuthSignInCoverRoute = Route$8.update({
	id: "/auth/sign-in/cover",
	path: "/auth/sign-in/cover",
	getParentRoute: () => Route$165
});
var AuthSignUpBasicRoute = Route$7.update({
	id: "/auth/sign-up/basic",
	path: "/auth/sign-up/basic",
	getParentRoute: () => Route$165
});
var AuthSignUpCoverRoute = Route$6.update({
	id: "/auth/sign-up/cover",
	path: "/auth/sign-up/cover",
	getParentRoute: () => Route$165
});
var AuthTwoStepBasicRoute = Route$5.update({
	id: "/auth/two-step/basic",
	path: "/auth/two-step/basic",
	getParentRoute: () => Route$165
});
var AuthTwoStepCoverRoute = Route$4.update({
	id: "/auth/two-step/cover",
	path: "/auth/two-step/cover",
	getParentRoute: () => Route$165
});
var AuthVerifyEmailBasicRoute = Route$3.update({
	id: "/auth/verify-email/basic",
	path: "/auth/verify-email/basic",
	getParentRoute: () => Route$165
});
var AuthVerifyEmailCoverRoute = Route$2.update({
	id: "/auth/verify-email/cover",
	path: "/auth/verify-email/cover",
	getParentRoute: () => Route$165
});
var EcommerceProductsAddRoute = Route$1.update({
	id: "/add",
	path: "/add",
	getParentRoute: () => EcommerceProductsRoute
});
var EcommerceProductsDetailRoute = Route.update({
	id: "/detail",
	path: "/detail",
	getParentRoute: () => EcommerceProductsRoute
});
var AuthEmailTemplatesRouteChildren = {
	AuthEmailTemplatesTemplateRoute,
	AuthEmailTemplatesIndexRoute
};
var AuthEmailTemplatesRouteWithChildren = AuthEmailTemplatesRoute._addFileChildren(AuthEmailTemplatesRouteChildren);
var AuthErrorsRouteChildren = {
	AuthErrors404Route,
	AuthErrors500Route,
	AuthErrors503Route,
	AuthErrorsMaintenanceRoute,
	AuthErrorsIndexRoute
};
var AuthErrorsRouteWithChildren = AuthErrorsRoute._addFileChildren(AuthErrorsRouteChildren);
var EcommerceProductsRouteChildren = {
	EcommerceProductsAddRoute,
	EcommerceProductsDetailRoute
};
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	AppointmentsDothtmlRoute,
	AttendanceListDothtmlRoute,
	BillingDothtmlRoute,
	ChatbotConversationsDothtmlRoute,
	ClassWorkspaceDothtmlRoute,
	DoctorDirectoryDothtmlRoute,
	EmergencyDothtmlRoute,
	EmployeesListDothtmlRoute,
	ExamPlannerDothtmlRoute,
	FloorLayoutDothtmlRoute,
	HospitalManagementDothtmlRoute,
	InsightsListDothtmlRoute,
	LeaveRequestsListDothtmlRoute,
	LogisticsDashboardDothtmlRoute,
	MedicineCatalogDothtmlRoute,
	ModelSettingsListDothtmlRoute,
	NotesDothtmlRoute,
	PatientsDothtmlRoute,
	PayrollListDothtmlRoute,
	PredictionsListDothtmlRoute,
	RestaurantPosDothtmlRoute,
	ReviewsListDothtmlRoute,
	SchoolManagementDothtmlRoute,
	SchoolManagementDothtmlhtmlRoute,
	StudentDirectoryDothtmlRoute,
	AiAnalyticsChatbotConversationsRoute,
	AiAnalyticsInsightsRoute,
	AiAnalyticsModelSettingsRoute,
	AiAnalyticsPredictionsRoute,
	AppsAiChatRoute,
	AppsCalendarRoute,
	AppsChatRoute,
	AppsEmailRoute,
	AppsFilesRoute,
	AppsKanbanRoute,
	AppsNotesRoute,
	AppsTasksRoute,
	AuthEmailTemplatesRoute: AuthEmailTemplatesRouteWithChildren,
	AuthErrorsRoute: AuthErrorsRouteWithChildren,
	AuthLoginRoute,
	AuthRegisterRoute,
	ChartsApexRoute,
	ChartsAreaRoute,
	ChartsBarRoute,
	ChartsHeatmapRoute,
	ChartsLineRoute,
	ChartsMixedRoute,
	ChartsPieRoute,
	ChartsRadarRoute,
	ChartsRadialRoute,
	ChartsScatterRoute,
	ChartsSparklineRoute,
	ChartsTreemapRoute,
	CrmCompaniesRoute,
	CrmContactsRoute,
	CrmDealsRoute,
	CrmLeadsRoute,
	CrmPipelineRoute,
	CryptoExchangeRoute,
	CryptoMarketRoute,
	CryptoTransactionsRoute,
	CryptoWalletRoute,
	DashboardsAiAnalyticsRoute,
	DashboardsAnalyticsRoute,
	DashboardsCrmRoute,
	DashboardsCryptoRoute,
	DashboardsEcommerceRoute,
	DashboardsFinanceRoute,
	DashboardsHospitalManagementRoute,
	DashboardsHrmDashboardRoute,
	DashboardsLmsDashboardRoute,
	DashboardsLogisticsDashboardRoute,
	DashboardsMarketingRoute,
	DashboardsProjectsRoute,
	DashboardsRestaurantPosRoute,
	DashboardsSaasRoute,
	DashboardsSchoolManagementRoute,
	EcommerceAddProductRoute,
	EcommerceCheckoutRoute,
	EcommerceCustomersRoute,
	EcommerceOrdersRoute,
	EcommerceProductDetailsRoute,
	EcommerceProductsRoute: EcommerceProductsRoute._addFileChildren(EcommerceProductsRouteChildren),
	FinanceBudgetsRoute,
	FinanceExpensesRoute,
	FinanceInvoicesRoute,
	FinanceTransactionsRoute,
	FormsChecksSwitchesRadiosRoute,
	FormsDatePickersRoute,
	FormsEditorsRoute,
	FormsElementsRoute,
	FormsInlineEditableRoute,
	FormsLayoutsRoute,
	FormsMultiStepWizardRoute,
	FormsPluginsRoute,
	FormsSelectComponentsRoute,
	FormsValidationRoute,
	HospitalAmbulanceRoute,
	HospitalAppointmentsRoute,
	HospitalBillingRoute,
	HospitalDoctorsRoute,
	HospitalPatientsRoute,
	HospitalPharmacyRoute,
	HospitalWardsRoute,
	HrmEmployeesRoute,
	HrmLeaveRequestsRoute,
	HrmPayrollRoute,
	HrmReviewsRoute,
	InvoicesCreateRoute,
	InvoicesDetailRoute,
	InvoicesListRoute,
	LogisticsInventoryRoute,
	LogisticsPurchaseOrdersRoute,
	LogisticsShipmentsRoute,
	LogisticsStockTransferRoute,
	LogisticsSuppliersRoute,
	PagesFaqRoute,
	PagesPricingRoute,
	PagesProfileRoute,
	PagesSettingsRoute,
	ProjectsDetailRoute,
	ProjectsGridRoute,
	ProjectsListRoute,
	ProjectsTeamRoute,
	SchoolAttendanceRoute,
	SchoolClassesRoute,
	SchoolExamsRoute,
	SchoolStudentsRoute,
	TablesAdvancedRoute,
	TablesBasicRoute,
	TablesDataRoute,
	TablesFilterRoute,
	TablesResponsiveRoute,
	UiElementRoute,
	UiElementsRoute,
	AiAnalyticsIndexRoute,
	CryptoIndexRoute,
	FinanceIndexRoute,
	HospitalIndexRoute,
	HrmIndexRoute,
	SchoolIndexRoute,
	AuthForgotPasswordBasicRoute,
	AuthForgotPasswordCoverRoute,
	AuthLockScreenBasicRoute,
	AuthLockScreenCoverRoute,
	AuthResetPasswordBasicRoute,
	AuthResetPasswordCoverRoute,
	AuthSignInBasicRoute,
	AuthSignInCoverRoute,
	AuthSignUpBasicRoute,
	AuthSignUpCoverRoute,
	AuthTwoStepBasicRoute,
	AuthTwoStepCoverRoute,
	AuthVerifyEmailBasicRoute,
	AuthVerifyEmailCoverRoute,
	AuthForgotPasswordIndexRoute
};
var routeTree = Route$165._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
