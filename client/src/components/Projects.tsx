import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { homeFeaturedProjects } from "@/data/projects";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const panelCount = 1 + homeFeaturedProjects.length + 1;
  const sectionVh = Math.round(200 * (panelCount / 3));
  const xEndPercent = useMemo(
    () => -((panelCount - 1) / panelCount) * 100,
    [panelCount]
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${xEndPercent}%`]);

  return (
    <section
      id="projects"
      ref={targetRef}
      style={{ height: `${sectionVh}vh` }}
      className="relative bg-neutral-950"
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
          <div className="w-screen h-full flex flex-col justify-center px-8 md:px-24 flex-shrink-0 border-r border-white/5">
            <div className="max-w-2xl">
              <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-8 block">
                Selected Projects
              </span>
              <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Crafting digital <br />
                <span className="text-white/40">masterpieces.</span>
              </h3>
              <p className="text-xl text-white/60 max-w-lg leading-relaxed mb-12">
                A curated selection of projects that push the boundaries of
                interaction design and technical performance.
              </p>
              <div className="flex items-center gap-4 text-white/40 text-sm tracking-widest uppercase">
                <div className="w-12 h-[1px] bg-white/20"></div>
                Scroll to explore
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
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
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

          <div className=" h-full flex flex-col items-start justify-center flex-shrink-0 border-r border-white/5 px-8 md:px-24 pt-28 md:pt-36 bg-gradient-to-br from-neutral-950 via-neutral-950 to-accent/15">
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
