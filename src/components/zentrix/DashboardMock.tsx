import { motion } from "framer-motion";
import { Compass, Target, Sparkles, BarChart3, Workflow, CheckCircle2, ArrowUpRight } from "lucide-react";

const pillars = [
  { icon: Compass, label: "Strategy Architecture", tag: "Aligned" },
  { icon: Target, label: "Performance Acquisition", tag: "Scaling" },
  { icon: Sparkles, label: "Creative Intelligence", tag: "Compounding" },
  { icon: BarChart3, label: "Analytics & Insight", tag: "Live" },
  { icon: Workflow, label: "Operational Systems", tag: "Synced" },
];

export function DashboardMock() {
  return (
    <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[640px]">
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.18),transparent_60%)] blur-2xl" />

      {/* Main panel — Growth System */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-8 top-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
            </span>
            <p className="text-[10.5px] uppercase tracking-[0.22em] text-white/70">
              Growth System · Online
            </p>
          </div>
          <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-white">
            v3.2
          </span>
        </div>

        <h3 className="mt-5 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-white">
          Five pillars. One operating system.
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/65">
          Every layer of growth — engineered to compound, not collide.
        </p>

        <div className="mt-5 space-y-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="grid h-7 w-7 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                  <p.icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-[12.5px] font-medium text-white/90">{p.label}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-medium text-highlight">
                <CheckCircle2 className="h-3 w-3" />
                {p.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating badge — North Star */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 top-72 w-[230px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/95 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
          North Star
        </p>
        <p className="mt-1.5 text-[14.5px] font-semibold leading-snug text-white">
          Predictable, compounding revenue.
        </p>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-highlight">
          <ArrowUpRight className="h-3.5 w-3.5" />
          Quarter-over-quarter clarity
        </div>
      </motion.div>

      {/* Bottom card — Live signals */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-6 w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/95 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10.5px] uppercase tracking-[0.18em] text-white/70">
            Operating Cadence
          </p>
          <span className="text-[10px] text-highlight">Weekly</span>
        </div>
        <div className="space-y-2.5">
          {[
            { l: "Strategy review", t: "Mon" },
            { l: "Performance pulse", t: "Wed" },
            { l: "Creative ship", t: "Fri" },
          ].map((row) => (
            <div key={row.l} className="flex items-center justify-between text-[12px]">
              <span className="text-white/85">{row.l}</span>
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] text-white/70">
                {row.t}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating mini-badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute right-10 bottom-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0d0d]/95 px-3 py-2 backdrop-blur-xl"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-highlight/15">
          <Sparkles className="h-3.5 w-3.5 text-highlight" />
        </div>
        <div>
          <p className="text-[10px] text-white/60">Built to</p>
          <p className="text-[12px] font-semibold text-white">Compound</p>
        </div>
      </motion.div>
    </div>
  );
}
