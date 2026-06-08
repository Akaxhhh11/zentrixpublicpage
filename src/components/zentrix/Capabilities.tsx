"use client";

import { useEffect, useRef, useCallback } from "react";
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

// tiny fan so back cards peek out behind front card
const FAN = [
  { dx: 0, dy: 0, r: 0, z: 4 },
  { dx: 6, dy: 6, r: 2.2, z: 3 },
  { dx: -5, dy: 11, r: -1.8, z: 2 },
  { dx: 8, dy: 16, r: 2.8, z: 1 },
];

const CARD_BASE_STYLE = [
  "position:absolute",
  "background:var(--card)",
  "border:1px solid var(--border)",
  "border-radius:16px",
  "padding:28px",
  "overflow:hidden",
  "cursor:default",
  "box-sizing:border-box",
  "will-change:left,top,transform",
].join(";");

const GAP = 20;

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const after = (ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const runSequence = useCallback(() => {
    clear();

    const stage = stageRef.current;
    const dots = dotsRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!stage || cards.length < 4) return;

    const W = stage.offsetWidth;
    const cardW = (W - GAP) / 2;

    // ── Step 1: lay cards out naturally (at final card width) to get real height ──
    cards.forEach((c) => {
      c.style.cssText = `${CARD_BASE_STYLE};position:relative;width:${cardW}px;opacity:0;transition:none;`;
    });

    // read height after browser has laid out content
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const h0 = cards[0].offsetHeight;
        const h1 = cards[1].offsetHeight;
        const h2 = cards[2].offsetHeight;
        const h3 = cards[3].offsetHeight;

        const row1H = Math.max(h0, h1);
        const row2H = Math.max(h2, h3);
        const totalH = row1H + row2H + GAP;

        stage.style.height = `${totalH}px`;

        // center of the stage
        const cx = W / 2 - cardW / 2;
        const cy = totalH / 2 - h0 / 2;

        // final absolute positions for each card in 2×2 grid
        const finals = [
          { l: 0, t: 0 },
          { l: cardW + GAP, t: 0 },
          { l: 0, t: row1H + GAP },
          { l: cardW + GAP, t: row1H + GAP },
        ];

        // ── Step 2: place all at center, stacked, invisible, no transition ──
        cards.forEach((c, i) => {
          const f = FAN[i];
          c.style.cssText = `
            ${CARD_BASE_STYLE};
            width:${cardW}px;
            left:${cx + f.dx}px;
            top:${cy + f.dy}px;
            z-index:${f.z};
            opacity:0;
            transform:rotate(${f.r}deg) scale(1);
            transition:none;
          `;
        });

        if (dots) dots.style.opacity = "1";

        // ── Step 3: fade stack in ──
        after(80, () => {
          cards.forEach((c, i) => {
            c.style.transition = `opacity 0.45s ${i * 0.07}s ease, transform 0.55s ${i * 0.07}s cubic-bezier(.22,1,.36,1)`;
            c.style.opacity = "1";
          });
        });

        // ── Step 4: bounce front card ──
        after(1000, () => {
          cards[0].style.transition =
            "transform 0.26s cubic-bezier(.34,1.56,.64,1), top 0.26s cubic-bezier(.34,1.56,.64,1)";
          cards[0].style.top = `${cy + FAN[0].dy - 12}px`;
          cards[0].style.transform = "rotate(0deg) scale(1.035)";
        });
        after(1270, () => {
          cards[0].style.transition = "transform 0.22s ease, top 0.22s ease";
          cards[0].style.top = `${cy + FAN[0].dy}px`;
          cards[0].style.transform = "rotate(0deg) scale(1)";
        });

        // ── Step 5: explode to final grid positions ──
        after(1580, () => {
          if (dots) dots.style.opacity = "0";

          cards.forEach((c, i) => {
            const delay = i * 0.07;
            c.style.transition = [
              `left 0.65s ${delay}s cubic-bezier(.22,1,.36,1)`,
              `top 0.65s ${delay}s cubic-bezier(.22,1,.36,1)`,
              `transform 0.65s ${delay}s cubic-bezier(.22,1,.36,1)`,
              "border-color 0.3s",
              "box-shadow 0.3s",
            ].join(",");
            c.style.left = `${finals[i].l}px`;
            c.style.top = `${finals[i].t}px`;
            c.style.transform = "rotate(0deg) scale(1)";
            c.style.zIndex = "1";
            c.style.width = `${cardW}px`;
          });
        });

        // ── Step 6: Loop after delay (e.g. 6 seconds after final state: 1580 + 6000 = 7580ms) ──
        after(7580, () => {
          runSequence();
        });
      });
    });
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence();
        } else {
          clear();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      obs.disconnect();
      clear();
    };
  }, [runSequence]);

  return (
    <section ref={sectionRef} id="solutions" className="relative py-28 sm:py-36">
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

        {/* ── STAGE — fixed height set by JS ── */}
        <div className="mt-16 relative" ref={stageRef}>
          {caps.map((cap, i) => (
            <div
              key={cap.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                position: "absolute",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "28px",
                overflow: "hidden",
                cursor: "default",
                boxSizing: "border-box",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(126,217,87,0.42)";
                el.style.boxShadow =
                  "0 0 0 1px rgba(126,217,87,0.08), 0 0 32px rgba(126,217,87,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "none";
              }}
            >
              {/* glow blob — toggled via JS in onMouseEnter/Leave on parent */}
              <div
                className="cap-glow"
                style={{
                  position: "absolute",
                  top: -56,
                  right: -56,
                  width: 176,
                  height: 176,
                  borderRadius: "50%",
                  background: "rgba(126,217,87,0.09)",
                  filter: "blur(36px)",
                  opacity: 0,
                  transition: "opacity 0.5s",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    "linear-gradient(90deg,transparent,rgba(126,217,87,0.28),transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                  pointerEvents: "none",
                }}
                className="cap-shine"
              />

              {/* card content */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    flexShrink: 0,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.04)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <cap.icon size={20} strokeWidth={1.8} color="#7ed957" />
                </div>
                <span
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    background: "rgba(255,255,255,0.03)",
                    padding: "2px 10px",
                    fontSize: 10,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {cap.tag}
                </span>
              </div>

              <h3
                style={{
                  position: "relative",
                  marginTop: 24,
                  marginBottom: 0,
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.25,
                  color: "var(--foreground)",
                  fontFamily: "var(--font-syne, sans-serif)",
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  position: "relative",
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--muted-foreground)",
                }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* depth dots */}
        <div
          ref={dotsRef}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            marginTop: 16,
            opacity: 0,
            transition: "opacity 0.4s",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: 4,
                width: i === 0 ? 14 : 4,
                borderRadius: 100,
                background: i === 0 ? "#a8f075" : "rgba(126,217,87,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
