import React from 'react';
import PropTypes from 'prop-types';

const PricesMicropigmentation = ({ priceListMicropigmentation }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListMicropigmentation.map((position) => {
        const { name, price60, price80 } = position;
        return (
          <li key={name}>
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
                {price80 && `+ correction after 1-3 months `}
                {price80}
                {price80 && ` €`}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </>
);
PricesMicropigmentation.propTypes = {
  priceListMicropigmentation: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
export default PricesMicropigmentation;
