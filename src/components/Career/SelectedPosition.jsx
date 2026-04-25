import React from 'react';
import { Col, Row } from 'reactstrap';

import ButtonWithModal from 'components/Button/ButtonWithModal';
import SocialShare from 'components/SocialShare';

const SelectedPosition = function (props) {
  const { data: post } = props;
  const {
    title,
    description,
    skills,
    tags,
    slug,
    jobDescriptions,
    perks,
    lucidHireJobId,
  } = post.frontmatter;  

  return (
    <Col md={8}>
      <section
        className="p-0"
        id={`pos-${slug}`}
        role="tabpanel"
        aria-labelledby={`pos-${slug}`}
      >
        <Row>
          <div className="col-12 mb-3">
            <h4 className="mb-4">{title}</h4>
            <div className="job-apply row justify-content-between ">
              <div className="col-md-5">
                <ButtonWithModal
                  text="Apply for this Job"
                  title="Apply for this Job"
                  subTitle="By sending us your CV you are indicating your consent for Truemark Pvt. Ltd. to process your personal details in order to help you learn about new job opportunities."
                  modalType="cv"
                  attributes={{
                    jobId: lucidHireJobId,
                  }}
                  className="py-2 mb-0 w-100"
                />
              </div>
              <div className="col-md-4">
                <div className="mb-3 share-container">
                  <SocialShare
                    path={`/jobs/${slug}`}
                    description={`Opportunity to work as ${title}`}
                    tags={tags}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 m-0">
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>

            <Col lg={6} md={12} className="pe-0 pe-md-4">
              <h5 className="text-primary">Job Description</h5>
              <ul className="ms-0 ps-0">
                {jobDescriptions.map((jobDescription, index) => (
                  <li key={`jd-${index}`}>{jobDescription}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6} md={12}>
              <h5 className="text-primary">Skills</h5>
              <ul className="ms-0 ps-0">
                {skills.map((skill) => (
                  <li key={`sk-${skill}`}>{skill}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6} md={12} className="pe-0 pe-md-4">
              <h5 className="text-primary">Renumeration</h5>
              <ul className="ms-0 ps-0">
                {perks.map((perk) => (
                  <li key={`prk-${perk}`}>{perk}</li>
                ))}
              </ul>
            </Col>
          </div>
        </Row>
      </section>
    </Col>
  );
};

export default SelectedPosition;
