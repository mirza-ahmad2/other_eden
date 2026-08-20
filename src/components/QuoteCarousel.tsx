import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const quotes = [
  { text: "I need everything in one place, coordinated. Not another list of specialists to chase.", from: "Community research · anonymous" },
  { text: "A place with a garden to cry in. Somewhere that doesn't feel like a waiting room.", from: "Community research · anonymous" },
  { text: "I want people who actually talk to each other about my care. That's the whole thing.", from: "Community research · anonymous" },
  { text: "Somewhere I can bring my dog and my whole self, without apology.", from: "Community research · anonymous" },
  { text: "I've stopped believing wellness is for me. This sounds like it might be.", from: "Community research · anonymous" },
];

export function QuoteCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);

  const q = quotes[i];

  return (
    <div className="relative bg-forest text-cream py-20 md:py-28 px-6 md:px-16">
      <Quote className="mx-auto text-terracotta-soft mb-10" size={36} strokeWidth={1.2} />
      <div className="max-w-3xl mx-auto min-h-[220px] flex flex-col items-center justify-center text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-4xl leading-snug tracking-tight text-cream"
          >
            "{q.text}"
          </motion.blockquote>
        </AnimatePresence>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-cream/55">{q.from}</p>
      </div>
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
          className="flex h-11 w-11 items-center justify-center border border-cream/25 transition-all duration-300 hover:border-terracotta hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70"
          aria-label="Previous quote"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-[2px] transition-all duration-500 ${idx === i ? "w-8 bg-terracotta" : "w-4 bg-cream/25"}`}
              aria-label={`Quote ${idx + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setI((v) => (v + 1) % quotes.length)}
          className="flex h-11 w-11 items-center justify-center border border-cream/25 transition-all duration-300 hover:border-terracotta hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/70"
          aria-label="Next quote"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
