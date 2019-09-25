import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "./Projects.css";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            TTU: file(relativePath: { eq: "TTU.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            Finlary: file(relativePath: { eq: "Finlary.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            Countries: file(relativePath: { eq: "Countries.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            Wayne: file(relativePath: { eq: "WayneTheDealer.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            Aquarium: file(relativePath: { eq: "Aquarium.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            AccountBalance: file(relativePath: { eq: "AccountBalance.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <section id="projects" className="Section-container">
            <div className="Section-title">
                <h1 className="Section-title-text">Projects</h1>
            </div>

            <div className="my-projects">
                
                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <Img fluid={data.TTU.childImageSharp.fluid} />
                            <h3>Think Tank United</h3>
                        </div>

                        <div className="overlay">
                            <div className="Card-wrapper">
                                <p>Back of the card</p>
                                <div className="project-buttons">
                                    <a className="website-button" href="https://ttu-develop.netlify.com/">
                                    Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <div>
                                <Img fluid={data.Finlary.childImageSharp.fluid} />
                            </div>
                            <div>
                                <h3>Finlary</h3>
                            </div>
                        </div>
                        <div className="overlay">
                            <div className="Card-wrapper">
                                <p>
                                    Learning Finnish app. This group project is for learning how make an app with front-end
                                    and back-end.
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
                    </div>
                </div>
                
                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <Img fluid={data.AccountBalance.childImageSharp.fluid} />
                            <h3>Account Balance</h3>
                        </div>

                        <div className="overlay">
                            <div className="Card-wrapper">
                                <p>Learning how to use localhost to store data</p>
                                <div className="project-buttons">
                                    <a className="website-button" href="https://github.com/DBi1512/Account-Balance">
                                        Github
                                    </a>
                                    <a className="website-button" href="https://dbi1512.github.io/Account-Balance/">
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <Img fluid={data.Countries.childImageSharp.fluid} />
                            <h3>Countries of the World</h3>
                        </div>
                        <div className="overlay">
                            <div className="Card-wrapper">
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
                    </div>
                </div>

                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <Img fluid={data.Wayne.childImageSharp.fluid} />
                            <h3>Wayne's The Dealer</h3>
                        </div>
                        <div className="overlay">
                            <div className="Card-wrapper">
                                <p>
                                    This unfinished website is a different direction before I joined Integrify. From which I
                                    learned what is Wordpress and Php
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
                    </div>
                </div>

                <div className="project">
                    <div className="project-detail">
                        <div className="front">
                            <Img fluid={data.Aquarium.childImageSharp.fluid} />
                            <h3>Practice Aquarium Zen</h3>
                        </div>
                        <div className="overlay">
                            <div className="Card-wrapper">
                                <p>
                                    This is my first ever made website based on the real website after learning how to show
                                    "Hello World"
                                </p>
                                <div className="project-buttons">
                                    <a
                                        className="website-button"
                                        href="https://github.com/DBi1512/PracticeAquariumZen.github.io"
                                    >
                                        Github
                                    </a>
                                    <a
                                        className="website-button"
                                        href="https://dbi1512.github.io/PracticeAquariumZen.github.io/"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
