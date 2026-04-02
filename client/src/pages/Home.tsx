import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Footer />
    </div>
  );
}
