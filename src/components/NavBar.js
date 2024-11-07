import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import "./NavBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [fullName, setFullName] = useState(
    localStorage.getItem("fullName") || "Guest"
  );
  const { cartState, dispatch } = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(
      cartState.items.reduce((total, item) => total + item.quantity, 0)
    );
  }, [cartState.items]);

  useEffect(() => {
    const handleLoginStatusChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setFullName(localStorage.getItem("fullName") || "Guest");
    };

    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("fullName");
    localStorage.removeItem("userEmail");

    // Xóa giỏ hàng khỏi state nhưng giữ lại trong localStorage
    dispatch({ type: "CLEAR_CART" });

    setIsLoggedIn(false);
    setFullName("Guest");
    window.dispatchEvent(new Event("loginStatusChanged"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </div>
      <div className="navbar-mid">
        <h1 className="navbar-brand">BOUTIQUE</h1>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
        {isLoggedIn ? (
          <div className="user-menu">
            <FontAwesomeIcon icon={faUserCircle} /> {fullName}{" "}
            <button onClick={handleLogout} className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
