import React, { useState, useRef, useEffect } from "react";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null); // Ref để cuộn đến tin nhắn mới

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (inputValue.trim() || file) {
      const newMessage = {
        text: inputValue,
        file: file,
        sender: "customer", // Giả sử người gửi là khách hàng
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn chặn việc tạo dòng mới
      handleSend();
    }
  };

  // Hàm cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Button to open/close chat */}
      <button
        className={`bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-transform duration-300 transform ${
          isOpen ? "rotate-0" : ""
        }`}
        onClick={toggleChat}
      >
        {isOpen ? "Close" : "Chat with Us"}
      </button>

      {/* Chat popup window */}
      {isOpen && (
        <div className="chat-popup bg-white border border-gray-200 rounded-lg p-4 shadow-xl w-80 mt-3">
          <h3 className="font-bold text-lg mb-2 text-gray-800">
            Customer Support
          </h3>
          <div className="overflow-y-auto max-h-60 mb-4 p-2 border border-gray-200 rounded-lg bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "customer" ? "text-right" : "text-left"}`}
              >
                {msg.sender === "customer" ? (
                  <div className="bg-blue-100 p-2 rounded-lg inline-block max-w-xs">
                    {msg.text && <p className="text-gray-700">{msg.text}</p>}
                    {msg.file && (
                      <p className="text-sm text-gray-600">
                        File: <strong>{msg.file.name}</strong>
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-200 p-2 rounded-lg inline-block max-w-xs">
                    <p className="text-gray-800">Response from Support</p>
                  </div>
                )}
              </div>
            ))}
            {/* Phần tử ref để cuộn xuống */}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center mb-2">
            <textarea
              className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none mr-2 text-black"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>

            {/* Biểu tượng gửi tệp */}
            <label className="cursor-pointer mr-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-blue-600 hover:text-blue-800">📎</span>
            </label>

            {/* Biểu tượng gửi ảnh */}
            <label className="cursor-pointer mr-2">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <span className="text-blue-600 hover:text-blue-800">🖼️</span>
            </label>

            {/* Biểu tượng gửi tin nhắn */}
            <button
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              onClick={handleSend}
            >
              <i className="fas fa-paper-plane"></i>{" "}
              {/* Sử dụng biểu tượng gửi */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
