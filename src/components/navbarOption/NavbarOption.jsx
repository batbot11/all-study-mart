import React from "react";
import "./NavbarOption.css";

const NavbarOption = ({ text, doesExpand, options, onClick }) => {
  // const [isExpand, setIsExpand] = useState(false);

  return (
    <div onClick={() => onClick()} className="navbaroption__container">
      {text}{" "}
      {doesExpand && (
        <i className="fas fa-angle-down navbaroption__icon--dropdown" />
      )}
      {doesExpand && (
        <div className="navbaroption__expand--container">
          {options.map(option => (
            <div
              onClick={() => option.onClick()}
              className="navbar__expand--option"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarOption;
