import React from "react";
import "./Footer.css";
import ChatPopup from "./ChatPopup";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-4">
            <h5 className="font-bold text-lg mb-4 text-gray-400">
              CUSTOMER SERVICES
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Help & Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="font-bold text-lg mb-4 text-gray-400">COMPANY</h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Available Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="font-bold text-lg mb-4 text-gray-400">
              SOCIAL MEDIA
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-400 hover:text-gray-200">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ChatPopup />
    </footer>
  );
};

export default Footer;
