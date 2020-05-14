import React from 'react';
import { useHistory } from 'react-router-dom';
import './Courses.css';

const Courses = ({ uni, disabled }) => {

  const History = useHistory();

  return (
      <>
      <tr>
        <td className="universities__table--td" >BBA</td>
        <td onClick={() => History.push(`${uni}/bba`)} className={`universities__table--td universities__td--view ${disabled.includes('bba,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      <tr>
        <td className="universities__table--td" >B.COM</td>
        <td onClick={() => History.push(`${uni}/bcom`)} className={`universities__table--td universities__td--view ${disabled.includes('b.com,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      <tr>
        <td className="universities__table--td" >BCA</td>
        <td onClick={() => History.push(`${uni}/bca`)} className={`universities__table--td universities__td--view ${disabled.includes('bca,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      <tr>
        <td className="universities__table--td" >B.TECH</td>
        <td onClick={() => History.push(`${uni}/btech`)} className={`universities__table--td universities__td--view ${disabled.includes('b.tech,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      <tr>
        <td className="universities__table--td" >MBA</td>
        <td onClick={() => History.push(`${uni}/mba`)} className={`universities__table--td universities__td--view ${disabled.includes('mba,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      <tr>
        <td className="universities__table--td" >M.TECH</td>
        <td onClick={() => History.push(`${uni}/mtech`)} className={`universities__table--td universities__td--view ${disabled.includes('m.tech,') ? 'disabled' : ''}`} >VIEW</td>
      </tr>
      </>
  );        
};

export default Courses;