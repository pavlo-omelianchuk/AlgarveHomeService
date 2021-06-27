import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BackgroundImage from 'gatsby-background-image';
import TestemonialsMaker from '../Testemonials/TestemonialsMaker';

const MultiBackground = ({ className }) => {
  const { astronaut } = useStaticQuery(
    graphql`
      query {
        astronaut: file(relativePath: { eq: "bgtestemonials1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seamlessBackground: file(relativePath: { eq: "bgtestemonials2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 420) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  /// ////////////////////////////////////// Перевірити шлях у соємі граф к'ю елі./////////////////////////////////////

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    // seamlessBackground.childImageSharp.fluid,
    // `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
    astronaut.childImageSharp.fluid,
  ].reverse();

  return (
    <BackgroundImage
      // Tag={`section`}
      id="bgtestemonials"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>
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
  width: 100vw;
  min-height: 80vh;
  /* You should set a background-size as the default value is "cover"! */
  // background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  opacity: 0.5;
`;

MultiBackground.propTypes = {
  className: PropTypes.string,
};

export default StyledMultiBackground;
