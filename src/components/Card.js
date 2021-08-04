import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: "none",
    margin: "0",
    boxShadow: "none",
  },
  cardContent: {
    margin: "0",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Artist
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I really appreciated the creative aspects in life whether it be in
            sports, /outdoors, board-games or cooking to music and Digital
            Design.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
