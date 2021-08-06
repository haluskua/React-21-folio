import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { itemData } from "./imageData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    [`${theme.breakpoints.up("xs")}`]: {
      width: "90%",
      height: "90%",
      overflow: "scroll",
      margin: "0 !important",
    },

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "95%",
    },
    [`${theme.breakpoints.up("sm")}`]: {
      width: "75%",
    },

    [`${theme.breakpoints.up("md")}`]: {
      width: "56%",
    },
  },
  [`${theme.breakpoints.up("lg")}`]: {
    width: "44%",
  },
  [`${theme.breakpoints.up("xl")}`]: {
    width: "35%",
  },

  textBar: {
    background: "rgb(0 0 0 / 28%)",

    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      background: "rgb(0 0 0 / 11%)",
    },
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  page_title: {
    textAlign: "center",
    fontSize: "1.6rem",
    fontFamily: "Nunito Sans",
  },
}));

export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div" className={classes.page_title}>
            Gallery
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              className={classes.textBar}
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
