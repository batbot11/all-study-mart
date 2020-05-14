import React from 'react';
import Basename from '../../../utils/Basename';
import InfoBar from '../../infoBar/InfoBar';
import LogoBar from '../../logoBar/LogoBar';
import NavBar from '../../navbar/Navbar';
import FooterBlock from '../../footerBlock/FooterBlock';
import Footer from '../../footer/Footer';
import UnitsTable from '../../unitsTable/UnitsTable';

const units = [
    {
      name: "Nature and Scope of Financial Management",
      href: `${Basename}pdfs/bba/Nature & Scope of Financial Management.pdf`,
    },
    {
      name: "Planning for Sources of Finance",
      href: `${Basename}pdfs/bba/Planning for Sources of Finance.pdf`,
    },
    {
      name: "Unit 3",
      href: ``,
      disabled: true,
    },
    {
      name: "Unit 4",
      href: ``,
      disabled: true,
    },
  ];


const IPU_BBA_FM = () => {
  return (
    <React.Fragment>
    <InfoBar />
    <LogoBar />
    <NavBar />
    <div className="ipubcom__container">
      <div className="ipubcom__heading">
        Guru Gobind Singh Indraprastha University (BBA) Notes
      </div>
      <UnitsTable tableHeading="Name of Unit" heading="Financial Management" subjects={units} />
    </div>
    <FooterBlock />
    <Footer />
  </React.Fragment>

  );
};

export default IPU_BBA_FM;