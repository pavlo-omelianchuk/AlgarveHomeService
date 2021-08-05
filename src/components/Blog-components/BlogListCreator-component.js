import React from 'react';
import { Link } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PostLink = ({ post, imgSrc }) => {
  const image = getImage(imgSrc);
  return (
    <Container>
      <Row className="blog-list-flex-wrapper">
        <Col className="blog-list-flex-wrapper__image my-auto" lg={5} md={12}>
          <Link to={post.frontmatter.slug}>
            <div>
              <GatsbyImage image={image} alt={post.frontmatter.featured.name} />
            </div>
          </Link>
        </Col>
        <Col className="blog-list-flex-wrapper__text my-5" lg={7} md={12}>
          <Link to={post.frontmatter.slug}>
            <h3>{post.frontmatter.title}</h3>({post.frontmatter.date})
          </Link>
          <hr />
          <p>{post.excerpt}</p>
          <p className="blog-list-cta">
            <Link to={post.frontmatter.slug}>
              <span className="cta-btn cta-btn--blog">read more</span>
            </Link>
            <Link to="/prices-massage/">
              <span className="cta-btn cta-btn--blog">Book now</span>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default PostLink;
