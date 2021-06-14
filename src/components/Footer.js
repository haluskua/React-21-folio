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
        backgroundColor: "transparent",
    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "rgb(185 184 176 / 58%))",
            width: "70px",
            "&:hover": {
                fill: "tomato",
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
