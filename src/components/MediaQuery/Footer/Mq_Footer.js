//Media Queries targeting entire components

import styled from "styled-components";
import { device } from "../device";

const SclMedia = styled.div`
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    border-radius: 8px 0;
    padding: 2px !important;
    border: 0.3px solid #85cec463;
    margin: 7px 4px;
    border-radius: 3rem;
    color: #39a7aa;
    background: #3b626f;
  }

  @media ${device.mobiles} {
    /* background: green; */
  }
  @media ${device.mobileL} {
    /* background: yellow; */
  }
`;

export default SclMedia;
