import React from 'react';
import { graphql } from 'gatsby';

export default (props) => null;

export const query = graphql`
  fragment BlogListFragment on MarkdownRemarkConnection {
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
`;
