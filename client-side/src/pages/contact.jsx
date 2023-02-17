import React, { useEffect } from "react";
import Address from "../section/address";

const Contact = () => {
  useEffect(() => {
    document.querySelector("nav").style.display = "block";
    document.querySelector("footer").style.display = "block";
    window.localStorage.setItem("active",2)
  }, []);
  return (
    <>
      <div className="row w-50 mb-1" style={{margin:"0 auto"}}>
        <div className="col-lg-7 mx-auto mt-4 mb-4">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form  method="POST" action="/message">
                  <div className="controls">
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Firstname *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder=" firstname *"
                            required="required"
                            data-error="Firstname is required."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_lastname">Lastname *</label>
                          <input
                            id="form_lastname"
                            type="text"
                            name="surname"
                            className="form-control"
                            placeholder=" lastname *"
                            required="required"
                            data-error="Lastname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder=" email *"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Phone Number *</label>
                          <input
                            id="form_email"
                            type="number"
                            name="number"
                            className="form-control"
                            placeholder=" phone number *"
                            required="required"
                            data-error="Valid email is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="message"
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12 mt-4">
                        <button
                          type="submit"
                          className="custom-btn btn-3
                            "
                        ><span>Send Message</span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Address className="mb-2"/>
    </>
  );
};
export default Contact;
