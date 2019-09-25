/* eslint-disable react/jsx-indent-props */
import React from "react";
import ReactResizeDetector from "react-resize-detector";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Button, MenuItem } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";

import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactsIcon from "@material-ui/icons/Contacts";
import LinkedInIcon from "../images/linkedin.svg";
import GithubIcon from "../images/github-1.svg";

import ToolbarMenu from "./ToolbarMenu";
import "./navbar.css";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            display: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [offset, setOffset] = React.useState(0);

    // Requiring function causes error during builds
    // as the code tries to reference window
    // const module = require("module") // Error
    // // Wrap the require in check for window
    // if (typeof window !== `undefined`) {
    //   const module = require("module")
    // }
    // React.useEffect(() => {
    //     if (typeof window !== "undefined" && window.matchMedia("(max-width: 600px)").matches) {
    //         setOffset(75);
    //     } else {
    //         setOffset(0);
    //     }
    // }, []);

    const HandleWindowResize = () => {
        if (typeof window !== "undefined" && window.matchMedia("(max-width: 600px)").matches) {
            setOffset(75);
        } else {
            setOffset(0);
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <div>
            <a href="#" className={classes.toolbar} onClick={handleDrawerClose}>
                <div className="Navbar-side">
                    <h1 className="Navbar-title">
                        Dean
                        {" "}
                        <br />
                        {" "}
                        Phan
                    </h1>
                    <p className="para">Front-end Developer</p>
                </div>
            </a>

            <Divider />

            <ReactResizeDetector handleWidth onResize={HandleWindowResize} refreshMode="throttle" refreshRate={100}>
                <AnchorLink offset={offset} href="#about" onClick={handleDrawerClose}>
                    <List>
                        <ListItem button className="Navbar-item Red-hover">
                            <ListItemIcon>
                                <PersonIcon className="svg_icons Red" />
                            </ListItemIcon>
                            <ListItemText className="Navbar-item-text">
                                <p>About</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </AnchorLink>

                <AnchorLink offset={offset} href="#skills" onClick={handleDrawerClose}>
                    <List>
                        <ListItem button className="Navbar-item Green-hover">
                            <ListItemIcon>
                                <VpnKeyIcon className="svg_icons Green" />
                            </ListItemIcon>
                            <ListItemText className="Navbar-item-text">
                                <p>Skills</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </AnchorLink>

                <AnchorLink offset={offset} href="#projects" onClick={handleDrawerClose}>
                    <List>
                        <ListItem button className="Navbar-item Blue-hover">
                            <ListItemIcon>
                                <DashboardIcon className="svg_icons Blue" />
                            </ListItemIcon>
                            <ListItemText className="Navbar-item-text">
                                <p>Projects</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </AnchorLink>

                <AnchorLink offset={offset} href="#contact" onClick={handleDrawerClose}>
                    <List>
                        <ListItem button className="Navbar-item Purple-hover">
                            <ListItemIcon>
                                <ContactsIcon className="Purple" />
                            </ListItemIcon>
                            <ListItemText className="Navbar-item-text">
                                <p>Contact</p>
                            </ListItemText>
                        </ListItem>
                    </List>
                </AnchorLink>

                <Divider />

                <div className="Contact-icons">
                    <a href="https://www.linkedin.com/in/dbi1512/" target="_blank" className="Icon-link">
                        <img src={LinkedInIcon} alt="icon" className="Contact-icon" />
                    </a>

                    <a href="https://github.com/DBi1512" target="_blank" className="Icon-link">
                        <img src={GithubIcon} alt="icon" className="Contact-icon" />
                    </a>
                </div>
            </ReactResizeDetector>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className="Navbar-mobile">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon className="Hamburger-menu" />
                    </IconButton>
                    <a href="#" className="Author">
                        <Typography variant="h6" noWrap className="Author-title">
                            Dean Phan
                        </Typography>
                        <p>Front-end Developer</p>
                    </a>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === "undefined" ? Object : Element),
};

export default ResponsiveDrawer;
