import React from "react";
import { Outlet } from "react-router-dom";
import SectionNavigation from "./SectionNavigation";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Component from "./Component";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="wrap">
      <div className="wrapper">
        <Header />
      </div>

      <div className="layout">
        <div className="leftSide">
          <LeftSidebar />
        </div>

        <main className="center">
          <Component />

          <div className="navSec">
            <SectionNavigation />
          </div>
        </main>
        <div className="rightSide flex justify-end">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
