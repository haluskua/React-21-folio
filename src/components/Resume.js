import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "../components/resume.scss";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#f3f4f7",
    padding: "0 ",

    [theme.breakpoints.up("sm")]: {
      padding: "0rem 2rem",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0rem 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0rem 18rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0rem 22rem",
    },
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0",
    background: "#f3f4f7",

    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "0.6px solid #967f7f",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1.5rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0",
   
    },
  },

  timeLineItem: {
    padding: "1.5rem",
    marginLeft: "0",
    position: "relative",
    margin: "2rem",
    clear: "both",
    borderRight: "1px solid #ff6347",
    borderRadius: "3rem 1rem 4rem 1rem",
    background: "#f3f4f7",
    boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",

    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",

    },

    [theme.breakpoints.up("md")]: {
      width: "80%",
      margin: "2.1rem 0",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "2.2rem 0" ,
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        margin: "2.2rem 0" ,
        borderColor: "transparent transparent tomato tomato",
      },
    },

  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "10.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.74rem",
    fontWeight: "bold",
    background: "#f3f4f7",
    color: "#ff6347",
    borderBottom: "1px solid #ff6347",
    fontFamily: "Caveat",
    lineHeight: "1rem",
    padding: "1rem",
    boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      maxWidth: "14.375rem",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },

      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },

  heading: {
    fontSize: "1.73rem",
    color: "tomato",
    fontWeight: "bold",
    padding: "2rem 0",
    textTransform: "uppercase",
    background: "#f3f4f7",
    fontFamily: "'Audiowide', Open Sans",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.6rem",
    },
  },
  subHeading: {
    fontSize: "1rem",
    color: "rgb(47 133 155)",
    padding: "9px 0 1px 0",
    lineHeight: "1.5rem",
    textShadow: "0px 0px rgb(34 16 18)",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.14rem",
      lineHeight: "1.2rem",
      textAlign: "center",
    },
  },
  subtitle1: {
    color: "#2f859b",
    fontSize: "1.35rem",
    lineHeight: "1.41rem",
    fontFamily: "Oxygen",
    fontWeight: "600",
    padding: "0px 0 22px 0",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: "1.65rem",
      lineHeight: "1.55rem",
      paddingTop: "3px",
    },
  },
  body1: {
    color: "#231214",
    textAlign: "left",
    width: "100%",
    display: "flex",
    lineHeight: "1.5rem",
    justifyContent: "center",
    letterSpacing: "0",
    fontFamily: "Nunito Sans",
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "1.68rem",

    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Experiences
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web & Grafix Designer
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Freelancer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            I am currently a Freelance web app developer and designer.
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Enspiral Dev Academy
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            App Development - Bootcamp
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Certificate in Full stack web development. Coded more than 700+
            hours with ReactJs, API, NodeJs and Knex database with
            server-side-rendering and more. Simulated work environment included
            Agile development, sprints and Kanban board with 10+ group and solo
            projects.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Yoobee School of Design
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Diploma in Web Design
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Introduction to Web Design. Html, css, Javascript, Php, Jquery,
            WordPress (CMS) and version control with Git & github.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Wellington Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Bachelor in Creative Technology
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Graduated with a major in Digital Media. A good lesson 
            learned was to do plenty of background research before starting any
            project.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2011
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Wellington Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Bachelor in Exercise Science
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Personal Trainer: Sports Science
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2008
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Canberra Raiders Reserve Grade
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Semi-Pro Rugby League Player
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Contracted to play Rugby League for the Queenbean Roos in Canberra.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
