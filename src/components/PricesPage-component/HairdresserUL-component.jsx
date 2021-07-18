import React from 'react';
import PropTypes from 'prop-types';

const PricesHairdresser = ({priceListHairdresser}) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListHairdresser.map((position) => {
        const { name, price60 } = position;
        return (
          <li key={name}>
            <div className="price-list-item">
              <div className="price-list-header">
                <span className="price-list-name">{name}</span>
                <span className="price-list-separator" />
                <span className="price-list-price">
                  {price60}
                  {price60 && ` €`}
                </span>
              </div>
              <p className="price-list-description">
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </>
);
PricesHairdresser.propTypes = {
  priceListHairdresser: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
export default PricesHairdresser;
