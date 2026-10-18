import { useEffect, useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type Skin =
  | "multicolor"
  | "sapphire"
  | "emerald"
  | "violet"
  | "rose"
  | "orange"
  | "cyan"
  | "graphite";
export type SidebarSize = "default" | "compact";
export type SidebarColor = "light" | "dark";
export type LayoutWidth = "fluid" | "boxed";
export type HeaderMode = "fixed" | "static";
export type Density = "comfortable" | "compact";
export type LayoutDirection = "ltr" | "rtl";

export interface EdzenSettings {
  direction: LayoutDirection;
  density: Density;
  mode: ThemeMode;
  skin: Skin;
  sidebarSize: SidebarSize;
  sidebarColor: SidebarColor;
  layoutWidth: LayoutWidth;
  header: HeaderMode;
  sidebarCollapsed: boolean;
}

export const DEFAULT_SETTINGS: EdzenSettings = {
  direction: "ltr",
  density: "comfortable",
  mode: "light",
  skin: "multicolor",
  sidebarSize: "default",
  sidebarColor: "light",
  layoutWidth: "fluid",
  header: "fixed",
  sidebarCollapsed: false,
};

export const SKINS: { id: Skin; label: string; swatch: string }[] = [
  { id: "multicolor", label: "Multicolor", swatch: "#0e7974" },
  { id: "sapphire", label: "Sapphire", swatch: "oklch(0.57 0.18 250)" },
  { id: "emerald", label: "Emerald", swatch: "oklch(0.61 0.145 163)" },
  { id: "violet", label: "Violet", swatch: "oklch(0.57 0.225 302)" },
  { id: "rose", label: "Rose", swatch: "oklch(0.61 0.205 13)" },
  { id: "orange", label: "Orange", swatch: "oklch(0.64 0.18 55)" },
  { id: "cyan", label: "Cyan", swatch: "oklch(0.61 0.12 215)" },
  { id: "graphite", label: "Graphite", swatch: "oklch(0.45 0.032 260)" },
];

const STORAGE_KEY = "edzen-admin-settings";
const SIDEBAR_COLOR_STORAGE_KEY = "edzen-sidebar-color";

/** Applies the saved color mode before CSS paints, preventing a light-theme flash. */
export const themeBootstrapScript = `(() => {
  try {
    const defaults = { mode: "light", skin: "multicolor" };
    const stored = JSON.parse(window.localStorage.getItem("edzen-admin-settings") || "{}");
    const mode = ["light", "dark", "system"].includes(stored.mode) ? stored.mode : defaults.mode;
    const skin = stored.themeVersion === 3 && ["multicolor", "sapphire", "emerald", "violet", "rose", "orange", "cyan", "graphite"].includes(stored.skin)
      ? stored.skin
      : defaults.skin;
    const dark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const savedSidebarColor = window.localStorage.getItem("edzen-sidebar-color");
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    root.dataset.skin = skin;
    root.dataset.sidebarColor = savedSidebarColor === "dark" || (savedSidebarColor === null && stored.sidebarColor === "dark") ? "dark" : "light";
    root.dir = stored.direction === "rtl" ? "rtl" : "ltr";
    root.dataset.bsTheme = dark ? "dark" : "light";
  } catch {
    // Keep the default light theme when storage is unavailable or malformed.
  }
})();`;

let state: EdzenSettings =
  typeof window === "undefined" ? DEFAULT_SETTINGS : readStored();
let clientSettingsInitialized = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSettings() {
  return state;
}

export function setSettings(patch: Partial<EdzenSettings>) {
  state = { ...state, ...patch };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...state, themeVersion: 3 }),
      );
    } catch {
      // Settings still work for this session when storage is unavailable.
    }
    if (Object.prototype.hasOwnProperty.call(patch, "sidebarColor")) {
      try {
        window.localStorage.setItem(SIDEBAR_COLOR_STORAGE_KEY, state.sidebarColor);
      } catch {
        // The main settings record still preserves the sidebar color.
      }
    }
    applySettings(state);
  }
  emit();
}

export function isDark(settings: EdzenSettings) {
  if (settings.mode === "system") {
    return typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  }
  return settings.mode === "dark";
}

export function applySettings(settings: EdzenSettings) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dir = settings.direction;
  root.classList.toggle("dark", isDark(settings));
  root.dataset["skin"] = settings.skin;
  root.dataset["sidebarColor"] = settings.sidebarColor;
  root.dataset["bsTheme"] = isDark(settings) ? "dark" : "light";
}

function readStored(): EdzenSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  let savedSidebarColor: SidebarColor | undefined;
  try {
    const value = window.localStorage.getItem(SIDEBAR_COLOR_STORAGE_KEY);
    if (value === "dark" || value === "light") savedSidebarColor = value;
  } catch {
    // Fall back to the main settings record.
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        ...DEFAULT_SETTINGS,
        ...(savedSidebarColor ? { sidebarColor: savedSidebarColor } : {}),
      };
    }
    const stored = JSON.parse(raw) as Partial<EdzenSettings> & {
      themeVersion?: number;
    };
    const skin =
      stored.themeVersion === 3 && typeof stored.skin === "string"
        ? stored.skin
        : DEFAULT_SETTINGS.skin;
    return {
      ...DEFAULT_SETTINGS,
      ...stored,
      direction: stored.direction === "rtl" ? "rtl" : "ltr",
      sidebarColor:
        savedSidebarColor ?? (stored.sidebarColor === "dark" ? "dark" : "light"),
      skin: SKINS.some((item) => item.id === skin)
        ? (skin as Skin)
        : DEFAULT_SETTINGS.skin,
    };
  } catch {
    return {
      ...DEFAULT_SETTINGS,
      ...(savedSidebarColor ? { sidebarColor: savedSidebarColor } : {}),
    };
  }
}

/** Reads persisted settings + keeps the DOM in sync. Call once, in the shell. */
export function useEdzenSettings() {
  const settings = useSyncExternalStore(
    subscribe,
    () => state,
    () => DEFAULT_SETTINGS,
  );

  useEffect(() => {
    if (!clientSettingsInitialized) {
      state = readStored();
      clientSettingsInitialized = true;
      emit();
    }
    applySettings(state);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (state.mode === "system") {
        // Publish a new snapshot so React consumers (charts, toaster, shell)
        // update alongside the document class when the OS preference changes.
        state = { ...state };
        applySettings(state);
        emit();
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return settings;
}

export function resetSettings() {
  setSettings(DEFAULT_SETTINGS);
}
