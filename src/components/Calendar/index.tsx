import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "./events";
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
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('/api/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);

  useEffect(() => {
    const ym = getSelectedYearMonth(location);

    if (!validMonth(ym.month) || !validYear(ym.year)) {
      window.history.back();
    }

    const month = ym.month !== 12
      ? ym.month
      : 0;

    setSelectedYear(ym.year);
    setSelectedMonth(month);
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
    setDays(selectedDate.days);
    setSelectedYear(selectedDate.nextYear);
    setSelectedMonth(selectedDate.nextMonth);
  }

  const prevMonth = () => {
    const selectedDate = prev(selectedYear, selectedMonth);
    setDays(selectedDate.days);
    setSelectedYear(selectedDate.prevYear);
    setSelectedMonth(selectedDate.prevMonth);
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
        calendar={getCalendar(days, games)}    // use api data : games
        //calendar={getCalendar(days, events)} // use static data : events
        eventImages={getImageList()}
      />
    </div>
  );
};

export default Calendar;
