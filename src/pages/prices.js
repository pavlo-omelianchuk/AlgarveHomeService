import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import PageWrapepr from '../layout/pageWrapper';
import PricesWelcomeBg from '../components/PricesPage-component/PricesWelcomeBg';
import PricesTable from '../components/PricesPage-component/PricesTable';

const PricesPage = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <PageWrapepr>
        <PricesWelcomeBg />
        <PricesTable />
      </PageWrapepr>
    </>
  );
};

export default PricesPage;
