import React from 'react';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';
import TestemonialsInfoAll from './TestemonialCreator-component';

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
    message: `I would like to express my thanks to masseur Olga. Massage was wonderful, I was able to completely relax and unwind. Olga works exactly with those areas which required the most attention. I can say with confidence that this is the best massage in Algarve! I only know a few specialists a high class like Olga. Would highly recommend to order a home treatment.`,
    img: 'testemonialsSandraDelta',
    alt: 'Sandra Delta',
    name: 'SANDRA DELTA',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Great service for a pregnant woman. Gentle, careful and takes her time. Meticulous, tracking every hair. Very enjoyable moment. Thanks.`,
    img: 'testemonialsAicha',
    alt: 'testemonialsAicha',
    name: 'AICHA, beauty session.',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `I would like to express my gratitude to Tanya! She is a real professional. I found her very warm, attentive and welcoming. I would like to say thank you for the wonderful massage, I was enjoying a deep relaxation. Also many thanks for the facials, my skin feels delightfully soft and I look younger after a treatment`,
    img: 'testemonialsEmily',
    alt: 'testemonialsEmily',
    name: 'EMILY, massage session.​​​',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `I booked a micropigmentation with Lena to be done at my house. I get massage treatments regularly. When I saw an available appointment for eyebrow micropigmentation with Lena, I said YES please! I went for it and was very pleased as the procedure was performed very carefully and accurately. I feel delighted and sending a huge gratitude to the highly qualified specialist`,
    img: 'testemonialsSophie',
    alt: 'testemonialsSophie',
    name: 'SOPHIE, micropigmentation',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Great staff, friendly people, good prices and excellent work`,
    img: 'testemonialsClaire',
    alt: 'testemonialsClaire',
    name: 'CLAIRE, haircut session.',
  },
  {
    overTitle: 'Testemonials',
    title: 'WHAT PEOPLE SAY ABOUT US',
    message: `Olga is incredibly friendly and accommodating. Her treatments are well priced and she is professional. I would highly recommend her services`,
    img: 'testemonialsArthur',
    alt: 'testemonialsArthur',
    name: 'ARTHUR, massage session.',
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
