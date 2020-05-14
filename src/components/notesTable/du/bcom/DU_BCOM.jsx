import React from "react";
import InfoBar from "../../../infoBar/InfoBar";
import LogoBar from "../../../logoBar/LogoBar";
import NavBar from "../../../navbar/Navbar";
import SubjectTable from "../../../subjectTable/SubjectTable";
import FooterBlock from "../../../footerBlock/FooterBlock";
import Footer from "../../../footer/Footer";

const subjects1 = [
  {
    name: "Business Organization & Management",
    code: "CP 1.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting",
    code: "CP 1.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Principles of Micro Economics",
    code: "CP 1.3",
    onClick: () => console.log("hello")
  }
];

const subjects2 = [
  {
    name: "Business & Industrial Laws",
    code: "CP 2.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Corporate Accounting",
    code: "CP 2.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Macro Economics",
    code: "CP 2.3",
    onClick: () => console.log("hello")
  }
];

const subjects3 = [
  {
    name: "Business Mathematics & Statistics",
    code: "CP 3.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Company & Compensation Laws",
    code: "CP 3.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Economics Development & Policy in India",
    code: "CP 3.3",
    onClick: () => console.log("hello")
  }
];

const subjects4 = [
  {
    name: "Cost Accounting",
    code: "CP 4.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Income Tax & Auditing",
    code: "CP 4.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Economic Regulation of Domestic & Foreign Exchange Markets",
    code: "CP 4.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Communication or Vyapaar Sanchar",
    code: "CP 4.4",
    onClick: () => console.log("hello")
  },
];

const subjects5 = [
  {
    name: "Financial Management",
    code: "CP 5.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Applications in Business",
    code: "CP 5.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Corporate Governance, Business Ethics & CSR",
    code: "CP 5.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Industrial Economics",
    code: "CP 5.4",
    onClick: () => console.log("hello")
  },
];

const subjects6 = [
  {
    name: "Marketing Management",
    code: "CP 6.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Environment",
    code: "CP 6.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Human Resource Management",
    code: "CP 6.3",
    onClick: () => console.log("hello")
  },
  {
    name: "International Trade",
    code: "CP 6.4",
    onClick: () => console.log("hello")
  },
];


const DU_BCOM = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          University of Delhi (B.COM) Notes
        </div>
        <SubjectTable heading="Semester 1" subjects={subjects1} />
        <SubjectTable heading="Semester 2" subjects={subjects2} />
        <SubjectTable heading="Semester 3" subjects={subjects3} />
        <SubjectTable heading="Semester 4" subjects={subjects4} />
        <SubjectTable heading="Semester 5" subjects={subjects5} />
        <SubjectTable heading="Semester 6" subjects={subjects6} />
      </div>
      <FooterBlock />
      <Footer />
    </React.Fragment>
  );
};

export default DU_BCOM;
