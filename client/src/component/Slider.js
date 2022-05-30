import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/_slider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="./img/slider/1.jpg"/></SwiperSlide>
                <SwiperSlide><img src="./img/slider/2.jpg"/></SwiperSlide>
                <SwiperSlide><img src="./img/slider/3.jpg"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;