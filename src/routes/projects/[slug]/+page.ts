import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { projects, projectsBySlug } from "$lib/data/projects";

export const prerender = true;

export const entries = () => {
  return projects.map((project) => ({ slug: project.slug }));
};

export const load: PageLoad = ({ params }) => {
  const project = projectsBySlug.get(params.slug);

  if (!project) {
    throw error(404, "Project not found");
  }

  return { project };
};
