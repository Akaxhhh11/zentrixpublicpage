import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const fullText = "Most businesses don't need more marketing. They need more clarity.";

export function Problem() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeText, 30);
      } else {
        setIsTyping(false);
        // Wait 4 seconds, then restart
        timeoutId = setTimeout(() => {
          charIndex = 0;
          setIsTyping(true);
          typeText();
        }, 2000);
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="ln" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(200,245,176,0)" />
              <stop offset="50%" stopColor="rgba(200,245,176,0.25)" />
              <stop offset="100%" stopColor="rgba(200,245,176,0)" />
            </linearGradient>
          </defs>
          <line x1="0%" y1="60%" x2="100%" y2="40%" stroke="url(#ln)" strokeWidth="1" />
          <line x1="0%" y1="35%" x2="100%" y2="55%" stroke="url(#ln)" strokeWidth="1" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-highlight shadow-[0_0_8px_var(--highlight)]" />
          The Reality
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-[42px] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[72px] min-h-[4.5em] sm:min-h-[3.6em] lg:min-h-[3.2em]"
          style={{ contain: "layout style paint" }}
        >
          {displayedText.split("They need more clarity.")[0]}
          {displayedText.includes("They need more clarity.") && (
            <span className="text-highlight">They need more clarity.</span>
          )}
          {displayedText.split("They need more clarity.")[1]}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 inline-block h-[1.2em] w-[3px] bg-primary"
            />
          )}
        </motion.h2>
      </div>
    </section>
  );
}
