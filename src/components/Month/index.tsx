import React, { useState, useEffect } from 'react';
import SelectedGame from "../SelectedGame";
import Week from "../Week";

type Game = {
  id: string;
  launchDate: string;
  title: string;
  summary: string;
  imageFilenameThumb: string;
  imageFilenameFull: string;
  learnMoreLink: string;
  purchaseLink: string;
  dom?: number;
};

type Images = string[];
type Calendar = Game[][];

type MonthProps = {
  calendar: Calendar;
  eventImages: Images;
};

const Month: React.FC<MonthProps> = ({ calendar, eventImages }) => {
  const [weekSelected, setWeekSelected] = useState<number | null>(null);
  const [gameSelected, setGameSelected] = useState<Game | null>(null);

  useEffect(() => {
    setWeekSelected(null);
    setGameSelected(null);
  }, [calendar]);

  return (
    <div className="month-container">
      {calendar.map((week, i) =>
        <React.Fragment key={`week-${i}`}>
          <Week
            week={i}
            days={week}
            images={eventImages}
            setWeekSelected={setWeekSelected}
            setGameSelected={setGameSelected}
          />
          {weekSelected === i && gameSelected &&
            <SelectedGame game={gameSelected} images={eventImages} />
          }
        </React.Fragment>
      )}
    </div>
  );
};

export default Month;
