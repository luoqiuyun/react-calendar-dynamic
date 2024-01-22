import Day from "../Day";
import './styles.css';

const Week = ({
  week,
  days,
  setEventSelected,
  images
}) => {

  const setSelected = (game) => {
    setEventSelected(week, game);
  }

  return (
    <>
      <div class="card-container">
        {days.map((game, i) => 
          <Day
            key={"weekday-" + i}
            dom={game.dom}
            game={game}
            setSelected={setSelected}
            images={images}
          />
        )}
      </div>
    </>
  );
};

export default Week;
