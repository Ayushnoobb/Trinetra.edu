import React from "react";
import talk from "../img/card/talk.jpeg";
import prepare from "../img/card/prepare.jpeg";
import writing from "../img/card/writing.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Service() {
  // AOS.init();
  return (
    <>
        <div className="container p-4">
          <h2 className="display-4 mb-5">Our Services</h2>
          <div className="card_holder  flex-column flex-md-row">
            {/* card-1 */}
            <div
              className="card "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-right"
            >
              <div className="card_img ">
                <img
                  className="card-img-top img-fluid"
                  src={writing}
                  alt="Cardcap"
                  height={200}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Study Abroad</h5>
                <p className="card-text">
                  We help you study , work and live in leading destinations
                  around the world
                </p>
              </div>
            </div>
            {/* card-2 */}
            <div
              className="card "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-right"
            >
              <div className="card_img">
                <img
                  className="card-img-top img-fluid"
                  src={prepare}
                  alt="Cardcap"
                  height={200}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Preparation Class</h5>
                <p className="card-text">
                  We help you to prepare IELTS & SAT with the best possible
                  instructors available
                </p>
              </div>
            </div>
            {/* card-3 */}
            <div
              className="card "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-anchor-placement="bottom-right"
            >
              <div className="card_img">
                <img
                  className="card-img-top img-fluid"
                  src={talk}
                  alt="Cardcap"
                  height={200}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Let's Talk</h5>
                <p className="card-text">
                  Contact us for study abroad counselling , visa assistance and
                  many more
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Service;
