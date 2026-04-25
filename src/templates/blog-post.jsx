import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout/Layout';

import RelatedPostsSection from 'components/Blog/Section/RelatedPostsSection';
import SidebarCTA from 'components/Blog/CTA/SidebarCTA';
import SocialShare from 'components/SocialShare';
import { BlogToc } from '@truemark/gatsby-theme-effortless-blog';
import AuthorCTA from 'components/Blog/CTA/AuthorCTA';
import { MDXProvider } from '@mdx-js/react';
import { BlogSection } from '@truemark/gatsby-theme-effortless-blog';

const BlogHeaderAuthorInfo = ({
  author,
  category,
  title,
  post,
  date,
  slug,
}) => {
  const { position, organization, name, id, avatar, resume } = author;

  return (
    <div className="blog-post-header d-flex justify-content-center align-items-center">
      <div className="overlay">
        <div className="container py-5 position-relative">
          <div className="blog-title mt-4">
            {/* {tags.map(tag => <span className="badge badge-primary me-2">{tag}</span>)} */}
            <span className="badge badge-primary me-3">{category}</span>
            <span className="badge text-white me-3">
              {post.fields.timeToRead.text.toUpperCase()}
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
                {/* second author */}
                {/* <div className="author ms-0 ms-md-5 mt-3 mt-md-0">
                      <img
                        src={avatar.childImageSharp.resize.src}
                        alt={name}
                        className="author-avatar m-0"
                      />{' '}
                      <div className="ms-3">
                        <h4 className="mb-1">{name}</h4>
                        <span className="designation text-white">Creative Writer</span>
                      </div>
                    </div> */}
              </div>
              <SocialShare path={`/blog/${slug}`} />
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
    const { post, featuredBlogs } = data;
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

    return (
      <MDXProvider>
        <Layout pageMetaData={pageMetaData} path={`blog/${slug}`}>
          <BlogHeaderAuthorInfo
            author={author}
            category={category}
            post={post}
            title={title}
            date={last_modified_at}
            slug={slug}
          />

          <BlogToc
            toc={post.tableOfContents}
            headings={post.headings}
            title={title}
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="blog-content">{children}</div>
              </div>
              <div className="col-lg-4 col-md-12 ps-lg-5 ps-sm-0 position-relative">
                <div className="row">
                  <BlogSection
                    blogs={featuredBlogs}
                    blogCategory={category}
                    blogUID={uid}
                    sectionTitle="Related Posts"
                    blogType="related-post"
                  />
                </div>
                <SidebarCTA buttonText="Apply Now" />
              </div>
              <AuthorCTA
                authorName={name}
                authorDesignation={position}
                authorDetail={bio}
                authorAvatar={avatar}
              />
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-12">
                <DiscussionEmbed
                  shortname={process.env.disqusShortName}
                  config={disqusConfig}
                />
              </div>
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
    post: mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { type: { eq: "blog-post" } }
    ) {
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
    featuredBlogs: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            uid
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
            toc
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
          fields {
            timeToRead {
              text
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
