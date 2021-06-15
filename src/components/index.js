import React from 'react';
import FrontCard from '../components/3D/index';
// import Header from './Header';
import Particles from './Particles';
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// Import Swiper styles

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
    return (
        <React.Fragment>
            <Particles />
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><FrontCard /></SwiperSlide>
                <SwiperSlide><FrontCard /></SwiperSlide>
                <SwiperSlide><FrontCard /></SwiperSlide>


                {/* <Header /> */}
            </Swiper>
        </React.Fragment>
    );
};



export default Home;

