
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dots from '../../components/3D/TextAnimation2';

export default function TextAnimation() {
    const reactArray = 'OMPHALUS-KUA'.split("");


    return (
        <React.Fragment>
            <Dots />
            <Wrapper>{reactArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}</Wrapper>

            <SmallText>Swipe for more</SmallText>

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
    display: inline-block;
    color: #76939a;
    text-transform: uppercase;
    margin: 0;
    font-size: 28px;
    // font-weight: 900;
    letter-spacing: .15rem;
    font-family: "Staatliches", sans-serif;
    
    

    span {
            display: inline-block;
            opacity: 0;
            animation-name: ${animation};
            animation-duration: 8s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0.75,.82,.165, 1);
        }
    
    span:nth-child(1) {
        animation-delay: .15s;
    }
    span:nth-child(2) {
        animation-delay: .3s;
    }
    span:nth-child(3) {
        animation-delay: .45s;
    }
    span:nth-child(4) {
        animation-delay: .60s;
    }
    span:nth-child(5) {
        animation-delay: 1.15s;
    }
    span:nth-child(6) {
        animation-delay: 1.3s;
    }
    span:nth-child(7) {
        animation-delay: 1.45s;
    }
    span:nth-child(8) {
        animation-delay: 2s;
    }
    span:nth-child(9) {
        animation-delay: 2.15s;
        color: #fff;
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
`;

const SmallText = styled.span`
  font-size: 20px;
  color: #63787d;
  text-align: center;
  letter-spacing: .06rem;
  font-family:'Caveat', cursive;

  
`;
