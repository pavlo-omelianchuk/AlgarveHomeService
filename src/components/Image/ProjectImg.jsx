import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectImg = ({ filename, alt }) => {
  const projectImgQuery = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, formats: WEBP)
              }
            }
          }
        }
      }
    `
  );

   const edges = projectImgQuery.allFile.edges;

   const image = edges.find((n) => n.node.relativePath.includes(filename));

   if (!image) return null;

   const imageToGo = getImage(image.node);
  return <GatsbyImage className="rounded shadow-lg" alt={alt} image={imageToGo} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
