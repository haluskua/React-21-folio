import React from "react";
import FrontCard from "../components/3D/index";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="div" className={classes.indexContainer}>
        <FrontCard />
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    background:"-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",

  /* safari 5.1+,chrome 10+ */
  background:"-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",

  /* opera 11.10+ */
  background:"-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",

  /* ie 10+ */
  background:"-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",

  /* global 92%+ browsers support */
  background:"radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",
    height: "100%",
    width: "100%",
  },
}));

export default Home;
