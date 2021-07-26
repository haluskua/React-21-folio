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
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/crest_trans_fire.png";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import "../../src/components/Navbar.scss";
import NameAnimation from "../components/3D/NameAnimate";

// import SuperQuery from "@themgoncalves/super-query";

// :::::::::::::::::::
//--//styling
const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "auto",
  },
  appBar: {
    background: "linear-gradient(45deg, #b5664982, #ffcec524)",
    boxShadow: "-4px 6px 1px #3e484d73, -1px -1px 1px #636f6b",
    margin: 0,
    position: "fixed",
    width: "auto",
    // boxShadow: "none",
    // right: 0,
  },
  hamburger: {
    color: "tomato",
  },
  title: {
    color: "#8faab1",
    margin: 0,
    fontSize: "17.4px",
    fontFamily: "Open Sans Condensed",
  },
  menuSliderContainer: {
    // height: "66vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(45deg, #145e73, #fd5555)",
    borderRadius: "4rem 4rem 3rem 3rem !important",
    margin: "15px 0",
    [theme.breakpoints.up("sm")]: {
      // height: "auto",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      flexDirection: "row-reverse",
      width: "100%",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: portrait)`]: {
      height: "60%",
      flexDirection: "column",
    },
    [`${theme.breakpoints.up("xl")} and (orientation: landscape)`]: {
      height: "60%",
      // flexDirection: "column",
      width: "100%",
    },
    // [theme.breakpoints.up("lg")]: {
    //   height: "60%",
    // },
  },
  avatar: {
    display: "flex",
    height: "151px",
    border: "none",
    width: "100%",
    marginBottom: "-41px",
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      width: "22%",
      height: "200px",
      marginBottom: "0",
    },
  },
  listItem: {
    color: "#c2dad8",
  },
  textColor: {
    "& span": {
      fontSize: "1rem",
      color: "#f3fffe;",
      fontWeight: "500",
      letterSpacing: ".033rem",
    },
  },

  hamburger_lines_coat: {
    border: "1px solid #b6774b",
    padding: theme.spacing.unit,
    background: " linear-gradient(45deg, #145e73, #fd5555)",
    borderRadius: "31%",
    boxShadow: "-4px 6px 1px #5d4585a0, -1px -1px 1px #d0575bad",
  },
  hamburger_lines: {
    display: "flex",
    justifyContent: "center",
    color: "#ffb8c0",
    borderRadius: "50%",
    cursor: "pointer",
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

const buttonVariants = {
  hover: {
    scale: [1, 1.03],
    textShadow: "0 0 6px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(179, 255, 255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

// :::::::::::::::::::
//--//component initiated

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Ompa" />
      <NameAnimation />
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
            <ListItemText
              primary={item.listText}
              className={classes.textColor}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav" className={classes.navbar}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton>
              <motion.button
                className={classes.hamburger_lines_coat}
                onClick={() => setOpen(true)}
                variants={buttonVariants}
                whileHover="hover"
              >
                <MenuIcon className={classes.hamburger_lines} />
              </motion.button>
            </IconButton>
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
