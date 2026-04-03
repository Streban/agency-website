import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { homeFeaturedProjects } from "@/data/projects";

const workIntroStats = [
  { label: "Total experience", value: "5+", suffix: "years" },
  { label: "Projects delivered", value: "150+", suffix: "" },
  { label: "Success score", value: "98", suffix: "%" },
  { label: "Total clients", value: "50+", suffix: "" },
] as const;

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const panelCount = 1 + homeFeaturedProjects.length + 1;
  const sectionVh = Math.round(200 * (panelCount / 3));
  const xEndPercent = useMemo(
    () => -((panelCount - 1) / panelCount) * 100,
    [panelCount],
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xEndPercent}%`]);

  return (
    <section
      id="projects"
      ref={targetRef}
      style={{ height: `${sectionVh}vh` }}
      className="relative bg-neutral-950 scroll-mt-28"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-12 left-8 md:left-24 z-30 pointer-events-none mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-bold text-white tracking-tighter opacity-10 select-none">
              WORK
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-0 h-full items-center">
          <div className="w-screen h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 flex-shrink-0 border-r border-white/5">
            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(260px,380px)] gap-12 lg:gap-16 xl:gap-24 items-center">
              <div className="max-w-2xl">
                <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 block">
                  Selected Projects
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
                  Crafting digital <br />
                  <span className="text-white/40">masterpieces.</span>
                </h3>
                <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-8 md:mb-12">
                  A curated selection of projects that push the boundaries of
                  interaction design and technical performance.
                </p>
                <div className="flex items-center gap-4 text-white/40 text-sm tracking-widest uppercase">
                  <div className="w-12 h-[1px] bg-white/20 shrink-0" />
                  Scroll to explore
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:justify-self-end">
                {workIntroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 36,
                      scale: 0.9,
                      rotate: i % 2 === 0 ? -2.5 : 2.5,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true, margin: "-48px" }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                      mass: 0.85,
                      delay: i * 0.1,
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.045,
                      rotate: i % 2 === 0 ? -0.8 : 0.8,
                      transition: {
                        type: "spring",
                        stiffness: 440,
                        damping: 20,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-4 sm:p-5 md:p-6 shadow-lg shadow-black/30 transition-shadow duration-500 hover:border-accent/40 hover:shadow-[0_24px_48px_-16px_hsl(210_100%_45%/0.35)]"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -left-1/3 top-0 h-full w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/12 to-transparent opacity-0 translate-x-[-120%] transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-[180%]"
                    />
                    <div
                      aria-hidden
                      className="absolute bottom-0 left-3 right-3 h-px rounded-full bg-gradient-to-r from-transparent via-accent to-transparent origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                    <div className="relative z-[1]">
                      <p className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/45 leading-snug mb-3 transition-colors duration-500 group-hover:text-accent">
                        {stat.label}
                      </p>
                      <p className="flex flex-wrap items-baseline gap-1 text-3xl sm:text-4xl md:text-[2.75rem] font-bold tabular-nums tracking-tight leading-none">
                        <motion.span
                          className="inline-block text-white transition-[color,filter] duration-300 ease-out group-hover:text-accent group-hover:drop-shadow-[0_0_24px_hsl(210_100%_45%/0.45)]"
                          whileHover={{
                            scale: 1.06,
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 16,
                            },
                          }}
                        >
                          {stat.value}
                        </motion.span>
                        {stat.suffix ? (
                          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white/50 transition-colors duration-300 group-hover:text-white/70">
                            {stat.suffix}
                          </span>
                        ) : null}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {homeFeaturedProjects.map((project, index) => (
            <div
              key={project.id}
              className="w-screen h-full flex items-center justify-center p-4 md:p-24 flex-shrink-0 border-r border-white/5 relative group"
            >
              <div className="w-full h-full max-h-[80vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 h-full w-full relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-black/50">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${
                      project.imageFit === "contain" ? "object-contain" : "object-cover"
                    } transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out`}
                  />

                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full z-20">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col justify-center h-full pl-0 md:pl-12">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-5xl font-thin text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-[1px] w-full bg-white/10" />
                  </div>

                  <h2 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tighter leading-[0.9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                    {project.title}
                  </h2>

                  <h4 className="text-xl md:text-2xl text-white/60 mb-8 font-light italic">
                    {project.subtitle}
                  </h4>

                  <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md">
                    {project.description}
                  </p>

                  <button className="w-fit flex items-center gap-4 text-white text-lg font-medium group/btn">
                    <span className="border-b border-white/30 pb-1 group-hover/btn:border-white transition-colors">
                      View Case Study
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[99%] h-full flex flex-col items-start justify-center shrink-0 border-r border-white/5 px-8 md:px-24 pt-28 md:pt-36 pb-16 md:pb-24 bg-linear-to-br from-neutral-950 via-neutral-950 to-accent/15 mr-102">
            <div className="max-w-xl text-center">
              <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
                Full archive
              </span>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
                See every{" "}
                <span className="text-white/40">project in one place</span>
              </h3>
              <p className="text-lg text-white/50 leading-relaxed mb-12 mx-auto max-w-md">
                Continue on a dedicated page—vertical layout, faster to scan, no
                endless horizontal scroll.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 rounded-full pl-8 pr-2 py-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent/40 hover:shadow-[0_0_40px_-8px_hsl(210_100%_45%_/_0.45)] transition-all duration-300 group cursor-pointer no-underline"
              >
                <span className="text-sm font-semibold tracking-wide pr-1">
                  Show more projects
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/25 group-hover:scale-105 transition-transform duration-300">
                  <ChevronRight
                    size={22}
                    className="group-hover:translate-x-0.5 transition-transform"
                    strokeWidth={2.25}
                  />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
