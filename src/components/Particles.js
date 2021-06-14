import React from "react";
import { Particles as ReactParticles } from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    particlesCanvas: {
        backgroundColor: "gainsboro",


        position: "fixed",
        opacity: "1",
        height: "100% !important",
        backgroundSize: "cover",

        // backgroundImage: `url(https://res.allmacwallpaper.com/get/MacBook-Pro-12-inch-4K-Retina-wallpapers/Research-Station-2304x1440/7353-14.jpg)`,
        // backgroundImage: `url(https://www.publicdomainpictures.net/pictures/100000/velka/black-and-white-moon.jpg)`,
        // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,

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
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 500
                        }
                    },
                    color: {
                        value: "#b3ffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#fff"
                        },

                    },
                    opacity: {
                        value: 0.84,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 1.3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable_auto: true,
                        distance: 100,
                        color: "#fff",
                        opacity: 1,
                        width: 1,
                        condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 100
                        }
                    },
                    move: {
                        enable: true,
                        speed: 0.07,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: false
                        },
                        onclick: {
                            enable: false
                        },
                        resize: true
                    }
                },
                retina_detect: true
            }}
        />


    );
};

export default Particles;
