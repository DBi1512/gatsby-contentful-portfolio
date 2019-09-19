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
                }
            }
        `,
    );

    return (
        <div>
            <section id="introduction">{/* <div className="introduction-container" /> */}</section>
        </div>
    );
};

export default Introduction;
