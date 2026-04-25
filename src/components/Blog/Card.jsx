import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({
  url,
  title,
  date,
  category,
  description,
  featuredImage,
  author,
  imgSrc,
  className,
}) => {
  const classNames = ["col-sm-12"];
  classNames.push(className);

  const { name: authorName } = author;

  return (
    <li className={classNames.join(" ")}>
      <a href={url} className="card blog-card h-100">
        <img
          src={imgSrc}
          alt={title}
          className="blogcard__img card-img-top mb-0"
          scale="0"
        />
        <div className="card-body">
          <div className="header-tag-blog">{category}</div>
          <div className="blog-info d-flex justify-content-between align-items-center  mb-3">
            <div className="author d-flex align-items-center me-4">
              <FontAwesomeIcon icon={faClock} className="secondary me-1" />
              {new Date(date) > new Date() ? "Recent" : date}
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faUserCircle} className="secondary me-1" />
              {authorName}
            </div>
          </div>
          <h5 className="card-title mb-4">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
          <button type="button" className="btn btn-link text-primary">
            READ MORE
          </button>
        </div>
      </a>
    </li>
  );
};

export default BlogCard;
