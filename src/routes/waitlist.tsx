import { createFileRoute } from "@tanstack/react-router";
import heroWaitlist from "@/assets/hero-waitlist.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DualPathWaitlistForm } from "@/components/DualPathWaitlistForm";
import { seo } from "@/lib/utils";

export const Route = createFileRoute("/waitlist")({
  head: () =>
    seo({
      title: "Join the Waitlist — This Other Eden",
      description:
        "Be part of the founding story of This Other Eden — a women's holistic wellness and community centre opening in South East England.",
      path: "/waitlist",
      keywords:
        "founding waitlist, join This Other Eden, women's wellness membership, investor enquiry, South East England",
      imageAlt: "Garden pathway inviting visitors to join the This Other Eden founding waitlist",
    }),
  component: WaitlistPage,
});

function WaitlistPage() {
  return (
    <div>
      <PageHero
        image={heroWaitlist}
        alt="Garden pathway inviting visitors to join the This Other Eden founding waitlist"
        eyebrow="The Founding Waitlist"
        title="Be part of the founding story."
        subtitle="Two doors in. Both lead to the same garden."
        height="medium"
      />

      <section className="py-24 md:py-32 bg-cream">
        <div className="container-eden max-w-2xl mx-auto">
          <Reveal>
            <DualPathWaitlistForm />
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-16 text-center">
              <p className="font-display text-2xl md:text-3xl text-forest leading-snug">
                We build this together — or we don't build it at all.
              </p>
              <p className="mt-4 text-sm text-charcoal/60">
                Monica Janssens, Founder
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
