import React, { useEffect } from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Projects";
import Skill from "../Pages/Skill";
import Navbar from "./Navbar";
import Header from "./Header";
export default function Component({ setActiveSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((enntries) => {
      enntries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);

          console.log(entry.target.id, entry.isIntersecting);
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="Home" className="heroHead">
        <Home />
      </section>

      <section id="Skills" className="skillHead">
        <Skill />
      </section>

      <section id="Project" className="projectHead">
        <Project />
      </section>

      <section id="Contact" className="contactHead">
        <Contact />
      </section>
    </>
  );
}
