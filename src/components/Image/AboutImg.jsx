import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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

  const imageToGo = image.node.childImageSharp.gatsbyImageData;
  return <GatsbyImage className="rounded shadow-lg" alt={alt} image={imageToGo} />;
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
