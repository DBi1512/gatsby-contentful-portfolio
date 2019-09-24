import React from "react";
import AppBarCollapse from "./navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./contact";
import About from "./About";

const Main = () => (
    <>
        <AppBarCollapse />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </>
);

export default Main;
