import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostLink from '../post-link';



const Blog = ( ) => {
  const pageQuery = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title
                tags
                slug
                featured {
                  name
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  );

  const edges = pageQuery.allMarkdownRemark.edges;

  const Posts = edges
    // .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <PostLink key={edge.node.id} post={edge.node} imgSrc={edge.node.frontmatter.featured} />
    ));

  return <div>
    {Posts}
  </div>;
};

export default Blog;
