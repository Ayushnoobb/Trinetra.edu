import { NavLink ,Route ,Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import ErrorMsg from "../pages/error";

import React from "react";

const DefaultContainer = () => {
  <Routes>
    <NavLink />
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    {/* <Route path="/message/sucess" element={<SucessMsg />}></Route> */}
    <Route path="/message/error" element={<ErrorMsg />}></Route>
  </Routes>;
};
export default DefaultContainer;
