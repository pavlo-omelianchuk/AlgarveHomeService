import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import PageWrapepr from '../layout/pageWrapper';
import PageWelcomeBg from '../layout/PageWelcomeBg-section';
import PriceList from '../components/PricesPage-components/PriceList-component';
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
        <meta
          name="google-site-verification"
          content="9kBdSy0tZrplyDlGnpHdAyuPf8AAGzLSZnBTh9EWd7A"
        />
      </Helmet>
      <PageWrapepr footerLinkTo="#best-offers">
          <PageWelcomeBg overTitle="Best Offers" title="Algarve Home Massage & Beauty" />
            <section id="price-list">
              <PriceList entrance="massage" />
            </section>
      </PageWrapepr>
    </>
  );
};

export default PricesPage;
