import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const Footer = ({ linkTo }) => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Row className="footer-row">
          <Col className="footer-flex" md={4}>
            <span className="back-to-top">
              <Link to={linkTo} smooth duration={1000}>
                <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
              </Link>
            </span>
            <LogoImg alt="Logo" filename="Asset2.png" />
            <div className="social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || '/'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>
            <div>
              <hr />
              <p className="footer__text">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                <br />© {new Date().getFullYear()} - Developed by{' '}
                <a
                  href="https://palocriativo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palo Criativo ®
                </a>
              </p>
            </div>
          </Col>
          <Col className="footer-flex" md={4}>
            <span className="back-to-top">
              <Link to={linkTo} smooth duration={1000}>
                <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
              </Link>
            </span>
            <LogoImg link={'#'+linkTo} alt="Logo" filename="Asset2.png" />
            <div className="social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || '/'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>
            <div>
              <hr />
              <p className="footer__text">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                <br />© {new Date().getFullYear()} - Developed by{' '}
                <a
                  href="https://palocriativo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palo Criativo ®
                </a>
              </p>
            </div>
          </Col>
          <Col className="footer-flex" md={4}>
            <span className="back-to-top">
              <Link to={linkTo} smooth duration={1000}>
                <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
              </Link>
            </span>
            <LogoImg alt="Logo" filename="Asset2.png" />
            <div className="social-links">
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || '/'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                })}
            </div>
            <div>
              <hr />
              <p className="footer__text">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                <br />© {new Date().getFullYear()} - Developed by{' '}
                <a
                  href="https://palocriativo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palo Criativo ®
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
