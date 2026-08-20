import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";
import { SITE } from "../lib/utils";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SmoothScroll } from "../components/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-terracotta">404</p>
        <h1 className="mt-6 font-display text-5xl text-forest">Off the path</h1>
        <p className="mt-4 text-sm text-charcoal/70">
          The page you're looking for isn't here. Let's head back to the garden.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center bg-forest px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-terracotta"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-forest">This page didn't load</h1>
        <p className="mt-3 text-sm text-charcoal/70">
          Something went wrong on our end. Try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="min-h-12 bg-forest px-6 py-3 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-terracotta"
          >
            Try again
          </button>
          <a href="/" className="min-h-12 border border-forest px-6 py-3 text-xs uppercase tracking-[0.25em] text-forest transition-colors hover:bg-forest hover:text-cream">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.defaultDescription,
  sameAs: [SITE.linkedin],
  address: {
    "@type": "PostalAddress",
    addressRegion: "South East England",
    addressCountry: "GB",
  },
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.defaultTitle },
      { name: "description", content: SITE.defaultDescription },
      { name: "keywords", content: SITE.keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#F5F1E8" },
      { name: "color-scheme", content: "light" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: SITE.defaultTitle },
      { property: "og:description", content: SITE.defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/` },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: `${SITE.url}/og-image.svg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.defaultTitle },
      { name: "twitter:description", content: SITE.defaultDescription },
      { name: "twitter:image", content: `${SITE.url}/og-image.svg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <SiteHeader />
      <main id="main-content" className="min-h-svh">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
