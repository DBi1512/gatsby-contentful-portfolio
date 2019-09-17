import React from "react";
import Introduction from "./introduction";
import Projects from "./Projects";

const Main = () => (
    <>
        <Introduction />
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
                        <p>HTML5, CSS, Javascript, React</p>
                    </div>

                    <div className="content back-end">
                        <h3>Back-end</h3>
                        <p>
                            I develop functional and sustainable web applications with clean codes, web application
                            logic as well as for the integration of the front-end part.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Projects />
    </>
);

export default Main;
