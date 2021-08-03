import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const FooterImg = () => {
  return (
    <StaticImage
      src="../../images/logoAMMBTFooter.png"
      alt="Logo"
      // placeholder="blurred"
      layout="fixed"
      width={250}
      imgStyle={{
        cursor: "pointer"
      }}
    />
  );
};

export default FooterImg;
