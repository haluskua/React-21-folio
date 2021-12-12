import React, { useState } from 'react';
import {makeStyles } from "@material-ui/core/styles";


function ReadTrunk({children, maxCharacterCount = 300}) {
  const classes = useStyles();
    
    const text = children;
    
    const [isTruncated, setIsTruncated] = useState(true);
    
    const resultingString = isTruncated ? text.slice(0, maxCharacterCount): text;
    
    function toggleIsTruncated() {
      
      setIsTruncated(!isTruncated);
    }
    return (
      <React.Fragment>
      <p className={classes.truncate}>
      {resultingString}
      <span onClick = {toggleIsTruncated} className={classes.toggleIsTruncated}>
        {isTruncated ? "READ MORE" : "READ LESS"}
      </span>
      </p>
      </React.Fragment>
    )
  };
  

  const useStyles = makeStyles((theme) => ({
    truncate: {
        display: "flex",
        flexDirection: "column",
    },
    toggleIsTruncated: {
        padding: "4px",
        background: "var(--color-bg)",
        width: "23%",
        borderRadius: "7px",
        margin: "20px",
        fontSize: "11.5px",
        textAlign: "center",
        cursor: "pointer",
        boxShadow: "var(--color-shadow2)",
        fontStyle: "italic",
        "&:hover": {
            boxShadow: "var(--color-shadow)",
            fontStyle: "normal",
        }
    }
  }));
  

  export default ReadTrunk;
  