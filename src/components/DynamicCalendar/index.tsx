import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { events } from "assets/events";
import usePrevLocation from "./usePrevLocation";
import EventsCalendar from "components/Calendar";
import {
  getSelectedYearMonth,
  isValidMonth,
  isValidYear,
  getDefaultDate,
  getPathDate
} from "./helpers";

const DynamicCalendar: React.FC = () => {
  const [games, setGames] = useState(events);
  const [calendar, setCalendar] = useState([]);

  const defaultDate = getDefaultDate();
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  const { pathname } = location;
/*
  useEffect(() => {

    const ym = getSelectedYearMonth(location);
    if (!isValidMonth(ym.month) || !isValidYear(ym.year)) {
      window.history.back();
    }
    setMonthFirstDay(firstDayInMonth(ym.year, ym.month));
    setSelectedMonth(ym.month !== 12 ? ym.month : 0);
    setSelectedYear(ym.year);

    getCalendar(days, monthFirstDay, events)

  }, [games, events]);
*/
  useEffect(() => {
    const { pathname } = location;
    if(pathname.length === 1) return;

    const ym = getSelectedYearMonth(location);
    if (!isValidMonth(ym.month) || !isValidYear(ym.year)) {
      window.history.back();
    }

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

  return (
    <EventsCalendar
      pathDate={defaultDate}
      events={events}
      games={games}
    />
  );
};

export default DynamicCalendar;
