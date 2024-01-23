import React from 'react';
import WeekDay from "../WeekDay";
import './styles.css';

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

type WeekProps = {
  week: number;
  days: Game[];
  setWeekSelected: (week: number | null) => void;
  setGameSelected: (game: Game | null) => void;
  images: Images;
};

const Week: React.FC<WeekProps> = ({ week, days, images, setWeekSelected, setGameSelected }) => {

  return (
    <div className="card-container">
      {days.map((game, i) => 
        <WeekDay
          key={`weekday-${i}`}
          game={game}
          images={images}
          week={week}
          setWeekSelected={setWeekSelected}
          setGameSelected={setGameSelected}
        />
      )}
    </div>
  );
};

export default Week;
