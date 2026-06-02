import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";

const data = Array.from({ length: 24 }, (_, i) => ({
  x: i,
  v: 40 + Math.sin(i / 2.4) * 18 + i * 2.4 + Math.random() * 6,
}));

const data2 = Array.from({ length: 24 }, (_, i) => ({
  x: i,
  v: 30 + Math.cos(i / 3) * 12 + i * 1.4,
}));

export function DashboardMock() {
  return (
    <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[640px]">
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(200,245,176,0.18),transparent_60%)] blur-2xl" />

      {/* Main panel */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-8 top-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/80 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              Revenue Performance
            </p>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-white">$1.482M</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-highlight">
                <ArrowUpRight className="h-3 w-3" /> 38.4%
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

        <div className="mt-4 h-36">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C8F5B0" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#C8F5B0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                cursor={{ stroke: "rgba(255,255,255,0.15)" }}
                contentStyle={{
                  background: "rgba(13,13,13,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  fontSize: 11,
                }}
                labelStyle={{ color: "#A1A1AA" }}
              />
              <Area
                type="monotone"
                dataKey="v"
                stroke="#C8F5B0"
                strokeWidth={1.6}
                fill="url(#g1)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3 border-t border-white/5 pt-3">
          {[
            { l: "ROAS", v: "5.8x" },
            { l: "CAC", v: "$184" },
            { l: "LTV", v: "$2.4k" },
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

      {/* Side card top */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-0 top-44 w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary">
            <Users className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Customer Journey
            </p>
            <p className="text-[13px] font-semibold text-white">14,820 active</p>
          </div>
        </div>
        <div className="mt-3 h-16">
          <ResponsiveContainer>
            <AreaChart data={data2}>
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A7C4A0" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#A7C4A0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke="#A7C4A0"
                strokeWidth={1.4}
                fill="url(#g2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Bottom card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-6 w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
            Opportunity Pipeline
          </p>
          <span className="text-[10px] text-highlight">Live</span>
        </div>
        {[
          { c: "Enterprise SaaS", v: 92, t: "$184k" },
          { c: "Series B Fintech", v: 74, t: "$96k" },
          { c: "DTC Health", v: 58, t: "$42k" },
        ].map((row) => (
          <div key={row.c} className="mb-2 last:mb-0">
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="text-white/85">{row.c}</span>
              <span className="text-muted-foreground">{row.t}</span>
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
