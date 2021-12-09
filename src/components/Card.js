import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReadMore from "./ReadMore";
import Animista, { AnimistaTypes } from "react-animista";

let bio = `My name is Omphalus Harkie Kua.\n 
I am a freelance Web developer and Graphics designer. My goal is to one day own a design and development firm in Papua New Guinea(PNG) where I would like to give back by helping to preserve the culture and heritage of the people of PNG.

I have always been fascinated with the web and the languages that create content on the web. My area of expertise is in the frontend development, but not without the UX-UI design process and methods. My background in Graphic design directs most of my creativity in the realm of a frontend developer.

My greatest achievement was to play for my country in an international Rugby League test against the Australian Kangaroos. At 14 I won a national art competition for my age group.

I enjoy outdoors, board-games, cooking, playing guitar and spending time with family and friends. If I am not doing any of my hobbies, I am constantly trying to stay on top of the technology within my field by learning new tricks.
I live with my small family in Wellington New Zealand. `;

export const parsLineBreak = (txt) => {
  return txt?.split("\n").map(function (item, idx) {
    return (
      <React.Fragment key={"line_br_" + idx}>
          {item}
          <br />
      </React.Fragment>
    );
  });
};
export default function MediaCard() {
  const classes = useStyles();

  // Data
  const backgrounds = [
    {
      bios: `${bio}`,
      github: `https://github.com/haluskua/React-21-folio`,
      site: `https://https://haluskua-folio21.netlify.app/`,
    },
  ];

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
                    <Typography component="p" className={classes.bios_box}>
                      {parsLineBreak(text.bios)}
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
    color: "#437e5b",
  },
  bios_box: {
    maxWidth: "500px",
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      maxWidth: "740px",
    },
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
