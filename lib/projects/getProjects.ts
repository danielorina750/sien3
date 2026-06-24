import { createClient } from "@supabase/supabase-js";
import { staticProjects } from "@/data/static-projects";
import { mapSupabaseProject } from "./mapSupabaseProject";
import type { Project } from "@sien/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getProjects(): Promise<Project[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return staticProjects;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("is_published", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return staticProjects;

    const dynamicProjects = data.map(mapSupabaseProject);
    const staticSlugs = new Set(dynamicProjects.map((project) => project.slug));
    const fallback = staticProjects.filter((project) => !staticSlugs.has(project.slug));
    return [...dynamicProjects, ...fallback].sort((a, b) => a.sortOrder - b.sortOrder);
  } catch {
    return staticProjects;
  }
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}
