import React from 'react';
import { HeroOne } from './HeroOne';
import { HeroTwo } from './HeroTwo';
import { TopRated } from './TopRated';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import { NewArrival } from './NewArrival';

const Landing = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiperLanding"
      >
        <SwiperSlide>
          <HeroOne />
        </SwiperSlide>
        <SwiperSlide>
          <HeroTwo />
        </SwiperSlide>
      </Swiper>
      
      <TopRated />
      <NewArrival />
    </>
  );
};

export default Landing;