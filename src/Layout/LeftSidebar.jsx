import React from "react";
import avater from "../../public/WhatsApp Image 2026-04-29 at 1.41.33 PM.jpeg";
export default function LeftSidebar() {
  return (
    <div>
      <div className="imgBoder">
        <img className="imgSize" src={avater} alt="" />
      </div>

      <div className="mt-[10px]">
        <div className="mt-[10px]">
          <span className="leftFont">Name</span>
          <h1 className="subLeftFont">Adenuga Michael</h1>
        </div>

        <div className="mt-[10px]">
          <span className="leftFont">Education level</span>
          <h1 className="subLeftFont">Bsc Political Science </h1>
        </div>

        <div className="mt-[10px]">
          <span className="leftFont">Occuption</span>
          <h1 className="subLeftFont">Web developer</h1>
        </div>

        <div className="mt-[10px]">
          <span className="leftFont">Avalibality</span>
          <h1 className="subLeftFont">Open for Hire </h1>
        </div>

        <div className="mt-[10px]">
          <span className="leftFont">Social</span>
          <h1 className="subLeftFont">Open Connection</h1>
        </div>
      </div>
    </div>
  );
}
