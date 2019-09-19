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
            {/* <div className="profile-picture">
                <Img className="profile-picture-img" fluid={data.contentfulHeader.avatar.fluid} alt="" />
            </div> */}

            <div>
                <h1>Dean Phan</h1>
            </div>

            {/* <div>
                <a href="https://www.integrify.fi/" target="_blank">
                    <Img
                        className="logo integrify-logo"
                        fluid={data.contentfulHeader.logo.fluid}
                        alt="integrify logo"
                    />
                </a>
            </div> */}
        </div>
    );
};

export default Header;
