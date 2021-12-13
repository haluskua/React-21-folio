import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { itemData } from "./imageData";
import BcgArt from "./BcgArt";




export default function TitlebarImageList() {
  const classes = useStyles();
  

  return (
    
      <div className={classes.root}>
      <BcgArt />
        <ImageList rowHeight={180} className={classes.imageList}>
          <ImageListItem
            className={classes.imgListBox}
            key="Subheader"
            cols={2}
            style={{ height: "auto" }}
          >
            <ListSubheader component="div" className={classes.page_title}>
              Gallery
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem className={classes.image_item} key={item.img}>
              <img
                className={classes.img_image}
                src={item.img}
                alt={item.title}
              />
              <ImageListItemBar
                className={classes.textBar}
                title={<span className={classes.titleName}>{item.title}</span>}
                subtitle={
                  <span className={classes.author}>by: {item.author}</span>
                }
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    height: "100vh",
    background: "none",
  },
  imgListBox: {
    boxShadow: "var(--color-shadow)",
  },
  imageList: {
    [`${theme.breakpoints.up("xs")}`]: {
      width: "94%",
      height: "90%",
      overflow: "scroll",
      margin: "0 !important",
      boxShadow: "var(--color-shadow)",
      padding: "10px",
      borderRadius: "6px",
    },

    [`${theme.breakpoints.up("sm")}`]: {
      width: "71%",
    },

    [`${theme.breakpoints.up("md")}`]: {
      width: "66%",
    },
    [`${theme.breakpoints.up("lg")}`]: {
      width: "77%",
    },
    [`${theme.breakpoints.up("xl")}`]: {
      width: "35%",
    },
  },
  imBoxContainer: {
    padding: "2px",
    height: "auto",
    width: "100vw",
    background: "#000",
  },
  image_item: {
    width: "100% !important",
    height: "auto !important",
    padding: "14px !important",
    marginBottom: "20px",
    borderRadius: "7px",
    boxShadow: "var(--color-shadow)",


    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      width: "50% !important",
    },
    [`${theme.breakpoints.up("md")}`]: {
      display: "flex !important",
      alignItems: "center !important",
      flexWrap: "wrap-reverse !important",
    },
  },
  textColor: {
    fontSize: "1rem",
    fontFamily: "var(--font-family)",
  },

  textBar: {
    height: "55px",
    padding: "4px",
    background: "#036a6170",
    // background: "orange",
    // boxShadow: "inset 2px 2px 5px #74aeb773, inset -3px -3px 7px #fff",
  },

  img_image: {
    height: "fit-content",
    width: "100%",
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  page_title: {
    textAlign: "center",
    fontSize: "1.6rem",
    color: "rgb(163 185 187)",
    fontFamily: "var(--font-family)",
  },
  titleName: {
    fontSize: ".9rem",
    color: "#f4fffe",
  },
  author: {
    fontSize: ".65rem",
    color: "#f4fffe",
  },
}));
