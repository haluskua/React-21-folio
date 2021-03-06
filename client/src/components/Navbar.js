import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import NoteIcon from "@material-ui/icons/Note";
import WorkIcon from "@material-ui/icons/Work";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../images/crest5.png";
import { motion } from "framer-motion";
import Footer from "../../src/components/Footer";
import NameAnimation from "../components/3D/NameAnimate";

import Animista, { AnimistaTypes } from "react-animista";

// :::::::::::::::::::
//--//component initiated

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box
      className={classes.menuSliderContainer}
      id="menuSliderContainer"
      component="div"
    >
      {/* <Avatar className={classes.avatar} src={avatar} alt="Ompa" /> */}
      <NameAnimation />
      <Divider className={classes.divider_one} />
      <List>
        {menuItems.map((item, i) => (
          <Animista
            type={AnimistaTypes.SCALE_UP_BR}
            duration="0.851s"
            style={{
              width: "100%",
              height: "auto",
            }}
          >
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
              {/* <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon> */}
              <ListItemText
                primary={item.listText}
                className={classes.textColor}
              />
            </ListItem>
          </Animista>
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

// :::::::::::::::::::
//--//styling
const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "auto",
  },
  appBar: {
    background: "var(--bg-color)",
    boxShadow: "var(--color-shadow2)",
    margin: 0,
    position: "fixed",
    width: "auto",
    borderRadius: "2rem 0",
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
    position: "relative",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column-reverse",
    alignItems: "center",
    borderRadius: "2rem 2rem 3rem 3rem !important",
    boxShadow: "var(--color-shadow)",

    //Portrait View Mqueries
    [theme.breakpoints.up("xs")]: {
      height: "auto",
      "@media (orientation: portrait)": {},
    },
    [theme.breakpoints.up("sm")]: {
      height: "auto",
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
      flexDirection: "column-reverse",
      width: "100%",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: landscape)`]: {
      height: "60%",
      flexDirection: "column-reverse",
    },
    [`${theme.breakpoints.up("xl")} and (orientation: landscape)`]: {
      width: "100%",
    },
  },
  // avatar: {
  //   display: "flex",
  //   height: "auto",
  //   border: "none",
  //   width: "36%",
  //   marginBottom: "-51px",
  //   [`${theme.breakpoints.up("sm")} `]: {
  //     width: "55%",
  //   },

  //   [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
  //     width: "22%",
  //     height: "auto",
  //     marginBottom: "0",
  //   },

  //   [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
  //     width: "27%",
  //   },
  // },

  divider_one: {
    height: "7px",
  },
  listItem: {
    color: "#5375a0",
  },
  textColor: {
    "& span": {
      fontSize: "1rem",
      textTransform: "uppercase",
      color: "var(--color-blog)",
      fontFamily: "var(--font-family)",
      letterSpacing: ".0152em",
      lineHeight: "1.5rem",
      [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
        fontSize: "1.07rem",
        letterSpacing: ".1rem",
      },
    },
  },

  hamburger_lines_coat: {
    border: "none",
    padding: "4px",
    borderRadius: "5px 4px 15px 4px",
    background: "var(--bg-color)",
    boxShadow: "var(--color-shadow)",
    [`${theme.breakpoints.up("md")} and (orientation: portrait)`]: {
      padding: "6px",
    },
  },
  hamburger_lines: {
    display: "flex",
    justifyContent: "center",
    color: "#b1a172",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));

// :::::::::::::::::::
//--//List items

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <NoteIcon />, listText: "Resume", listPath: "/resume" },
  { listIcon: <WorkIcon />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <WorkIcon />, listText: "Gallery", listPath: "/gallery" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
  {
    listIcon: <AssignmentInd />,
    listText: "Background",
    listPath: "/background",
  },
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

export default Navbar;
