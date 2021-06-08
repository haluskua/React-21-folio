
import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function TextAnimation() {
    return <Wrapper>Ompha lus</Wrapper>;
}

const animation = keyframes`
 0% {
     opacity: 0; 
     transform: translateY(-75px) skewY(5deg) skewX(10deg) rotateZ(10deg);
     filter: blur(6px);
     }
 20% { 
      opacity: 1; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px) }
 85% { 
      opacity: 1; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(1px) }
 97% { 
       opacity: 0.1; 
       transform: translateY(-5px) skewY(10deg) skewX(10deg) rotateZ(7deg);
       filter: blur(5px) }
 100% { 
       opacity: 0; 
       transform: translateY(-75px) skewY(5deg) skewX(10deg) rotateZ(7deg);
       filter: blur(2px) }
`;

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    z-index: 10;
    font-size: 36px;
    font-weight: 900;
`;
