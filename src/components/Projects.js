import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import "./Projects.css";
import Html5Icon from "../images/html5.svg";
import JsxIcon from "../images/jsx.svg";
import Css3Icon from "../images/css3.svg";
import BootstrapIcon from "../images/bootstrap-4.svg";
import MaterialUiIcon from "../images/material-ui.svg";
import Javascript from "../images/javascript.svg";
import ReactIcon from "../images/react-1.svg";
import GatsbyIcon from "../images/gatsby.svg";
import MongoDBIcon from "../images/mongodb.svg";
import FirebaseIcon from "../images/firebase-2.svg";
import GraphQLIcon from "../images/graphql.svg";
import GithubIcon from "../images/github-1.svg";
import ContentfulIcon from "../images/contentful.svg";
import WordpressIcon from "../images/wordpress-icon.svg";
import HerokuIcon from "../images/heroku.svg";
import NodeJsIcon from "../images/nodejs-1.svg";

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
                                <p className="para">Final project from Integrify with Think Tank United company, Netherland.<br />On-going project and will be ready to launch in October, 2019.</p>
                                <br />
                                <p className="para"><strong>Skills: </strong>React, Gatsby, Contentful, Firebase, GraphQL</p>
                                <div className="project-skills">
                                    <img src={ReactIcon} alt="icon" className="icons" />
                                    <img src={GatsbyIcon} alt="icon" className="icons" />
                                    <img src={ContentfulIcon} alt="icon" className="icons" />
                                    <img src={FirebaseIcon} alt="icon" className="icons" />
                                    <img src={GraphQLIcon} alt="icon" className="icons" />
                                </div>
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
                                <p className="para">
                                    Learning Finnish app. This group project is for learning how make an app with front-end
                                    and back-end.
                                </p>
                                <div className="project-skills">
                                    <img src={ReactIcon} alt="icon" className="icons" />
                                    <img src={MongoDBIcon} alt="icon" className="icons" />
                                </div>
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
                                    learned Wordpress and basic PHP.
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
                                <p className="para">
                                    This is my first ever made website based on the real website after learning how to code. <br /><strong>Skills: </strong>HTML, CSS
                                </p>
                                <div className="project-skills">
                                    <img src={Html5Icon} alt="icon" className="icons" />
                                    <img src={Css3Icon} alt="icon" className="icons" />
                                </div>
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
