import React, { useState } from 'react';
import PricesMassage from './PricesMassage';
import PricesBeauty from './PricesBeauty';
import PricesMicropigmentation from './PricesMicropigmentation';
import FormMassage from '../Form/FormMassage';
import { Tabs, Tab } from 'react-bootstrap';

const PricesTabs = () => {
  const [key, setKey] = useState('micropigmentation');

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab tabClassName="price-list-section-title" eventKey="massage" title="Massage">
        {key === 'massage' ? (
          <>
            <PricesMassage />
            <FormMassage />
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
            <PricesMicropigmentation />
            <FormMassage />
          </>
        ) : null}
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="beauty" title="Beauty">
        {key === 'beauty' ? (
          <>
            <PricesBeauty />
            <FormMassage />
          </>
        ) : null}
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="hairdresser" title="Hairdresser">
        {key === 'hairdresser' ? (
          <>
            <PricesBeauty />
            <FormMassage />
          </>
        ) : null}
      </Tab>
    </Tabs>
  );
};

export default PricesTabs;
