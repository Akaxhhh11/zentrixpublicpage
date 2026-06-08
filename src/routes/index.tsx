import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/zentrix/ThemeProvider";
import { Nav } from "@/components/zentrix/Nav";
import { Hero } from "@/components/zentrix/Hero";
import { Problem } from "@/components/zentrix/Problem";
import { Services } from "@/components/zentrix/Services";
import { Capabilities } from "@/components/zentrix/Capabilities";
import { Process } from "@/components/zentrix/Process";
import { CaseStudies } from "@/components/zentrix/CaseStudies";

import { FinalCTA } from "@/components/zentrix/FinalCTA";
import { Footer } from "@/components/zentrix/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentrix — Growth Infrastructure for Ambitious Companies" },
      {
        name: "description",
        content:
          "Zentrix is a growth infrastructure company that helps ambitious businesses scale through strategy, performance, creative intelligence, and operational visibility.",
      },
      { property: "og:title", content: "Zentrix — Growth Infrastructure" },
      {
        property: "og:description",
        content:
          "Build momentum, not just marketing. Zentrix engineers scalable growth systems for modern businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <Nav />
        <Hero />
        <Problem />
        <Services />
        <Capabilities />
        <Process />
        <CaseStudies />

        <FinalCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
