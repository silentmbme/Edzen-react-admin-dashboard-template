import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as isDark, o as useVexuiSettings } from "./nova-settings-BnwRTuM0.mjs";
import { b as require_jsx_runtime, g as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { ln as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BrandLogo-DMNOUf0B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--transition-base)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-[var(--shadow-sm)] hover:bg-[var(--primary-hover)] hover:-translate-y-px active:translate-y-0 active:bg-[var(--primary-active)]",
			destructive: "bg-destructive text-destructive-foreground shadow-[var(--shadow-sm)] hover:bg-destructive/90 hover:-translate-y-px active:translate-y-0",
			outline: "border border-input bg-card shadow-[var(--shadow-xs)] hover:border-[var(--accent-border)] hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-[var(--shadow-xs)] hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			soft: "bg-primary/12 text-primary hover:bg-primary/18",
			gradient: "bg-primary text-primary-foreground shadow-sm hover:brightness-105",
			success: "bg-success text-success-foreground hover:brightness-95",
			warning: "bg-warning text-warning-foreground hover:brightness-95",
			info: "bg-info text-info-foreground hover:brightness-95",
			dark: "bg-foreground text-background shadow-sm hover:opacity-90"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			iconSm: "h-8 w-8",
			iconLg: "h-10 w-10"
		},
		pill: {
			true: "rounded-full",
			false: ""
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		pill: false
	}
});
var Button = import_react.forwardRef(({ className, variant, size, pill, asChild = false, loading = false, disabled, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			pill,
			className
		})),
		ref,
		disabled: disabled || loading,
		"aria-busy": loading || void 0,
		...props,
		children: asChild ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), children] })
	});
});
Button.displayName = "Button";
var edzen_logo_default = "/assets/edzen-logo-Cv32CoTW.png";
var edzen_icon_default = "/assets/edzen-icon-DpHgihnd.png";
function BrandLogo({ variant = "full", className, darkSurface }) {
	const settings = useVexuiSettings();
	const useDarkAsset = darkSurface ?? isDark(settings);
	const id = (0, import_react.useId)().replace(/[^\w-]/g, "");
	const symbolId = `${id}-edzen-symbol`;
	const letteringId = `${id}-edzen-lettering`;
	const whiteId = `${id}-edzen-white`;
	const iconOnly = variant === "icon";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		role: "img",
		"aria-label": "Edzen",
		viewBox: iconOnly ? "234 253 785 797" : "145 131 1882 503",
		width: iconOnly ? 785 : 1882,
		height: iconOnly ? 797 : 503,
		className: cn("block max-w-full", className),
		children: iconOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
			href: edzen_icon_default,
			width: 1254,
			height: 1254
		}) : useDarkAsset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: symbolId,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: 680,
						height: 741
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: letteringId,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: 680,
						width: 1442,
						height: 741
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: whiteId,
					colorInterpolationFilters: "sRGB",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
						type: "matrix",
						values: "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
				href: edzen_logo_default,
				width: 2122,
				height: 741,
				clipPath: `url(#${symbolId})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
				href: edzen_logo_default,
				width: 2122,
				height: 741,
				clipPath: `url(#${letteringId})`,
				filter: `url(#${whiteId})`
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
			href: edzen_logo_default,
			width: 2122,
			height: 741
		})
	});
}
//#endregion
export { cn as i, Button as n, buttonVariants as r, BrandLogo as t };
