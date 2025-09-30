export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  published: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-sveltekit",
    title: "Building with SvelteKit",
    summary:
      "A quick rundown of the tools and techniques I used while putting this portfolio together.",
    published: "2024-05-12",
  },
  {
    slug: "learning-in-public",
    title: "Learning in Public",
    summary:
      "How sharing progress openly keeps me accountable and creates opportunities to collaborate.",
    published: "2024-04-03",
  },
  {
    slug: "career-pivot-notes",
    title: "Notes on a Career Pivot",
    summary:
      "Reflecting on what transferred smoothly—and what didn't—when moving into software engineering.",
    published: "2024-02-21",
  },
];
