import React from 'react';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";


const useStyles = makeStyles((theme) => ({
    contactContainer: {
        background: "#233",
        height: "100vh",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tan",
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    heading: {
        color: "tomato",
        textAlign: "uppercase",
        marginBottom: "1rem",
    },
    field: {
        margin: "0rem",
    }

}));




const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                color: "#fff",
                borderColor: "tan",
            },
        },
    },
})(TextField);



const Contact = () => {
    const classes = useStyles();


    return (
        <Box component="div" className={classes.contactContainer}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className className={classes.heading}>
                        Hire or work with me ..
                    </Typography>

                    <InputField

                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{ className: classes.input }}
                        className={classes.field}
                    />
                    <InputField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        inputProps={{ className: classes.input }}
                    />
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<Send />}
                        className={classes.button}
                    >Contact Me</Button>



                </Box>
            </Grid>
        </Box>
    );
};

export default Contact;