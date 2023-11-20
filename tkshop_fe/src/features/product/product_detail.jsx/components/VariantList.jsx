import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import "swiper/css";
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import NumberFormat from "../../../../utils/NumberFormat";


const VariantList = ({ data, variant }) => {

    return !data || !variant ? (<>Loading</>) : (

        <Swiper slidesPerView={2}
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}
            allowTouchMove={false}
            modules={[Navigation, FreeMode]} freeMode={true} navigation={true}>

            {
                data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>

                            <Button sx={{ width: "100%" }}>

                                <Card
                                    sx={variant.sku === item.sku ? 
                                        { border: "2px #1565c0 solid", borderRadius: "10px", width: "100%", py: 1, px: 0.5 } :
                                        { border: "2px #f8f9fa solid", borderRadius: "10px", width: "100%", py: 1, px: 0.5 }} >
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        image={item.thumbnail}
                                        alt="Paella dish"
                                        sx={{px: 3}}
                                    />
                                    <CardContent sx={{ paddingY: "5px !important" }}>
                                        <Typography variant="body2" fontWeight={700}>
                                            {item.variantName}
                                        </Typography>
                                        <Typography variant="body2" sx={{textAlign: "center"}}>
                                            <NumberFormat number={item.price} />₫
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Button>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>

    );
}

export default VariantList;