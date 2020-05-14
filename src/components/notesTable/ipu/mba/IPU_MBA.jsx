import React from "react";
import InfoBar from "../../../infoBar/InfoBar";
import LogoBar from "../../../logoBar/LogoBar";
import NavBar from "../../../navbar/Navbar";
import SubjectTable from "../../../subjectTable/SubjectTable";
import FooterBlock from "../../../footerBlock/FooterBlock";
import Footer from "../../../footer/Footer";

const subjects1 = [
  {
    name: "Management Process & Organizational Behavior",
    onClick: () => console.log("hello")
  },
  { name: "Decision Sciences", onClick: () => console.log("hello") },
  { name: "Managerial Economics", onClick: () => console.log("hello") },
  { name: "Accounting for Management", onClick: () => console.log("hello") },
  {
    name: "Information Technology Management",
    onClick: () => console.log("hello")
  },
  { name: "Business Communication", onClick: () => console.log("hello") },
  { name: "Legal Aspects of Business", onClick: () => console.log("hello") }
];

const subjects2 = [
  {
    name: "Marketing Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Operation Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Human Resource Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "E-Business",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Research",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Management of Technology Innovation and Change",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const subjects3 = [
  {
    name: "Management of International Business",
    onClick: () => console.log("hello")
  },
  {
    name: "Operation ManagementInformation Systems Management",
    onClick: () => console.log("hello")
  },
  { name: "	Entrepreneurship Development", onClick: () => console.log("hello") }
];

const marketing3 = [
  { name: "Consumer Behavior", onClick: () => console.log("hello") },
  {
    name: "Sales & Distribution Management",
    onClick: () => console.log("hello")
  },
  { name: "International Marketing", onClick: () => console.log("hello") },
  { name: "Services Marketing", onClick: () => console.log("hello") },
  {
    name: "Customer Relationship Management",
    onClick: () => console.log("hello")
  }
];

const hr3 = [
  {
    name: "Industrial Relations and Labor laws",
    onClick: () => console.log("hello")
  },
  { name: "Training & Development", onClick: () => console.log("hello") },
  { name: "Performance Management", onClick: () => console.log("hello") },
  { name: "Compensation Management", onClick: () => console.log("hello") }
];

const finance3 = [
  {
    name: "International Financial Management",
    onClick: () => console.log("hello")
  },
  {
    name: "Security Analysis and Investment Management",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Markets and Institutions",
    onClick: () => console.log("hello")
  },
  { name: "Corporate Tax Planning", onClick: () => console.log("hello") },
  { name: "Project Management", onClick: () => console.log("hello") }
];

const it3 = [
  { name: "Enterprise Systems", onClick: () => console.log("hello") },
  { name: "Database Management Systems", onClick: () => console.log("hello") }
];

const ib3 = [
  {
    name: "International Business Environment",
    onClick: () => console.log("hello")
  },
  { name: "International Economics", onClick: () => console.log("hello") }
];

const subjects4 = [
  {
    name: "Business Intelligence And Applications ",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Strategic Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Corporate Social Responsibility, Human Values and Ethics",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const marketing4 = [
  {
    name: "Retail Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Advertising and Brand Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Business Marketing",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Internet Marketing",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const finance4 = [
  {
    name: "Mergers Acquisitions and Corporate Restructuring",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Behavioral Finance",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Financial Derivatives",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Strategic Financial Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const hr4 = [
  {
    name: "	Organizational Development",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Behavior Testing and Counseling",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Strategic Human Resource Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Team Building",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const ib4 = [
  {
    name: "Global Competitiveness And Strategic Alliance",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  },
  {
    name: "Supply Chain Management For International Business",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const it4 = [
  {
    name: "Software Project Management",
    addText: "(Updated)",
    onClick: () => console.log("hello")
  }
];

const IPU_MBA = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar />
      <NavBar />
      <div className="ipubcom__container">
        <div className="ipubcom__heading">
          Guru Gobind Singh Indraprastha University (MBA) Notes
        </div>
        <SubjectTable heading="Semester 1" subjects={subjects1} />
        <SubjectTable heading="Semester 2" subjects={subjects2} />
        <SubjectTable heading="Semester 3" subjects={subjects3} />
        <SubjectTable
          tableHeading="Marketing"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={marketing3}
        />
        <SubjectTable
          tableHeading="Human Resource"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={hr3}
        />
        <SubjectTable
          tableHeading="Finance"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={finance3}
        />
        <SubjectTable
          tableHeading="Information Technology"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={it3}
        />
        <SubjectTable
          tableHeading="International Business"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={ib3}
        />
        <SubjectTable heading="Semester 4" subjects={subjects4} />
        <SubjectTable
          tableHeading="Marketing"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={marketing4}
        />
        <SubjectTable
          tableHeading="Finance"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={finance4}
        />
        <SubjectTable
          tableHeading="Human Resource"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={hr4}
        />
        <SubjectTable
          tableHeading="International Business"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={ib4}
        />
        <SubjectTable
          tableHeading="Information Technology"
          tableHeadingStyles={{ color: "#338005" }}
          subjects={it4}
        />
      </div>
      <FooterBlock />
      <Footer />
    </React.Fragment>
  );
};

export default IPU_MBA;
