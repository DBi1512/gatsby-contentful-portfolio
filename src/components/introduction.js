import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ProfileImage from "../images/dean1.jpg";

const Styles = {
    backgroundImage: `url(${ProfileImage})`,
    backgroundPosition: "top 0 right 20%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    position: "relative",
};

const Introduction = () => {
    const { contentfulIntroduction } = useStaticQuery(
        graphql`
            {
                contentfulIntroduction {
                    introduction {
                        json
                    }
                }
            }
        `,
    );

    return (
        <div>
            <section id="introduction" style={Styles} />
        </div>
    );
};

export default Introduction;
