// src/pages/DetailPage.js
import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import { ProductContext } from "../context/ProductContext"; // Import ProductContext
import useAddToCart from "../hooks/useAddToCart"; // Import custom hook
import "./DetailPage.css";

const DetailPage = () => {
  const { productId } = useParams();
  const { products, loading, error } = useContext(ProductContext); // Lấy dữ liệu từ ProductContext
  const addToCart = useAddToCart();
  const [product, setProduct] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productData = products.find((item) => item._id.$oid === productId);
      if (productData) {
        setProduct(productData);
        setPreviewImage(productData.img1);

        const related = products.filter(
          (item) =>
            item.category === productData.category &&
            item._id.$oid !== productId
        );
        setRelatedProducts(related);
      }
    }
  }, [products, productId]);

  const handleThumbnailClick = (image) => {
    setPreviewImage(image);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  // src/pages/DetailPage.js
  const handleAddToCart = () => {
    if (product) {
      console.log("Adding to cart:", product, "Quantity:", quantity); // Log để kiểm tra sản phẩm và số lượng
      addToCart(product, quantity);
    } else {
      console.warn("No product available to add to cart.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="detail-page">
      <div className="detail-page-content">
        <div className="top-section">
          <div className="images-section">
            <div className="thumbnail-section">
              {[product.img1, product.img2, product.img3, product.img4].map(
                (img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(img)}
                    className="thumbnail"
                  />
                )
              )}
            </div>
            <img
              className="preview-image"
              src={previewImage}
              alt={product.name}
            />
          </div>
          <div className="details-section">
            <h1>{product.name}</h1>
            <h2>Price: {parseInt(product.price).toLocaleString()} VND</h2>
            <p className="long-desc">{product.long_desc}</p>
            <p className="long-desc">
              <strong>CATEGORY</strong>: {product.category}
            </p>
            <div className="quantity-add-to-cart">
              <div className="quantity-section">
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              </div>
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div>
          <button className="add-to-cart-button" onClick={toggleDescription}>
            DESCRIPTION
          </button>
          {showDescription && (
            <div className="product-description">
              <h3>Product Description:</h3>
              <p>{product.short_desc}</p>
            </div>
          )}
        </div>

        {/* Phần sản phẩm liên quan */}
        <div className="related-products-section">
          <h3>Related Products</h3>
          <div className="related-products">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct._id.$oid}
                to={`/detail/${relatedProduct._id.$oid}`} // Điều hướng đến trang chi tiết của sản phẩm liên quan
                className="related-product"
              >
                <img
                  src={relatedProduct.img1}
                  alt={relatedProduct.name}
                  className="related-product-image"
                />
                <h4>{relatedProduct.name}</h4>
                <p>
                  Price: {parseInt(relatedProduct.price).toLocaleString()} VND
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
