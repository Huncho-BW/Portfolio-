import React from "react";
import { useState, useEffect } from "react";
export default function SectionNavigation({ activeSection, setActiveSection }) {
  const sections = ["Home", "Skills", "Project", "Contact"];
  const [showNav, setShowNav] = useState(true);
  const selectionButton = (section) => {
    const element = document.getElementById(section);

    element.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(section);
  };

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setShowNav(true);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setShowNav(false);
      }, 3000);
    };
    const container = document.querySelector(".center");
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={`sectionNavigation ${showNav ? "show" : "hide"}`}>
      {sections.map((section) => (
        <button
          key={section}
          className={activeSection === section ? "active" : ""}
          onClick={() => selectionButton(section)}
        >
          {section}
        </button>
      ))}
    </section>
  );
}
