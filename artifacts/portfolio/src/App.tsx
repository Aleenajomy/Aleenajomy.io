import React, { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MobileSections from "@/components/mobile/MobileSections";

const queryClient = new QueryClient();

function Home() {
  const isMobile = useIsMobile();
  // Which mobile accordion panel is open (mobile only; ignored on desktop).
  const [activeSection, setActiveSection] = useState<string | null>("about");

  const toggleSection = (id: string) =>
    setActiveSection((prev) => (prev === id ? null : id));

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ color: "var(--ink)" }}
    >
      <Navbar isMobile={isMobile} onNavigate={setActiveSection} />
      <main className="flex-1">
        <Hero />
        {isMobile ? (
          <MobileSections active={activeSection} onToggle={toggleSection} />
        ) : (
          <>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
