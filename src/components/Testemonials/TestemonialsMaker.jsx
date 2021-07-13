import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TestemonialsInfoAll from './TestemonialsInfoAll';

import 'react-multi-carousel/lib/styles.css';

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
};

const testemonialsArray = [
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `My thanks to Danylo!  He is a true professional, knows various massage techniques and manual therapy.  during the first treatment session, he identified many trigger points on the body, which he worked on in the future.  The result is excellent, back pain disappeared, movements became free and it became easier to breathe in full volume.`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Hello!  Many thanks to the massage master Olga, Wonderful massage, you immerse yourself in an atmosphere of relaxation and carefree. Sensitive attentive, works on request, paying attention to those areas that require this attention).  This is the best massage in the algarve!  There are only a few such specialists.  I recommend ordering a massage at home.`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA​​​',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `I would like to express my gratitude to Master Tania!  This is a real professional in his field.  She is very attentive, courteous and welcoming.  I want to thank you for the wonderful massage, thanks to which I can relax and enjoy the session.  Thank you so much for the facial massage, my skin is smoother and I am younger).`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Ordered home micropigmentation with Olena specialists.  Regularly, I used massage services.  Recently I found out that there is an appointment for eyebrow micropigmentation to the master Olena.  And of course YES!  I signed up and was very pleased, the procedure is performed very carefully, accurately.  Just delight and a huge gratitude to the highly qualified specialist`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Great staff, friendly people, good prices and excellent work`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Olga is incredibly friendly and accommodating. Her treatments are well priced and she is professional. I would highly recommend her services`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
];

const TestemonialsCarousel = () => {
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots={false}
      responsive={responsiveCarousel}
      infinite
      autoPlay={false}
      autoPlaySpeed={4000}
      containerClass="testemonials-carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="react-carousel-item"
      renderButtonGroupOutside
    >
      {testemonialsArray.map((testemonial) => {
        return (
          <Fade key={nanoid()}>
            <TestemonialsInfoAll
              overTitle={testemonial.overTitle}
              title={testemonial.title}
              message={testemonial.message}
              img={testemonial.img}
              name={testemonial.name}
              alt={testemonial.alt}
            />
          </Fade>
        );
      })}
    </Carousel>
  );
};

export default TestemonialsCarousel;

// https://github.com/YIZHUANG/react-multi-carousel
