import React from 'react';
import { graphql, Link } from 'gatsby';
import { Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLaptopHouse,
  faMapMarkedAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const cvIcon = '/images/career/cv.svg';
import Layout from 'components/Layout/Layout';
import SocialShare from 'components/SocialShare';
import { ButtonWithModal } from '@truemark/gatsby-theme-effortless-blog';

const JobPostTemplate = (props) => {
  const { data } = props;
  const { markdownRemark: post } = data;

  const {
    uid,
    title,
    remoteEligible,
    description,
    datePosted,
    validityInDays,
    monthsOfExperience,
    educationRequirements,
    salaryMin,
    salaryMax,
    keywords,
    category,
    skills,
    image,
    tags,
    slug,
    jobDescriptions,
    type,
    perks,
    remoteOnly,
    vacancyCount,
    positionOpen,
  } = post.frontmatter;

  const featuredImage = image ? image.childImageSharp.resize : null;

  const pageMetaData = {
    uid,
    title,
    remoteEligible,
    description,
    datePosted,
    validityInDays,
    monthsOfExperience,
    educationRequirements,
    salaryMin,
    salaryMax,
    category,
    skills,
    image,
    tags,
    slug,
    jobDescriptions,
    type,
    perks,
    positionOpen,
    keywords,
    featuredImage,
    image: featuredImage,
    remoteOnly,
    vacancyCount,
  };

  return (
    <Layout pageMetaData={pageMetaData} path={`jobs/${slug}`}>
      <section className="container">
        {positionOpen === true ? (
          <>
            <div className="row justify-content-center">
              <div className="col-lg-10 text-start col-centered">
                <p className="small">
                  <a href="/careers/" className=" text-primary text-uppercase">
                    {category}
                  </a>
                </p>
                <div className="d-flex justify-content-between flex-column flex-sm-row border-bottom">
                  <div className="mb-3">
                    <h1 className="mb-0">{title}</h1>
                    <div className="d-flex">
                      <div className="pe-3 border-right">
                        <FontAwesomeIcon
                          icon={faMapMarkedAlt}
                          className="me-1 text-primary"
                        />
                        <span className="fw-bold text-primary">
                          Kathmandu, Nepal
                        </span>
                      </div>
                      {remoteEligible ? (
                        <div className="ps-3 pe-3 border-right">
                          <FontAwesomeIcon
                            icon={faLaptopHouse}
                            className="me-1 text-primary"
                          />
                          <span className="text-primary fw-bold">
                            Remote Work
                          </span>
                        </div>
                      ) : (
                        <div className="ps-3">
                          <FontAwesomeIcon
                            icon={faTimes}
                            className="me-1 text-primary"
                          />
                          <span className="text-primary fw-bold">
                            Remote Work
                          </span>
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

                {/* <p className="text-muted mb-0">Remote Available</p> */}
              </div>
            </div>
            <div className="row justify-content-center">
              <Col md={10} sm={12}>
                <p className="mb-3 lead" />
                <p>
                  At Truemark, we love crafting great quality code without
                  losing sight on the importance of business idea validation. We
                  believe our people are our greatest asset and we’re always
                  looking for bright new people and personalities to join our
                  team.
                </p>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <p />
              </Col>

              <div className="col-sm-5 job_details">
                <h5 className="text-primary">Job Description</h5>
                <ul className="ms-0 pe-0 pe-md-3">
                  {jobDescriptions.map((jobDescription) => (
                    <li>{jobDescription}</li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-5 job_details">
                <h5 className="text-primary">Skills</h5>
                <ul className="ms-0">
                  {skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
              {perks ? (
                <div className="col-sm-10 job_details">
                  <h5 className="text-primary">Renumeration</h5>
                  <ul className="ms-0">
                    {perks.map((perk) => (
                      <li>{perk}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="col-12 py-5 text-center">
                <ButtonWithModal
                  text="Apply for this Job"
                  title="Apply for this Job"
                  subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
                  modalType="cv"
                  className="mt-md-0 primary mb-0"
                />
                <Link
                  to="/careers/#openpositions"
                  className="btn btn-primary outlined ms-0 ms-sm-3"
                >
                  All Jobs
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="row justify-content-center">
            <Col md={12}>
              <div className="header text-center">
                <div className="header-tag">You want to</div>
                <h2>Work With Us ?</h2>
              </div>
            </Col>
            <div className="job_box no-job text-center mt-4">
              <img
                className="job-image mb-4"
                src={cvIcon}
                alt="cv icon"
              />
              <h3>Sorry, this position is not available at this time.</h3>
              <p className="text-secondary mb-5 mb-md-4">
                If you are interested in future opportunities, please send us
                your CV!
              </p>
              <ButtonWithModal
                text="Send us your CV"
                title="Send us your CV"
                subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
                modalType="cv"
                className="mt-md-0 mb-0"
              />
              <Link
                to="/careers#openpositions"
                className="btn btn-lg btn-primary outlined ms-lg-2 ms-md-2"
              >
                Find more jobs
                <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
              </Link>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default JobPostTemplate;

export const query = graphql`
  query JobQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}, frontmatter: {type: {eq: "job"}}) {
      timeToRead
      html
      tableOfContents
      frontmatter {
        uid
        title
        description
        datePosted
        validityInDays
        monthsOfExperience
        educationRequirements
        salaryMin
        salaryMax
        keywords
        category
        tags
        slug
        skills
        jobDescriptions
        type
        perks
        remoteOnly
        vacancyCount
        positionOpen
        remoteEligible
        image: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;
