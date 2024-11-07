import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section container text-center my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-start text-center">
          <h5>LET'S BE FRIENDS!</h5>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
            />
            <button className="btn btn-dark" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
