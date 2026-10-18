import type { ApexOptions } from "apexcharts";

/** Keep page-specific series, thresholds, and axes while sharing flat chart styling. */
export function flatChartOptions(
  options: ApexOptions,
  palette: string[],
  area: boolean,
): ApexOptions {
  const { gradient: _gradient, ...fill } = options.fill ?? {};
  const softSparkline = area && options.chart?.sparkline?.enabled;
  return {
    ...options,
    colors: options.colors?.length ? options.colors : palette,
    chart: {
      ...options.chart,
      dropShadow: { ...options.chart?.dropShadow, enabled: false },
    },
    fill: {
      ...fill,
      type: softSparkline
        ? "gradient"
        : Array.isArray(fill.type)
          ? fill.type.map(() => "solid")
          : "solid",
      opacity: fill.opacity ?? (area ? 0.18 : 1),
      ...(softSparkline
        ? {
            gradient: {
              shadeIntensity: 0,
              opacityFrom: 0.18,
              opacityTo: 0,
              stops: [0, 100],
            },
          }
        : {}),
    },
  };
}
