import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import '../style/main.scss';

const PageNotFound = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang='en' />
        <meta name="description" content="Page not found" />
        <meta
          name="google-site-verification"
          content="9kBdSy0tZrplyDlGnpHdAyuPf8AAGzLSZnBTh9EWd7A"
        />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade>
            <h1 className="hero-title text-center">
              Sorry, this path does not exist
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link to="/">
                <span className="cta-btn cta-btn--hero">Go back</span>
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default PageNotFound;
