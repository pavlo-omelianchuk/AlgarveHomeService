import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import { Col } from 'react-bootstrap';

const ServicesImg = ({ filename, alt, overTitle, title, colClassName, linkTo }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 764) {
                  ...GatsbyImageSharpFluid
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

      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <Col className={colClassName} lg={3} md={12}>
          <Fade duration={500} distance="100px">
            <Parallax className="parallax-img" bgImage={imageFluid.src} strength={-100}>
              <div className="parallax">
                <div id="service__overlay" />
                <a style={{textTransform: 'initial'}} href={linkTo}>
                  <div className="parallax__inside">
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">{overTitle}</h3>
                    </Fade>
                    <h2 className="service-title-small">{title}</h2>
                  </div>
                </a>
              </div>
            </Parallax>
          </Fade>
        </Col>
      );
    }}
  />
);

ServicesImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ServicesImg;