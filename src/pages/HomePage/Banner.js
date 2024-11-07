import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/images/banner1.jpg"; // Sửa đường dẫn
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="banner">
      <img src={bannerImage} alt="New Season" className="banner-image" />
      <div className="banner-content">
        <h3>NEW INSPIRATION 2020</h3>
        <h1>20% OFF ON NEW SEASON</h1>
        <button className="browse-btn" onClick={navigateToShop}>
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
