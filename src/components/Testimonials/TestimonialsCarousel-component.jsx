import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TestimonialsMaker from './TestimonialMaker-component';
import TestimonialsData from '../../mock/testimonials.json';

import 'react-multi-carousel/lib/styles.css';
const { testimonials } = TestimonialsData;

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

const TestimonialsCarousel = () => (
  <>
    <div className="testimonials-background-overlay" />
    <Carousel
      swipeable
      draggable={false}
      showDots={false}
      responsive={responsiveCarousel}
      ssr={true}
      infinite
      autoPlay={false}
      containerClass="testimonials-carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="react-carousel-item"
      renderButtonGroupOutside
    >
      {testimonials.map((testimonial) => {
        return (
          <Fade key={nanoid()}>
            <TestimonialsMaker
              overTitle={testimonial.overTitle}
              title={testimonial.title}
              message={testimonial.message}
              img={testimonial.photo.match(imgRegEx)}
              name={testimonial.name}
              alt={testimonial.alt}
            />
          </Fade>
        );
      })}
    </Carousel>
  </>
);

export default TestimonialsCarousel;
