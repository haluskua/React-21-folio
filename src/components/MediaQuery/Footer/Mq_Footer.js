//Media Queries targeting entire components

import styled from "styled-components";
import { device } from "../device";

const SclMedia = styled.div`
  .MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
    border-radius: 8px 0;
    padding: 2px !important;
    border: 0.3px solid #524b53;
    margin: 7px 4px;
    border-radius: 3rem;
    color: #39a7aa;
    background: linear-gradient(45deg, #2e202f94, #588c9069);
    box-shadow: -4px 6px 1px #3e484d73, -1px -1px 1px #636f6b;
  }

  @media ${device.mobiles} {
    /* background: green; */
  }
  @media ${device.mobileL} {
    /* background: yellow; */
  }
`;

export default SclMedia;
