import React from "react";

const startup = "/images/blogs/categories/startup.jpg";
import BlogCard from "../Card";

const TeamBuildingBlogs = ({ blogs = { edges: [] } }) => (
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
            {blogs.edges.map((edge, index) => {
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
              const imgSrc = featuredImage ? featuredImage : startup;

              return (
                <BlogCard
                  key={`team-blog-${slug ?? index}`}
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
            onClick={() => window.location.assign("/blog")}
            type="submit"
            className="btn btn-primary d-block mx-auto mt-md-5 mt-sm-2"
          >
            View all blogs
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default TeamBuildingBlogs;
