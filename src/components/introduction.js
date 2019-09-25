import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ProfileImage from "../images/dean1.jpg";

const BackgroundSection = ({ className }) => {
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
        // backgroundImage: `url(${ProfileImage})`,
        backgroundPosition: "top 0 right 20%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
    };

    return (
        <BackgroundImage Tag="section" id="test" className={className} fluid={imageData} style={Styles}>
            <section id="introduction" />
        </BackgroundImage>
    );
};

export default BackgroundSection;

// const Introduction = () => {
//     const { contentfulIntroduction } = useStaticQuery(
//         graphql`
//             {
//                 contentfulIntroduction {
//                     introduction {
//                         json
//                     }
//                 }
//             }
//         `,
//     );

//     return (
//         <div>
//             <section id="introduction" style={Styles} />
//         </div>
//     );
// };

// export default Introduction;
