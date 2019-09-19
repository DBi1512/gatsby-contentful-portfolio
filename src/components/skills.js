import React from "react";
import Html5 from "../images/html5.svg";
import Css3 from "../images/css3.svg";
import Javascript from "../images/javascript.svg";
import ReactIcon from "../images/react-1.svg";
import GatsbyIcon from "../images/gatsby.svg";

const Skills = () => (
    <section id="profession">
        <div className="container">
            <div className="profession-type">
                <div className="content front-end">
                    <h3>Front-end</h3>
                    <p>
                        I tend to code from scratch, maintain and improve website, implement visual elements to work
                        with back-end and web design.
                    </p>
                    <h4>Skills:</h4>
                    <img src={Html5} className="skill-icon" alt="skill" />
                    <img src={Css3} className="skill-icon" alt="skill" />
                    <img src={Javascript} className="skill-icon" alt="skill" />
                    <img src={ReactIcon} className="skill-icon" alt="skill" />
                    <img src={GatsbyIcon} className="skill-icon" alt="skill" />
                </div>

                <div className="content back-end">
                    <h3>Back-end</h3>
                    <p>
                        I develop functional and sustainable web applications with clean codes, web application logic as
                        well as for the integration of the front-end part.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
