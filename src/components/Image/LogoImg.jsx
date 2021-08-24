import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const imageSrc = '../../images/logoAMMBTHeaderWithTextNew.png';
const LogoImg = () => {
  return (
    <StaticImage src={imageSrc} alt="Logo" placeholder="none" layout="constrained" width={250} />
  );
};

export default LogoImg;
