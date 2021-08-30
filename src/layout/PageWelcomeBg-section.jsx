import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PageWelcomeBgTitle from './PageWelcomeBgTitle-component'
import StyledBackground from '../components/Image/LastCallBackgroundImage';
import welcomePageBg from '../mock/prices_Page.json'

const { background_Image, alt } = welcomePageBg;
const imgRegEx = /(\w+\.\w+)/g;

const PageWelcomeBg = ({overTitle, title}) => {
  return (
    <Container id="prices-welcome-bg" fluid>
      <Row>
        <StyledBackground
          className="prices-page-bg"
          filename={background_Image.match(imgRegEx)}
          alt={alt}
          bgContent={<PageWelcomeBgTitle overTitle={overTitle} title={title} />}
        />
      </Row>
    </Container>
  );
};

export default PageWelcomeBg;
