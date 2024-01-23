function nthNumber(dayOfMonth) {
  if (dayOfMonth > 3 && dayOfMonth < 21) return "th";
  switch (dayOfMonth % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

function getMonthNames() {
  return [
    "none",
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
    "December"
  ];
}

export { nthNumber, getMonthNames };
