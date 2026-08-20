import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/what-we-offer", label: "What We Offer" },
  { to: "/vision", label: "The Vision" },
  { to: "/founding-community", label: "Founding Community" },
  { to: "/investors", label: "For Investors" },
  { to: "/waitlist", label: "Join Waitlist" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hasDarkHero = ["/", "/what-we-offer", "/vision", "/founding-community", "/investors", "/waitlist"].includes(
    pathname,
  );

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = hasDarkHero && !scrolled && !open;
  const textClass = overHero ? "text-cream" : "text-forest";
  const mutedClass = overHero
    ? "text-cream/80 hover:text-terracotta-soft"
    : "text-charcoal/75 hover:text-terracotta";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-cream/90 py-4 shadow-[0_10px_30px_-20px_rgba(42,40,34,0.35)] backdrop-blur-md"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <div className="container-eden flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2" aria-label="This Other Eden home">
          <span
            className={`font-display text-xl tracking-tight transition-colors duration-500 md:text-2xl ${textClass} group-hover:text-terracotta`}
          >
            This Other Eden
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.slice(0, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[13px] uppercase tracking-wide transition-colors duration-300 ${mutedClass}`}
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/waitlist"
            className={`min-h-11 px-5 py-2.5 text-[13px] uppercase tracking-wide transition-all duration-500 ${
              overHero
                ? "border border-cream/80 text-cream hover:bg-cream hover:text-forest"
                : "border border-forest text-forest hover:bg-forest hover:text-cream"
            }`}
          >
            Join Waitlist
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`p-2 lg:hidden ${textClass} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-eden mt-6 flex flex-col gap-4 pb-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display text-lg text-forest transition-colors hover:text-terracotta"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
