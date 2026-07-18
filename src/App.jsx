import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "./layout.css";
import "./leftSide.css";
import "./home.css";
import "./skill.css";
import "./project.css";
import "./contact.css";
import "./rightSide.css";

import { BrowserRouter, useRoutes } from "react-router-dom";
``;
import { roterConfigu } from "./Router/AppRouter";
function App() {
  function AppRouter() {
    const route = useRoutes(roterConfigu);
    return route;
  }

  return (
    <>
      <BrowserRouter basename="/Portfolio-/">
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
