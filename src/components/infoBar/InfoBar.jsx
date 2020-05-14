import React from "react";
import "./InfoBar.css";

const InfoBar = () => {
  return (
    <div className="infobar__container">
      <div className="infobar__mail" >
        <i className="far fa-envelope infobar__icon--mail " />
        <span>info@ramjank.org.com</span>
      </div>
    </div>
  );
};

export default InfoBar;
