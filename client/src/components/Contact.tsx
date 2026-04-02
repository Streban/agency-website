import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's build something <br />
            <span className="text-gradient-blue">extraordinary.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about the latest tech, I'm always open to new opportunities.
          </p>

          <a 
            href="mailto:hello@example.com"
            className="inline-block px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-white/10 mb-16"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-8">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Dev Portfolio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
