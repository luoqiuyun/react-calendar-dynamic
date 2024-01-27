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
  validMonth,
  validYear
} from "./helpers";

const Calendar: React.FC = () => {
  
  const [games, setGames] = useState([]);
  const [days, setDays] = useState(31);
  const [monthFirstDay, setMonthFirstDay] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2024);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('/api/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;

    const ym = getSelectedYearMonth(location);
    if (!validMonth(ym.month) || !validYear(ym.year)) {
      window.history.back();
    }
    const firstDayOfMonth = new Date(`${ym.year}-${ym.month}-1`).getDay();
    setMonthFirstDay(firstDayOfMonth);
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
    const firstDayOfMonth = new Date(`${year}-${month !== 0 ? month:12}-1`).getDay();
    setMonthFirstDay(firstDayOfMonth);
    setDays(selectedDate.days);
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  const prevMonth = () => {
    const selectedDate = prev(selectedYear, selectedMonth);
    const year = selectedDate.prevYear;
    const month = selectedDate.prevMonth
    const firstDayOfMonth = new Date(`${year}-${month !== 0 ? month:12}-1`).getDay();
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
