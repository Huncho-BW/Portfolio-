import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Projects";
import Skill from "../Pages/Skill";
import Navbar from "./Navbar";
import Header from "./Header";
export default function Component() {
  return (
    <>
      <section id="home" className="heroHead">
        <Home />
      </section>

      <section id="skill" className="skillHead">
        <Skill />
      </section>

      <section id="project" className="projectHead">
        <Project />
      </section>

      <section id="contact" className="contactHead">
        <Contact />
      </section>
    </>
  );
}
