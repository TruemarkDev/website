import React from "react";

import BlogCard from "./Card";
import startup from 'images/blogs/categories/startup.jpg?url';

export const BlogList = ({ categoryFilter, data }) => (
  <section className="container">
    <ul className="row row-eq-height blogs mb-0 p-0">
      {data.edges.map((edge, index) => {
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

        if (categoryFilter) {
          if (categoryFilter !== category) {
            return null;
          }
        }

        const imgSrc = featuredImage ? featuredImage : startup;

        return (
          <BlogCard
            title={title}
            url={blogLink}
            date={date}
            category={category}
            description={description}
            imgSrc={imgSrc}
            author={author}
            key={`blog-card-${index}`}
            className="col-lg-4 col-md-6 rm-sm-3 mb-3"
          />
        );
      })}
    </ul>
  </section>
);

export default BlogList;
