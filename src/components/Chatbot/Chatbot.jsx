import React, { useState, useRef, useEffect } from "react";
import { BsChatDots, BsX, BsSend } from "react-icons/bs";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "🍛 Welcome to Streetly! I'm your food assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      type: "user",
      message: inputMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        type: "bot",
        message: botResponse,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    if (
      userInput.includes("menu") ||
      userInput.includes("food") ||
      userInput.includes("items")
    ) {
      return "🍽️ Our popular items: Samosa (₹40), Pav Bhaji (₹70), Vada Pav (₹35), Masala Dosa (₹80), Chole Bhature (₹90). Which one interests you?";
    }
    if (
      userInput.includes("price") ||
      userInput.includes("cost") ||
      userInput.includes("₹")
    ) {
      return "💰 Our prices range from ₹20 (Masala Chai) to ₹90 (Chole Bhature). We keep everything affordable for students!";
    }
    if (
      userInput.includes("location") ||
      userInput.includes("address") ||
      userInput.includes("where")
    ) {
      return "📍 We're located Near College Gate, Main Road, University Area. Very easy to find!";
    }
    if (
      userInput.includes("timing") ||
      userInput.includes("hours") ||
      userInput.includes("open")
    ) {
      return "⏰ We're open daily from 11:00 AM to 10:00 PM. Fresh food all day long!";
    }
    if (
      userInput.includes("beverage") ||
      userInput.includes("drink") ||
      userInput.includes("chai") ||
      userInput.includes("lassi")
    ) {
      return "🥤 Our beverages: Masala Chai (₹20), Sweet Lassi (₹30), Fresh Lime Soda (₹25), Mango Shake (₹45). All refreshing!";
    }
    if (userInput.includes("spicy") || userInput.includes("spice")) {
      return "🌶️ We can adjust spice levels! Just let us know - mild, medium, or extra spicy. Your taste, your choice!";
    }
    if (userInput.includes("order") || userInput.includes("delivery")) {
      return "🛵 Visit us at our stall for fresh, hot food! We focus on quality over delivery to serve you the best street food experience.";
    }
    if (
      userInput.includes("hi") ||
      userInput.includes("hello") ||
      userInput.includes("hey")
    ) {
      return "👋 Hello! Welcome to Streetly - your favorite street food destination! What would you like to know?";
    }
    if (userInput.includes("thank") || userInput.includes("thanks")) {
      return "🙏 You're welcome! Come visit us soon for some delicious street food. Enjoy your meal!";
    }
    if (userInput.includes("i want")) {
      return "🤔 Great! What are you craving? Tell me more about what you want:\n• Something crispy like Samosa or Vada Pav?\n• Something filling like Pav Bhaji or Chole Bhature?\n• A refreshing drink like Lassi or Fresh Lime Soda?\n• Just let me know your mood and I'll recommend the perfect item! 😊";
    }

    return "😊 I'd love to help! Ask me about our menu, prices, location, timings, or anything else about Streetly!";
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        className={`chatbot-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
      >
        {isOpen ? <BsX /> : <BsChatDots />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <h4>Streetly Assistant</h4>
              <p>Ask me anything!</p>
            </div>
            <button className="chatbot-close" onClick={toggleChat}>
              <BsX />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-content">
                  <p>{msg.message}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about menu, prices, location..."
              className="chatbot-input-field"
            />
            <button onClick={handleSendMessage} className="chatbot-send-btn">
              <BsSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
