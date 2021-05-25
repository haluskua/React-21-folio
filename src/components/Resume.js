import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyels = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        padding: '1rem',
        margin: '0 auto',
        "&:before": {
            content: "''",
            position: 'absolute',
            height: '40px',
            top: 0,
        },
        "&:after": {
            content: "''",
            display: 'table',
            clear: 'both'
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },

    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        "&:after": {
            content: "''",
            position: 'absolute',
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '.625rem',
            transform: 'rotate(45deg)',
        },
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "tomato",
    },
    subtitle1: {
        color: "tan",
    },


}));



const Resume = () => {
    const classes = useStyels();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working and Studying experience
        </Typography>

            <Box component="div" className={classes.timeLine}>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2013
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        web design
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        company name where worked
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}>

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, officia odio in quasi culpa, necessitatibus nulla sint sequi provident molestiae accusamus totam labore!
                        </Typography>
                </Box>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                    2014
                </Typography>
            </Box>

        </Box>
    );
};

export default Resume;
