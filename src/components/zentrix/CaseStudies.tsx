import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cases = [
  {
    industry: "B2B SaaS",
    name: "Northwind Cloud",
    challenge:
      "Stalled pipeline despite aggressive ad spend. Lacked unified measurement across teams.",
    approach:
      "Rebuilt acquisition architecture, introduced a measurement layer, restructured creative around buying committees.",
    outcome: { a: "+312%", b: "qualified pipeline" },
    metric: { a: "$1.4M", b: "new ARR in 90 days" },
  },
  {
    industry: "Consumer Tech",
    name: "Lumen Audio",
    challenge:
      "Hardware brand with strong product, weak narrative — flat conversion across paid channels.",
    approach:
      "Repositioned brand around a sensory metaphor, deployed creative system across performance + organic.",
    outcome: { a: "4.8x", b: "ROAS uplift" },
    metric: { a: "−41%", b: "blended CAC" },
  },
  {
    industry: "Fintech",
    name: "Vertex Capital",
    challenge:
      "Regulated category with compliance friction. Needed scalable acquisition without compromise.",
    approach:
      "Built compliance-aware creative pipeline. Introduced predictive scoring for inbound demand.",
    outcome: { a: "2.1M", b: "qualified visits" },
    metric: { a: "99%", b: "compliance pass rate" },
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Case Studies"
          title={
            <>
              Engineered outcomes,
              <br />
              <span className="text-muted-foreground/80">not anecdotal results.</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/0 blur-3xl transition-all duration-700 group-hover:bg-primary/15" />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {c.industry}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
              </div>

              <h3 className="relative mt-5 text-[22px] font-semibold tracking-[-0.015em] text-white">
                {c.name}
              </h3>

              <div className="relative mt-5 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
                <Item label="Challenge" text={c.challenge} />
                <Item label="Approach" text={c.approach} />
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-3 border-t border-white/5 pt-5">
                <Outcome a={c.outcome.a} b={c.outcome.b} />
                <Outcome a={c.metric.a} b={c.metric.b} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/50">
        {label}
      </p>
      <p className="mt-1 text-white/80">{text}</p>
    </div>
  );
}

function Outcome({ a, b }: { a: string; b: string }) {
  return (
    <div>
      <p className="text-[22px] font-semibold tracking-[-0.02em] text-gradient-accent">{a}</p>
      <p className="text-[11.5px] text-muted-foreground">{b}</p>
    </div>
  );
}
