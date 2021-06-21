import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { StaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          strapiHero {
            Button
            Subtitle
            Title
            TitleName
          }
        }
      `}
      render={(data) => (
        <>
          <div>
            <section id="hero" className="jumbotron">
              <Container>
                <div id="hero__overlay" />
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <h1 className="hero-title">
                    {data.strapiHero.Title || 'Hi, my name is'}{' '}
                    <span className="text-color-main">
                      {data.strapiHero.TitleName || 'Your Name'}
                    </span>
                    <br />
                    {data.strapiHero.Subtitle || "I'm the Unknown Developer."}
                  </h1>
                </Fade>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <p className="hero-cta">
                    <span className="cta-btn cta-btn--hero">
                      <Link to="about" smooth duration={1000}>
                        {data.strapiHero.Button || 'Know more'}
                      </Link>
                    </span>
                  </p>
                </Fade>
              </Container>
            </section>
            );
          </div>
          )
        </>
      )}
    />
  );
};

export default Hero;
