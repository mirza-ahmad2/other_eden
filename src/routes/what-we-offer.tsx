import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Palette, Network, Sprout, Dog, ArrowRight } from "lucide-react";
import heroOffer from "@/assets/hero-offer.jpg";
import detailHort from "@/assets/detail-horticulture.jpg";
import detailCreative from "@/assets/detail-creative.jpg";
import detailTherapy from "@/assets/detail-therapy.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { seo } from "@/lib/utils";

export const Route = createFileRoute("/what-we-offer")({
  head: () =>
    seo({
      title: "What We Offer — This Other Eden",
      description:
        "Five threads woven into one sanctuary: holistic therapies, creative enrichment, AI-coordinated care, therapeutic horticulture, and dog-friendly community.",
      path: "/what-we-offer",
      keywords:
        "holistic therapies, creative enrichment, AI-coordinated care, therapeutic horticulture, dog-friendly community, women's wellness, This Other Eden",
      imageAlt: "Garden grounds representing the five offerings of This Other Eden",
    }),
  component: OfferingsPage,
});

const pillars = [
  {
    icon: Sparkles,
    eyebrow: "01 · Holistic & Complementary Therapies",
    title: "Care that treats the whole person, not the presenting problem.",
    copy: "Medical, therapeutic, and complementary practitioners working from a shared understanding of you — not from disconnected charts in different buildings.",
    bullets: ["Integrated medical + therapeutic consultations", "Complementary modalities under one roof", "Menopause, mental health, and chronic care specialists"],
    image: detailTherapy,
  },
  {
    icon: Palette,
    eyebrow: "02 · Creative Enrichment Programs",
    title: "Creativity as medicine, not decoration.",
    copy: "Studios and workshops led by working artists — muralists, ceramicists, writers, musicians — because making something is one of the oldest known routes to feeling like yourself again.",
    bullets: ["Rotating artist-in-residence programs", "Small-group studio workshops", "Open studio time for members"],
    image: detailCreative,
  },
  {
    icon: Network,
    eyebrow: "03 · AI-Coordinated Practitioner Care",
    title: "Practitioners in conversation. Quietly held together by AI.",
    copy: "AI never replaces a practitioner. It handles the coordination job that currently falls on you — scheduling, notes flow, care plans that stay in sync — so the humans can do the human work.",
    bullets: ["One unified care view for your practitioner team", "AI-assisted scheduling and continuity", "You remain in control of your data, always"],
    image: null,
  },
  {
    icon: Sprout,
    eyebrow: "04 · Therapeutic Horticulture & Care Farming",
    title: "The slow medicine of soil and season.",
    copy: "Growing beds, greenhouse space, and structured care-farming programs. Evidence-based therapeutic horticulture — the kind of work with the body that talk therapy alone can't reach.",
    bullets: ["Structured care farming programs", "Community growing beds and greenhouse", "Seasonal food, foraging, and shared meals"],
    image: detailHort,
  },
  {
    icon: Dog,
    eyebrow: "05 · Dog-Friendly Community Spaces",
    title: "Come as your whole self. Bring who you love.",
    copy: "Dog-friendly by design, not by exception. Communal rooms, quiet corners, and grounds shaped around the reality that many women's calm arrives on four legs.",
    bullets: ["Dogs welcome in most communal spaces", "Fresh water, resting nooks, secure grounds", "Community sits, walks, and dog-friendly workshops"],
    image: null,
  },
];

function OfferingsPage() {
  return (
    <div>
      <PageHero
        image={heroOffer}
        alt="Garden paths and planting beds at This Other Eden, a countryside wellness sanctuary"
        eyebrow="What We Offer"
        title="Five threads. One place. Around you."
        subtitle="Not a menu of services stapled together — a single sanctuary where every discipline knows the others are in the room."
        height="full"
      />

      <div className="bg-cream">
        {pillars.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <section key={p.title} className="py-24 md:py-32 border-b border-border last:border-0">
              <div className="container-eden grid md:grid-cols-12 gap-12 md:gap-16 items-center">
                <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
                  <Reveal>
                    <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">{p.eyebrow}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <p.icon size={32} strokeWidth={1.2} className="text-forest" />
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-forest leading-[1.08]">{p.title}</h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="mt-6 text-lg text-charcoal/75 leading-relaxed">{p.copy}</p>
                  </Reveal>
                  <Reveal delay={0.35}>
                    <ul className="mt-8 space-y-3">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-4 text-charcoal/80">
                          <span className="mt-2 w-6 h-px bg-terracotta shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
                <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                  <Reveal delay={0.15}>
                    {p.image ? (
                      <div className="group aspect-[5/6] overflow-hidden bg-muted shadow-[0_24px_60px_-32px_rgba(42,40,34,0.35)]">
                        <img
                          src={p.image}
                          alt={
                            p.eyebrow.includes("Horticulture")
                              ? "Therapeutic horticulture beds and greenhouse planting"
                              : p.eyebrow.includes("Creative")
                                ? "Creative studio workspace for artist-led workshops"
                                : "A warm therapy room prepared for holistic and complementary care"
                          }
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[5/6] bg-forest text-cream flex items-center justify-center p-16 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, var(--terracotta), transparent 60%)" }} />
                        <div className="relative text-center">
                          <p.icon size={80} strokeWidth={0.8} className="mx-auto text-terracotta-soft mb-8" />
                          <p className="font-display text-3xl leading-snug text-cream/90">
                            {p.title.split(".")[0]}.
                          </p>
                        </div>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-forest text-cream py-32 text-center">
        <div className="container-eden">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl leading-tight max-w-3xl mx-auto">
              Ready to be part of it?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/waitlist" className="mt-12 inline-flex min-h-12 items-center gap-3 bg-terracotta px-10 py-5 text-xs uppercase tracking-[0.3em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70">
              Join the Founding Waitlist <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
