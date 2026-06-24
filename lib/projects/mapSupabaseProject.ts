import type { Project } from "@sien/types";

type SupabaseProjectRow = {
  id: string;
  slug: string;
  title: string;
  category: Project["category"];
  status: Project["status"];
  location: string;
  year: string | null;
  size: string | null;
  short_description: string | null;
  full_description: string | null;
  scope: string[] | null;
  highlights: string[] | null;
  cover_image_url: string;
  gallery_urls: string[] | null;
  is_featured: boolean | null;
  is_published: boolean | null;
  sort_order: number | null;
};

export function mapSupabaseProject(row: SupabaseProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    status: row.status,
    location: row.location,
    year: row.year ?? undefined,
    size: row.size ?? undefined,
    shortDescription: row.short_description ?? "",
    fullDescription: row.full_description ?? row.short_description ?? "",
    scope: row.scope ?? [],
    highlights: row.highlights ?? [],
    coverImage: {
      id: `${row.id}-cover`,
      src: row.cover_image_url,
      alt: row.title,
      width: 1600,
      height: 1100,
    },
    gallery: (row.gallery_urls ?? []).map((src, index) => ({
      id: `${row.id}-gallery-${index}`,
      src,
      alt: `${row.title} gallery image ${index + 1}`,
      width: 1600,
      height: 1100,
    })),
    featured: Boolean(row.is_featured),
    published: Boolean(row.is_published),
    sortOrder: row.sort_order ?? 999,
  };
}
