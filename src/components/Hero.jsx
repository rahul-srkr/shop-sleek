"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import slide1 from "../../public/assets/slider-images/pexels-fábio-scaletta-1436990.jpg";
import slide2 from "../../public/assets/slider-images/pexels-godisable-jacob-928060.jpg";
import slide3 from "../../public/assets/slider-images/pexels-godisable-jacob-949670.jpg";
import slide4 from "../../public/assets/slider-images/pexels-lumn-322207.jpg";
import Image from "next/image";

const Hero = () => {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            style={{ height: "calc(100vh - 8.6rem" }}
            className="sm:mt-[6.2rem] w-full relative mt-[8.6rem]">
            <SwiperSlide className="relative after:absolute after:h-[20rem] after:w-full after:bg-gradient-to-t after:from-black after:from-30% after:to-transparent after:bottom-0 after:left-0 after:z-10 after:opacity-75">
                <Image src={slide1} alt="pexels-fábio-scaletta-1436990" width={1400} height={500} className="w-full h-full object-cover" />
                <div className="absolute top-[50%] mx-6 text-white z-30 w-[75%] md:w-[85%]">
                    <h2 className="text-4xl 3xl:text-3xl lg:text-2xl sm:text-xl xs:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className="font-semibold text-lg 3xl:text-base lg:text-sm sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo modi, ea, in culpa dolorem placeat</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero