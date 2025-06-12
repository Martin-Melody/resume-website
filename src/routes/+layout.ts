import type { LayoutLoad } from "./$types";

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
  return {
    title: "Martin Melody | Software Developer",
    description:
      "Portfolio of Martin Melody – Full-stack developer building open-source tools.",
    canonical: url.href,
  };
};
