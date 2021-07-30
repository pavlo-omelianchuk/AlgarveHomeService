import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap';
import PageWrapepr from '../layout/pageWrapper';
import PageWelcomeBg from '../layout/PageWelcomeBg-section';
import BlogListImg from '../components/Image/BlogListImg';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { titleBlog, lang, description } = headData;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
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
      <PageWrapepr footerLinkTo="best-offers">
        <>
          <PageWelcomeBg overTitle="Our Blog" title={`About Massage and Beauty`} />
          <Container className="p-5">
            <section id="blog">
              <div className="blog-post-container">
                <div className="blog-post">
                  <BlogListImg filename={frontmatter.featured.name} alt="massage" />
                  <br />
                  <br />
                  <br />
                  <div>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                  </div>
                </div>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </section>
          </Container>
        </>
      </PageWrapepr>
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        slug
        featured {
          name
        }
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
