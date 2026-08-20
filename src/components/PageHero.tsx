import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface PageHeroProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  height?: "full" | "tall" | "medium";
}

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  height = "full",
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.04, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, reduceMotion ? 1 : 0]);

  return (
    <section
      ref={ref}
      aria-label={eyebrow ?? "Page introduction"}
      className={
        height === "medium"
          ? "relative isolate w-full overflow-hidden min-h-[72svh] h-[72svh]"
          : "relative isolate w-full overflow-hidden min-h-[100svh] h-[100svh]"
      }
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={image}
          alt={alt}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest/40 to-forest-deep/75" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative flex h-full items-center justify-center px-5 sm:px-8"
      >
        <div className="mx-auto w-full max-w-4xl text-center text-cream">
          {eyebrow && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[11px] uppercase tracking-[0.35em] text-terracotta-soft md:mb-8 md:text-sm"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.25rem,6.5vw,5.75rem)] leading-[1.05] tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/90 md:mt-8 md:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="inline-flex min-h-12 w-full items-center justify-center bg-terracotta px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-forest hover:shadow-[0_16px_40px_-18px_rgba(245,241,232,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-2 focus-visible:ring-offset-forest sm:w-auto"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex min-h-12 w-full items-center justify-center border border-cream/70 px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-2 focus-visible:ring-offset-forest sm:w-auto"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cream/70 sm:bottom-8 sm:block"
        aria-hidden="true"
      >
        <span className="flex flex-col items-center gap-3">
          Scroll
          <span className="h-10 w-px origin-top animate-scroll-line bg-cream/50" />
        </span>
      </div>
    </section>
  );
}
