import React from "react";

// import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";
// import Navbar from "../components/navbar";
// import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import HelmetComponent from "../components/Helmet";
import Introduction from "../components/introduction";
import Main from "../components/main";

const IndexPage = () => (
    <div>
        <CssBaseline />
        <HelmetComponent />
        <Introduction />
        <Main />
        <a href="#top" className="anchor scroll-to-top">
            {/* <i className="fas fa-angle-up" /> */}
            <ExpandLessIcon className="arrow" />
        </a>
    </div>
);

export default IndexPage;
