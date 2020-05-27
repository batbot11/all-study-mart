import React from "react";
import "./FooterBlock.css";

const FooterBlock = ({ style }) => {
  return (
    <div style={style} className="footerblock__container">
      <ul className="footerblock__list">
        <span className="footerblock__heading">
          <span className="footerblock__heading--icon" />
          Categories
        </span>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon" />
          BBA
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          B.COM
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          MBA
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Technical Course
        </li>
      </ul>

      <ul className="footerblock__list">
        <span className="footerblock__heading">
          <span className="footerblock__heading--icon" />
          Recent Posts
        </span>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Account
        </li>
      </ul>

      <ul className="footerblock__list">
        <span className="footerblock__heading">
          <span className="footerblock__heading--icon" />
          Social Media
        </span>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Facebook
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Twitter
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Linkedin
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          WhatsApp
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Telegram
        </li>
        <li className="footerblock__item">
          <i className="fas fa-chevron-right footerblock__item--icon " />
          Instagram
        </li>
      </ul>
    </div>
  );
};

export default FooterBlock;
