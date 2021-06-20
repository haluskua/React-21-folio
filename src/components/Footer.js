import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import SclMedia from "./MediaQuery/Footer/Mq_Footer";


const useStyles = makeStyles({
    bottomNavContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "1px",
        height: "auto",
        marginLeft: "-2.3rem",
        marginTop: "11px",
        background: "linear-gradient(180deg, #c9e9f1, #adccd4)"

    },
    root: {
        "& .MuiSvgIcon-root": {
            fill: "#588d9a",
            width: "18px",

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
            <SclMedia>
                <BottomNavigationAction icon={<Facebook />} className={classes.root} />
                <BottomNavigationAction icon={<Twitter />} className={classes.root} />
                < BottomNavigationAction icon={<Instagram />} className={classes.root} />
            </SclMedia>

        </BottomNavigation>
    );
};
export default Footer;
