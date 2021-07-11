import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
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
    items: 4,
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
    filename: 'Katya',
    alt: 'Katya',
    title: 'KATYA VODONAEVA​​',
    sub: 'Orthopaedic Doctor',
  },
  {
    filename: 'AnnaG',
    alt: 'Anna',
    title: 'Anna German',
    sub: 'Massure',
  },
];

const StaffCarousel = () => {
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots={true}
      responsive={responsiveCarousel}
      // ssr={true} // means to render carousel on server-side.
      infinite
      autoPlay={true}
      autoPlaySpeed={4000}
      // keyBoardControl={true}
      // customTransition="all 5"
      // transitionDuration={5000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="react-carousel-item"
      // renderButtonGroupOutside={true}
      // centerMode={true}
    >
      {staffArray.map((staff) => {
        return (
          <Fade key={nanoid()}>
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
