import React, { useEffect } from "react";
import Popup from "react-animated-popup";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import { useLocation } from 'react-router-dom';

function SucessMsg() {
  let location = useLocation();
  console.log(location)
  // const pStyle = {
  //   textAlign: "center",
  // };
  useEffect(() => {
    const Tstyle = {
      left: "50% ",
      top: "50%",
      transform: "translate(-50% , -50%)",
    };
    if (location.pathname === "/message/sucess"){
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
    }
    document.querySelector(".pop").parentElement.style = Tstyle;
  });
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Popup visible={true} className="pop">
          <p className="fw-b fs-4 text-center">Sucess</p>
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
              <div className="icon-circle"></div>
              <div className="icon-fix"></div>
            </div>
          </div>
          <div className="btn btn-primary sucess-btn">
            <Link to="/contact">Go to Contact</Link>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default SucessMsg;
