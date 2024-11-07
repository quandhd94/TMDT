// src/pages/HomePage.js
import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Banner from "./Banner";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import ServiceSection from "./ServiceSection";
import SubscribeSection from "./SubscribeSection";
import Popup from "./Popup";
import "./HomePage.css";

const HomePage = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <Banner />
      <CategoryList />
      <ProductList products={products} showPopupOnClick={true} />
      <Popup />
      <ServiceSection />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
