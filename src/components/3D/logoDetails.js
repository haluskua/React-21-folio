import React from 'react';
import Marginer from '../Marginer/index';
import styled from 'styled-components';
import LogoImg from '../../../src/avatar.png';
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";



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
        background: "rgb(48 144 169 / 58%)",
        color: "#fff",
        borderRadius: "50%",
        cursor: "pointer",
        margin: "5px",
        padding: "1px",
        border: "none",
        boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.32)",
    },
    title: {
        color: "#000",
        margin: 0,
        textTransform: "uppercase",
        fontSize: "17px",
        letterSpacing: ".3px",
        fontFamily: "Open Sans Condensed",

    },
}));

const buttonVariants = {
    hover: {
        scale: [1, 1.03],
        textShadow: "0 0 6px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(179, 255, 255)",
        transition: {
            duration: .5,
            yoyo: Infinity
        }
    }
};

export function LogoDetails(props) {
    const classes = useStyles();

    return <DetailsContainer>
        <SmallText>FRONTEND UI | UX FULLSTACK </SmallText>
        <Marginer direction="vertical" margin=".3em" />
        <Box component="div" className={classes.centerLL}>
            <SpacedHorizontalContainer>
                <MediumText>WEB DEVELOPER</MediumText>
                <SmallText> 2021</SmallText>
            </SpacedHorizontalContainer>
        </Box >

        <Toolbar>
            <Link to="/portfolio">
                <IconButton >
                    <motion.button className={classes.hamburger_lines}
                        variants={buttonVariants}
                        whileHover="hover">
                        <ArrowBack
                            className={classes.hamburger_lines} />
                    </motion.button>
                </IconButton>
            </Link>
            <Marginer direction="vertical" margin="8.2em" />
            <Typography variant="h5" className={classes.title} gutterBottom>
                Portfolio
                </Typography>

        </Toolbar>

        <Box component="div" className={classes.centerLL}>
            <Logo className={classes.centerOne}>
                <img src={LogoImg} alt="logo"></img>
            </Logo>
        </Box >
    </DetailsContainer >;
};

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 21.5px;
  color: #172f35;
  font-weight: 800;
  text-transform: uppercase;
  font-family: Open Sans Condensed;
  line-height: 1.5rem;
  `;

const SmallText = styled.span`
  font-size: 18.6px;
  color: #000;
  font-family: Open Sans Condensed;
  font-weight: 400;
  text-align: center;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Logo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
      width: auto;
      height: 48px;
  }
`;