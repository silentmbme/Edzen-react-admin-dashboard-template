import { createFileRoute } from "@tanstack/react-router";
import { HospitalPage } from "@/components/hospital/HospitalPages";
export const Route = createFileRoute("/hospital/doctors")({
  head: () => ({ meta: [{ title: "Doctors | Edzen" }] }),
  component: () => <HospitalPage kind="doctors" />,
});
