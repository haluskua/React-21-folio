import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

import Animista, { AnimistaTypes } from "react-animista";

const Contact = () => {
  const classes = useStyles();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <React.Fragment>
      <Box component="div" className={classes.contactContainer}>
        <div>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        {success && (
          <p
            style={{
              color: "green",
              top: "2rem",
              position: "absolute%",
              right: "22%",
            }}
          >
            Thanks for your message!{" "}
          </p>
        )}

        <Grid container justify="center">
          <Box
            component="form"
            className={classes.formStyle}
            name="portfolio-form"
            method="POST"
            action="/contact"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="portfolio-form" />

            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <Typography variant="h5" className={classes.heading}>
              Say Hi, or work with me.
            </Typography>

            <InputField
              fullWidth={true}
              label="First name"
              type="text"
              name="name"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Last name"
              name="name"
              // variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Email"
              name="email"
              // variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              name="message"
              // variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <div data-netlify-recaptcha="true"></div>
            <Animista
              type={AnimistaTypes.SCALE_UP_BR}
              duration="0.851s"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Button
                halfWidth={true}
                // variant="outlined"
                type="submit"
                endIcon={<Send />}
                className={classes.button}
              >
                Contact Me
              </Button>
            </Animista>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    //
  },

  formStyle: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: "90%",
    padding: "2rem",
    boxShadow: "3px 3px 22px #005ba7, -3px -3px 6px #734b6a",
    borderRadius: "3rem 0",

    [`${theme.breakpoints.up("lg")} `]: {
      width: "50%",
    },
  },
  heading: {
    color: "#cacfbc",
    marginBottom: "1rem",
    fontFamily: "Asap",
    fontWeight: "normal",
    fontSize: "1.72rem",
  },
  field: {
    margin: "0rem",
  },
  button: {
    marginTop: "1rem",
    color: "#919488",
    border: "1px solid",
    boxShadow: "3px 3px 6px #03162e, -2px -2px 4px #044179",
    fontFamily: "var(--font-family)",
    background: "linear-gradient(58deg, #f3f4f7, transparent))",
    "&:hover": {
      background: "var(--color-blog)",
      boxShadow: "3px 3px 18px #005ba7, -3px -3px 6px  #734b6a",
      color: "#00e6e6",
    },
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "#919488",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#233",
        borderRadius: "0 3rem 0 1.3rem ",
      },
      "&:hover fieldset": {
        borderColor: "#acc2c7",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "#acc2c7",
      },
    },
  },
})(TextField);

export default Contact;
