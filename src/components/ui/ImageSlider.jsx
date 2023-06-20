"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";

import wear1 from "../../../public/assets/wear-categories/active.jpeg"
import wear2 from "../../../public/assets/wear-categories/casual.jpeg"
import wear3 from "../../../public/assets/wear-categories/Ethnic.jpeg"
import wear4 from "../../../public/assets/wear-categories/kids.jpeg"
import wear5 from "../../../public/assets/wear-categories/longe.jpeg"
import wear6 from "../../../public/assets/wear-categories/sleep.jpeg"
import wear7 from "../../../public/assets/wear-categories/sports.jpeg"
import wear8 from "../../../public/assets/wear-categories/western.jpeg"
import wear9 from "../../../public/assets/wear-categories/work.jpeg"
import Image from "next/image";

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="h-[30rem] w-full sm:h-[20rem]"
            >
                <SwiperSlide>
                    <Image src={wear1} width={500} height={500} alt="product image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={wear2} width={500} height={500} alt="product image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={wear3} width={500} height={500} alt="product image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={wear4} width={500} height={500} alt="product image" className="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={wear5} width={500} height={500} alt="product image" className="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ImageSlider