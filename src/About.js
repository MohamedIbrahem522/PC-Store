import React from "react";
import "./App.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About Us</h2>
      <p className="about-text">
        Welcome to PC Store! We are your one-stop shop for all your computer
        needs. Our mission is to provide you with top-quality products and
        exceptional service.
      </p>
      <p className="about-text">
        Our website offers a wide range of computer products, including
        motherboards, graphics cards, processors, and more. Whether you are a
        gaming enthusiast or a professional, we have the right components for
        you.
      </p>
      <p className="about-text">
        Created by <b className="eng">Eng:</b>  Mohamed Ibrahem
      </p>
    </div>
  );
};

export default About;
