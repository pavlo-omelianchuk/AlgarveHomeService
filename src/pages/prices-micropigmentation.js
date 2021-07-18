import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap';
import PageWrapepr from '../layout/pageWrapper';
import PricesWelcomeBg from '../components/PricesPage-component/PricesWelcome-section';
import PricesTabs from '../components/PricesPage-component/PriceList-component';
import '../style/main.scss';

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
      <PageWrapepr footerLinkTo="best-offers">
        <>
          <PricesWelcomeBg />
          <Container className="p-5">
            <section id="price-list">
              <PricesTabs entrance="micropigmentation" />
            </section>
          </Container>
        </>
      </PageWrapepr>
    </>
  );
};

export default PricesPage;
