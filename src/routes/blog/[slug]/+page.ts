import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { blogPosts } from "$lib/data/blogPosts";

export const load: PageLoad = ({ params }) => {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    throw error(404, "Post not found");
  }

  return { post };
};
