import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DynamicCalendar from "components/DynamicCalendar";

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="*" element={<DynamicCalendar />} />
    </Routes>
  );
};

export default App;
