import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    appbarr: {
        background: "#222",
        margin: 0,
        border: "5px"

    }
}));



const Navbar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Box component="nav">
                <AppBar position="static" className={classes.appbar}>
                    <Typography variant="h5" className={classes.title}>
                        Portfolio
                    </Typography>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Navbar;