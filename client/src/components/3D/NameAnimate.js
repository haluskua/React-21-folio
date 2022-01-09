import React from "react";
import styled, { keyframes } from "styled-components";
import Marginer from "../Marginer/index";
import SuperQuery from "@themgoncalves/super-query";
import { device } from "../MediaQuery/device";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function NameAnimation() {
  const reactArray = "WEB - DEVELOPER".split("");
  const classes = useStyles();

  return (
    <React.Fragment>
      <Wrapper>
        <Box component="div" className={classes.wordwrap}>
          {reactArray.map((item, index) => (
            <span id="bronze__text" key={index}>
              {item}
            </span>
          ))}
        </Box>
        <SmallText id="bronze__text">& Graphics Designer</SmallText>
      </Wrapper>
      <Marginer direction="vertical" margin=".2rem" />
    </React.Fragment>
  );
}

const animation = keyframes`
0% {
    opacity: 0; 
    transform: translateY(-1px) skewY(5deg) skewX(6deg) rotateZ(2deg);
    filter: blur(1px);
    }

20% { 
     opacity: 1; 
     transform: translateY(-1.3px) skewY(0deg) skewX(0deg) rotateZ(1deg);
     filter: blur(0px) }

65% { 
     opacity: 1; 
     transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
     filter: blur(.21px) }

97% { 
      opacity: 0.841; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(.1px) }

100% { 
      opacity: 0; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(1px) 
      }
`;

const useStyles = makeStyles((theme) => ({
  wordwrap: {
    height: "auto",
    width: "100%",
    padding: "18px",
    display: "flex",
    justifyContent: "space-around",
    background: "var(--bg-color)",
    marginBottom: "0.41rem",
  },
}));

const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  margin: 0;
  font-size: 1.16rem;
  padding: 8px 30px;
  font-weight: 300;
  line-height: 13px;
  /* font-family: var(---font-family); */
  width: 100%;
  font-weight: 900;
  z-index: 999;

  @media ${device.mobileS} and (orientation: portrait) {
    padding: 9px;
  }
  @media ${device.mobileS} and (orientation: landscape) {
    padding: 13px;
  }

  @media ${device.mobileM} and (orientation: portrait) {
    font-size: 1.43rem;
    padding: 15px;
    line-height: 1.5rem;
  }

  ${SuperQuery().minWidth.lg.and.landscape.css`
    // margin-left: -0.5rem;
    width: 70%;
    
  `};

  @media ${device.tablet} and (orientation: landscape) {
    font-size: 1.33rem;
    font-weight: 900;
    line-height: 25px;
  }

  @media ${device.laptop} and (orientation: landscape) {
    padding: 10px;
    line-height: 30px;
  }

  span {
    display: inline-block;
    font-size: 24px;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.15s;
  }
  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    animation-delay: 0.45s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    font-size: 0.01px;
    animation-delay: 1.15s;
  }
  span:nth-child(6) {
    animation-delay: 1.3s;
    color: #5f9ea000;
  }
  span:nth-child(7) {
    animation-delay: 1.45s;
  }
  span:nth-child(8) {
    animation-delay: 2s;
  }
  span:nth-child(9) {
    animation-delay: 2.15s;
  }
  span:nth-child(10) {
    animation-delay: 2.3s;
  }
  span:nth-child(11) {
    animation-delay: 2.45s;
  }
  span:nth-child(12) {
    animation-delay: 2.9s;
  }
  span:nth-child(13) {
    animation-delay: 3.14s;
  }
  span:nth-child(14) {
    animation-delay: 3.29s;
  }
  span:nth-child(15) {
    animation-delay: 3.5s;
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: normal;
  padding: 5px 11px;
  letter-spacing: 0.07rem;
  text-align: center;
  font-weight: 600;
  font-family: var(--font-family);
  ${SuperQuery().minWidth.md.and.portrait.css`
    font-size: 20px;
    padding: 0 9px;
    line-height: 3.5rem;
  `};
  ${SuperQuery().minWidth.md.and.landscape.css`
    font-size: 15px;
    padding: 0 9px;
  `};
  ${SuperQuery().minWidth.lg.and.portrait.css`
    font-size: 18.3px;
  `};
`;
