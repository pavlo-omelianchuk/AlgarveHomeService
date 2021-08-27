import React from 'react';
import PropTypes from 'prop-types';

const PricesBeauty = ({ priceListBeauty }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListBeauty.map((position) => {
        const { title, price60, time } = position;
        return (
          <li key={title}>
            <div className="price-list-item">
              <div className="price-list-header">
                <span className="price-list-name">{title}</span>
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
