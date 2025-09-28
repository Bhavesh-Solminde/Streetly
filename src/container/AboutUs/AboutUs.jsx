import React from "react";

import "./AboutUs.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Streetly</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to Streetly, where authentic Indian street food meets modern
          quality standards. We keep our costs low by using fresh, local
          ingredients and simple recipes, so you get delicious food at prices
          that won't burn a hole in your pocket. Every dish is prepared with
          traditional spices and served with love.
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Promise</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          From crispy samosas to refreshing lassi, every item on our menu is
          crafted with care. We believe in keeping things simple - traditional
          recipes, fresh ingredients, and honest prices. Our goal is to bring
          you the authentic taste of Indian streets right to your plate, every
          single day.
        </p>
        <button className="custom__button">Our Story</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
