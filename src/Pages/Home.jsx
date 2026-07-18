import React from "react";
import gitIcon from "../assets/git-icon.svg";
import avater from "../assets/myBusinessSuit.png";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
export default function Home() {
  const selectedContact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="heroHeader ">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="herohead"
      >
        <div>
          <h1 className="heroFont">ADENUGA</h1>
        </div>

        <div>
          <h1 className="subHeroFont">MICHAEL</h1>
        </div>
      </motion.div>

      <div className="subHoreHead ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="heroInfo"
        >
          <div>
            <h1 className="subFont">Front-End DEV</h1>
          </div>
          <div>
            <p className="subPFont">
              Developing clear useable and conversion focused UI/UX
            </p>
          </div>
          <div className="heroButton">
            <button onClick={selectedContact}>Let Connect</button>
            <div>
              <MoveUpRight size={10} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="heroProtriat"
        >
          <img src={avater} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="heroExp"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
