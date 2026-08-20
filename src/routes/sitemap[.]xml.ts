import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/lib/utils";

const paths = [
  { path: "/", priority: "1.0" },
  { path: "/what-we-offer", priority: "0.8" },
  { path: "/vision", priority: "0.8" },
  { path: "/founding-community", priority: "0.8" },
  { path: "/investors", priority: "0.8" },
  { path: "/waitlist", priority: "0.9" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const origin = SITE.url;
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = paths.map(
          (p) =>
            `  <url><loc>${origin}${p.path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${p.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
