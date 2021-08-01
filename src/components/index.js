import React from "react";
import FrontCard from "../components/3D/index";
// import Header from "./Header";
// import Particles from './Particles';
import Box from "@material-ui/core/Box";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import { makeStyles } from "@material-ui/core/styles";

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// Import Swiper styles

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box component="div" className={classes.indexContainer}>
        {/* <Particles /> */}
        <div style={{ position: "absolute", overflow: "hidden" }}>
          <Particles height="90vh" width="90vw" params={particlesConfig} />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <FrontCard />
          </SwiperSlide>
          <SwiperSlide>
            <FrontCard />
            {/* <Header /> */}
          </SwiperSlide>
        </Swiper>
      </Box>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    // background: "linear-gradient(45deg, #284d5d, #dc6a56)",
    // background: "linear-gradient(45deg, #1e312c, #ffffff)",
    background: "#f3f4f7",
    // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
    // background: "#000000",
    // background: 'url("../../components/images/grass.jpg")',
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
  },
}));

export default Home;
