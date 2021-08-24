import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const imageSrc = '../../images/component3-pink.png';
const Img = () => {
  return (
    <StaticImage src={imageSrc} alt="Logo" placeholder="none" layout="constrained" width={250} />
  );
};

export default Img;
