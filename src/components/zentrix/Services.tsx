import { motion } from "framer-motion";
import { Code2, Settings, Instagram, Search, Target, Palette, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "High-performance, modern websites built for conversion, SEO, and speed. Clean code meets beautiful design.",
    points: ["Custom React/Next.js", "Responsive & Mobile-first", "Page Speed Optimization"],
  },
  {
    icon: Settings,
    title: "Website Management",
    desc: "Continuous optimization, updates, security, and performance tuning to keep your digital storefront pristine.",
    points: ["Hosting & SSL Security", "Content & Feature Updates", "Regular Audits & A/B Testing"],
  },
  {
    icon: Instagram,
    title: "Instagram Page Handling",
    desc: "Organic growth, creative content, and audience engagement designed to build a compounding social presence.",
    points: ["Content & Feed Design", "Community Management", "Reels & Story Strategy"],
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    desc: "Dominate search rankings and acquire intent-driven traffic through authority content and technical SEO.",
    points: ["Keyword & Competitor Audits", "On-page & Off-page SEO", "Authority Content Writing"],
  },
  {
    icon: Target,
    title: "Performance Marketing",
    desc: "Precision-targeted paid acquisition campaigns across channels to scale customer acquisition efficiently.",
    points: [
      "Meta, Google & LinkedIn Ads",
      "Funnel & Landing Page Optimization",
      "ROAS & LTV Scaling",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Craft a memorable, cohesive visual and narrative identity that resonates with your category and audience.",
    points: ["Logo & Visual Systems", "Brand Voice & Positioning", "Design Guidelines & Assets"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      {/* Background glow styling */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(167,196,160,0.1),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Growth capabilities
              <br />
              <span className="text-muted-foreground/80">engineered for scale.</span>
            </>
          }
          subtitle="A complete suite of execution services to build authority, drive traffic, and compound conversions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-7 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              {/* Decorative hover gradient border top */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-highlight/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon card */}
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/50 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <s.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-[18px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.desc}</p>

                {/* Point list */}
                <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2.5 text-[12.5px] text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-highlight" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
