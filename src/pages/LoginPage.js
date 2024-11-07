// src/pages/LoginPage.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Nhập CartContext
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext); // Lấy dispatch từ CartContext

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lấy danh sách người dùng từ localStorage
    const userArr = JSON.parse(localStorage.getItem("userArr")) || [];

    // Tìm người dùng có email và password khớp
    const user = userArr.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Lưu trạng thái đăng nhập và fullName vào localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("fullName", user.fullName); // Lưu fullName của người dùng

      // Gộp giỏ hàng của khách với giỏ hàng người dùng
      dispatch({ type: "SET_CART_ITEMS" }); // Giả sử bạn có hành động này để gộp giỏ hàng

      // Phát sự kiện tùy chỉnh sau khi đăng nhập thành công
      window.dispatchEvent(new Event("loginStatusChanged"));

      navigate("/"); // Điều hướng về trang chủ sau khi đăng nhập thành công
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
          <p className="auth-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
