import React from "react";
import "./GlobalSearch.css";

const GlobalSearch = () => {
  return (
    <div className="globalsearch__container">
      <span className="globalsearch__heading">What's On Your Mind?</span>
      <div className="globalsearch__input--container" >
        <input
          className="globalsearch__input"
          type="text"
          placeholder="Search..."
        />
        <button className="globalsearch__btn">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};

export default GlobalSearch;
