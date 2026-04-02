import { motion } from "framer-motion";

const technologies = [
  "React", "React Native", "Node.js", "TypeScript", 
  "Next.js", "Express", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "Framer Motion", "Redux", "GraphQL",
  "Docker", "AWS", "Figma", "Git"
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
         <p className="text-sm text-muted-foreground uppercase tracking-widest">Technologies & Tools</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-12 sm:gap-24 items-center min-w-full">
          {[...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl sm:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 sm:gap-24 items-center min-w-full">
          {[...technologies, ...technologies].map((tech, index) => (
            <span 
              key={index} 
              className="text-2xl sm:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
