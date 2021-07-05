import React from "react";
import Logo from "../../avatar.png";
import styled from "styled-components";

export default function LogoAnimation() {
  return (
    <AniLogo>
      <img src={Logo} alt="logo" />
    </AniLogo>
  );
}

const AniLogo = styled.div`
  display: inline-block;
  width: auto;
  height: 160px;
  // box-shadow: 0px 0px 10px 3px #fffafabd !important;
  border-radius: 1rem;

  img {
    width: auto;
    height: 100%;
    z-index: 0;
    user-select: none;
  }
`;
