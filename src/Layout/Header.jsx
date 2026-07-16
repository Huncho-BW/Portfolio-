import React from "react";
import { techStack } from "../Myjson.jsx";
import { FolderKanban, Languages, CodeXml, X, Repeat } from "lucide-react";
import { project } from "../Myjson.jsx";
import { easeInOut, motion } from "framer-motion";
export default function Header() {
  const numberProject = project.length;
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="headerFram"
    >
      <motion.div className="leftHeader">
        {techStack.map((tech) => {
          return (
            <div key={tech.id} className="techIcon">
              <span className="techIcon"> {tech.icon}</span>
            </div>
          );
        })}
      </motion.div>

      <div className="rightHeader">
        <div className="projectCount">
          <FolderKanban size={18} />

          <span>{numberProject} Projects</span>
        </div>

        <div className="language">
          <Languages size={18} />

          <span>EN | FR</span>
        </div>
      </div>
    </motion.div>
  );
}
