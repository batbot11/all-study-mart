import React from "react";
import InfoBar from '../../../infoBar/InfoBar'
import LogoBar from '../../../logoBar/LogoBar';
import NavBar from '../../../navbar/Navbar';
import FooterBlock from '../../../footerBlock/FooterBlock';
import Footer from '../../../footer/Footer';
import SubjectTable from '../../../subjectTable/SubjectTable';
import './GGSIPUBBA.css';

const subjects1 = [
  {
    name: "Management Process & Organizational Behavior",
    code: "BBA101",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Mathematics",
    code: "BBA103",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting & Analysis",
    code: "BBA105",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Economics",
    code: "BBA107",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Applications",
    code: "BBA109",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];


const subjects2 = [
  {
    name: "Cost Accounting",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Quantitative Technique",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Commerce",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Communication",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Environment",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];

const subjects3 = [
  {
    name: "Business Laws",
    code: "BBA201",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Marketing Management",
    code: "BBA203",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Ethics and CSR",
    code: "BBA205",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Management Accounting",
    code: "BBA207",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "BBA209 Indian Economy (UPDATED)",
    code: "BBA209",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];


const subjects4 = [
  {
    name: "Financial Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Human Resource Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Research Methodology",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Information Systems Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Research Methodology",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Information Systems Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];


const subjects5 = [
  {
    name: "Income Tax Laws And Practice",
    code: "BBA301",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Productions And Operations Management",
    code: "BBA303",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Services Marketing",
    code: "BBA 305",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Entrepreneurship Development",
    code: "BBA307",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Goods & Services Tax Old+New Syllabus",
    code: "BBA309",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];


const subjects6 = [
  {
    name: "Project Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Digital Marketing",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "International Business Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Policy & Strategy",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Sales & Distribution Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
];



const IPU_BBA = () => {
  return (
    <React.Fragment>
    <InfoBar />
    <LogoBar />
    <NavBar />
    <div className="ipubcom__container">
      <div className="ipubcom__heading">
        Guru Gobind Singh Indraprastha University (BCA) Notes
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

export default IPU_BBA;
