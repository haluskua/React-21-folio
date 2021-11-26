import React from "react";
import styled, { keyframes } from "styled-components";
import Marginer from "../Marginer/index";
import SuperQuery from "@themgoncalves/super-query";
import { device } from "../MediaQuery/device";

export default function NameAnimation() {
  const reactArray = "WEB.&.GRAPHICS".split("");

  return (
    <React.Fragment>
      <Wrapper>
        {reactArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        <SmallText>Developer & Designer</SmallText>
      </Wrapper>
      <Marginer direction="vertical" margin="1.2rem" />
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

const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  color: #525252;
  text-transform: uppercase;
  letter-spacing: 0.035rem;
  margin: 0;
  font-size: 1.25rem;
  width: 71%;
  font-weight: 300;
  padding: 3.2em 0 0 0;
  font-family: var(---font-family);
  line-height: 1.3rem;

  @media ${device.mobileS} and (orientation: landscape) {
    font-size: 0.7rem;
  }
  ${SuperQuery().minWidth.lg.and.landscape.css`
    margin-left: -0.5rem;
    
  `};

  @media ${device.tablet} and (orientation: landscape) {
    font-size: 1.117rem;
  }

  span {
    display: inline-block;
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
    color: #5f9ea000;
  }
  span:nth-child(5) {
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
`;

const SmallText = styled.span`
  font-size: 11.2px;
  color: #9ca3a3;
  padding: 0 11px;
  text-align: center;
  ${SuperQuery().minWidth.md.and.landscape.css`
    font-size: 19px;
    padding: 0 9px;
  `};
  ${SuperQuery().minWidth.lg.and.landscape.css`
    font-size: 14px;
  `};
`;
