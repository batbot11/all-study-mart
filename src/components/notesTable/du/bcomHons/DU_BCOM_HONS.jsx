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
    code: "CH 1.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting",
    code: "CH 1.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Micro Economics -1",
    code: "CH 1.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Laws",
    code: "CH 1.4",
    onClick: () => console.log("hello")
  }
];

const subjects2 = [
  {
    name: "Business Statistics",
    code: "CH 2.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Fundamental of Computer",
    code: "CH 2.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Micro Economics - 2",
    code: "CH 2.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Corporate Laws",
    code: "CH 2.4",
    onClick: () => console.log("hello")
  }
];

const subjects3 = [
  {
    name: "Business Mathematics",
    code: "CH 3.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Income-tax Law & Practice",
    code: "CH 3.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Macro Economics",
    code: "CH 3.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Principles of Marketing",
    code: "CH 3.4",
    onClick: () => console.log("hello")
  },
  {
    name: "English",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Philosophy",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Political Science",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },  {
    name: "Business Mathematics",
    code: "CH 3.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Income-tax Law & Practice",
    code: "CH 3.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Macro Economics",
    code: "CH 3.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Principles of Marketing",
    code: "CH 3.4",
    onClick: () => console.log("hello")
  },
  {
    name: "English",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Philosophy",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Political Science",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "History",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Math",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },

  {
    name: "History",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Math",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
];

const subjects4 = [
  {
    name: "Indirect Tax",
    code: "CH 4.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Corporate Accounting",
    code: "CH 4.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Cost Accounting",
    code: "CH 4.3",
    onClick: () => console.log("hello")
  },
  {
    name: "Human Resource Management",
    code: "CH 4.4",
    onClick: () => console.log("hello")
  },
  {
    name: "Indian Economy - Performance & Policies",
    code: "CH 4.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Philosophy",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
  {
    name: "Political Science",
    code: "CH 3.5",
    onClick: () => console.log("hello")
  },
];

const subjects5 = [
  {
    name: "Management Accounting",
    code: "CH 5.1",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Management",
    code: "CH 5.2",
    onClick: () => console.log("hello")
  },
  {
    name: "Auditing",
    code: "CH 5.3",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Commerce",
    code: "CH 5.4",
    onClick: () => console.log("hello")
  },
];

const DU_BCOM_HONS = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          University of Delhi (B.COM HONS) Notes
        </div>
        <SubjectTable heading="Semester 1" subjects={subjects1} />
        <SubjectTable heading="Semester 2" subjects={subjects2} />
        <SubjectTable heading="Semester 3" subjects={subjects3} />
        <SubjectTable heading="Semester 4" subjects={subjects4} />
        <SubjectTable heading="Semester 5" subjects={subjects5} />
      </div>
      <FooterBlock />
      <Footer />
    </React.Fragment>
  );
};

export default DU_BCOM_HONS;
