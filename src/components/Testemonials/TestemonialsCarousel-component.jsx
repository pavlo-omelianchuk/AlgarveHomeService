import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TestemonialsMaker from './TestemonialMaker-component';
import TestemonialsData from '../../mock/testemonials.json';

import 'react-multi-carousel/lib/styles.css';
const { testemonials } = TestemonialsData;

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 595 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 594, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0,
  },
};
const imgRegEx = /(\w+\.\w+)/g;

const TestemonialsCarousel = () => {
  return (
    <>
      <div className="testemonials-background-overlay" />
      <Carousel
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsiveCarousel}
        ssr={true}
        infinite
        autoPlay={false}
        containerClass="testemonials-carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="react-carousel-item"
        renderButtonGroupOutside
      >
        {testemonials.map((testemonial) => {
          return (
            <Fade key={nanoid()}>
              <TestemonialsMaker
                overTitle={testemonial.overTitle}
                title={testemonial.title}
                message={testemonial.message}
                img={testemonial.photo.match(imgRegEx)}
                name={testemonial.name}
                alt={testemonial.alt}
              />
            </Fade>
          );
        })}
      </Carousel>
    </>
  );
};

export default TestemonialsCarousel;

// https://github.com/YIZHUANG/react-multi-carousel
