import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSeo } from "@/hooks/useSeo";

const FORMSPREE_ACTION = "https://formspree.io/f/mgopldvd";

export default function HireMe() {
  useSeo({
    title: "Hire me | MERN & React Native Developer",
    description:
      "Start a project — web apps, mobile, APIs, and product delivery. Send a brief and timeline.",
    path: "/hire",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black cursor-none">
      <div className="noise-overlay" />
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-[960px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
          </Link>
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase block mb-6">
            Contact
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
            Hire <span className="text-white/35">me</span>
          </h1>
          <p className="text-lg md:text-xl text-white/55 max-w-xl leading-relaxed mb-14">
            Tell me about your project, timeline, and budget. I’ll reply within
            a few business days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="rounded-[1.75rem] md:rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 lg:p-12"
        >
          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Thanks —{" "}
                <span className="text-gradient-blue">message sent.</span>
              </p>
              <p className="text-white/55 max-w-md mx-auto mb-8">
                I’ll get back to you soon.
              </p>
              <Button
                type="button"
                variant="outline"
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => setStatus("idle")}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />
              <input
                type="hidden"
                name="_subject"
                value="New hire inquiry from portfolio"
              />

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="hire-name" className="text-white/70">
                    Name
                  </Label>
                  <Input
                    id="hire-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="h-12 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hire-email" className="text-white/70">
                    Email
                  </Label>
                  <Input
                    id="hire-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="h-12 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hire-message" className="text-white/70">
                  Project details
                </Label>
                <Textarea
                  id="hire-message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you building, and how can I help?"
                  className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus-visible:ring-accent min-h-[160px] resize-y"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400/95">
                  Something went wrong. Check your Formspree setup or try again.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full sm:w-auto rounded-full h-12 px-10 bg-white text-black hover:bg-white/90 font-semibold"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
