import React from "react";
import Heroswiper from "../section/swiper";
import Preparation from "../section/preparation";

// images

import About from "../section/about";
import Service from "../section/service";
import Opportunity from "../section/opportunity";
import Subject from "../section/subject";
import Map from "../section/Map";
import Partners from "../section/Partners";
import Address from "../section/address";

const classes = [
{
  title: "IELTS",
  id:"01",
  img : "https://lh3.googleusercontent.com/V6Vytv-zbmvEI83_g4ypLVPYTwbd3B0658XVSBrbA59Pm09BzQ4zy__QvapWUnl93GdQEd3sLzCQAyNxvrQRJU-xuMgf0ExKG2R1rvKE4rE6Ba7p8KElRz1qTM_66MrV_HQMmMFOFA=w2400",
  desc :"We run the best IELTS preparation center in Nepal. Our teacher have several years of experience, have received high quality training and are champions in helping the students attain a good marks "
},
{
  title:"PTE",
  id:"02",
  img : "https://lh3.googleusercontent.com/hZKJysPabDoj5ZNzf0VlayWabNqVRJDLkN0fZRANcrhUfOOhkkhB4ShtTcneYkBWn5OBIvu7z-FUfEDPYxlJXEEHGM_8uPEkhd31fqfXowJpHh0UHh-L20eslaG_UX6OqgvECAoeUw=w2400",
  desc:"A good score in TOEFL will lead your way to better scholarship option in many destinations including USA. Come get training from the best TOEFL teacher Ms. Neelam Sharma who has an MPhil in English and more than 10 years of experience. "
},
{
  title:"SAT",
  id:"03",
  img : "https://lh3.googleusercontent.com/xcZnxK-qFfowhaOzNx3_gopUyvp_0SEGl4POvIeJ5HOa9ywfLg4AmgrR5uvWSO7cZjQ1yScXss4LfncRr9K2hFXg-KyMrG4G8F-ZioFRs6pDWMHqpJka3ysUSSvS2kC4fNNT-pbWzw=w2400",
  desc :"The PTE exam has become very popular in recent times and we have a team of experts to guide you to score better in the PTE. With modern facilities our PTE labs are probably the best one in Nepal. "
},
{
  title:"TOEFL",
  id:"04",
  img : "https://lh3.googleusercontent.com/rGzdLH-MSoSR2HRy8Zwim8-WvhtSXP_eVpiXV-fHwEKBhjfHnrg0PKQDhMXJXXG8VwQbLz-DcKh0v5WLhy4uGPMvKFx2RwYunD8SQgKRf30ZUEH-_1tVoLSB3tzz_3-py5iuc_G44w=w2400",
  desc : "The SAT is a standardized exam taken by high school students for college admissions. It assesses skills in math, reading, and writing and is scored on a scale of 400-1600. It is used by colleges to determine a student's preparedness for college-level coursework."
}
]

function Home() {
  return (
    <>
      <div className="home_wrapper ">
        <div className="swiper_wrapper">
          <Heroswiper />
        </div>
        <div className="">
          <Service />
          <About />
          <Opportunity />
          <section className="section_preparation w-100 ">
            <div className="section_wrapper container">
              <h4 className="display-4">Preparation Classes</h4>
              <div className="preparation-wrapper">
                {
                  classes.map((classs) => {
                    return <Preparation item={classs} key={classs.id}/>
                  })
                }
              </div>
            </div>
          </section>
          <Subject />
          <Map />
          <Partners />
        </div>
          <Address />
      </div>
    </>
  );
}

export default Home;
