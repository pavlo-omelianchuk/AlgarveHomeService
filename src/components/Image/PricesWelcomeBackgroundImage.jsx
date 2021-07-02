import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
                fluid {
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
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 450px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`;

BackgroundSection.propTypes = {
  className: PropTypes.string,
  filename: PropTypes.string,
  alt: PropTypes.string,
  bgContent: PropTypes.element,
};

export default StyledBackgroundSection;
