import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap';
import PageWrapepr from '../layout/pageWrapper';
import PageWelcomeBg from '../layout/PageWelcomeBg-section';
import AboutUsComponent from '../components/AboutUs-components/AboutUsCreator-component';
import '../style/main.scss';

const BlogPage = () => {
  const { titleBlog, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleBlog}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta
          name="google-site-verification"
          content="9kBdSy0tZrplyDlGnpHdAyuPf8AAGzLSZnBTh9EWd7A"
        />
      </Helmet>
      <PageWrapepr footerLinkTo="#best-offers">
        <>
          <PageWelcomeBg overTitle="" title={`About Us`} />
          <Container className="p-2">
            <AboutUsComponent />
          </Container>
        </>
      </PageWrapepr>
    </>
  );
};

export default BlogPage;
