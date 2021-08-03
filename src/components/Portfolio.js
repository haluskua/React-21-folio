import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../components/portfolio.scss";

//importing images from folder/files

import project1 from "../images/crest_trans_black.png";
import project2 from "../images/crest_trans_black.png";
import project3 from "../images/crest_trans_black.png";
import project4 from "../images/crest_trans_black.png";
import project5 from "../images/crest_trans_black.png";
import project6 from "../images/crest_trans_black.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#f3f4f7",

    [theme.breakpoints.up("sm")]: {
      padding: "0rem",
    },
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      padding: "0 2.2rem",
    },

    [theme.breakpoints.up("md")]: {
      // padding: "0 2rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0rem 8rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0rem 16rem",
    },
  },
  cardContainer: {
    maxWidth: "88%",
    margin: "3rem auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "3rem 0",
    boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
    background: "#f3f4f7",
    [theme.breakpoints.up("md")]: {
      maxWidth: "90% ",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2.2rem 0rem",
  },

  boldTypo: {
    width: "66%",
    fontFamily: "Nunito Sans",
    fontWeight: "bolder",
    color: "#241214",
    fontSize: "0.9rem",
    boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
    padding: "7px",
    borderRadius: "10px 4px",
    "&:hover": {
      boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      color: "#00e6e6",
    },
  },
  github: {
    width: "66%",
    fontFamily: "Nunito Sans",
    fontSize: "0.9rem",
    boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
    padding: "7px",
    color: "#241214",
    borderRadius: "10px 4px",
    "&:hover": {
      boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      color: "orange",
    },
  },
  projectName: {
    color: "#241214",
    fontSize: "1.5rem",
    lineHeight: "1.41rem",
    fontFamily: "Nunito Sans",
    textTransform: "uppercase",
    fontWeight: "700",
    padding: "0px 0 22px 0",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.65rem",
      lineHeight: "1.55rem",
      paddingTop: "3px",
    },
  },
  pro_text: {
    color: "#231214",
    textAlign: "left",
    width: "100%",
    display: "flex",
    lineHeight: "1.5rem",
    justifyContent: "center",
    fontFamily: "Nunito Sans",
    letterSpacing: "0",
    fontSize: "1.12rem",
    padding: "0 1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1rem",
      padding: "0 1.2rem",
    },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "1.1rem",
    //   padding: "0 1.52rem",
    // },
  },

  imgBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  imgItem: {
    width: "65%",
  },
}));

// Database material

const projects = [
  {
    name: "Portfolio",
    description: `Building my portfolio has improved my coding ability as a developer. From my older portfolio which was built with Html, Sass, Js, Autoprefixer, version control with Git and hosted with gh-pages on github to the more recent one which is the one you are on is built with React and is a prgression from my older one. `,
    image: project1,
    github: `https://github.com/haluskua/React-21-folio`,
    site: `https://haluskua-folio21.netlify.app/`,
  },
  {
    name: "Meetups",
    description: `Production Framework! Server-side (Pre-) Rendering of Pages of File based Routing. Adding nested, dynamic and Routing between pages. Exploring (SSG) with getStaticProps and ServerSideProps.
    Working With Dynamic Path Params in getStaticProps. Connecting  Quering a MongoDB Database. Sending HTTP Requests to API Routes`,
    image: project2,
    github: `https://github.com/haluskua/Meetups`,
    site: `https://meetups-lime.vercel.app/`,
  },
  {
    name: "Restaurant",
    description: `Using Wordpress, with online ordering system by Gloria Foods. Also took photos for content.

    `,
    image: project3,
    github: `https://wordpress.com`,
    site: `https://khanakhazana.co.nz/`,
  },
  {
    name: "Travel Website",
    description: `Dynamic website using Javascript library: GSAP, ScrollMagic and barba-core to apply page transitions, and smooth animations`,
    image: project4,
    github: `https://github.com/haluskua/travel-site`,
    site: `https://haluskua.github.io/travel-site/`,
  },
  {
    name: "Clothing shop",
    description: `React with Redux with Firebase storage API. Responsive design config`,
    image: project5,
    github: `https://github.com/haluskua/crwn-clothing`,
    site: `https://gracious-kilby-61782e.netlify.app/`,
  },
  {
    name: "Financial Company",
    description: `Build with Wordpress (CMS). Implementing Mailchimp for email marketing and Blog setup.`,
    image: project6,
    github: `https://wordpress.com`,
    site: `https://pecxer.co.nz`,
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <Box component="div" className={classes.imgBox}>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="auto"
                    image={project.image}
                    className={classes.imgItem}
                  ></CardMedia>
                </Box>

                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.projectName}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.pro_text}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonContainer}>
                <Button
                  className={classes.github}
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.github}
                >
                  Code+Github
                </Button>
                <Button
                  className={classes.boldTypo}
                  size="small"
                  color="primary"
                  href={project.site}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
