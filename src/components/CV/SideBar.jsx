import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Badge } from 'reactstrap';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';

const CVSideBar = ({
  stackExperiences,
  tools,
  academics,
  firstName,
  location,
}) => (
  <Col lg={4} md={12} className="mt-5 mt-lg-0">
    <Row>
      <Col lg={12} md={6}>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="skills border-bottom mb-3">
              <h3 className="h6 mb-3">Skills</h3>
              <ul className="ms-0 ps-0 d-flex flex-wrap">
                {stackExperiences.map((skill) => (
                  <li
                    className="ps-0 me-1 mb-0"
                    key={skill.title || skill.name}
                  >
                    <Badge color="primary">{skill.title || skill.name}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="experience mb-3 border-bottom">
              <h3 className="h6 mb-3">Experience</h3>
              <ul className="ms-0 ps-0">
                {stackExperiences
                  .filter(
                    (experience) =>
                      experience.duration || experience.yearsOfExperience
                  )
                  .map((experience) => (
                    <li key={experience.title || experience.name}>
                      {experience.title || experience.name}{' '}
                      <span className="float-end">
                        {experience.duration ||
                          `${experience.yearsOfExperience}  Yrs`}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="skills mb-3 border-bottom">
              <h3 className="h6 mb-3">Tools</h3>
              <ul className="ms-0 ps-0 d-flex  flex-wrap">
                {tools.map((tool, index) => (
                  <li className="mb-0 me-1" key={`tool-${index}`}>
                    <Badge color="primary">{tool.name || tool}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Col>

      <Col lg={12} md={6}>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="education mb-3 border-bottom">
              <h3 className="h6 mb-3">Education</h3>
              <ul className="ms-0 ps-0">
                {academics.map((academic, index) => (
                  <li
                    className="mb-3"
                    key={`academic-${index}`}
                    id={`academic-${index}`}
                  >
                    <h5 className="mb-2">
                      {academic.faculty || academic.studyType}
                    </h5>
                    <p className="mb-2 text-secondary">
                      {academic.institution}
                    </p>
                    <p className=" text-secondary">
                      <FontAwesomeIcon icon={faClock} className="me-1" />{' '}
                      {`${academic.startDate} - ${academic.endDate}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="week border-bottom mb-3">
              <h3 className="h6">Available Days</h3>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex justify-content-center align-items-center weekday disabled">
                  S
                </div>
                <div className="d-flex justify-content-center align-items-center weekday">
                  M
                </div>
                <div className="d-flex justify-content-center align-items-center weekday">
                  T
                </div>
                <div className="d-flex justify-content-center align-items-center weekday">
                  W
                </div>
                <div className="d-flex justify-content-center align-items-center weekday">
                  T
                </div>
                <div className="d-flex justify-content-center align-items-center weekday">
                  F
                </div>
                <div className="d-flex justify-content-center align-items-center weekday disabled">
                  S
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div className="week border-bottom">
              <h3 className="h6 mb-3">Location</h3>
              <p>
                {`${location.city}, ${location.country} (${moment
                  .tz(location.timeZone)
                  .format('ha z')}, Local Time)`}
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    {/* <ButtonWithModal className="mt-4 w-100">{`HIRE ${firstName}`}</ButtonWithModal> */}
  </Col>
);

CVSideBar.propTypes = {
  stackExperiences: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  firstName: PropTypes.string.isRequired,
  academics: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default CVSideBar;
