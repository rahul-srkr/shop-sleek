import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import slide1 from "../../../public/assets/slider-images/pexels-fábio-scaletta-1436990.jpg";
import slide2 from "../../../public/assets/slider-images/pexels-godisable-jacob-928060.jpg";
import slide3 from "../../../public/assets/slider-images/pexels-godisable-jacob-949670.jpg";
import slide4 from "../../../public/assets/slider-images/pexels-lumn-322207.jpg";
import Slides from "../Slides";

const Hero = () => {
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            // }}
            className="h-[20rem] sm:mt-[6.2rem] w-full relative">
            <SwiperSlide className="relative after:absolute after:h-[20rem] after:w-full after:bg-gradient-to-t after:from-black after:from-30% after:to-transparent after:bottom-0 after:left-0 after:z-10 after:opacity-75">
                <Slides
                    img={slide1}
                    heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo modi, ea, in culpa dolorem placeat"} />
            </SwiperSlide>
            <SwiperSlide className="relative after:absolute after:h-[20rem] after:w-full after:bg-gradient-to-t after:from-black after:from-30% after:to-transparent after:bottom-0 after:left-0 after:z-10 after:opacity-75">
                <Slides
                    img={slide2}
                    heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo modi, ea, in culpa dolorem placeat"} />
            </SwiperSlide>
            <SwiperSlide className="relative after:absolute after:h-[20rem] after:w-full after:bg-gradient-to-t after:from-black after:from-30% after:to-transparent after:bottom-0 after:left-0 after:z-10 after:opacity-75">
                <Slides
                    img={slide3}
                    heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo modi, ea, in culpa dolorem placeat"} />
            </SwiperSlide>
            <SwiperSlide className="relative after:absolute after:h-[20rem] after:w-full after:bg-gradient-to-t after:from-black after:from-30% after:to-transparent after:bottom-0 after:left-0 after:z-10 after:opacity-75">
                <Slides
                    img={slide4}
                    heading={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                    paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo modi, ea, in culpa dolorem placeat"} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero