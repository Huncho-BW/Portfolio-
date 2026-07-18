import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { social } from "../Myjson";

export default function RightSidebar() {
  return (
    <aside className="rightSidebar">
      <section className="">
        <h2 className="rightSystemFont">SYSTEM</h2>
        <div className="status">
          <span className="statusDot"></span>
          <span className="rightP">Available for Work</span>
        </div>
      </section>

      <section className="rightContact">
        <h2 className="rightSystemFont">CONNECT</h2>
        {social.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rightBorder" key={item.id}>
              <span className="techIcon">{item.icon}</span>
              <span className="rightP">{item.title}</span>
            </div>
          </a>
        ))}
      </section>

      <section className="rightInfo">
        <h2 className="rightSystemFont">CONTACT</h2>

        <div className="flex items-center gap-[8px] mt-[10px]">
          <IoLocationOutline />
          <span className="rightP">Remote • Nigeria</span>
        </div>

        <div className="flex items-center gap-[8px] mt-[10px]">
          <IoCallOutline />
          <a href="tel:+2347078796581" className="rightP">
            +234 707 879 6581
          </a>
        </div>
      </section>
    </aside>
  );
}
