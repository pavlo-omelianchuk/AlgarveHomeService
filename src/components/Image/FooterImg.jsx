import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const imageSrc = '../../images/logoAMMBTFooter.png';
const FooterImg = () => {
  return (
    <StaticImage src={imageSrc} alt="Logo" placeholder="none" layout="constrained" width={250} />
  );
};

export default FooterImg;
