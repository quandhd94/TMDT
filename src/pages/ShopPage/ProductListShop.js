import React from "react";
import { Link } from "react-router-dom";
import useProductList from "../../hooks/useProductList";
import useAddToCart from "../../hooks/useAddToCart";
import "./ProductListShop.css";

const ProductListShop = ({ products = [] }) => {
  const { formatPrice } = useProductList();
  const addToCart = useAddToCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1); // Thêm sản phẩm vào giỏ hàng với số lượng mặc định là 1
  };

  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <h3 className="productlist-title">MADE THE HARD WAY</h3>
      <h2 className="productlist-subtitle">TOP TRENDING PRODUCTS</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id.$oid} className="product-card">
            <Link to={`/detail/${product._id.$oid}`}>
              <img
                src={product.img1}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <h4>{product.name}</h4>
            <p>Price: {formatPrice(product.price)} VND</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListShop;
