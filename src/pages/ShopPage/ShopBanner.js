// src/pages/ShopPage/ShopBanner.js
import React from "react";
import "./ShopBanner.css";
import shopBannerImage from "../../assets/images/shop-banner.png"; // Update path as needed

const ShopBanner = () => {
  return (
    <div className="shop-banner">
      <img
        src={shopBannerImage}
        alt="Shop Banner"
        className="shop-banner-image"
      />
      <div className="shop-banner-content">
        <h1>Discover the Latest Apple Products</h1>
        <p>
          Explore our collection of iPhones, Apple Watches, and premium
          accessories.
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
