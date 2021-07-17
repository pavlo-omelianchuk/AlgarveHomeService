import React from 'react';

const PricesBeauty = ({ priceListBeauty }) => (
  <>
    <ul className="pricelist-wrapper">
      {priceListBeauty.map((position) => {
        const { name, price, time } = position;
        return (
          <li key={name}>
            <div className="price-list-item">
              <div className="price-list-header">
                <span className="price-list-name">{name}</span>
                <span className="price-list-separator" />
                <span className="price-list-price">
                  {price}
                  {price && ` €`}
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

export default PricesBeauty;
