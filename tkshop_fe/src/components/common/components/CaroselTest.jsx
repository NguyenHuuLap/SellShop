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
<<<<<<< HEAD
import { formGroupClasses } from "@mui/material";

const styles = {
  swiperSlideAuto: {
    width: "100px",
    height: "100px",
    "&:hover": {},
  },
};
=======
import { Card, CardMedia, formGroupClasses } from "@mui/material";

>>>>>>> dev-khang

export default function Carosel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

<<<<<<< HEAD
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
=======
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",                    
                }}
                spaceBetween={10}
                navigation={true}
                autoHeight={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"
                            sx={{ maxHeight: "512px" , objectFit: "contain" }}
                        />
                    </Card>
                </SwiperSlide>

                
    
            </Swiper>
            <Swiper
                style={{
                    height: '100px',
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={1}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="adsCaroselThumb"
            >
                <SwiperSlide
                    style={{
                    }}
                ><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
                <SwiperSlide><AdsCaroselIndicator /></SwiperSlide>
            </Swiper>
        </>
    );
>>>>>>> dev-khang
}
