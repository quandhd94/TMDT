// src/components/Popup.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../../redux/popupSlice";

import "./Popup.css"; // Tạo CSS cho Popup
import { FaShoppingCart } from "react-icons/fa"; // Nhập biểu tượng giỏ hàng

const Popup = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.popup.product);
  const isVisible = useSelector((state) => state.popup.isVisible);

  // Kiểm tra nếu popup không cần hiển thị
  if (!isVisible || !product) return null;

  // Hàm định dạng giá tiền
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={() => dispatch(hidePopup())}>
          X
        </button>
        <div className="popup-inner">
          <div className="popup-image">
            <img src={product.img1} alt={product.name} />
          </div>
          <div className="popup-details">
            <h2>{product.name}</h2>
            <p>Price: {formatPrice(product.price)} VND</p>
            <p>{product.short_desc}</p>
            <div className="popup-actions">
              <button className="buy-button">
                <FaShoppingCart /> View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
