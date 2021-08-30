import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TitleSmall from '../Titles/TitleSmall-component';
import StaffImg from '../Image/AboutImg';
import 'react-multi-carousel/lib/styles.css';
import aboutUsData from '../../mock/about_us.json';

import { Link } from 'gatsby';

const { team } = aboutUsData;

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

const link = (id) => {
  return `/about-us/#${id}`;
};

const imgRegEx = /(\w+\.\w+)/g;

const StaffCarousel = () => (
  <Carousel
    swipeable
    draggable={false}
    showDots
    responsive={responsiveCarousel}
    ssr={true} 
    infinite
    autoPlay
    autoPlaySpeed={4000}
    containerClass="carousel-container"
    removeArrowOnDeviceType={['tablet', 'mobile']}
    dotListClass="custom-dot-list-style"
    itemClass="react-carousel-item"
  >
    {team.map((staff) => (
      <Fade duration={1000} distance="500px" key={nanoid()}>
        <Link to={link(staff.photo.match(imgRegEx))}>
          <div className="staff-wrapper__image">
            <StaffImg filename={staff.photo.match(imgRegEx)} alt={staff.alt} />
          </div>
          <br />
          <Fade bottom duration={800} distance="300px">
            <TitleSmall title={staff.name} sub={staff.position} />
          </Fade>
        </Link>
      </Fade>
    ))}
  </Carousel>
);

export default StaffCarousel;


