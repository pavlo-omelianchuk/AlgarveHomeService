import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const LogoImg = () => {
  return (
    <StaticImage
      src="../../images/logoAMMBTHeaderWithTextNew.png"
      alt="Logo"
      // placeholder="blurred"
      layout="fixed"
      width={250}
    />
  );
};

export default LogoImg;
