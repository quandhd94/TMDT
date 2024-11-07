// src/pages/ShopPage.js
import React, { useContext, useMemo, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext"; // Import UserContext
import ProductListShop from "./ProductListShop";
import Banner from "./ShopBanner";
import ProductFilter from "./ProductFilter";
import CategorySelector from "./CategorySelector";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopPage.css";

const ShopPage = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { isLoggedIn } = useContext(UserContext); // Use isLoggedIn from UserContext
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // Sử dụng useMemo để tính toán lại danh sách sản phẩm theo bộ lọc
  const sortedProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      return (
        (category.toLowerCase() === "all" ||
          product.category.toLowerCase() === category.toLowerCase()) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });
  }, [products, category, searchTerm, sortOrder]);

  if (loading) return <div className="loading-indicator">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="shop-page">
      <Banner />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>CATEGORIES</h2>
        <ProductFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <div className="row">
        <div className="col-md-2">
          <CategorySelector category={category} setCategory={setCategory} />
        </div>
        <div className="col-md-9" style={{ flex: 1 }}>
          <ProductListShop products={sortedProducts} isLoggedIn={isLoggedIn} />{" "}
          {/* Pass isLoggedIn */}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
