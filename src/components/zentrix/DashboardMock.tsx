import { useEffect, useRef, useState } from "react";
import {
  Compass,
  Target,
  Sparkles,
  BarChart3,
  Workflow,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const pillars = [
  { icon: Compass, label: "Strategy Architecture", tag: "Aligned" },
  { icon: Target, label: "Performance Acquisition", tag: "Scaling" },
  { icon: Sparkles, label: "Creative Intelligence", tag: "Compounding" },
  { icon: BarChart3, label: "Analytics & Insight", tag: "Live" },
  { icon: Workflow, label: "Operational Systems", tag: "Synced" },
];

// ─── tiny keyframe injector (runs once) ───────────────────────────────────────
const STYLE_ID = "zx-anim-styles";
function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = `
    @keyframes zxMainDrop {
      0%   { opacity:0; transform:translateY(-28px); }
      100% { opacity:1; transform:translateY(0);     }
    }
    @keyframes zxPillarIn {
      0%   { opacity:0; transform:translateX(-14px); }
      100% { opacity:1; transform:translateX(0);     }
    }
    @keyframes zxPing {
      0%,100% { transform:scale(1);   opacity:.75; }
      50%      { transform:scale(2.3); opacity:0;   }
    }
  `;
  document.head.appendChild(el);
}

// ─── sub-card data ─────────────────────────────────────────────────────────────
const subCards = [
  {
    id: "northstar",
    eyebrow: "North Star",
    content: (
      <>
        <p
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: "#f0f0ee",
            lineHeight: 1.3,
            margin: "0 0 8px",
          }}
        >
          Predictable, compounding revenue.
        </p>
        <div
          style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#a8f075" }}
        >
          <ArrowUpRight size={11} color="#a8f075" />
          Quarter-over-quarter clarity
        </div>
      </>
    ),
  },
  {
    id: "cadence",
    eyebrow: "Operating Cadence",
    extra: <span style={{ fontSize: 9, color: "#a8f075" }}>Weekly</span>,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 4 }}>
        {[
          ["Strategy review", "Mon"],
          ["Performance pulse", "Wed"],
          ["Creative ship", "Fri"],
        ].map(([l, t]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5 }}>
            <span style={{ color: "rgba(255,255,255,.8)" }}>{l}</span>
            <span
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 4,
                padding: "1px 5px",
                fontSize: 9,
                color: "rgba(255,255,255,.45)",
              }}
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "compound",
    eyebrow: "Built to",
    content: (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "rgba(126,217,87,.12)",
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <Sparkles size={12} color="#a8f075" />
          </div>
          <div>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,.3)", margin: 0 }}>Built to</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#f0f0ee", margin: 0 }}>Compound</p>
          </div>
        </div>
        <p style={{ fontSize: 10, color: "rgba(240,240,238,.38)", marginTop: 8, lineHeight: 1.5 }}>
          Every system reinforces the next.
        </p>
      </>
    ),
  },
];

// ─── animation phases ──────────────────────────────────────────────────────────
// "hidden" → "stacked" → "bounce" → "spread"
const PHASE_HIDDEN = "hidden";
const PHASE_STACKED = "stacked";
const PHASE_BOUNCE = "bounce";
const PHASE_SPREAD = "spread";

function getCardStyle(index, phase) {
  const base = {
    position: "absolute",
    width: "calc(33.33% - 7px)",
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: "14px 13px",
    transformOrigin: "bottom center",
    willChange: "transform, opacity, left",
    boxSizing: "border-box",
  };

  // stacked positions (layered on top of each other, left-aligned)
  const stackedProps = [
    {
      opacity: 1,
      transform: "translateY(0px)   scale(1.00) rotateZ(0deg)",
      left: 0,
      zIndex: 3,
      transition: "opacity .4s, transform .5s cubic-bezier(.22,1,.36,1)",
    },
    {
      opacity: 1,
      transform: "translateY(7px)   scale(0.97) rotateZ(1.5deg)",
      left: 6,
      zIndex: 2,
      transition: "opacity .4s .06s, transform .5s .06s cubic-bezier(.22,1,.36,1)",
    },
    {
      opacity: 1,
      transform: "translateY(14px)  scale(0.94) rotateZ(3deg)",
      left: 12,
      zIndex: 1,
      transition: "opacity .4s .12s, transform .5s .12s cubic-bezier(.22,1,.36,1)",
    },
  ];

  // bounce: lift front card
  const bounceProps = [
    {
      ...stackedProps[0],
      transform: "translateY(-7px) scale(1.02) rotateZ(0deg)",
      transition: "transform .25s cubic-bezier(.34,1.56,.64,1)",
    },
    stackedProps[1],
    stackedProps[2],
  ];

  // spread: side-by-side
  const spreadLeft = ["0", "calc(33.33% + 3.5px)", "calc(66.66% + 7px)"];
  const spreadProps = [
    {
      opacity: 1,
      transform: "translateY(0) scale(1) rotateZ(0deg)",
      left: spreadLeft[0],
      zIndex: 3,
      transition: "left .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1)",
    },
    {
      opacity: 1,
      transform: "translateY(0) scale(1) rotateZ(0deg)",
      left: spreadLeft[1],
      zIndex: 2,
      transition:
        "left .55s .07s cubic-bezier(.22,1,.36,1), transform .55s .07s cubic-bezier(.22,1,.36,1)",
    },
    {
      opacity: 1,
      transform: "translateY(0) scale(1) rotateZ(0deg)",
      left: spreadLeft[2],
      zIndex: 1,
      transition:
        "left .55s .14s cubic-bezier(.22,1,.36,1), transform .55s .14s cubic-bezier(.22,1,.36,1)",
    },
  ];

  const hidden = {
    opacity: 0,
    transform: "translateY(14px) scale(0.94) rotateZ(3deg)",
    left: 12,
    zIndex: 1,
    transition: "none",
  };

  const phaseMap = {
    hidden: hidden,
    stacked: stackedProps[index],
    bounce: bounceProps[index],
    spread: spreadProps[index],
  };
  const p = phaseMap[phase] || hidden;

  return {
    ...base,
    opacity: p.opacity,
    transform: p.transform,
    left: p.left,
    zIndex: p.zIndex,
    transition: p.transition,
  };
}

// ─── component ────────────────────────────────────────────────────────────────
export function DashboardMock() {
  const [mainVisible, setMainVisible] = useState(false);
  const [pillarPhase, setPillarPhase] = useState(-1); // index up to which pillars are visible
  const [cardPhase, setCardPhase] = useState(PHASE_HIDDEN);
  const [hovered, setHovered] = useState(null); // card id being hovered
  const [zoneExpanded, setZoneExpanded] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const timers = useRef([]);
  const containerRef = useRef(null);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }
  function after(ms, fn) {
    timers.current.push(setTimeout(fn, ms));
  }

  function runSequence() {
    clearTimers();
    setMainVisible(false);
    setPillarPhase(-1);
    setCardPhase(PHASE_HIDDEN);
    setZoneExpanded(false);
    setShowHint(false);

    // 1. main card drops
    after(60, () => setMainVisible(true));

    // 2. pillars stagger in
    pillars.forEach((_, i) => {
      after(680 + i * 85, () => setPillarPhase(i));
    });

    // 3. cards appear stacked
    after(1380, () => {
      setCardPhase(PHASE_STACKED);
      setShowHint(true);
    });

    // 4. bounce
    after(1860, () => setCardPhase(PHASE_BOUNCE));
    after(2110, () => setCardPhase(PHASE_STACKED));

    // 5. explode to spread
    after(2360, () => {
      setCardPhase(PHASE_SPREAD);
      setZoneExpanded(true);
      setShowHint(false);
    });

    // 6. auto replay after 8.36 seconds total (6 seconds in final state)
    after(8360, () => {
      runSequence();
    });
  }

  useEffect(() => {
    injectStyles();

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runSequence();
        } else {
          clearTimers();
        }
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) obs.observe(containerRef.current);

    return () => {
      obs.disconnect();
      clearTimers();
    };
  }, []);

  // ── shared card hover style ──────────────────────────────────────────────────
  function cardHoverStyle(id) {
    return hovered === id && cardPhase === PHASE_SPREAD
      ? {
          borderColor: "rgba(126,217,87,0.45)",
          boxShadow: "0 0 0 1px rgba(126,217,87,0.14), 0 0 24px rgba(126,217,87,0.1)",
        }
      : {};
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        fontFamily: "'DM Sans',sans-serif",
        paddingBottom: 24,
      }}
    >
      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          zIndex: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,245,176,0.1), transparent 60%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* ── MAIN CARD ── */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: "22px 20px 20px",
          position: "relative",
          zIndex: 10,
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? "translateY(0)" : "translateY(-28px)",
          animation: mainVisible ? "zxMainDrop .65s cubic-bezier(.22,1,.36,1) forwards" : "none",
          transition: "border-color .3s, box-shadow .3s",
          boxSizing: "border-box",
        }}
      >
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* pulse dot */}
            <span
              style={{
                position: "relative",
                width: 8,
                height: 8,
                flexShrink: 0,
                display: "inline-block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "#7ed957",
                  animation: "zxPing 1.8s ease-out infinite",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "#7ed957",
                }}
              />
            </span>
            <p
              style={{
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: ".2em",
                color: "var(--muted-foreground)",
                margin: 0,
              }}
            >
              Growth System · Online
            </p>
          </div>
          <span
            style={{
              background: "var(--border)",
              borderRadius: 6,
              padding: "3px 9px",
              fontSize: 10,
              color: "var(--foreground)",
            }}
          >
            v3.2
          </span>
        </div>

        {/* title */}
        <h3
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: 19,
            fontWeight: 700,
            color: "var(--foreground)",
            margin: "16px 0 4px",
            letterSpacing: "-.02em",
            lineHeight: 1.25,
          }}
        >
          Five pillars. One operating system.
        </h3>
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.55, margin: 0 }}>
          Every layer of growth — engineered to compound, not collide.
        </p>

        {/* pillars */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
          {pillars.map((p, i) => (
            <div
              key={p.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 11,
                padding: "9px 13px",
                opacity: pillarPhase >= i ? 1 : 0,
                transform: pillarPhase >= i ? "translateX(0)" : "translateX(-14px)",
                animation: pillarPhase >= i ? "zxPillarIn .42s ease forwards" : "none",
                transition: "border-color .25s, background .25s",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div
                  style={{
                    width: 27,
                    height: 27,
                    background: "rgba(126,217,87,.1)",
                    border: "1px solid rgba(126,217,87,.2)",
                    borderRadius: 8,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <p.icon size={13} color="#7ed957" strokeWidth={2} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--foreground)" }}>
                  {p.label}
                </span>
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#a8f075",
                }}
              >
                <CheckCircle2 size={11} color="#a8f075" strokeWidth={2.5} />
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── STACKED / SPREAD ZONE ── */}
      <div
        style={{
          position: "relative",
          marginTop: 12,
          height: zoneExpanded ? 130 : 90,
          transition: "height .6s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {subCards.map((card, i) => (
          <div
            key={card.id}
            style={{
              ...getCardStyle(i, cardPhase),
              ...(cardPhase === PHASE_SPREAD ? cardHoverStyle(card.id) : {}),
              transition:
                getCardStyle(i, cardPhase).transition + ", border-color .3s, box-shadow .3s",
            }}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: ".18em",
                  color: "var(--muted-foreground)",
                  margin: 0,
                }}
              >
                {card.eyebrow}
              </p>
              {card.extra || null}
            </div>
            {card.content}
          </div>
        ))}

        {/* stack depth dots */}
        {showHint && (
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: i === 0 ? "#a8f075" : "rgba(126,217,87,.3)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
