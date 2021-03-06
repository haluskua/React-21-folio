import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Marginer from "../Marginer/index";
import { LogoDetails } from "./logoDetails";
// import TextAnimation from "./TextAnimations";
import LogoAnimation from "./LogoAnimation";
import { device } from "../MediaQuery/device";
import NameAnimation from "./NameAnimate";
import BcgArt from "../BcgArt";

export default function FrontCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <BcgArt />
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>

          <LogoWrapper>
            <MyLogo
              style={{
                x,
                y,
                rotateX,
                rotateY,
                rotate: "0deg",
                z: 0,
              }}
              drag
              dragElastic={0.8}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <LogoAnimation />
            </MyLogo>
          </LogoWrapper>
          <Marginer direction="vertical" margin="0.5em" />
        </TopContainer>
        <NameAnimation />
        <Marginer direction="vertical" margin="0.05em" />
        <BottomContainer>
          <LogoDetails />
        </BottomContainer>
      </CardContainer>
      {/* <TextAnimation /> */}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  perspective: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  @media ${device.tablet} {
    padding-top: 2rem;
  }
`;
const CardContainer = styled(motion.div)`
  max-width: 95vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  cursor: grab;
  z-index: 16;
  overflow: hidden;

  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${device.mobileS} {
    height: 100vh;
    max-width: 96vw;
  }
  @media ${device.mobileM} {
    height: 100vh;
    max-width: 90vw;
  }
  @media ${device.tablet} {
    max-width: 73vw;
  }

  @media ${device.laptop} {
    max-width: 65vw;
  }
  @media ${device.laptopL} {
    max-width: 44vw;
    max-height: 85vh;
  }
`;
const CircleWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
  min-width: 100%;
  min-height: 100%;
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
  justify-content: flex-start;
  height: 25%;
  margin-bottom: -6rem;

  @media ${device.mobileS} and (orientation: landscape) {
    margin-top: -4em;
  }
  @media ${device.mobileM} {
    margin-top: -2em;
  }
  @media ${device.mobileM} and (orientation: landscape) {
    margin-top: -6em;
  }
  @media ${device.laptop} {
    margin-bottom: -4em;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 0.5rem;
  margin-bottom: -1rem;
  @media ${device.mobileS} and (orientation: landscape) {
    margin-bottom: -3em;
  }
  @media ${device.mobileM} {
    margin-bottom: -14em;
  }
  @media ${device.mobileM} and (orientation: landscape) {
    margin-bottom: -8em;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyLogo = styled(motion.div)`
  user-select: none;
  z-index: 99;
  margin-top: 0em;
  position: absolute;
`;
