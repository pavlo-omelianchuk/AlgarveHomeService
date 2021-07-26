import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TitleSmall from '../Titles/TitleSmall-component';
import StaffImg from '../Image/StaffImg';
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
    filename: 'staffLena',
    alt: 'Micropigmentation Expert Lena',
    title: 'Lena Fox',
    sub: 'Micropigmentation Expert',
  },
  {
    filename: 'staffTania',
    alt: 'Beautician Tania',
    title: 'Tania​​​ Brahms',
    sub: 'Beautician',
  },
  {
    filename: 'staffKatya',
    alt: 'Massure Katya',
    title: 'Katya​​',
    sub: 'Massure',
  },
  {
    filename: 'staffAnna',
    alt: 'Massure Anna',
    title: 'Anna',
    sub: 'Massure',
  },
  {
    filename: 'staffLyuda',
    alt: 'Reflexology Therapist Lyuda',
    title: 'Lyuda',
    sub: 'Reflexology Therapist',
  },
];

const StaffCarousel = () => (
  <Carousel
    swipeable
    draggable={false}
    showDots
    responsive={responsiveCarousel}
    // ssr={true} // means to render carousel on server-side.
    infinite
    autoPlay
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
    {staffArray.map((staff) => (
      <Fade key={nanoid()}>
        <div className="staff-wrapper__image">
          <StaffImg filename={staff.filename} alt={staff.alt} />
        </div>
        <br />
        <Fade bottom duration={800} distance="300px">
          <TitleSmall title={staff.title} sub={staff.sub} />
        </Fade>
      </Fade>
    ))}
  </Carousel>
);

export default StaffCarousel;

// https://github.com/YIZHUANG/react-multi-carousel
