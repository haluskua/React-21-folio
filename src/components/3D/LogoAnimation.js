import React from 'react';
import Logo from "../../../src/avatar.png";
import styled, { keyframes } from 'styled-components';

export default function LogoAnimation() {

    return (
        <AniLogo>
            <img src={Logo} alt="logo" />
        </AniLogo>
    );
}

const animation = keyframes`
 0% {
     opacity: 0.05; 
     transform: translateY(-75px) skewY(10deg) skewX(10deg) rotateZ(10deg);
     filter: blur(10px);
     }
 20% { 
      opacity: 1; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
    filter: blur(0px) }
 85% { 
      opacity: 1; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(0px) }
 97% { 
       opacity: 0.41; 
       transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
       filter: blur(5px) }
 100% { 
       opacity: 0; 
       transform: translateY(-75px) skewY(10deg) skewX(10deg) rotateZ(30deg);
       filter: blur(10px) }
`;


const AniLogo = styled.div`
    display: inline-block;
    width: auto;
    height: 200px;
    img {
        width: auto;
        height: 92%;
        user-select: none;
    }

`;