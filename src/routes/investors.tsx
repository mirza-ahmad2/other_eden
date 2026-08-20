import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Building2, Users, ArrowRight } from "lucide-react";
import heroInvestors from "@/assets/hero-investors.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DualPathWaitlistForm } from "@/components/DualPathWaitlistForm";
import { seo } from "@/lib/utils";

export const Route = createFileRoute("/investors")({
  head: () =>
    seo({
      title: "For Investors & Partners — This Other Eden",
      description:
        "A £224B fragmented wellness market and a coordination gap. Seed investment for a flagship location and franchise model in South East England.",
      path: "/investors",
      keywords:
        "seed investment, wellness franchise, property partners, practitioner partners, This Other Eden investors, South East England wellness",
      imageAlt: "Countryside estate grounds for the flagship This Other Eden location",
    }),
  component: InvestorsPage,
});

const stats = [
  { value: "£224B", label: "Global wellness market, structurally fragmented across silos" },
  { value: "1 in 3", label: "Women report juggling 3+ disconnected practitioners for their care" },
  { value: "2026", label: "Flagship opening, South East England — franchise model to follow" },
];

const partners = [
  { icon: TrendingUp, title: "Seed Investors", copy: "Backing the flagship location and the operational blueprint for a scalable franchise model." },
  { icon: Building2, title: "Property Partners", copy: "Landowners and estate holders in South East England open to long-term wellness-led tenancy." },
  { icon: Users, title: "Practitioners", copy: "Medical, therapeutic, and creative practitioners ready to work inside a coordinated model of care." },
];

function InvestorsPage() {
  return (
    <div>
      <PageHero
        image={heroInvestors}
        alt="Countryside estate and grounds for the flagship This Other Eden location"
        eyebrow="For Investors & Partners"
        title="The coordination gap is the opportunity."
        subtitle="A market big enough to be broken in specific, addressable ways — and a founder-led model ready to build the answer."
        height="full"
      />

      {/* Stats */}
      <section className="py-24 md:py-32 bg-forest text-cream">
        <div className="container-eden grid md:grid-cols-3 gap-12 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.15}>
              <div className="text-center md:text-left border-l md:border-l md:pl-8 border-terracotta/60">
                <p className="font-display text-6xl md:text-7xl text-terracotta-soft leading-none">{s.value}</p>
                <p className="mt-6 text-cream/80 leading-relaxed max-w-xs">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-eden grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">The opportunity</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight sticky top-32">
                Fragmentation is a structural problem. Coordination is the product.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <Reveal><p>The wellness industry has scaled by adding more specialists, more apps, more subscriptions. It has not scaled coordination between them. That's the gap.</p></Reveal>
            <Reveal delay={0.1}><p>This Other Eden's model — one place, one coordinated team, AI-assisted continuity — is both a defensible flagship business and a repeatable franchise-ready template.</p></Reveal>
            <Reveal delay={0.2}><p>Timing is with us. Menopause-adjacent care, integrative health, and dog-friendly hospitality are all breaking into the mainstream on their own trajectories. We sit at the intersection.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Ask */}
      <section className="py-28 bg-card">
        <div className="container-eden">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">The ask</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight">
                Seed investment for a flagship location and franchise blueprint.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-charcoal/70 leading-relaxed">
                We're raising to secure the flagship site in the Rye area, build
                out the coordinated-care operating model, and prove the unit
                economics for a replicable franchise. Full deck available on request.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full border border-border bg-cream p-10 transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-[0_20px_50px_-28px_rgba(44,64,48,0.28)]">
                  <p.icon size={28} strokeWidth={1.2} className="text-terracotta mb-6" />
                  <h3 className="font-display text-2xl text-forest mb-3">{p.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="bg-cream py-28 md:py-36">
        <div className="container-eden grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">Partner with us</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight">
                Let's talk.
                <ArrowRight className="inline ml-4 text-terracotta" size={40} />
              </h2>
              <p className="mt-8 text-charcoal/75 leading-relaxed max-w-md">
                Whether you're an investor, a property partner, or a practitioner interested in the model, this is the way in.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <DualPathWaitlistForm defaultPath="partner" />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
