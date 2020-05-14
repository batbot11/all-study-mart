import React, { useState } from "react";
import Courses from '../courses/Courses';
import "./Universities.css";

const Universities = () => {
  const [uni, setUni] = useState("");

  return (
    <table className="universities__table">
      <tr>
        <td className="universities__table--td">
          Guru Gobind Singh Indraprastha University (GGSIPU)
        </td>
        <td
          onClick={() => setUni("ggsipu")}
          className="universities__table--td universities__td--view"
        >
          Select Course
        </td>
      </tr>
      {uni === "ggsipu" && <Courses uni="ggsipu" disabled="b.tech,m.tech," />}
      <tr>
        <td className="universities__table--td">
          Chaudhary Charan Singh University (CCSU)
        </td>
        <td
          onClick={() => setUni("ccsu")}
          className="universities__table--td universities__td--view"
        >
          Select Course
        </td>
      </tr>
      {uni === "ccsu" && <Courses uni="ccsu" disabled="b.tech,m.tech,mba," />}
      <tr>
        <td className="universities__table--td">University of Delhi (DU)</td>
        <td
          onClick={() => setUni("du")}
          className="universities__table--td universities__td--view"
        >
          Select Course
        </td>
      </tr>
      {uni === "du" && <Courses uni="du" disabled="bba,bca,b.tech,mba,m.tech," />}
    </table>
  );
};

export default Universities;
