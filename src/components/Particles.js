import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        backgroundColor: "#000000",
        backgroundImage: 'url(https://storge.pic2.me/upload/266/590cd0b18bc22.jpg)',
        height: "100vh",
        opacity: .96,


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
                            value: 85,
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
                                width: .41,
                                color: "tomato",
                            },
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1.5,
                                size_min: 0,
                                sync: true,
                            },
                        },
                        opacity: {
                            value: 0.25,
                            random: true,
                            anim: {
                                enable: true,
                                speed: .51,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                    },
                }}


            />

        </React.Fragment >

    );
};

export default Particles;
