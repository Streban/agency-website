import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import AllProjects from "@/pages/AllProjects";
import HireMe from "@/pages/HireMe";
import NotFound from "@/pages/not-found";
import CustomCursor from "@/components/CustomCursor";

function pathnameOnly(loc: string) {
  const noQuery = loc.split("?")[0] ?? loc;
  return noQuery.split("#")[0] || "/";
}

const NAV_SCROLL_EVENTS = ["popstate", "hashchange", "pushState", "replaceState"] as const;

function scrollToHashOrTop() {
  const hash = window.location.hash;
  if (hash.length > 1) {
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    const maxAttempts = 40;
    const step = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < maxAttempts) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return;
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function ScrollToHashOrTopOnNavigate() {
  const [location] = useLocation();
  const path = pathnameOnly(location);

  useEffect(() => {
    scrollToHashOrTop();
  }, [path]);

  useEffect(() => {
    for (const ev of NAV_SCROLL_EVENTS) {
      window.addEventListener(ev, scrollToHashOrTop);
    }
    return () => {
      for (const ev of NAV_SCROLL_EVENTS) {
        window.removeEventListener(ev, scrollToHashOrTop);
      }
    };
  }, []);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToHashOrTopOnNavigate />
      <CustomCursor />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={AllProjects} />
        <Route path="/hire" component={HireMe} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
