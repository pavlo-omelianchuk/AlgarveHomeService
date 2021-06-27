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
    filename: 'Olena',
    alt: 'Olena',
    title: 'Olena Fox',
    sub: 'Beautician',
  },
  {
    filename: 'TaniaBr',
    alt: 'Tania',
    title: 'Tania Bramhs​​​',
    sub: 'Beautician',
  },
  {
    filename: 'Eli',
    alt: 'Eli',
    title: 'ELIZABETH Mike',
    sub: 'Beautician',
  },
  {
    filename: 'mary',
    alt: 'Mary',
    title: 'mary Whinks',
    sub: 'Hairdresses',
  },
  {
    filename: 'Nansy',
    alt: 'Nansy',
    title: 'NANCY SMITHEY​​',
    sub: 'Orthopaedic Doctor',
  },
];

const TestemonialsCarousel = () => {
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots={false}
      responsive={responsiveCarousel}
      // ssr={true} // means to render carousel on server-side.
      infinite
      autoPlay={false}
      autoPlaySpeed={4000}
      // keyBoardControl={true}
      // customTransition="all 5"
      // transitionDuration={5000}
      containerClass="testemonials-carousel-container"
      // removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="react-carousel-item"
      renderButtonGroupOutside
      // centerMode={true}
    >
      {testemonialsArray.map((testemonial) => {
        return (
          <Fade key={nanoid()}>
            <Fade bottom duration={1000} delay={100} distance="300px">
              <TestemonialsInfoAll title={testemonial.title} sub={testemonial.sub} />
            </Fade>
          </Fade>
        );
      })}
    </Carousel>
  );
};

export default TestemonialsCarousel;

// https://github.com/YIZHUANG/react-multi-carousel
