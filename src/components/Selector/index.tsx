import React from 'react';
import './styles.css';
import { DefaultDate } from "components/types";

type SelectorProps = {
  calendar: DefaultDate;
  prevMonth: () => void;
  nextMonth: () => void;
};

const Selector: React.FC<SelectorProps> = ({
  calendar,
  prevMonth,
  nextMonth
}) => {
  
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
      <div className="year-month">{months[calendar.month] + ' ' + calendar.year}</div>
      <div className="next" onClick={() => nextMonth()}>&#8250;</div>
    </div>
  );
};

export default Selector;
