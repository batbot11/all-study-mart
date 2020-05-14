import React from "react";
import "./LogoBar.css";

const LogoBar = () => {
  return (
    <div className="logobar__container">
      <img src="/images/Logo.jpeg" className="logobar__logo" alt="Logo" />
      <div className="logobar__name--container">
        <span className="logobar__heading--main">All Study Mart</span>
        <span className="logobar__heading--sub">
          The Complete Study Solution
        </span>
      </div>
      <div className="logobar__social--container">
        <img
          src="/images/facebook.png"
          className="logobar__social--img"
          alt=""
        />
        <img
          src="/images/whatsapp.png"
          className="logobar__social--img"
          alt=""
        />
        <img
          src="/images/linkedin.png"
          className="logobar__social--img"
          alt=""
        />
        <img src="/images/twitter.png" className="logobar__social--img" alt="" />
        <img
          src="/images/telegram.png"
          className="logobar__social--img"
          alt=""
        />
        <img
          src="/images/instagram.png"
          className="logobar__social--img"
          alt=""
        />
      </div>
    </div>
  );
};

export default LogoBar;
