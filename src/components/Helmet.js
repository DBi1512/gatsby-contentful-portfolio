import React from "react";
import Helmet from "react-helmet";

const HelmetComponent = () => {
    const jsx = (
        <Helmet>
            <html lang="en"></html>

            <title>Dean's Portfolio</title>

            {/* Responsive meta tag. Mobile first & scale up components using CSS media queries. */}
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />

            {/* Material-UI was designed with the Roboto font in mind */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

            {/* Font Icons */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            {/* Instal SVG Icons
            In order to use prebuilt SVG Material icons, such as those found in the icons demos you must first install the @material-ui/icons package:
            yarn add @material-ui/icons */}
        </Helmet>
    );
    return jsx;
};

export default HelmetComponent;
