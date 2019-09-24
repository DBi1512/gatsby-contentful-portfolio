import React from "react";
import Divider from "@material-ui/core/Divider";
import Html5Icon from "../images/html5.svg";
import JsxIcon from "../images/jsx.svg";
import Css3Icon from "../images/CSS3.svg";
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

const Skills = () => (
    <section id="skills" className="Section-container">
        <div className="Section-title">
            <h1 className="Section-title-text">Skills</h1>
        </div>

        <div className="Container Skills-container">
            <h4 className="Skill-title">HTML &#38; CSS</h4>
            <Divider />
            <div className="Skill-row">
                <div className="Skill-item">
                    <img src={Html5Icon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">HTML5</p>
                </div>
                <div className="Skill-item">
                    <img src={JsxIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">JSX</p>
                </div>
                <div className="Skill-item">
                    <img src={Css3Icon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">CSS3</p>
                </div>
                <div className="Skill-item">
                    <img src={BootstrapIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Bootstrap</p>
                </div>
                <div className="Skill-item">
                    <img src={MaterialUiIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Material-Ui</p>
                </div>
            </div>
        </div>

        <div className="Container Skills-container">
            <h4 className="Skill-title">JavaScript</h4>
            <Divider />
            <div className="Skill-row">
                <div className="Skill-item">
                    <img src={Javascript} className="skill-icon" alt="skill" />
                    <p className="Skill-text">JavaScript</p>
                </div>
                <div className="Skill-item">
                    <img src={ReactIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">React</p>
                </div>
                <div className="Skill-item">
                    <img src={GatsbyIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Gatsby</p>
                </div>
            </div>
        </div>
        <div className="Container Skills-container">
            <h4 className="Skill-title">Back-End</h4>
            <Divider />
            <div className="Skill-row">
                <div className="Skill-item">
                    <img src={FirebaseIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Firebase</p>
                </div>
                <div className="Skill-item">
                    <img src={GraphQLIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">GraphQL</p>
                </div>
                <div className="Skill-item">
                    <img src={MongoDBIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">MongoDB</p>
                </div>
            </div>
        </div>
        <div className="Container Skills-container">
            <h4 className="Skill-title">Others</h4>
            <Divider />
            <div className="Skill-row">
                <div className="Skill-item">
                    <img src={GithubIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Github</p>
                </div>
                <div className="Skill-item">
                    <img src={ContentfulIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Contentful</p>
                </div>
            </div>
        </div>
        <div className="Container Skills-container">
            <h4 className="Skill-title">Knowledge of:</h4>
            <Divider />
            <div className="Skill-row">
                <div className="Skill-item">
                    <img src={WordpressIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Wordpress</p>
                </div>
                <div className="Skill-item">
                    <img src={HerokuIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Heroku</p>
                </div>
                <div className="Skill-item">
                    <img src={NodeJsIcon} className="skill-icon" alt="skill" />
                    <p className="Skill-text">Node Js</p>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
