import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Card";
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
        background: "233",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto"
    },

}));


// Database material

const projects = [
    {

        name: "Project 1",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero cum vel nobis voluptas labore, consequuntur dolore magni odio repellat! Consectetur, vero!`,
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
            <Grid comtainer justify="center">
                {/* Iterating through Projects one-by-one */}
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
                                    <Typography
                                        variant="body2"
                                        color="textSecondary">
                                        {project.description}

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Github | Code
                            </Button>
                                <Button size="small" color="primary">
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