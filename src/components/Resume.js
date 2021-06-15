import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#f3f3f3",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "0.6px solid grey",
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
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
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
        maxWidth: "16.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.4rem",
        color: "#fff",
        background: "#3d5367",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
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
        fontSize: "2.7rem",
        color: "tomato",
        padding: "3rem 0",
        fontWeight: "bold",
        letterSpacing: "4px",
        textTransform: "uppercase",
        fontFamily: "'Staatliches', Open Sans"

    },
    subHeading: {
        fontSize: "1.4rem",
        color: "#3d5367",
        letterSpacing: "0.9px",
        padding: 0,
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "'Staatliches', Open Sans"

    },
    body1: {
        color: "#59a5b8",
    },
    subtitle1: {
        color: "#3d5367",
        textAlign: "left",
        width: "100%",
        display: "flex",
        fontSize: "0.9rem",
        justifyContent: "center",
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Work & Lerning Experience
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
                        Diploma in Exercise Science
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Wellington Institue of Technologies
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        This course has allowed me to grow and refine my inter-personal skills by writing training and dietary programs. I learned to build trust, communication and confidence both for the clients and myself.
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
                        Bachelor in Creative Technologies
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Wellington Institue of Technologies
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        My major is in Digital Media. I also became very familiar with the Adobe suit. Understanding the 'Creative Industry' on a deeper level and the creative process involved from beginning to end.
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
                        Diploma in Web Design
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Yoobee School of Design
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        Introduction to Web Desigin. Html, css, Javascript, Php, WordPress (CMS).
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
                        Graphics and Web Developer
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Self-employed (Freelancer)
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
                        Bootcamp App Development
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Enspiral Dev Academy
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        Full stack web development. Coded more than 700+ hours with React Js, API, Node and Knex databse with server-side-rendering. Simulated work environment included Agile development, sprints and kanban board with 10+ group and solo projects.
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
                        Job Hunting
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Web Designer & Graphic Designer
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        I am good with Designing UI and UX for great web apps.
                        I also have a good knowledge and understanding of Backend development. My niche is in Frontend web development and Graphic design.
          </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Resume;
