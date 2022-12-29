import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass, { Lazy, FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface SwiperRef extends React.HTMLAttributes<HTMLElement> {
  swiper: SwiperClass;
}

interface ProductProps {
  id: number;
  name: string;
  url: string;
}

interface ProductSliderProps {
  productImages: ProductProps[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ productImages }) => {
  const swiperRef = useRef<SwiperRef>(null);
  
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        lazy={true}
        thumbs={{ swiper: swiperRef.current?.swiper }}
        modules={[Lazy, FreeMode, Navigation, Thumbs]}
        className="mySwiper2 object-cover w-full aspect-square rounded-xl"
      >
        { productImages.map((image: any) => (
          <SwiperSlide key={image.id}>
            <img
              key={image.id}
              alt={`Image ${image.id}`}
              data-src={image.url}
              className="object-cover aspect-square rounded-xl swiper-lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        )) }
      </Swiper>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper object-cover h-28 sm:h-44 w-full aspect-square rounded-xl"
      >
        { productImages.map((image: any) => (
          <SwiperSlide key={image.id}>
            <img
              key={image.id}
              alt={`Image ${image.id}`}
              src={image.url}
              className="object-cover w-full aspect-square rounded-xl"
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </>
  );
};
