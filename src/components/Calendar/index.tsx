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
  const [calendar, setCalenda] = useState(pathDate);
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) {
      const date = getDefaultDate();
      setCalenda(date);
      return;
    }

    if (!isValidLocation(location)) {
      window.history.back();
    }

    const date = selectedDate(location, prevLocation);
    setCalenda(date);
  }, []);

  useEffect(() => {
    const month = calendar.month !== 0
      ? calendar.month
      : 12;
    const queryParam = `/${calendar.year}/${month}`;
    navigate(queryParam, {replace:true});
  }, [calendar, navigate]);

  const nextMonth = () => {
    const nextDate = next(calendar);
    setCalenda(nextDate);
  }

  const prevMonth = () => {
    const prevDate = prev(calendar);
    setCalenda(prevDate);
  }

  return (
    <div className="calendar-container">
      <Selector
        calendar={calendar}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <hr />
      <Weekdays />
      <Month
        calendar={getCalendar(calendar, games)}
        eventImages={getImageList()}
      />
    </div>
  );
};

export default Calendar;
