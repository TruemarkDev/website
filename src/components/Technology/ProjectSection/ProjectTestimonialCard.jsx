import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faCommentAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';

const ProjectTestimonialCard = ({
  project: {
    companyLogo,
    featuredImage,
    testimonialLong: testimonial,
    owner,
    position,
    ownerImage,
    companyName,
    webUrl,
    caseStudyUrl,
    clutchUrl,
  },
}) => {
  const projectRelatedLinks = [
    {
      url: webUrl,
      icon: faLink,
      linkContent: 'Visit the website',
    },
    {
      url: caseStudyUrl,
      icon: faBookOpen,
      linkContent: 'View Case Study',
    },
    {
      url: clutchUrl,
      icon: faCommentAlt,
      linkContent: 'Read Clutch Review',
    },
  ];

  const filteredProjectRelatedLinks = projectRelatedLinks.filter(
    ({ url }) => url && url.length > 0
  );

  const projectRelatedLinksContent = filteredProjectRelatedLinks.map(
    ({ url, icon, linkContent }) => (
      <div className="link-item py-3">
        <a href={url} className="link-url">
          <FontAwesomeIcon icon={icon} className="link-icon me-3" />
          {linkContent}
        </a>
      </div>
    )
  );

  const logo = companyLogo ? (
    <img
      src={companyLogo.childImageSharp.resize.src}
      alt="company-logo"
      className="company-logo h-100"
    />
  ) : (
    <span className="logo-alternative-text text-uppercase fw-bold">
      {companyName}
    </span>
  );

  return (
    <Col sm={12} md={6} lg={6} className="project d-flex">
      <div className="project-container p-3 shadow-sm">
        <div className="company-logo-container mb-3">{logo}</div>

        <div className="project-screenshot mb-3">
          <picture className="h-100">
            <img
              src={featuredImage.childImageSharp.resize.src}
              alt="featured"
              className="h-100"
            />
          </picture>
        </div>

        <div className="testimonial mb-3 fst-italic">
          <q>{testimonial}</q>
        </div>

        <div className="testimonial-owner mb-3 d-flex">
          <img
            src={ownerImage.childImageSharp.resize.src}
            alt="client"
            className="owner-image m-0 rounded-circle"
          />

          <div className="owner-description ms-3 d-flex justify-content-center flex-column">
            <div className="owner-name">{owner}</div>

            <div className="owner-position">
              <span className="position-in-company text-secondary">
                {`${position},`}
                {' '}
              </span>

              <span className="company-name">{companyName}</span>
            </div>
          </div>
        </div>

        <div className="project-related-links">
          {projectRelatedLinksContent}
        </div>
      </div>
    </Col>
  );
};

ProjectTestimonialCard.propTypes = {
  project: PropTypes.shape({
    companyLogo: PropTypes.string,
    featuredImage: PropTypes.string,
    testimonialLong: PropTypes.string,
    owner: PropTypes.string,
    position: PropTypes.string,
    ownerImage: PropTypes.string,
    companyName: PropTypes.string,
    webUrl: PropTypes.string,
    caseStudyUrl: PropTypes.string,
    clutchUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectTestimonialCard;
