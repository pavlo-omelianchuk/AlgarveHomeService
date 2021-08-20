import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ id, className, filename, alt, bgContent }) => {
  const data = useStaticQuery(
    graphql`
      {
        images: allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                  tracedSVGOptions: {}
                  quality: 50
                  formats: AUTO
                )
              }
              relativePath
            }
          }
        }
      }
    `
  );
  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageToGo = image.node.childImageSharp.gatsbyImageData;
  // const imageToGo = getImage(image);
  return (
    <>
      <GatsbyImage id={id} className={className} image={imageToGo} alt={alt} />
      <div className="background-image-children">{bgContent}</div>
    </>
  );
};

BackgroundSection.propTypes = {
  className: PropTypes.string,
  filename: PropTypes.string,
  alt: PropTypes.string,
  bgContent: PropTypes.element,
};

export default BackgroundSection;
