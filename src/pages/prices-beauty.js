import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap';
import PageWrapepr from '../layout/pageWrapper';
import PricesWelcomeBg from '../components/PricesPage-component/PricesWelcome-section';
import '../style/main.scss';
import loadable from '@loadable/component';

const PriceList = loadable(() => import('../components/PricesPage-component/PriceList-component'));

const PricesPage = () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="9kBdSy0tZrplyDlGnpHdAyuPf8AAGzLSZnBTh9EWd7A"
        />
      </Helmet>
      <PageWrapepr footerLinkTo="best-offers">
        <>
          <PricesWelcomeBg />
          <Container className="p-5">
            <section id="price-list">
              <PriceList entrance="beauty" />
            </section>
          </Container>
        </>
      </PageWrapepr>
    </>
  );
};

export default PricesPage;
