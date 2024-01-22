const Day = ({dom, game, setSelected, images}) => {
  
  const thumb = !!game && Object.keys(game).length > 1
    ? game.imageFilenameThumb
    : 'none';
  const addEvent = thumb !== 'none';
  const cardClass = addEvent ? "card game-event" : "card"

  const imgUrl = images.find(element => {
    return element.includes(thumb);
  });

  const selectedEvent = () => {
    if (!addEvent) return;
    setSelected(game);
  };

  return (
    <div
      class={cardClass}
      style={{backgroundImage: `url(${imgUrl})`}} 
      onClick={selectedEvent}
    >
      {!!addEvent &&
        <div class="day-with-game">
          {dom}
        </div>
      }
      {!addEvent &&
        <div class="day-of-month">
          {dom}
        </div>
      }
    </div>
  )
};

export default Day;
