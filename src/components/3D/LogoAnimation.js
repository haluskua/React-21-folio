import React from 'react';
import Logo from "../../../src/avatar.png";
import styled from 'styled-components';

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
    height: 200px;
    img {
        width: auto;
        height: 117%;
        user-select: none;
    }
`;