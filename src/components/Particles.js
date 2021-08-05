import React from "react";
// import { Particles as ReactParticles } from "react-tsparticles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/profile.jpg";
import "../components/header.scss";
// import face from "../images/haus.jpg";
// import Accordion from "../components/Accordion";
import MediaCard from "../components/Card";

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
    width: "44%",
  },

  title: {
    alignSelf: "center",
    color: "#231214",
    marginTop: "2rem",
    fontFamily: "Nunito Sans",
    textTransform: "uppercase",
    h4: {
      fontSize: "1.8rem",
    },
  },
  subtitle: {
    alignSelf: "center",
    color: "#231214",
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
    padding: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    padding: "8px",
    // boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
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
    // boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
  },
  column_space: {
    display: "flex",
    flexDirection: "column",
  },
  img_box: {
    // boxShadow: "3px 3px 6px #cecfd4, -3px -3px 6px #fff",
    flexDirection: "column",
    borderRadius: "12.2px",
    padding: ".5rem",
  },
  // particlesCanvas: {
  //   // backgroundColor: "#f3f4f7",
  //   zIndex: "-1",
  //   opacity: "1",
  //   height: "100% !important",
  //   // backgroundImage: `url(${face})`,
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   // width: "calc(20vw * 0.54 - 2%)",
  //   borderRadius: 8,
  //   display: "flex",
  //   backgroundSize: "cover",

  //   // backgroundImage: `url(https://res.allmacwallpaper.com/get/MacBook-Pro-12-inch-4K-Retina-wallpapers/Research-Station-2304x1440/7353-14.jpg)`,
  //   // backgroundImage: `url(../components/images/x.png`,
  //   // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
  // },
}));

const Particles = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.boxed}>
        {/* <ReactParticles
          canvasClassName={classes.particlesCanvas}
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        /> */}

        <Box className={classes.typedContainer}>
          <Grid container justify="center" className={classes.img_box}>
            <Avatar className={classes.avatar} src={avatar} alt="Logo" />
            <Box className={classes.column_space}>
              <Typography className={classes.title} variant="h4">
                ABOUT ME
              </Typography>

              <Typography className={classes.subtitle} variant="h5">
                <Typed
                  strings={["My background in short "]}
                  typeSpeed={96}
                  backSpeed={50}
                  loop
                />
              </Typography>
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

export default Particles;
