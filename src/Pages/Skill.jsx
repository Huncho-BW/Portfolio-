import React from "react";
import { MoveUpRight } from "lucide-react";
import avater from "../assets/avater7.jpg";
import { skill } from "../Myjson";
export default function Skill() {
  return (
    <div className="">
      <div className="skillHeader">
        <h1>skills</h1>
      </div>

      {skill.map((item) => (
        <>
          <div className="skillHeader">
            <h1>{item.skillName}</h1>
          </div>

          <div className="skillStack">
            {item.skillStack.map((subItem) => (
              <>
                <div className="skillCover">
                  <div className="subCover">
                    <span>{subItem.icon}</span>
                    <h1 className="skillFont">{subItem.name}</h1>
                  </div>

                  <div>
                    <p className="skillP">{subItem.discription}</p>
                  </div>

                  <div className="skill-stack">
                    {subItem.tag.map((tag) => (
                      <div className="">
                        <h1>{tag}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
