import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BackgroundImage from 'gatsby-background-image';
import TestemonialsMaker from '../Testemonials/TestemonialsCarousel-component';

const MultiBackground = ({ className }) => {
  const { stoneMassage } = useStaticQuery(
    graphql`
      query {
        stoneMassage: file(relativePath: { eq: "bgTestemonials.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const backgroundFluidImageStack = [stoneMassage.childImageSharp.fluid];

  return (
    <BackgroundImage
      id="bgtestemonials"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
        <div id="testemonials-background-overlay" />
        <TestemonialsMaker />
      </StyledInnerWrapper>
    </BackgroundImage>
  );
};

const StyledInnerWrapper = styled.div`
  margin-top: 0%;
  // display: flex;
  // // flex-direction: column;
  // // justify-content: center;
  // align-items: center;
`;

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 60vh;
  background-size: cover;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  opacity: 0.5;
`;

MultiBackground.propTypes = {
  className: PropTypes.string,
};

export default StyledMultiBackground;
