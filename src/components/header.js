import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                contentfulHeader {
                    avatar {
                        fluid(maxHeight: 150, maxWidth: 150) {
                            base64
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    logo {
                        fluid {
                            base64
                            tracedSVG
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        `,
    );

    return (
        <div className="profile" id="home">
            <div>
                <h1>Dean Phan</h1>
            </div>
        </div>
    );
};

export default Header;
