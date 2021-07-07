import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const LogoImg = ({ filename, alt, link }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return (
        <>
          <a href={link}>
            <Img alt={alt} fixed={imageFixed} />
          </a>
        </>
      );
    }}
  />
);

LogoImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default LogoImg;
