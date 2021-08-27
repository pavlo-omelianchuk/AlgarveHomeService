import React, { useState } from 'react';
import PricesMassage from './MassageUL-component';
import PricesBeauty from './BeautyUL-component';
import PricesMicropigmentation from './MicropigmentationUL-component';
import PricesHairdresser from './HairdresserUL-component';
import Form from '../Form/Form-section';
import { Tabs, Tab } from 'react-bootstrap';

const customTab = (entrance) => {
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
      title: 'Therapeutic Massage 60min',
      time60: '60 min.',
      price60: '55',
      time90: '// 90 min.',
      price90: '70',
    },
    {
      title: 'Therapeutic Massage 90min',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Sports Deep Tissue Massage 60min',
      price60: '55',
      time60: '60 min.',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Sports Deep Tissue Massage 90min',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Relax Massage 60min',
      price60: '55',
      time60: '60 min.',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Relax Massage 90min',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Massage for Couples 60min',
      price60: '100',
      time60: '60 min.',
      price90: '125',
      time90: '// 90 min.',
    },
    {
      title: 'Massage for Couples 90min',
      price90: '125',
      time90: '// 90 min.',
    },
    {
      title: 'Reflexology Massage 60min',
      price60: '55',
      time60: '60 min.',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Reflexology Massage 90min',
      price90: '70',
      time90: '// 90 min.',
    },
    {
      title: 'Anti-Cellulite Massage 60min',
      price60: '55',
      time60: '60 min.',
    },
  ];

  const priceListMicropigmentation = [
    {
      title: 'Eyebrows micropigmentation',
      price60: 270,
      price90: 90,
    },
    {
      title: 'Eyebrows design',
      price60: 40,
    },
    {
      title: 'Eyebrows design + eyelash tint',
      price60: 50,
    },
  ];
  const pricelistBeauty = [
    {
      title: 'Deep face cleansing',
      time: 90,
      price60: 80,
    },
    {
      title: 'Chemical peeling summer',
      price60: '120',
    },
    {
      title: 'Chemical peeling winter',
      price60: '75',
    },
    {
      title: 'Facial treatment',
      time: 60,
      price60: 55,
    },
    {
      title: 'Lymphatic facial massage',
      time: 60,
      price60: 80,
    },
    {
      title: 'Dermapen + Coctail (Ampoules)',
      time: 60,
      price60: 90,
    },
    {
      title: 'Dermapen + Hyaluronic acid/ Colagen/ Mask',
      time: 90,
      price60: 150,
    },
    {
      title: 'Galvanophoresis, Ionophoresis – Hydration',
      time: 50,
      price60: 75,
    },
    {
      title: 'Ultrasonic radar hifu',
      time: 60,
      price60: 85,
    },
    {
      title: 'Needles-free mesotherapy (ionophoresis)',
      time: 70,
      price60: 75,
    },
    {
      title: 'Face microcurrent',
      time: 60,
      price60: 65,
    },
    {
      title: 'Pressotherapy',
      time: 30,
      price60: 50,
    },
    {
      title: 'Carboxytherapy',
      time: 50,
      price60: 65,
    },
    {
      title: 'Anticouperosis program',
      time: 60,
      price60: 65,
    },
    {
      title: 'Rejuvenation program 40+ 50+',
      time: 60,
      price60: 70,
    },
    {
      title: 'Magiray beauty peel puree',
      time: 60,
      price60: 65,
    },
    {
      title: 'Waxing Outline eyes',
      price60: 10,
    },
    {
      title: 'Waxing Face',
      price60: 30,
    },
    {
      title: 'Waxing Upper Lip',
      price60: 15,
    },
    {
      title: 'Under arms wax',
      price60: 20,
    },
    {
      title: 'Full bikini wax',
      price60: 40,
    },
    {
      title: 'Half leg Wax',
      price60: 30,
    },
    {
      title: 'Full leg Wax',
      price60: 50,
    },
  ];
  const priceListHairdresser = [
    {
      title: `Male cut`,
      price60: 30,
    },
    {
      title: `Female cut & brushing`,
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
