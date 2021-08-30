import React from 'react';
import PropTypes from 'prop-types';

const PricesMassage = ({ priceListMassage }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListMassage.map((position) => {
        const { title, price60, price90 } = position;
        if (price60) {
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
                  {`60 min. `}
                  {price60}
                  {` €`}
                  {price90 && ` // 90 min. `}
                  {price90}
                  {price90 && ` €`}
                </p>
              </div>
            </li>
          );
        }
      })}
    </ul>
  </>
);
PricesMassage.propTypes = {
  priceListMassage: PropTypes.array,
};
export default PricesMassage;
