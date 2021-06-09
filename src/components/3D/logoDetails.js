import React from 'react';
import Marginer from '../Marginer/index';
import styled from 'styled-components';
import LogoImg from '../../../src/avatar.png';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const DetailsContainer = styled.div`
    width: 100%:
    height; 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 23px;
  color: #a8d3de;
  font-weight: 800;
  text-transform: uppercase;
  font-family: Zilla Slab Highlight;
  letter-spacing: 0.1rem;
  `;

const SmallText = styled.span`
  font-size: 22px;
  color: #fff;
  font-family: Amatic SC;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0..9rem;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const BuyButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3px;
  background-color: transparent;
  color: #233;
  text-transform: uppercase;
  font-size: 16.8px;
  font-weight: 700;
//   border: 2.3px solid #fff;
border: none;
  outline: none;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    // border: 2.3px solid #fbbe01;
  }
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

const useStyles = makeStyles((theme) => ({

    centerLL: {
        display: "flex",
        justifyContent: "center",
        padding: "1.3rem",
        with: "100%",
        height: "auto",
    },
    centerOne: {
        padding: "2px",
    },
    miniButton: {
        // backgroundColor: "#fbbe01",
        background: "transparent",
        width: "210px",
        height: "37px",
        border: "none",
        color: "#1a5264",
        color: "#fff",
        letterSpacing: "2px",
        cursor: "pointer",
        borderRadius: "3.21rem",
        fontSize: "21px",
        borderBottom: ".4px dotted #222",
        fontWeight: "500",
        padding: "5px",
        lineHeight: "1.4rem",
        fontFamily: "Amatic SC",
        boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.32)",
        hover: {
            color: "#fff",
        }
    }

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
        <Marginer direction="vertical" margin="1.2em" />
        <Box component="div" className={classes.centerLL}>
            <SpacedHorizontalContainer>
                <MediumText>WEB DEVELOPER</MediumText>
                <SmallText> 2021</SmallText>
            </SpacedHorizontalContainer>
        </Box >

        <Marginer direction="vertical" margin=".2em" />
        <BuyButton >
            <Link to="/portfolio">
                <motion.button className={classes.miniButton}
                    variants={buttonVariants}
                    whileHover="hover"
                >Portfolio</motion.button>
            </Link>
        </BuyButton>
        <Box component="div" className={classes.centerLL}>
            <Logo className={classes.centerOne}>
                <img src={LogoImg} alt="logo"></img>
            </Logo>
        </Box >
    </DetailsContainer >;
};