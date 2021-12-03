import React from "react";
import FrontCard from "../components/3D/index";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Animista, { AnimistaTypes } from "react-animista";


const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    
      <Box component="div" className={classes.indexContainer}>
      <Animista
          type={AnimistaTypes.SCALE_UP_BR}
          duration="0.6s"
          style={{
            width: '100%',
            height: "auto",
            backgroundColor: "#041020",
          }}
        >
        <FrontCard />
        </Animista>
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    // background:

    height: "100%",
    width: "100%",
  },
}));

export default Home;
