import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/tinetra.png";
// import head from "../img/headlogo.svg"
import Button from "./button";

const Navbar = () => {
  const [active , setActive] = useState( 0 )
  let location = useLocation();
  useEffect(() => {
    const nav = document.querySelector("#nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }
    });
    if (location.pathname === "/"){
      setActive(0)
    }
    else if (location.pathname === "/about"){
      setActive(1)
    }
    else if(location.pathname === "/contact"){
      setActive(2)
    }
    else if (location.pathname === "/faq"){
      setActive(3)
    }
    else{
      setActive(undefined)
    }
  }, [location.pathname]);
  return (
    <>
      <nav id="nav">
        <div className="nav_wrap" >
          <div className="">
            <div className="nav_wrapper">
              <div className="nav-lefter">
                <Link to={"/"} className="nav-lft-wrapper">
                  <img
                    src={logo}
                    alt="logo"
                    className="nav-left img-fluid"
                  ></img>
                </Link>
                <h2 className="heading">Trilochan Educational Service</h2>
              </div>
              <div className="nav-right d-none d-md-flex">
                <Link to={"/"} className={active===0 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(0);}}>
                  Home
                </Link>
                <Link to={"/about"} className={active===1 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(1);}}>
                  About
                </Link>
                <Link to={"/contact"} className={active===2 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(2);}}>
                  Contact
                </Link>
                <Link to={"/faq"} className={active===3 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(3);}}>
                  FAQ
                </Link>
                <div className="nav-apply">
                  <Link to={"/apply-form"} className="nav-apply">
                    <Button name="Apply Now" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
