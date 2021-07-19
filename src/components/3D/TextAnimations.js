import React from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../MediaQuery/device";

export default function TextAnimation() {
  // const reactArray = "Hello.I.am.Ompa".split("");
  const reactArray = "Welcome,".split("");

  return (
    <React.Fragment>
      <Wrapper>
        {reactArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
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
  color: #8aa7aa;
  margin: 0;
  font-size: 1.2rem;
  /* text-transform: uppercase; */
  /* font-weight: bold; */
  font-family: "Cormarrant", sans-serif;
  @media ${device.tablet} {
    font-size: 37.5px;
  }
  @media ${device.laptop} {
    font-size: 1.7rem;
    font-weight: 100;
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
  //H

  span:nth-child(1) {
    animation-delay: 0.15s;
    font-family: "Caveat";
    text-transform: uppercase;
    font-size: 2.7rem;
    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 4.25rem;
      font-weight: 100;
    }
  }
  //e
  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  //l
  span:nth-child(3) {
    animation-delay: 0.45s;
  }
  //l
  span:nth-child(4) {
    animation-delay: 1s;
  }

  //o
  span:nth-child(5) {
    animation-delay: 1.15s;
  }
  /* DOT */
  span:nth-child(6) {
    animation-delay: 1.35s;
  }
  //I
  span:nth-child(7) {
    animation-delay: 1.45s;
  }
  /* DOT */
  span:nth-child(8) {
    animation-delay: 1.89s;
  }
  //a
  span:nth-child(9) {
    animation-delay: 1.45s;
    font-family: "Caveat";
    font-size: 1.45rem;
    @media ${device.tablet} {
      font-size: 2.4rem;
    }
    @media ${device.laptop} {
      font-size: 3rem;
      font-weight: 100;
    }
  }
  //m
  span:nth-child(10) {
    animation-delay: 2s;
  }
  /* DOT */
  span:nth-child(11) {
    animation-delay: 0.5s;
    color: #5f9ea000;
  }
  //O
  span:nth-child(12) {
    animation-delay: 2.15s;
    font-size: 3rem;
    font-family: "Caveat";
    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  //m
  span:nth-child(13) {
    animation-delay: 2.3s;
    font-size: 1.9rem;
    font-family: "Caveat";
    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  //p
  span:nth-child(14) {
    animation-delay: 2.45s;
    font-size: 1.9rem;
    font-family: "Caveat";

    @media ${device.tablet} {
      font-size: 3.4rem;
    }
    @media ${device.laptop} {
      font-size: 2.5rem;
      font-weight: 100;
    }
  }
  //a
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
  /* span:nth-child(16) {
    animation-delay: 3.15s;
 
  }
  span:nth-child(17) {
    animation-delay: 3.3s;
  } */
  /* span:nth-child(18) {
    animation-delay: 3.45s;
  }
  span:nth-child(19) {
    animation-delay: 4s;
  }
  span:nth-child(20) {
    animation-delay: 4.15s;
  } */
`;

// const SmallText = styled.span`
//   font-size: 24px;
//   color: #a86c57;
//   text-align: center;
//   font-family: "Cinzel";
//   text-transform: uppercase;
//   font-weight: bold;
//   @media ${device.laptop} {
//     font-size: 34px;
//   }
// `;
