import { motion } from "framer-motion";
import { Network, Layers, LineChart } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Network,
    title: "Disconnected Data",
    desc: "Insights scattered across platforms create blind spots and slow every decision your team makes.",
  },
  {
    icon: Layers,
    title: "Scattered Execution",
    desc: "Channels, creative, and operations move on independent rhythms — momentum leaks at every handoff.",
  },
  {
    icon: LineChart,
    title: "Unpredictable Growth",
    desc: "Without an underlying system, performance becomes seasonal — not compounding.",
  },
];

export function Problem() {
  return (
    <section className="relative py-28 sm:py-36">
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
        <SectionHeader
          eyebrow="The Reality"
          title={
            <>
              Most businesses don't need more marketing.
              <br />
              <span className="text-muted-foreground/80">They need more clarity.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all group-hover:bg-primary/20" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
