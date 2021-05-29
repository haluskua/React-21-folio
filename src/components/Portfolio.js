import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//importing images from folder/files

import project1 from "../images/html-css-javascript-1.png";
import project2 from "../images/html-css-javascript-2.png";
import project3 from "../images/mern-stack.png";
import project4 from "../images/react-redux.png";
import project5 from "../images/react.png";
import project6 from "../images/serv-side-api.png";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#330033",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
    },
    boldTypo: {
        fontWeight: "bolder",
        fontSize: "0.9rem",
        '&:hover': {
            color: '#00e6e6',
        },

    },
    github: {
        fontSize: "0.9rem",
        '&:hover': {
            color: 'orange',
        },

    },

}));

// Database material

const projects = [
    {

        name: "Initial Portfolio",
        description: `One of my original Portfolio website. Built with a Sass, Autoprefixer with github hosting. More details on the project is found on my github page `,
        image: project1,
    },
    {
        name: "Project 2",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project2,
    },
    {
        name: "Project 3",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project3,
    },
    {
        name: "Project 4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project4,
    },
    {
        name: "Project 5",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project5,
    },
    {
        name: "Project 6",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
        consequatur magni quod nesciunt necessitatibus molestiae non\
        eligendi, magnam est aliquam recusandae? Magnam soluta minus\
        iste alias sunt veritatis nisi dolores!`,
        image: project6,
    },
];

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Projects */}
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className={classes.github} size="small" color="primary"
                                    href="https://github.com/haluskua/mywebsite"
                                    target="_blank"

                                >
                                    Code+Github
                    </Button>
                                <Button className={classes.boldTypo} size="small" color="primary"
                                    href="https://haluskua.github.io/mywebsite"
                                    target="_blank"
                                >


                                    Live Demo
                    </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;
