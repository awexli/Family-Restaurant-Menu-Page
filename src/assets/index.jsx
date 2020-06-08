import React from 'react';
import LogoImage from './logo.png';

export const Logo = () => (
  <img src={LogoImage} className="photo" alt="Zhong Shan Logo"></img>
);

const importAllImages = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });

  return images;
}

const images = importAllImages(
  require.context('./dishes', false, /\.(png|jpe?g|svg)$/)
);

export const dishMap = {};
// populate dishMap
for (let imageString in images) {
  const itemNumber = `${imageString[0].toUpperCase()}${imageString[1]}`;
  dishMap[itemNumber] = (
    <img
      src={images[imageString].default}
      alt={imageString}
      className="photo"
    ></img>
  );
}
