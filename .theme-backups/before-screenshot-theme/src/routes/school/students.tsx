import { createFileRoute } from "@tanstack/react-router";
import { SchoolPage } from "@/components/school/SchoolPages";
export const Route = createFileRoute("/school/students")({
  head: () => ({ meta: [{ title: "Students | Edzen" }] }),
  component: () => <SchoolPage kind="students" />,
});
