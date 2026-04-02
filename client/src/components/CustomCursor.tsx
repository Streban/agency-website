import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

let lastClientPointer = { x: 0, y: 0 };

function pathnameOnly(loc: string) {
  const noQuery = loc.split("?")[0] ?? loc;
  return noQuery.split("#")[0] || "/";
}

export default function CustomCursor() {
  const [location] = useLocation();
  const [mousePosition, setMousePosition] = useState(() => ({ ...lastClientPointer }));
  const [isHovering, setIsHovering] = useState(false);

  const path = pathnameOnly(location);
  const active =
    path === "/" || path === "/projects" || path === "/hire";

  useEffect(() => {
    if (!active) return;

    setMousePosition({ ...lastClientPointer });

    const updateMousePosition = (e: MouseEvent) => {
      lastClientPointer = { x: e.clientX, y: e.clientY };
      setMousePosition(lastClientPointer);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const t = e.target;
      if (
        t instanceof Element &&
        t.closest("a, button, input, textarea, select, label")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [active]);

  if (!active) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "white" : "transparent",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    />
  );
}
