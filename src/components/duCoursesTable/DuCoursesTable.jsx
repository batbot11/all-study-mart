import React from "react";
import { useHistory } from "react-router-dom";

const DuCoursesTable = () => {
  const History = useHistory();

  return (
    <>
      <tr>
        <td className="universities__table--td">B.COM</td>
        <td
          onClick={() => History.push("du/bcom")}
          className="universities__table--td universities__td--view"
        >
          VIEW
        </td>
      </tr>
      <tr>
        <td className="universities__table--td">B.COM (HONS)</td>
        <td
          onClick={() => History.push("du/bcom-hons")}
          className="universities__table--td universities__td--view"
        >
          VIEW
        </td>
      </tr>
    </>
  );
};

export default DuCoursesTable;
