import { createFileRoute } from "@tanstack/react-router";
import { LogisticsPage } from "@/components/logistics/LogisticsPages";
export const Route = createFileRoute("/logistics/suppliers")({
  head: () => ({ meta: [{ title: "Suppliers | Edzen Logistics" }] }),
  component: () => <LogisticsPage kind="suppliers" />,
});
