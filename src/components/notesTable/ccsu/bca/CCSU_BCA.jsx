import React from "react";
import InfoBar from "../../../infoBar/InfoBar";
import LogoBar from "../../../logoBar/LogoBar";
import NavBar from "../../../navbar/Navbar";
import SubjectTable from "../../../subjectTable/SubjectTable";
import FooterBlock from "../../../footerBlock/FooterBlock";
import Footer from "../../../footer/Footer";

const subjects1 = [
  {
    name: "Computer Fundamental & Office Automation",
    code: "BCA-S101T",
    onClick: () => console.log("hello")
  },
  {
    name: "Programming Principle & Algorithm",
    code: "BCA-S102T",
    onClick: () => console.log("hello")
  },
  {
    name: "Principle of Management",
    code: "BCA-S103",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Communication",
    code: "BCA-S104",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics-I",
    code: "BCA-S105",
    onClick: () => console.log("hello")
  },
];


const subjects2 = [
  {
    name: "C Programming",
    code: "BCA-S106T",
    onClick: () => console.log("hello")
  },
  {
    name: "Digital Electronics & Computer Organization",
    code: "BCA-S107",
    onClick: () => console.log("hello")
  },
  {
    name: "Organization Behavior",
    code: "BCA-S108",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting & Management",
    code: "BCA-S109",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics II",
    code: "BCA-S110",
    onClick: () => console.log("hello")
  },
];


const subjects3 = [
  {
    name: "Object Oriented Programming Using C++",
    code: "BCA-S201T",
    onClick: () => console.log("hello")
  },
  {
    name: "Data Structure Using C & C++",
    code: "BCA-S202T",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Architecture & Assembly Language",
    code: "BCA-S203",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Economics",
    code: "BCA-S204",
    onClick: () => console.log("hello")
  },
  {
    name: "Elements of Statistics",
    code: "BCA-S205",
    onClick: () => console.log("hello")
  },
];


const subjects4 = [
  {
    name: "Computer Graphics & Multimedia Application",
    code: "BCA-S206T",
    onClick: () => console.log("hello")
  },
  {
    name: "Operating System",
    code: "BCA-S207",
    onClick: () => console.log("hello")
  },
  {
    name: "Software Engineering",
    code: "BCA-S208",
    onClick: () => console.log("hello")
  },
  {
    name: "Optimization Techniques",
    code: "BCA-S209",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics-III",
    code: "BCA-S210",
    onClick: () => console.log("hello")
  },
];


const subjects5 = [
  {
    name: "Introduction to DBMS",
    code: "BCA-S301T",
    onClick: () => console.log("hello")
  },
  {
    name: "Java Programming and Dynamic Webpage Design",
    code: "BCA-S303",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Network",
    code: "BCA-S303",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Network Security",
    code: "BCA-S307",
    onClick: () => console.log("hello")
  },
];

const subjects6 = [
  {
    name: "Computer Network Security",
    code: "BCA-S307",
    onClick: () => console.log("hello")
  },
  {
    name: "Information System: Analysis Design & Implementation",
    code: "BCA-S307",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Commerce",
    code: "BCA-S309",
    onClick: () => console.log("hello")
  },
  {
    name: "Knowledge Management",
    code: "BCA-S310",
    onClick: () => console.log("hello")
  },
];


const CCSU_BCA = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          Chaudhary Charan Singh University (BCA) Notes
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

export default CCSU_BCA;
