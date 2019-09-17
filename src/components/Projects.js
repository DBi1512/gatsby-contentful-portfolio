import React from "react";
import TTU from "../images/TTU.png";
import Finlary from "../images/Finlary.png";
import Countries from "../images/Countries.png";
import Wayne from "../images/WayneTheDealer.png";
import Aquarium from "../images/Aquarium.png";

const Projects = () => (
    <section id="projects">
        <h1>Projects</h1>

        <div className="my-projects">
            <div className="project">
                <div className="project-detail">
                    <img src={TTU} alt="aquarium" />
                    <h2>Think Tank United</h2>
                    <p>Final project from Integrify for real company</p>
                    <div className="project-buttons">
                        <a className="website-button" href="https://ttu-develop.netlify.com/">
                            Check out TTU project
                        </a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-detail">
                    <img src={Finlary} alt="aquarium" />
                    <h2>Finlary</h2>
                    <p>
                        Learning Finnish app. This group project is for learning how make an app with front-end and
                        back-end.
                    </p>
                    <div className="project-buttons">
                        <a className="website-button" href="https://github.com/DBi1512/demo-day">
                            Github
                        </a>
                        <a className="website-button" href="https://finlary.netlify.com/">
                            Demo
                        </a>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="project-detail">
                    <img src={Countries} alt="aquarium" />
                    <h2>Countries of the World</h2>
                    <p>RestAPI showing all the countries in the World. Learning Array Object.</p>
                    <div className="project-buttons">
                        <a className="website-button" href="https://github.com/DBi1512/Array-Countries-Object">
                            Github
                        </a>
                        <a className="website-button" href="https://dbi1512.github.io/Array-Countries-Object/">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-detail">
                    <img src={Wayne} alt="Wayne's The Dealer" />
                    <h2>Wayne's The Dealer</h2>
                    <p>
                        This unfinished website is a different direction before I joined Integrify. From which I learned
                        what is Wordpress and Php
                    </p>
                    <div className="project-buttons">
                        <a className="website-button" href="https://github.com/DBi1512/wayneTheDealer">
                            Github
                        </a>
                        <a className="website-button" href="https://dbi1512.github.io/wayneTheDealer/index.html">
                            Demo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-detail">
                    <img src={Aquarium} alt="aquarium" />
                    <h2>Practice Aquarium Zen</h2>
                    <p>
                        This is my first ever made website based on the real website after learning how to show "Hello
                        World"
                    </p>
                    <div className="project-buttons">
                        <a className="website-button" href="https://github.com/DBi1512/PracticeAquariumZen.github.io">
                            Github
                        </a>
                        <a className="website-button" href="https://dbi1512.github.io/PracticeAquariumZen.github.io/">
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;
