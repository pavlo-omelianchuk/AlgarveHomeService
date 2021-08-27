import React, { useState } from 'react';
import PricesMassage from './MassageUL-component';
import PricesBeauty from './BeautyUL-component';
import PricesMicropigmentation from './MicropigmentationUL-component';
import PricesHairdresser from './HairdresserUL-component';
import Form from '../Form/Form-section';
import { Tabs, Tab } from 'react-bootstrap';
import prices_PageData from '../../mock/prices_Page.json';

const imgRegEx = /([/])\w+\.\w+/g;

const {
  Price_List_massage,
  Price_List_Micropigmentation,
  Price_List_Beauty,
  Price_List_Hairdresser,
} = prices_PageData;

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

  const [key, setKey] = useState(customTab({ entrance }));

  return (
    <>
      <h5 style={{ textAlign: 'left' }}>*Choose section and fill up form request</h5>
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab tabClassName="price-list-section-title" eventKey="massage" title="Massage">
          {key === 'massage' ? (
            <>
              <PricesMassage priceListMassage={Price_List_massage} />
              <Form treatmentsMassage={Price_List_massage} />
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
              <PricesMicropigmentation priceListMicropigmentation={Price_List_Micropigmentation} />
              <Form treatmentsMicropigmentation={Price_List_Micropigmentation} />
            </>
          ) : null}
        </Tab>
        <Tab tabClassName="price-list-section-title" eventKey="beauty" title="Beauty">
          {key === 'beauty' ? (
            <>
              <PricesBeauty priceListBeauty={Price_List_Beauty} />
              <Form treatmentsBeauty={Price_List_Beauty} />
            </>
          ) : null}
        </Tab>
        <Tab tabClassName="price-list-section-title" eventKey="hairdresser" title="Hairdresser">
          {key === 'hairdresser' ? (
            <>
              <PricesHairdresser priceListHairdresser={Price_List_Hairdresser} />
              <Form treatmentsHairdresser={Price_List_Hairdresser} />
            </>
          ) : null}
        </Tab>
      </Tabs>
    </>
  );
};

export default PricesTabs;
