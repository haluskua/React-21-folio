import React, { useState } from "react";
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
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import { motion } from 'framer-motion';
import Footer from "../components/Footer";

// :::::::::::::::::::
//--//styling
const useStyles = makeStyles((theme) => ({

    navbar: {
        background: "#fff",
    },
    appbar: {
        background: "rgb(52 84 132 / 23%)",
        margin: 0,
        position: "absolute",
    },
    hamburger: {
        color: "tomato",
    },
    title: {
        color: "#fff",
        margin: 0,
        fontSize: "28px",
        fontFamily: "Amatic SC",

    },
    menuSliderContainer: {
        width: 250,
        // backgroundColor: "#511",
        backgroundColor: "#1e5b6f",
        height: "100%",
        border: "0.21px solid #003333"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
        border: "none"
    },
    listItem: {
        color: "tan",
    },
    textColor: {
        color: '#fff',
    },
    hamburger_lines: {
        display: "flex",
        justifyContent: "center",
        background: "rgb(48 144 169 / 58%)",
        color: "#fff",
        borderRadius: "50%",
        cursor: "pointer",
        padding: "5px",
        border: "none",

    }
}));


// :::::::::::::::::::
//--//List items

const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];


const buttonVariants = {
    hover: {
        scale: [1, 1.03],
        textShadow: "0 0 6px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(179, 255, 255)",
        transition: {
            duration: .5,
            yoyo: Infinity
        }
    }
};




// :::::::::::::::::::
//--//component initiated

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} src={avatar} alt="Ompa" />
            <Divider />
            <List>
                {menuItems.map((item, i) => (
                    <ListItem
                        variants={buttonVariants}
                        whileHover="hover"
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
            <Box component="nav" className={classes.navbar}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton >
                            <motion.button className={classes.hamburger_lines}
                                onClick={() => setOpen(true)}
                                variants={buttonVariants}
                                whileHover="hover">
                                <MenuIcon
                                    className={classes.hamburger_lines} />
                            </motion.button>
                        </IconButton>
                        <Typography variant="h5" className={classes.title} gutterBottom>
                            Menu
                            </Typography>

                    </Toolbar>
                </AppBar>
            </Box >
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)}
            >
                {sideList()}
                <Footer />
            </Drawer>
        </React.Fragment >
    );

};

export default Navbar;
