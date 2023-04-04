import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Map = () => {
  AOS.init();
  return (
    <div
      className="map-holder my-5"
      data-aos="fade"
      data-aos-duration="1500"
      data-aos-delay="300"
      style={{ height: "500px", width: "100%" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0764537672417!2d85.32198941546596!3d27.714925631764938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1985afd54d3d%3A0xaf9113fef17f2800!2sTrilochan%20consultancy%20pvt.%20ltd!5e0!3m2!1sen!2snp!4v1678214205745!5m2!1sen!2snp"
        title="map"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map;
