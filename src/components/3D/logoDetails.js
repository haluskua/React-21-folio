import React from "react";
import Marginer from "../Marginer/index";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SuperQuery from "@themgoncalves/super-query";
import { device } from "../MediaQuery/device";
// import Toolbar from "@material-ui/core/Toolbar";
// import ArrowBack from "@material-ui/icons/ArrowBack";
// import Typography from "@material-ui/core/Typography";

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import IconButton from "@material-ui/core/IconButton";

// const buttonVariants = {
//   hover: {
//     scale: [1, 1.03],
//     textShadow: "0 0 6px rgb(255, 255, 255)",
//     boxShadow: "0px 0px 8px rgb(179, 255, 255)",
//     transition: {
//       duration: 0.5,
//       yoyo: Infinity,
//     },
//   },
// };

export function LogoDetails(props) {
  const classes = useStyles();

  return (
    <DetailsContainer>
      <Marginer direction="vertical" margin="0em" />
      <Box component="div" className={classes.centerLL}></Box>
      <SmallText>I'm a Freelance Web Developer and Graphic Designer</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>I enjoy the art of coding beautiful design</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin=".5em" />
      {/* <Toolbar>
        <Link to="/portfolio">
          <IconButton className={classes.main_button}>
            <motion.button
              className={classes.hamburger_lines}
              variants={buttonVariants}
              whileHover="hover"
            >
              <ArrowBack className={classes.hamburger_lines} />
            </motion.button>
          </IconButton>
        </Link>
        <Marginer direction="vertical" margin="8.2em" />
        <Typography variant="h5" className={classes.title} gutterBottom>
          My Portfolio
        </Typography>
      </Toolbar> */}
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em;
`;

const MediumText = styled.span`
  font-size: 16px;
  color: #241214;
  line-height: 1.5rem;
  letter-spacing: 0.03rem;
  font-weight: 500;
  padding: 0 40px;
  font-family: "Caveat", sans-serif;
  text-align: center;
  width: 100%;
  margin-top: 1rem;

  @media ${device.mobileM} {
    font-size: 20px;
    padding: 0 1rem;
  }
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 2.3rem;
  }
  @media ${device.laptop} {
    font-size: 1.6rem;
    line-height: 1.72rem;
    padding: 0 3rem;
  }
  @media ${device.laptopL} {
    font-size: 1.7rem;
    padding: 0 7.2rem;
  }
`;

const SmallText = styled.span`
  font-size: 18px;
  color: #353a24;
  padding: 0 1rem;
  font-weight: 500;
  line-height: 1.588rem;
  text-align: center;
  font-family: "Nunito San", sans-serif;
  ${SuperQuery().minWidth.xs.and.landscape.css`
    padding: 0 4.3rem;
    font-size: 20px;
    
  `};

  @media ${device.mobileS} and (orientation: landscape) {
    font-size: 16.5px;
    padding: 0 4.2rem;
    line-height: 1.5em;
  }
  @media ${device.mobileM} {
    font-size: 21.5px;
    line-height: 1.82rem;
  }
  //using both device and superQuery to create responsive code.
  @media ${device.mobileM} and (orientation: landscape) {
    padding: 0 2rem;
  }
  ${SuperQuery().minWidth.sm.and.landscape.css`
    font-size: 21px;
    line-height: 1.7rem;
    
  `};

  @media ${device.tablet} {
    font-size: 35px;
    line-height: 2.52rem;
  }
  ${SuperQuery().minWidth.md.and.landscape.css`
    padding: 1.3rem;
    font-size: 30px;
    line-height: 2rem;
    
  `};
  @media ${device.laptop} {
    font-size: 26px;
    line-height: 2rem;
    padding: 0 3rem;
  }
  ${SuperQuery().minWidth.lg.and.landscape.css`
    padding: 0 .3rem;
    
  `};
  @media ${device.laptopL} {
    font-size: 32px;
    line-height: 3.42rem;
    padding: 0 7.2rem;
  }
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const useStyles = makeStyles((theme) => ({
  centerLL: {
    display: "flex",
    justifyContent: "center",
    padding: ".03rem",
    with: "100%",
    height: "auto",
  },
  centerOne: {
    padding: "2px",
  },
  hamburger_lines: {
    display: "flex",
    justifyContent: "center",
    background: "#dc5656",
    color: "#fff",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "5px",
    padding: "1px",
    border: "none",
    boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.32)",
  },

  main_button: {
    background: "#241214",
    padding: "1rem",
  },
  // title: {
  //   color: "#f6f6fd",
  //   marginTop: "1rem",
  //   fontSize: "15.5px",
  //   letterSpacing: ".43px",
  //   marginLeft: "0.61rem",
  //   // fontStyle: "italic",
  //   fontFamily: "Quicksand",
  //   lineHeight: "1.5rem",
  //   [theme.breakpoints.up("sm")]: {
  //     fontSize: "21px",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     fontSize: "18px",
  //   },
  // },
}));
