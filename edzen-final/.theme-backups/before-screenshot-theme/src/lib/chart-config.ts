import { useEffect, useMemo, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { isDark, useEdzenSettings } from "@/lib/edzen-settings";

/* ------------------------------------------------------------------ *
 * Color resolution
 * ApexCharts does its own color math (gradients, opacity, shading) and
 * only understands hex / rgb. Our design tokens are oklch(), so every
 * token has to be converted before it reaches Apex  otherwise skins
 * silently fall back to Apex defaults.
 * ------------------------------------------------------------------ */

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function srgbChannel(c: number) {
  const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return Math.round(clamp01(v) * 255);
}

/** oklch(L C H [/ A]) -> #rrggbb (alpha is dropped; Apex applies its own). */
function oklchToHex(input: string): string | null {
  const match = /oklch\(\s*([\d.%]+)\s+([\d.]+)\s+([\d.]+)/i.exec(input);
  if (!match) return null;
  const rawL = match[1] ?? "0";
  const L = rawL.endsWith("%") ? parseFloat(rawL) / 100 : parseFloat(rawL);
  const C = parseFloat(match[2] ?? "0");
  const H = (parseFloat(match[3] ?? "0") * Math.PI) / 180;

  const a = C * Math.cos(H);
  const b = C * Math.sin(H);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;

  const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  return `#${[r, g, bl].map((c) => srgbChannel(c).toString(16).padStart(2, "0")).join("")}`;
}

/** Reads a live CSS token and normalises it to a chart-safe hex color. */
export function token(name: string, fallback = "#087f75"): string {
  if (typeof window === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (!raw) return fallback;
  if (raw.startsWith("#") || raw.startsWith("rgb")) return raw;
  if (raw.startsWith("oklch")) return oklchToHex(raw) ?? fallback;
  if (raw.startsWith("var(")) {
    const inner = /var\(\s*(--[\w-]+)/.exec(raw)?.[1];
    return inner ? token(inner, fallback) : fallback;
  }
  return raw;
}

export function chartPalette() {
  return [
    token("--chart-1", "#087f75"),
    token("--chart-2", "#e47751"),
    token("--chart-3", "#8762c7"),
    token("--chart-4", "#d49a2c"),
    token("--chart-5", "#3984c5"),
  ];
}

export function baseChartOptions(dark: boolean): ApexOptions {
  const grid = token("--border", dark ? "#344055" : "#d9e3e0");
  const label = token("--muted-foreground", dark ? "#acbfba" : "#586e6c");

  return {
    chart: {
      fontFamily: "Plus Jakarta Sans, sans-serif",
      foreColor: label,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true, speed: 400 },
      background: "transparent",
      parentHeightOffset: 0,
    },
    theme: { mode: dark ? "dark" : "light" },
    colors: chartPalette(),
    grid: {
      borderColor: grid,
      strokeDashArray: 4,
      padding: { left: 8, right: 8, top: 0, bottom: 0 },
      xaxis: { lines: { show: false } },
    },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2.5, lineCap: "round" },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "12px",
      labels: { colors: label },
      markers: { size: 5, strokeWidth: 0 },
      itemMargin: { horizontal: 8 },
    },
    tooltip: { theme: dark ? "dark" : "light", style: { fontSize: "12px" } },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: "12px", colors: label } },
      crosshairs: { stroke: { dashArray: 4, color: grid } },
    },
    yaxis: { labels: { style: { fontSize: "12px", colors: label } } },
    states: { hover: { filter: { type: "lighten" } } },
  };
}

export function sparklineOptions(color: string): ApexOptions {
  return {
    chart: {
      sparkline: { enabled: true },
      toolbar: { show: false },
      animations: { enabled: false },
      background: "transparent",
    },
    colors: [color],
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "solid",
      opacity: 0.12,
    },
    tooltip: { enabled: false },
  };
}

/**
 * Single source of truth for chart theming.
 * `themeKey` changes on every mode/skin switch  use it as a React `key`
 * so ApexCharts re-reads the freshly resolved tokens instead of keeping
 * colors baked in from its first render.
 */
export function useChartTheme() {
  const settings = useEdzenSettings();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const dark = hydrated ? isDark(settings) : false;
  const themeKey = `${hydrated ? "c" : "s"}-${dark ? "dark" : "light"}-${settings.skin}`;

  const base = useMemo(() => baseChartOptions(dark), [themeKey, dark]);

  return { dark, themeKey, base, hydrated };
}

/** Deep-ish merge good enough for Apex option objects. */
export function mergeOptions(
  base: ApexOptions,
  override: ApexOptions,
): ApexOptions {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const existing = out[key];
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      existing &&
      typeof existing === "object" &&
      !Array.isArray(existing)
    ) {
      out[key] = mergeOptions(existing as ApexOptions, value as ApexOptions);
    } else {
      out[key] = value;
    }
  }
  return out as ApexOptions;
}
