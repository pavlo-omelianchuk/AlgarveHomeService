import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import TestimonialImg from '../Image/TestimonialImg';
import PinkImg from '../Image/StaffPinkImg';

const TestimonialsMaker = ({ overTitle, title, message, img, alt, name }) => (
  <Fade bottom duration={1000} distance="500px">
    <div>
      <div>
        <h3 className="testimonials-overtitle">{overTitle}</h3>
        <h3 className="section-title-small">{title}</h3>
        <PinkImg alt="Logo" filename="component3-pink.png" />
      </div>
      <br />
      <div>
        <p className="testimonials-message">{message}</p>
        <div className="testimonials-person">
          <TestimonialImg alt={alt} filename={img} />
          <h6 className="testimonials-person-name">{name}</h6>
        </div>
      </div>
      <br />
      <p className="hero-cta">
        <a
          className="desktop"
          href="https://www.google.com/search?q=Algarve%20home%20service%20massage%20and%20beauty&oq=Algarve+home+service+massage+and+beauty&aqs=chrome..69i57j69i60.686j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&sxsrf=AOaemvLy_CDajgjVUkU3lrNrBDrh1sP8og:1630334233458&rflfq=1&num=10&rldimm=4914715737978429247&lqi=CidBbGdhcnZlIGhvbWUgc2VydmljZSBtYXNzYWdlIGFuZCBiZWF1dHlaKSInYWxnYXJ2ZSBob21lIHNlcnZpY2UgbWFzc2FnZSBhbmQgYmVhdXR5kgERbWFzc2FnZV90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmhOMk5JZWpCM1JSQUKqAScQASojIh9ob21lIHNlcnZpY2UgbWFzc2FnZSBhbmQgYmVhdXR5KAA&ved=2ahUKEwiQruam_NjyAhV08uAKHTqeCbQQvS4wAHoECBMQKw&rlst=f#rlfi=hd:;si:4914715737978429247,l,CidBbGdhcnZlIGhvbWUgc2VydmljZSBtYXNzYWdlIGFuZCBiZWF1dHlaKSInYWxnYXJ2ZSBob21lIHNlcnZpY2UgbWFzc2FnZSBhbmQgYmVhdXR5kgERbWFzc2FnZV90aGVyYXBpc3SaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmhOMk5JZWpCM1JSQUKqAScQASojIh9ob21lIHNlcnZpY2UgbWFzc2FnZSBhbmQgYmVhdXR5KAA;mv:[[37.1278252,-7.583019],[37.0210653,-8.9137995]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
          target="_blank"
        >
          <span className="google-review cta-btn cta-btn--hero"> Write a review</span>
        <br />
          <div
            style={{ fontSize: '0.7em' }}>
            ***or see others in Google
          </div>
        </a>
        <a className="mobile" href="https://g.co/kgs/TSXpaE" target="_blank">
          <span className="google-review cta-btn cta-btn--hero"> Write a review</span>
          <div
            style={{ fontSize: '0.7em' }}>
            ***or see others in Google
          </div>
        </a>
      </p>
    </div>
  </Fade>
);

TestimonialsMaker.propTypes = {
  overTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialsMaker;
