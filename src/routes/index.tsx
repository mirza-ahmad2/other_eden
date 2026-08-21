import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Palette,
  Network,
  Sprout,
  Dog,
  ArrowRight,
  ArrowUpRight,
  ImageIcon,
} from "lucide-react";
import heroGarden from "@/assets/hero-garden.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

import { seo } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "This Other Eden — Care, Coordinated Around You",
      description:
        "A pre-launch women's holistic wellness, creative enrichment, and therapeutic community centre — dog-friendly, nature-grounded, ending the exhaustion of fragmented care.",
      path: "/",
      imageAlt: "Garden grounds at This Other Eden, a countryside wellness sanctuary in South East England",
    }),
  component: HomePage,
});

const offerings = [
  { icon: Sparkles, title: "Holistic Therapies", copy: "Integrated medical, therapeutic, and complementary care under one roof." },
  { icon: Palette, title: "Creative Enrichment", copy: "Studios, workshops, and programs that treat creativity as essential, not extra." },
  { icon: Network, title: "AI-Coordinated Care", copy: "Practitioners in conversation, quietly held together by AI — never replaced by it." },
  { icon: Sprout, title: "Therapeutic Horticulture", copy: "Care farming, growing beds, and the slow medicine of soil and season." },
  { icon: Dog, title: "Dog-Friendly Community", copy: "Because coming as your whole self should never require leaving anyone behind." },
];

function HomePage() {
  return (
    <div>
      <PageHero
        image={heroGarden}
        alt="Walled garden and grounds of This Other Eden in South East England"
        eyebrow="Opening 2026 · South East England"
        title={<>Care,<br />Coordinated Around You.</>}
        subtitle="A women's holistic wellness, creative enrichment, and therapeutic community centre — dog-friendly, nature-grounded, built to end the exhaustion of fragmented care."
        primaryCta={{ label: "Join the Founding Waitlist", to: "/waitlist" }}
        secondaryCta={{ label: "Partner With Us", to: "/investors" }}
        height="full"
      />

      {/* Founding statement */}
      <section className="py-32 md:py-44 bg-cream">
        <div className="container-eden text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-terracotta mb-8">A founding statement</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight text-forest max-w-5xl mx-auto">
              A Place That Simply<br />Didn't Exist Yet.
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-10 text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Not another clinic. Not another wellness brand. A sanctuary where
              care actually holds together — around one woman, in one place, at
              a pace that matches the seasons.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-28 md:py-36 bg-forest text-cream">
        <div className="container-eden grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta-soft mb-6">The problem, simply stated</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Care that doesn't talk to itself isn't care.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8 text-cream/85 text-lg leading-relaxed">
            <Reveal>
              <p>
                A woman today juggles a GP, a therapist, a nutritionist, a
                physio, a yoga teacher, a menopause specialist — across
                different towns, different price points, different calendars.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Nobody is coordinating around <em className="not-italic text-terracotta-soft font-display">her</em>. The
                coordination job falls back on the exhausted person the care
                was meant to hold.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="pt-4 border-t border-cream/20 text-cream/70 text-base">
                This is not a wellness-access problem. It's a structural
                coordination failure — and it's what we're here to end.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offerings preview */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-eden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">What we offer</p>
                <h2 className="font-display text-5xl md:text-6xl text-forest max-w-2xl leading-[1.05]">
                  Five threads, woven into one place.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link to="/what-we-offer" className="group inline-flex items-center gap-3 text-forest text-xs uppercase tracking-[0.25em] hover:text-terracotta transition-colors">
                Explore each thread <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="group h-full bg-cream p-10 transition-all duration-500 hover:bg-card">
                  <o.icon size={28} strokeWidth={1.2} className="text-terracotta mb-8" />
                  <h3 className="font-display text-2xl text-forest mb-4">{o.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-[15px]">{o.copy}</p>
                </div>
              </Reveal>
            ))}
            <div className="bg-forest text-cream p-10 flex flex-col justify-between">
              <p className="font-display text-2xl leading-snug">Five disciplines. One conversation. Around you.</p>
              <Link to="/what-we-offer" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta-soft hover:text-cream">
                See how it fits <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder credibility */}
      <section className="py-28 md:py-36 bg-card">
        <div className="container-eden grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 relative">
            <Reveal>
              <div
                className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center"
                role="img"
                aria-label="Founder portrait placeholder"
              >
                <ImageIcon
                  size={72}
                  strokeWidth={1.1}
                  className="text-forest/35"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">The founder</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight">
                Monica Janssens is building the place she spent forty years needing.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-charcoal/80 leading-relaxed">
                <p>
                  Solicitor. Muralist. Theatrical producer. Serial entrepreneur
                  across four decades. Monica has spent her career at the
                  intersection of care, craft, and coordination.
                </p>
                <p>
                  This Other Eden is the answer to a question she stopped
                  waiting for anyone else to solve: what would care look like
                  if it were finally built around the whole woman?
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Link to="/vision" className="mt-10 inline-flex items-center gap-3 text-forest text-xs uppercase tracking-[0.25em] hover:text-terracotta transition-colors group">
                Read the vision <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-terracotta text-cream py-32 md:py-44 text-center relative overflow-hidden">
        <div className="container-eden relative z-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-cream/75 mb-8">Founding waitlist open</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl mx-auto">
              Be part of a place that begins with you in it.
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-xl mx-auto text-cream/85 leading-relaxed">
              Founding members shape the space itself — the programs, the
              rhythms, the community it becomes.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Link to="/waitlist" className="mt-12 inline-flex min-h-12 items-center gap-3 bg-cream px-10 py-5 text-xs uppercase tracking-[0.3em] text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-forest hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 group">
              Join the Founding Waitlist <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
