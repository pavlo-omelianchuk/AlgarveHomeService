import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import PricesTableTitle from './PricesTableTitle';

const priceListMassage = [
  {
    name: 'Therapeutic massage',
    price60: 55,
    price80: 70,
  },
  {
    name: 'Sports Massage',
    price60: 55,
    price80: 70,
  },
  {
    name: 'Relax Massage',
    price60: 55,
    price80: 70,
  },
  {
    name: ' Massage for couples',
    price60: 100,
    price80: 125,
  },
];
const PriceListWrapper = ({ children }) => <ul className="pricelist-wrapper">{children}</ul>;

const PricesTable = () => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <PricesTableTitle className="price-list-section-title" title="Massage" />
    <PriceListWrapper>
      {priceListMassage.map((position) => {
        const { name, price60, price80 } = position;
        return (
          <li>
            <div className="price-list-item">
              <div className="price-list-header">
                <span className="price-list-name">{name}</span>
                <span className="price-list-separator" />
                <span className="price-list-price">
                  {price60}
                  {` €`}
                </span>
              </div>
              <p className="price-list-description">
                {`60 min. `}
                {price60}
                {` // 80 min. `}
                {price80}
              </p>
            </div>
          </li>
        );
      })}
    </PriceListWrapper>
  </Fade>
);

PriceListWrapper.propTypes = {
  children: PropTypes.element,
};

export default PricesTable;
