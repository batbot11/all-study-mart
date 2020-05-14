import React from 'react';
import './Management.css';

const Management = () => {
  return (
    <table className="management__table" >
      <tr>
        <td className="management__table--td" >BBA Notes (GGSIPU / CCSU)</td>
        <td className="management__table--td management__td--view" >VIEW</td>
      </tr>
      <tr>
        <td className="management__table--td" >B.COM Notes (GGSIPU / CCSU)</td>
        <td className="management__table--td management__td--view" >VIEW</td>
      </tr>
      <tr>
        <td className="management__table--td" >MBA Notes (GGSIPU / CCSU)</td>
        <td className="management__table--td management__td--view" >VIEW</td>
      </tr>
    </table>
  );
};

export default Management;