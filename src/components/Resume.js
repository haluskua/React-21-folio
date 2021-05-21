import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
    comp_container: {
        backgroundColor: "#000000",
        height: "100vh",
    }
}));
const Resume = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.comp_container}>
                <h1>React Particles</h1>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                }
                            },
                        },
                    }}
                />
            </Box>
        </React.Fragment>
    );

};

export default Resume;
