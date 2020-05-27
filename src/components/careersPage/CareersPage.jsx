import React from "react";
import InfoBar from "../infoBar/InfoBar";
import LogoBar from "../logoBar/LogoBar";
import NavBar from "../navbar/Navbar";
import FooterBlock from "../footerBlock/FooterBlock";
import Footer from "../footer/Footer";
import CareersForm from "../careersForm/CareersForm";

const CareersPage = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <CareersForm />
      <FooterBlock style={{width: '100%'}} />
      <Footer />
    </React.Fragment>
  );
};

export default CareersPage;
