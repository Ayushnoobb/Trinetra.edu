import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "../img/heroSwiper/australia-banner.jpg";
import hero2 from "../img/heroSwiper/study-korea.jpg";
import hero3 from "../img/heroSwiper/study-usa.jpg";
import hero4 from "../img/heroSwiper/canada-banner.jpg";
import { EffectFade, Pagination,Autoplay } from "swiper";

export default function Herswiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero4} alt="img-1" className="swiper-img" width={"100%"} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="img-2" className="swiper-img" width={"100%"} height={"100%"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="img-3" className="swiper-img" width={"100%"} height={"100%"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero1}  alt="img-4" className="swiper-img" width={"100%"} height={"100%"}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
