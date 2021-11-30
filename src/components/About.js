import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/profile.jpg";
import DownloadButton from "./DownloadButton";

import MediaCard from "./Card";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "90%",
    height: "auto",
    boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "23%",
    },
    [`${theme.breakpoints.up("sm")}`]: {
      width: "65%",
    },
    [`${theme.breakpoints.up("md")}`]: {
      width: "44%",
    },
  },
  [`${theme.breakpoints.up("lg")}`]: {
    width: "44%",
  },
  [`${theme.breakpoints.up("xl")}`]: {
    width: "35%",
  },

  title: {
    alignSelf: "center",
    color: "#bab4ac",
    marginTop: "2rem",
    fontFamily: "var(---font-family)",
    textTransform: "uppercase",
    fontSize: "1.72rem",
  },
  subtitle: {
    alignSelf: "center",
    color: "#388fa3",
    fontSize: "1rem",
  },
  boxed: {
    display: "flex",
    height: "100%",
    width: "100%",

    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center_box: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "8px",
  },
  typedContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "flex-start",
    width: "100%",
    height: "90vh",
    textAlign: "center",
    zIndex: 1,
    overflow: "scroll",
  },
  column_space: {
    display: "flex",
    flexDirection: "column",
  },
  img_box: {
    flexDirection: "column",
    borderRadius: "12.2px",
    alignItems: "center",
    padding: ".5rem",
  },
}));



const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.boxed}>
        <Box className={classes.typedContainer}>
          <Grid container justify="center" className={classes.img_box}>
            <Avatar className={classes.avatar} src={avatar} alt="Logo" />
            <Box className={classes.column_space}>
              <Typography className={classes.title} variant="h4">
                Artist Statement
              </Typography>

              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={["My background in short "]}
                  typeSpeed={96}
                  backSpeed={50}
                  loop
                />
              </Typography>
              <DownloadButton />
            </Box>
          </Grid>

          <Box className={classes.center_box}>
            <MediaCard />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default About;
