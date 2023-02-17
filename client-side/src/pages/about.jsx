import React, { useEffect, useState } from "react";
import Address from "../section/address";

const About = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 500) {
        setNumber((prevNumber) => prevNumber + 1);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [number]);
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-6">
              <h2 className="color-blue display-5">
                About Trinetra Consultancy
              </h2>
              <p>
                Trinetra Consultancy is a leading education consultancy firm
                that specializes in helping students pursue their dreams of
                studying abroad. Our team of expert consultants has years of
                experience in the field of international education and provides
                comprehensive support to students throughout the entire process,
                from selecting the right course and institution to securing
                admission and obtaining a visa.
              </p>
              <p>
                We are a team of 6 highly qualified and experienced consultants
                who are passionate about helping students achieve their goals.
              </p>
            </div>
            <div className="col-md-6">
              <img src="https://via.placeholder.com/600x400" alt="About Us" />
            </div>
          </div>
          <div className="head w-100">
            <h2 className="color-blue text-center display-6 mt-4 mb-4">Head Members</h2>
            <div class="d-flex flex-column">
              <div class="d-flex flex-column flex-md-row flex-md-row">
                <div class="p-2">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="head members"
                    class="img-fluid"
                  />
                </div>
                <div class="p-2">
                  <h3 className="color-blue">Chiran Adhikari</h3>
                  <p><em>Your Little Description</em></p>
                </div>
              </div>
              <div class="d-flex flex-row-reverse mt-4  align-self-end mb-5">
                <div class="p-2">
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="head members"
                    class="img-fluid"
                  />
                </div>
                <div class="p-2">
                  <h3 className="color-blue">Your Title</h3>
                  <p><em>Your Little Description</em></p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="display-6 color-blue mb-4">Meet Our Team</h2>
          <div className="row d-flex justify-content-between pr-3 pl-3">
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="John Smith"
                />
                <h4 className="mt-3 color-blue">Chhiring Sherpa</h4>
                <p className="mb-2">
                  <em>Senior Education Consultant</em>
                </p>
                <p>
                  With over 2 years of experience in the field of international
                  education, Chhiring is a highly sought-after consultant who
                  has helped hundreds of students achieve their dreams of
                  studying abroad. He specializes in providing guidance to
                  students who are interested in pursuing courses in the
                  humanities and social sciences.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img src="https://via.placeholder.com/300x300" alt="Jane Doe" />
                <h4 className="mt-3 color-blue">Ramesh Adhikari</h4>
                <p className="mb-2">
                  <em>STEM Education Specialist</em>
                </p>
                <p>
                  Ramesh is a seasoned education consultant with over 1 years of
                  experience. He specializes in providing guidance to students
                  who are interested in pursuing courses in the STEM fields. His
                  expertise and attention to detail have helped many students
                  secure admission to top universities around the world.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="David Lee"
                />
                <h4 className="mt-3 color-blue">David Lee</h4>
                <p className="mb-2">
                  <em>Admissions Specialist</em>
                </p>
                <p>
                  David has been working in the field of international education
                  for over 2 years and is known for his exceptional attention to
                  detail. He specializes in providing guidance to students
                  throughout the admissions process, from filling out
                  applications to securing scholarships and financial aid.
                </p>
              </div>
            </div>
          </div>
          <h2 className="display-6 color-blue mt-5">
            We have sucessfully send over
          </h2>
          <p>{number} Students +</p>
        </div>
      </section>
      <Address />
    </>
  );
};
export default About;
