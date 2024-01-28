function isValidYear(year) {
  const parsedYear = parseInt(year, 10);
  return !isNaN(parsedYear) && parsedYear >= 2000 && parsedYear <= 2026;
}

function isValidMonth(month) {
  const parsedMonth = parseInt(month, 10);
  return !isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12;
}

function getImageList() {
  const images = require.context('../../assets/img', true);
  const imageList = images.keys().map(image => images(image));

  return imageList;
}

function getSelectedYearMonth(location) {
  const CurrentYear = new Date().getFullYear();

  const { pathname } = location;
  if(pathname.length < 7) {
    window.history.back();
  }

  const params = pathname.split('/');

  if (params.length !== 3) {
    window.history.back();
  }

  const year = Number(params[1]);
  const month = Number(params[2]);

  if (!isValidYear(year)) {
    window.history.back();
  }

  if (!isValidMonth(month)) {
    window.history.back();
  }

  return {
    year: isValidYear(year) ? year : Number(CurrentYear),
    month: isValidMonth(month) ? month : 1
  };
};

const daysInMonth = (year, month) =>
  new Date(year, month, 0).getDate();

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

const next = (selectedYear, selectedMonth) => {
  let nextYear = selectedYear;
  let nextMonth = selectedMonth;

  if (selectedMonth === 0) {
    nextYear += + 1;
    nextMonth = 1  // Jan.
  } else if(selectedMonth === 11) {
    nextMonth = 0; // Dec.
  } else {
    nextMonth += 1;
  }
  const days = daysInMonth(nextYear, nextMonth);

  return {
    days: days,
    nextYear: nextYear,
    nextMonth: nextMonth
  };
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

  return {
    days: days,
    prevYear: prevYear,
    prevMonth: prevMonth
  };
}

export {
  prev,
  next,
  isValidYear,
  isValidMonth,
  getCalendar,
  getImageList,
  getSelectedYearMonth
};
