import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "../components/resume.scss";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#f3f3f3",
    [theme.breakpoints.up("md")]: {
      padding: "2rem 18rem",
    },
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    background: "#f8f9fd",

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
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    // borderBottom: ".05px solid grey",
    position: "relative",
    margin: "1rem 2rem 1rem 1rem",
    clear: "both",
    background: "linear-gradient(#ffffff, #fffef79e)",
    borderRadius: "4rem 1rem 4rem 1rem",
    boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
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
      width: "44%",
      margin: "1rem",
      padding: "1.7rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
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
    color: "#fff",
    fontFamily: "Caveat",
    background: "#e66262",
    lineHeight: "1rem",
    padding: "1rem",
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
    fontSize: "1.6rem",
    color: "mintcream",
    padding: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    background: "#e66262",
    fontFamily: "'Audiowide', Open Sans",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.6rem",
    },
  },
  subHeading: {
    fontSize: "1.65rem",
    fontWeight: "600",
    color: "#868686",
    padding: "9px 0 2px 0",
    lineHeight: "2.15rem",
    fontFamily: "Caveat",
    textShadow: "0px 0px #e66262",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.21rem",
    },
  },
  body1: {
    color: "#868686",
    fontSize: "0.94rem",
    fontFamily: "Asap",
    textTransform: "uppercase",
    lineHeight: "1.2rem",
    fontWeight: "bold",
    padding: "0px 0 8px 0",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.03rem",
      lineHeight: "2.5rem",
    },
  },
  subtitle1: {
    color: "gray",
    textAlign: "left",
    width: "100%",
    display: "flex",
    lineHeight: "1.4rem",
    justifyContent: "center",
    fontFamily: "Padauk",
    fontSize: "1.13rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
      padding: "0 1.52rem",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Learning experiences
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2012
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Wellington Institute of Technologies
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Diploma in Exercise Science
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            This course has allowed me to grow and refine my inter-personal
            skills by writing training and dietary programs. I learned to build
            trust, communication and confidence both for the clients and myself.
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
            Wellington Institute of Technologies
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bachelor in Creative Technologies
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            My major is in Digital Media. I also became very familiar with the
            Adobe suit. Understanding the 'Creative Industry' on a deeper level
            and the creative process involved from beginning to end.
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
          <Typography variant="body1" align="center" className={classes.body1}>
            Diploma in Web Design
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Introduction to Web Desigin. Html, css, Javascript, Php, WordPress
            (CMS).
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Self-employed (Freelancer)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Graphics and Web Developer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Networking and building simple Websites and Graphics for clients.
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
          <Typography variant="body1" align="center" className={classes.body1}>
            Bootcamp App Development
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Certificate in Full stack web development. Coded more than 700+
            hours with React Js, API, Node and Knex databse with
            server-side-rendering. Simulated work environment included Agile
            development, sprints and kanban board with 10+ group and solo
            projects.
          </Typography>
        </Box>
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
            Web Designer & Graphic Designer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Job Hunting
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I am good with Designing UI and UX for great web apps. I also have a
            good knowledge and understanding of Backend development. My niche is
            in Frontend web development and Graphic design.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
