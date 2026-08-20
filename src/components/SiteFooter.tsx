import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-forest-deep text-cream/90">
      <div className="container-eden py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-tight text-cream md:text-4xl">
              A sanctuary for women, coordinated with care.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              This Other Eden is a pre-launch women's holistic wellness,
              creative enrichment, and therapeutic community centre in South
              East England.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-cream/60">Explore</h2>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">Home</Link></li>
              <li><Link to="/what-we-offer" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">What We Offer</Link></li>
              <li><Link to="/vision" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">The Vision</Link></li>
              <li><Link to="/founding-community" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">Founding Community</Link></li>
              <li><Link to="/investors" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">For Investors</Link></li>
              <li><Link to="/waitlist" className="transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:text-terracotta-soft">Join Waitlist</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-cream/60">Elsewhere</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25" aria-hidden="true">
                  <Instagram size={16} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-cream/50">Instagram</span>
                  <span className="text-cream/80">{SITE.instagramLabel}</span>
                </span>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="This Other Eden on LinkedIn"
                  className="group flex items-center gap-3 transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/60"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 transition-colors group-hover:border-terracotta group-hover:bg-terracotta">
                    <Linkedin size={16} />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-cream/50">LinkedIn</span>
                    <span className="break-all text-cream/80 group-hover:text-terracotta-soft">LinkedIn</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label={`Email ${SITE.email}`}
                  className="group flex items-center gap-3 transition-colors hover:text-terracotta-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/60"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 transition-colors group-hover:border-terracotta group-hover:bg-terracotta">
                    <Mail size={16} />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-cream/50">Email</span>
                    <span className="break-all text-cream/80 group-hover:text-terracotta-soft">{SITE.email}</span>
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-cream/60">
              {SITE.location}<br />
              Opening 2026
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} This Other Eden. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-soft underline underline-offset-4 transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/60"
            >
              The Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
