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
import Finance from "./assets/mpersonalFinance.png";
import HunchoMart from "./assets/hunchoMart.png";
import HunchoScore from "./assets/huncho score.png";
import Link from "./assets/link tree.png";
export const techStack = [
  { id: 1, icon: <FaHtml5 size={22} color="#F8FAFC" />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt size={22} color="#F8FAFC" />, name: "css" },
  {
    id: 3,
    icon: <IoLogoJavascript size={22} color="#F8FAFC" />,
    name: "JavaScript",
  },
  { id: 4, icon: <FaReact size={22} color="#F8FAFC" />, name: "React" },

  { id: 5, icon: <FaGitAlt size={22} color="#F8FAFC" />, name: "Git" },
  {
    id: 6,
    icon: <RiTailwindCssFill size={22} color="#F8FAFC" />,
    name: "Tailwind",
  },
  {
    id: 7,
    icon: <RiBootstrapLine size={22} color="#F8FAFC" />,
    name: "Bootstrap",
  },
];

export const social = [
  {
    id: 1,
    title: "Github",
    icon: <FaGitAlt size={22} color="#F8FAFC" />,
    userName: "@Huncho-BW",
    href: "https://github.com/Huncho-BW",
  },
  {
    id: 2,
    title: "Twitter or X",
    icon: <FaXTwitter size={22} color="#F8FAFC" />,
    userName: "@adenugamichael",
    href: "https://x.com/AdenugaOmoyele",
  },
  {
    id: 3,
    title: "LinkedIn.",
    icon: <FaLinkedin size={22} color="#F8FAFC" />,
    userName: "@Huncho-BW",
    href: "https://www.linkedin.com/in/adenuga-omoyele-756063290/",
  },
  {
    id: 4,
    title: "Email",
    icon: <MdOutlineEmail size={22} color="#F8FAFC" />,
    userName: "adenugaomoyele@",
    href: "mailto:adenugaomoyele7@gmail.com?subject=Let's work together",
  },
  {
    id: 5,
    title: "WhatsApp",
    icon: <FaWhatsapp size={22} color="#F8FAFC" />,
    userName: "Huncho",
    href: "https://wa.me/2349161458239",
  },
];

export const project = [
  {
    id: 1,
    image: HunchoMart,
    title: "Huncho mart",
    discription:
      "An e-commerce frontend built with React, integrated with a custom REST API built with Node.js and Express. The API is deployed with Render and supports product search, filtering, sorting, and pagination. ",
    tag: ["React", "Axios", "Node.js", "Express.js", "REST API", "Render"],
    button: {
      live: " https://huncho-bw.github.io/HunchoMart/",
      gitup: "https://github.com/Huncho-BW/HunchoMart/settings/pages",
    },
  },

  {
    id: 2,
    image: HunchoScore,
    title: "HunchoScore",
    discription:
      "Live football scores, fixtures, standings, and match updates powered by a third-party API. ",
    tag: ["React", "JavaScript", "Tailwind CSS", "Axios"],
    button: {
      live: "https://huncho-bw.github.io/HunchoScores/",
      gitup: "https://github.com/Huncho-BW/HunchoScores",
    },
  },

  {
    id: 3,
    image: Link,
    title: "LINK TREE",
    discription:
      "A customizable Linktree-inspired portfolio that allows users to organize and share multiple social links from a single page. ",
    tag: ["React", "CSS", "JavaScript"],
    button: {
      live: "https://huncho-bw.github.io/My-Link-Tree/",
      gitup: "https://github.com/Huncho-BW/My-Link-Tree",
    },
  },

  {
    id: 4,
    image: Finance,
    title: "Personal finance ",
    discription:
      "A personal finance tracker that helps users monitor income, expenses, and overall spending.",
    tag: ["React", "JavaScript", "CSS"],
    button: {
      live: "https://huncho-bw.github.io/my-finance-app/",
      gitup: "https://github.com/Huncho-BW/my-finance-app",
    },
  },
];

export const skill = [
  {
    skillName: "Front-End",
    skillStack: [
      {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 size={22} color="#F8FAFC" />,
        discription:
          "Writing semantic and accessible HTML structures that provide a solid foundation for modern web applications.",
        tag: ["Semantic HTML", "Forms", "Accessibility"],
      },
      {
        id: 2,
        name: "CSS",
        icon: <FaCss3Alt size={22} color="#F8FAFC" />,
        discription:
          "Creating responsive and modern user interfaces using Flexbox, Grid, animations, and clean component-based styling.",
        tag: ["Flexbox", "CSS Grid", "Animations"],
      },
      {
        id: 3,
        name: "JAVASCRIPT (ES6+)",
        icon: <IoLogoJavascript size={22} color="#F8FAFC" />,
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
        id: 1,
        name: "REACT",
        icon: <FaReact size={22} color="#F8FAFC" />,
        discription:
          "Developing reusable and scalable user interfaces with React components, hooks, routing, and modern application architecture.",
        tag: ["Hooks", "React Router", "Context API"],
      },
      {
        id: 2,
        name: "TAILWIND",
        icon: <RiTailwindCssFill size={22} color="#F8FAFC" />,
        discription:
          "Building responsive layouts quickly with utility-first styling while keeping components clean and consistent.",
        tag: ["Utility First", "Flexbox", "GRID"],
      },
      {
        id: 3,
        name: "BOOTSTRAP",
        icon: <RiBootstrapLine size={22} color="#F8FAFC" />,
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
        id: 1,
        name: "GIT",
        icon: <FaGitAlt size={22} color="#F8FAFC" />,
        discription:
          "Managing project history with Git through commits, branching, and version control workflows.",
        tag: ["Version Control", "Commits", "Branches"],
      },
      {
        id: 2,
        name: "GITUP",
        icon: <FaGithub size={22} color="#F8FAFC" />,
        discription:
          "Hosting projects, collaborating through repositories, and managing code using GitHub.",
        tag: ["Repositories", "Git", "Deployment"],
      },
      {
        id: 3,
        name: "VS CODE",
        icon: <VscVscodeOutline size={22} color="#F8FAFC" />,
        discription:
          "Developing and debugging modern web applications using a powerful and customizable development environment.",
        tag: ["Extensions", "Terminal"],
      },
      {
        id: 4,
        name: "VITE",
        icon: <TbBrandVite size={22} color="#F8FAFC" />,
        discription:
          "Developing React applications with a fast development server, optimized builds, and modern tooling.",
        tag: ["React", "Fast Refresh", "Development"],
      },
    ],
  },
];
