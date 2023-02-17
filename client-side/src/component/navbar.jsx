import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/trinetra.png";

const Navbar = () => {
  const [active , setActive] = useState( 0 )
  let location = useLocation();
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const navWrap = document.querySelector(".nav_wrap");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        nav.classList.add("fixed");
        navWrap.style.backgroundColor = "transparent";
      } else {
        nav.classList.remove("fixed");
        navWrap.style.backgroundColor = "#f5f5f5";
      }
    });
    if (location.pathname === "/"){
      setActive(0)
    }
    else if(location.pathname === "/contact"){
      setActive(2)
    }
    else if (location.pathname === "/about"){
      setActive(1)
    }
    else{
      setActive(undefined)
    }
  }, [location.pathname]);
  return (
    <>
      <nav id="nav">
        <div className="nav_wrap">
          <div className="container">
            <div className="nav_wrapper">
              <div className="nav-lefter">
                <Link to={"/"} className="nav-lft-wrapper">
                  <img
                    src={logo}
                    alt="logo"
                    className="nav-left img-fluid"
                  ></img>
                </Link>
                <h2 className="heading">Trinetra Educational Service</h2>
              </div>
              <div className="nav-right">
                <Link to={"/"} className={active===0 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(0);}}>
                  Home
                </Link>
                <Link to={"/about"} className={active===1 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(1);}}>
                  About
                </Link>
                <Link to={"/contact"} className={active===2 ? "nav-link active" : "nav-link"} onClick={()=>{setActive(2);}}>
                  Contact
                </Link>
                <div className="nav-apply">
                  <Link to={"/apply-form"} className="nav-apply">
                    <button className="custom-btn btn-3">
                      <span>Apply Now</span>
                    </button>
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
