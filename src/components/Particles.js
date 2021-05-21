import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        // position: "fixed",
        opacity: "0.3",
        opacity: "1",
        backgroundColor: "#000000"
    },
}));


const Particles = () => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <ReactParticles
                canvasClassName={classes.particlesCanvas}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            color: {
                                value: "#000000"
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato",
                            },
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 6,
                                size_min: 0,
                                sync: true,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                    },
                }}

                style={{
                    backgroundImage: 'url(https://storge.pic2.me/upload/266/590cd0b18bc22.jpg)'
                }}
            />

        </React.Fragment >

    );
};

export default Particles;
