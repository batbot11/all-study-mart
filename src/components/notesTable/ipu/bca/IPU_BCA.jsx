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
    onClick: () => console.log("hello")
  },
  {
    name: "Programming Principle & Algorithm",
    onClick: () => console.log("hello")
  },
  {
    name: "Principle of Management",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Communication",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics-I",
    onClick: () => console.log("hello")
  },
];


const subjects2 = [
  {
    name: "C Programming",
    onClick: () => console.log("hello")
  },
  {
    name: "Digital Electronics & Computer Organization",
    onClick: () => console.log("hello")
  },
  {
    name: "Organization Behavior",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Accounting & Management",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics II",
    onClick: () => console.log("hello")
  },
];


const subjects3 = [
  {
    name: "Object Oriented Programming Using C++",
    onClick: () => console.log("hello")
  },
  {
    name: "Data Structure Using C & C++",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Architecture & Assembly Language",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Economics",
    onClick: () => console.log("hello")
  },
  {
    name: "Elements of Statistics",
    onClick: () => console.log("hello")
  },
];


const subjects4 = [
  {
    name: "Computer Graphics & Multimedia Application",
    onClick: () => console.log("hello")
  },
  {
    name: "Operating System",
    onClick: () => console.log("hello")
  },
  {
    name: "Software Engineering",
    onClick: () => console.log("hello")
  },
  {
    name: "Optimization Techniques",
    onClick: () => console.log("hello")
  },
  {
    name: "Mathematics-III",
    onClick: () => console.log("hello")
  },
];


const subjects5 = [
  {
    name: "Introduction to DBMS",
    onClick: () => console.log("hello")
  },
  {
    name: "Java Programming and Dynamic Webpage Design",
    onClick: () => console.log("hello")
  },
  {
    name: "Computer Network",
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
    onClick: () => console.log("hello")
  },
  {
    name: "Information System: Analysis Design & Implementation",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Commerce",
    onClick: () => console.log("hello")
  },
  {
    name: "Knowledge Management",
    onClick: () => console.log("hello")
  },
];


const IPU_BCA = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          Guru Gobind Singh University (BCA) Notes
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

export default IPU_BCA;
