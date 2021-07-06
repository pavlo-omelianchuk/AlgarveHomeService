import React, { useState } from 'react';
import PricesMassage from './PricesMassage';
import PricesBeauty from './PricesBeauty';
import PricesMicropigmentation from './PricesMicropigmentation';
import { Tabs, Tab } from 'react-bootstrap';

export default () => {
  const [key, setKey] = useState('massage');

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab tabClassName="price-list-section-title" eventKey="massage" title="Massage">
        <PricesMassage />
      </Tab>
      <Tab
        tabClassName="price-list-section-title"
        eventKey="micropigmentation"
        title="Micropigmentation"
      >
        <PricesMicropigmentation />
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="beauty" title="Beauty">
        <PricesBeauty />
      </Tab>
      <Tab tabClassName="price-list-section-title" eventKey="hairdresser" title="Hairdresser">
        <PricesBeauty />
      </Tab>
    </Tabs>
  );
};
