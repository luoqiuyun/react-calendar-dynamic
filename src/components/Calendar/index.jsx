import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { events } from "./events";
import Selector from "../Selector";
import Weekdays from "../Weekdays";
import Month from "../Month";

const Calendar = () => {
  const [days, setDays] = useState(31);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2024);

  const history = useHistory();

  useEffect(() => {
    const month = selectedMonth !== 0 ? selectedMonth:12;
    const queryParam = '/' + selectedYear + '/' + month;
    history.push(queryParam);
  }, [days, selectedMonth, selectedYear, history ]);

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const nextMonth = () => {
    let currentYear = selectedYear;
    let currentMonth = selectedMonth;

    if (selectedMonth === 0) {
      currentYear += 1;
      currentMonth = 1 // Jan.
    } else if(selectedMonth === 11) {
      currentMonth = 0;
    } else {
      currentMonth += 1;
    }
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
    const days = daysInMonth(currentYear, currentMonth);
    setDays(days);
  }

  const prevMonth = () => {
    let currentYear = selectedYear;
    let currentMonth = selectedMonth;

    if (selectedMonth === 1) {
      currentYear -= 1;
      currentMonth = 0 // Dec.
    } else if (currentMonth === 0) {
      currentMonth = 11;
    } else {
      currentMonth -= 1;
    }
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
    const days = daysInMonth(currentYear, currentMonth);
    setDays(days);
  }

  const getCalendar = (daysInMonth) => {
    const calendarData = [];
    let oneWeek = [];
    for(let i = 1; i <= daysInMonth; i++) {
      const addEvent = Math.random() > 0.7;
      const eventCount = events.length;
      const eventIdx = Math.floor(Math.random() * eventCount);

      if (!!addEvent) {
        const event = {...events[eventIdx], "dom": i};
        oneWeek.push(event);
      } else {
        const dayofMonth = {"dom": i};
        oneWeek.push(dayofMonth);
      }

      if (!(i % 7)) {
        calendarData.push(oneWeek);
        oneWeek = [];
      }
    }
    if (!!oneWeek.length) calendarData.push(oneWeek);
    return calendarData;
  };

  return (
    <div class="calendar-container">
      <Selector
        month={selectedMonth}
        year={selectedYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <hr />
      <Weekdays />
      <Month calendar={getCalendar(days)} />
    </div>
  );
};

export default Calendar;
