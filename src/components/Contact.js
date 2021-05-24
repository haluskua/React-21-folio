import React from 'react';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import TextField from "@material-ui/core/TextField";
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
    }

}));

const Contact = () => {
    const classes = useStyles();


    return (
        <Box component="div" className={classes.contactContainer}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" className className={classes.heading}>
                        Hire or work with me ..
                    </Typography>
                    <Button
                        variant="outlined"
                        fullWidth={true}
                        endIcon={<Send />}
                        className={classes.button}
                    >This is the Contact section</Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contact;