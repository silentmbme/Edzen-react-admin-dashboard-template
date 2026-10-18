import { createFileRoute } from "@tanstack/react-router";
import { HospitalPage } from "@/components/hospital/HospitalPages";
export const Route = createFileRoute("/hospital/patients")({
  head: () => ({ meta: [{ title: "Patients | Edzen" }] }),
  component: () => <HospitalPage kind="patients" />,
});
