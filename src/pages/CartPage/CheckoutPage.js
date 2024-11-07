import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CheckoutPage.css"; // Import custom CSS file

const CheckoutPage = () => {
  const { cartState } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted", formData);
  };

  const getTotalPrice = () => {
    return cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-8">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-left">
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>
        <div className="banner-right">
          <p className="breadcrumb text-white">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/cart" className="breadcrumb-link">
              Cart
            </Link>{" "}
            / Checkout
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-7 mb-5">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 shadow-md rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <div className="mb-4">
              <label className="form-label font-semibold">Full Name:</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name Here!"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label className="form-label font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Here!"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label className="form-label font-semibold">Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Phone Number Here!"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <label className="form-label font-semibold">Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Your Address Here!"
                value={formData.address}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Place Order
            </button>
          </form>
        </div>

        <div className="col-md-5">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
            <ul className="list-group mb-4">
              {cartState.items.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name} x {item.quantity}
                  <span>
                    {(item.price * item.quantity).toLocaleString()} VND
                  </span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between font-bold text-lg mt-4">
              <span>Total:</span>
              <span>{getTotalPrice().toLocaleString()} VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
