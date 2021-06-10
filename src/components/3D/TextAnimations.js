
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Dots from '../../components/3D/TextAnimation2';

export default function TextAnimation() {
    const reactArray = 'Portfolio'.split("");


    return (
        <React.Fragment>
            <Dots />
            <Wrapper>{reactArray.map((item, index) => (
                <span key={index}>{item}</span>
            ))}</Wrapper>

            <SmallText>OMPHALUS H. KUA</SmallText>

        </React.Fragment>
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
    color: #86959a;
    text-transform: uppercase;
    margin: 0;
    font-size: 28.35px;
    font-weight: bold;
    font-family: Zilla Slab Highlight;
    // font-family: 'Padauk', Open Sans condensed;
    

    span {
            display: inline-block;
            opacity: 0;
            animation-name: ${animation};
            animation-duration: 16.5s;
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
    }
    span:nth-child(10) {
        animation-delay: 2.3s;
    }
    // span:nth-child(11) {
    //     animation-delay: 2.45s;
    // }
    // span:nth-child(12) {
    //     animation-delay: 2.9s;
    // }

`;

const SmallText = styled.span`
  font-size: 12.5px;
  color: #25373c;
  font-family: 'Padauk', Open Sans;
  font-weight: 400;
  text-align: left;
`;
