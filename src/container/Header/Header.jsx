import React from "react";
import { SubHeading } from "../../components";
import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Fresh & Affordable Street Food" />
        <h1 className="app__header-h1">Streetly</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Enjoy authentic Indian street food made fresh daily at pocket-friendly
          prices. We keep it simple with popular Indian snacks and meals, all
          priced reasonably to suit every budget. From crispy samosas to
          refreshing lassi, taste the tradition!
        </p>
        <button type="button" className="custom__button" onClick={scrollToMenu}>
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
