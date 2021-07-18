import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Row } from 'react-bootstrap';
import ServicesImg from '../Image/ServicesImgMaker';

const servicesArray = [
  {
    linkTo: '/prices-massage',
    colClassName: 'services-row__col',
    filename: 'bgServiceMassage',
    overTitle: 'Manual & excercise therapy',
    title: 'MASSAGE THERAPY',
  },
  {
    linkTo: '/prices-beauty',
    colClassName: 'services-row__col',
    filename: 'bgServiceBeauty',
    overTitle: 'Massage for rest & relaxation',
    title: 'BEAUTY THERAPY',
  },
  {
    linkTo: '/prices-micropigmentation',
    colClassName: 'services-row__col desktop',
    filename: 'bgServiceMicropigmentation',
    overTitle: 'Eyebrows beauty',
    title: 'MICRO- PIGMENTATION',
  },
  {
    linkTo: '/prices-micropigmentation',
    colClassName: 'services-row__col mobile',
    filename: 'bgServiceMicropigmentation',
    overTitle: 'Eyebrows beauty',
    title: 'MICROPIGMENTATION',
  },
  {
    linkTo: '/prices-hairdresser',
    colClassName: 'services-row__col',
    filename: 'bgServiceHairdresser',
    overTitle: 'Hair Style',
    title: 'HAIRDRESSER',
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
                filename={service.filename}
                overTitle={service.overTitle}
                title={service.title}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
