import React from 'react';
import PropTypes from 'prop-types';

const PricesMassage = ({ priceListMassage }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListMassage.map((position) => {
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
                {`60 min. `}
                {price60}
                {` €`}
                {price80 && ` // 80 min. `}
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
PricesMassage.propTypes = {
  priceListMassage: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};
export default PricesMassage;
