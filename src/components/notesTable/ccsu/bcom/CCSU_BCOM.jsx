import React from "react";
import InfoBar from "../../../infoBar/InfoBar";
import LogoBar from "../../../logoBar/LogoBar";
import NavBar from "../../../navbar/Navbar";
import SubjectTable from "../../../subjectTable/SubjectTable";
import FooterBlock from "../../../footerBlock/FooterBlock";
import Footer from "../../../footer/Footer";

const subjects1 = [
  {
    name: "Business Communication",
    code: "C-101",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Statistics",
    code: "C-102",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting",
    code: "C-103",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Regulatory Framework ",
    code: "C-104",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Economics",
    code: "C-105",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Environment",
    code: "C-106",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const subjects2 = [
  {
    name: "Company Law",
    code: "C-201",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Cost Accounting",
    code: "C-202",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Principles of Business Management",
    code: "C-203",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Income Tax",
    code: "C-204",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Fundamentals of Entrepreneurship",
    code: "C-205",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Public Finance",
    code: "C-206",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const subjects3 = [
  {
    name: "Corporate Accounting",
    code: "C-301",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Auditing",
    code: "C-302",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Principles of Marketing",
    code: "C-303",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Economic Laws",
    code: "C-304",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Commerce",
    code: "C-305",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Management Accounting",
    code: "C-306",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];


const CCSU_BCOM = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          Chaudhary Charan Singh University (B.COM) Notes
        </div>
        <SubjectTable heading="Year 1" subjects={subjects1} />
        <SubjectTable heading="Year 2" subjects={subjects2} />
        <SubjectTable heading="Year 3" subjects={subjects3} />
      </div>
      <FooterBlock />
      <Footer />
    </React.Fragment>
  );
};

export default CCSU_BCOM;
