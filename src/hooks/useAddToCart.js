// src/hooks/useAddToCart.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useAddToCart = () => {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product, quantity = 1) => {
    if (product && product._id && quantity > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product._id.$oid, // sử dụng _id.$oid làm id của sản phẩm
          image: product.img1 || "/path/to/default-image.jpg", // Đảm bảo thuộc tính hình ảnh tồn tại
          name: product.name || "Tên sản phẩm không có", // Thêm tên sản phẩm
          price: product.price || 0, // Thêm giá sản phẩm
          quantity, // Số lượng
        },
      });
    } else {
      console.warn("Product or quantity is invalid.");
    }
  };

  return addToCart;
};

export default useAddToCart;
