import React , {useEffect} from "react";
import { Link, useLocation  } from "react-router-dom";

function Verification() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/message/verify") {
      document.querySelector("nav").style.display = "none";
      document.querySelector("footer").style.display = "none";
    }
    else{
      document.querySelector("nav").style.display = "block";
      document.querySelector("footer").style.display = "block";
    }
  });
  return (
    <>
      <div className="verify" style={{margin:"0 auto" , height:"100vh" , display:"flex"}}>
        <form className="d-flex justify-content-center align-items-center container form" method="POST" action="/message-verify">
          <div className="verify-card py-5 px-3">
            <h5 className="m-0">Email verification</h5>
            <span className="mobile-text text-danger">
              Enter the code we just send on your email address
            </span>
            <div className="d-flex flex-row mt-5">
              <input type="text" className="form-control" autofocus="" name="verify1"/>
              <input type="text" className="form-control"  name="verify2"/>
              <input type="text" className="form-control"  name="verify3"/>
              <input type="text" className="form-control"  name="verify4"/>
            </div>
            <div className="buttons d-flex justify-content-between w-100">
              <div className="btn btn-primary mt-4 text-white">
                <Link to={"/contact"}>Go to Contact</Link>
              </div>
              <button className="btn btn-primary mt-4 text-white" type="submit">
                  Submit me
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Verification;
