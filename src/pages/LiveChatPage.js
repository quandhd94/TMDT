// src/pages/LiveChatPage.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const LiveChatPage = () => {
  const [messages, setMessages] = useState([]); // Danh sách tin nhắn
  const [inputMessage, setInputMessage] = useState(""); // Tin nhắn hiện tại

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Giả lập phản hồi từ bộ phận chăm sóc khách hàng
      setTimeout(() => {
        const responseMessage = {
          id: messages.length + 2,
          text: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.",
          sender: "support",
        };
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
      }, 1000);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Live Chat Support</h1>
      <div
        className="messages-container border rounded p-3"
        style={{ height: "400px", overflowY: "auto" }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message mb-2 p-2 rounded ${
              message.sender === "user"
                ? "bg-primary text-white"
                : "bg-light text-dark"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container d-flex mt-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="form-control me-2"
        />
        <button onClick={handleSendMessage} className="btn btn-primary">
          Gửi
        </button>
      </div>
    </div>
  );
};

export default LiveChatPage;
