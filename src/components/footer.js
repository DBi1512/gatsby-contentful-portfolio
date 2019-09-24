import React from "react";
import LinkedInIcon from "../images/linkedin.svg";
import GithubIcon from "../images/github-1.svg";

const Footer = () => (
    <footer>
        <div className="Footer-icons">
            <img src={LinkedInIcon} alt="icon" className="skill-icon" />
            <img src={GithubIcon} alt="icon" className="skill-icon" />
        </div>
    </footer>
);

export default Footer;
