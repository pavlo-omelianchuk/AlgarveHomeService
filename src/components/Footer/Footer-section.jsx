import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import FooterImg from '../Image/FooterImg';

const Footer = ({ linkTo, props }) => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Row className="footer-row">
          <Col className="footer-flex" md={4}>
            <div>
              <p className="footer__text">
                Our contacts:
                <br />
                <a href="mailto:info.ahsmb@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i> info.ahsmb@gmail.com
                </a>
                <br />
                <a href="https://api.whatsapp.com/send?phone=+351 963 531 684">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  +351 963 531 684
                </a>
              </p>
            </div>
            <div>
              <hr />
              <p className="footer__text">
                All Rights Reserved{' '}
                <Link
                  id="dev-by"
                  to="/about-us/#staffDanylo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Danylo Hips
                </Link>{' '}
                <br />
                Copyright © 2009 - {new Date().getFullYear()}
              </p>
            </div>
          </Col>
          <Col className="footer-flex" md={4}>
            <span className="back-to-top">
              <Link to={linkTo}>
                <i className="fa fa-angle-up fa" aria-hidden="true" />
              </Link>
            </span>
            <Link to={linkTo}>
              <FooterImg />
            </Link>
            <br />
            <span id="privacy-footer">
              Our {' - '} <Link to={'/privacy-policy'}> Privacy Policy </Link>
              <br />
              <br />
            </span>
          </Col>
          <Col className="footer-flex" md={4}>
            <div>
              <p className="footer__text">
                Follow us:
                <br />
                <span id="share-buttons">
                  <a
                    href="https://www.facebook.com/AlgarveHomeServiceMassageAndBeauty"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/home_service_massage_beauty/" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </span>
              </p>
            </div>
            <div>
              <hr />
              <p className="footer__text">
                Developed by{' '}
                <a
                  id="dev-by"
                  href="https://www.linkedin.com/in/pavlo-justcodeit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palo Criativo ®
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="footer-contacts-wrapper">
            <a href="tel:+351963531684" className="col-xs-3">
              <span className="fa fa-2x fa-mobile-phone"></span>
            </a>
            <a href="https://wa.me/351963531684" data-action="share/whatsapp/share">
              <span className="fa fa-2x fa-whatsapp"></span>
            </a>
            <a
              href="https://www.facebook.com/AlgarveHomeServiceMassageAndBeauty"
              className="col-xs-3"
            >
              <span className="fa fa-2x fa-facebook"></span>
            </a>
            <a href="mailto:info.ahsmb@gmail.com">
              <span className="fa fa-2x fa-at"></span>
            </a>
            <a
              href="https://www.google.com/maps/place/Faro+District/@37.1880758,-8.4756676,9.82z/data=!4m5!3m4!1s0xd0554ee55d1cfef:0x80e2652e12910e45!8m2!3d37.0179538!4d-7.930834"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa fa-2x fa-map-marker"></span>
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
