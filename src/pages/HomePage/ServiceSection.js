import React from "react";
import "./ServiceSection.css"; // Đảm bảo đường dẫn đúng

const ServiceSection = () => {
  return (
    <div className="service-section container text-center my-5">
      <div className="row">
        <div className="col-md-4">
          <h4>FREE SHIPPING</h4>
          <p>Free shipping worldwide</p>
        </div>
        <div className="col-md-4">
          <h4>24 X 7 SERVICE</h4>
          <p>Free shipping worldwide</p>
        </div>
        <div className="col-md-4">
          <h4>FESTIVAL OFFER</h4>
          <p>Free shipping worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
