//Media Queries targeting entire components

import styled from "styled-components";
import { device } from "../device";

const SclMedia = styled.div`
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    border-radius: 8px 0;
    padding: 2px 6px !important;
    border: 0.3px solid #97b4b5;
    margin: 10px 6px;
    border-radius: 3rem;
    color: cadetblue;
    border: 0.3px solid #40332b !important;
  }

  @media ${device.mobiles} {
    /* background: green; */
  }
  @media ${device.mobileL} {
    /* background: yellow; */
  }
`;

export default SclMedia;
