import React from "react";

// import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";
// import Navbar from "../components/navbar";
// import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import HelmetComponent from "../components/Helmet";
import Introduction from "../components/introduction";
import Header from "../components/header";
import Main from "../components/main";

const IndexPage = () => (
    <div>
        <CssBaseline />
        <HelmetComponent />
        {/* <Header /> */}
        <Introduction />

        <Main />
    </div>
);

export default IndexPage;
