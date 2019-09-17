import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, MenuItem } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ToolbarMenu from "./ToolbarMenu";
import "./navbar.css";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    // function onLogin() {
    //     alert("Login TBD");
    // }
    // function onSignup() {
    //     alert("Signup TBD");
    // }

    return (
        <AppBar position="fixed" className="Nav">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    <a href="/" className="Portfolio">
                        Portfolio
                    </a>
                </Typography>

                <ToolbarMenu
                    render={collapsed => (collapsed
                        ? [
                            <MenuItem key="home" onClick="/" autoclose>
                                <AnchorLink offset="100" href="/#home">Home</AnchorLink>
                            </MenuItem>,
                            <MenuItem key="projects">
                                <AnchorLink offset="100" href="/#projects">Projects</AnchorLink>
                            </MenuItem>,
                            <MenuItem key="contact" onClick="#">
                                      Contact
                            </MenuItem>,
                        ]
                        : [
                            
                                <Button key="home" color="inherit" className={classes.menuButton}>
                                          <AnchorLink offset="100" href="#home">Home</AnchorLink>
                                </Button>,
                            <Button key="projects" color="inherit" className={classes.menuButton}>
                                <AnchorLink offset="100" href="#projects">Projects</AnchorLink>
                            </Button>,
                            <Button key="contact" color="inherit" className={classes.menuButton}>
                                      Contact
                            </Button>,
                        ])
                    }
                />
            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
