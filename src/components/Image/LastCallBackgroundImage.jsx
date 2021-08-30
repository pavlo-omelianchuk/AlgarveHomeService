import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundSection = ({ className, filename, alt, bgContent }) => {
  const placeholderImage = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, formats: AUTO, height: 320)
              }
            }
          }
        }
      }
    `
  );
  const edges = placeholderImage.allFile.edges;

  const image = edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageToGo = getImage(image.node);

  const bgImage = convertToBgImage(imageToGo);

  return (
    <BackgroundImage Tag="div" alt={alt} className={className} fluid={bgImage.fluid}>
      <div className="background-image-children">{bgContent}</div>
    </BackgroundImage>
  );
};
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

BackgroundSection.propTypes = {
  className: PropTypes.string,
  filename: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  alt: PropTypes.string,
  bgContent: PropTypes.element,
};

export default StyledBackgroundSection;
