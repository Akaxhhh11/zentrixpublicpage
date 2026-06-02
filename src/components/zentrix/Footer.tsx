import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Solutions",
    links: ["Strategy Architecture", "Performance Acquisition", "Creative Intelligence", "Operational Visibility"],
  },
  {
    title: "Company",
    links: ["About", "Process", "Case Studies", "Insights"],
  },
  {
    title: "Connect",
    links: ["LinkedIn", "X / Twitter", "Email", "Careers"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
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
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              Zentrix helps businesses build intelligent growth systems through strategy,
              creative excellence, performance optimization, and operational visibility.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13px] text-muted-foreground transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-6 text-[11.5px] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Zentrix. Growth infrastructure for ambitious companies.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
