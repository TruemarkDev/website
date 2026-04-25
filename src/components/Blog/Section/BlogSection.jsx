import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';

const startup = '/images/blogs/categories/startup.jpg';
import BlogCard from 'components/Blog/Card';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        featuredBlogs: allMdx(
          limit: 3
          sort: {frontmatter: {date: DESC}}
          filter: {frontmatter: {featured: {eq: true}, type: {eq: "blog-post"}}}
        ) {
          edges {
            node {
              excerpt
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
    `}
    render={({featuredBlogs}) => (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="header text-center mb-5">
                <div className="header-tag">Expert Opinions</div>
                <h2>From Our Blog</h2>
              </div>
            </div>
            <div className="col-md-12">
              <ul className="row row-eq-height blogs">
                {featuredBlogs.edges.map((edge, index) => {
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
                      key={`blog-card-${index}`}
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
