import { Box } from "@material-ui/core";
import Logo from "../../src/images/leaf.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgBcg: {
    position: "fixed",
    width: "auto",
    height: "auto",
    [`${theme.breakpoints.up("xs")} and (orientation: portrait)`]: {
      right: "0%",
    },
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      right: "6%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const BcgArt = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.imgBcg}>
      <img className={classes.img} src={Logo} alt="logo" />
    </Box>
  );
};
export default BcgArt;
