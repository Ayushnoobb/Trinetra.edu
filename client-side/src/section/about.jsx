import React from "react";

import about from "../img/about.jpg";

function About() {
  return (
    <>
      <section className="section-about">
        <div className="justify-content-between  pt-5 d-flex bg-grey pb-5">
          <div className="section-about-left">
            <h4 className="mbr-white  mbr-fonts-style align-left display-4 text-info mb-3">
              About Consultancy
            </h4>
            <div className="mbr-white mbr-section-text mbr-fonts-style align-left display-7 mt-5">
              Established in 2022, Trinertra Educational Service has a long
              history of providing the best career guidance and visa success
              stories to its clients. Along with a team of highly trained
              counselors and foreign university graduates who are focused more
              on career counseling where finding the right course along with the
              right university is just the start.
              <br />
              <span className="mb-2 d-block"></span>
              We also provide the best IELTS, TOFEL, and PTE preparation classes
              and help the students with the application procedure which also
              includes university communication, financial documentation
              planning, and visa procession. Trinertra Educational Service can
              be your reliable team to identify an easy solution for all of your
              study abroad application confusions.
            </div>
          </div>
          <div className="section-about-right">
            <div className="mbr-figure section-about-holder">
              <img
                src={about}
                alt="About Consultancy"
                className="img-fluid section-about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
