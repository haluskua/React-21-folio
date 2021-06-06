import React from 'react';
import styled from 'styled-components';
import Logo from "../../../src/images/logo_2.png";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { LogoDetails } from './logoDetails';

const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    
`;
const CardContainer = styled(motion.div)`
    overflow: auto;
    border: 2.2px solid #00ccff;
    margin-top: 4.3rem;
    width: 285px;
    height: 589px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31,31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
    z-index: 6;
    overflow: hidden;
`;

const CircleWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 0;
    min-width: 100%;
    min-height: 100%:
    overflow: hidden;
    border-top-right-radius: 25px;
    `;

const Circle = styled.div`
    position: absolute;
    height: 250px;
    width: 250px;
    top: -4.2em;
    right: -10em;
    background-color: #fbbe01;
    border-radius: 50%;
`;


const NameText = styled.h1`
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    z-index: 10;
    font-size: 36px;
    font-weight: 900;
    `;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 15px;
    `;

const BottomContainer = styled.div`
    display: fles;
    flex: 0.8;
    padding: 0 1em;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 100%:
    position: absolute;
    display: flex;
    align-items: center;
`;

const MyLogo = styled(motion.div)`
    width: auto;
    height: 190px;
    z-index: 99;
    user-select: none;
    margin-top: 3em;
    margin-right: 3em;
    
    img {
        width: auto;
        height: 100%;
        user-select: none;
    }
`;

export default function NikeCard(props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);


    return (
        <CardWrapper>
            <CardContainer style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}>
                <TopContainer >
                    <CircleWrapper>
                        <Circle />
                    </CircleWrapper>
                    <LogoWrapper>
                        <MyLogo style={{
                            x, y, rotateX, rotateY,
                            rotate: "-25deg", z: 100000
                        }}
                            drag dragElatic={0.12}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <img src={Logo} alt="logo" />
                        </MyLogo>
                    </LogoWrapper>
                    <NameText>oMPA lus</NameText>
                </TopContainer>
                <BottomContainer>
                    <LogoDetails />
                </BottomContainer>
            </CardContainer>
        </CardWrapper >
    );
}


