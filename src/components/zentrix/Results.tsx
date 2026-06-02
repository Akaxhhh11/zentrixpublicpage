import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "%", label: "Increase in operational efficiency" },
  { value: 4.2, suffix: "x", label: "Improved marketing performance", decimals: 1 },
  { value: 18, suffix: "M+", label: "Customer interactions processed" },
  { value: 99, suffix: "%", label: "Visibility across growth activities" },
];

function Counter({
  to,
  suffix,
  decimals = 0,
}: {
  to: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Results() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent" />
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(167,196,160,0.15),transparent_60%)] blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative"
            >
              <p className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-gradient-accent sm:text-[72px]">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-4 max-w-[200px] text-[13.5px] leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
