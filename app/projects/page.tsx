import type { Metadata } from "next";
import { getProjects } from "@/lib/projects/getProjects";
import { ProjectIndex } from "@/components/project/ProjectIndex";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore SIEN Group's residential, hospitality, healthcare, commercial, industrial, education, sports and master-planning work.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectIndex projects={projects} />;
}
