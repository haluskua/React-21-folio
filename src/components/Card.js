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
    bios: `My name is Omphalus Harkie Kua. I am a freelance Web developer 
    and Graphics designer. My goal is to one day own my own business in the creative industry 
    like a media agency focussed on keeping the culture and heritage of the people of 
    Papua New Guinea from being lost completely.  
    I have always been very fascinated with the web and the languages that make
    the web. My area of expertise is in the frontend development, but not without the UX-UI design process and method.
    My background in Graphic design directs most of my creativity in the realm of a frontend developer.
    I appreciate the creative aspects in life, whether it be in
    sports/outdoors, board-games, cooking to music yet nothing beats my interest in 
    Design and Coding. I know of this because I am constantly trying to stay on top of the 
    tech stack that I am involved in.
    My greatest achievement was becoming a father to my son who is now 18years old. I would also consider
    an international League test with the Kangaroos as another great achievement. Also at 14 I won a
    art competition in my age group in my country( PNG ).
    
    All my friends call me Ompa. I am a chill easy going guy that loves to laugh and have a good time with
    friends and family. I play the guitar and enjoy painting as my two main hobbies. 
    I live with my Son, nephew partner and our new born daughter in Wellington.
     
 `,
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
    color: "#66835c",
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
