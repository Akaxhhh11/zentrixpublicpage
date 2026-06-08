import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#cases" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
          ? "border-b border-border backdrop-blur-xl bg-background/70"
          : "border-b border-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <span className="text-[17px] font-semibold tracking-[0.2em] text-foreground">
            ZENTRIX
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:contactzentrixms@gmail.com?subject=Book%20a%20Strategy%20Call%20with%20Zentrix&body=Hi%20Zentrix%20team%2C%0A%0AI%27d%20like%20to%20book%20a%20strategy%20call.%0A%0AName%3A%0ACompany%3A%0AWhat%20I%20need%20help%20with%3A%0A%0AThanks!"
            className="group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-full border border-border bg-surface/60 px-4 text-[12.5px] font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/50"
          >
            <span className="relative z-10">Book Strategy Call</span>
            <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-highlight shadow-[0_0_10px_2px_var(--highlight)]" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
