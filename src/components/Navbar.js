import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Home from "@material-ui/icons/Home";
import Footer from "../components/Footer";


const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0,
    },
    arrow: {
        color: "tomato",
    },
    title: {
        color: "tan",
    },
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "tan",
    },
}));

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    // Creating the functionality for SIDE-PANEL

    const sideList = () => (
        <Box component="nav">
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton onClick={() => setOpen(true)}>
                        <ArrowBack className={classes.arrow} />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Portfolio
            </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );

    return (
        <React.Fragment>

            <Box component="nav">
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton onClick={() => setOpen(true)}>
                            <ArrowBack className={classes.arrow} />
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            Portfolio
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                {sideList()}
                <Footer />
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;