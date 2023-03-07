import React from "react";
import "./style/style.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Error from "./pages/error";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sucess from "./pages/sucess";
import Verification from "./pages/verification";
import AOS from 'aos'
import 'aos/dist/aos.css'
import FAQ from "./pages/faq";

function AppRouter() {
  AOS.init()
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/message/error" element={<Error />}></Route>
            <Route path="/message/sucess" element={<Sucess />}></Route>
            <Route path="/message/verify" element={<Verification />}></Route>
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default AppRouter;
