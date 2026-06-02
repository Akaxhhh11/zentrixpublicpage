import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  {
    tag: "Systems",
    title: "The future of growth systems",
    excerpt:
      "Why the next decade of marketing belongs to companies that treat growth as engineered infrastructure, not improvisation.",
    read: "8 min",
  },
  {
    tag: "Strategy",
    title: "Why visibility creates competitive advantage",
    excerpt:
      "The teams that win aren't the ones with the most data — they're the ones who can see what matters in real time.",
    read: "6 min",
  },
  {
    tag: "Acquisition",
    title: "Building scalable customer acquisition",
    excerpt:
      "A framework for designing acquisition systems that compound instead of degrade as you scale spend.",
    read: "11 min",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8">
          <SectionHeader
            eyebrow="Insights"
            title={
              <>
                Thinking from
                <br />
                <span className="text-muted-foreground/80">inside the engine.</span>
              </>
            }
          />
          <a
            href="#"
            className="hidden items-center gap-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-white md:inline-flex"
          >
            All articles
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#070707]">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,245,176,0.18),transparent_60%)]" />
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center text-[80px] font-semibold tracking-[-0.05em] text-white/[0.06]"
                >
                  0{i + 1}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground/70">{p.read}</span>
                </div>
                <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.015em] text-white">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-medium text-primary">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
