import React from "react";
import Logo from "../../images/crest3.png";
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
    height: 285px;
  }
  @media ${device.mobileS} and (orientation: landscape) {
    height: 120px;
  }
  
  ${SuperQuery().minWidth.xs.and.landscape.css`
    height: 112px !important;
    
  `};

  @media ${device.mobileM} {
    height: 310px;
  }

  ${SuperQuery().minWidth.sm.and.landscape.css`
    height: 180px !important;
  `};

  @media ${device.tablet} {
    height: 425px;
  }
  ${SuperQuery().minWidth.md.and.landscape.css`
    height: 256px !important;
    
  `};
  @media ${device.laptop} {
    height: 355px;
  }
  ${SuperQuery().minWidth.lg.and.landscape.css`
    height: 348px !important;
    
  `};
  @media ${device.laptopL} {
    height: 444px !important;
  }

  img {
    width: auto;
    height: 100%;
    z-index: 0;
    user-select: none;
  }
`;
