import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { useSeo } from "@/hooks/useSeo";

export default function Home() {
  useSeo({
    title: "MERN & React Native Developer | Portfolio",
    description:
      "Premium portfolio for a MERN and React Native developer — sophisticated motion, Apple-inspired craft, and full-stack delivery.",
    path: "/",
  });

  useEffect(() => {
    const origin = window.location.origin;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jsonld-site";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          name: "Website & Mobile App Developer Portfolio",
          url: origin,
        },
        {
          "@type": "Person",
          name: "MERN & React Native Developer",
          url: origin,
          jobTitle: "Full-stack & React Native developer",
          knowsAbout: [
            "React",
            "Node.js",
            "MongoDB",
            "React Native",
            "TypeScript",
          ],
        },
      ],
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black cursor-none">
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
