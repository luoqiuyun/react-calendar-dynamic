function getImageList() {
  const images = require.context('../../assets/img', true);
  const imageList = images.keys().map(image => images(image));

  return imageList;
}

export { getImageList };
