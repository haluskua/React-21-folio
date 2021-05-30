import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

import Footer from "../components/Footer";


// :::::::::::::::::::
//--//styling
const useStyles = makeStyles((theme) => ({

    navbar: {
        background: "#fff",
        padding: "1rem"
    },

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
        // background: "#511",
        background: "#ocococ",
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
    textColor: {
        color: '#233',
    },
}));

// :::::::::::::::::::
//--//List items

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

// :::::::::::::::::::
//--//component initiated

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [navbar, setNavbar] = useState(false);

    const classes = useStyles();

    // :::::::::::::::::::
    //--//UseEffect Hook

    // const changeBackground = () => {
    //     // console.log(window.scrollY);
    //     if (window.scrollY >= 85) {
    //         setNavbar(true);

    //     } else {
    //         setNavbar(false);
    //     }
    // };


    // window.addEventListener('scroll', changeBackground);



    // :::::::::::::::::::
    //--//Drawer component Logic


    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Omphalus H. Kua" />
            <Divider />
            <List>
                {menuItems.map((item, i) => (
                    <ListItem
                        button
                        key={i}
                        className={classes.listItem}
                        onClick={() => setOpen(false)}
                        component={Link}
                        to={item.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.listText} className={classes.textColor} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <React.Fragment>
            <Box component="nav" className={classes.navbar ? classes.active : navbar}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton onClick={() => setOpen(true)}>
                            <ArrowBack className={classes.arrow} />
                        </IconButton>
                        <Typography variant="h5" className={classes.title} gutterBottom>
                            Portfolio
                            </Typography>
                    </Toolbar>
                </AppBar>
            </Box >
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                {sideList()}
                <Footer />
            </Drawer>
        </React.Fragment >
    );
};

export default Navbar;
