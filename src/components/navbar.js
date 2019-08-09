import React from "react";

const Navbar = () => (
    <>
        <div className="navbar">
            <div className="icon">
                <a href="./index.html">Portfolio</a>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <li>
                        <a href="./index.html">HOME</a>
                    </li>
                    <li>
                        <a href="./html/skills.html">Skills</a>
                    </li>
                    <li>
                        <a href="./html/projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="./html/resources.html">Resources</a>
                    </li>
                    <li>
                        <a href="./html/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
);

export default Navbar;
