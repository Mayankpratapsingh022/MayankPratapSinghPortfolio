import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bloggingApp from "@/public/100x.png";
import aiFolio from "@/public/AiFolio.png";
import passwordGenerator from "@/public/passwordGenerator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "100x Microbloging App",
    description:
      "This is a Microblogging app,the clone of twitter",
    tags: ["React", "Node.js", "PostgresSQL", "Tailwind", "Sequelize","Supabase"],
    imageUrl: bloggingApp,
  },
  {
    title: "AI Folio",
    description:
      "Creating AI-Powered Portfolios(Generative Ai).",
    tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
    imageUrl: aiFolio,
  },
  {
    title: "Password Generator",
    description:
      "App that helps you to generate random strong passwords.",
    tags: ["React", "Tailwind"],
    imageUrl: passwordGenerator,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
 "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "After Effects",
  "Figma",
  "Photoshop",
  "Illustrator"
] as const;