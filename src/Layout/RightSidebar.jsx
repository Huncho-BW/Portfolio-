import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { social } from "../Myjson";

export default function RightSidebar() {
  return (
    <aside className="rightSidebar">
      <section className="">
        <h2>System</h2>
        <p className="mt-[10px]">● Available for Work</p>
      </section>

      <section className="mt-[30px]">
        <h2>Connect</h2>

        {social.map((item) => (
          <div className="flex items-center gap-[8px] mt-[10px]" key={item.id}>
            <span className="techIcon">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </section>

      <section className="mt-[30px]">
        <h2>Contact</h2>

        <div className="flex items-center gap-[8px] mt-[10px]">
          <IoLocationOutline />
          <span>Remote • Nigeria</span>
        </div>

        <div className="flex items-center gap-[8px] mt-[10px]">
          <IoCallOutline />
          <a href="tel:+2347078796581">+234 707 879 6581</a>
        </div>
      </section>
    </aside>
  );
}
