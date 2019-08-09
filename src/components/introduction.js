import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Introduction = () => {
    const { contentfulIntroduction } = useStaticQuery(
        graphql`
            {
                contentfulIntroduction {
                    introduction {
                        json
                    }
                    background {
                        file {
                            url
                        }
                    }
                }
            }
        `,
    );

    const backgroundStyle = {
        backgroundImage: `url("${contentfulIntroduction.background.file.url}")`,
        opacity: "0.6",
        zIndex: "-1",
        backgroundAttachment: "fixed",
    };

    return (
        <div>
            <section id="introduction" style={backgroundStyle}>
                <div className="container">{documentToReactComponents(contentfulIntroduction.introduction.json)}</div>
            </section>
        </div>
    );
};

export default Introduction;
