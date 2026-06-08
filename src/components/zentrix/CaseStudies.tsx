import { motion } from "framer-motion";
import {
  AlertCircle,
  Lightbulb,
  BarChart3,
  Trophy,
  ArrowUpRight,
  Check,
  Compass,
  Users,
} from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const caseStudies = [
  {
    id: "ecommerce",
    tabLabel: "E-Commerce Growth",
    eyebrow: "Digital Retail Case Study",
    title: "E-Commerce Brand scaling traffic & conversions",
    challenge: {
      title: "The Challenge",
      intro:
        "Our client, an e-commerce brand, faced low website traffic, poor engagement, and minimal sales despite having a quality product.",
      items: [
        "Low brand visibility",
        "High bounce rate",
        "Low conversion rate",
        "Inconsistent leads",
      ],
      icon: AlertCircle,
      variant: "bullet" as const,
    },
    solution: {
      title: "Our Solution",
      intro: "We implemented a data-driven marketing strategy tailored to their business goals.",
      items: [
        "In-depth Market Research",
        "SEO & Content Optimization",
        "Targeted Social Media Campaigns",
        "Conversion Rate Optimization (CRO)",
        "Email Marketing & Retargeting",
      ],
      icon: Lightbulb,
      variant: "check" as const,
    },
    results: [
      { v: "215%", l: "Increase in Website Traffic" },
      { v: "180%", l: "Growth in Conversions" },
      { v: "160%", l: "Boost in Return on Ad Spend (ROAS)" },
      { v: "95%", l: "Increase in Engagement" },
    ],
    takeaway: {
      title: "The Takeaway",
      intro:
        "With the right strategy and execution, we helped the brand not just survive — but thrive in a competitive market.",
      sub: "Your success is our mission.",
      icon: Trophy,
    },
    ctaEmailSubject: "Let's build my success story",
    ctaLabel: "Let's build your success story",
  },
  {
    id: "nike",
    tabLabel: "Nike Brand Strategy",
    eyebrow: "Marketing Case Study",
    title: "How Nike built a brand bigger than its product",
    challenge: {
      title: "The Strategy",
      intro:
        "Nike positioned itself as a symbol of ambition, courage and self-belief. They didn't sell shoes. They sold a mindset.",
      items: [
        "Sell a mindset, not just apparel",
        "Position as a symbol of ambition",
        "Focus on human potential",
      ],
      icon: Compass,
      variant: "bullet" as const,
    },
    solution: {
      title: "The Execution",
      intro:
        "To bring this strategy to life, Nike focused on emotional campaigns and powerful narrative building.",
      items: [
        "Powerful storytelling",
        "Iconic athletes",
        "Emotional campaigns",
        "Consistent message",
      ],
      icon: Users,
      variant: "check" as const,
    },
    results: [
      { v: "$51B+", l: "Brand Value (2024)" },
      { v: "190+", l: "Countries Reached" },
      { v: "Community", l: "Built a community, not just a customer base" },
      { v: "Mindset", l: "Great marketing sells a purpose, not products" },
    ],
    takeaway: {
      title: "The Takeaway",
      intro:
        "Great marketing doesn't sell products. It sells a purpose people want to be a part of.",
      sub: "Fueling brands that lead.",
      icon: Lightbulb,
    },
    ctaEmailSubject: "Book a brand strategy session with Zentrix",
    ctaLabel: "Build your brand authority",
  },
];

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayTab, setDisplayTab] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const cs = caseStudies[displayTab];

  const handleTabChange = (index: number) => {
    if (index === activeTab || isFlipping) return;
    setActiveTab(index);
    setIsFlipping(true);

    // Halfway through scale-down fade (250ms), swap data
    setTimeout(() => {
      setDisplayTab(index);
      setIsFlipping(false);
    }, 250);
  };

  return (
    <section id="cases" className="relative py-16 sm:py-20">
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

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] p-1.5 backdrop-blur-md">
            {caseStudies.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(i)}
                className={`relative px-5 py-2 text-[13px] font-semibold rounded-full transition-colors cursor-pointer ${activeTab === i ? "text-black" : "text-white/60 hover:text-white"
                  }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="active-case-tab"
                    className="absolute inset-0 bg-highlight rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          animate={{
            scale: isFlipping ? 0.82 : 1,
            opacity: isFlipping ? 0 : 1,
            rotate: isFlipping ? -3 : 0,
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: isFlipping ? 300 : 200,
              damping: isFlipping ? 25 : 16,
            },
            rotate: {
              type: "spring",
              stiffness: isFlipping ? 300 : 200,
              damping: isFlipping ? 25 : 16,
            },
            opacity: { duration: 0.25 },
            default: { duration: 0.8 },
          }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />

          {/* Challenge & Solution */}
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Block
              icon={cs.challenge.icon}
              title={cs.challenge.title}
              intro={cs.challenge.intro}
              items={cs.challenge.items}
              variant={cs.challenge.variant}
            />
            <Block
              icon={cs.solution.icon}
              title={cs.solution.title}
              intro={cs.solution.intro}
              items={cs.solution.items}
              variant={cs.solution.variant}
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
              {cs.results.map((r) => (
                <div key={r.l}>
                  <p className="flex items-baseline gap-1 text-[26px] font-semibold leading-none tracking-[-0.03em] text-gradient-accent sm:text-[32px] lg:text-[38px] break-words">
                    {r.v}
                    <ArrowUpRight className="h-4 w-4 text-highlight flex-shrink-0" />
                  </p>
                  <p className="mt-2 max-w-[180px] text-[12.5px] leading-relaxed text-muted-foreground">
                    {r.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div className="relative mt-6 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <cs.takeaway.icon className="h-4 w-4 text-highlight" />
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {cs.takeaway.title}
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-white/80">
                {cs.takeaway.intro}
              </p>
              <p className="mt-2 text-[14px] font-semibold text-white">{cs.takeaway.sub}</p>
            </div>

            <a
              href={`mailto:contactzentrixms@gmail.com?subject=${encodeURIComponent(
                cs.ctaEmailSubject,
              )}`}
              className="group inline-flex items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-5 py-3 text-[13.5px] font-semibold text-highlight transition-all hover:bg-highlight/20"
            >
              {cs.ctaLabel}
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
      {items.length > 0 && (
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
      )}
    </div>
  );
}
