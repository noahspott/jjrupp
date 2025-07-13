import { URL } from "./business";

export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const defaultSeo: SeoMeta = {
  title: "JJ Rupp Official",
  description: "",
  url: URL,
  image: "/images/open-graph.png",
};

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "JJ Rupp | Official Website",
    description:
      "Welcome to the official site of JJ Rupp — country artist blending raw storytelling with rock, blues, and modern country. New music, tour dates, and more.",
    url: URL,
  },
  schedule: {
    title: "Schedule | JJ Rupp",
    description:
      "Catch JJ Rupp live. View upcoming show dates, locations, and ticket info across the U.S.",
    url: `${URL}/schedule`,
  },
  music: {
    title: "Music | JJ Rupp",
    description:
      "Listen to JJ Rupp's latest music, including the Make You Mine EP and singles like 'Kiss Me' and 'Mexico'. Stream now on all major platforms.",
    url: `${URL}/music`,
  },
  videos: {
    title: "Videos | JJ Rupp",
    description:
      "Watch official music videos and live performances from JJ Rupp. Explore the visual side of his storytelling and experience the energy that drives his country sound.",
    url: `${URL}/videos`,
  },
  about: {
    title: "About JJ Rupp",
    description:
      "Learn more about JJ Rupp — a Pennsylvania-born country artist with a signature mix of country, rock, and blues, and a voice built for the stage.",
    url: `${URL}/about`,
  },
  photos: {
    title: "Photos | JJ Rupp",
    description:
      "Explore behind-the-scenes moments, tour shots, and promotional photos of JJ Rupp.",
    url: `${URL}/photos`,
  },
};
