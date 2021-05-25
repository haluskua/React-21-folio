import React from "react";
import { Particles as ReactParticles } from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        backgroundColor: "#000000",
        backgroundImage: 'url(https://cdn.wallpapersafari.com/81/12/N9oBIc.png)',
        height: "100vh !important",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        opacity: "0.98"
    },
}));


const Particles = () => {
    const classes = useStyles();

    return (

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
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 1,
                        },

                    },
                    size: {
                        value: 1,
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
                    "color": {
                        "value": "red"
                    },
                },
            }}
        />


    );
};

export default Particles;
