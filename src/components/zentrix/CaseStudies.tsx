import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, BarChart3, Trophy, ArrowUpRight, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const challenges = [
  "Low brand visibility",
  "High bounce rate",
  "Low conversion rate",
  "Inconsistent leads",
];

const solutions = [
  "In-depth Market Research",
  "SEO & Content Optimization",
  "Targeted Social Media Campaigns",
  "Conversion Rate Optimization (CRO)",
  "Email Marketing & Retargeting",
];

const results = [
  { v: "215%", l: "Increase in Website Traffic" },
  { v: "180%", l: "Growth in Conversions" },
  { v: "160%", l: "Boost in Return on Ad Spend (ROAS)" },
  { v: "95%", l: "Increase in Engagement" },
];

export function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Case Study"
          title={
            <>
              Turning struggles
              <br />
              <span className="text-muted-foreground/80">into success.</span>
            </>
          }
          subtitle="A result-driven approach. A measurable impact."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />

          {/* Challenge & Solution */}
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Block
              icon={AlertCircle}
              title="The Challenge"
              intro="Our client, an e-commerce brand, faced low website traffic, poor engagement, and minimal sales despite having a quality product."
              items={challenges}
              variant="bullet"
            />
            <Block
              icon={Lightbulb}
              title="Our Solution"
              intro="We implemented a data-driven marketing strategy tailored to their business goals."
              items={solutions}
              variant="check"
            />
          </div>

          {/* Results */}
          <div className="relative mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-highlight" />
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                The Results
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {results.map((r, i) => (
                <motion.div
                  key={r.l}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <p className="flex items-baseline gap-1 text-[32px] font-semibold leading-none tracking-[-0.03em] text-gradient-accent sm:text-[40px]">
                    {r.v}
                    <ArrowUpRight className="h-5 w-5 text-highlight" />
                  </p>
                  <p className="mt-2 max-w-[180px] text-[12.5px] leading-relaxed text-muted-foreground">
                    {r.l}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div className="relative mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-highlight" />
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  The Takeaway
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-white/80">
                With the right strategy and execution, we helped the brand not just survive — but
                thrive in a competitive market.
              </p>
              <p className="mt-2 text-[14px] font-semibold text-white">
                Your success is our mission.
              </p>
            </div>

            <a
              href="mailto:contactzentrixms@gmail.com?subject=Let%27s%20build%20my%20success%20story"
              className="group inline-flex items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-5 py-3 text-[13.5px] font-semibold text-highlight transition-all hover:bg-highlight/20"
            >
              Let&rsquo;s build your success story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Block({
  icon: Icon,
  title,
  intro,
  items,
  variant,
}: {
  icon: typeof AlertCircle;
  title: string;
  intro: string;
  items: string[];
  variant: "bullet" | "check";
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-highlight/10 text-highlight">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-[15px] font-semibold uppercase tracking-[0.18em] text-white">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="mt-5 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-[13.5px] text-white/85">
            {variant === "check" ? (
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-highlight" />
            ) : (
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-highlight" />
            )}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
