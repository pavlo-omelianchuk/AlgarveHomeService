import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageWelcomeBgTitle from './PageWelcomeBgTitle-component'
import StyledBackground from '../components/Image/PricesWelcomeBackgroundImage';

const PageWelcomeBg = ({overTitle, title}) => {
  return (
    <Container id="prices-welcome-bg" fluid>
      <Row>
        <StyledBackground
          className="prices-page-bg"
          filename="bgPrices.jpg"
          alt="Hands making massage"
          bgContent={<PageWelcomeBgTitle overTitle={overTitle} title={title} />}
        />
      </Row>
    </Container>
  );
};

export default PageWelcomeBg;