import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Marginer from '../Marginer/index';
import { LogoDetails } from './logoDetails';
import TextAnimation from './TextAnimations';
import LogoAnimation from './LogoAnimation';
import { device } from '../MediaQuery/device';


export default function FrontCard(props) {
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
                        <MyLogo
                            style={{
                                x, y, rotateX, rotateY,
                                rotate: "0deg", z: 0
                            }}
                            drag dragElastic={0.8}
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <LogoAnimation />
                        </MyLogo>
                    </LogoWrapper>
                    <TextAnimation />
                    <Marginer direction="vertical" margin="0em" />
                </TopContainer>
                <Marginer direction="vertical" margin="4.5em" />
                <BottomContainer>
                    <LogoDetails />
                </BottomContainer>
            </CardContainer>
        </CardWrapper >
    );
}

const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
`;
const CardContainer = styled(motion.div)`
    // border: 2px solid rgb(191 186 186);
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 98px 1px rgb(12 181 224 / 55%);
    background: #f9fffe;
    color: #fff;
    position: relative;
    cursor: grab;
    z-index: 16;
    overflow: hidden;
    border-radius: 6rem 0 6rem 0;
    
    -ms-overflow-style: none; 
    ::-webkit-scrollbar {
        display: none;    
    }
    @media ${device.laptopL} {
        min-width: 1200px;
        border-radius: 12rem 0 12rem 0;
    }
`;
const CircleWrapper = styled.div`
    position: absolute;
    top: 15px;
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
    top: 0px;
    // border-radius: 50%;
`;

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: 8px 0 44px 0;
    `;

const BottomContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 0 0.5rem;
    margin-bottom: -3rem;
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 100%:
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyLogo = styled(motion.div)`
    z-index: 99;
    user-select: none;
    margin-top: -11em;
    position: absolute;
    
`;


