import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { headData } from '../mock/data';
import StyledBackground from '../components/Image/HeroImg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';



const PageNotFound = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang} />
        <meta name="description" content="Page not found" />
        <meta
          name="google-site-verification"
          content="9kBdSy0tZrplyDlGnpHdAyuPf8AAGzLSZnBTh9EWd7A"
        />
      </Helmet>
      <StyledBackground
        className="hero-bg"
        filename="bgHeroPoster.jpg"
        alt="Woman getting massage"
        bgContent={
          <section id="hero" className="jumbotron">
            <Container>
              <Fade bottom duration={1000} delay={500} distance="30px">
                <h1 className="hero-title text-center">
                  Sorry, this path does not exist
                  <span role="img" aria-label="emoji">
                    😞
                  </span>
                </h1>
              </Fade>
              <Fade bottom duration={1000} delay={1000} distance="30px">
                <p className="hero-cta justify-content-center">
                  <Link className="cta-btn cta-btn--hero" to="/">
                    Go back
                  </Link>
                </p>
              </Fade>
            </Container>
          </section>
        }
      />
    </>
  );
};

export default PageNotFound;
