import React from 'react';
import './styles.css';

type SelectorProps = {
  month: number;
  year: number;
  prevMonth: () => void;
  nextMonth: () => void;
};

const Selector: React.FC<SelectorProps> = ({ month, year, prevMonth, nextMonth }) => {
  const months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];

  return (
    <div className="selector-container">
      <div className="prev" onClick={() => prevMonth()}>&#8249;</div>
      <div className="year-month">{months[month] + ' ' + year}</div>
      <div className="next" onClick={() => nextMonth()}>&#8250;</div>
    </div>
  );
};

export default Selector;
