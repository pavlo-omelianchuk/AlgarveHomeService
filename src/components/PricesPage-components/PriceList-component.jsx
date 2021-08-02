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
      name: 'Therapeutic Massage 60min',
      price60: '55',
      price90: '70',
    },
    {
      name: 'Therapeutic Massage 90min',
      price90: '70',
    },
    {
      name: 'Sports Deep Tissue Massage 60min',
      price60: '55',
      price90: '70',
    },
    {
      name: 'Sports Deep Tissue Massage 90min',
      price90: '70',
    },
    {
      name: 'Relax Massage 60min',
      price60: '55',
      price90: '70',
    },
    {
      name: 'Relax Massage 90min',
      price90: '70',
    },
    {
      name: 'Massage for Couples 60min',
      price60: '100',
      price90: '125',
    },
    {
      name: 'Massage for Couples 90min',
      price90: '125',
    },
    {
      name: 'Reflexology Massage 60min',
      price60: '55',
      price90: '70',
    },
    {
      name: 'Reflexology Massage 90min',
      price90: '70',
    },
    {
      name: 'Anti-Cellulite Massage 60min',
      price60: '55',
    },
  ];

  const priceListMicropigmentation = [
    {
      name: 'Eyebrows micropigmentation',
      price60: 270,
      price90: 90,
    },
    {
      name: 'Eyebrows design',
      price60: 40,
    },
    {
      name: 'Eyebrows design + eyelash tint',
      price60: 50,
    },
  ];
  const pricelistBeauty = [
    {
      name: 'Deep face cleansing',
      price60: 80,
      time: 90,
    },
    {
      name: 'Chemical peeling summer',
      price60: '120',
    },
    {
      name: 'Chemical peeling winter',
      price60: '75',
    },
    {
      name: 'Facial treatment',
      price60: 55,
      time: 60,
    },
    {
      name: 'Lymphatic facial massage',
      price60: 80,
      time: 60,
    },
    {
      name: 'Dermapen + Coctail (Ampoules)',
      price60: 90,
      time: 60,
    },
    {
      name: 'Dermapen + Hyaluronic acid/ Colagen/ Mask',
      price60: 150,
      time: 90,
    },
    {
      name: 'Galvanophoresis, Ionophoresis – Hydration',
      price60: 75,
      time: 50,
    },
    {
      name: 'Ultrasonic radar hifu',
      price60: 85,
      time: 60,
    },
    {
      name: 'Needles-free mesotherapy (ionophoresis)',
      price60: 75,
      time: 70,
    },
    {
      name: 'Face microcurrent',
      price60: 65,
      time: 60,
    },
    {
      name: 'Pressotherapy',
      price60: 50,
      time: 30,
    },
    {
      name: 'Carboxytherapy',
      price60: 65,
      time: 50,
    },
    {
      name: 'Anticouperosis program',
      price60: 65,
      time: 60,
    },
    {
      name: 'Rejuvenation program 40+ 50+',
      price60: 70,
      time: 60,
    },
    {
      name: 'Magiray beauty peel puree',
      price60: 65,
      time: 60,
    },
    {
      name: 'Waxing Outline eyes',
      price60: 10,
    },
    {
      name: 'Waxing Face',
      price60: 30,
    },
    {
      name: 'Waxing Upper Lip',
      price60: 15,
    },
    {
      name: 'Under arms wax',
      price60: 20,
    },
    {
      name: 'Full bikini wax',
      price60: 40,
    },
    {
      name: 'Half leg Wax',
      price60: 30,
    },
    {
      name: 'Full leg Wax',
      price60: 50,
    },
  ];
  const priceListHairdresser = [
    {
      name: `Male cut`,
      price60: 30,
    },
    {
      name: `Female cut & brushing`,
      price60: 40,
    },
  ];

  const [key, setKey] = useState(customTab({ entrance }));

  return (
    <>
      <h5 style={{ textAlign: 'left' }}>*Choose section and fill up form request</h5>
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab tabClassName="price-list-section-title" eventKey="massage" title="Massage">
          {key === 'massage' ? (
            <>
              <PricesMassage priceListMassage={priceListMassage} />
              <Form treatmentsMassage={priceListMassage} />
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
    </>
  );
};

export default PricesTabs;
