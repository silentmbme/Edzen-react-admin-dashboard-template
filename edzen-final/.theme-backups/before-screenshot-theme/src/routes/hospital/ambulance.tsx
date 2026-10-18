import { createFileRoute } from "@tanstack/react-router";
import { HospitalPage } from "@/components/hospital/HospitalPages";
export const Route = createFileRoute("/hospital/ambulance")({
  head: () => ({ meta: [{ title: "Ambulance | Edzen" }] }),
  component: () => <HospitalPage kind="ambulance" />,
});
