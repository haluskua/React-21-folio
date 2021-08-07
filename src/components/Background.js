import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import About from "./About";
import TitlebarImageList from "./Gallery";

import Contact from "./Contact";

// Import Swiper styles
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Background = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="div" className={classes.indexContainer}>
        <Swiper
          className={classes.slide_box}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <TitlebarImageList />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
  },
  slide_box: {
    display: "flex",
  },
}));

export default Background;
