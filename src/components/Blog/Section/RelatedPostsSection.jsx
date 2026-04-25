import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const startup = '/images/blogs/categories/startup.jpg';
export default ({ blogCategory, blogUID, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
          edges {
            node {
              excerpt
              timeToRead
              frontmatter {
                uid
                description
                tags
                slug
                category
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
    `
  );

  const relatedBlogs = data.allMarkdownRemark.edges.filter(
    (blog) =>
      blog.node.frontmatter.category === blogCategory &&
      blog.node.frontmatter.uid !== blogUID
  );
  const limitedBlogs = relatedBlogs.slice(0, 3);

  const sectionTitle = title || 'You might also like';
  return (
    <aside id="blog" className="related-posts-section container pb-0 pt-0">
      <div className="col-md-12 px-0 text-start">
        <h3>{sectionTitle}</h3>
      </div>
      <ul className="row ps-0">
        {limitedBlogs.map((edge, index) => {
          const { slug, title, date, category, description, featuredImage } =
            edge.node.frontmatter;
          const blogLink = `/blog/${slug}/#`;
          const imgSrc = featuredImage
            ? featuredImage.childImageSharp.resize.src
            : startup;

          return (
            <li className="col-lg-12 mb-4" key={index}>
              <div className="blog-post d-flex flex-column">
                <figure className="card_image position-relative mb-3">
                  <Link
                    to={blogLink}
                    title={title}
                    className="mx-track"
                    data-target="Click Blog Picture"
                    data-property={title}
                    rel="bookmark"
                  >
                    <img
                      src={imgSrc}
                      alt={title}
                      className="card-img-top mb-0"
                      scale="0"
                    />
                  </Link>
                  <span className="wpb-category">
                    <a href={blogLink}>{category}</a>
                  </span>
                </figure>

                <h4 className="card-title">
                  <Link
                    to={blogLink}
                    title={title}
                    rel="bookmark"
                    className="mx-track"
                    data-target="Click Blog Title"
                    data-property={title}
                  >
                    {title}
                  </Link>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
