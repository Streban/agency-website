import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="border-b border-white/10 pb-20 mb-20">
          <h2 className="text-[10vw] leading-[0.85] font-bold tracking-tighter mb-10">
            LET'S WORK <br />
            <span className="text-white/30">TOGETHER</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
             <a 
               href="mailto:hello@example.com" 
               className="text-2xl md:text-4xl hover:underline underline-offset-8 decoration-1"
             >
               hello@portfolio.dev
             </a>
             
             <div className="flex gap-8">
               {["Instagram", "Twitter", "LinkedIn", "Github"].map((social) => (
                 <a key={social} href="#" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
                   {social}
                 </a>
               ))}
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between text-white/30 text-xs uppercase tracking-wider">
           <p>© 2026 Portfolio. All rights reserved.</p>
           <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
