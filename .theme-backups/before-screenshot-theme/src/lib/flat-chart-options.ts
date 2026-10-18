import type { ApexOptions } from "apexcharts";

/** Keep page-specific series, thresholds, and axes while sharing flat chart styling. */
export function flatChartOptions(
  options: ApexOptions,
  palette: string[],
  area: boolean,
): ApexOptions {
  const { gradient: _gradient, ...fill } = options.fill ?? {};
  return {
    ...options,
    colors: options.colors?.length ? options.colors : palette,
    chart: {
      ...options.chart,
      dropShadow: { ...options.chart?.dropShadow, enabled: false },
    },
    fill: {
      ...fill,
      type: Array.isArray(fill.type) ? fill.type.map(() => "solid") : "solid",
      opacity: fill.opacity ?? (area ? 0.18 : 1),
    },
  };
}
