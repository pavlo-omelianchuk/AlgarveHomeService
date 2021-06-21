import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { StaticQuery, graphql } from 'gatsby';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

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
          allStrapiMessages {
            nodes {
              greetings
              id
            }
          }
        }
      `}
      render={(data) => (
        <>
          {data.allStrapiMessages.nodes.map((res) => (
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
                      {res.greetings || 'Hi, my name is'}{' '}
                      <span className="text-color-main">{name || 'Your Name'}</span>
                      <br />
                      {subtitle || "I'm the Unknown Developer."}
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
                          {cta || 'Know more'}
                        </Link>
                      </span>
                    </p>
                  </Fade>
                </Container>
              </section>
              );
            </div>
          ))}
        </>
      )}
    />
  );
};

export default Header;
