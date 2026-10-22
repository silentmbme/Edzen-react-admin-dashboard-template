// Executive-only palette. These tokens follow the selected theme and skin.
export const executiveColors = [
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
] as const;
export const executiveAccents = [
  {
    background: "bg-[var(--chart-1)]",
    text: "text-[var(--chart-1)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-1)_12%,transparent)]",
  },
  {
    background: "bg-[var(--chart-2)]",
    text: "text-[var(--chart-2)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-2)_12%,transparent)]",
  },
  {
    background: "bg-[var(--chart-3)]",
    text: "text-[var(--chart-3)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-3)_12%,transparent)]",
  },
  {
    background: "bg-[var(--chart-4)]",
    text: "text-[var(--chart-4)]",
    soft: "bg-[color-mix(in_oklab,var(--chart-4)_12%,transparent)]",
  },
] as const;
