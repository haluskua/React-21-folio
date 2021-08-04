// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typed from "react-typed";
// import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../images/crest_trans_brown.png";
// import "../components/header.scss";

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(40),
//     height: theme.spacing(40),
//     margin: theme.spacing(1),
//   },
//   title: {
//     color: "black",
//     fontWeight: "bold",
//     fontFamily: "Nunito Sans",
//     textTransform: "uppercase",
//   },
//   subtitle: {
//     color: "white",
//     // textTransform: "uppercase",
//     fontSize: "1.4rem",
//   },
//   typedContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     width: "100vw",
//     textAlign: "center",
//     zIndex: 1,
//     background: "orange",
//     padding: "4rem",
//   },
// }));
// const Header = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.typedContainer}>
//       <Grid container justify="center">
//         <Avatar className={classes.avatar} src={avatar} alt="Omphalus H. Kua" />
//       </Grid>
//       <Typography className={classes.title} variant="h4">
//         <Typed strings={["About Me"]} typeSpeed={40} />
//       </Typography>

//       <Typography className={classes.subtitle} variant="h5">
//         <Typed
//           strings={["Fun ", "Always Learning", "Passionate developer"]}
//           typeSpeed={20}
//           backSpeed={80}
//           loop
//         />
//       </Typography>
//     </Box>
//   );
// };

// export default Header;
