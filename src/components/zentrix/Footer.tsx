import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Solutions",
    links: [
      "Strategy Architecture",
      "Performance Acquisition",
      "Creative Intelligence",
      "Operational Visibility",
    ],
  },
  {
    title: "Company",
    links: ["About", "Process", "Case Studies"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <span className="text-[17px] font-semibold tracking-[0.2em] text-foreground">
                ZENTRIX
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              Zentrix helps businesses build intelligent growth systems through strategy, creative
              excellence, performance optimization, and operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/70">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:contactzentrixms@gmail.com"
                    className="group inline-flex items-center gap-3 text-[13px] text-muted-foreground transition-all duration-300 hover:text-foreground"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/20 transition-all duration-300 group-hover:scale-105 group-hover:border-[#EA4335]/30 group-hover:bg-[#EA4335]/10 group-hover:text-[#EA4335] group-hover:shadow-[0_0_12px_rgba(234,67,53,0.15)]">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <span>contactzentrixms@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zentrix.marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[13px] text-muted-foreground transition-all duration-300 hover:text-foreground"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/20 transition-all duration-300 group-hover:scale-105 group-hover:border-[#E1306C]/30 group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] group-hover:shadow-[0_0_12px_rgba(225,48,108,0.15)]">
                      <Instagram className="h-3.5 w-3.5" />
                    </div>
                    <span>@zentrix.marketing</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/1EYJycr9Ps/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[13px] text-muted-foreground transition-all duration-300 hover:text-foreground"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/20 transition-all duration-300 group-hover:scale-105 group-hover:border-[#1877F2]/30 group-hover:bg-[#1877F2]/10 group-hover:text-[#1877F2] group-hover:shadow-[0_0_12px_rgba(24,119,242,0.15)]">
                      <Facebook className="h-3.5 w-3.5" />
                    </div>
                    <span>Zentrix Marketing</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[11.5px] text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Zentrix. Growth infrastructure for ambitious companies.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
