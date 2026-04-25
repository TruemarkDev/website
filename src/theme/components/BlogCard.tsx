import React from "react";

import { faClock, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RECENT } from "@constants/constants";

interface Author {
  name: string;
}

interface BlogCardProps {
  url: string;
  title: string;
  date: string;
  category: string;
  description: string;
  author: Author;
  imgSrc: string;
  className: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  url,
  title,
  date,
  category,
  description,
  author,
  imgSrc,
  className,
}) => {
  const { name: authorName } = author;

  const recentOrOriginalDate = new Date(date) > new Date() ? RECENT : date;

  return (
    <li className={`col-sm-12 ${className}`}>
      <a href={url} className="card blog-card h-100">
        <img className="card-img-top mb-0" src={imgSrc} alt={title} />
        <div className="card-body">
          <div className="header-tag-blog">{category}</div>
          <div className="blog-info d-flex justify-content-between align-items-center mb-3">
            <div className="author d-flex align-items-center me-4">
              <FontAwesomeIcon icon={faClock} className="secondary me-1" />
              {recentOrOriginalDate}
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
