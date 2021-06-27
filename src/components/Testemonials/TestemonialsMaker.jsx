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
    message: `I've been here a few times for massages and always leave feeling like a new woman…I wouldn't go anywhere else in the city for a massage. Sincerely, the best massage I've had ever. Great staff and great experience!`,
    sub: 'Beautician',
    img: 'Olena',
    alt: 'Olena',
    name: 'OLENA FOX',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `I've been here a few times for massages and always leave feeling like a new woman…I wouldn't go anywhere else in the city for a massage. Sincerely, the best massage I've had ever. Great staff and great experience!`,
    sub: 'Beautician',
    img: 'Tania',
    alt: 'Tania',
    name: 'TANIA BRAMHS​​​',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `I've been here a few times for massages and always leave feeling like a new woman…I wouldn't go anywhere else in the city for a massage. Sincerely, the best massage I've had ever. Great staff and great experience!`,
    sub: 'Beautician',
    img: 'Eli',
    alt: 'Eli',
    name: 'ELIZABETH MILES',
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
