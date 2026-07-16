import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { icons } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { VscVscodeOutline } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";
export const techStack = [
  { id: 1, icon: <FaHtml5 />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt />, name: "css" },
  { id: 3, icon: <IoLogoJavascript />, name: "JavaScript" },
  { id: 4, icon: <FaReact />, name: "React" },
  { id: 5, icon: <FaNodeJs />, name: "Node.js" },
  { id: 6, icon: <SiExpress />, name: "Express" },
  { id: 7, icon: <SiPostgresql />, name: "PostgreSQL" },
  { id: 8, icon: <FaGitAlt />, name: "Git" },
];

export const social = [
  {
    id: 1,
    title: "Github",
    icon: <FaGitAlt />,
    userName: "@Huncho-BW",
    href: "",
  },
  {
    id: 2,
    title: "twitter or X",
    icon: <FaXTwitter />,
    userName: "@adenugamichael",
    href: "",
  },
  {
    id: 3,
    title: "Linkin",
    icon: <FaLinkedin />,
    userName: "@Huncho-BW",
    href: "",
  },
  {
    id: 4,
    title: "Email",
    icon: <MdOutlineEmail />,
    userName: "adenugaomoyele@",
    href: "",
  },
  {
    id: 5,
    title: "whatapp",
    icon: <FaWhatsapp />,
    userName: "Huncho",
    href: "",
  },
];

export const project = [
  {
    image: "",
    title: "HunchoScore",
    discription:
      "Creating responsive and modern user interfaces using Flexbox, Grid, animations, and clean component-based styling.",
    tag: ["Flexbox", "CSS Grid", "Animations"],
    button: {
      live: "Live",
      gitup: "Gitup",
    },
  },
];

export const skill = [
  {
    skillName: "Front-End",
    skillStack: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        discription:
          "Writing semantic and accessible HTML structures that provide a solid foundation for modern web applications.",
        tag: ["Semantic HTML", "Forms", "Accessibility"],
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        discription:
          "Creating responsive and modern user interfaces using Flexbox, Grid, animations, and clean component-based styling.",
        tag: ["Flexbox", "CSS Grid", "Animations"],
      },
      {
        name: "JAVASCRIPT (ES6+)",
        icon: <IoLogoJavascript />,
        discription:
          "Building interactive web experiences with modern JavaScript, asynchronous programming, and efficient DOM manipulation.",
        tag: ["Async/Await", "DOM", "AXIOS"],
      },
    ],
  },
  {
    skillName: "Framework & Libraries",
    skillStack: [
      {
        name: "REACT",
        icon: <FaReact />,
        discription:
          "Developing reusable and scalable user interfaces with React components, hooks, routing, and modern application architecture.",
        tag: ["Hooks", "React Router", "Context API"],
      },
      {
        name: "TAILWIND",
        icon: <RiTailwindCssFill />,
        discription:
          "Building responsive layouts quickly with utility-first styling while keeping components clean and consistent.",
        tag: ["Utility First", "Flexbox", "GRID"],
      },
      {
        name: "BOOTSTRAP",
        icon: <RiBootstrapLine />,
        discription:
          "Building responsive interfaces with Bootstrap's grid system, utility classes, and pre-built UI components.",
        tag: ["Components", "Utilities", "Grid System"],
      },
    ],
  },

  {
    skillName: "TOOLS",
    skillStack: [
      {
        name: "GIT",
        icon: <FaGitAlt />,
        discription:
          "Managing project history with Git through commits, branching, and version control workflows.",
        tag: ["Version Control", "Commits", "Branches"],
      },
      {
        name: "GITUP",
        icon: <FaGithub />,
        discription:
          "Hosting projects, collaborating through repositories, and managing code using GitHub.",
        tag: ["Repositories", "Git", "Deployment"],
      },
      {
        name: "VS CODE",
        icon: <VscVscodeOutline />,
        discription:
          "Developing and debugging modern web applications using a powerful and customizable development environment.",
        tag: ["Extensions", "Terminal"],
      },
      {
        name: "VITE",
        icon: <TbBrandVite />,
        discription:
          "Developing React applications with a fast development server, optimized builds, and modern tooling.",
        tag: ["React", "Fast Refresh", "Development"],
      },
    ],
  },
];
