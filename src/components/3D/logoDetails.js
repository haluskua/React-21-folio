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
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 13px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BuyButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6px;
  background-color: #fbbe01;
  color: #233;
  text-transform: uppercase;
  font-size: 16.8px;
  font-weight: 700;
  border: 2.3px solid #fff;
  outline: none;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1.5px solid #fbbe01;
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
        backgroundColor: "#fbbe01",
        width: "210px",
        height: "37px",
        border: "none",
        color: "#233",
        letterSpacing: "1.3px",
        cursor: "pointer",
        borderRadius: ".21rem",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "5px",
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
        <SmallText>Experienced Intermediate</SmallText>
        <Marginer direction="vertical" margin="1.2em" />
        <Box component="div" className={classes.centerLL}>
            <SpacedHorizontalContainer>
                <MediumText> Fullstack Developer</MediumText>
                <SmallText> 2021</SmallText>
            </SpacedHorizontalContainer>
        </Box >

        <Marginer direction="vertical" margin=".2em" />
        <BuyButton >
            <Link to="/portfolio">
                <motion.button className={classes.miniButton}
                    variants={buttonVariants}
                    whileHover="hover"
                >Menu</motion.button>
            </Link>
        </BuyButton>
        <Box component="div" className={classes.centerLL}>
            <Logo className={classes.centerOne}>
                <img src={LogoImg} alt="logo"></img>
            </Logo>
        </Box >
    </DetailsContainer >;
};