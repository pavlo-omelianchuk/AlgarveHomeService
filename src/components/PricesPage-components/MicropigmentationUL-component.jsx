import React from 'react';
import PropTypes from 'prop-types';

const PricesMicropigmentation = ({ priceListMicropigmentation }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListMicropigmentation.map((position) => {
        const { title, price60, price90 } = position;
        return (
          <li key={title}>
            <div className="price-list-item">
              <div className="price-list-header">
                <span className="price-list-name">{title}</span>
                <span className="price-list-separator" />
                <span className="price-list-price">
                  {price60}
                  {` €`}
                </span>
              </div>
              <p className="price-list-description">
                {price90 && `+ correction after 1-3 months `}
                {price90}
                {price90 && ` €`}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </>
);
PricesMicropigmentation.propTypes = {
  priceListMicropigmentation: PropTypes.array,
};
export default PricesMicropigmentation;
