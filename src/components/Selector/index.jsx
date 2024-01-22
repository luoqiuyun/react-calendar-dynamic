import './styles.css';

const Selector = (props) => {
  const {
    month,
    year,
    prevMonth,
    nextMonth
  } = props;

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
    "November"
  ];

  return (
    <div class="selector-container">
      <div class="prev" onClick={() => prevMonth()}>&#8249;</div>
      <div class="year-month">{months[month] + ' ' + year}</div>
      <div class="next" onClick={() => nextMonth()}>&#8250;</div>
    </div>
  );
};

export default Selector;
