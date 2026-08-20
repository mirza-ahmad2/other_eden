import { useId, useState } from "react";
import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Path = "member" | "partner";

const interestOptions = [
  { value: "seed", label: "Seed investor" },
  { value: "practitioner", label: "Practitioner partner" },
  { value: "property", label: "Property partner" },
  { value: "other", label: "Other" },
] as const;

export function DualPathWaitlistForm({ defaultPath = "member" as Path }) {
  const [path, setPath] = useState<Path>(defaultPath);
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState<string>(interestOptions[0].value);
  const interestId = useId();

  if (submitted) {
    return (
      <div className="border border-sage/50 bg-cream p-12 text-center shadow-[0_24px_60px_-36px_rgba(44,64,48,0.35)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <Check size={22} aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-display text-3xl text-forest">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-charcoal/70">
          You're now part of the founding story. We'll be in touch as the space
          comes to life.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="border border-border bg-card p-6 shadow-[0_24px_60px_-36px_rgba(44,64,48,0.28)] md:p-10"
      noValidate={false}
    >
      <div className="mb-8 grid grid-cols-2 gap-2 bg-muted p-1" role="tablist" aria-label="Enquiry type">
        <button
          type="button"
          role="tab"
          aria-selected={path === "member"}
          onClick={() => setPath("member")}
          className={`min-h-12 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 ${
            path === "member" ? "bg-forest text-cream shadow-sm" : "text-charcoal/70 hover:text-forest"
          }`}
        >
          Founding Member
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={path === "partner"}
          onClick={() => setPath("partner")}
          className={`min-h-12 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 ${
            path === "partner" ? "bg-forest text-cream shadow-sm" : "text-charcoal/70 hover:text-forest"
          }`}
        >
          Investor / Partner
        </button>
      </div>

      <div className="space-y-6">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        {path === "partner" && (
          <div>
            <label
              htmlFor={interestId}
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-charcoal/70"
            >
              I'm interested as a
            </label>
            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger
                id={interestId}
                aria-label="I'm interested as a"
                className="h-auto w-full rounded-none border-border bg-cream px-4 py-3.5 text-sm text-charcoal shadow-none transition-colors hover:border-terracotta/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/30 data-[placeholder]:text-charcoal/55"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="z-[80] rounded-none border-border bg-cream text-charcoal shadow-[0_18px_40px_-16px_rgba(44,64,48,0.35)]"
              >
                {interestOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="cursor-pointer rounded-none py-3 pl-3 pr-8 text-sm text-charcoal data-[highlighted]:bg-terracotta data-[highlighted]:text-cream data-[state=checked]:bg-terracotta/15 data-[state=checked]:text-forest focus:bg-terracotta focus:text-cream"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="interest" value={interest} />
          </div>
        )}
        <div>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-charcoal/70">
            {path === "member" ? "What are you hoping to find here? (optional)" : "Tell us about your interest (optional)"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none border border-border bg-cream px-4 py-3.5 text-sm text-charcoal transition-colors focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
          />
        </div>

        <button
          type="submit"
          className="mt-2 min-h-12 w-full bg-terracotta py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all duration-500 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_16px_36px_-18px_rgba(44,64,48,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/60"
        >
          {path === "member" ? "Join the Founding Waitlist" : "Send Partnership Enquiry"}
        </button>

        <p className="pt-2 text-center text-xs leading-relaxed text-charcoal/55">
          No spam. We'll be in touch as the space comes to life.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.2em] text-charcoal/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-border bg-cream px-4 py-3.5 text-sm text-charcoal transition-colors focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30"
      />
    </div>
  );
}
