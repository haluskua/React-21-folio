import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
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
        borderBottom: "2px solid tan",
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
        fontSize: "1.8rem",
        color: "#fff",
        background: "tomato",
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
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "#1ac6ff",
    },
    subtitle1: {
        color: "tan",
        textAlign: "center"
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working & Lerning Experience
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                        ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                        Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                        repudiandae, rerum necessitatibus nisi mollitia.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                        ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                        Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                        repudiandae, rerum necessitatibus nisi mollitia.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                        ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                        Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                        repudiandae, rerum necessitatibus nisi mollitia.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                        ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                        Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                        repudiandae, rerum necessitatibus nisi mollitia.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                        ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                        Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                        repudiandae, rerum necessitatibus nisi mollitia.
          </Typography>

                </Box>
            </Box>
        </Box>
    );
};

export default Resume;
