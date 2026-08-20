import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Heart, Leaf, Handshake, ArrowRight } from "lucide-react";
import heroVision from "@/assets/hero-vision.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { seo } from "@/lib/utils";

export const Route = createFileRoute("/vision")({
  head: () =>
    seo({
      title: "The Vision — Monica Janssens · This Other Eden",
      description:
        "Founder Monica Janssens on why This Other Eden exists — a lifetime across law, theatre, and entrepreneurship arriving at coordinated care for women.",
      path: "/vision",
      keywords:
        "Monica Janssens, This Other Eden vision, founder story, coordinated care, women's sanctuary, South East England",
      imageAlt: "Countryside landscape reflecting the vision for This Other Eden",
    }),
  component: VisionPage,
});

const values = [
  { icon: Handshake, title: "Coordination over silos", copy: "Care is the conversation between practitioners — not a stack of separate appointments." },
  { icon: Users, title: "Community over isolation", copy: "Belonging is preventative medicine. We build for it, on purpose." },
  { icon: Leaf, title: "Nature as therapy", copy: "The grounds do half the work. Weather, soil, and season are part of the practice." },
  { icon: Heart, title: "Dignity in care", copy: "Every woman is met as a whole person, not a problem to be resolved." },
];

function VisionPage() {
  return (
    <div>
      <PageHero
        image={heroVision}
        alt="Open countryside landscape reflecting the vision for This Other Eden"
        eyebrow="The Vision"
        title={<>A lifetime of<br />asking better questions.</>}
        subtitle="How a solicitor, muralist, theatrical producer, and serial entrepreneur ended up building a wellness centre in South East England."
        height="full"
      />

      {/* Big pull quote */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="container-eden">
          <Reveal>
            <p className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.15] tracking-tight text-forest max-w-5xl mx-auto text-center">
              "I kept meeting women who were doing the coordinating job themselves,
              at the exact moment they had nothing left to give.
              <span className="text-terracotta"> That is the problem I decided to build for."</span>
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-charcoal/60">
              Monica Janssens · Founder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container-eden grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">A founder's path</p>
              <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight sticky top-32">
                Four decades. One consistent thread.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8 text-charcoal/80 text-lg leading-relaxed">
            <Reveal>
              <p>
                Monica trained as a solicitor. She built her early career on
                the discipline of getting complicated things to hold together
                on paper — contracts, cases, the interests of many parties in
                one room.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Then came the murals — large-scale public work — and, later,
                the theatre. Producing plays taught her that the visible thing
                on stage is only ever the tip of a much longer act of
                coordination.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Across forty years of building businesses, she kept meeting the
                same woman: someone deeply capable, quietly overwhelmed,
                juggling five practitioners across three towns and secretly
                doing the coordination job herself.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                This Other Eden is what happens when a solicitor's rigour, a
                producer's staging instinct, and an entrepreneur's stubbornness
                get pointed at that specific problem — for as long as it takes
                to actually solve it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="container-eden">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta mb-6">The values that shape it</p>
              <h2 className="font-display text-5xl md:text-6xl text-forest leading-tight">Four principles, held steady.</h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full bg-cream p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(44,64,48,0.28)]">
                  <v.icon size={28} strokeWidth={1.2} className="text-terracotta mb-8" />
                  <h3 className="font-display text-3xl text-forest mb-4">{v.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-28 text-center">
        <div className="container-eden">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Come and help us build it.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/waitlist" className="inline-flex min-h-12 items-center gap-3 bg-terracotta px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70">
                Join Founding Waitlist <ArrowRight size={14} />
              </Link>
              <Link to="/investors" className="inline-flex min-h-12 items-center border border-cream/60 px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-cream hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70">
                For Investors & Partners
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
