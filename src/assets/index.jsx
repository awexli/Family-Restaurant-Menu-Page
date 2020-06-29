import React from 'react';
import LogoImage from './logo.png';

export const Logo = () => (
  <img src={LogoImage} alt="Zhong Shan Logo"></img>
);

export const UpArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
    <path fill="#FFFFFF" d="M0 4l4-4 4 4z" />
  </svg>
);

export const DownArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
    <path fill="#FFFFFF" d="M0 0l4 4 4-4z" />
  </svg>
);

const importAllImages = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });

  return images;
};

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
