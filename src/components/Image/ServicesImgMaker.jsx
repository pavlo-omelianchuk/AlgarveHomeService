import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';

const ServicesImg = ({ filename, alt, overTitle, title, fromPrice, colClassName, linkTo }) => {
  const placeholderImage = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, formats: AUTO)
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
    <Col className={colClassName} lg={3} md={12}>
      <Fade duration={500} distance="100px">
        <BackgroundImage Tag="div" alt={alt} fluid={bgImage.fluid}>
          <div className="parallax">
            <div id="service__overlay" />
            <Link style={{ textTransform: 'initial' }} to={linkTo}>
              <div className="parallax__inside">
                <Fade bottom duration={800} distanse="500px">
                  <h3 className="service-overtitle">{overTitle}</h3>
                </Fade>
                <h2 className="service-title-small">{title}</h2>
                <span className="service-under-title">{fromPrice}</span>
              </div>
            </Link>
          </div>
        </BackgroundImage>
      </Fade>
    </Col>
  );
};

ServicesImg.propTypes = {
  filename: PropTypes.array,
  alt: PropTypes.string,
};

export default ServicesImg;
