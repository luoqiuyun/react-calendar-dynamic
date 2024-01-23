import React from 'react';
import { nthNumber, getMonthNames } from "./utils";
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

type SelectedGameProps = {
  game: Game;
  images: Images;
};

const SelectedGame: React.FC<SelectedGameProps> = ({ game, images }) => {
  const thumb = game && game.imageFilenameFull ? game.imageFilenameFull : 'none';
  const imgUrl = images.find(element => element.includes(thumb)) || '';

  const months = getMonthNames();

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
        <div className="Description">{gameDescription()} {game.summary}</div>
        <div className="available">Available {dateAvailable()}</div>
        <button className="button learn-more" onClick={openLearnMorePage}>Learn More</button>
        <button className="button pre-order-now" onClick={openPurchasePage}>Pre Order Now</button>
      </div>
    </div>
  );
};

export default SelectedGame;
