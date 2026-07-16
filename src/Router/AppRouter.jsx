import React from "react";

import Navbar from "../Layout/Navbar";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Project from "../Pages/Projects";
import Layout from "../Layout/Layout";
import { children } from "react";

export const roterConfigu = [
  {
    path: "/",
    element: <Layout />,
  },
];
