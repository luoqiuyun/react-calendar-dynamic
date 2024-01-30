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

  }, []);

  return (
    <EventsCalendar
      pathDate={defaultDate}
      games={games}
    />
  );
};

export default DynamicCalendar;
