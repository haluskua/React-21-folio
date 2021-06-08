
import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function TextAnimation() {
    const reactArray = 'Omphalus'.split("");


    return <Wrapper>{reactArray.map((item, index) => (
        <span key={index}>{item}</span>
    ))}</Wrapper>;
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
    color: #fbbe01;
    text-transform: uppercase;
    margin: 0;
    font-size: 32px;
    font-weight: 900;
    font-family: Zilla Slab Highlight;

    span {
            display: inline-block;
            opacity: 0;
            animation-name: ${animation};
            animation-duration: 5.5s;
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
    // span:nth-child(9) {
    //     animation-delay: 2.05s;
    // }
`;
