import { motion } from "framer-motion";

const stages = [
  { label: "Awareness", x: 6 },
  { label: "Engagement", x: 27 },
  { label: "Conversion", x: 50 },
  { label: "Retention", x: 73 },
  { label: "Expansion", x: 94 },
];

export function Philosophy() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Philosophy
          </span>
          <h2 className="mt-5 text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-[52px]">
            Growth should operate like <span className="text-gradient-accent">a system.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-muted-foreground">
            We replace one-off campaigns with connected infrastructure — strategy, channels,
            creative, and analytics moving as one continuous engine. Every signal feeds the next
            decision.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Signals route into a single source of truth",
              "Channels reinforce one another instead of competing",
              "Compounding outcomes, not isolated wins",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 text-[14px] text-white/85">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-highlight shadow-[0_0_8px_var(--highlight)]" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative aspect-[4/3] w-full rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-transparent p-6 backdrop-blur-xl"
        >
          <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges rounded-3xl" />
          <div className="absolute -inset-20 -z-10 rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.12),transparent_60%)] blur-2xl" />

          <svg viewBox="0 0 100 60" className="relative h-full w-full">
            <defs>
              <linearGradient id="flow" x1="0" x2="1">
                <stop offset="0%" stopColor="#A7C4A0" />
                <stop offset="100%" stopColor="#C8F5B0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.7" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 6 30 C 18 10, 32 50, 50 30 S 82 10, 94 30"
              stroke="url(#flow)"
              strokeWidth="0.5"
              fill="none"
              filter="url(#glow)"
            />

            {stages.map((s, i) => (
              <g key={s.label}>
                <motion.circle
                  initial={{ r: 0, opacity: 0 }}
                  whileInView={{ r: 1.8, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  cx={s.x}
                  cy={30}
                  fill="#C8F5B0"
                  filter="url(#glow)"
                />
                <motion.circle
                  cx={s.x}
                  cy={30}
                  r={3.4}
                  fill="none"
                  stroke="#C8F5B0"
                  strokeOpacity={0.3}
                  strokeWidth={0.3}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                />
                <text
                  x={s.x}
                  y={40}
                  fontSize={2.4}
                  fill="rgba(255,255,255,0.7)"
                  textAnchor="middle"
                  className="font-medium"
                >
                  {s.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
