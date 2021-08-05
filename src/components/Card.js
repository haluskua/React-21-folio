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
    padding: "2rem",
    margin: "2rem",
    [`${theme.breakpoints.up("md")} `]: {
      maxWidth: "68%",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      maxWidth: "52%",
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
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      display: "flex",
      width: "100%",
      alignSelf: "center",
    },
    [`${theme.breakpoints.up("sm")} `]: {
      fontSize: "1.15rem",
    },
    [`${theme.breakpoints.up("md")} `]: {
      fontSize: "1.2rem",
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
            Papua New Guinea. My favorite sport is Rugby League and I was lucky
            to play for my country in an international test against the
            Australian Kangaroos. Recently I have been very fascinated with the
            web and the languages that make the web. <br /> I am a family guy
            that enjoys spending time with family. I appreciate the creative
            aspects in life, whether it be in sports/outdoors, board-games or
            cooking to music and what I enjoy most which is in Design and
            Coding.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
