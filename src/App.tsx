import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsCalendar from "./components/Calendar";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="*" element={<EventsCalendar />} />
    </Routes>
  );
};

export default App;
