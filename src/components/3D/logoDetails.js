import React from "react";
import Marginer from "../Marginer/index";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SuperQuery from "@themgoncalves/super-query";
import { device } from "../MediaQuery/device";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const buttonVariants = {
  hover: {
    scale: [1, 1.03],
    textShadow: "0 0 6px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(179, 255, 255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

export function LogoDetails(props) {
  const classes = useStyles();

  return (
    <DetailsContainer>
      <Marginer direction="vertical" margin="0em" />
      <Box component="div" className={classes.centerLL} >
      <SmallText  >Omphalus Harkie Kua</SmallText>
      </Box>

      <Marginer direction="vertical" margin=".5em" />
      <Toolbar>
        <Link to="/background">
          <IconButton className={classes.main_button} >
            <motion.button
              className={classes.hamburger_lines}
              variants={buttonVariants}
              whileHover="hover"
            >
              <ArrowBack className={classes.hamburger_lines} />
            </motion.button>
          </IconButton>
        </Link>
        <Marginer direction="vertical" margin="12.2em" />
        <Typography variant="h5" className={classes.title} gutterBottom>
          Background
        </Typography>
      </Toolbar>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em;
`;

// const MediumText = styled.span`
//   @media ${device.mobileS} {
//     font-size: 13.5px;
//     color: #f5f6f9;
//     line-height: 1.5rem;
//     letter-spacing: 0.05rem;
//     padding: 0 40px;
//     font-family: var(--font-family);
//     text-align: center;
//     width: 100%;
//     margin-top: 0px;
//   }
//   @media ${device.mobileS} {
//     font-size: 15px;
//     padding: 0 1rem;
//   }

//   @media ${device.mobileS} and (orientation: landscape) {
//     font-size: 11px;
//   }
//   @media ${device.mobileM} and (orientation: landscape) {
//     font-size: 12px;
//     margin: 0;
//   }
//   @media ${device.tablet} {
//     font-size: 18px;
//     line-height: 2.3rem;
//   }
//   @media ${device.laptop} {
//     line-height: 1.72rem;
//     padding: 0 3rem;
//     margin-top: 0;
//   }
//   @media ${device.laptopL} {
//     font-size: 16px;
//     padding: 0 7.2rem;
//   }
// `;

const SmallText = styled.span`
  font-size: 17px;
  color: #f5f6f9;
  font-weight: bold;
  letter-spacing: .1rem;
  line-height: 1.588rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
  font-family: var(--font-family);

  @media ${device.mobileS} {
    line-height: 1.7rem;
  }

  @media ${device.mobileS} and (orientation: landscape) {
    font-size: 16.5px;
    padding: 0 4.2rem;
    line-height: 1.5em;
  }
  @media ${device.mobileM} {
    font-size: 21px;
    line-height: 1.82rem;
  }
  //using both device and superQuery to create responsive code.
  @media ${device.mobileM} and (orientation: landscape) {
    padding: 0 2.2rem;
    font-size: 16px;
  }
  ${SuperQuery().minWidth.sm.and.landscape.css`
    font-size: 16px;
    line-height: 1.7rem;
    
  `};

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 2.75rem;
  }
  ${SuperQuery().minWidth.md.and.landscape.css`
    padding: .13rem;
    font-size: 20px;
    line-height: 2rem;
    
  `};
  @media ${device.laptop} {
    font-size: 26px;
    line-height: 2rem;
    padding: 0 3rem;
  }
  ${SuperQuery().minWidth.lg.and.landscape.css`
    padding: 0 .3rem;
    
  `};
  @media ${device.laptopL} {
    font-size: 28.5px;
    line-height: 3rem;
    padding: 0 0.03rem;
  }
`;

// const SpacedHorizontalContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
// `;

const useStyles = makeStyles((theme) => ({
  centerLL: {
    display: "flex",
    justifyContent: "center",
    padding: ".03rem",
    with: "100%",
    height: "auto",
  },
  centerOne: {
    padding: "2px",
  },
  hamburger_lines: {
    display: "flex",
    justifyContent: "center",
    background: "#dfe1dc",
    color: "#1d2744",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "9px",
    padding: "1px",
    border: "none",
 
  },
  
  main_button: {
    padding: "1px",
    background:"#41555e",
    boxShadow: "0px 0px 10px #021c39, 0px 0px 19px #042e57",
    "&:hover": {
      boxShadow: "3px 3px 22px #005ba7, -3px -3px 6px #734b6a",
    }
  },
  title: {
    color: "#69849f",
    marginTop: "1rem",
    fontSize: "15.5px",
    fontWeight: "200",
    letterSpacing: ".43px",
    marginLeft: "0.61rem",
    fontStyle: "italic",
    fontFamily: "var(--font-family)",
    lineHeight: "1.5rem",
    [theme.breakpoints.up("xs")]: {
      fontSize: "14.5px",
    },

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "16.5px",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      fontSize: "14px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },

    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
}));
