import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Row } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImgMaker';

const servicesArray = [
  {
    alt: 'Back massage',
    linkTo: '/prices-massage',
    colClassName: 'services-row__col',
    filename: 'bgServiceMassage',
    overTitle: 'Manual & excercise therapy',
    title: 'MASSAGE THERAPY',
    fromPrice: '60 min / 55 euro',
  },
  {
    alt: 'beauty face mask',
    linkTo: '/prices-beauty',
    colClassName: 'services-row__col',
    filename: 'bgServiceBeauty',
    overTitle: 'Massage for rest & relaxation',
    title: 'BEAUTY THERAPY',
    fromPrice: 'Facial treatment 55 euro / 60 min',
  },
  {
    alt: 'Eyebrows after micropigmentation',
    linkTo: '/prices-micropigmentation',
    colClassName: 'services-row__col',
    filename: 'bgServiceMicropigmentation',
    overTitle: 'Eyebrows beauty',
    title: 'MICRO PIGMENTATION',
    fromPrice: '270 euro',
  },
  // {
  //   alt: 'Eyebrows after micropigmentation',
  //   linkTo: '/prices-micropigmentation',
  //   colClassName: 'services-row__col mobile',
  //   filename: 'bgServiceMicropigmentation',
  //   overTitle: 'Eyebrows beauty',
  //   title: 'MICROPIGMENTATION',
  // },
  {
    alt: 'Hair styling',
    linkTo: '/prices-hairdresser',
    colClassName: 'services-row__col',
    filename: 'bgServiceHairdresser',
    overTitle: 'Hair Style',
    title: 'HAIRDRESSER',
    fromPrice: `Female cut & brushing 40 euro. Male\u00A0cut\u00A030\u00A0euro`,
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
                colClassName={service.colClassName}
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
