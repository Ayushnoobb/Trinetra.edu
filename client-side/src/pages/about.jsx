import React, { useEffect, useState ,useRef} from "react";
import Address from "../section/address";
import chiran from "../img/team/chiran.jpg";
import giri from "../img/team/giri.jpg";
import about from "../img/about.jpg";
import Partners from "../section/Partners";
import useIntersection from "./observation";
import ayush from "../img/team/ayush.jpg";
import ramesh from "../img/team/ramesh.jpg"
import anish from "../img/team/anish.jpg"
import binita from "../img/team/binita.jpg"

const About = () => {
  const [number, setNumber] = useState(0);

  const ref = useRef();
  const inViewport = useIntersection(ref, '-200px'); 

  useEffect(()=>{
    document.addEventListener("load",()=>{
    })
    if(inViewport){
      const interval = setInterval(() => {
        if(number < 500) {
          setNumber((prevNumber) => prevNumber + 1);
        }
      }, 1);
  
      return ()=>clearInterval(interval);
    }
},[inViewport,number])

  return (
    <>
      <section className="about-section">
        <div className="" style={{ height: "70vh" }} data-aos="fade" data-aos-duration="1000" data-aos-anchor-placement="top-center">
          <img
            src={about}
            alt="About Us"
            className=" rounded"
            height={"100%"}
            width={"100%"}
            style={{objectFit:"cover",objectPosition:"center",filter:"sepia(0.3)"}}
          />
        </div>
        <div className="container">
          <div className="row mt-5 mb-5 px-4">
            <h2 className=" display-5 w-100 text-center">
              About Trinetra Consultancy
            </h2>
            <p className="mt-4">
              Trinetra Consultancy is a leading education consultancy firm that
              specializes in helping students pursue their dreams of studying
              abroad. Our team of expert consultants has years of experience in
              the field of international education and provides comprehensive
              support to students throughout the entire process, from selecting
              the right course and institution to securing admission and
              obtaining a visa.
            </p>
            <p>
              We are a team of 8 highly qualified and experienced consultants
              who are passionate about helping students achieve their goals.
            </p>
          </div>
          <div className="head w-100">
            <h2 className=" text-left display-6 mt-4 mb-4 ">Head Members</h2>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column flex-md-row flex-md-row" data-aos="fade-up-right" data-aos-duration="1500" data-aos-anchor-placement="top-center">
                <div
                  className="p-2"
                  style={{
                    width: "",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={chiran}
                    alt="head members"
                    className="team-img rounded"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-2">
                  <h3 className="">Chiran Adhikari</h3>
                  <p className="mb-1">
                    <em>CEO of Trilochan Consultancy</em>
                  </p>
                  <p>Hello I am Chiran , </p>
                </div>
              </div>
              <div className="d-flex flex-row-reverse mt-5  align-self-end mb-5" data-aos="fade-up-left" data-aos-duration="1500" data-aos-anchor-placement="top-center">
                <div
                  className="p-2"
                  style={{
                    width: "",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                  loading="lazy"
                >
                  <img
                    src={giri}
                    alt="head members"
                    className="team-img rounded"
                    width={350}
                    height={400}
                  />
                </div>
                <div className="p-2">
                  <h3 className="">Bhim Bahadur Giri</h3>
                  <p>
                    <em>Your Little Description</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="display-6  mb-4 text-align-left w-100">
            Meet Our Team
          </h2>
          <div className="row d-flex py-3">
            <div className="col-md-4" data-aos="fade-down-right" data-aos-duration="1500" data-aos-anchor-placement="top-center">
              <div className="team-member ">
                <img
                  src={ramesh}
                  alt="Ramesh"
                  className="rounded img-fluid"
                  height={400}
                />
                <h4 className="mt-3 ">Ramesh Adhikari</h4>
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
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-center">
              <div className="team-member">
                <img
                  src={anish}
                  alt="Jane Doe"
                  className="rounded img-fluid"
                />
                <h4 className="mt-3 ">Anish Dulal</h4>
                <p className="mb-2">
                  <em>Senior Education Consultant</em>
                </p>
                <p>
                  Anish is a seasoned education consultant with over 1 years of
                  experience. He specializes in providing guidance to students
                  who are interested in pursuing courses in the STEM fields. His
                  expertise and attention to detail have helped many students
                  secure admission to top universities around the world.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-down-left" data-aos-duration="1500" data-aos-anchor-placement="top-center">
              <div className="team-member">
                <img
                  src={binita}
                  alt="Jane Doe"
                  className="rounded img-fluid"
                />
                <h4 className="mt-3 ">Binita Katuwal</h4>
                <p className="mb-2">
                  <em>STEM Education Specialist</em>
                </p>
                <p>
                  Binita is a seasoned education consultant with over 1 years of
                  experience. He specializes in providing guidance to students
                  who are interested in pursuing courses in the STEM fields. His
                  expertise and attention to detail have helped many students
                  secure admission to top universities around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex  pr-3 pl-3">
            <div className="col-md-4" data-aos="fade-down-right" data-aos-duration="1500" data-aos-anchor-placement="top-center">
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="John Smith"
                  className="rounded"
                />
                <h4 className="mt-3 ">Roza Maharjan</h4>
                <p className="mb-2">
                  <em>Senior Education Consultant</em>
                </p>
                <p>
                  Roza with over 2 years of experience in the field of
                  international education, She is a highly sought-after
                  consultant who has helped hundreds of students achieve their
                  dreams of studying abroad. She specializes in providing
                  guidance to students who are interested in pursuing courses in
                  the humanities and social sciences.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-center">
              <div className="team-member">
                <img
                  src={ayush}
                  alt="John Smith"
                  className="img-fluid rounded"
                />
                <h4 className="mt-3 ">Ayush Khatri</h4>
                <p className="mb-2">
                  <em>Software Engineer</em>
                </p>
                <p>
                    Ayush with over 1 year of exprerience in software development field is our senior IT consultant.
                    He is very keen to upgrade the Information Technology of Trilochan. When necessary he is also
                    responsible to give IT suggestion to our students.
                </p>
              </div>
            </div>
          </div>
          <h2 className="display-6  mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" data-aos-delay="100">We have sucessfully send over</h2>
          <p className="increase-num fs-3" style={{color:"rgb(255, 55, 68)"}} data-aos="fade-up" data-aos-duration="1000" ref={ref}>{number} Students +</p>
        </div>
      </section>
      <Partners />
      <Address />
    </>
  );
};
export default About;
