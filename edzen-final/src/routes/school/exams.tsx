import { createFileRoute } from "@tanstack/react-router";
import { SchoolPage } from "@/components/school/SchoolPages";
export const Route = createFileRoute("/school/exams")({
  head: () => ({ meta: [{ title: "Exams | Edzen" }] }),
  component: () => <SchoolPage kind="exams" />,
});
