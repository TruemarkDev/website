import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLaptopHouse,
  faMapMarkedAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import SocialShare from 'components/SocialShare';
import ButtonWithModal from 'components/Button/ButtonWithModal';
import cvIcon from 'images/career/cv.svg?url';

const JobPostBody = ({ frontmatter }) => {
  const {
    title,
    remoteEligible,
    description,
    category,
    skills = [],
    tags = [],
    slug,
    jobDescriptions = [],
    perks,
    positionOpen,
  } = frontmatter;

  if (positionOpen !== true) {
    return (
      <section className="container">
        <div className="row justify-content-center">
          <Col md={12}>
            <div className="header text-center">
              <div className="header-tag">You want to</div>
              <h2>Work With Us ?</h2>
            </div>
          </Col>
          <div className="job_box no-job text-center mt-4">
            <img className="job-image mb-4" src={cvIcon} alt="cv icon" />
            <h3>Sorry, this position is not available at this time.</h3>
            <p className="text-secondary mb-5 mb-md-4">
              If you are interested in future opportunities, please send us your CV!
            </p>
            <ButtonWithModal
              text="Send us your CV"
              title="Send us your CV"
              subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
              modalType="cv"
              className="mt-md-0 mb-0"
            />
            <a
              href="/careers#openpositions"
              className="btn btn-lg btn-primary outlined ms-lg-2 ms-md-2"
            >
              Find more jobs
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-start col-centered">
          <p className="small">
            <a href="/careers/" className="text-primary text-uppercase">
              {category}
            </a>
          </p>
          <div className="d-flex justify-content-between flex-column flex-sm-row border-bottom">
            <div className="mb-3">
              <h1 className="mb-0">{title}</h1>
              <div className="d-flex">
                <div className="pe-3 border-right">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="me-1 text-primary" />
                  <span className="fw-bold text-primary">Kathmandu, Nepal</span>
                </div>
                {remoteEligible ? (
                  <div className="ps-3 pe-3 border-right">
                    <FontAwesomeIcon icon={faLaptopHouse} className="me-1 text-primary" />
                    <span className="text-primary fw-bold">Remote Work</span>
                  </div>
                ) : (
                  <div className="ps-3">
                    <FontAwesomeIcon icon={faTimes} className="me-1 text-primary" />
                    <span className="text-primary fw-bold">Remote Work</span>
                  </div>
                )}
              </div>
            </div>
            <div className="job_box">
              <SocialShare
                path={`/jobs/${slug}`}
                description={`Opportunity to work as ${title}`}
                tags={tags}
                className="share float-end"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Col md={10} sm={12}>
          <p className="mb-3 lead" />
          <p>
            At Truemark, we love crafting great quality code without losing sight on
            the importance of business idea validation. We believe our people are our
            greatest asset and we're always looking for bright new people and
            personalities to join our team.
          </p>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </Col>
        <div className="col-sm-5 job_details">
          <h5 className="text-primary">Job Description</h5>
          <ul className="ms-0 pe-0 pe-md-3">
            {jobDescriptions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="col-sm-5 job_details">
          <h5 className="text-primary">Skills</h5>
          <ul className="ms-0">
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        {perks && (
          <div className="col-sm-10 job_details">
            <h5 className="text-primary">Renumeration</h5>
            <ul className="ms-0">
              {perks.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="col-12 py-5 text-center">
          <ButtonWithModal
            text="Apply for this Job"
            title="Apply for this Job"
            subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
            modalType="cv"
            className="mt-md-0 primary mb-0"
          />
          <a href="/careers/#openpositions" className="btn btn-primary outlined ms-0 ms-sm-3">
            All Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobPostBody;
