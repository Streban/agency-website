import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background - Kinetic Typography / Abstract */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-20 bg-white/30" />
            <span className="text-sm font-medium tracking-widest uppercase text-white/60">Portfolio 2026</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-white mix-blend-difference"
            >
              CREATIVE
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-white/30"
            >
              DEVELOPER
            </motion.h1>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-end mt-6 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-8">
                Specializing in <span className="text-white">React Native</span> &{" "}
                <span className="text-white">MERN Stack</span>. Building digital products that
                define the future.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/#contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-black shadow-lg shadow-black/25 no-underline transition-all duration-300 hover:bg-neutral-100 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black group"
                  >
                    Get started
                    <ArrowRight
                      size={18}
                      strokeWidth={2.25}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm no-underline transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_40px_-8px_hsl(0_0%_100%_/_0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    View our work
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.button
              type="button"
              aria-label="Scroll to explore"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden md:flex shrink-0 w-32 h-32 rounded-full border border-white/20 items-center justify-center group hover:bg-white hover:text-black transition-colors duration-500"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ArrowDownRight className="w-10 h-10 transform group-hover:rotate-45 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
