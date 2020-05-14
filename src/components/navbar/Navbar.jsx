import React from "react";
import { useHistory } from 'react-router-dom';
import NavbarOption from "../navbarOption/NavbarOption";
import "./Navbar.css";

const Navbar = () => {

  const History = useHistory();

  return (
    <div className="navbar__container">
      <NavbarOption onClick={() => History.push("/")} text="Home" />
      <NavbarOption
        text="About Us"
        doesExpand
        options={[
          { name: "Mission", onClick: () => console.log("Mission clicked!") },
          { name: "Vision", onClick: () => console.log("Vision clicked!") }
        ]}
      />
      <NavbarOption text="Technology" />
      <NavbarOption
        text="UGCNET"
        doesExpand
        options={[
          { name: "Paper I", onClick: () => console.log("paper 1 clicked") },
          { name: "Paper II", onClick: () => console.log("paper 2 clicked") }
        ]}
      />
      <NavbarOption text="Contact Us" />
    </div>
  );
};

export default Navbar;
