import React from "react";
import InfoBar from '../../components/infoBar/InfoBar';
import LogoBar from '../../components/logoBar/LogoBar';
import Navbar from '../../components/navbar/Navbar';
import Heading from '../../components/heading/Heading';
import Universities from '../../components/notesTable/universities/Universities';
import GlobalSearch from '../../components/globalSearch/GlobalSearch';
import FooterBlock from '../../components/footerBlock/FooterBlock';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <InfoBar />
      <LogoBar />
      <Navbar />
      {/* <Heading /> */}
      <Universities />
      <GlobalSearch />
      <FooterBlock />
      <Footer />
    </div>
  );
};

export default HomePage;
