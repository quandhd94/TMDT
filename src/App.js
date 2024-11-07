import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductProvider from "./context/ProductContext"; // Import ProductProvider
import UserProvider from "./context/UserContext"; // Import UserProvider
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CartPage/CheckoutPage";
import LiveChatPage from "./pages/LiveChatPage";

function App() {
  return (
    <UserProvider>
      {/* Wrap with UserProvider */}
      <ProductProvider>
        {/* Wrap your app with ProductProvider */}
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/detail/:productId" element={<DetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/live-chat" element={<LiveChatPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
