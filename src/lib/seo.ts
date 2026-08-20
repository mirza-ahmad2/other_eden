import { SITE } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
};

export function seo({ title, description, path, keywords, image, imageAlt }: SeoInput) {
  const url = path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/og-image.svg`;
  const kw = keywords ?? SITE.keywords;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: kw },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
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
