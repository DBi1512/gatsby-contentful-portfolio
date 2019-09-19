import React from "react";
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
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactsIcon from "@material-ui/icons/Contacts";

import ToolbarMenu from "./ToolbarMenu";
import "./navbar.css";

const drawerWidth = 200;

// const styles = {
//     root: {
//         flexGrow: 1,
//     },
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// };

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
      setMobileOpen(false);
    }

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
                    <p>Front-end Developer</p>
                </div>
            </a>

            <Divider />

            <a href="#about" onClick={handleDrawerClose}>
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
            </a>

            <a href="#projects" onClick={handleDrawerClose}>
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
            </a>

            <a href="#contact" onClick={handleDrawerClose}>
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
            </a>
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
                    <div className="Author">
                        <Typography variant="h6" noWrap>
                            Dean Phan
                        </Typography>
                        <p>Front-end Developer</p>
                    </div>
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
            {/* <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </main> */}
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

// function ButtonAppBar(props) {
//     const { classes } = props;
//     // function onLogin() {
//     //     alert("Login TBD");
//     // }
//     // function onSignup() {
//     //     alert("Signup TBD");
//     // }

//     return (
//         <AppBar position="sticky" className="Nav">
//             <Toolbar>
//                 <Typography variant="title" color="inherit">
//                     <a href="/" className="Portfolio">
//                         <strong>Portfolio</strong>
//                     </a>
//                 </Typography>

//                 <ToolbarMenu
//                     render={collapsed => (collapsed
//                         ? [
//                             <MenuItem key="home" autoclose>
//                                 <AnchorLink offset="100" href="#home">Home</AnchorLink>
//                             </MenuItem>,
//                             <MenuItem key="projects" autoclose>
//                                 <AnchorLink offset="100" href="#projects">Projects</AnchorLink>
//                             </MenuItem>,
//                             <MenuItem key="contact" autoclose>
//                                 <AnchorLink href="#contact">Contact</AnchorLink>
//                             </MenuItem>,
//                         ]
//                         : [

//                                 <Button key="home" color="inherit" className={classes.menuButton}>
//                                           <AnchorLink offset="100" href="#home">Home</AnchorLink>
//                                 </Button>,
//                             <Button key="projects" color="inherit" className={classes.menuButton}>
//                                 <AnchorLink offset="100" href="#projects">Projects</AnchorLink>
//                             </Button>,
//                             <Button key="contact" color="inherit" className={classes.menuButton}>
//                                 <AnchorLink offset="100" href="#contact">Contact</AnchorLink>

//                             </Button>,
//                         ])
//                     }
//                 />
//             </Toolbar>
//         </AppBar>
//     );
// }

// export default withStyles(styles)(ButtonAppBar);
