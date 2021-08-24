import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Row } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImgMaker';

const servicesArray = [
  {
    overTitle: 'Manual & excercise therapy',
    title: 'MASSAGE THERAPY',
    alt: 'Back massage',
    filename: 'bgServiceMassage',
    linkTo: '/prices-massage',
    fromPrice: '60 min / 55 euro',
  },
  {
    overTitle: 'Massage for rest & relaxation',
    title: 'BEAUTY THERAPY',
    filename: 'bgServiceBeauty.webp',
    alt: 'beauty face mask',
    fromPrice: 'Facial treatment 55 euro / 60 min',
    linkTo: '/prices-beauty',
  },
  {
    overTitle: 'Eyebrows beauty',
    title: 'MICRO PIGMENTATION',
    filename: 'bgServiceMicropigmentation',
    alt: 'Eyebrows after micropigmentation',
    fromPrice: '270 euro',
    linkTo: '/prices-micropigmentation',
  },
  {
    overTitle: 'Hair Style',
    title: 'HAIRDRESSER',
    filename: 'bgServiceHairdresser',
    alt: 'Hair styling',
    fromPrice: `Female cut & brushing 40 euro. Male\u00A0cut\u00A030\u00A0euro`,
    linkTo: '/prices-hairdresser',
  },
];

const Services = () => {
  return (
    <section id="services">
      <Container fluid>
        <Row className="services-row">
          {servicesArray.map((service) => {
            return (
              <ServicesImg
                key={nanoid()}
                linkTo={service.linkTo}
                colClassName='services-row__col'
                alt={service.alt}
                filename={service.filename}
                overTitle={service.overTitle}
                title={service.title}
                fromPrice={service.fromPrice}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
