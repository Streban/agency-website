import project1 from "../assets/project1-lg.webp";
import project2 from "../assets/project2-lg.webp";
import project3 from "../assets/project3-lg.webp";
import project4 from "../assets/website3.webp";
import project5 from "../assets/website5.webp";
import project6 from "../assets/website4.webp";
import project7 from "../assets/2.webp";
import project8 from "../assets/1-1.webp";
import project9 from "../assets/12.webp";
import project10 from "../assets/website1.webp";
import project11 from "../assets/website2.webp";
import project12 from "../assets/3s.webp";
import project13 from "../assets/Screenshot 2026-04-03 000227.webp";
import project14 from "../assets/Screenshot 2026-04-03 000501.webp";
import project15 from "../assets/Screenshot 2026-04-03 001039.webp";
import project16 from "../assets/Screenshot 2026-04-03 002437.webp";
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  year: string;
  description: string;
};

export const allProjects: Project[] = [
  {
    id: "01",
    title: "LUMINA",
    subtitle: "Digital Commerce Experience",
    category: "E-Commerce",
    image: project1,
    year: "2024",
    description:
      "Redefining digital luxury with immersive interactions and seamless checkout flows."
  },
  {
    id: "02",
    title: "NEXUS",
    subtitle: "Financial Intelligence",
    category: "Fintech",
    image: project2,
    year: "2023",
    description:
      "Real-time data visualization platform for next-generation market analysis."
  },
  {
    id: "03",
    title: "VANGUARD",
    subtitle: "Architectural Portfolio",
    category: "Portfolio",
    image: project3,
    year: "2023",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "04",
    title: "PlantElite",
    subtitle: "Best Home For Plant Lovers",
    category: "E-Commerce",
    image: project4,
    year: "2025",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "06",
    title: "Grapi - Furtinture ",
    subtitle: "E-Commerce Furniture Store",
    category: "E-Commerce",
    image: project5,
    year: "2025",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "07",
    title: "Voyagr - Travel Agency ",
    subtitle: "Travel Agency Website",
    category: "Portfolio",
    image: project6,
    year: "2024",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "08",
    title: "castIR",
    subtitle: "security agency website",
    category: "security agency",
    image: project7,
    year: "2024",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "09",
    title: "Alice",
    subtitle: "Ai Chatbot",
    category: "Artificial Intelligence",
    image: project8,
    year: "2022",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "10",
    title: "onyXFlow",
    subtitle: "Ai assistant",
    category: "Artificial Intelligence",
    image: project9,
    year: "2025",
    description:
      "Supercharge enterprise execution. Changes how businesses handle repetitive tasks, fragmented systems, and manual approvals for streamlined..."
  },
  {
    id: "11",
    title: "invoice Generator",
    subtitle: "e-commerce invoice manager",
    category: "E-Commerce",
    image: project10,
    year: "2023",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "12",
    title: "DeflexAi",
    subtitle: "Ai Tools",
    category: "Artificial Intelligence",
    image: project11,
    year: "2023",
    description:
      "Brutalist design system showcasing minimalist architectural masterpieces."
  },
  {
    id: "13",
    title: "Vennture",
    subtitle: "Ai Tools",
    category: "Artificial Intelligence",
    image: project12,
    year: "2023",
    description:
      "AI-powered growth planning platform that helps you nurture meaningful relationships, plan strategies with purpose, and expand your..."
  },
  {
      id: "14",
      title: "WaterSwap",
      subtitle: "funding platform",
      category: "crowdfunding platform",
      image: project14,
      year: "2023",
      description:
      "A world facing rising water scarcity needs more than goodwill — it needs transparency, verification, and a trusted pathway to fund real water outcomes WaterSwap connects global support to verified water-impact projects, delivering measurable change backed by internationally recognised standard"
    },
    {
      id: "16",
      title: "MockTial",
      subtitle: "bar showcase website",
      category: "restaurant website",
      image: project15,
      year: "2023",
      description:
      "A world facing rising water scarcity needs more than goodwill — it needs transparency, verification, and a trusted pathway to fund real water outcomes WaterSwap connects global support to verified water-impact projects, delivering measurable change backed by internationally recognised standard"
    },
    {
      id: "17",
      title: "Scale8Up",
      subtitle: "AI tools",
      category: "Artificial Intelligence",
      image: project13,
      year: "2023",
      description:
      "Struggling to break past six figures? Scale8UP's AI diagnoses the #1 bottleneck holding you back, builds a data-driven action plan, and helps you execute it—all without hiring an expensive consultant."
    }
    ,
    {
      id: "18",
      title: "Portfolio",
      subtitle: "Personal Portfolio website",
      category: "portfolio website",
      image: project16,
      year: "2023",
      description:
      "Struggling to break past six figures? Scale8UP's AI diagnoses the #1 bottleneck holding you back, builds a data-driven action plan, and helps you execute it—all without hiring an expensive consultant."
    }
];

export const homeFeaturedProjects: Project[] = [allProjects[0], allProjects[2]];
