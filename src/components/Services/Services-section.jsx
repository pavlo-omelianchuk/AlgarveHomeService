import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Row } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImgMaker';
import servicesData from '../../mock/service.json';

const { block_One, block_Two, block_Three, block_Four } = servicesData;
const servicesArray = [block_One, block_Two, block_Three, block_Four];

const imgRegEx = /(\w+\.\w+)/g;

const Services = () => {
  return (
    <section id="services">
      <Container fluid>
        <Row className="services-row">
          {servicesArray.map((service) => {
            return (
              <ServicesImg
                key={nanoid()}
                overTitle={service.over_Title}
                title={service.title}
                alt={service.alt}
                filename={service.image.match(imgRegEx)}
                colClassName="services-row__col"
                fromPrice={service.price_From}
                linkTo={service.link_to}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
