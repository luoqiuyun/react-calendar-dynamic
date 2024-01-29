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

function getImageList() {
  const images = require.context('assets/img', true);
  const imageList = images.keys().map(image => images(image));

  return imageList;
}

const daysInMonth = (year, month) =>
  new Date(year, month, 0).getDate();

const firstDayInMonth = (year, month) => {
  const firstDay = new Date(`${year}-${month !== 0 ? month:12}-1`).getDay();
  return firstDay;
};

const getDefaultDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const days = daysInMonth(year, month);;
  const firstDay = firstDayInMonth(year, month);

  return {
    year: parseInt(year),
    month: parseInt(month),
    firstDay: parseInt(firstDay),
    daysInMonth: parseInt(days)
  };
};

const getPathDate = (year, month) => {
  const days = daysInMonth(year, month);;
  const firstDay = firstDayInMonth(year, month);

  return {
    year: parseInt(year),
    month: parseInt(month),
    firstDay: parseInt(firstDay),
    daysInMonth: parseInt(days)
  };
};

function getSelectedYearMonth(location) {
  const { pathname } = location;
  if(pathname.length < 7) window.history.back();
  const params = pathname.split('/');
  if (params.length !== 3) window.history.back();

  const year = parseInt(params[1]);
  const month = parseInt(params[2]);

  if (!isValidYear(year)) window.history.back();
  if (!isValidMonth(month)) window.history.back();

  const defaultDate = getDefaultDate();
  return {
    year: isValidYear(year) ? year : defaultDate.year,
    month: isValidMonth(month) ? month : defaultDate.month
  };
};

const getPrevMonthDays = () => {
  const { pathname } = window.location;
  const params = pathname.split('/');
  
  let year = parseInt(params[1]);
  let month = parseInt(params[2]);

  if (month === 1) {
    month = 0;
    year -= 1;
  } else {
    month -= 1;
  }

  return daysInMonth(year, month);
};

const next = (selectedYear, selectedMonth) => {
  let nextYear = selectedYear;
  let nextMonth = selectedMonth;

  if (selectedMonth === 0) {
    nextYear += 1;
    nextMonth = 1  // Jan.
  } else if(selectedMonth === 11) {
    nextMonth = 0; // Dec.
  } else {
    nextMonth += 1;
  }
  const days = daysInMonth(nextYear, nextMonth);

  return { days, nextMonth, nextYear };
}

const prev = (selectedYear, selectedMonth) => {
  let prevYear = selectedYear;
  let prevMonth = selectedMonth;

  if (selectedMonth === 1) {
    prevYear -= 1;
    prevMonth = 0 // Dec.
  } else if (prevMonth === 0) {
    prevMonth = 11;
  } else {
    prevMonth -= 1;
  }
  const days = daysInMonth(prevYear, prevMonth);

  return { days, prevMonth, prevYear };
}

const getCalendar = (daysInMonth, monthFirstDay, events) => {
  const daysInPrevMonth = getPrevMonthDays();
  const calendarData = [];
  let oneWeek = [];

  for(let i = 0; i < monthFirstDay; i++) {
    const dayofMonth = {"dom": daysInPrevMonth - i, prevMonth: true};
    oneWeek.unshift(dayofMonth);
  }

  for(let i = 1; i <= daysInMonth; i++) {
    const addEvent = Math.random() > 0.7;
    const eventCount = events.length;
    const eventIdx = Math.floor(Math.random() * eventCount);

    if (!!addEvent) {
      const event = {...events[eventIdx], "dom": i, prevMonth: false};
      oneWeek.push(event);
    } else {
      const dayofMonth = {"dom": i, prevMonth: false};
      oneWeek.push(dayofMonth);
    }

    const total = i + monthFirstDay;
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
  getDefaultDate,
  getPathDate,
  daysInMonth,
  firstDayInMonth,
  getCalendar,
  getImageList,
  getSelectedYearMonth
};
