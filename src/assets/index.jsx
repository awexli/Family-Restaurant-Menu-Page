import React from 'react';
import LogoImage from './logo.png';

export const Logo = () => (
  <img src={LogoImage} className="photo" alt="Zhong Shan Logo"></img>
);

function importAllImages(requireContext) {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });

  return images;
}

const images = importAllImages(
  require.context('./dishes', false, /\.(png|jpe?g|svg)$/)
);

export const dishMap = {
  A7: (
    <img
      src={images['a7_pumpkin_strip.jpg'].default}
      alt="Pumpkin Strip"
      className="photo"
    />
  ),
};
