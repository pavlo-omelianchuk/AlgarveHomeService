import React from 'react';
import { Container } from 'react-bootstrap';
import PricesMassage from './PricesMassage';
import PricesMicropigmentation from './PricesMicropigmentation';
import PricesBeauty from './PricesBeauty';
import Form from '../Form/Formik';

const PricesTable = () => (
  <Container className="p-5">
    <PricesMassage />
    <PricesMicropigmentation />
    <PricesBeauty/>
    <Form />
  </Container>
);

export default PricesTable;
