import React from 'react';

import { navigate, Link } from 'gatsby';

const startup = '/images/startup.jpg';
import BlogCard from '@components/BlogCard';

interface BlogProps {
  blogs: any[];
  headerTag: string;
  heading: string;
  buttonText: string;
  edgeData: any;
  blogRedirectRoute: string;
}

export const Blogs: React.FC<BlogProps> = ({
  blogs,
  headerTag,
  heading,
  buttonText,
  edgeData,
  blogRedirectRoute,
}) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header text-center mb-5">
              <div className="header-tag">{headerTag}</div>
              <h2>{heading}</h2>
            </div>
          </div>
          <div className="col-md-12">
            <ul className="row row-eq-height blogs">
              {blogs.map((edge: typeof edgeData, index: number) => {
                const {
                  slug,
                  title,
                  date,
                  category,
                  description,
                  featuredImage,
                  author,
                } = edge.node.frontmatter;

                const blogLink = `${blogRedirectRoute}/${slug}/#`;
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
              onClick={() => navigate(blogRedirectRoute)}
              type="submit"
              className="btn btn-primary d-block mx-auto mt-md-5 mt-sm-2"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RelatedPostSectionProps {
  sectionTitle: string;
  blogs: any[];
}

export const RelatedPostSection: React.FC<RelatedPostSectionProps> = ({
  sectionTitle,
  blogs,
}) => (
  <aside id="blog" className="related-posts-section container pb-0 pt-0">
    <div className="col-md-12 px-0 text-start">
      <h3>{sectionTitle}</h3>
    </div>
    <ul className="row ps-0">
      {blogs.slice(0, 3).map((edge, index) => {
        const { slug, title, category, featuredImage } = edge.node.frontmatter;
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
                  <img src={imgSrc} alt={title} className="card-img-top mb-0" />
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
