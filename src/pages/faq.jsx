import Accordion from "react-bootstrap/Accordion";
import Address from "../section/address";
import Partners from "../section/Partners";
import AOS from 'aos'
import 'aos/dist/aos.css'

function FAQ() {
  AOS.init({
    disable:()=>{
      // var maxWidth = 768;
      // return maxWidth <= window.innerWidth
    }
  })
  return (
    <>
      <div className="container">
        <h2 className="display-4 mt-5 px-4 font-medium">For <br className="d-md-none" />Additional Query <span className="display-1 bounce">?</span></h2>

        <Accordion defaultActiveKey="0" className="px-4">
          <Accordion.Item eventKey="0" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header className="bg-gradients">
              What is educational consultancy?
            </Accordion.Header>
            <Accordion.Body>
            Educational consultancy is a service that helps students and their families navigate the education system and make informed decisions about their academic paths. Educational consultants offer advice and support for various aspects of the educational process, including college admissions, academic planning, test preparation, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>What services do educational consultants provide?</Accordion.Header>
            <Accordion.Body>
              <p className="mb-4">
              Educational consultants can provide a wide range of services, depending on the needs of their clients. Some of the most common services include:
              </p>
              <ul className="list-disc">
                <li  style={{listStyle:"disc"}}>College admissions counseling: helping students prepare for and apply to colleges and universities</li>
                <li  style={{listStyle:"disc"}}>Academic planning: assisting students in selecting classes and courses that align with their interests and goals</li>
                <li  style={{listStyle:"disc"}}>Test preparation: offering support and resources to help students prepare for standardized tests like the SAT, ACT, and GRE</li>
                <li  style={{listStyle:"disc"}}>Career counseling: providing guidance and advice on career paths and job opportunities</li>
                <li  style={{listStyle:"disc"}}>International student advising: supporting international students as they navigate the educational system in a new country</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/*  */}
          <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>How do I choose an educational consultant?</Accordion.Header>
            <Accordion.Body>
            When choosing an educational consultant, it's important to consider factors such as their experience, qualifications, and track record of success. You should also look for someone who is a good fit for your personality and communication style, and who has a deep understanding of your unique needs and goals.
            </Accordion.Body>
          </Accordion.Item>
          {/*  */}
          <Accordion.Item eventKey="3" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>How much do educational consultants charge?</Accordion.Header>
            <Accordion.Body>
            The cost of educational consulting services can vary widely, depending on the level of support and services provided. Some consultants charge an hourly rate, while others offer package deals or flat fees for specific services. It's important to discuss pricing and fees upfront with any consultant you're considering working with.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>How can educational consultants help students with learning differences or disabilities?</Accordion.Header>
            <Accordion.Body>
            Educational consultants can offer specialized support and guidance for students with learning differences or disabilities. This may include helping students find schools or programs that are tailored to their needs, identifying resources and accommodations to help them succeed academically, and providing emotional support and advocacy as needed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>Is educational consultancy only for college-bound students?</Accordion.Header>
            <Accordion.Body>
            No, educational consultancy can be useful for students of all ages and academic levels. Consultants can provide support and guidance for students at every stage of the educational journey, from elementary school to graduate school and beyond.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" data-aos="fade-up" data-aos-duration="2000">
            <Accordion.Header>How can educational consultants help students who are struggling academically?</Accordion.Header>
            <Accordion.Body>
            Educational consultants can offer a variety of services to help students who are struggling academically, including academic coaching, study skills training, and personalized support and guidance. They can also work with students to identify the root causes of their academic struggles and develop strategies to overcome them.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Partners />
      <Address />
    </>
  );
}

export default FAQ;
