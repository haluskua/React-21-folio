import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DownloadButton from "./DownloadButton";
import "../components/resume.css";

import Animista, {AnimistaTypes} from 'react-animista';
import BcgArt from "./BcgArt";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    padding: "0 0 1.2rem 0",

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
      paddingBottom: "1.6rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  },

  timeLine: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    padding: "1rem",
    margin: "0",
    // background: "#f3f4f7",

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
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-center",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
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
    paddingTop: "5px",
    marginLeft: "0",
    position: "relative",
    margin: "2rem",
    clear: "both",
    background: "#03102185",
    marginTop: "3.4px",
    borderLeft: "1px solid #bda55d",
    borderRadius: "3rem 1rem 4rem 1rem",
    // background: "#f3f4f7",
    boxShadow: "3px 3px 6px #111c50, -3px -3px 6px #002852",

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
      borderColor: "#8eb4dd #7d68d3 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },

    [theme.breakpoints.up("md")]: {
      width: "60%",
      margin: "2.1rem 0",
      "&:before": {
        top: "calc(-6% - 1px)",
        right: "48.9%",
        transform: "rotate(135deg)",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "32px",
    },

    // "&:nth-of-type(2n)": {
    //   float: "right",
    //   margin: "2.2rem 0",
    //   borderColor: "tan",
    // },
    // "&:nth-of-type(2n):before": {
    //   right: "auto",
    //   left: "-0.625rem",
    //   margin: "2.2rem 0",
    //   borderColor: "transparent transparent #bda55d #bda55d",
    // },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "7.375rem",
    margin: "13px 2rem 8px auto",
    fontSize: "1.075rem",
    color: "#8eb4dd",
    lineHeight: "1rem",
    padding: "13px",
    boxShadow: "outset 2px 2px 5px #bda553, outset -3px -3px 7px #0f1b47",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      maxWidth: "14.375rem",
      margin: "0 auto",
      fontSize: "1.17rem",
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
    fontSize: "1.72rem",
    color: "#2f859b",
    fontWeight: "bold",
    padding: "2rem 0",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    // background: "#f4f7ff",
    fontFamily: "'Audiowide', Open Sans",

    [theme.breakpoints.up("md")]: {
      fontSize: "2.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.6rem",
    },
  },
  subHeading: {
    fontSize: "1rem",
    padding: "9px 0 1px 0",
    lineHeight: "1.5rem",
    color: "#a1b9b1",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.14rem",
      lineHeight: "1.2rem",
      textAlign: "center",
    },
  },
  subtitle1: {
    fontSize: "1.25rem",
    lineHeight: "1.41rem",
    fontFamily: "var(---font-family)",
    fontWeight: "bold",
    padding: "5px 0 5px 0",
    textAlign: "left",

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      fontSize: "1.65rem",
      lineHeight: "1.55rem",
      paddingTop: "3px",
    },
  },
  body1: {
    color: "rgb(131 179 157)",
    textAlign: "left",
    width: "100%",
    display: "flex",
    lineHeight: "1.5rem",
    justifyContent: "center",
    letterSpacing: "0.03rem",
    fontFamily: "var(--font-family)",
    fontSize: "15.3px",
    [theme.breakpoints.up("md")]: {
      fontSize: "15.5px",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "1.55rem",
      justifyContent: "flex-start",
      fontSize: "18.5px",
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <BcgArt />
      <Animista
          type={AnimistaTypes.SCALE_UP_BR}
          duration="0.851s"
          style={{
            width: '100%',
            height: "auto",
          }}
        >
      <Typography
        variant="h4"
        align="center"
        className={classes.heading}
        id="bronze__text"
      >
        Experiences
      </Typography>
      
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="0.851s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            Freelancer
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web & Grafix Designer
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
            I am currently a Freelance web app developer and designer.
          </Typography>
        </Box>
        </Animista>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="0.951s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            App Development - Bootcamp
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Enspiral Dev Academy
          </Typography>

          <Typography variant="body1" align="center" className={classes.body1}>
            Certificate in Full stack web development. Coded more than 700+
            hours with ReactJs, API, NodeJs and Knex database with
            server-side-rendering and more. Simulated work environment included
            Agile development, sprints and Kanban board with 10+ group and solo
            projects.
          </Typography>
        </Box>
        </Animista>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="1s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            Diploma in Web Design
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Yoobee School of Design
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Introduction to Web Design. Html, css, Javascript, Php, Jquery,
            WordPress (CMS) and version control with Git & github.
          </Typography>
        </Box>
        </Animista>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="1.15s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            Bachelor in Creative Technology
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Wellington Institute of Technology
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Graduated with a major in Digital Media. A good lesson learned was
            to do plenty of background research before starting any project.
          </Typography>
        </Box>
        </Animista>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2011
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="1.2s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            Bachelor in Exercise Science
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Wellington Institute of Technology
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Personal Trainer: Sports Science
          </Typography>
        </Box>
        </Animista>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2008
        </Typography>
        <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="1.3s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
            id="bronze__text"
          >
            Semi-Pro Rugby League Player
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Canberra Raiders Reserve Grade
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Contracted to play Rugby League for the Queenbean Roos in Canberra.
          </Typography>
        </Box>
        </Animista>
      </Box>
      </Animista>
      <DownloadButton />
    </Box>
  );
};

export default Resume;
