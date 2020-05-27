import React from "react";
import { useHistory } from 'react-router-dom';
import InfoBar from "../../../infoBar/InfoBar";
import LogoBar from "../../../logoBar/LogoBar";
import NavBar from "../../../navbar/Navbar";
import SubjectTable from "../../../subjectTable/SubjectTable";
import FooterBlock from "../../../footerBlock/FooterBlock";
import Footer from "../../../footer/Footer";



const CCSU_BBA = () => {

  const History = useHistory();

  const subjects1 = [
    {
      name: "Business Organization ",
      code: "101",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Mathematics",
      code: "102",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Principles of Economics",
      code: "103",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Book Keeping & Basic Accounting",
      code: "104",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Laws",
      code: "105",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Fundamentals of Management",
      code: "106",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Ethics",
      code: "107",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  
  const subjects2 = [
    {
      name: "Organizational Behavior",
      code: "201",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Communication",
      code: "202",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Indian Economy",
      code: "203",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Statistics",
      code: "204",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Business Environment",
      code: "205",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Principles of Accounting",
      code: "206",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  
  const subjects3 = [
    {
      name: "Advertising Management",
      code: "301",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Indian Banking System",
      code: "302",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Human Resource Management",
      code: "303",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Marketing Management",
      code: "304",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Company Accounts",
      code: "305",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Company Law",
      code: "306",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  
  const subjects4 = [
    {
      name: "Consumer Behavior",
      code: "401",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Financial Management ",
      code: "402",
      addText: "(Updated)",
      onClick: () => History.push('/ccsu/bba/fm')
    },
    {
      name: "Production Management",
      code: "403",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Sales Management",
      code: "404",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Research Methodology",
      code: "405",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Operation Research",
      code: "406",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  
  const subjects5 = [
    {
      name: "Entrepreneurship & Small Business Management",
      code: "501",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Managerial Economics",
      code: "502",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Cost And Management Accounting",
      code: "503",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Income Tax Law And Accounts",
      code: "504",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Industrial Law",
      code: "505",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Computer Fundamentals",
      code: "506",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  
  const subjects6 = [
    {
      name: "Management Information System",
      code: "601",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Strategic Management & Business Policy",
      code: "602",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Goods & Services Tax",
      code: "603",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "International Trade",
      code: "604",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Auditing",
      code: "605",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    },
    {
      name: "Fundamental of E-Commerce",
      code: "606",
      addText: "(Updated)",
      onClick: () => console.log("hello")
    }
  ];
  

  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          Chaudhary Charan Singh University (BBA) Notes
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

export default CCSU_BBA;
