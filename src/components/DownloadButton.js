import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  buttonDownload: {
    fontFamily: "Nunito Sans",
    color: "#919488",
    fontSize: ".88rem",
    padding: "0.6rem",
    margin: "1rem 0px",
    width: "auto",
    height: "auto",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    background: "none",
    "&:hover": {
      boxShadow: "inset 3px 3px 6px #b8b9be, -3px -3px 6px #fff",
      color: "#00e6e6",
    },
  },
}));

const DownloadButton = (props) => {
  const classes = useStyles();

  const downloadFile = () => {
    window.location.href =
      "https://Halus_folio21.netlify.app/src/images/2021_CV.pdf";
  };
  return (
    <React.Fragment>
      <button className={classes.buttonDownload} onClick={downloadFile}>
        Download My CV
      </button>
    </React.Fragment>
  );
};
export default DownloadButton;
