import React, { useState, useEffect } from 'react';
import SelectedGame from "../SelectedGame";
import Week from "../Week";

const Month = ({ calendar }) => {
  const [weekSelected, setWeekSelected] = useState(null);
  const [gameSelected, setGameSelected] = useState(null);

  const images = require.context('../../assets/img', true);
  const imageList = images.keys().map(image => images(image));

  useEffect(() => {
    setWeekSelected(null);
    setGameSelected(null);
  }, [calendar]);

  const setEventSelected = (week, game) => {
    setWeekSelected(week);
    setGameSelected(game);
  };

  return (
    <div class="month-container">
      {calendar.map((week, i) =>
        <>
          <Week
            key={"week-" + i}
            week={i}
            days={week}
            setEventSelected={setEventSelected}
            images={imageList}
          />
          {weekSelected == i &&
            <SelectedGame game={gameSelected} images={imageList} />
          }
        </>
      )}
    </div>
  );
};

export default Month;
