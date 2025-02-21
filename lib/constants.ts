import { Home, Settings, Trash } from "lucide-react";

export const data = {
  user: {
    name: "ananta",
    email: "email",
    avatar: "/avatar/shadcn.jpg",
  },

  navMain: [
    {
      title: "home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "templates",
      url: "/templates",
      icon: Trash,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transitions: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const themes = [
  {
    name: "Cosmic Delight",
    fontFamily: "'Space Grotesk, sans-serif'",
    fontColor: "#ffffff",
    backgroundColor: "#311b92",
    slideBackgroundColor: "#4527a0",
    accentColor: "#7c4dff",
    gradientBackground: "linera-gradient(135deg,#311b92 0%,#4527a0 100%)",
    navbarColor: "#4527a0",
    sidebarColor: "#311b92",
    type: "dark",
  },
];

export const CreatePageCard = [
  {
    title: "Use a",
    highlightedText: "Template",
    description: "Write a promt and leave everything else for us to handle",
    type: "template",
  },
  {
    title: "Generate with",
    highlightedText: "Creative AI",
    description: "Write a promt and leave everything else for us to handle",
    type: "creative-ai",
    highlight: true,
  },
  {
    title: "Start from",
    highlightedText: "scratch",
    description: "Write a promt and leave everything else for us to handle",
    type: "create-scratch",
  },
];
