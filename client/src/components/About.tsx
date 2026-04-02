import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers, Smartphone, Layout, Zap, Cpu, LucideIcon, GitBranch, Terminal, Globe, Server, Database } from "lucide-react";
import { MouseEvent, useRef, ReactNode, useEffect, useState } from "react";

// --- Components ---

interface TiltCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  className?: string;
  delay: number;
  children?: ReactNode;
  large?: boolean;
}

const TiltCard = ({ title, desc, icon: Icon, className, delay, children, large }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const sheenGradient = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.1),
    transparent 80%
  )`;

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={ref}
      className={`group relative h-full w-full rounded-[2rem] bg-zinc-950/80 border border-white/5 backdrop-blur-md overflow-hidden ${className}`}
    >
      {/* Dynamic Sheen Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 mix-blend-overlay"
        style={{
          background: sheenGradient,
        }}
      />

      {/* Content Layer */}
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} 
        className="relative z-10 h-full flex flex-col p-8 md:p-10 pointer-events-none"
      >
        <div className="flex items-start justify-between mb-auto">
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:bg-white/10 transition-colors duration-500">
                <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
             </div>
             {large && (
                 <div className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-[10px] uppercase tracking-widest text-white/40">
                    System Design
                 </div>
             )}
        </div>
        
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-sm group-hover:text-zinc-200 transition-colors">
            {desc}
          </p>
        </div>
      </div>

       {/* Background/Visual Content - Interactive Layer */}
      <div className="absolute inset-0 z-0">
        {children}
      </div>
    </motion.div>
  );
};

// --- Visualization Components ---

const ArchitectureViz = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
       <div className="relative w-full h-full">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/20 bg-black/50 flex items-center justify-center z-10">
             <Server className="w-8 h-8 text-white/50" />
             {/* Pulsing Rings */}
             <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
             <div className="absolute -inset-4 rounded-full border border-white/5 animate-pulse opacity-20" />
          </div>

          {/* Nodes */}
          {[0, 1, 2, 3, 4].map((i) => {
             const angle = (i * 72) * (Math.PI / 180);
             const radius = 120;
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;
             
             return (
                 <motion.div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center z-10"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1, type: "spring" }}
                 >
                    <Database className="w-4 h-4 text-white/30" />
                    {/* Connecting Line */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none overflow-visible -z-10">
                        <motion.line 
                           x1="50%" y1="50%" x2="50%" y2="50%" // Start at center
                           animate={{ 
                             x2: 120 - x, // Incorrect logic simplified for demo visually
                             y2: 120 - y 
                           }}
                           stroke="rgba(255,255,255,0.1)" 
                           strokeWidth="1" 
                        />
                    </svg>
                 </motion.div>
             )
          })}
          
          {/* Animated Data Packets */}
          <div className="absolute inset-0 animate-spin-slow">
             <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 opacity-30" />
          </div>
       </div>
    </div>
  );
};

const GlobeViz = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-white/10 opacity-20 animate-spin-slow-reverse">
                <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-full h-full text-white/5 p-8" />
                </div>
            </div>
        </div>
    )
}

// --- Main Component ---

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-40 bg-black relative z-10 overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-6">
              Engineering <br />
              <span className="text-zinc-500">Capabilities.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-col gap-4 text-right">
             <div className="h-[1px] w-full bg-white/20" />
             <p className="text-white/40 uppercase tracking-widest text-sm">System Architecture & Design</p>
          </div>
        </div>

        {/* New Grid Layout - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto">
          
          {/* Main Feature: Architecture */}
          <div className="md:col-span-6 lg:col-span-8 h-[500px]">
            <TiltCard 
              title="Scalable Architecture" 
              desc="Designing resilient systems that scale. Microservices, Serverless functions, and Edge computing strategies."
              icon={Layers}
              delay={0.1}
              className="bg-zinc-900"
              large
            >
              <ArchitectureViz />
            </TiltCard>
          </div>

          {/* Secondary: Global Reach */}
          <div className="md:col-span-6 lg:col-span-4 h-[500px]">
             <TiltCard 
               title="Global Performance" 
               desc="Edge-cached content delivery and distributed database systems for low-latency access worldwide."
               icon={Globe}
               delay={0.2}
               className="bg-zinc-900"
             >
                <GlobeViz />
             </TiltCard>
          </div>

          {/* Third: Mobile */}
          <div className="md:col-span-3 lg:col-span-4 h-[350px]">
             <TiltCard 
               title="Native Mobile" 
               desc="Fluid 60fps experiences on iOS and Android using React Native and Expo."
               icon={Smartphone}
               delay={0.3}
               className="bg-zinc-900"
             >
                <div className="absolute right-0 bottom-0 w-48 h-48 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-[100px]" />
             </TiltCard>
          </div>

          {/* Fourth: UI Engineering */}
          <div className="md:col-span-3 lg:col-span-4 h-[350px]">
             <TiltCard 
               title="UI Engineering" 
               desc="Component-driven development with Storybook, atomic design, and robust design systems."
               icon={Layout}
               delay={0.4}
               className="bg-zinc-900"
             >
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="grid grid-cols-2 gap-2 transform rotate-12 scale-150">
                        <div className="w-16 h-16 rounded-lg border border-white bg-white/10" />
                        <div className="w-16 h-16 rounded-lg border border-white bg-white/5" />
                        <div className="w-16 h-16 rounded-lg border border-white bg-white/5" />
                        <div className="w-16 h-16 rounded-lg border border-white bg-white/20" />
                    </div>
                 </div>
             </TiltCard>
          </div>

           {/* Fifth: Modern Stack */}
           <div className="md:col-span-6 lg:col-span-4 h-[350px]">
             <TiltCard 
               title="Modern Stack" 
               desc="Next.js 14, TypeScript, Tailwind, and PostgreSQL."
               icon={Cpu}
               delay={0.5}
               className="bg-zinc-900"
             >
                 <div className="absolute right-8 bottom-8 flex gap-2 opacity-20">
                    <div className="w-2 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-8 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    <div className="w-2 h-14 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                 </div>
             </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
