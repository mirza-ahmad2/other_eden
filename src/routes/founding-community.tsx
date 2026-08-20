import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { seo } from "@/lib/utils";

export const Route = createFileRoute("/founding-community")({
  head: () =>
    seo({
      title: "Founding Community — This Other Eden",
      description:
        "Founding members shape the space itself — early access, sliding-scale membership, and a real say in how This Other Eden becomes what it becomes.",
      path: "/founding-community",
      keywords:
        "founding community, founding membership, sliding-scale membership, women's community, This Other Eden waitlist",
      imageAlt: "Communal garden space for the founding community of This Other Eden",
    }),
  component: CommunityPage,
});

const perks = [
  { num: "01", title: "Early access", copy: "First to book therapies, workshops, and residencies as the space opens its doors." },
  { num: "02", title: "Sliding-scale membership", copy: "Founding tiers priced to genuinely widen who gets to belong — not to filter them out." },
  { num: "03", title: "A voice in the design", copy: "Programs, rhythms, rooms, rituals — founding members shape the space that shapes them." },
];

function CommunityPage() {
  return (
    <div>
      <PageHero
        image={heroCommunity}
        alt="Communal garden space for the founding community of This Other Eden"
        eyebrow="Founding Community"
        title="A place is what its first people make it."
        subtitle="Founding members aren't customers waiting to be served. They're the ones we build with."
        height="full"
      />

      <section className="py-28 md:py-36 bg-cream">
        <div className="container-eden">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">What founding membership means</p>
              <h2 className="font-display text-5xl md:text-6xl text-forest leading-[1.05]">
                Three things we're offering, plainly.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {perks.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.15}>
                <div className="border-t border-forest pt-8 h-full">
                  <p className="font-display text-6xl text-terracotta mb-6">{p.num}</p>
                  <h3 className="font-display text-3xl text-forest mb-4 leading-tight">{p.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-cream pb-28">
        <div className="container-eden mb-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-4 text-center">Community research · what women told us</p>
          </Reveal>
        </div>
        <div className="container-eden">
          <Reveal>
            <QuoteCarousel />
          </Reveal>
        </div>
      </section>

      {/* Oversized */}
      <section className="py-28 md:py-40 bg-terracotta text-cream text-center">
        <div className="container-eden">
          <Reveal>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] max-w-5xl mx-auto">
              You'll know the smell of the garden.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-lg text-cream/85 max-w-xl mx-auto">
              That's the level of belonging we're building for. Not membership. Familiarity.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/waitlist" className="mt-12 inline-flex min-h-12 items-center gap-3 bg-cream px-10 py-5 text-xs uppercase tracking-[0.3em] text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-forest hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80">
              Join the Founding Waitlist <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
