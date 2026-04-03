import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects } from "@/data/projects";
import { useSeo } from "@/hooks/useSeo";

export default function AllProjects() {
  useSeo({
    title: "All projects | MERN & React Native Developer",
    description:
      "Full project archive — MERN stack, React Native apps, and product engineering work.",
    path: "/projects",
  });

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black cursor-none">
      <div className="noise-overlay" />
      <Navbar />
      <main className="pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-white/50 hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
          </Link>
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase block mb-6">
            Archive
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
            All <span className="text-white/35">projects</span>
          </h1>
          <p className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed">
            Full catalog of work — browse without the long horizontal scroll.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-16">
          {allProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.06, 0.24),
              }}
              className="group flex flex-col rounded-[1.75rem] md:rounded-[2rem] border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-colors duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10] shadow-2xl shadow-black/40">
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  } scale-100 group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out`}
                />
                <div className="absolute top-4 right-4 md:top-5 md:right-5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-20">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-thin text-white/20 tabular-nums">
                    {project.id}
                  </span>
                  <div className="h-px flex-1 bg-white/10 min-w-0" />
                  <span className="text-xs md:text-sm text-white/40 tracking-widest uppercase shrink-0">
                    {project.year}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/55 transition-all duration-500">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-white/55 mb-3 font-light italic line-clamp-2">
                  {project.subtitle}
                </p>
                <p className="text-sm md:text-base text-white/45 leading-relaxed mb-6 flex-1 line-clamp-4">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="w-fit flex items-center gap-3 text-white text-sm md:text-base font-medium pointer-events-none mt-auto"
                >
                  <span className="border-b border-white/30 pb-1">
                    View case study
                  </span>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <ArrowUpRight size={18} className="md:w-5 md:h-5" />
                  </div>
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
