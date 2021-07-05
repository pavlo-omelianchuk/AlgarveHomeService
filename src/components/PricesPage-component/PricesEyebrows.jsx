import React from 'react';
import PricesTableTitle from './PricesTableTitle';

const priceListEyebrows = [
  {
    name: 'Eyebrows micropigmentation',
    price60: 250,
    price80: 90,
  },
  {
    name: 'Eyebrows design',
    price60: 20,
  },
  {
    name: 'Eyebrows design + eyelash tint',
    price60: 30,
  },
];

const PricesEyebrows = () => (
  <>
    <PricesTableTitle className="price-list-section-title" title="Eyebrows" />
    <ul className="pricelist-wrapper">
      {priceListEyebrows.map((position) => {
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

export default PricesEyebrows;
