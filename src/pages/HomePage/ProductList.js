import React from "react";
import useProductList from "../../hooks/useProductList"; // Import custom hook
import useAddToCart from "../../hooks/useAddToCart"; // Import add to cart hook
import "./ProductList.css";

const ProductList = ({ products = [], showPopupOnClick = false }) => {
  const { handleImageClick, formatPrice } = useProductList(); // Use hook
  const addToCart = useAddToCart(); // Get addToCart function from hook

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product, "Quantity: 1"); // Log to check the product
    addToCart(product, 1); // Add product to cart with default quantity of 1
  };

  if (!products.length) {
    return <div>No products available</div>; // Display message if no products
  }

  return (
    <div>
      <h3 className="productlist-title">MADE THE HARD WAY</h3>
      <h2 className="productlist-subtitle">TOP TRENDING PRODUCTS</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id.$oid} className="product-card">
            <img
              src={product.img1} // Ensure img1 is the correct image property
              alt={product.name}
              className="product-image"
              onClick={() => handleImageClick(product, showPopupOnClick)} // Call handleImageClick
            />
            <h4>{product.name}</h4>
            <p>Price: {formatPrice(product.price)} VND</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)} // Add product to cart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
