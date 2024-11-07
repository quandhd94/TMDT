import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartState, dispatch } = useContext(CartContext);

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  // Hàm để tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
  };

  // Hàm để giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
  };

  // Tính tổng tiền của các sản phẩm trong giỏ
  const getTotalPrice = () => {
    return cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {cartState.items.length === 0 ? (
            <div className="text-center">
              <p className="text-lg">Your cart is empty.</p>
              <Link
                to="/shop"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div>
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 text-left">Image</th>
                    <th className="py-2 px-4 text-left">Product</th>
                    <th className="py-2 px-4 text-left">Price</th>
                    <th className="py-2 px-4 text-left">Quantity</th>
                    <th className="py-2 px-4 text-left">Total</th>
                    <th className="py-2 px-4 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartState.items.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4">
                        <img
                          src={item.image || "/images/default-image.jpg"}
                          alt={item.name}
                          className="h-20 w-auto object-cover"
                        />
                      </td>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">
                        {parseInt(item.price).toLocaleString()} VND
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        {(item.price * item.quantity).toLocaleString()} VND
                      </td>
                      <td className="py-2 px-4">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => removeFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h4 className="text-lg font-semibold">CART TOTAL</h4>
                  <p>Subtotal: {getTotalPrice().toLocaleString()} VND</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter your coupon"
                    className="border border-gray-300 rounded-md px-3 py-2 mr-2"
                  />
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Apply coupon
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-3">
                <Link
                  to="/shop"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/checkout"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
