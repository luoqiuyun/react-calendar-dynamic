import React from 'react';
import './styles.css';

const Weekdays: React.FC = () => {
  
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  return (
    <div className="weekday-container">
      {daysOfWeek.map((weekday, i) => 
        <div key={`weekday-${i}`} className="week-day">
          {weekday.substr(0, 2)}
        </div>
      )}
    </div>
  );
};

export default Weekdays;
