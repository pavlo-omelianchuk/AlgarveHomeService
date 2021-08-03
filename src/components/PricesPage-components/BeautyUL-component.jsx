import React from 'react';
import PropTypes from 'prop-types';

const PricesBeauty = ({ priceListBeauty }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListBeauty.map((position) => {
        const { name, price60, time } = position;
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
                {time && `Procedure time: `}
                {time}
                {time && ` min`}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </>
);
PricesBeauty.propTypes = {
  priceListBeauty: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};
export default PricesBeauty;
