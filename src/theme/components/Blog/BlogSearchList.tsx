import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogList from '@components/BlogList';
const emptyResultImage = '/images/layout/empty.svg';
const blogListQuery = graphql`
  query BlogSearchQuery {
    allMdx(filter: { frontmatter: { type: { eq: "blog-post" } } }) {
      edges {
        node {
          excerpt
          fields {
            timeToRead {
              text
            }
          }
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

interface EmptySearchResultProps {
  searchText: string;
}

const EmptySearchResult: React.FC<EmptySearchResultProps> = ({
  searchText,
}) => (
  <div className="container">
    <div className="row justify-content-center text-center py-5">
      <img
        src={emptyResultImage}
        alt="no result found"
        className="img-fluid w-25"
      />
      <div>
        No result found for:
        <div>
          <b>"{searchText}"</b>
        </div>
      </div>
    </div>
  </div>
);

interface BlogSearchListProps {
  searchText: string;
}

const BlogSearchList: React.FC<BlogSearchListProps> = ({
  searchText,
  ...props
}) => {
  if (!searchText?.trim?.()) {
    return null;
  }

  const data = useStaticQuery(blogListQuery);

  const displayBlogs = data.allMdx.edges.filter(({ node }) =>
    node.frontmatter.title.toLowerCase().includes(searchText?.toLowerCase().trim?.())
  );

  if (displayBlogs.length === 0) {
    return <EmptySearchResult searchText={searchText} />;
  }

  return <BlogList data={{ edges: displayBlogs }} />;
};

export default BlogSearchList;
