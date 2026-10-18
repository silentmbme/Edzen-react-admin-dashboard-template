import { createFileRoute } from "@tanstack/react-router";
import { LogisticsPage } from "@/components/logistics/LogisticsPages";
export const Route = createFileRoute("/logistics/shipments")({
  head: () => ({ meta: [{ title: "Shipments | Edzen Logistics" }] }),
  component: () => <LogisticsPage kind="shipments" />,
});
