import { motion } from "framer-motion";
import { Compass, Target, Sparkle, Eye } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const caps = [
  {
    icon: Compass,
    title: "Strategy Architecture",
    desc: "Transform business objectives into scalable growth frameworks built around your category, market position, and economics.",
    tag: "Strategy",
  },
  {
    icon: Target,
    title: "Performance Acquisition",
    desc: "Generate qualified demand through precision marketing systems across paid, owned, and partnership channels.",
    tag: "Acquisition",
  },
  {
    icon: Sparkle,
    title: "Creative Intelligence",
    desc: "Develop content and experiences designed to influence action — informed by research, refined by data.",
    tag: "Creative",
  },
  {
    icon: Eye,
    title: "Operational Visibility",
    desc: "Provide complete insight across campaigns, performance, and growth initiatives through a unified intelligence layer.",
    tag: "Operations",
  },
];

export function Capabilities() {
  return (
    <section id="solutions" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              Four modules.
              <br />
              <span className="text-muted-foreground/80">One continuous engine.</span>
            </>
          }
          subtitle="Each capability is a self-contained system that compounds in value when connected to the next."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {caps.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.045]"
            >
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/0 blur-3xl transition-all duration-700 group-hover:bg-primary/15" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {c.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-[22px] font-semibold tracking-[-0.015em] text-white">
                {c.title}
              </h3>
              <p className="relative mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                {c.desc}
              </p>

              <div className="relative mt-6 flex items-center gap-2 text-[12px] text-primary opacity-70 transition-opacity group-hover:opacity-100">
                <span>Explore module</span>
                <span className="h-px w-8 bg-primary/60 transition-all group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
