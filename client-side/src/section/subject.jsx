import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons';
import { faHandsHolding } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faBuildingUser } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';



function Subject() {
  return (
    <>
      <section className="subject w-100">
        <div className="section_wrapper bg-grey pb-4 pt-4 ">
          <h5 className="display-4 color-blue mb-5 ">Popular Courses</h5>
          <div className="subjects_wrapper">
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>
              <h5 className="subject-title fw-normal display-7">Law and Legal Studies</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faHandsHolding} />
              </div>
              <h5 className="subject-title fw-normal display-7">Arts and Humanities</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faChartColumn} />
              </div>
              <h5 className="subject-title fw-normal display-7">Bussiness and Management</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h5 className="subject-title fw-normal display-7">Computer Science and IT</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faNotesMedical} />
              </div>
              <h5 className="subject-title fw-normal display-7">Health Science</h5>
            </div>            
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faBuildingUser} />
              </div>
              <h5 className="subject-title fw-normal display-7">Hospitality and Management</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faMicroscope} />
              </div>
              <h5 className="subject-title fw-normal display-7">Science & Engineering</h5>
            </div>
            <div className="subjects">
              <div className="subjects-icon">
                <FontAwesomeIcon icon={faHeartPulse} />
              </div>
              <h5 className="subject-title fw-normal display-7">Nursing</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subject