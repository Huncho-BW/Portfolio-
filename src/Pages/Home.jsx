import React from "react";
import gitIcon from "../assets/git-icon.svg";
import avater from "../assets/mypic.jpeg";
import { MoveUpRight } from "lucide-react";
export default function Home() {
  return (
    <div className="heroHeader ">
      <div className="herohead">
        <div>
          <h1 className="heroFont">ADENUGA</h1>
        </div>

        <div>
          <h1 className="subHeroFont">MICHAEL</h1>
        </div>
      </div>

      <div className="subHoreHead ">
        <div className="heroInfo">
          <div>
            <h1 className="subFont">Front-End DEV</h1>
          </div>
          <div>
            <p className="subPFont">
              Developing clear useable and conversion focused UI/UX
            </p>
          </div>
          <div className="heroButton">
            <button>Let Connect</button>
            <div>
              <MoveUpRight size={10} />
            </div>
          </div>
        </div>
        <div className="heroProtriat">
          <img src={avater} alt="" />
        </div>
        <div className="heroExp">
          <div>
            <h1 className="expFont">Experience</h1>
            <span className="subexpfont">+2 Year </span>
          </div>
          <div>
            <h1 className="expFont">Next Goal</h1>
            <span className="subexpfont">TYPESCRIPT</span>
          </div>
          <div>
            <h1 className="expFont">Currently</h1>
            <span className="subexpfont">Open for Hire</span>
          </div>
        </div>
      </div>
    </div>
  );
}
