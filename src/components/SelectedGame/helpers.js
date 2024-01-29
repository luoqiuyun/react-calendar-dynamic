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

function removeTags(str) {
    if ((str === null) || (str === ''))
        return '';
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in string.
    // Replacing the identified HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}

export { nthNumber, getMonthNames, removeTags };
