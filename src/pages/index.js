import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import Navbar from "../components/navbar";
import OldHeader from "../components/old-header";
import Main from "../components/main";

const IndexPage = ({ data }) => (
    <div>
        <Navbar />
        <OldHeader />
        <Main />
    </div>
);

export default IndexPage;

export const query = graphql`
    {
        contentfulHeader {
            name
            introduction {
                content {
                    content {
                        nodeType
                        value
                    }
                }
            }
        }
    }
`;
