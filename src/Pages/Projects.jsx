import React from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
import { project } from "../Myjson";
import { delay } from "framer-motion";
import { motion } from "framer-motion";
export default function Project() {
  return (
    <div className="projectHead">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h1>PROJECT</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="projectFlow"
      >
        {project?.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="project-card"
            key={item.id}
          >
            <motion.img
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              src={item.image}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="projectInfo"
            >
              <div>
                <h1>{item?.title}</h1>
                <p>{item?.discription}</p>
              </div>

              <div className="tech-stack">
                {item?.tag?.map((tag) => (
                  <div className="subTech">
                    <h1>{tag}</h1>
                  </div>
                ))}
              </div>

              <div className="pjo">
                <div className="projectButtons">
                  <a href={item?.button?.live} target="_blank">
                    <button>Live Demo </button>
                  </a>
                </div>
                <div className="projectButtons">
                  <a href={item?.button?.gitup} target="_blank">
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
