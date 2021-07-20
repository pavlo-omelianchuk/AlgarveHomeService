import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import LogoImg from '../Image/LogoImg';

const Footer = ({ linkTo }) => {


  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <Row className="footer-row">
          <Col className="footer-flex" md={4}>
            <div>
              <p className="footer__text">
                <a href="https://api.whatsapp.com/send?phone=+351 925 142 109">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  +351 925 142 109
                </a>
              </p>
              <hr />
            </div>
            <div>
              <p className="footer__text">
                2009 - {new Date().getFullYear()} - All Rights Reserved{' '}
                <a id="dev-by" href="/" target="_blank" rel="noopener noreferrer">
                  Danylo Hips ©
                </a>
              </p>
            </div>
          </Col>
          <Col className="footer-flex" md={4}>
            <span className="back-to-top">
              <Link to={linkTo} smooth duration={1000}>
                <i className="fa fa-angle-up fa" aria-hidden="true" />
              </Link>
            </span>
            <LogoImg link={'#' + linkTo} alt="Logo" filename="logoAMMBTFooter.png" />
          </Col>
          <Col className="footer-flex" md={4}>
            <div>
              <p className="footer__text">
                <a href="mailto:info.ahsmb@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i> info.ahsmb@gmail.com
                </a>
              </p>
              <hr />
            </div>
            <div>
              <p className="footer__text">
                Developed by{' '}
                <a
                  id="dev-by"
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
        <Row>
          <div className="footer-contacts-wrapper">
            <a href="tel:+351925142109" className="col-xs-3">
              <span className="fa fa-2x fa-mobile-phone"></span>
            </a>
            <a href="https://wa.me/351925142109" data-action="share/whatsapp/share">
              <span className="fa fa-2x fa-whatsapp"></span>
            </a>
            {/* <!--<a href="" className="col-xs-3">
                        <span className="fa-instagram"></span>
                    </a>--> */}
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
