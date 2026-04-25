import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Layout from '@components/Layout';

import { MDXProvider } from '@mdx-js/react';

const BlogHeaderAuthorInfo = ({
  author,
  category,
  title,
  post,
  date,
  slug,
}) => {
  const { position, organization, name, id, avatar, resume } = author;

  const {
    fields: {
      timeToRead: { text: timeToRead },
    },
  } = post;

  return (
    <div className="blog-header d-flex justify-content-center align-items-center">
      <div className="overlay">
        <div className="container py-5 position-relative">
          <div className="blog-title mt-4">
            <span className="badge badge-primary me-3">{category}</span>
            <span className="badge text-white me-3">
              {timeToRead.toUpperCase()}
            </span>
            <span className="badge text-white">
              <FontAwesomeIcon icon={faClock} className="secondary me-1" />
              {date}
            </span>
            <h1 className="blog-title-text text-white mt-3">{title}</h1>
            <div
              className="d-flex
            justify-content-start align-items-start flex-column justify-content-md-between align-items-md-center flex-md-row mt-5"
            >
              <div className="d-flex flex-column flex-md-row">
                <a className="author d-flex align-items-center" href={resume}>
                  <img
                    src={avatar.childImageSharp.resize.src}
                    alt={name}
                    className="author-avatar m-0"
                  />{' '}
                  <div className="ms-3">
                    <h4 className="mb-1 text-white">{name}</h4>
                    <span className="designation text-white">{position}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class BlogPostTemplate extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data, children } = this.props;
    const { post } = data;

    const {
      title,
      author,
      tags,
      description,
      keywords,
      image,
      uid,
      category,
      slug,
      type,
      date,
      last_modified_at,
    } = post.frontmatter;

    const disqusConfig = {
      identifier: uid,
      title,
    };

    const featuredImage = image ? image.childImageSharp.resize : null;

    const pageMetaData = {
      title,
      author,
      description,
      keywords,
      image: featuredImage,
      featuredImage,
      type,
      slug,
      date,
      category,
    };

    const { position, organization, name, id, avatar, bio } = author;
    // debugger
    return (
      <MDXProvider>
        <Layout>
          <BlogHeaderAuthorInfo
            author={author}
            category={category}
            post={post}
            title={title}
            date={last_modified_at}
            slug={slug}
          />
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="blog-content">{children}</div>
              </div>
              <div className="col-lg-4 col-md-12 ps-lg-5 ps-sm-0 position-relative">
                <div className="row"></div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </Layout>
      </MDXProvider>
    );
  }
}

export default BlogPostTemplate;

export const query = graphql`
  query PostQuery($slug: String) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      tableOfContents
      headings {
        id
        value
        depth
      }
      body
      fields {
        timeToRead {
          text
        }
      }
      frontmatter {
        uid
        title
        description
        keywords
        category
        tags
        slug
        type
        date
        last_modified_at
        image: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        author {
          id
          name
          position
          organization
          bio
          resume
          avatar {
            childImageSharp {
              resize(width: 130) {
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
`;

BlogHeaderAuthorInfo.propTypes = {
  author: PropTypes.shape({}).isRequired,
  category: PropTypes.string.isRequired,
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
