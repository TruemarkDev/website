import React, { Component, Fragment } from 'react';

import { graphql, Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

import BlogList from '@components/BlogList';
import BlogIndexHeader from '@components/BlogIndexHeader/BlogIndexHeader';
import BlogNav from '@components/Blog/BlogNav';
import BlogSearchList from '@components/Blog/BlogSearchList';

import Layout from '@truemark/gatsby-theme-effortless-blog/src/components/layout';

interface PaginationProps {
  pageContext: any;
}

import {
  BLOG_INDEX_BUTTON_TEXT,
  BLOG_INDEX_DESCRIPTION,
  BLOG_INDEX_HEADING,
} from '@constants/blogIndexPageContent';
import { getBlogMetaData } from '@utils/blogMetaData';

const BLOG_LIST_URL = 'blog';

const Pagination: React.FC<PaginationProps> = ({ pageContext }) => {
  const { currentPage, numPages, category, prevPage, nextPage } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const displayPaginationClass = numPages === 1 ? 'd-none' : '';

  return (
    <nav aria-label="blog-pagination" className={displayPaginationClass}>
      <ul className="pagination ms-0 justify-content-center" key={category}>
        {!isFirst && (
          <li className="page-item" key="pagination-prev">
            <Link to={prevPage} rel="prev" className="page-link">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
          </li>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li className="page-item" key={`pagination-${i}`}>
            <Link
              className={`page-link ${currentPage == i + 1 ? 'active' : ''}`}
              key={`pagination-number${i + 1}`}
              to={`/${
                i === 0
                  ? `${BLOG_LIST_URL}/${
                      (category && category.toLowerCase()) || ''
                    }`
                  : `${BLOG_LIST_URL}/${
                      (category && category.toLowerCase()) || ''
                    }${category ? '/' : ''}page/${i + 1}`
              }`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className="page-item" key="pagination-next">
            <Link to={nextPage} rel="next" className="page-link">
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

interface BlogListPageProps {
  data: {
    all: any;
    category: any;
    blogIndexSliderQuery: any;
    metaData: any;
    metaDataImagePath: any;
  };
  pageContext: {
    category: string;
  };
  location : {
    pathname: string;
  };
}

interface BlogListPageState {
  categoryFilter: any;
  searchText: string;
}

class BlogListPage extends Component<BlogListPageProps, BlogListPageState> {
  constructor(props: BlogListPageProps) {
    super(props);
    this.state = {
      categoryFilter: null,
      searchText: '',
    };
  }

  selectCategory = (categoryFilter: any) => {
    this.setState({ categoryFilter });
  };

  resetCategory = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({ categoryFilter: null });
  };

  onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ searchText: value });
  };

  render() {
    const { categoryFilter, searchText } = this.state;
    const { data, pageContext , location: {pathname}} = this.props;

    const pageMetaData = getBlogMetaData(data.metaData, data.metaDataImagePath);

    const { category } = pageContext;

    const isSearching = searchText?.trim?.();

    const slug =  pathname.replace(/^\/|\/$/g, '');

    return (
      <Layout
        pageMetaData={pageMetaData}
        path={slug}
      >
        <BlogIndexHeader
          blogIndexHeading={BLOG_INDEX_HEADING}
          blogIndexDescription={BLOG_INDEX_DESCRIPTION}
          blogIndexButtonText={BLOG_INDEX_BUTTON_TEXT}
          sliderPosts={data.blogIndexSliderQuery}
        />
        <BlogNav
          selectCategory={this.selectCategory}
          resetCategory={this.resetCategory}
          categoryFilter={category || 'All'}
          searchText={searchText}
          onChange={this.onSearch}
        />

        {isSearching ? (
          <BlogSearchList searchText={searchText} />
        ) : (
          <>
            <BlogList
              categoryFilter={categoryFilter}
              data={data.all || data.category}
            />
            <Pagination pageContext={pageContext} />
          </>
        )}
      </Layout>
    );
  }
}

export default BlogListPage;

export const blogListQuery = graphql`
  query blogListQuery(
    $skip: Int!
    $limit: Int!
    $category: String
    $hasCategory: Boolean!
  ) {
    category: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          date: { ne: "" }
          type: { eq: "blog-post" }
          category: { eq: $category }
        }
      }
      limit: $limit
      skip: $skip
    ) @include(if: $hasCategory) {
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
    all: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { date: { ne: "" }, type: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) @skip(if: $hasCategory) {
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
    blogIndexSliderQuery: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          estimationBlogPost: { eq: true }
          type: { eq: "blog-post" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            description
            category
            tags
            slug
            title
            date
            featuredImage {
              childImageSharp {
                resize(width: 630) {
                  src
                  width
                  height
                }
              }
            }
            author {
              id
              name
            }
          }
        }
      }
    }
     metaData: allSitePlugin {
        edges {
          node {
            name
            pluginOptions
          }
        }
      }
      metaDataImagePath: allFile(filter: {sourceInstanceName: {eq: "blogPageMetaDataImagePath"}}) {
        nodes {
          childrenImageSharp {
            fixed {
              src
          }
        }
      }
    }
  }
`;
