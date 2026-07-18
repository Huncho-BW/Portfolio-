import React from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
import { skill } from "../Myjson";
import { delay } from "framer-motion";
import { motion } from "framer-motion";
export default function Skill() {
  return (
    <div className="skillHead">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="skillHeader"
      >
        <h1>SKILLS</h1>
        <p>
          The tools and technologies I work with to build modern web
          applications
        </p>
      </motion.div>

      {skill.map((item) => (
        <div key={item.skillName}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="skillHeader"
          >
            <h1>{item.skillName}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="skillStack"
          >
            {item.skillStack.map((subItem) => (
              <div key={subItem.name}>
                <div className="skillCover">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.11 }}
                    className="subCover"
                  >
                    <span>{subItem.icon}</span>
                    <h1 className="skillFont">{subItem.name}</h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                  >
                    <p className="skillP">{subItem.discription}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="skill-stack"
                  >
                    {subItem.tag.map((tag) => (
                      <div className="">
                        <h1>{tag}</h1>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
