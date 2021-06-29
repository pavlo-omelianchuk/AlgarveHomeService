import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import PageWrapepr from '../layout/pageWrapper';

const IndexPage = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <PageWrapepr>
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              New prices page
              <span role="img" aria-label="emoji">
                :)
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--contact" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </PageWrapepr>
    </>
  );
};

export default IndexPage;
