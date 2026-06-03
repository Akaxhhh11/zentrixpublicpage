import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "Zentrix didn't just run our marketing — they engineered the system we use to operate it. Six months in, growth is predictable for the first time.",
    name: "Elena Marsh",
    role: "VP Growth · Northwind Cloud",
    initials: "EM",
  },
  {
    quote:
      "We've worked with three agencies. Zentrix is the first that thinks like an operator. Their measurement model alone changed how we plan quarters.",
    name: "Daniel Okafor",
    role: "CEO · Lumen Audio",
    initials: "DO",
  },
  {
    quote:
      "The clarity is the thing. Every dashboard, every meeting, every campaign ladders to one strategy. It feels engineered, not improvised.",
    name: "Priya Anand",
    role: "CMO · Vertex Capital",
    initials: "PA",
  },
  {
    quote:
      "They moved us from constant firefighting to a real growth function. The compounding showed up in quarter two.",
    name: "Marcus Holt",
    role: "Founder · Halo Health",
    initials: "MH",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Operators on Zentrix"
          title={
            <>
              Reviewed by the people <br /> who run the business.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              style={{ transform: `translateY(${i % 2 === 0 ? "0" : "24px"})` }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <p className="relative text-[14px] leading-relaxed text-white/85">"{t.quote}"</p>
              <div className="relative mt-6 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-primary/30 to-highlight/20 text-[11.5px] font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[12.5px] font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
