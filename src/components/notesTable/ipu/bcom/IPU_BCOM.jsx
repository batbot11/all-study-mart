import React from "react";
import InfoBar from '../../../infoBar/InfoBar';
import LogoBar from '../../../logoBar/LogoBar';
import NavBar from '../../../navbar/Navbar';
import SubjectTable from '../../../subjectTable/SubjectTable';
import FooterBlock from '../../../footerBlock/FooterBlock';
import Footer from '../../../footer/Footer';
import './IPU_BCOM.css';

const subjects1 = [
  {name: 'Management Process & Organizational Behavior', code: 'BCOM101', onClick: () => console.log('hello')},
  {name: 'Financial Accounting', code: 'BCOM103', onClick: () => console.log('hello')},
  {name: 'Micro Economics', code: 'BCOM105', onClick: () => console.log('hello')},
  {name: 'Business Communication', code: 'BCOM107', onClick: () => console.log('hello')},
  {name: 'Computer Applications', code: 'BCOM109', onClick: () => console.log('hello')},
];

const subjects2 = [
  {name: 'Business Mathematics', code: 'BCOM102', onClick: () => console.log('hello')},
  {name: 'Business Laws', code: 'BCOM104', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Macro Economics', code: 'BCOM106', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Cost Accounting ', code: 'BCOM108', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Business Studies', code: 'BCOM110', addText: "(Updated)", onClick: () => console.log('hello')},
];


const subjects3 = [
  {name: 'Marketing Management', code: 'BCOM201', onClick: () => console.log('hello')},
  {name: 'Management Accounting', code: 'BCOM203', onClick: () => console.log('hello')},
  {name: 'Human Resource Management', code: 'BCOM205', onClick: () => console.log('hello')},
  {name: 'Business Ethics & Corporate Social Responsibility', code: 'BCOM207', onClick: () => console.log('hello')},
  {name: 'Business Statistics', code: 'BCOM209', onClick: () => console.log('hello')},
];

const subjects4 = [
  {name: 'Fundamentals of Financial Management', addText: "(Updated)", code: 'BCOM202', onClick: () => console.log('hello')},
  {name: 'Auditing', code: 'BCOM204', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Corporate Accounting', code: 'BCOM206', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Indian Economy', code: 'BCOM208', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Financial Modeling ', code: 'BCOM210', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Research Methodology', code: 'BCOM214', addText: "(Updated)", onClick: () => console.log('hello')},
];

const subjects5 = [
  {name: 'Income Tax Law and Practice', code: 'BCOM301', onClick: () => console.log('hello')},
  {name: 'Entrepreneurship Development', code: 'BCOM303',onClick: () => console.log('hello')},
  {name: 'Information Systems Management', code: 'BCOM305', onClick: () => console.log('hello')},
  {name: 'Elective Subject', onClick: () => console.log('hello')},
  {name: 'Investment Management', code: 'BCOM311', onClick: () => console.log('hello')},
  {name: 'Financial Markets and Institutions', code: 'BCOM313', onClick: () => console.log('hello')},
  {name: 'Sales and Distribution Management', code: 'BCOM315', onClick: () => console.log('hello')},
  {name: 'Advertising and Brand Management', code: 'BCOM317', onClick: () => console.log('hello')},
  {name: 'Indian Relations and Labour Laws', code: 'BCOM319', onClick: () => console.log('hello')},
];


const subjects6 = [
  {name: 'Project Management', code: 'BCOM302', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Goods & Services Tax', code: 'BCOM304', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'E-Commerce', code: 'BCOM306', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Elective Subject', onClick: () => console.log('hello')},
  {name: 'Services Marketing', code: 'BCOM318', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'International Business Management', code: 'BCOM320', addText: "(Updated)", onClick: () => console.log('hello')},
  {name: 'Compensation Management', code: 'BCOM322', addText: "(Updated)", onClick: () => console.log('hello')},
];

const IPU_BCOM = () => {
  return (
    <React.Fragment>
      <InfoBar />
      <LogoBar/>
      <NavBar/>
    <div className="ipubcom__container" >
      <div className="ipubcom__heading" >Guru Gobind Singh Indraprastha University (B.COM) Notes</div>
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

export default IPU_BCOM;
