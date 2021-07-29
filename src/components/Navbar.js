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
import avatar from "../images/crest_trans_brown.png";
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
    background: "linear-gradient(45deg, #667370, #ffcec524)",
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
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(45deg, #384552, #588c90)",
    borderRadius: "2rem 2rem 3rem 3rem !important",
    boxShadow:
      "-4px 6px 1px #3e484d73, -1px -1px 1px rgba(102, 51, 102, 0.174)",

    //Portrait View Mqueries
    [theme.breakpoints.up("xs")]: {
      height: "85vh",
      "@media (orientation: landscape)": {},
    },
    [theme.breakpoints.up("sm")]: {
      height: "60%",
    },

    //Landscape View Mqueries

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "100%",
      margin: "0 auto",
      height: "70% !important",
      flexDirection: "row-reverse",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      flexDirection: "row-reverse",
      width: "100%",
      height: "auto",
    },

    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      flexDirection: "row-reverse",
      width: "100%",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: landscape)`]: {
      height: "60%",
      flexDirection: "row-reverse",
    },
    [`${theme.breakpoints.up("xl")} and (orientation: landscape)`]: {
      // flexDirection: "column",
      width: "100%",
    },
  },
  avatar: {
    display: "flex",
    height: "auto",
    border: "none",
    width: "100%",
    marginBottom: "-41px",

    //Portrait View Mqueries
    [theme.breakpoints.up("xs")]: {
      marginBottom: "-100px",
    },

    //Landscape View Mqueries

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "22%",
      height: "auto",
      marginBottom: "0",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      width: "27%",
    },
  },
  listItem: {
    color: "#c2dad8",
  },
  textColor: {
    "& span": {
      fontSize: "0.89rem",
      letterSpacing: "0.3rem",
      color: "#f3fffe;",
      fontWeight: "500",
      letterSpacing: ".085rem",
      lineHeight: "1.2rem",
    },
  },

  hamburger_lines_coat: {
    border: "1px solid #a0a8a6",
    padding: theme.spacing.unit,
    background: "linear-gradient(45deg, #495854, #ffcec524)",
    borderRadius: "31%",
    boxShadow: "-4px 6px 1px #606d6a, -1px -1px 1px #a1a4a2",
  },
  hamburger_lines: {
    display: "flex",
    justifyContent: "center",
    color: "#e3e6e5",
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
