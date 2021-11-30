const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};
const size = {
  mobileS: `${breakpoints.mobileS}px`,
  mobileM: `${breakpoints.mobileM}px`,
  mobileL: `${breakpoints.mobileL}px`,
  tablet: `${breakpoints.tablet}px`,
  laptop: `${breakpoints.laptop}px`,
  laptopL: `${breakpoints.laptopL}px`,
  desktop: `${breakpoints.desktop}px`,
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};



/*
###  overwrite MediaQueries for MuiGrid-s
*/
////////////////////////////////////////////////////
// $sm: 576px;
// $md: 768px;
// $lg: 992px;
// $xl: 1200px;

// @media only screen and (min-width: $sm) {
//   .MuiGrid-grid-xs-12 {
//     max-width: 100% !important;
//     flex-basis: 100% !important;
//   }
// }
// @media only screen and (min-width: $md) {
//   .MuiGrid-grid-sm-8 {
//     max-width: 44% !important;
//     flex-basis: 44% !important;
//   }
// }
// @media only screen and (min-width: $lg) {
//   .MuiGrid-grid-md-4 {
//     max-width: 33.33% !important;
//     flex-basis: 33.33% !important;
//   }
// }

// .MuiGrid-justify-xs-center {
//   align-items: center;
// }

// @media only screen and (min-width: $md) {
//   .MuiCardContent-root {
//     padding: 2px !important;
//   }
// }


//////////////////////////////////