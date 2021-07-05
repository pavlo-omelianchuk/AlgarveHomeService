import React from 'react';
import { Container } from 'react-bootstrap';
import PricesMassage from './PricesMassage';
import PricesEyebrows from './PricesEyebrows';
import Form from '../Form/Formik';

const PricesTable = () => (
  <Container className="p-5">
    <PricesMassage />
    <PricesEyebrows />
    <Form />
  </Container>
);

export default PricesTable;
