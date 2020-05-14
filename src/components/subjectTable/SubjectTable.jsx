import React from "react";
import "./SubjectTable.css";

const SubjectTable = ({
  heading,
  subjects,
  tableHeading,
  tableHeadingStyles
}) => {
  return (
    <div>
      {heading && <div className="subjecttable__heading">{heading}</div>}{" "}
      <table className="subjecttable__table">
        <thead>
          <tr>
            <td style={Object.assign({color: '#FA443B'}, tableHeadingStyles)} className="subjecttable__subject">
              {tableHeading || "Subjects"}
            </td>
            <td className="subjecttable__view"></td>
          </tr>
        </thead>

        <tbody>
          {subjects.map(subject => {
            return (
              <tr>
                <td className="subjecttable__subject">
                  <span className="subjecttable__code">{subject.code}</span>
                  {subject.name}
                  {subject.addText && (
                    <span className="subjecttable__addtext">
                      {subject.addText}
                    </span>
                  )}
                </td>
                <td
                  className="subjecttable__view"
                  onClick={() => subject.onClick()}
                >
                  VIEW
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;
