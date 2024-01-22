import { Routes, Route } from 'react-router-dom';
import EventsCalendar from "./components/Calendar";

const App = () => {

  return (
    <>
       <Routes>
          <Route path="*" element={<EventsCalendar />} />
       </Routes>
    </>
  );
};

export default App
