import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 sm:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Ambient sphere */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.28),rgba(167,196,160,0.08)_45%,transparent_70%)] blur-3xl"
        />
        {/* Light rays */}
        <div className="absolute inset-0 [background:repeating-conic-gradient(from_0deg_at_50%_50%,rgba(200,245,176,0.04)_0deg_2deg,transparent_2deg_12deg)] opacity-40" />
        <div className="absolute inset-0 grid-bg opacity-20 mask-fade-edges" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-highlight shadow-[0_0_10px_var(--highlight)]" />
          Start a partnership
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[80px]"
        >
          Ready to build a smarter
          <br />
          <span className="text-gradient-accent">growth engine?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground"
        >
          Create clarity, unlock opportunities, and scale with confidence. Zentrix becomes
          the operating layer for your next phase of growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:contactzentrixms@gmail.com?subject=Book%20a%20Strategy%20Call%20with%20Zentrix&body=Hi%20Zentrix%20team%2C%0A%0AI%27d%20like%20to%20book%20a%20strategy%20call.%0A%0AName%3A%0ACompany%3A%0AWhat%20I%20need%20help%20with%3A%0A%0AThanks!"
            className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-highlight to-primary px-6 text-[14px] font-semibold text-black shadow-[0_0_60px_-8px_var(--highlight)] transition-transform hover:-translate-y-[1px]"
          >
            Book Strategy Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:contactzentrixms@gmail.com"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-[14px] font-medium text-white backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/[0.07]"
          >
            Email Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
