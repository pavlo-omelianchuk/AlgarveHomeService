import React from 'react';

const priceListMassage = [
  {
    name: 'Prices under request',
  },
  // {
  //   name: 'Sports Deep Tissue Massage',
  //   price60: 55,
  //   price80: 70,
  // },
  // {
  //   name: 'Relax Massage',
  //   price60: 55,
  //   price80: 70,
  // },
  // {
  //   name: 'Massage for Couples',
  //   price60: 100,
  //   price80: 125,
  // },
  // {
  //   name: 'Reflexology Massage',
  //   price60: 55,
  //   price80: 70,
  // },
  // {
  //   name: 'Anti-Cellulite Massage',
  //   price60: 55,
  // },
];

const PricesMassage = () => (
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
                  {price60 && ` €`}
                </span>
              </div>
              <p className="price-list-description">
                {price60 && `60 min. `}
                {price60}
                {price60 && ` €`}
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

export default PricesMassage;
