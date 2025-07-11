function isValidYear(year) {
  const parsedYear = parseInt(year, 10);
  const currentYear = new Date().getFullYear();
  const parsedCurrent = parseInt(currentYear, 10);
  return !isNaN(parsedYear) && parsedYear >= (parsedCurrent - 5) && parsedYear <= (parsedCurrent + 5);
}

function isValidMonth(month) {
  const parsedMonth = parseInt(month, 10);
  return !isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12;
}

const isValidPathName = (pathname) => {
  if(pathname.length < 7) return false;
  const params = pathname.split('/');
  if (params.length !== 3) return false;
  const year = parseInt(params[1]);
  const month = parseInt(params[2]);
  if (!isValidYear(year)) return false;
  if (!isValidMonth(month)) return false;

  return true;
};

const isValidLocation = (location) => {
  const { pathname } = location;
  return isValidPathName(pathname);
};

function getImageList() {
  const images = require.context('assets/img', true);
  const imageList = images.keys().map(image => images(image));

  return imageList;
}

const daysInMonth = (year, month) => {
  const monthSanitized = month !== 12 ? month : 0;
  return new Date(year, monthSanitized, 0).getDate();
};

const firstDayInMonth = (year, month) => {
  const monthSanitized = month !== 0 ? month : 12;
  const firstDay = new Date(`${year}-${monthSanitized}-1`).getDay();
  return firstDay;
};

const getYearMonth = (location) => {
  const { pathname } = location;
  const params = pathname.split('/');
  let year = parseInt(params[1]);
  let month = parseInt(params[2]);
  return { year, month };
};

const getDefaultDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);

  return {
    days: parseInt(days),
    firstDay: parseInt(firstDay),
    month: parseInt(month),
    year: parseInt(year)
  };
};

const getPathDate = (location) => {
  let { year, month } = getYearMonth(location);
  if(!year || !month) return getDefaultDate();

  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);
  const parsedMonth = parseInt(month);

  return {
    days: parseInt(days),
    firstDay: parseInt(firstDay),
    month: parsedMonth !== 12 ? parsedMonth : 0,
    year: parseInt(year)
  };
};

function selectedDate(location, prevLocation) {
  const { pathname } = location;
  const { pathname: prevPathname } = prevLocation;

  const isValidPath = isValidPathName(pathname);
  const isValidPrevPath = isValidPathName(prevPathname);

  if (!isValidPath && !isValidPrevPath) {
    window.history.back();
    return getDefaultDate();
  }

  return getPathDate(!isValidPath ? prevLocation : location);
};

const next = (calendar) => {
  let year = calendar.year;
  let month = calendar.month;

  if (month === 0) {
    year += 1;
    month += 1;
  } else if(month === 11) {
    month = 0;
  } else {
    month += 1;
  }
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);

  return { days, firstDay, month, year };
}

const prev = (calendar) => {
  let year = calendar.year;
  let month = calendar.month;

  if (month === 1) {
    year -= 1;
    month = 0;
  } else if (month === 0) {
    month = 11;
  } else {
    month -= 1;
  }
  const days = daysInMonth(year, month);
  const firstDay = firstDayInMonth(year, month);

  return { days, firstDay, month, year };
}

const getPrecedentMonthDays = (location) => {
  let { year, month } = getPathDate(location);

  if (month === 1) {
    month = 0;
    year -= 1;
  } else {
    month -= 1;
  }

  return daysInMonth(year, month);
};

const getCalendar = (calendar, events, location) => {
  const daysInPrevMonth = getPrecedentMonthDays(location);
  const calendarData = [];
  let oneWeek = [];

  for(let i = 0; i < calendar.firstDay; i++) {
    const dayofMonth = {"dom": daysInPrevMonth - i, prevMonth: true};
    oneWeek.unshift(dayofMonth);
  }

  for(let i = 1; i <= calendar.days; i++) {
    const addEvent = Math.random() > 0.7;
    const eventIdx = Math.floor(Math.random() * events.length);

    if (!!addEvent) {
      const event = {...events[eventIdx], "dom": i, prevMonth: false};
      oneWeek.push(event);
    } else {
      const dayofMonth = {"dom": i, prevMonth: false};
      oneWeek.push(dayofMonth);
    }

    const total = i + calendar.firstDay;
    if (!(total % 7)) {
      calendarData.push(oneWeek);
      oneWeek = [];
    }
  }
  if (!!oneWeek.length) calendarData.push(oneWeek);
  return calendarData;
};

export {
  prev,
  next,
  isValidYear,
  isValidMonth,
  isValidLocation,
  getDefaultDate,
  getPathDate,
  firstDayInMonth,
  getCalendar,
  getImageList,
  selectedDate,
  daysInMonth
};
