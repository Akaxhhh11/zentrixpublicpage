import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";
import { SectionHeader } from "./SectionHeader";
import { Activity, BarChart3, GitBranch, Layers3, Radar } from "lucide-react";

const a = Array.from({ length: 20 }, (_, i) => ({
  x: i,
  v: 30 + Math.sin(i / 2) * 14 + i * 1.6,
}));
const b = Array.from({ length: 12 }, (_, i) => ({
  x: i,
  v: 20 + Math.random() * 40 + i * 2,
}));
const c = Array.from({ length: 18 }, (_, i) => ({
  x: i,
  v: 50 + Math.cos(i / 1.7) * 20,
}));

export function Platform() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,245,176,0.14),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-25 mask-fade-edges" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Platform Showcase"
          title={
            <>
              A complete view of <span className="text-gradient-accent">growth.</span>
            </>
          }
          subtitle="Every campaign. Every opportunity. Every decision. Connected in one intelligent ecosystem."
        />

        <div className="relative mx-auto mt-20 aspect-[16/10] max-w-6xl">
          {/* Main panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="absolute inset-x-[5%] top-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d]/85 p-6 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Zentrix · Growth Intelligence
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-highlight shadow-[0_0_8px_var(--highlight)]" />
                Synced 2s ago
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 pt-5">
              <Panel
                className="col-span-7"
                icon={Activity}
                label="Growth Analytics"
                value="+215%"
                delta="Traffic"
              >
                <div className="h-32">
                  <ResponsiveContainer>
                    <AreaChart data={a}>
                      <defs>
                        <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#C8F5B0" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="#C8F5B0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="#C8F5B0"
                        strokeWidth={1.6}
                        fill="url(#pg1)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Panel>

              <Panel
                className="col-span-5"
                icon={BarChart3}
                label="Growth Trends"
                value="+24.6%"
                delta="MoM"
              >
                <div className="h-32">
                  <ResponsiveContainer>
                    <BarChart data={b}>
                      <Bar dataKey="v" fill="#A7C4A0" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Panel>

              <Panel
                className="col-span-5"
                icon={GitBranch}
                label="Customer Journey"
                value="14.8k"
                delta="Active"
              >
                <div className="space-y-2 pt-1">
                  {[
                    { l: "Awareness", v: 92 },
                    { l: "Consideration", v: 71 },
                    { l: "Purchase", v: 48 },
                    { l: "Loyalty", v: 34 },
                  ].map((r) => (
                    <div key={r.l}>
                      <div className="mb-1 flex justify-between text-[10.5px] text-white/70">
                        <span>{r.l}</span>
                        <span className="text-muted-foreground">{r.v}%</span>
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
              </Panel>

              <Panel
                className="col-span-7"
                icon={Radar}
                label="Performance Insights"
                value="5.8x"
                delta="ROAS"
              >
                <div className="h-32">
                  <ResponsiveContainer>
                    <LineChart data={c}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="#C8F5B0"
                        strokeWidth={1.6}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Panel>
            </div>
          </motion.div>

          {/* Floating mini card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 bottom-6 hidden w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 backdrop-blur-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] md:block"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-highlight/15 text-highlight">
                <Layers3 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Opportunity
                </p>
                <p className="text-[12.5px] font-semibold text-white">+18 new leads</p>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Enterprise tier · qualified in last 24h
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -right-2 bottom-20 hidden w-[200px] rounded-2xl border border-white/10 bg-[#0d0d0d]/90 p-4 backdrop-blur-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Forecast accuracy
            </p>
            <p className="mt-1 text-2xl font-semibold text-white">99.2%</p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-primary to-highlight" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Panel({
  className = "",
  icon: Icon,
  label,
  value,
  delta,
  children,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  delta: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-primary">
            <Icon className="h-3.5 w-3.5" />
          </div>
          <span className="text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </span>
        </div>
        <div className="text-right">
          <p className="text-[14px] font-semibold text-white">{value}</p>
          <p className="text-[10px] text-highlight">{delta}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
