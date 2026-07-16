import React from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
import { project } from "../Myjson";
export default function Project() {
  return (
    <div className="">
      <div>
        <h1>project</h1>
      </div>
      {project.map((item) => (
        <div className="projectFlow">
          <div className="project-card">
            <img src={avater} />

            <div className="projectInfo">
              <div>
                <h2>{item.title}</h2>
                <p>{item.discription}</p>
              </div>

              <div className="tech-stack">
                {item.tag.map((tag) => (
                  <div className="">
                    <h1>{tag}</h1>
                  </div>
                ))}
              </div>

              <div className="pjo">
                <div className="projectButtons">
                  <a href={item.button.live}>
                    <button>Live Demo </button>
                  </a>
                </div>
                <div className="projectButtons">
                  <a href={item.button.gitup}>
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
