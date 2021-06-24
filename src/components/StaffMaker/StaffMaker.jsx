import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import TitleSmall from '../TitleSmall/TitleSmall';
import ProjectImg from '../Image/ProjectImg';

import 'react-multi-carousel/lib/styles.css';

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 595 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 594, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};

const staffArray = [
  {
    filename: 'Anna​',
    alt: 'Olena',
    title: 'Olena Fox',
    sub: 'Beautician',
  },
  {
    filename: 'TaniaB',
    alt: 'Tania',
    title: 'Olena Fox​',
    sub: 'Beautician',
  },
  {
    filename: 'Eli',
    alt: 'Eli',
    title: 'Tania Bramhs​​',
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

const StaffCarousel = () => {
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
      containerClass="carousel-container"
      // removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {staffArray.map((staff) => {
        return (
          <Fade>
            <div className="staff-wrapper__image">
              <ProjectImg filename={staff.filename} alt={staff.alt} />
            </div>
            <br />
            <Fade bottom duration={1000} delay={100} distance="300px">
              <TitleSmall title={staff.title} sub={staff.sub} />
            </Fade>
          </Fade>
        );
      })}
    </Carousel>
  );
};

export default StaffCarousel;

// https://github.com/YIZHUANG/react-multi-carousel
