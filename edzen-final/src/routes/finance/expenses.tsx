import { createFileRoute } from "@tanstack/react-router";
import { FinancePage } from "@/components/finance/FinancePages";
export const Route = createFileRoute("/finance/expenses")({
  head: () => ({ meta: [{ title: "Expenses | Edzen Finance" }] }),
  component: () => <FinancePage kind="expenses" />,
});
