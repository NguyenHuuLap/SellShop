import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "../../assets/css/swiper.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import AdsCaroselIndicator from "./AdsCaroselIndicator";
import { formGroupClasses } from "@mui/material";

const styles = {
  swiperSlideAuto: {
    width: "100px",
    height: "100px",
    "&:hover": {},
  },
};

export default function Carosel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "330px",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{
          height: "100px",
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="adsCaroselThumb"
      >
        <SwiperSlide style={{}}>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
        <SwiperSlide>
          <AdsCaroselIndicator />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
