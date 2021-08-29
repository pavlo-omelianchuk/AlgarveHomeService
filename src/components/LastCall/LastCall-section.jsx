import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';
import LastCallContent from './LastCallContent-component'
import lastCallData from '../../mock/lastCall.json';

const { background_Image, alt } = lastCallData;

const imgRegEx = /(\w+\.\w+)/g;

const LastCall = () => {
 
  return (
    <Container fluid>
      <Row>
        <StyledBackground
          className="last-call-background"
          alt={alt}
          filename={background_Image.match(imgRegEx)[0]}
          bgContent={<LastCallContent />}
        />
      </Row>
    </Container>
  );
};
export default LastCall;
