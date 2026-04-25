import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';

const startup = '/images/blogs/categories/startup.jpg';
import BlogCard from '../Card';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 3
          sort: {frontmatter: {date: ASC}}
          filter: {frontmatter: {tags: {in: ["build-team"]}}}
        ) {
          edges {
            node {
              excerpt
              timeToRead
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
    `}
    render={(data) => (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header text-center">
                <div className="header-tag">Insights on</div>
                <h2>Building Right Development Team</h2>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="row row-eq-height mt-5 blogs">
                {data.allMarkdownRemark.edges.map((edge, index) => {
                  const {
                    slug,
                    title,
                    date,
                    category,
                    description,
                    featuredImage,
                    author,
                  } = edge.node.frontmatter;
                  const blogLink = `/blog/${slug}/#`;
                  const imgSrc = featuredImage
                    ? featuredImage.childImageSharp.resize.src
                    : startup;

                  return (
                    <BlogCard
                      index={index}
                      title={title}
                      url={blogLink}
                      date={date}
                      category={category}
                      description={description}
                      imgSrc={imgSrc}
                      author={author}
                      className="col-lg-4 col-md-12 rm-sm-3 mb-3"
                    />
                  );
                })}
              </ul>
              <button
                onClick={() => navigate('/blog')}
                type="submit"
                className="btn btn-primary d-block mx-auto mt-md-5 mt-sm-2"
              >
                View all blogs
              </button>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
