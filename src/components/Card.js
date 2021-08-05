import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    background: "none",
    boxShadow: "none",
    // boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
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
      maxWidth: "35%",
    },
  },
  cardContent: {
    margin: "0",
  },
  bio: {
    fontFamily: "Nunito Sans",
    color: "#231214",
    fontSize: "1rem",
    textAlign: "left",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      display: "flex",
      width: "100%",
      alignSelf: "center",
    },
    [`${theme.breakpoints.up("sm")} `]: {
      fontSize: "1.19rem",
      lineHeight: "1.8rem",
    },
    [`${theme.breakpoints.up("md")} `]: {
      fontSize: "1.13rem",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      fontSize: "1.05rem",
    },
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Artist
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.bio}
          >
            My name is Omphalus Harkie Kua, and I come from the Highlands of
            Papua New Guinea. My favorite sport is Rugby League and I was
            blessed to be given the opportunity represent my country to play an
            international test against the Australian Kangaroos.
            <br /> I enjoy spending time with my family and friends. Recently I
            have been very fascinated with the web and the languages that make
            the web. I appreciate the creative aspects in life, whether it be in
            sports/outdoors, board-games or cooking to music and what I enjoy
            most which is in Design and Coding.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
