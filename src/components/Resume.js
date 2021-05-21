import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    comp_container: {
        backgroundColor: "#000000",
        backgroundImage: 'url(https://storge.pic2.me/upload/266/590cd0b18bc22.jpg)',
        height: "100vh",
    }
}));
const Resume = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.comp_container}>
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
            </div>
        </React.Fragment>
    );

};

export default Resume;
