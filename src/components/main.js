import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import BackgroundImage from "gatsby-background-image";
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

    const data = useStaticQuery(graphql`
        query {
            codeBackground: file(relativePath: { eq: "code-background.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const imageData = [
        "linear-gradient(rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.89))",
        data.codeBackground.childImageSharp.fluid,
    ];

    const Styles = {
        backgroundPosition: "right 5% bottom 65%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
    };

    return (
        <BackgroundImage Tag="section" id="test" fluid={imageData} style={Styles}>
            {position > 1 ? (
                <a href="#top" className="anchor scroll-to-top">
                    <ExpandLessIcon className="arrow" />
                </a>
            ) : null}
            <About />
            <Skills />
            <Projects />
            <Contact />
        </BackgroundImage>
    );
};
export default Main;
