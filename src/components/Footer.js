import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
    bottomNavContainer: {
        padding: "1px",
        height: "auto",
        background: "linear-gradient(#a3a4a3, #cccec9b8) !important",

    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "gainsboro",
            width: "70px",
            "&:hover": {
                fill: "#5aaabf",
            },
        },
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.bottomNavContainer}>
            <BottomNavigationAction icon={<Facebook />} className={classes.root} />
            <BottomNavigationAction icon={<Twitter />} className={classes.root} />
            <BottomNavigationAction icon={<Instagram />} className={classes.root} />
        </BottomNavigation>
    );
};
export default Footer;
