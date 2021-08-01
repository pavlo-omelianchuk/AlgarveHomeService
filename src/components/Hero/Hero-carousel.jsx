import React from 'react';
import Carousel from 'react-multi-carousel';
import { Fade, Zoom } from 'react-reveal';
import { nanoid } from 'nanoid';

const responsiveHeroCarousel = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
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
const heroServiceArray = [
  {
    title: ' MASSAGE & BEAUTY THERAPY',
    titleSpecial: 'From Danylo Hips and Company',
    readMoreLink: '/blog',
    makeAnAppointmentLink: '/prices-massage/',
  },
  // {
  //   title: 'Beauty procedures at HOME',
  //   titleSpecial: 'from Tanya',
  //   readMoreLink: '',
  //   makeAnAppointmentLink: '/prices-beauty/',
  // },
  // {
  //   title: 'Micropigmentation at HOME',
  //   titleSpecial: 'from Lena',
  //   readMoreLink: '',
  //   makeAnAppointmentLink: '/prices-micropigmentation/',
  // },
  // {
  //   title: 'Hairdresser at HOME',
  //   titleSpecial: 'from Krissi',
  //   readMoreLink: '',
  //   makeAnAppointmentLink: '/prices-hairdresser/',
  // },
];

const HeroCarousell = () => (
  <Carousel
    swipeable
    // draggable={false}
    showDots
    responsive={responsiveHeroCarousel}
    ssr={true}
    // infinite
    // autoPlay
    // autoPlaySpeed={4000}
    // // keyBoardControl={true}
    // customTransition="all 1s"
    // transitionDuration={1000}
    containerClass="carousel-container"
    arrows={false}
    // // deviceType={this.props.deviceType}
    // dotListClass="custom-dot-list-style"
    itemClass="react-carousel-item"
    renderButtonGroupOutside={true}
    centerMode={false}
  >
    {heroServiceArray.map((service) => (
      <div key={nanoid()}>
        <Fade bottom duration={1500} distance="300px">
          <h1 className="hero-title">{service.title}</h1>
          <h2 className="hero-title hero-title-name text-color-main">{service.titleSpecial}</h2>
        </Fade>
        <div className="hero-buttons-wrapper">
          {service.readMoreLink && (
            <Zoom duration={1000} delay={500}>
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <a href={service.readMoreLink}>Read more</a>
                </span>
              </p>
            </Zoom>
          )}
          <Zoom duration={1000} delay={500}>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <a href={service.makeAnAppointmentLink}>make an appointment</a>
              </span>
            </p>
          </Zoom>
        </div>
      </div>
    ))}
  </Carousel>
);

export default HeroCarousell;

// https://github.com/YIZHUANG/react-multi-carousel
