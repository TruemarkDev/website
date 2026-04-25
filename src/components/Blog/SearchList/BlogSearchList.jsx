import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { BlogList } from 'components/Blog/BlogList';
const emptyResultImg = '/images/layout/empty.svg';
const blogListQuery = graphql`
  query BlogSearchQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog-post" } } }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            description
            category
            tags
            featuredImage {
              childImageSharp {
                resize(width: 630) {
                  src
                  width
                  height
                }
              }
            }
            slug
            title
            date
            author {
              id
              name
              avatar {
                childImageSharp {
                  resize(width: 65) {
                    src
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const EmptySearchResult = ({ searchText }) => (
  <div className="container">
    <div className="row justify-content-center text-center py-5">
      <img
        src={emptyResultImg}
        alt="no result found"
        className="img-fluid w-25"
      />
      <div className="">
        No result found for:
        <div>
          <b>"{searchText}"</b>
        </div>
      </div>
    </div>
  </div>
);

const BlogSearchList = ({ searchText, ...props }) => {
  if (!searchText?.trim?.()) {
    return null;
  }

  return (
    <StaticQuery
      query={blogListQuery}
      render={({ allMarkdownRemark }) => {
        const displayBlogs = allMarkdownRemark.edges.filter(({ node }) =>
          node.frontmatter.title
            .toLowerCase()
            .includes(searchText?.toLowerCase().trim?.())
        );
        if (displayBlogs.length === 0) {
          return <EmptySearchResult searchText={searchText} />;
        }
        return <BlogList data={{ edges: displayBlogs }} />;
      }}
    />
  );
};

export default BlogSearchList;
