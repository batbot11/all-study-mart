import React from "react";
import Basename from '../../utils/Basename';
import "./LogoBar.css";

const LogoBar = () => {
  return (
    <div className="logobar__container">
      <img src={`${Basename}images/Logo.jpeg`} className="logobar__logo" alt="Logo" />
      <div className="logobar__name--container">
        <span className="logobar__heading--main">All Study Mart</span>
        <span className="logobar__heading--sub">
          The Complete Study Solution
        </span>
      </div>
      <div className="logobar__social--container">
        <img
          src={`${Basename}images/facebook.png`}
          className="logobar__social--img"
          alt=""
        />
        <img
          src={`${Basename}images/whatsapp.png`}
          className="logobar__social--img"
          alt=""
        />
        <img
          src={`${Basename}images/linkedin.png`}
          className="logobar__social--img"
          alt=""
        />
        <img src={`${Basename}images/twitter.png`} className="logobar__social--img" alt="" />
        <img
          src={`${Basename}images/telegram.png`}
          className="logobar__social--img"
          alt=""
        />
        <img
          src={`${Basename}images/instagram.png`}
          className="logobar__social--img"
          alt=""
        />
      </div>
    </div>
  );
};

export default LogoBar;
