import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className, filename, alt, bgContent }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 264) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const backgroundImageFluid = image.node.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="div" className={className} fluid={backgroundImageFluid} alt={alt}>
      <div className="background-image-children">{bgContent}</div>
    </BackgroundImage>
  );
};

BackgroundSection.propTypes = {
  className: PropTypes.string,
  filename: PropTypes.string,
  alt: PropTypes.string,
  bgContent: PropTypes.element,
};

export default BackgroundSection;
