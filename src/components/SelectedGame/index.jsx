import './styles.css';

const months = [
  "none",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const SelectedGame = ({game, images}) => {
  const thumb = !!game && Object.keys(game).length > 1 
    ? game.imageFilenameFull
    : 'none';
  const imgUrl = images.find(element => {
    return element.includes(thumb);
  });

  const dateAvailable = () => {
    const url = window.location.href;
    const segments = url.split('/');
    const eventDate = months[segments[4]] + ' ' + game.dom + 'th ' + segments[3];
    return eventDate;
  };

  const gameDescription = () => {
    let title;

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
    <div class="selected-container">
      <div class="selected" style={{backgroundImage: `url(${imgUrl})`}}>
        <div class="Description">{gameDescription()} {game.summary}</div>
        <div class="available">Available {dateAvailable()}</div>
        <button class="button learn-more" onClick={openLearnMorePage}>Learn More</button>
        <button class="button pre-order-now" onClick={openPurchasePage}>Pre Order Now</button>
      </div>
    </div>
  );
};

export default SelectedGame;
