import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#projects" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/#about" },
    { name: "Stack", href: "/#stack" },
  ] as const;

  const linkClass = (scrolled: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
      scrolled
        ? "text-white/70 hover:text-white hover:bg-white/10"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 transition-all duration-500 ease-in-out
            ${isScrolled 
              ? "w-[90%] md:w-[600px] h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20" 
              : "w-full container bg-transparent h-20"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight z-50 flex items-center gap-1 no-underline text-inherit">
            <span className="text-white">Dev</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(isScrolled)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button
              asChild
              size="sm"
              className={`
                rounded-full font-medium transition-all duration-300 no-underline
                ${isScrolled
                  ? "bg-white text-black hover:bg-white/90 h-9 px-5"
                  : "bg-white text-black hover:bg-white/90 h-10 px-6"
                }
              `}
            >
              <Link href="/hire">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.href}
                  className="text-3xl font-medium text-white tracking-tight block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-white hover:bg-accent/90 mt-8 px-8 no-underline"
              >
                <Link
                  href="/hire"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
