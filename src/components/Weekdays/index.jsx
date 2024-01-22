import './styles.css';

const Weekdays = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  return (
    <div class="weekday-container">
      {daysOfWeek.map((weekday, i) => 
        <div key={"weekday-" + i} class="week-day">
          {weekday}
        </div>
      )}
    </div>
  );
};

export default Weekdays;
