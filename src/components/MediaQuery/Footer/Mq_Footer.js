//Media Queries targeting entire components

import styled from "styled-components";
import { device } from "../device";

const SclMedia = styled.div`
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    padding: 2px !important;
    margin: 7px 4px;
    color: #39a7aa;
    border-radius: 4rem;
    box-shadow: 4px 6px 1px #361d38, 2px 1px 1px #361d38;
  }

  @media ${device.mobiles} {
    /* background: green; */
  }
  @media ${device.mobileL} {
    /* background: yellow; */
  }
`;

export default SclMedia;
