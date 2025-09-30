import type { PageLoad } from "./$types";
import { blogPosts } from "$lib/data/blogPosts";

export const load: PageLoad = () => {
  return {
    posts: blogPosts,
  };
};
