import React, { useRef } from "react";
import { Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

const startup = "/images/blogs/categories/startup.jpg";
import BlogCard from "components/Blog/Card";
import Slider, { SlideControls } from "components/Slider/Slider";

export default ({ authorId, blogs = { edges: [] } }) => {
  const sliderRef = useRef();

  const authorBlogs = blogs.edges.filter(
    ({ node }) => node.frontmatter.author?.author_id === authorId,
  );

  const blogsList = authorBlogs.map((edge, index) => {
    const { slug, title, date, category, description, featuredImage, author } =
      edge.node.frontmatter;
    const blogLink = `/blog/${slug}/#`;
    const imgSrc = featuredImage ? featuredImage : startup;

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
        className={authorBlogs.length < 2 ? "col-lg-6 col-md-6" : "px-1"}
      />
    );
  });

  return (
    <div className="user-blogs mt-5" id="blog">
      <Row>
        <Col xs={6}>
          <h3 className="h6 mb-3">
            <FontAwesomeIcon icon={faBlog} className="me-2" />
            Blogs
          </h3>
        </Col>
        <Col xs={6}>
          {blogsList.length > 1 && <SlideControls ref={sliderRef} />}
        </Col>
      </Row>
      <Row>
        <Slider ref={sliderRef} slideCount={blogsList.length}>
          {blogsList}
        </Slider>
      </Row>
    </div>
  );
};
