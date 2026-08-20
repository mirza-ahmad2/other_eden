import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "This Other Eden",
  url: "https://thisothereden.co",
  locale: "en_GB",
  email: "ldjseward0@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/%F0%9D%97%9F%F0%9D%97%B2%F0%9D%97%B2-%F0%9D%97%A6%F0%9D%97%B2%F0%9D%98%84%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B1-4b027642/",
  instagramLabel: "Add here",
  location: "South East England · Rye area",
  defaultTitle: "This Other Eden — A Sanctuary for Women, Coordinated with Care",
  defaultDescription:
    "A pre-launch women's holistic wellness, creative enrichment, and therapeutic community centre in South East England — dog-friendly, nature-grounded, coordinated care.",
  keywords:
    "This Other Eden, women's wellness, holistic therapy, therapeutic horticulture, coordinated care, menopause support, dog-friendly wellness, South East England, Rye, founding community, creative enrichment, care farming",
} as const;

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  imageAlt?: string;
};

export function seo({ title, description, path, keywords, imageAlt }: SeoInput) {
  const url = path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
  const ogImage = `${SITE.url}/og-image.svg`;
  const kw = keywords ?? SITE.keywords;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: kw },
      { name: "author", content: SITE.name },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: imageAlt ?? title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: imageAlt ?? title },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
