import React from "react";
import { useHistory } from "react-router-dom";
import Basename from "../../utils/Basename";
import "./LogoBar.css";

const LogoBar = () => {
  const History = useHistory();

  return (
    <div className="logobar__container">
      <img
        src={`${Basename}images/Logo.jpeg`}
        className="logobar__logo"
        alt="Logo"
      />
      <div className="logobar__name--container">
        <span className="logobar__heading--main">All Study Mart</span>
        <span className="logobar__heading--sub">
          {/* The Complete Study Solution */}
          Mirror To Learning
        </span>
      </div>

      <button className="logobar__btn--careers" onClick={() => History.push("/careers")}>Careers</button>

      <div className="logobar__social--container">
        <a href="https://www.facebook.com/profile.php?id=100008117346493">
          <img
            src={`${Basename}images/facebook.png`}
            className="logobar__social--img"
            alt=""
          />
        </a>
        <img
          src={`${Basename}images/whatsapp.png`}
          className="logobar__social--img"
          alt=""
        />

        <a href="https://www.linkedin.com/in/birendra-saw-0215b6172">
          <img
            src={`${Basename}images/linkedin.png`}
            className="logobar__social--img"
            alt=""
          />
        </a>

        <a href="https://twitter.com/BIRENDRASAW10?s=08">
          <img
            src={`${Basename}images/twitter.png`}
            className="logobar__social--img"
            alt=""
          />
        </a>

        <img
          src={`${Basename}images/telegram.png`}
          className="logobar__social--img"
          alt=""
        />

        <a href="https://www.instagram.com/invites/contact/?i=9yoge4dvw2zk&utm_content=1zoa7s4">
          <img
            src={`${Basename}images/instagram.png`}
            className="logobar__social--img"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default LogoBar;
