import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
  AOS.init()
  return (
    <div className="map-holder" data-aos="fade" data-aos-duration="1500" data-aos-delay="300" style={{height:"500px", width:"100%"}}>
        {/* <iframe width="1080" height="1080" id="gmap_canvas" src="https://maps.google.com/maps?q=trilochan%20consultancy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
        {/* <iframe title="trinetra location" src="https://goo.gl/maps/U2SFT7pJwvTbCAiG6" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
         */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0764537672417!2d85.32198941546596!3d27.714925631764938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1985afd54d3d%3A0xaf9113fef17f2800!2sTrilochan%20consultancy%20pvt.%20ltd!5e0!3m2!1sen!2snp!4v1678214205745!5m2!1sen!2snp" title="map" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    
  );
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  // return (
  //   // Important! Always set the container height explicitly
  //   <div style={{ height: '30vh', width: '100%' }}>
  //     <GoogleMapReact
  //       bootstrapURLKeys={{ key: "" }}
  //       defaultCenter={defaultProps.center}
  //       defaultZoom={defaultProps.zoom}
  //     >
  //       <AnyReactComponent
  //         lat={59.955413}
  //         lng={30.337844}
  //         text="My Marker"
  //       />
  //     </GoogleMapReact>
  //   </div>
  // );
};
export default Map;
