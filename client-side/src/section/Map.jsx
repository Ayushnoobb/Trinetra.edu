import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Map = () => {
  AOS.init()
  return (
    <div className="map-holder" data-aos="fade" data-aos-duration="1500" data-aos-delay="300" style={{height:"100%", width:"100%"}}>
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=trilochan consultancy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
    </div>
  );
};
export default Map;
