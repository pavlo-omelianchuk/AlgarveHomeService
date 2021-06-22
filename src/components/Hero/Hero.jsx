import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
import { Link } from 'react-scroll';
import { StaticQuery, graphql } from 'gatsby';
import pinkComponent from '../../images/component2-pink.png';

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          strapiHero {
            MainPhoto {
              formats {
                large {
                  url
                }
              }
            }
            Title
            Subtitle
            TitleName
            Button
          }
        }
      `}
      render={(data) => (
        <>
          <div>
            <section id="hero" className="jumbotron">
              <Container>
                <div id="hero__overlay" />
                {/* <img src={'http://localhost:1337' + data.strapiHero.MainPhoto.formats.large.url} alt="hero-background-image" /> */}
                <Fade big duration={4000}>
                  <img src={pinkComponent} alt="pink component" />
                </Fade>
                <Fade bottom distance="30px">
                  <h3 className="hero-subtitle">{data.strapiHero.Subtitle}</h3>
                </Fade>
                <Fade bottom duration={4000} distance="300px">
                  <h1 className="hero-title">{data.strapiHero.Title}</h1>
                  <h2 className="hero-title hero-title-name text-color-main">
                    {` ${data.strapiHero.TitleName}`}
                  </h2>
                </Fade>
                <Zoom duration={1000} delay={2000}>
                  <p className="hero-cta">
                    <span className="cta-btn cta-btn--hero">
                      <Link to="/" smooth duration={1000}>
                        {data.strapiHero.Button}
                        {/* <a href="https://api.whatsapp.com/send?phone=+351 925 142 109">
                        <i className="fa fa-whatsapp"
                          ariaHidden="true"
                        ></i>
                      </a> */}
                      </Link>
                    </span>
                  </p>
                </Zoom>
              </Container>
            </section>
          </div>
        </>
      )}
    />
  );
};

export default Hero;
