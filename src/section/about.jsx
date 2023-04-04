import React from "react";

import about from "../img/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../component/button";
import { Link } from "react-router-dom";


function About() {
  AOS.init();
  return (
    <>
        <div className="wrap__about">
          <div className="container">
            <div className="justify-content-between  d-flex flex-column flex-md-row  p-4">
              <div
                className="section-about-left mb-3 mb-md-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
                data-aos-anchor-placement="top-bottom"
              >
                <h4 className="mbr-white  mbr-fonts-style align-left display-4  mb-3">
                  About Consultancy
                </h4>
                <div
                  className="mbr-white mbr-section-text mbr-fonts-style align-left display-7 mt-5 "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  Established in 2022, Trilochan Educational Service has a long
                  history of providing the best career guidance and visa success
                  stories to its clients. Along with a team of highly trained
                  counselors and foreign university graduates who are focused
                  more on career counseling where finding the right course along
                  with the right university is just the start.
                  <br />
                  <span className="mb-2 d-block"></span>
                  We also provide the best IELTS, TOFEL, and PTE preparation
                  classes and help the students with the application procedure
                  which also includes university communication, financial
                  documentation planning, and visa procession. Trilochan
                  Educational Service can be your reliable team to identify an
                  easy solution for all of your study abroad application
                  confusions.
                </div>
                <div className="mt-3" style={{ width: "fit-content" }}>
                  <Link to="/about">
                    <Button name="More About Us" />
                  </Link>
                </div>
              </div>
              <div
                className="section-about-right"
                data-aos="fade-up-right"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div className="mbr-figure section-about-holder">
                  <img
                    src={about}
                    alt="About Consultancy"
                    className="img-fluid section-about-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default About;
