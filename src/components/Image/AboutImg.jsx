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
                  placeholder: NONE
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

  const imageToGo = getImage(image.node);
  return <GatsbyImage className="rounded shadow-lg" alt={alt} image={imageToGo} />;
};

AboutImg.propTypes = {
  filename: PropTypes.array,
  alt: PropTypes.string,
};

export default AboutImg;
