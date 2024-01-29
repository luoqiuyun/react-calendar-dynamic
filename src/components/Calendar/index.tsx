import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Game, DefaultDate } from "components/types";
import Selector from "components/Selector";
import Weekdays from "components/Weekdays";
import Month from "components/Month";
import {
  getImageList,
  getSelectedYearMonth,
  getCalendar,
  prev,
  next,
  isValidMonth,
  isValidYear,
  firstDayInMonth,
  daysInMonth,
  getPathDate
} from "./helpers";

type CalendarProps = {
  pathDate: DefaultDate;
  events: Game[];
  games: Game[];
};

const Calendar: React.FC<CalendarProps> = ({games, events, pathDate}) => {
  const [days, setDays] = useState(pathDate.daysInMonth);
  const [monthFirstDay, setMonthFirstDay] = useState(pathDate.firstDay);
  const [selectedMonth, setSelectedMonth] = useState(pathDate.month);
  const [selectedYear, setSelectedYear] = useState(pathDate.year);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;

    const ym = getSelectedYearMonth(location);
    if (!isValidMonth(ym.month) || !isValidYear(ym.year)) {
      window.history.back();
    }
    setDays(daysInMonth(ym.year, ym.month));
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
    const nextPathDate = getPathDate(year, month);
    setDays(nextPathDate.daysInMonth);
    setMonthFirstDay(nextPathDate.firstDay);
    setSelectedMonth(nextPathDate.month);
    setSelectedYear(nextPathDate.year);
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
