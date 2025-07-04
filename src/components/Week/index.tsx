import React from 'react';
import './styles.css';
import { Game, Images } from "components/types";
import WeekDay from "components/WeekDay";

type WeekProps = {
  week: number;
  days: Game[];
  setWeekSelected: (week: number | null) => void;
  setGameSelected: (game: Game | null) => void;
  images: Images;
};

const Week: React.FC<WeekProps> = ({
  week,
  days,
  images,
  setWeekSelected,
  setGameSelected
}) => {

  return (
    <div className="card-container" data-testid="week">
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
