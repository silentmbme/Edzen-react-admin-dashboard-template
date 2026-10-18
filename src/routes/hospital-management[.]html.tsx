import { createFileRoute } from "@tanstack/react-router";
import { HospitalManagementPage } from "@/components/dashboard/HospitalManagementDashboard";

export const Route = createFileRoute("/hospital-management.html")({
  head: () => ({ meta: [{ title: "Hospital Management | Edzen" }] }),
  component: HospitalManagementPage,
});
