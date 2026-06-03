import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { DashboardMock } from "./DashboardMock";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-edges opacity-60" />
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,245,176,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-60 h-80 w-80 rounded-full bg-highlight/10 blur-[140px]" />
        {/* Light beam */}
        <div className="absolute inset-x-0 top-24 h-px overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-highlight/60 to-transparent animate-beam" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11.5px] font-medium tracking-wide text-muted-foreground backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-highlight" />
            Growth Infrastructure · Designed for ambitious companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6 text-[44px] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[72px]"
          >
            Build momentum.
            <br />
            <span className="text-gradient-accent">Not just marketing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground"
          >
            Zentrix helps ambitious businesses build scalable growth systems through
            strategic acquisition, creative intelligence, performance optimization, and
            operational clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="mailto:contactzentrixms@gmail.com?subject=Book%20a%20Strategy%20Call%20with%20Zentrix&body=Hi%20Zentrix%20team%2C%0A%0AI%27d%20like%20to%20book%20a%20strategy%20call.%0A%0AName%3A%0ACompany%3A%0AWhat%20I%20need%20help%20with%3A%0A%0AThanks!"
              className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-highlight to-primary px-5 text-[13.5px] font-semibold text-black shadow-[0_0_40px_-8px_var(--highlight)] transition-transform hover:-translate-y-[1px]"
            >
              Book Strategy Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#solutions"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[13.5px] font-medium text-white backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              Explore Our Approach
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70"
          >
            <span>Trusted by operators at</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40">
              {["Lumen", "Northwind", "Aperture", "Vertex", "Halo"].map((b) => (
                <span key={b} className="text-[13px] font-semibold tracking-[0.12em]">
                  {b.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative lg:col-span-6"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
