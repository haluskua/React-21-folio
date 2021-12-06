import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReadMore from "./ReadMore";
import Animista, { AnimistaTypes } from "react-animista";

// Data
const backgrounds = [
  {
    bios: `My name is Omphalus Harkie Kua, and I come from the Highlands of
    Papua New Guinea. My favorite sport is Rugby League and I was
    blessed to be given the opportunity represent my country to play an
    international test against the Australian Kangaroos.
    I enjoy spending time with my family and friends. Recently I
    have been very fascinated with the web and the languages that make
    the web. I appreciate the creative aspects in life, whether it be in
    sports/outdoors, board-games or cooking to music and what I enjoy
    most which is in Design and Coding." `,
    github: `https://github.com/haluskua/crwn-clothing`,
    site: `https://gracious-kilby-61782e.netlify.app/`,
  },
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Animista
        type={AnimistaTypes.SCALE_UP_BR}
        duration="0.851s"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        {backgrounds.map((text, i) => (
          <Grid item xs={12} sm={8} md={12} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    About Me
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.bio}
                  >
                    <Typography>
                      <ReadMore>{text.bios}</ReadMore>
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Animista>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    background: "none",
    boxShadow: "none",
    borderRadius: "3rem 1rem 3rem 1rem",

    [`${theme.breakpoints.up("xs")} `]: {
      maxWidth: "90%",
    },
    [`${theme.breakpoints.up("sm")} `]: {
      maxWidth: "70%",
    },
    [`${theme.breakpoints.up("md")} `]: {
      maxWidth: "68%",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      maxWidth: "52%",
      padding: "2rem",
      margin: "2rem",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: landscape)`]: {
      maxWidth: "54%",
    },
  },
  cardContainer: {
    maxWidth: "88%",
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "2rem 0",
    background: "#031f2185",
    boxShadow: "var(--color-shadow)",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: "88% ",
    },
  },
  title: {
    color: "#85b9f9",
  },

  cardContent: {
    margin: "0",
  },
  bio: {
    fontFamily: "var(--font-family",
    color: "rgb(190, 228, 243)",
    fontSize: "1rem",
    textAlign: "left",
    padding: "4px",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      display: "flex",
      width: "100%",
      alignSelf: "center",
      padding: "10px",
    },
    [`${theme.breakpoints.up("sm")} `]: {
      fontSize: "1.19rem",
      lineHeight: "1.8rem",
      padding: "6px",
    },
    [`${theme.breakpoints.up("md")} `]: {
      fontSize: "1.13rem",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      fontSize: "1.05rem",
    },
  },
}));
