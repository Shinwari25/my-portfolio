import blog from "../assets/blog1.png";
import fylo from "../assets/fylo.webp";
import loopstudio from "../assets/loopstudio.webp";
import clock from "../assets/clock.jpg";

const PROJECTS = [
  {
    title: "Mern Blog App",
    image: blog,
    description:
      "A modern, full-stack blog platform built with the MERN technologies (MongoDB, Express, React, Node.js) with Firebase Authentication and beautiful, responsive UI. Users can register, log in (including Google Authentication), verify email, reset password, comment and like posts, browse projects, clone source code, see live demo. Admin can create and manage blog posts, comments, projects and users.",
    technologies: [
      "HTML",
      "Tailwind",
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    liveLink: "https://shinwari-blog.vercel.app",
    category: "fullstack",
  },
  {
    title: "LoopStudio Website",
    image: loopstudio,
    description:
      "The Loop Studios website showcases the company's expertise in creating world-class virtual reality projects since 2011. It highlights their innovative digital experiences that transform businesses and enhance brand engagement",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    liveLink: "https://loopstudio-shinwari.netlify.app/",
  },
  {
    title: "Fylo Website",
    image: fylo,
    description:
      "The Fylo website is a sleek and modern platform designed for secure file storage and sharing. It emphasizes accessibility, allowing users to access their files from anywhere using various devices. ",
    technologies: ["HTML", "Tailwind", "JavaScript"],
    liveLink: "https://fyloweb-shinwari.netlify.app/",
  },
  {
    title: "Digital-Analog-Clock",
    image: clock,
    description:
      "Digital and analog clock representaion, full responsive and light-dark mode ",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://digital-analog-clock-shinwari.netlify.app",
  },
];
export default PROJECTS;
