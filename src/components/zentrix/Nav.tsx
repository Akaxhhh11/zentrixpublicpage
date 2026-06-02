import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#cases" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 24)), [scrollY]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] backdrop-blur-xl bg-background/70"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-highlight to-primary opacity-90" />
            <div className="absolute inset-[3px] rounded-[5px] bg-background" />
            <div className="absolute inset-[6px] rounded-sm bg-gradient-to-br from-highlight to-primary" />
          </div>
          <span className="text-[15px] font-semibold tracking-[0.18em] text-white">
            ZENTRIX
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 text-[12.5px] font-medium text-white backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/[0.07]"
        >
          <span className="relative z-10">Book Strategy Call</span>
          <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-highlight shadow-[0_0_10px_2px_var(--highlight)]" />
        </a>
      </div>
    </motion.header>
  );
}
