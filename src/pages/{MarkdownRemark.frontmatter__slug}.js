import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import { Container } from 'react-bootstrap';
import PageWrapepr from '../layout/pageWrapper';
import PageWelcomeBg from '../layout/PageWelcomeBg-section';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { titleBlog, lang, description } = headData;
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.featured);
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
          <PageWelcomeBg overTitle="Our Blog" title={`About Massage and Beauty`} />
          <Container className="p-5">
            <section id="blog">
              <Link
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '-1rem',
                  borderBottom: '1px solid black',
                }}
                to={'/blog/'}
              >
                All Posts
              </Link>
              <Link
                style={{
                  position: 'absolute',
                  left: '1rem',
                  bottom: '1.5rem',
                  borderBottom: '1px solid black',
                }}
                to={'/blog/'}
              >
                All Posts
              </Link>
              <Link
                style={{
                  position: 'absolute',
                  right: '1rem',
                  bottom: '1.5rem',
                  borderBottom: '1px solid black',
                }}
                to={'#blog'}
              >
                up
              </Link>
              <div className="blog-post-container">
                <div className="blog-post">
                  <div className="gatsby-image-wrapper-wraper">
                    <GatsbyImage image={image} alt={frontmatter.featured.name} />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div>
                    <h1 className="blog-post-header">{frontmatter.title}</h1>
                    <h2 className="blog-post-date">{frontmatter.date}</h2>
                  </div>
                </div>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              <p className="blog-cta">
                <span className="cta-btn cta-btn--blog">
                  <Link to="/prices-massage/">make an appointment</Link>
                </span>
              </p>
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
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
