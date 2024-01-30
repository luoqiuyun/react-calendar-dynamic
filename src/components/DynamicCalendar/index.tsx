import React, { useState, useEffect } from 'react';
import { events } from "assets/events";
import EventsCalendar from "components/Calendar";
import {
  getDefaultDate
} from "components/Calendar/helpers";

const DynamicCalendar: React.FC = () => {
  const [games, setGames] = useState(events);

  useEffect(() => {

    fetch('/api/games')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(data => setGames(data))
    .catch((response) => {});

  }, []);

  return (
    <EventsCalendar
      pathDate={getDefaultDate()}
      games={games}
    />
  );
};

export default DynamicCalendar;
