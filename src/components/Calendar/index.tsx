import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import usePrevLocation from "./usePrevLocation";
import { Game, DefaultDate } from "components/types";
import Selector from "components/Selector";
import Weekdays from "components/Weekdays";
import Month from "components/Month";
import {
  getImageList,
  getDefaultDate,
  selectedDate,
  getCalendar,
  prev,
  next,
  isValidLocation
} from "./helpers";

type CalendarProps = {
  pathDate: DefaultDate;
  games: Game[];
};

const Calendar: React.FC<CalendarProps> = ({games, pathDate}) => {
  const [days, setDays] = useState(pathDate.days);
  const [monthFirstDay, setMonthFirstDay] = useState(pathDate.firstDay);
  const [selectedMonth, setSelectedMonth] = useState(pathDate.month);
  const [selectedYear, setSelectedYear] = useState(pathDate.year);

  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  const setSelected = (date: DefaultDate) => {
    setDays(date.days);
    setMonthFirstDay(date.firstDay);
    setSelectedMonth(date.month !== 12 ? date.month : 0);
    setSelectedYear(date.year);
  };

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) {
      const date = getDefaultDate();
      setSelected(date);
      return;
    }

    if (!isValidLocation(location)) {
      window.history.back();
    }

    const date = selectedDate(location, prevLocation);
    setSelected(date);
  }, []);

  useEffect(() => {
    const month = selectedMonth !== 0
      ? selectedMonth
      : 12;
    const queryParam = `/${selectedYear}/${month}`;
    navigate(queryParam, {replace:true});
  }, [selectedMonth, selectedYear, navigate]);

  const nextMonth = () => {
    const nextDate = next(selectedYear, selectedMonth);
    setDays(nextDate.days);
    setMonthFirstDay(nextDate.firstDay);
    setSelectedMonth(nextDate.nextMonth);
    setSelectedYear(nextDate.nextYear);
  }

  const prevMonth = () => {
    const prevDate = prev(selectedYear, selectedMonth);
    setDays(prevDate.days);
    setMonthFirstDay(prevDate.firstDay);
    setSelectedMonth(prevDate.prevMonth);
    setSelectedYear(prevDate.prevYear);
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
        calendar={getCalendar(days, monthFirstDay, games)}
        eventImages={getImageList()}
      />
    </div>
  );
};

export default Calendar;
