import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PTJPM4N',
};

TagManager.initialize(tagManagerArgs);

const IndexPage = () => {
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
      <App />
    </>
  );
};

export default IndexPage;
