import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { getImageList, getSelectedYearMonth, getCalendar, prev, next } from "./utils";
import { events } from "./events";
import Selector from "../Selector";
import Weekdays from "../Weekdays";
import Month from "../Month";

const Calendar = () => {
  const [days, setDays] = useState(31);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const ym = getSelectedYearMonth(location);
    setSelectedYear(Number(ym.year));
    setSelectedMonth(Number(ym.month === 12 ? 0:ym.month));
  }, []);

  useEffect(() => {
    const month = selectedMonth !== 0
      ? selectedMonth
      : 12;
    const queryParam = '/' + selectedYear + '/' + month;
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
    <div class="calendar-container">
      <Selector
        month={selectedMonth}
        year={selectedYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <hr />
      <Weekdays />
      <Month calendar={getCalendar(days, events)} eventImages={getImageList()} />
    </div>
  );
};

export default Calendar;
