import React from "react";
import "./CareersForm.css";

const CareersForm = () => {
  return (
    <div className="careersform__container">
      <span className="careersform__heading">
        Contact Us for Online Classes
      </span>

      <span className="careersform__heading--text">
        Just fill in this information, and one of our support staff will contact
        you.
      </span>

      <form>
        <div className="careersform__field">
          <label className="careersform__label">Name:</label>
          <input className="careersform__input" type="text" />
        </div>
        <div className="careersform__field">
          <label className="careersform__label">Contact No:</label>
          <input className="careersform__input" type="text" />
        </div>
        <div className="careersform__field">
          <label className="careersform__label">Email Id:</label>
          <input className="careersform__input" type="text" />
        </div>
        <div className="careersform__field">
          <label className="careersform__label">Course:</label>
          <input className="careersform__input" type="text" />
        </div>
        <div className="careersform__field">
          <label className="careersform__label">Message:</label>
          <textarea className="careersform__textarea" cols={30} rows={5} />
        </div>

        <button className="careersform__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareersForm;
