import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const imageSrc = '../../images/component2-pink.png';
const Img = () => {
  return (
    <StaticImage src={imageSrc} alt="Logo" placeholder="none" layout="constrained" width={169} />
  );
};

export default Img;
