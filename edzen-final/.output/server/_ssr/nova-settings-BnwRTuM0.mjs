import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nova-settings-BnwRTuM0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var DEFAULT_SETTINGS = {
	direction: "ltr",
	density: "comfortable",
	mode: "light",
	skin: "multicolor",
	sidebarSize: "default",
	sidebarColor: "light",
	layoutWidth: "fluid",
	header: "fixed",
	sidebarCollapsed: false
};
var SKINS = [
	{
		id: "multicolor",
		label: "Multicolor",
		swatch: "#0e7974"
	},
	{
		id: "sapphire",
		label: "Sapphire",
		swatch: "oklch(0.57 0.18 250)"
	},
	{
		id: "emerald",
		label: "Emerald",
		swatch: "oklch(0.61 0.145 163)"
	},
	{
		id: "violet",
		label: "Violet",
		swatch: "oklch(0.57 0.225 302)"
	},
	{
		id: "rose",
		label: "Rose",
		swatch: "oklch(0.61 0.205 13)"
	},
	{
		id: "orange",
		label: "Orange",
		swatch: "oklch(0.64 0.18 55)"
	},
	{
		id: "cyan",
		label: "Cyan",
		swatch: "oklch(0.61 0.12 215)"
	},
	{
		id: "graphite",
		label: "Graphite",
		swatch: "oklch(0.45 0.032 260)"
	}
];
var STORAGE_KEY = "vexui-admin-settings";
/** Applies the saved color mode before CSS paints, preventing a light-theme flash. */
var themeBootstrapScript = `(() => {
  try {
    const defaults = { mode: "light", skin: "multicolor" };
    const stored = JSON.parse(window.localStorage.getItem("vexui-admin-settings") || "{}");
    const mode = ["light", "dark", "system"].includes(stored.mode) ? stored.mode : defaults.mode;
    const skin = stored.themeVersion === 3 && ["multicolor", "sapphire", "emerald", "violet", "rose", "orange", "cyan", "graphite"].includes(stored.skin)
      ? stored.skin
      : defaults.skin;
    const dark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.dataset.skin = skin;
    root.dir = stored.direction === "rtl" ? "rtl" : "ltr";
    root.dataset.bsTheme = dark ? "dark" : "light";
  } catch {
    // Keep the default light theme when storage is unavailable or malformed.
  }
})();`;
var state = typeof window === "undefined" ? DEFAULT_SETTINGS : readStored();
var listeners = /* @__PURE__ */ new Set();
function emit() {
	listeners.forEach((l) => l());
}
function subscribe(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function setSettings(patch) {
	state = {
		...state,
		...patch
	};
	if (typeof window !== "undefined") {
		try {
			window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
				...state,
				themeVersion: 3
			}));
		} catch {}
		applySettings(state);
	}
	emit();
}
function isDark(settings) {
	if (settings.mode === "system") return typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
	return settings.mode === "dark";
}
function applySettings(settings) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	root.dir = settings.direction;
	root.classList.toggle("dark", isDark(settings));
	root.dataset["skin"] = settings.skin;
	root.dataset["bsTheme"] = isDark(settings) ? "dark" : "light";
}
function readStored() {
	if (typeof window === "undefined") return DEFAULT_SETTINGS;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return DEFAULT_SETTINGS;
		const stored = JSON.parse(raw);
		const skin = stored.themeVersion === 3 && typeof stored.skin === "string" ? stored.skin : DEFAULT_SETTINGS.skin;
		return {
			...DEFAULT_SETTINGS,
			...stored,
			direction: stored.direction === "rtl" ? "rtl" : "ltr",
			skin: SKINS.some((item) => item.id === skin) ? skin : DEFAULT_SETTINGS.skin
		};
	} catch {
		return DEFAULT_SETTINGS;
	}
}
/** Reads persisted settings + keeps the DOM in sync. Call once, in the shell. */
function useVexuiSettings() {
	const settings = (0, import_react.useSyncExternalStore)(subscribe, () => state, () => DEFAULT_SETTINGS);
	(0, import_react.useEffect)(() => {
		applySettings(state);
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			if (state.mode === "system") applySettings(state);
		};
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return settings;
}
function resetSettings() {
	setSettings(DEFAULT_SETTINGS);
}
//#endregion
export { themeBootstrapScript as a, setSettings as i, isDark as n, useVexuiSettings as o, resetSettings as r, SKINS as t };
