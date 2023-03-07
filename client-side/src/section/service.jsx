import React from "react";
import talk from "../img/card/talk.jpeg";
import prepare from "../img/card/prepare.jpeg";
import writing from "../img/card/writing.jpg";

function Service() {
  return (
    <>
      <section className="services ">
        <div className="card_holder p-4">
          {/* card-1 */}
          <div className="card ">
            <div className="card_img">
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
                We help you study , work and live in leading destinations around
                the world
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="card ">
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
          <div className="card ">
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
                Contact us foer study abroad counselling , visa assistance and
                many more
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
