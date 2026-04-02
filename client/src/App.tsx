import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import AllProjects from "@/pages/AllProjects";
import NotFound from "@/pages/not-found";

function pathnameOnly(loc: string) {
  const noQuery = loc.split("?")[0] ?? loc;
  return noQuery.split("#")[0] || "/";
}

function ScrollToTopOnPathChange() {
  const [location] = useLocation();
  const path = pathnameOnly(location);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [path]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTopOnPathChange />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={AllProjects} />
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
