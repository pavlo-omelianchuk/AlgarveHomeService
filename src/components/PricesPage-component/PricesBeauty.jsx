import React from 'react';
import PricesTableTitle from './PricesTableTitle';

const priceListEstetic = [
  {
    name: 'Deep face cleansing',
    price: 40,
    time: 90,
  },
  {
    name: 'Back cleaning',
    price: 50,
    time: 100,
  },
  {
    name: 'Chemical peel',
    price: '50 - 120',
  },
  {
    name: 'Back scrub',
    price: 25,
    time: 30,
  },
  {
    name: 'Facial massage',
    price: 20,
    time: 40,
  },
  {
    name: 'Lymphatic facial massage',
    price: 20,
  },
  {
    name: 'Alginate mask',
    price: 35,
    time: 50,
  },
  {
    name: 'Microneedling + collagen',
    price: 50,
    time: 60,
  },
  {
    name: 'Galvanophoresis, Ionophoresis – Hydration',
    price: 39,
    time: 40,
  },
  {
    name: 'Ultrasonic radar hifu',
    price: 40,
    time: 60,
  },
  {
    name: 'Needles-free mesotherapy (ionophoresis)',
    price: 50,
    time: '1:40',
  },
  {
    name: 'Face microcurrent',
    price: 40,
    time: 60,
  },
  {
    name: 'Pressotherapy',
    price: 20,
    time: 30,
  },
  {
    name: 'Darsonval for face',
    price: 9,
    time: 15,
  },
  {
    name: 'Darsonval for hair',
    price: 15,
    time: 15,
  },
  {
    name: 'Anticouperosis program',
    price: 35,
    time: 45,
  },
  {
    name: 'Rejuvenation program 40+ 50+',
    price: 39,
    time: 45,
  },
  {
    name: 'Magiray beauty peel puree',
    price: 50,
    time: '1:40',
  },
  {
    name: 'WAXING',
  },
  {
    name: 'Outline eyes',
    price: 10,
  },
  {
    name: 'Face',
    price: 10,
  },
  {
    name: 'Fluff',
    price: 4,
  },
  {
    name: 'Underarms',
    price: 5,
  },
  {
    name: 'Normal groin / belly',
    price: 10,
  },
  {
    name: 'Total groin',
    price: 16,
  },
  {
    name: 'Half leg',
    price: 9,
  },
  {
    name: 'Full leg',
    price: 16,
  },
  {
    name: 'Half arm',
    price: 8,
  },
  {
    name: 'Full arm',
    price: 14,
  },
];

const PricesBeauty = () => (
  <>
    <PricesTableTitle className="price-list-section-title" title="Estetic" />
    <ul className="pricelist-wrapper">
      {priceListEstetic.map((position) => {
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
