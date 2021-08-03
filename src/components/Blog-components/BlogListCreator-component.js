import React from 'react';
import { Link } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
import BlogListImg from '../Image/oldBlogListImg';

const PostLink = ({ post }) => {
  return (
    <Container>
      <Row className="blog-list-flex-wrapper">
        <Col md={6} sm={12}>
          <Link to={post.frontmatter.slug}>
              <div className="blog-list-flex-wrapper__image">
                <BlogListImg filename={post.frontmatter.featured.name} alt="massage" />
              </div>
          </Link>
        </Col>
        <Col className="blog-list-flex-wrapper__text mx-auto my-5" md={6} sm={12}>
          <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
          </Link>
          <hr />
          <p>{post.excerpt}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default PostLink;
