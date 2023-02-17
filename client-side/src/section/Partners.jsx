import React from "react";
import partner from "../img/partners/partners.png";
import partner2 from "../img/partners/partner2.png";
import partner3 from "../img/partners/partner3.png";
import partner4 from "../img/partners/partner4.png";
import partner5 from "../img/partners/partner5.png";
import partner6 from "../img/partners/partner6.png";
import partner7 from "../img/partners/partner7.png";
import partner8 from "../img/partners/partner8.png";
import partner9 from "../img/partners/partner9.png";
import partner10 from "../img/partners/partner10.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip ,Autoplay, Pagination} from "swiper";

const Partners = () => {
  return (
    <>
      <section className="partners">
        <div className="section_wrapper pt-4 container">
          <div className="partners_wrapper w-100">
            <h5 className="display-4 color-blue mt-5 mb-5">
              Our Partners
            </h5>
            <Swiper
              effect={"flip"}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay:3000,
                disableOnInteraction:false
              }}
              rewind={true}
              pagination={true}
              grabCursor={true}
              modules={[EffectFlip,Autoplay,Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={partner} className="img-fluid" alt="partner1"/>
                <img src={partner3} alt="partner1" className="img-fluid"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={partner2} alt="partner1" className="img-fluid"/>
                <img src={partner4} alt="partner1" className="img-fluid"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={partner5} alt="partner1" className="img-fluid"/>
                <img src={partner6} alt="partner1" className="img-fluid"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={partner7} alt="partner1" className="img-fluid"/>
                <img src={partner8} alt="partner1" className="img-fluid"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={partner9} alt="partner1" className="img-fluid"/>
                <img src={partner10} alt="partner1" className="img-fluid"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partners;
