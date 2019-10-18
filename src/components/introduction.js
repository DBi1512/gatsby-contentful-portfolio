import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const BackgroundSection = () => {
    const data = useStaticQuery(graphql`
        query {
            deanOne: file(relativePath: { eq: "dean1.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const imageData = data.deanOne.childImageSharp.fluid;

    const Styles = {
        backgroundPosition: "top 0 right 20%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        height: "auto",
    };

    return (
        <BackgroundImage Tag="section" id="test" fluid={imageData} style={Styles}>
            <section id="introduction" />
        </BackgroundImage>
    );
};

export default BackgroundSection;
