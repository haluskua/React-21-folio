import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    comp_container: {
        backgroundImage: 'url(https://www.strategies.co.uk/wp-content/uploads/sites/4/2018/01/Trade-3.jpg)',
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: 'cover'
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
