import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faHandsHolding } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

function Subject() {
  AOS.init();
  return (
    <>
      <section className="subject">
        <div className="container">
          <div className="section_wrapper  p-4 ">
            <h5
              className="display-4  mb-5 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Popular Courses
            </h5>
            <div className="subjects_wrapper">
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faScaleBalanced} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Law and Legal Studies
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faHandsHolding} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Arts and Humanities
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faChartColumn} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Bussiness and Management
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Computer Science and IT
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faNotesMedical} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Health Science
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faBuildingUser} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Hospitality and Management
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faMicroscope} />
                </div>
                <h5 className="subject-title fw-normal display-7">
                  Science & Engineering
                </h5>
              </div>
              <div
                className="subjects"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
                data-aos-duration="1500"
              >
                <div className="subjects-icon">
                  <FontAwesomeIcon icon={faHeartPulse} />
                </div>
                <h5 className="subject-title fw-normal display-7">Nursing</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subject;
