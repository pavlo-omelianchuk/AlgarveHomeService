import React from 'react';

const PricesMassage = ({priceListHairdresser}) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListHairdresser.map((position) => {
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
                {/* {price60 && `60 min. `}
                {price60}
                {price60 && ` €`}
                {price80 && ` // 80 min. `}
                {price80}
                {price80 && ` €`} */}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  </>
);

export default PricesMassage;
