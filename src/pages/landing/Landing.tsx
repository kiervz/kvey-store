import React from 'react';
import { HeroOne } from './HeroOne';
import { HeroTwo } from './HeroTwo';
import { TopRated } from './TopRated';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import { NewArrival } from './NewArrival';

const Landing = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
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