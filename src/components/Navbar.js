import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
// import Apps from "@material-ui/core/Apps";
// import Home from "@material-ui/core/Home";
import Footer from "../components/Footer";




const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#171b1f",
        margin: 0,
        border: "5px"
    },
    menuSliderContainer: {
        width: 22250,
        background: "#511",
        height: "100%",
    },

    listText: {
        color: "tan",
    }
}));

const menuItems = [
    // { listIcon: <Home />, listText: "Home", listPath: "/" },
    // { listIcon: <Resume />, listText: "Resume", listPath: "/resume" },
    // { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    // { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];


const Navbar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Box component="nav">
                <AppBar position="static" className={classes.appbar}>
                    <Typography variant="h5" className={classes.title}>
                        Portfolio
                    </Typography>
                </AppBar>
            </Box>
            <Footer />
        </React.Fragment>
    );
};

export default Navbar;