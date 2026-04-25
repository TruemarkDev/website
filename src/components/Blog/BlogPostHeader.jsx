import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import SocialShare from 'components/SocialShare';

const BlogPostHeader = ({ author, category, title, post, date, slug }) => {
  const { position, name, avatar, resume } = author || {};

  return (
    <div className="blog-post-header d-flex justify-content-center align-items-center">
      <div className="overlay">
        <div className="container py-5 position-relative">
          <div className="blog-title mt-4">
            {category && (
              <span className="badge badge-primary me-3">{category}</span>
            )}
            <span className="badge text-white me-3">
              {post?.fields?.timeToRead?.text?.toUpperCase()}
            </span>
            <span className="badge text-white">
              <FontAwesomeIcon icon={faClock} className="secondary me-1" />
              {date}
            </span>
            <h1 className="blog-title-text text-white mt-3">{title}</h1>
            <div className="d-flex justify-content-start align-items-start flex-column justify-content-md-between align-items-md-center flex-md-row mt-5">
              <div className="d-flex flex-column flex-md-row">
                {author && (
                  <a className="author d-flex align-items-center" href={resume}>
                    {avatar?.childImageSharp?.resize?.src && (
                      <img
                        src={avatar.childImageSharp.resize.src}
                        alt={name}
                        className="author-avatar m-0"
                      />
                    )}
                    <div className="ms-3">
                      <h4 className="mb-1 text-white">{name}</h4>
                      <span className="designation text-white">{position}</span>
                    </div>
                  </a>
                )}
              </div>
              <SocialShare path={`/blog/${slug}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
