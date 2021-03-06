import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
// import { itemData } from "./imageData";
import BcgArt from "./BcgArt";

import { getImages } from "../api";
import { ImageList, ImageListItem } from "@material-ui/core";

export default function TitlebarImageList() {
  const classes = useStyles();
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };
    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...responseJson.resources,
    ]);
    setNextCursor(responseJson.next_cursor);
  };

  return (
    <>
      <div className={classes.root}>
        <BcgArt />
        <ListSubheader component="div" className={classes.page_title}>
          Gallery
        </ListSubheader>
        <ImageList className={classes.imageList}>
          <div className={classes.image_grid}>
            {imageList.map((image) => (
              <ImageListItem className={classes.image_item}>
                <img
                  src={image.url}
                  alt={image.public_id}
                  className={classes.img_item}
                ></img>
                <ImageListItemBar
                  className={classes.textBar}
                  title={
                    <span className={classes.titleName}>{image.title}</span>
                  }
                  subtitle={<span className={classes.author}>by: Ompa</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${image.title}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
            {nextCursor && (
              <button
                onClick={handleLoadMoreButtonClick}
                className={classes.gal_button}
              >
                Load More
              </button>
            )}
          </div>
        </ImageList>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "scroll",
    position: "relative",
  },
  page_title: {
    textAlign: "center",
    fontSize: "1.6rem",
    color: "rgb(163 185 187)",
    fontFamily: "var(--font-family)",
    margin: "0",
    height: "!important",
    // background: "var(--color-blog)",
  },
  imageList: {
    [`${theme.breakpoints.up("xs")}`]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "auto",
      overflow: "hidden",
      margin: "0 !important",
      padding: "9px",
      borderRadius: "6px",
    },

    [`${theme.breakpoints.up("sm")} and (orientation: portrait)`]: {
      width: "78%",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      width: "66%",
    },
    [`${theme.breakpoints.up("md")} and (orientation: portrait)`]: {
      width: "88%",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      width: "78%",
    },

    [`${theme.breakpoints.up("lg")}`]: {
      width: "90%",
    },
    [`${theme.breakpoints.up("xl")}`]: {
      width: "75%",
    },
  },

  image_grid: {
    width: "100% !important",
    height: "100% !important",
    boxShadow: "none !important",
    display: "grid",
    margin: "1.2px",
    overflow: "scroll !important ",
    gap: ".5rem",
    padding: "10px !important",
    gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      gridTemplateColumns: "repeat(2, minmax(50px, 1fr)) ",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: portrait)`]: {
      gridTemplateColumns: "repeat(2, minmax(50px, 1fr)) ",
    },
    [`${theme.breakpoints.up("sm")} and (orientation: landscape)`]: {
      gridTemplateColumns: "repeat(2, minmax(66px, 1fr)) !important",
    },
    [`${theme.breakpoints.up("md")} and (orientation: portrait)`]: {
      gridTemplateColumns: "repeat(3, minmax(80px, 1fr)) !important",
    },
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      gridTemplateColumns: "repeat(3, minmax(80px, 1fr)) !important",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: landscape)`]: {
      gridTemplateColumns: "repeat(4s, minmax(150px, 1fr)) !important",
    },
  },

  img_item: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px",
  },

  textBar: {
    height: "45px",
    padding: "4px",
    background: "#036a6170",
    boxShadow: "var(--color-shadow2)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  author: {
    fontSize: ".65rem",
    color: "#f4fffe",
  },
  image_item: {
    width: "100%",
    height: "auto",
    padding: "9px !important",
    marginBottom: "18px",
    borderRadius: "6px",
    boxShadow: "var(--color-shadow2)",
  },

  gal_button: {
    display: "flex",
    width: "140px !important",
    padding: "0.61rem",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    background: "none",
    marginLeft: "3rem",
    outline: "none",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: "99999",
    boxShadow: "var(--color-shadow)",
    color: "var(--color-widget)",
    [`${theme.breakpoints.up("md")} and (orientation: landscape)`]: {
      width: "11%",
    },
    [`${theme.breakpoints.up("lg")} and (orientation: landscape)`]: {
      width: "77%",
    },
  },
}));

// export default function TitlebarImageList() {
//   const classes = useStyles();

//   return (

//       <div className={classes.root}>
//       <BcgArt />
//         <ImageList rowHeight={180} className={classes.imageList}>
//           <ImageListItem
//             className={classes.imgListBox}
//             key="Subheader"
//             cols={2}
//             style={{ height: "auto" }}
//           >
//             <ListSubheader component="div" className={classes.page_title}>
//               Gallery
//             </ListSubheader>
//           </ImageListItem>
//           {itemData.map((item) => (
//             <ImageListItem className={classes.image_item} key={item.img}>
//               <img
//                 className={classes.img_image}
//                 src={item.img}
//                 alt={item.title}
//               />
//               <ImageListItemBar
//                 className={classes.textBar}
//                 title={<span className={classes.titleName}>{item.title}</span>}
//                 subtitle={
//                   <span className={classes.author}>by: {item.author}</span>
//                 }
//                 actionIcon={
//                   <IconButton
//                     aria-label={`info about ${item.title}`}
//                     className={classes.icon}
//                   >
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </div>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     alignItems: "center",
//     overflow: "hidden",
//     height: "100vh",
//     background: "none",
//   },
//   imgListBox: {
//     boxShadow: "var(--color-shadow)",
//   },
//   imageList: {
//     [`${theme.breakpoints.up("xs")}`]: {
//       width: "94%",
//       height: "90%",
//       overflow: "scroll",
//       margin: "0 !important",
//       boxShadow: "var(--color-shadow)",
//       padding: "10px",
//       borderRadius: "6px",
//     },

//     [`${theme.breakpoints.up("sm")}`]: {
//       width: "71%",
//     },

//     [`${theme.breakpoints.up("md")}`]: {
//       width: "66%",
//     },
//     [`${theme.breakpoints.up("lg")}`]: {
//       width: "77%",
//     },
//     [`${theme.breakpoints.up("xl")}`]: {
//       width: "35%",
//     },
//   },
//   imBoxContainer: {
//     padding: "2px",
//     height: "auto",
//     width: "100vw",
//     background: "#000",
//   },
//   image_item: {
//     width: "100% !important",
//     height: "auto !important",
//     padding: "14px !important",
//     marginBottom: "20px",
//     borderRadius: "7px",
//     boxShadow: "var(--color-shadow)",

//     [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
//       width: "50% !important",
//     },
//     [`${theme.breakpoints.up("md")}`]: {
//       display: "flex !important",
//       alignItems: "center !important",
//       flexWrap: "wrap-reverse !important",
//     },
//   },
//   textColor: {
//     fontSize: "1rem",
//     fontFamily: "var(--font-family)",
//   },

//   textBar: {
//     height: "55px",
//     padding: "4px",
//     background: "#036a6170",
//     // background: "orange",
//     // boxShadow: "inset 2px 2px 5px #74aeb773, inset -3px -3px 7px #fff",
//   },

//   img_image: {
//     height: "fit-content",
//     width: "100%",
//   },

//   icon: {
//     color: "rgba(255, 255, 255, 0.54)",
//   },
//   page_title: {
//     textAlign: "center",
//     fontSize: "1.6rem",
//     color: "rgb(163 185 187)",
//     fontFamily: "var(--font-family)",
//   },
//   titleName: {
//     fontSize: ".9rem",
//     color: "#f4fffe",
//   },
//   author: {
//     fontSize: ".65rem",
//     color: "#f4fffe",
//   },
// }));
