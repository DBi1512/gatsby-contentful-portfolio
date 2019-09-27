import React, { useState, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Skills from "./skills";
import Projects from "./Projects";
import Contact from "./contact";
import About from "./About";

const Main = () => {
    const [position, setPosition] = useState(1);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setPosition(window.pageYOffset / window.innerHeight);
            });
        }
    }, [position]);

    return (
        <>
            {position > 1 ? (
                <a href="#home" className="anchor scroll-to-top">
                    <ExpandLessIcon className="arrow" />
                </a>
            ) : null}
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
};
export default Main;
