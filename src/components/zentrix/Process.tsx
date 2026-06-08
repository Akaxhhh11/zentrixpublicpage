import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "Understand business goals, market conditions, and growth opportunities through structured discovery.",
    points: ["Market & competitive audit", "Economic modeling", "Opportunity mapping"],
  },
  {
    id: "02",
    title: "Architect",
    desc: "Design systems, acquisition strategies, and measurement frameworks tailored to your stage.",
    points: ["Channel architecture", "Measurement model", "Creative framework"],
  },
  {
    id: "03",
    title: "Deploy",
    desc: "Launch campaigns, content systems, and performance infrastructure in coordinated rollouts.",
    points: ["Cross-channel activation", "Creative production", "Analytics instrumentation"],
  },
  {
    id: "04",
    title: "Optimize",
    desc: "Continuously refine performance through insight, experimentation, and compounding feedback.",
    points: ["Experiment program", "Pipeline optimization", "Quarterly strategy review"],
  },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              An engineered path
              <br />
              <span className="text-muted-foreground/80">from clarity to compounding.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-2">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-start gap-5 rounded-2xl border p-5 text-left transition-all ${active === i
                      ? "border-primary/40 bg-white/[0.04]"
                      : "border-white/[0.06] bg-white/[0.015] hover:border-white/15"
                    }`}
                >
                  <span
                    className={`mt-0.5 text-[12px] font-mono tracking-wider transition-colors ${active === i ? "text-highlight" : "text-muted-foreground"
                      }`}
                  >
                    {s.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full transition-all ${active === i
                        ? "bg-highlight shadow-[0_0_10px_var(--highlight)]"
                        : "bg-white/15"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-8 backdrop-blur-xl"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute inset-0 grid-bg opacity-20 mask-fade-edges rounded-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-mono text-highlight">
                    Step {steps[active].id}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Phase
                  </span>
                </div>
                <h3 className="mt-5 text-[40px] font-semibold tracking-[-0.03em] text-white">
                  {steps[active].title}
                </h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
                  {steps[active].desc}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {steps[active].points.map((p) => (
                    <div
                      key={p}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <div className="mb-2 h-1 w-8 rounded-full bg-gradient-to-r from-primary to-highlight" />
                      <p className="text-[12.5px] font-medium text-white/90">{p}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex gap-1.5">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all ${i === active
                          ? "w-10 bg-gradient-to-r from-primary to-highlight"
                          : "w-6 bg-white/10"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
