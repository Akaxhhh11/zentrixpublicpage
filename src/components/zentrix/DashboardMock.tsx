import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap, Target, BarChart3 } from "lucide-react";

export function DashboardMock() {
  return (
    <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[640px]">
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.18),transparent_60%)] blur-2xl" />

      {/* Main panel — Growth Performance */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-8 top-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/80 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              Growth Performance
            </p>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-white">+248%</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-highlight">
                <ArrowUpRight className="h-3 w-3" /> vs last quarter
              </span>
            </div>
          </div>
          <div className="flex gap-1.5">
            {["7d", "30d", "QTD"].map((t, i) => (
              <span
                key={t}
                className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                  i === 1
                    ? "bg-white/10 text-white"
                    : "bg-white/[0.03] text-muted-foreground"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { l: "Website Traffic", v: "+215%", i: BarChart3 },
            { l: "Conversions", v: "+180%", i: Target },
            { l: "Engagement", v: "+95%", i: TrendingUp },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-3"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <s.i className="h-3 w-3" />
                <p className="text-[9.5px] uppercase tracking-[0.14em]">
                  {s.l}
                </p>
              </div>
              <p className="mt-1.5 text-lg font-semibold text-gradient-accent">
                {s.v}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/5 pt-4">
          {[
            { l: "ROAS Boost", v: "+160%" },
            { l: "Bounce Rate", v: "−42%" },
            { l: "Repeat Visits", v: "3.6x" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {s.l}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Side card top — Audience */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 top-56 w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary">
            <Users className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Active Audience
            </p>
            <p className="text-[13px] font-semibold text-white">14,820 reached</p>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { l: "Organic", v: 78 },
            { l: "Paid Social", v: 62 },
            { l: "Email", v: 44 },
          ].map((r) => (
            <div key={r.l}>
              <div className="mb-1 flex justify-between text-[10.5px]">
                <span className="text-white/80">{r.l}</span>
                <span className="text-highlight">{r.v}%</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
                  style={{ width: `${r.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom card — Campaign Health */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-6 w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
            Campaign Health
          </p>
          <span className="text-[10px] text-highlight">Live</span>
        </div>
        {[
          { c: "SEO & Content", v: 92, t: "+215%" },
          { c: "Social Campaigns", v: 84, t: "+180%" },
          { c: "Email & Retargeting", v: 76, t: "+95%" },
        ].map((row) => (
          <div key={row.c} className="mb-2 last:mb-0">
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="text-white/85">{row.c}</span>
              <span className="text-highlight">{row.t}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
                style={{ width: `${row.v}%` }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Floating mini-badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute right-10 bottom-16 flex items-center gap-2 rounded-full border border-white/10 bg-[#0d0d0d]/90 px-3 py-2 backdrop-blur-xl"
      >
        <div className="grid h-7 w-7 place-items-center rounded-full bg-highlight/15">
          <Zap className="h-3.5 w-3.5 text-highlight" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Conv. Rate</p>
          <p className="text-[12px] font-semibold text-white">+24.6%</p>
        </div>
        <TrendingUp className="ml-2 h-3.5 w-3.5 text-highlight" />
      </motion.div>
    </div>
  );
}
