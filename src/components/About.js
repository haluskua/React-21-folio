import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/profile.jpg";
import DownloadButton from "./DownloadButton";
import particlesConfig from "./particlesConfig";


import MediaCard from "./Card";
import Particles from "react-particles-js";
import BcgArt from "./BcgArt";

const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.boxed}>
      <BcgArt />
      <div className={classes.particles_box}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
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

const useStyles = makeStyles((theme) => ({
  boxed: {
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  particles_box: {
    position: "relative",
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
    position: "absolute",
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
  avatar: {
    width: "90%",
    height: "auto",
    boxShadow: "-4px 9px 45px #033c71, 8px 4px 54px #044179",

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "23%",
    },
    [`${theme.breakpoints.up("sm")}`]: {
      width: "65%",
    },
    [`${theme.breakpoints.up("md")}`]: {
      width: "33%",
    },
  },
  [`${theme.breakpoints.up("lg")}`]: {
    width: "35%",
  },
  [`${theme.breakpoints.up("xl")}`]: {
    width: "22%",
  },
  img_box: {
    flexDirection: "column",
    borderRadius: "12.2px",
    alignItems: "center",
    padding: ".5rem",
  },
}));

export default About;
