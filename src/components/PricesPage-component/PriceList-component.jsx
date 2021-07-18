import React, { useState } from 'react';
import PricesMassage from './MassageUL-component';
import PricesBeauty from './BeautyUL-component';
import PricesMicropigmentation from './MicropigmentationUL-component';
import PricesHairdresser from './HairdresserUL-component';
import Form from '../Form/Form-section';
import { Tabs, Tab } from 'react-bootstrap';

const customTab = (entrance) => {
  //   const selectedTab =
  //     entrance.entrance.entrance === 'micropigmentation'
  //       ? 'micropigmentation'
  //       : entrance.entrance.entrance === 'beauty'
  //       ? 'beauty'
  //       : entrance.entrance.entrance === 'hairdresser'
  //       ? 'hairdresser'
  //       : 'massage';
  if (entrance.entrance.entrance === 'micropigmentation') {
    const selectedTab = 'micropigmentation';
    return selectedTab;
  } else if (entrance.entrance.entrance === 'beauty') {
    const selectedTab = 'beauty';
    return selectedTab;
  } else if (entrance.entrance.entrance === 'hairdresser') {
    const selectedTab = 'hairdresser';
    return selectedTab;
  } else {
    const selectedTab = 'massage';
    return selectedTab;
  }
};

const PricesTabs = (entrance) => {
  //Price List of all Procedures
  const priceListMassage = [
    {
      name: 'Therapeutic Massage',
      price60: '55',
      price80: '70',
    },
    {
      name: 'Sports Deep Tissue Massage',
      price60: '55',
      price80: '70',
    },
    {
      name: 'Relax Massage',
      price60: '55',
      price80: '70',
    },
    {
      name: 'Massage for Couples',
      price60: '100',
      price80: '125',
    },
    {
      name: 'Reflexology Massage',
      price60: '55',
      price80: '70',
    },
    {
      name: 'Anti-Cellulite Massage',
      price60: '55',
    },
  ];

  const priceListMicropigmentation = [
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
  const pricelistBeauty = [
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
      name: 'Waxing Outline eyes',
      price: 10,
    },
    {
      name: 'Waxing Face',
      price: 10,
    },
    {
      name: 'Waxing Fluff',
      price: 4,
    },
    {
      name: 'Waxing Underarms',
      price: 5,
    },
    {
      name: 'Waxing Normal groin / belly',
      price: 10,
    },
    {
      name: 'Waxing Total groin',
      price: 16,
    },
    {
      name: 'Waxing Half leg',
      price: 9,
    },
    {
      name: 'Waxing Full leg',
      price: 16,
    },
    {
      name: 'Waxing Half arm',
      price: 8,
    },
    {
      name: 'Waxing Full arm',
      price: 14,
    },
  ];
  const priceListHairdresser = [
    {
      name: `Men's Haircut`,
      price60: 'Under request',
    },
    {
      name: `Women's Haircut`,
      price60: 'Under request',
    },
    {
      name: 'Root Colouring',
      price60: 'Under request',
    },
    {
      name: 'Highlights',
      price60: 'Under request',
    },
    {
      name: 'Evening Updo',
      price60: 'Under request',
    },
    {
      name: 'Haircut For children',
      price60: 'Under request',
    },
  ];

  const [key, setKey] = useState(customTab({ entrance }));

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab tabClassName="price-list-section-title" eventKey="massage" title="Massage">
        {key === 'massage' ? (
          <>
            <PricesMassage priceListMassage={priceListMassage} />
            <Form
              treatmentsMassage={priceListMassage}
              treatmentsMicropigmentation={priceListMicropigmentation}
              treatmentsBeauty={pricelistBeauty}
              treatmentsHairdresser={priceListHairdresser}
            />
          </>
        ) : null}
      </Tab>
      <Tab
        tabClassName="price-list-section-title"
        eventKey="micropigmentation"
        title="Micropigmentation"
      >
        {key === 'micropigmentation' ? (
          <>
            <PricesMicropigmentation priceListMicropigmentation={priceListMicropigmentation} />
            <Form treatmentsMicropigmentation={priceListMicropigmentation} />
          </>
        ) : null}
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="beauty" title="Beauty">
        {key === 'beauty' ? (
          <>
            <PricesBeauty priceListBeauty={pricelistBeauty} />
            <Form treatmentsBeauty={pricelistBeauty} />
          </>
        ) : null}
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="hairdresser" title="Hairdresser">
        {key === 'hairdresser' ? (
          <>
            <PricesHairdresser priceListHairdresser={priceListHairdresser} />
            <Form treatmentsHairdresser={priceListHairdresser} />
          </>
        ) : null}
      </Tab>
    </Tabs>
  );
};

export default PricesTabs;
