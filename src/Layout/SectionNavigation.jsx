import React from "react";

export default function SectionNavigation() {
  const sections = ["home", "skill", "project", "contact"];

  const selectionButton = (section) => {
    console.log(section);

    const element = document.getElementById(section);

    console.log(element);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="sectionNavigation">
      {sections.map((section) => (
        <button key={section} onClick={() => selectionButton(section)}>
          {section}
        </button>
      ))}
    </section>
  );
}
