import React from "react";
import Introduction from "./introduction";

const Main = () => (
    <>
        <Introduction />
        <section id="profession">
            <div className="container">
                <div className="profession-type">
                    <div className="content design">
                        <h3>Web Designer</h3>
                        <br />
                        <p>
                            Basic web design
                            {" "}
                            <br />
                            Animation
                            {" "}
                            <br />
                            Multimedia design
                            {" "}
                            <br />
                            Multimedia programming and technology
                        </p>
                    </div>

                    <div className="content front-end">
                        <h3>Front-end Developer</h3>
                        <br />
                        <p>
                            I tend to code from scratch, maintain and improve website,
                            {" "}
                            <br />
                            implement visual elements to work with back-end and web design.
                        </p>
                    </div>

                    <div className="content back-end">
                        <h3>Back-end Developer</h3>
                        <br />
                        <p>
                            I develop functional and sustainable web applications with clean codes, web application
                            logic as well as for the integration of the front-end part.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <p>Some people I've worked with saying about me...</p>
                <img src="assets/img/avatar-icon.png" alt="avatar picture" className="avatar" />
                <blockquote>
                    <i className="fa fa-quote-left" />
                    <em>
                        Dean is a nice colleague to work with. He always finishs all the tasks early and help the others
                        also. He also prefers simplify everything to make it easy to focus. He's easy going guy with a
                        nice smile and a warm heart.
                    </em>
                    <i className="fa fa-quote-right" />
                </blockquote>
            </div>
        </section>
    </>
);

export default Main;
