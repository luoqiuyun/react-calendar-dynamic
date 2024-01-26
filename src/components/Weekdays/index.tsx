import React, { useState, useEffect} from 'react';
import './styles.css';

const Weekdays: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;
  const windowResize = () => setWidth(window.innerWidth);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  return (
    <div className="weekday-container">
      {daysOfWeek.map((weekday, i) => 
        <div key={`weekday-${i}`} className="week-day">
          {!isMobile ? weekday : weekday.substr(0, 2)}
        </div>
      )}
    </div>
  );
};

export default Weekdays;
