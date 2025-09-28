import React, { useState } from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setShowToast(true);
      setEmail("");

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Get Daily Food Updates</h1>
        <p className="p__opensans">
          Subscribe to get notifications about daily specials, new menu items,
          and exclusive student discounts at Streetly!
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="custom__button" onClick={handleSubmit}>
          Subscribe
        </button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="newsletter-toast">
          <p>✅ We will keep you updated through mail!</p>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
