import React from "react";
import Logo from "../../images/crest_trans_brown.png";
import styled from "styled-components";
import { device } from "../MediaQuery/device";
import SuperQuery from "@themgoncalves/super-query";

export default function LogoAnimation() {
  return (
    <AniLogo>
      <img src={Logo} alt="logo" />
    </AniLogo>
  );
}

const AniLogo = styled.div`
  @media ${device.mobileS} {
    height: 325px;
  }
  ${SuperQuery().minWidth.sm.and.landscape.css`
    height: 200px !important;
    
  `};

  @media ${device.mobileM} {
    height: 365px;
  }
  @media ${device.tablet} {
    height: 465px;
  }
  ${SuperQuery().minWidth.md.and.landscape.css`
    height: 446px !important;
    
  `};
  @media ${device.laptop} {
    height: 355px;
  }
  @media ${device.laptopL} {
    height: 450px;
  }

  img {
    width: auto;
    height: 100%;
    z-index: 0;
    user-select: none;
  }
`;
