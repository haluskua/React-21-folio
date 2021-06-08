import React from 'react';
import Logo from "../../../src/images/background-man-min.png";
import styled, { keyframes } from 'styled-components';

export default function LogoAnimation() {

    return (
        <Wrapper>
            <img className="LogoSymbol" src={Logo} alt="logo" />
        </Wrapper>

    );


}

const animation = keyframes`
 0% {
     opacity: 0.05; 
     transform: translateY(-75px) skewY(5deg) skewX(10deg) rotateZ(10deg);
     filter: blur(5px);
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
       opacity: 0.41; 
       transform: translateY(-5px) skewY(10deg) skewX(10deg) rotateZ(7deg);
       filter: blur(5px) }
 100% { 
       opacity: 0; 
       transform: translateY(-75px) skewY(5deg) skewX(10deg) rotateZ(7deg);
       filter: blur(2px) }
`;


const Wrapper = styled.span`
    display: inline-block;
    width: auto;
    height: 210px;
    
    img {
        width: auto;
        height: 100%;
        user-select: none;
    }

    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 5.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.75,.82,.165, 1);
    }
`;