import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => {
  const pageQuery = useStaticQuery(
    graphql`
      {
        allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: WEBP
                  layout: CONSTRAINED
                  width: 50
                )
              }
              relativePath
            }
          }
        }
      }
    `
  );
  const edges = pageQuery.allFile.edges;

  const image = edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageToGo = getImage(image.node);
  return <GatsbyImage className="rounded-circle shadow-lg" alt={alt} image={imageToGo} />;
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
