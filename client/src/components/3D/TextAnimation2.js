import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation2() {
  const reactArray = "~~~".split("");

  return (
    <Wrapper>
      {reactArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </Wrapper>
  );
}

const animation = keyframes`
0% {
    opacity: 0; 
    transform: translateY(-4px) skewY(5deg) skewX(6deg) rotateZ(2deg);
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
      opacity: 0.41; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(.1px) }
100% { 
      opacity: 0; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(1px) 
      }
`;
const Wrapper = styled.span`
  display: inline-block;
  color: #25373c;
  text-transform: uppercase;
  margin: 0;
  opacity: 0.44;
  line-height: 1.43rem;
  z-index: 10;
  font-size: 15.25px;
  font-weight: 600;
  font-family: var(--font-family);
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 15.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  }
  span:nth-child(1) {
    animation-delay: 0.15s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.35s;
  }
`;
