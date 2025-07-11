import React from 'react';
import './styles.css';
import { Game, Images } from "components/types";

type WeekDayProps = {
  game?: Game;
  week: number;
  setWeekSelected: (week: number | null) => void;
  setGameSelected: (game: Game | null) => void;
  images: Images;
};

const WeekDay: React.FC<WeekDayProps> = ({
  game,
  week,
  images,
  setWeekSelected,
  setGameSelected
}) => {
  
  const thumb = game && game.imageFilenameThumb ? game.imageFilenameThumb : 'none';
  const addEvent = thumb !== 'none';
  const imgUrl = images.find(element => element.includes(thumb)) || '';

  let cardClass = addEvent ? "card game-event" : "card";
  cardClass = !!game && !game.prevMonth ? cardClass:`${cardClass} prev-month`;

  const selectedEvent = () => {
    if (!addEvent || !game) return;
    setWeekSelected(week);
    setGameSelected(game);
  };

  return (
    <div role="button"
      className={cardClass}
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={selectedEvent}
    >
      {addEvent &&
        <div className="day-with-game">
          {!!game && game.dom}
        </div>
      }
      {!addEvent &&
        <div className="day-of-month">
          {!!game && game.dom}
        </div>
      }
    </div>
  );
};

export default WeekDay;
