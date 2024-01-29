import React, { useState, useEffect} from 'react';
import './styles.css';
import { nthNumber, getMonthNames, removeTags } from "./helpers";
import { Game, Images } from "../types";

type SelectedGameProps = {
  game: Game;
  images: Images;
};

const SelectedGame: React.FC<SelectedGameProps> = ({ game, images }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const isMobile = width <= 768;
  const windowResize = () => setWidth(window.innerWidth);

  const full = game && game.imageFilenameFull ? game.imageFilenameFull : 'none';
  const imgUrl = images.find(element => element.includes(full)) || '';
  const months = getMonthNames();

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  const descriptionStyles = () => {
    return {
      width: !isMobile ? '420px' : '290px',
      fontSize: !isMobile ? '12px' : '12px',
    }
  };

  const dateAvailable = () => {
    const { pathname } = window.location;
    const params = pathname.split('/');
    const year = params[1];
    const month = parseInt(params[2]);
    const day = game.dom;
    const eventDate = `${months[month]} ${day}${nthNumber(day)}, ${year}`;
    return eventDate;
  };

  const gameDescription = () => {
    let title: string;
    if (game.title.indexOf(':') > -1) {
      const titleSegments = game.title.split(':');
      title = titleSegments[0].toUpperCase() + ': ' + titleSegments[1];
    } else {
      title = game.title.toUpperCase();
    }
    return title;
  };

  const openLearnMorePage = () => {
    window.open(game.learnMoreLink, '_blank');
  };

  const openPurchasePage = () => {
    window.open(game.purchaseLink, '_blank');
  };

  return (
    <div className="selected-container">
      <div className="selected" style={{backgroundImage: `url(${imgUrl})`}}>
        <div className="Description" style={descriptionStyles()}>{gameDescription()} {removeTags(game.summary)}</div>
        <div className="available">Available {dateAvailable()}</div>
        <button className="button learn-more" onClick={openLearnMorePage}>Learn More</button>
        <button className="button pre-order-now" onClick={openPurchasePage}>Pre Order Now</button>
      </div>
    </div>
  );
};

export default SelectedGame;
