import React from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../MediaQuery/device";

import Animista, { AnimistaTypes } from "react-animista";

export default function TextAnimation() {
  const reactArray = "Wagai weh,".split("");

  return (
    <React.Fragment>
      <Wrapper>
        <Animista
          type={AnimistaTypes.SCALE_UP_TOP}
          duration="10s"
          
          style={{
            width: '100%',
            height: "auto",
            backgroundColor: "#041020",
          }}
        >
          {reactArray.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Animista>
      </Wrapper>
      {/* <SmallText> Web Applications </SmallText> */}
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
      opacity: 0.5; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(1px) 
      }
`;

const Wrapper = styled.span`
  display: inline-block;
  @media ${device.mobileS} {
    font-size: 13px;
    color: #78989f;
    line-height: 1.5rem;
    letter-spacing: 0.2rem;
    padding: 0 40px;
    font-family: var(---font-family);
    text-align: center;
    width: 100%;
    margin-top: -10px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
    padding: 0 1rem;
    letter-spacing: 0.2rem;
  }
  @media ${device.mobileM} and (orientation: landscape) {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 2.3rem;
  }
  @media ${device.laptop} {
    line-height: 1.72rem;
    padding: 0 1rem;
    margin-top: 0;
  }
  @media ${device.laptopL} {
    font-size: 19px;
    padding: 0 7.2rem;
  }

  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.15s;
    font-family: var(---font-family);
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: -0.04rem;
    @media ${device.tablet} {
      font-size: 2.04rem;
    }
  }
  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    animation-delay: 0.45s;
  }
  span:nth-child(4) {
    animation-delay: 1s;
  }

  span:nth-child(5) {
    animation-delay: 1.15s;
  }
  span:nth-child(6) {
    animation-delay: 1.35s;
  }
  span:nth-child(7) {
    animation-delay: 1.45s;
  }
  span:nth-child(8) {
    animation-delay: 1.89s;
  }
  span:nth-child(9) {
    animation-delay: 1.45s;
    font-family: var(---font-family);
    font-size: 1.45rem;
    @media ${device.tablet} {
      font-size: 2.4rem;
    }
    @media ${device.laptop} {
      font-size: 3rem;
      font-weight: 100;
    }
  }
  span:nth-child(10) {
    animation-delay: 2s;
  }
  span:nth-child(11) {
    animation-delay: 0.5s;
    color: #5f9ea000;
  }
  span:nth-child(12) {
    animation-delay: 2.15s;
    font-size: 3rem;
    font-family: var(---font-family);
    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  span:nth-child(13) {
    animation-delay: 2.3s;
    font-size: 1.9rem;
    font-family: var(---font-family);
    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  span:nth-child(14) {
    animation-delay: 2.45s;
    font-size: 1.9rem;
    font-family: var(---font-family);

    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  span:nth-child(15) {
    animation-delay: 3s;
    font-size: 2rem;

    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
`;
