import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "../../assets/events";
import Selector from "../Selector";
import Weekdays from "../Weekdays";
import Month from "../Month";
import {
  getImageList,
  getSelectedYearMonth,
  getCalendar,
  prev,
  next,
  isValidMonth,
  isValidYear,
  getDefaultDate,
  firstDayInMonth
} from "../calendarHelps.js";

const Calendar: React.FC = () => {
  const defaultDate = getDefaultDate();
  const [games, setGames] = useState([]);
  const [days, setDays] = useState(defaultDate.daysInMonth);
  const [monthFirstDay, setMonthFirstDay] = useState(defaultDate.firstDay);
  const [selectedMonth, setSelectedMonth] = useState(defaultDate.month);
  const [selectedYear, setSelectedYear] = useState(defaultDate.year);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    fetch('/api/games')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(data => setGames(data))
    .catch((response) => {
      console.log('');
    });

  }, []);

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;

    const ym = getSelectedYearMonth(location);
    if (!isValidMonth(ym.month) || !isValidYear(ym.year)) {
      window.history.back();
    }
    setMonthFirstDay(firstDayInMonth(ym.year, ym.month));
    setSelectedMonth(ym.month !== 12 ? ym.month : 0);
    setSelectedYear(ym.year);
  }, []);

  useEffect(() => {
    const month = selectedMonth !== 0
      ? selectedMonth
      : 12;
    const queryParam = `/${selectedYear}/${month}`;
    navigate(queryParam, {replace:true});
  }, [selectedMonth, selectedYear, navigate]);

  const nextMonth = () => {
    const selectedDate = next(selectedYear, selectedMonth);
    const year = selectedDate.nextYear;
    const month = selectedDate.nextMonth
    const firstDayOfMonth = firstDayInMonth(year, month);
    setMonthFirstDay(firstDayOfMonth);
    setDays(selectedDate.days);
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  const prevMonth = () => {
    const selectedDate = prev(selectedYear, selectedMonth);
    const year = selectedDate.prevYear;
    const month = selectedDate.prevMonth
    const firstDayOfMonth = firstDayInMonth(year, month);
    setMonthFirstDay(firstDayOfMonth);
    setDays(selectedDate.days);
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  return (
    <div className="calendar-container">
      <Selector
        month={selectedMonth}
        year={selectedYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <hr />
      <Weekdays />
      <Month
        calendar={getCalendar(days, monthFirstDay, games)}    // use api data : games
        //calendar={getCalendar(days, monthFirstDay, events)}   // use static data : events
        eventImages={getImageList()}
      />
    </div>
  );
};

export default Calendar;
